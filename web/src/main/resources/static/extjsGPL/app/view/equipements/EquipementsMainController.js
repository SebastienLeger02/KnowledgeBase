Ext.define('NovaAdmin.view.equipements.EquipementsMainController' , {
    extend:'Ext.app.ViewController',
    alias:'controller.equipementsMainController',


    init : function() {
      /*  this.lookupReference('buttonAddSousCategorie').disable(true);
        this.lookupReference('buttonEditSousCategorie').disable(true);
        this.lookupReference('buttonDeleteSousCategorie').disable(true);

        this.lookupReference('buttonAddFinalEquipements').disable(true);
        this.lookupReference('buttonEditFinalEquipements').disable(true);
        this.lookupReference('buttonDeleteFinalEquipements').disable(true);
    */},

    buttonDisabledSousCategorie : function() {
       /* var categoryId = this.lookupReference('gridSousCategorie').record.get('id');
        debugger;
        if(categoryId === "") {
            this.lookupReference('buttonAddSousCategorie').setDisabled(false);
        } */
        this.lookupReference('buttonAddSousCategorie').setDisabled(false);
        this.lookupReference('buttonEditSousCategorie').setDisabled(false);
        this.lookupReference('buttonDeleteSousCategorie').setDisabled(false);
    },

    buttonDisabledEquipmentType : function() {
        this.lookupReference('buttonAddFinalEquipements').setDisabled(false);
        this.lookupReference('buttonEditFinalEquipements').setDisabled(false);
        this.lookupReference('buttonDeleteFinalEquipements').setDisabled(false);
    },


    //--------------------------------------------------------------------------
    //------------------------------ Windows SousCategorie ---------------------

    openWindowAddSousCategorie: function() {
        Ext.create('NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.WindowAddSousCategorie',
            {
                viewModel:{ // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                    data: {
                        categoryId:this.lookupReference('gridCategorie').selection.id
                    }
                },
                listeners: {
                    scope: this,
                    addSousCategorieEquipements : this.onAddSousCategorieEquipements
                }
            }).show();
    },

    // --- Reload after grid Succes
    onAddSousCategorieEquipements : function() {

        this.lookupReference('gridSousCategorie').store.reload();
    },


    openWindowEditSousCategorie: function() {
        debugger;
        Ext.Ajax.request({
            method: 'GET',
            scope: this,
            url: '/equipements/getSousCategorieEditWindow',
            params: {
                subCategoryId: this.lookupReference('gridSousCategorie').selection.id //this.getViewModel().data.subCategoryId //subCategoryId
            },

            success: function (response) { //Une fois la requete effectué , renvoi un message
                var sousCategorie = JSON.parse(response.responseText);
                Ext.create('NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.WindowEditSousCategorie', {
                    viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                        data: {
                            sousCategorie : sousCategorie
                            //subCategoryId: this.lookupReference('gridSousCategorie').selection.id
                        }
                    },
                    listeners: {
                        scope: this,
                        editSousCategorieEquipements : this.onEditSousCategorieEquipements
                    }
                }).show();
            },
            failure: function (response) {
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
    },

    // --- Reload after grid Succes
    onEditSousCategorieEquipements : function() {
        debugger;
        this.lookupReference('gridSousCategorie').store.reload();
    },



    deleteRecordSousCategoryGrid : function() {
        //Ext.create('').show();
        var grid = this.lookupReference('gridSousCategorie');
        var sousCategorieId = grid.selection.id;
        var sousCategorieNom = grid.selection.data.name;

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/equipements/deleteSousCategorie' ,
            method: 'GET',
            params: {
                sousCategorieId: sousCategorieId
            },
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message
                debugger;

                Ext.Msg.show({
                    title:'Attention !',
                    message: 'Etes-vous sur de vouloir supprimer cet élément ?' + sousCategorieNom,
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(btn) {
                        if (btn === 'yes') {

                            var store = grid.store;
                            var index = store.findExact('id', sousCategorieId);
                            // var record = store.getAt(index);
                            // store.remove(record);
                            store.removeAt(index);
                            Ext.Msg.alert({
                                title:'Succès',message: 'La Sous-categorie à bien été supprimée',
                                scope: this
                            });
                            grid.reload();

                            console.log('Yes pressed');

                        } else

                            this.getView().close();

                        console.log('No pressed');
                    }
                });

            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });

    },


    //-----------------------------------------------------------------------------------
    // ----------------------------- Chargement des grilles -----------------------------

    loadGridEquipmentSubCategory: function (grid,record) {
        //var code = grid.selection.data.code;

        this.lookupReference('gridFinalEquipements').addCls("grid-display");
        debugger;
        this.lookupReference('gridSousCategorie').getStore().load({
            params: {
                categoryId : record.get('id') // record = item(ligne de la grille)

            }
        });
    },


    loadGridEquipmentType: function (grid,record) {
        this.lookupReference('gridFinalEquipements').removeCls("grid-display");
        debugger;
        this.lookupReference('gridFinalEquipements').getStore().load({
            params: {
                subCategoryId : record.get('id')
            },
            viewModel:{ // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                data: {
                    codeTOV:this.lookupReference('gridCategorie').selection.data.code
                }
            }
        });
    },

    //--------------------------------------------------------------------------------------------
    // ---------------------------------- WINDOWS GRID FINAL DIFF CODE ---------------------------
    // ---------------------------------------------- ADD -----------------------------------------

    openWindowAddWithCode: function() {
        me = this;
        if (this.lookupReference('gridCategorie').selection.data.code === 'CONT') {
            this.openWindowAddFinalEquipement();
        }
        else if(this.lookupReference('gridCategorie').selection.data.code === 'MANU') {
            this.openWindowManutentions();
        }
        else {
            this.openWindowConditionnement();
        }
    },

    //----------------------------------- Window Add Contenant

    openWindowAddFinalEquipement: function() {
        Ext.create('NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowAddFinalEquipement.WindowAddFinalEquipement', {
            viewModel:{ // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                data: {
                    subCategoryId:this.lookupReference('gridSousCategorie').selection.id,
                    type:this.lookupReference('gridCategorie').selection.data.code

                }
            },
            listeners: {
                scope: me,
                addFinalEquipements : me.onAddFinalEquipements
            }
        }).show();
    },


    onAddFinalEquipements : function() {
        debugger;
        this.lookupReference('gridFinalEquipements').store.reload();
    },

//----------------------------------- Window Add Manutention

    openWindowManutentions: function () {
        Ext.create('NovaAdmin.view.equipements.gridFinalEquipement.manutentions.windowAddFinalEquipement.WindowAddFinalEquipement', {
            viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                data: {
                    subCategoryId: this.lookupReference('gridSousCategorie').selection.id,
                    type: this.lookupReference('gridCategorie').selection.data.code
                },
                listeners: {
                    scope: me,
                    addFinalEquipements: me.onAddFinalEquipements
                }
            }
        }).show();
    },

    //----------------------------------- Window Add Conditionnement

    openWindowConditionnement : function () {
        Ext.create('NovaAdmin.view.equipements.gridFinalEquipement.conditionnement.windowAddFinalEquipement.WindowAddFinalEquipement', {
            viewModel:{ // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                data: {
                    subCategoryId:this.lookupReference('gridSousCategorie').selection.id,
                    type:this.lookupReference('gridCategorie').selection.data.code
                },
                listeners: {
                    scope: me,
                    addFinalEquipements: me.onAddFinalEquipements
                }
            }
        }).show();
    },


    //--------------------------------------------------------------------------------------------
    // ---------------------------------- WINDOWS GRID FINAL DIFF CODE ---------------------------
    // ---------------------------------------------- EDIT -----------------------------------------

    openWindowEditWithCode: function() {
        me = this;
        if (this.lookupReference('gridCategorie').selection.data.code === 'CONT') {
            this.openWindowEditFinalEquipement();
        }
        else if(this.lookupReference('gridCategorie').selection.data.code === 'MANU') {
            this.openWindowEditFinalEquipementManu();
        }
        else {
            this.openWindowEditFinalEquipementCond();
        }
    },

    openWindowEditFinalEquipement: function() {
        var record = this.lookupReference('gridFinalEquipements').getSelection()[0];
        debugger;
        Ext.create('NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowAddFinalEquipement.WindowAddFinalEquipement', {
            viewModel:{ // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                data: {
                    subCategoryId:this.lookupReference('gridSousCategorie').selection.id,
                    gridData:this.lookupReference('gridFinalEquipements').selection.store.data.items
                }
            },
            listeners: {
                scope: this,
                editFinalEquipements : this.onEditFinalEquipements
            },

            recordEquipFinalCont: record

        }).show();
    },

    openWindowEditFinalEquipementManu: function() {
        var record = this.lookupReference('gridFinalEquipements').getSelection()[0];
        Ext.create('NovaAdmin.view.equipements.gridFinalEquipement.manutentions.windowAddFinalEquipement.WindowAddFinalEquipement', {
            viewModel:{ // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                data: {
                    subCategoryId:this.lookupReference('gridSousCategorie').selection.id
                }
            },
            listeners: {
                scope: this,
                editFinalEquipements : this.onEditFinalEquipements
            },
            recordEquipTypeManu: record

        }).show();
    },

    openWindowEditFinalEquipementCond: function() {
        var record = this.lookupReference('gridFinalEquipements').getSelection()[0];
        Ext.create('NovaAdmin.view.equipements.gridFinalEquipement.conditionnement.windowAddFinalEquipement.WindowAddFinalEquipement', {
            viewModel:{ // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                data: {
                    subCategoryId:this.lookupReference('gridSousCategorie').selection.id
                }
            },
            listeners: {
                scope: this,
                editFinalEquipements : this.onEditFinalEquipements
            },
            recordEquipFinalCond: record

        }).show();
    },

    onEditFinalEquipements : function() {
        debugger;
        this.lookupReference('gridFinalEquipements').store.reload();
    },



    loadGridAndButtonDisabledEquipmentSubCategory : function() {
        this.loadGridEquipmentSubCategory();
        this.buttonDisabledFalse()
    },

// ------------------------------------------------------------------------------------------------------
// ---------------------------------------------- Supprimer un EquipmentType -----------------------------

    deleteRecordEquipmentTypeGrid : function() {

        var grid = this.lookupReference('gridFinalEquipements');
        var equipmentTypeId = grid.selection.id;
        var equipmentTypeNom = grid.selection.data.name;

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/equipements/deleteEquipmentType' ,
            method: 'GET',
            params: {
                sousCategorieId: equipmentTypeId
            },
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message
                debugger;

                Ext.Msg.show({
                    title:'Attention !',
                    message: 'Etes-vous sur de vouloir supprimer cet élément ?' + '' + equipmentTypeNom,
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(btn) {
                        if (btn === 'yes') {

                            var store = grid.store;
                            var index = store.findExact('id', equipmentTypeId);
                            store.removeAt(index);
                            Ext.Msg.alert({
                                title:'Succès',message: 'La Sous-categorie à bien été supprimée',
                                scope: this
                            });
                            grid.reload();

                            console.log('Yes pressed');

                        } else

                            this.getView().close();

                        console.log('No pressed');
                    }
                });

            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });

    }

});
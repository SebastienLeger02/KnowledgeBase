Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.DechetsTOVGridController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dechetsTOVGridController',


    loadGridWasteSubCategory : function(grid, record) {
        this.lookupReference('gridFinalDechetsTOVGrid').addCls("grid-display");

        this.lookupReference('gridSousCategorieTovGrid').getStore().load({
            params: {
                categoryId : record.get('id') // record = item(ligne de la grille)
            }
        });
    },

    loadGridWasteTypeCategory: function(grid,record) {
        this.lookupReference('gridFinalDechetsTOVGrid').removeCls("grid-display");

        this.lookupReference('gridFinalDechetsTOVGrid').getStore().load({
            params: {
                subCategoryId : record.get('id') // record = item(ligne de la grille)
            }
        });
    },

    // -------------------- Window Categorie(Add,Edit,Delete) -----------------------

    openWindowAddCategorieTOVGrid : function () {
        var me = this;
        Ext.create('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowAddCategorieTOVGrid',
            {
                listeners: {
                    scope: me,
                    addCategory : me.onAddCategory
                }
            }).show();
    },

    onAddCategory : function() {
        debugger;
        this.lookupReference('gridCategorieTovGrid').store.reload();
    },

    openWindowEditCategorieTOVGrid :function () {
        Ext.Ajax.request({
            method: 'GET',
            scope: this,
            url: '/dechets/editWasteCategorieTov',
            params: {
                categorieId: this.lookupReference('gridCategorieTovGrid').selection.id //this.getViewModel().data.subCategoryId //subCategoryId
            },

            success: function (response) { //Une fois la requete effectué , renvoi un message
                var me = this;
                var categorieDechet = JSON.parse(response.responseText);
                Ext.create('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowEditCategorieTOVGrid', {
                    viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                        data: {
                            categorieDechet : categorieDechet
                        }
                    },
                    listeners: {
                        scope: me,
                        editCategory : me.onEditCategory
                    }
                }).show();
            },
            failure: function (response) {
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });

    },

    onEditCategory : function() {
        debugger;
        this.lookupReference('gridCategorieTovGrid').store.reload();
    },

    deleteRecordGridCategorie : function() {
        var grid = this.lookupReference('gridCategorieTovGrid');
        var id = grid.selection.id;
        // store.remove(line);
        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/dechets/deleteWasteCategorieTov' ,
            method: 'GET',
            params: {
                id: id
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
                    message: 'Etes-vous sur de vouloir supprimer cet élément ?' ,
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(btn) {
                        if (btn === 'yes') {

                            var store = grid.store;
                            var index = store.findExact('id', id);
                            store.removeAt(index);

                            Ext.Msg.alert({
                                title:'Succès',message: 'La Catégorie à bien été supprimé',
                                scope: this
                            });
                            grid.store.reload();
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

    // -------------------- Window Sous-Categorie(Add,Edit,Delete) -----------------------

    openWindowAddSousCategorieTOVGrid: function () {
        var me = this;
        Ext.create('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowAddSousCategorieTOVGrid',
            {
                viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                    data: {
                        categoryId: this.lookupReference('gridCategorieTovGrid').selection.id,
                        categoryName: this.lookupReference('gridCategorieTovGrid').selection.data.name
                    }
                },
                listeners: {
                    scope: me,
                    addSubCategory : me.onAddSubCategory
                }

            }).show();
    },

    onAddSubCategory : function() {
        debugger;
        this.lookupReference('gridSousCategorieTovGrid').store.reload();
    },

    openWindowEditSousCategorieTOVGrid: function () { debugger;
        Ext.Ajax.request({
            method: 'GET',
            scope: this,
            url: '/dechets/editWasteSousCategorieTov',
            params: {
                sousCategorieId: this.lookupReference('gridSousCategorieTovGrid').selection.id //this.getViewModel().data.subCategoryId //subCategoryId
            },

            success: function (response) { //Une fois la requete effectué , renvoi un message
                var me = this;
                var sousCategorieDechet = JSON.parse(response.responseText);
                Ext.create('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowEditSousCategorieTOVGrid', {
                    viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                        data: {
                            sousCategorieDechet: sousCategorieDechet,
                            categoryId: this.lookupReference('gridCategorieTovGrid').selection.id,
                            categoryName: this.lookupReference('gridCategorieTovGrid').selection.data.name
                        }
                    },
                    listeners: {
                        scope: me,
                        editSubCategory : me.onEditSubCategory
                    }
                }).show();
            },
            failure: function (response) {
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
        /*
        Ext.create('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowEditSousCategorieTOVGrid',
            {
                viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                    data: {
                        categoryId: this.lookupReference('gridCategorieTovGrid').selection.id,
                        categoryName: this.lookupReference('gridCategorieTovGrid').selection.data.name
                    }
                }
            }).show(); */
    },

    onEditSubCategory : function() {
        debugger;
        this.lookupReference('gridSousCategorieTovGrid').store.reload();
    },

    deleteRecordGridSousCategorie : function() {
        var grid = this.lookupReference('gridSousCategorieTovGrid');
        var sousCategoryId = grid.selection.id;

        // store.remove(line);
        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/dechets/deleteWasteSousCategorieTov' ,
            method: 'GET',
            params: {
                sousCategoryId: sousCategoryId
            },
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message
                debugger;

                Ext.Msg.show({
                    title: 'Attention !',
                    message: 'Etes-vous sur de vouloir supprimer cet élément ?',
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function (btn) {
                        if (btn === 'yes') {

                            var store = grid.store;
                            var index = store.findExact('id', sousCategoryId);
                            store.removeAt(index);

                            grid.reload();
                            Ext.Msg.alert({
                                title: 'Succès', message: 'La Sous-catégorie à bien été supprimé',
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

    // -------------------- Window TOV(Add,Edit,Delete) -----------------------

    openWindowAddTOVGrid : function () {

        debugger;
        var me = this;
        Ext.create('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowAddTOVGrid',
            {
                viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                    data: {
                        subCategoryId: this.lookupReference('gridSousCategorieTovGrid').selection.id,
                        subCategoryName: this.lookupReference('gridSousCategorieTovGrid').selection.data.name,
                        categoryName: this.lookupReference('gridCategorieTovGrid').selection.data.name
                    }
                },
                listeners: {
                    scope: me,
                    addFinalTOV : me.onAddFinalTOV
                }
            }).show();
    },

    onAddFinalTOV : function() {
        debugger;
        this.lookupReference('gridFinalDechetsTOVGrid').store.reload();
    },


    openWindowEditTOVGrid : function () { debugger;
        Ext.Ajax.request({
            method: 'GET',
            scope: this,
            url: '/dechets/editWasteTov',
            params: {
                sousCategorieId: this.lookupReference('gridFinalDechetsTOVGrid').selection.id //this.getViewModel().data.subCategoryId //subCategoryId
            },

            success: function (response) { //Une fois la requete effectué , renvoi un message
                var me = this;
                var finalTovDechet = JSON.parse(response.responseText);
                Ext.create('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowEditTOVGrid', {
                    viewModel: { // Récupère l'ID de la categorie selectionné pour l'envoyer dans les Sous-categories
                        data: {
                            finalTovDechet : finalTovDechet,
                            subCategoryId: this.lookupReference('gridSousCategorieTovGrid').selection.id,
                            subCategoryName: this.lookupReference('gridSousCategorieTovGrid').selection.data.name,
                            categoryName: this.lookupReference('gridCategorieTovGrid').selection.data.name
                        }
                    },
                    listeners: {
                        scope: me,
                        editFinalTOV : me.onEditFinalTOV
                    }
                }).show();
            },
            failure: function (response) {
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
    },

    onEditFinalTOV : function() {
        debugger;
        this.lookupReference('gridFinalDechetsTOVGrid').store.reload();
    },

    deleteRecordGridFinalTov : function() {

        var grid = this.lookupReference('gridFinalDechetsTOVGrid');
        var finalDechetId = grid.selection.id;

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url: '/dechets/deleteWasteTov',
            method: 'GET',
            params: {
                id: finalDechetId
            },
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message

                Ext.Msg.show({
                    title:'Attention !',
                    message: 'Etes-vous sur de vouloir supprimer cet élément ?',
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(btn) {
                        if (btn === 'yes') {

                            var store = grid.store;
                            var index = store.findExact('id', finalDechetId);
                            // var record = store.getAt(index);
                            // store.remove(record);
                            store.removeAt(index);
                            Ext.Msg.alert({
                                title:'Succès',message: 'L\'élément à bien été supprimée',
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
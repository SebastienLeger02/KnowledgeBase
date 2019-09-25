Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.WindowAddSousCategorieController' , {
    extend:'Ext.app.ViewController',
    alias:'controller.windowAddSousCategorieController',

    init :function() {

    },

    openWindowAddUrlImage: function() {
        Ext.create('NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.windowAddImageUrl.WindowAddImageUrl').show();
    },

    closeWindow : function() {
        this.getView().close();
    },


    submit: function() {  // permet de récupérer les informations des champs
        var newSubCategory = {
            //id:id,
            name:this.lookupReference('textfieldSousCategorie').getValue(),
            family:this.lookupReference('comboFamily').getValue(),
            //imageUrl:this.lookupReference('urlImagePicto').getValue(),
            subFamily:this.lookupReference('comboSubFamily').getValue(),
            treatment:this.lookupReference('comboTreatment').getValue(),
            categoryId: this.getViewModel().get('categoryId'),
            version: 0 // provisoire
        };

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/equipements/addSousCategorie' ,
            method: 'POST',
            jsonData: newSubCategory,
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message
                 Ext.Msg.alert({
                        title:'Succès',message: 'Une nouvelle sous-catégorie d\'équipement à été enregistré',
                        fn: function() {
                            this.getView().close();
                        },
                        scope: this
                    });
                this.fireViewEvent('addSousCategorieEquipements');
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
        //this.up('gridSousCategorie').reload();
    }



});
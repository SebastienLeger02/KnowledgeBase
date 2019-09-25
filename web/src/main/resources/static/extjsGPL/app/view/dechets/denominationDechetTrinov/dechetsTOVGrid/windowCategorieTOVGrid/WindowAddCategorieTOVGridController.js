Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowAddCategorieTOVGridController', {
    extend:'Ext.app.ViewController',
    alias:'controller.windowAddCategorieTOVGridController',

    init: function () {

    },

    closeWindow : function() {
        this.getView().close();
    },

    submit: function() {  // permet de récupérer les informations des champs
        var newCategory = {
            name:this.lookupReference('textfieldCategorieTov').getValue(),
            type:'tov',
            version:0
        };

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/dechets/addWasteCategorieTov' ,
            method: 'POST',
            jsonData: newCategory,
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message

                var me = this;
                Ext.Msg.alert({
                    title:'Succès',message: 'Une nouvelle catégorie déchet à été enregistré',
                    fn: function() {
                        this.getView().close();
                    },
                    scope: me

                });

                me.fireViewEvent('addCategory');
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
    }

});
Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowAddTOVGridController', {
    extend:'Ext.app.ViewController',
    alias:'controller.windowAddTOVGridController',


    closeWindow : function() {
        this.getView().close();
    },

    submit : function () { debugger;
        var newTov = {
            name:this.lookupReference('textfieldDenominationTov').getValue(),
            subCategoryId: this.getViewModel().get('subCategoryId') ,  // On le recupère du viewModel dans DecgetsTovGridControlleur
            active:true,
            version:0,
            valorisable:false
            // "code" se trouve dans le controller java
        };
        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/dechets/addWasteTov',
            method: 'POST',
            jsonData: newTov,
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message
                Ext.Msg.alert({
                    title:'Succès',message: 'Une nouvelle catégorie déchet à été enregistré',
                    fn: function() {
                        this.getView().close();
                    },
                    scope: this
                });
debugger;
                this.fireViewEvent('addFinalTOV');
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
    }


});
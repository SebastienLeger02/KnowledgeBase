Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowEditTOVGridController', {
    extend:'Ext.app.ViewController',
    alias:'controller.windowEditTOVGridController',

    init : function () {

    },

    closeWindow : function() {
        this.getView().close();
    },

    getData: function () {
        data = {
            name:this.lookupReference('textfieldDenominationTov').get('name').setValue(data.name)
        };
    },

    afterRender : function() { debugger;
        var TovFinalDechet = this.getViewModel().get('finalTovDechet');

        if(TovFinalDechet.id){
            this.lookupReference('textfieldDenominationTov').setValue(TovFinalDechet.name);
        }
        else{
            Ext.Msg.alert('Echec', 'AfterRender ne fonctionne pas');
        }
    },

    submit : function () {
        var newSubCategory = {
            name:this.lookupReference('textfieldSousCategorieTov').getValue(),
            categoryId: this.getViewModel().get('categoryId') ,  // On le recupère du viewModel dans DecgetsTovGridControlleur
            version:0
            // "code" se trouve dans le controller java
        };
        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/dechets/addWasteSousCategorieTov' ,
            method: 'POST',
            jsonData: newSubCategory,
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
                this.fireViewEvent('editFinalTov')
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
    }



});
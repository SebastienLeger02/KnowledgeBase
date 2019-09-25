Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowEditCategorieTOVGridController', {
    extend:'Ext.app.ViewController',
    alias:'controller.windowEditCategorieTOVGridController',

    closeWindow : function() {
        this.getView().close();
    },

    getData: function () {
        data = {
           name:this.lookupReference('textfieldCategorieTov').get('name').setValue(data.name)
        };
    },

    afterRender : function() {
        var categorieDechet = this.getViewModel().get('categorieDechet');

        if(categorieDechet.id){
            this.lookupReference('textfieldCategorieTov').setValue(categorieDechet.name);
        }
        else{
            Ext.Msg.alert('Echec', 'AfterRender ne fonctionne pas');
        }
    },

    submit : function () {
        var newCategory = {
            name:this.lookupReference('textfieldCategorieTov').getValue(),
            categoryId: this.getViewModel().get('categoryId') ,  // On le recupère du viewModel dans DecgetsTovGridControlleur
            version:0,
            type:'tov'
            // "code" se trouve dans le controller java
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
                Ext.Msg.alert({
                    title:'Succès',message: 'Une nouvelle catégorie déchet à été enregistré',
                    fn: function() {
                        this.getView().close();
                    },
                    scope: this
                });

                this.fireViewEvent('editCategory');
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });

    }

});
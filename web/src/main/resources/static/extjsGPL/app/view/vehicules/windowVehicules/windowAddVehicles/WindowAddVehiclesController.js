Ext.define('NovaAdmin.view.vehicules.windowVehicules.windowAddVehicles.WindowAddVehiclesController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowAddVehiclesController',



    onAddVehicle : function () {
        var controller = this;
        var form = this.lookupReference('formWindowAddVehicle');
        var values = form.getValues();

        if(values.transportVrac)
            values.transportVrac = values.transportVrac.replace('on', 1);

        if(values.dechetConditionne)
            values.dechetConditionne = values.dechetConditionne.replace('on', 1);


        if (form.isValid()) {
            Ext.Ajax.request({
                url:'vehicles/addNewVehicle',
                method: 'POST',
                jsonData:values,
                scope:controller,
                headers:
                    {
                        'Content-Type': 'application/json'
                    },
                success: function (response) {
                    Ext.Msg.alert({
                        title:'Succès',message: 'Un nouveau véhicule à été enregistré',
                        fn: function() {
                            this.getView().close();
                        },
                        scope: this
                    });
                    this.fireViewEvent("refreshAfterAddNewVehicle");

                },
                failure: function (response) {
                    Ext.Msg.alert('Erreurs', 'Une erreurs dans le serveurs, veuillez contactez le support');
                    var window = this.getView().up('window');
                    if(window){
                        window.close();
                    }
                }
            });


        } else {
            Ext.Msg.alert('Données incorrect', 'Vous avez des erreurs dans le formulaire')
        }

    },

    
    
    afterRender : function () {

        if (this.getView().recordVehicle) {
            var form = this.lookupReference('formWindowAddVehicle');
            form.loadRecord(this.getView().recordVehicle);
        }
    }

    /*
    deleteRecordSousCategoryGrid : function() {
        //Ext.create('').show();
        var form = this.lookupReference('formWindowAddVehicle');
        var vehicleId = form.selection.id;
        var vehicleNom = form.selection.data.name;

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/vehicles/deleteVehicle' ,
            method: 'GET',
            params: {
                sousCategorieId: vehicleId
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
                    message: 'Etes-vous sur de vouloir supprimer cet élément ?' + vehicleNom,
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

    },*/

});
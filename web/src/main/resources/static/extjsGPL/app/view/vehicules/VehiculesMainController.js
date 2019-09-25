Ext.define('NovaAdmin.view.vehicules.VehiculesMainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vehiculesMainController',

    openWindowAddVehicle : function() {
        Ext.create('NovaAdmin.view.vehicules.windowVehicules.windowAddVehicles.WindowAddVehicles',{
            listeners: {
                scope: this,
                refreshAfterAddNewVehicle : this.onRefreshAfterAddNewVehicle
            }
        }).show();
    },


    openWindowEditVehicle : function () { debugger;
        var record = this.lookupReference('gridVehicle').getSelection()[0];
        Ext.create('NovaAdmin.view.vehicules.windowVehicules.windowAddVehicles.WindowAddVehicles',{
            listeners: {
                scope: this,
                refreshAfterAddNewVehicle : this.onRefreshAfterAddNewVehicle

            },
            recordVehicle: record
        }).show();

    },

    onRefreshAfterAddNewVehicle : function(){
        this.lookupReference('gridVehicle').store.reload();
    },


    deleteVehicle : function () {

        //Ext.create('').show();
        var grid = this.lookupReference('gridVehicle');
        var id = grid.selection.id;
        var vehicleName = grid.selection.data.name;

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/vehicles/deleteVehicle' ,
            method: 'GET',
            params: {

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
                    message: 'Etes-vous sur de vouloir supprimer cet élément ?' + '' + vehicleName ,
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(btn) {
                        if (btn === 'yes') {

                            var store = grid.store;
                            var index = store.findExact('id', id);
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


    }

});
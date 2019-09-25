Ext.define('NovaAdmin.store.vehicle.AddVehicleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.addVehicleStore',
    storeId: 'addVehicleStore',

    model:'NovaAdmin.model.vehicle.VehicleModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/vehicles/addNewVehicle',
        actionMethods: {
            create : 'POST',
            read   : 'POST',
            update : 'POST',
            destroy: 'POST'
        },
        reader: {
            type: 'json',
            autoLoad: true

        }
    }
});
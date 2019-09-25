Ext.define('NovaAdmin.store.vehicle.VehicleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.vehicleStore',
    storeId: 'vehiculeStore',

    model:'NovaAdmin.model.vehicle.VehicleModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/vehicles/getVehicle',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        reader: {
            type: 'json',
            autoLoad: true

        }
    }
});
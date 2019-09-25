Ext.define('NovaAdmin.store.vehicle.VehicleGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.vehicleGridStore',
    storeId: 'gridVehicle',

    model:'NovaAdmin.model.vehicle.VehicleGridModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/vehicles/getGridVehicle',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
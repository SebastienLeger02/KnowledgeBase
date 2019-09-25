Ext.define('NovaAdmin.store.equipements.EquipementVehicleTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipmentVehicleTagFieldStore',
    storeId: 'equipmentVehicleTagFieldStore',

    model:'NovaAdmin.model.vehicle.VehicleModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/equipmentVehicleTagField',
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
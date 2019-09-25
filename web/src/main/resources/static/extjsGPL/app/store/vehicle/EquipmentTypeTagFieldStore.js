Ext.define('NovaAdmin.store.vehicle.EquipmentTypeTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipmentTypeTagFieldStore',
    storeId: 'equipmentTypeTagFieldStore',

    model:'NovaAdmin.model.vehicle.VehicleModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/vehicles/equipmentTypeTagField',
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
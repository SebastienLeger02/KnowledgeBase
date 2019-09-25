Ext.define('NovaAdmin.store.equipements.EquipementManufacturerTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipmentManufacturerTagFieldStore',
    storeId: 'equipmentManufacturerTagFieldStore',

    model:'NovaAdmin.model.equipements.EquipmentManufacturerModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/equipmentManufacturerTagField',
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
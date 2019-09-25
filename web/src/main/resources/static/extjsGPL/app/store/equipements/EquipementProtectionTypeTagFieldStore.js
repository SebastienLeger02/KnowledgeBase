Ext.define('NovaAdmin.store.equipements.EquipementProtectionTypeTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipementProtectionTypeTagFieldStore',
    storeId: 'equipementProtectionTypeTagFieldStore',

    model:'NovaAdmin.model.equipements.EquipementProtectionTypeModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/equipmentProtectionTypeTagField',
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
Ext.define('NovaAdmin.store.equipements.EquipementRetentionTypeTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipementRetentionTypeTagFieldStore',
    storeId: 'equipementRetentionTypeTagFieldStore',

    model:'NovaAdmin.model.equipements.EquipementRetentionTypeModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/equipmentRetentionTypeTagField',
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
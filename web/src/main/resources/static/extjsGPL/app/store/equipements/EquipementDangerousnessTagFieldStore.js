Ext.define('NovaAdmin.store.equipements.EquipementDangerousnessTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipementDangerousnessTagFieldStore',
    storeId: 'equipementDangerousnessTagFieldStore',

    model:'NovaAdmin.model.equipements.EquipementDangerousnessModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/equipmentDangerousnessTagField',
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
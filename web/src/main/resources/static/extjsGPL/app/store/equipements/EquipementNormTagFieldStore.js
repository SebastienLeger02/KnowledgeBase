Ext.define('NovaAdmin.store.equipements.EquipementNormTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipementNormTagFieldStore',
    storeId: 'equipementNormTagFieldStore',

    model:'NovaAdmin.model.equipements.EquipementNormModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/equipmentNormTagField',
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
Ext.define('NovaAdmin.store.equipements.EquipementsStore', {
    extend:'Ext.data.Store',
    alias:'store.equipementsStore',
    storeId:'equipementsStore',

    model:'NovaAdmin.model.equipements.EquipementsModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/getEquipmentCategory',
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
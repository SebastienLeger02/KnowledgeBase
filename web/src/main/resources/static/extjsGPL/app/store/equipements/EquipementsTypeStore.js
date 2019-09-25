Ext.define('NovaAdmin.store.equipements.EquipementsTypeStore', {
    extend:'Ext.data.Store',
    alias:'store.equipementsTypeStore',
    storeId:'equipementsTypeStore',

    model:'NovaAdmin.model.equipements.EquipementsTypeModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/getEquipmentType',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        reader: {
            type: 'json'
        }
    }
});
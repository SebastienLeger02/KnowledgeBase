Ext.define('NovaAdmin.store.equipements.EquipementTypeGridStore', {
    extend:'Ext.data.Store',
    alias:'store.equipementsTypeGridStore',
    storeId:'equipementsTypeGridStore',

    model:'NovaAdmin.model.equipements.EquipementsTypeModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/getGridEquipmentType',
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
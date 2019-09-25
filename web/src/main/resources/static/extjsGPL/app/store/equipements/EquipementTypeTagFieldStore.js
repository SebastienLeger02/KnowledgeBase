Ext.define('NovaAdmin.store.equipements.EquipementTypeTagFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.equipmentTypeTagFieldStore',
    storeId: 'equipmentTypeTagFieldStore',

    model:'NovaAdmin.model.equipements.EquipementsTypeModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/equipmentTypeTagField',
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
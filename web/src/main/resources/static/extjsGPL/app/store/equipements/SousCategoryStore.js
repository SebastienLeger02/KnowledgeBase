Ext.define('NovaAdmin.store.equipements.SousCategoryStore', {
    extend:'Ext.data.Store',
    alias:'store.sousCategoryStore',
    storeId:'sousCategoryStore',

    model:'NovaAdmin.model.equipements.SousCategoryModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/getEquipmentSubCategory',
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
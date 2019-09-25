Ext.define('NovaAdmin.store.dechets.GridDechetSousCategorieStore', {
    extend: 'Ext.data.Store',
    alias: 'store.gridDechetSousCategorieStore',
    storeId: 'gridDechetSousCategorieStore',

    model:'NovaAdmin.model.dechets.GridDechetSousCategorieModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/dechets/getWasteSubCategory',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        reader: {
            type: 'json',
            autoLoad: true
        }
    }


});
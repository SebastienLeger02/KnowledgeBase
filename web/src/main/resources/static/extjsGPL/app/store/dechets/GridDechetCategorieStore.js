Ext.define('NovaAdmin.store.dechets.GridDechetCategorieStore', {
    extend: 'Ext.data.Store',
    alias: 'store.gridDechetCategorieStore',
    storeId: 'gridDechetCategorieStore',

    model:'NovaAdmin.model.dechets.GridDechetCategorieModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/dechets/getWasteCategory',
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
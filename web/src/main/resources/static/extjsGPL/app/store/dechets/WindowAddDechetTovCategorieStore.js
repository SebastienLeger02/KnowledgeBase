Ext.define('NovaAdmin.store.dechets.WindowAddDechetTovCategorieStore', {
    extend: 'Ext.data.Store',
    alias:'store.windowAddDechetTovCategorieStore',
    storeId:'windowAddDechetTovCategorieStore',

    model:'NovaAdmin.model.dechets.GridDechetCategorieModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/dechets/addWasteCategorieTov',
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
Ext.define('NovaAdmin.store.dechets.WindowAddDechetTovSousCategorieStore', {
    extend: 'Ext.data.Store',
    alias:'store.windowAddDechetTovSousCategorieStore',
    storeId:'windowAddDechetTovSousCategorieStore',

    model:'Nova.model.dechets.GridDechetSousCategorieModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/dechets/addWasteSousCategorieTov',
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
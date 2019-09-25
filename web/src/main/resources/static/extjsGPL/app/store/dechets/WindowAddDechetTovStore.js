Ext.define('NovaAdmin.store.dechets.WindowAddDechetTovStore', {
    extend: 'Ext.data.Store',
    alias: 'store.windowAddDechetTovStore',
    storeId: 'windowAddDechetTovStore',

    model:'NovaAdmin.model.dechets.GridDechetTovModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/dechets/addWasteTov',
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
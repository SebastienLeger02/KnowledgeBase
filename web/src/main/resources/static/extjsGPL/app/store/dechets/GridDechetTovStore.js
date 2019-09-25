Ext.define('NovaAdmin.store.dechets.GridDechetTovStore', {
    extend: 'Ext.data.Store',
    alias: 'store.gridDechetTovStore',
    storeId: 'gridDechetTovStore',

    model:'NovaAdmin.model.dechets.GridDechetTovModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/dechets/getWasteTov',
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
Ext.define('NovaAdmin.store.equipements.AddSousCategorieStore', {
    extend:'Ext.data.Store',
    alias:'store.addSousCategorieStore',
    storeId:'addSousCategorieStore',

    model:'NovaAdmin.model.equipements.SousCategoryModel',

    groupField:'starred',
    //groupDir:'ESC',

    proxy: {
        type:'ajax',
        url:'/equipements/addSousCategorie',
        actionMethods: {
            create : 'POST',
            read   : 'POST',
            update : 'POST',
            destroy: 'POST'
        },
        reader: {
            type: 'json'
        }
    }

});
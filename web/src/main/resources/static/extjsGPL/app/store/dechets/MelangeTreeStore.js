Ext.define('NovaAdmin.store.dechets.MelangeTreeStore', {
    extend:'Ext.data.TreeStore',
    alias:'store.melangeTreeStore',

    // model:'NovaAdmin.model.TreeDechetAssocTovNedModel',

    fields: [
        "name",
        "idx"
    ],

    root: {
        id: 0,
        name:'Melange',
        expanded: false,
        loaded: false
    },

    proxy: {
        type: 'ajax',
        url: 'dechets/treeWasteNed',
        reader: {
            type: 'json'
        }
    }
});
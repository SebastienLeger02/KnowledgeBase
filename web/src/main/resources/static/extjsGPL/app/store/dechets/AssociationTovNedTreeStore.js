Ext.define('NovaAdmin.store.dechets.AssociationTovNedTreeStore', {
    extend:'Ext.data.TreeStore',
    alias:'store.associationTovNedTreeStore',

   // model:'NovaAdmin.model.TreeDechetAssocTovNedModel',

    fields: [
        "name",
        "idx"
    ],

    root: {
        id: 0,
        name:'AssociationTovNed',
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
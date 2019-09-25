Ext.define('NovaAdmin.view.dechets.codificationDechets.associationNED-CED.AssociationNED-CED' , {
    extend:'Ext.panel.Panel',
    alias:'widget.associationNedCed',
    cls:'treePanel-main',

    requires: [
        'NovaAdmin.view.dechets.codificationDechets.associationNED-CED.AssociationNED-CEDController'
    ],

    controller:'associationNedCedController',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    padding:'5px 5px 5px 5px',
    margin:'10px 10px 10px 10px',

    flex:1,

    items: [{
        xtype: "treepanel",
        cls: 'treePanel-association-ned-ced treePanel-skinning',
        reference: 'treePanelAssociationNedCed',
        rootVisible: false,
        autoLoad: false,
        scrollable: true,
        store: {
            type: 'tree',
            autoLoad: true,

            fields: [
                "name"
            ],

            proxy: {
                type: 'ajax',
                url: 'dechets/treeWasteNedCed'
            }
        },
        flex: 1,
        maxHeight: 750,
        //height:600,
        columns: {
            items: [{
                xtype: 'treecolumn',
                cls: 'column-ned-ced-treePanel treePanel-skinning-column',
                reference: 'columnNedCedTreePanel',
                dataIndex: 'name',
                align: 'left',
                flex: 1
            }]
        }
    }]
});
Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.associationTovNed.AssociationTovNed', {
    extend:'Ext.panel.Panel',
    alias:'widget.dechetsAssociationTovNed',
    cls:'panel-association-tov-ned treePanel-main',

    requires: [
        'NovaAdmin.view.dechets.denominationDechetTrinov.associationTovNed.AssociationTovNedController',
        'NovaAdmin.store.dechets.AssociationTovNedTreeStore'
    ],

    controller:'dechetsAssociatonTovNedController',


    padding:'3px 3px 3px 3px',
    margin:'5px 15px 5px 10px',

    tabPosition: 'left',
    height:800,
    flex:1,

    scrollable:true,

    items: [{
        xtype: "treepanel",
        rootVisible:false,
        autoLoad:false,
        cls:'treePanel-association-tov-ned treePanel-skinning',
        reference:'treePanelAssocTovNed',
        //rootVisible:false,
        store: {
            type:'tree',
            autoLoad:true,
            //nodeType:'async',

            fields: [
                "name"
            ],

            proxy: {
                type: 'ajax',
                url: 'dechets/treeWasteNed'
            }
        },
        columns: {
            items: [{
                xtype:'treecolumn',
                cls:'association-tov-ned treePanel-skinning-column',
                reference:'columnIntituleTreePanel',
                dataIndex: 'name',
                align:'left',
                flex: 1
            }]
        }
    }]
});
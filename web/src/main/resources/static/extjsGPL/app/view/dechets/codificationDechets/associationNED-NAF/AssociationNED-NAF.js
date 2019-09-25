Ext.define('NovaAdmin.view.dechets.codificationDechets.associationNED-NAF.AssociationNED-NAF' , {
    extend:'Ext.panel.Panel',
    alias:'widget.associationNedNaf',
    cls:'treePanel-main',


    requires: [
        'NovaAdmin.view.dechets.codificationDechets.associationNED-NAF.AssociationNED-NAFController',
        'NovaAdmin.store.dechets.AssociationTovNedTreeStore'
    ],

    controller:'associationNED-NAFController',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    padding:'5px 5px 5px 5px',
    margin:'10px 10px 10px 10px',

    flex:1,

    items:[{
        xtype:'treepanel',
        listeners:{
            drop: 'dragAndDropTreePanel'
        },
        title:"NED",
        rootVisible:false,
        autoLoad:false,
        margin:'0 0 15 0',
        cls:'treePanel-association-ned-naf-premier treePanel-skinning',
        reference:'treePanelAssocNedNafPremier',
        flex:1,
        store: {
            type: 'tree',
            autoLoad: true,

            fields: [
                "name"
            ],

            proxy: {
                type: 'ajax',
                url: 'dechets/treeWasteNed'
            },

            folderSort: true
        },
        columns: {
            items: [{
                xtype:'treecolumn',
                cls:'treecolumn-association-ned-naf-premier treePanel-skinning-column',
                reference:'treeColumnAssociationNedNafPremier',
                dataIndex:'name',
                align:'left',
                flex: 1
            }]
        },
        viewConfig: {
            listeners:{
                drop: 'dragAndDropTreePanel'
                //beforedrop : 'dragAndDropTreePanel2'
            },
            plugins: {
                ptype:'treeviewdragdrop',
                ddGroup:'two-tress-drag-drop',
                appendOnly: true,
                sortOnDrop:true,
                containerScroll:true

            }
        }
    },{
        xtype:'treepanel',
        listeners:{
            drop: 'dragAndDropTreePanel'
        },
        title:"NAF",
        rootVisible:false,
        autoLoad:false,
        margin:'0 0 15 0',
        cls:'treePanel-association-ned-naf-second treePanel-skinning',
        reference:'treePanelAssocNedNafSecond',
        flex:1,
        store:{
            type: 'tree',
            autoLoad: true,

            fields: [
                "name",
                "letter",
                "id"
            ],

            proxy: {
                type: 'ajax',
                url: 'dechets/treeWasteNafNed'
            },

            folderSort: true

        },
        columns: {
            items: [{
                xtype:'treecolumn',
                cls:'treecolumn-association-ned-naf-second treePanel-skinning-column',
                reference:'TreeColumnAssociationNedNafSecond',
                dataIndex: 'name',
                align:'left',
                flex: 1
            }]
        },
        viewConfig: {
            plugins: {
                ptype:'treeviewdragdrop',
                ddGroup:'two-tress-drag-drop',
                appendOnly: true,
                sortOnDrop:true,
                containerScroll:true
            }
        }
    }]
});
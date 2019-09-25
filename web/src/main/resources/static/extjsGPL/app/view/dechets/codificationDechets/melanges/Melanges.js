Ext.define('NovaAdmin.view.dechets.codificationDechets.melanges.Melanges' , {
    extend:'Ext.panel.Panel',
    alias:'widget.melanges',

    requires: [
        'NovaAdmin.view.dechets.codificationDechets.melanges.MelangesController',
        'NovaAdmin.store.dechets.MelangeTreeStore'
    ],

    controller:'melangesController',

    layout: {
        type:'hbox',
        align:'stretch'
    },

    //padding:'15px 15px 15px 15px',

    padding:'3px 3px 3px 3px',
    margin:'5px 15px 5px 0px',

    flex:1,

    items:[{
        xtype:'treepanel',
        listeners:{
            drop: 'dragAndDropTreePanel'
        },
        title:"Neds - Composant du mélange...",
        rootVisible:false,
        autoLoad:false,
        margin:'0 10 15 0',
        cls:'treePanel-association-ned-naf-premier treePanel-skinning',
        reference:'treePanelAssocNedNafPremier',
        flex:1,
        store: {
            type: 'tree',
            autoLoad: true,

            fields: [
                "name",
                "id"
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
                cls:'treecolumn-association-ned-naf-premier treePanel-skinning-column' ,
                reference:'treeColumnAssociationNedNafPremier',
                dataIndex:'name',
                align:'left',
                flex: 1
            }]
        },
        viewConfig: {
            listeners:{
                drop: 'dragAndDropTreePanel'
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
        title:"Neds - Composé de ....",
        rootVisible:false,
        autoLoad:false,
        margin:'0 0 15 0',
        cls:'treePanel-association-ned-naf-second',
        reference:'treePanelAssocNedNafSecond',
        flex:1,
        store:{
            type: 'tree',
            autoLoad: true,

            fields: [
                "name",
                "id"
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
                cls:'treecolumn-association-ned-naf-second',
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
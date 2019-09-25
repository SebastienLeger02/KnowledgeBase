Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.DechetsTOVGrid' , {
    extend:'Ext.panel.Panel',
    alias:'widget.dechetsTOVGrid',



    requires: [
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.DechetsTOVGridController',
        //'NovaAdmin.model.dechets.GridDechetCategorieModel',
        'NovaAdmin.store.dechets.GridDechetCategorieStore',
        'NovaAdmin.store.dechets.GridDechetSousCategorieStore',
        'NovaAdmin.store.dechets.GridDechetTovStore',
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowAddCategorieTOVGrid',
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowAddSousCategorieTOVGrid',
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowEditSousCategorieTOVGrid',
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowEditCategorieTOVGrid',
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowAddTOVGrid',
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowEditTOVGrid'
    ],

    controller:'dechetsTOVGridController',

    layout: {
        type:'hbox',
        align:'stretch'
    },

    padding:'12 0 0 0',
    flex:1,

    items:[{
        xtype: 'grid', //----------------------CATEGORIE
        cls:'grid-categorie grid-dechets-TOV-grid grid-equipements',
        reference:'gridCategorieTovGrid',
        //model: 'GridDechetCategorieModel',
        store: {
           type:'gridDechetCategorieStore',
            filters: [
                function(item) {
                    return item.data.type === "tov";
                }
            ]
        },
        listeners:{
            itemclick : 'loadGridWasteSubCategory'
        },
        flex:0.5,
        columns:[{
            text:'Catégorie',
            cls:'grid-colonne-categorie-tov header-grid',
            tdCls:'titre-grid-categorie font-semibold-enlevement',
            dataIndex:'name',
            align:'left',
            flex:1
        },{
            xtype:'templatecolumn',
            cls:'grid-button-add display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-add',
                iconCls: 'x-fa picto-add-grid',
                width:45,
                height:25,
                handler:'openWindowAddCategorieTOVGrid' //function() { Ext.Msg.alert('Status', 'Le button "add" est en cours de préparation !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-add"></span>',
            align: 'center',
            flex:0.5

        },{
            xtype:'templatecolumn',
            cls:'grid-button-edit display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-edit',
                iconCls: 'x-fas picto-edit-grid',
                width:45,
                height:25,
                //margin:'0 2 0 2',
                handler:'openWindowEditCategorieTOVGrid' //function() { Ext.Msg.alert('Status', 'Le button "equal" est en cours de préparation  !');}

                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-equal"></span>',
            align: 'center',
            flex:0.5

        },{
            xtype:'templatecolumn',
            cls:'grid-button-delete display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-delete',
                iconCls: 'x-fa picto-delete-grid',
                width:45,
                height:25,
                margin:'0 5 0 0',
                handler:'deleteRecordGridCategorie'//function() { Ext.Msg.alert('Status', 'Le button "delete" est en cours de préparation  !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-delete"></span>',
            align: 'center',
            flex:0.5
        }]
    },{
        xtype: 'splitter',
        width: 10
    },{  // ----------------------------------- SOUS-CATEGORIE
        xtype: 'gridpanel',
        cls:'grid-sous-categorie-tov grid-dechets-TOV-grid header-grid grid-equipements',
        reference:'gridSousCategorieTovGrid',
        itemId:'gridSousCategorieTovGrid',
        //model:'sousCategoryModel' ,
        store: {
           type:'gridDechetSousCategorieStore'
        },
        // bind: '{gridCategorie.selection.sousCategories}', // Permet d'aceder au model/store ( avec s* car plusieur data)
        //bind: '{sousCategorie}', //'{selectionCategorie}', // Permet d'aceder au model/store ( avec s* car plusieur data)

        listeners: {
            itemclick:'loadGridWasteTypeCategory'
        },
        flex:0.4,
        columns:[{
            text:'id',
            cls:'grid-colonne-id-sous-categorie-tov header-grid',
            tdCls:'titre-grid-id font-semibold-enlevement',
            dataIndex:'id',
            align:'left',
            flex:0.5
        },{
            text:'Sous-catégorie', //i18n.SOUS_CATE
            cls:'grid-colonne-sous-categorie-tov header-grid',
            tdCls:'titre-grid-sous-categorie font-semibold-enlevement',
            dataIndex:'name',
            align:'left',
            flex:1
        },{
            xtype:'templatecolumn',
            cls:'grid-button-add display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-add',
                iconCls: 'x-fa picto-add-grid',
                width:45,
                height:25,
                handler:'openWindowAddSousCategorieTOVGrid' // function() { Ext.Msg.alert('Status', 'Le button "add" est en cours de préparation  !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-add"></span>',
            align: 'center',
            flex:0.5

        },{
            xtype:'templatecolumn',
            cls:'grid-button-edit display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-edit',
                iconCls: 'x-fas picto-edit-grid',
                width:45,
                height:25,
                //margin:'0 2 0 2',
                handler:'openWindowEditSousCategorieTOVGrid' //function() { Ext.Msg.alert('Status', 'Le button "equal" est en cours de préparation  !');}

                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-equal"></span>',
            align: 'center',
            flex:0.5

        },{
            xtype:'templatecolumn',
            cls:'grid-button-delete display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-delete',
                iconCls: 'x-fa picto-delete-grid',
                width:45,
                height:25,
                margin:'0 5 0 0',
                handler:'deleteRecordGridSousCategorie'//function() { Ext.Msg.alert('Status', 'Le button "delete" est en cours de préparation  !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-delete"></span>',
            align: 'center',
            flex:0.5
        }]
    },{
        xtype: 'splitter',
        width: 10
    },{
        xtype: 'grid',  // ----------------------------------- GRID FINAL
        cls:'grid-final-dechets-TOV grid-dechets-TOV-grid header-grid grid-equipements',
        reference:'gridFinalDechetsTOVGrid',
        //model:'DechetsTOVGridTypeModel',
        store: {
            type:'gridDechetTovStore'
        },
        //bind:'{gridSousCategorie.selection.dechets-TOV-gridTypes}',
        //bind:'{dechets-TOV-gridType}',   //'{selectionSousCategorie}',
        flex:0.5,
        columns:[{
            text:'id',
            cls:'grid-colonne-id-tov header-grid',
            tdCls:'titre-grid-id font-semibold-enlevement',
            dataIndex:'id',
            align:'left',
            flex:0.5
        },{
            text:'Intitulé',  //i18n.INTITULE
            cls:'grid-colonne-intitule-tov  header-grid',
            tdCls:'titre-grid-intitule font-semibold-enlevement',
            dataIndex:'name',
            align:'left',
            flex:1
        },{
            xtype:'templatecolumn',
            cls:'grid-button-add display-none-filter ',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-add',
                iconCls: 'x-fa picto-add-grid',
                width:45,
                height:25,
                handler:'openWindowAddTOVGrid' //function() { Ext.Msg.alert('Status', 'Le button "add" est en cours de préparation  !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-add"></span>',
            align: 'center',
            flex:0.5

        },{
            xtype:'templatecolumn',
            cls:'grid-button-edit display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-edit',
                iconCls: 'x-fas picto-edit-grid',
                width:45,
                height:25,
                //margin:'0 0 0 0',
                handler: 'openWindowEditTOVGrid' //function() { Ext.Msg.alert('Status', 'Le button "equal" est en cours de préparation  !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-equal"></span>',
            align: 'center',
            flex:0.5

        },{
            xtype:'templatecolumn',
            cls:'button-header-grid-delete display-none-filter header-grid',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-delete',
                iconCls: 'x-fa picto-delete-grid',
                width:45,
                height:25,
                margin:'0 5 0 0',
                handler:'deleteRecordGridFinalTov' //function() { Ext.Msg.alert('Status', 'Le button "delete" est en cours de préparation  !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-delete"></span>',
            align: 'center',
            flex:0.5

        }]
    }]
});
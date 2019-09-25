Ext.define('NovaAdmin.view.equipements.EquipementsMain', {
    extend: 'Ext.panel.Panel',
    alias:'widget.equipementsMain',
    cls:'class-equipements-main',

    requires: [
        'NovaAdmin.view.equipements.EquipementsMainController',
        'NovaAdmin.view.equipements.EquipementsMainViewModel',
        'NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.WindowAddSousCategorie',
        'NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.WindowEditSousCategorie',
        'NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowAddFinalEquipement.WindowAddFinalEquipement',
        'NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowEditFinalEquipement.WindowEditFinalEquipement',
        'NovaAdmin.store.equipements.EquipementTypeGridStore',
        'NovaAdmin.store.equipements.EquipementsStore',
        'NovaAdmin.store.equipements.SousCategoryStore',
        'NovaAdmin.store.equipements.EquipementsTypeStore',
        'NovaAdmin.model.equipements.EquipementsModel',
        'NovaAdmin.model.equipements.SousCategoryModel',
        'NovaAdmin.model.equipements.EquipementsTypeModel'
    ],

    controller:'equipementsMainController',

    viewModel:'equipementsMainViewModel',

    layout: {
        type:'hbox',
        align:'stretch'
    },

    padding:'16 0 16 0',
    flex:1,

    items:[{            // ------------------------------------------ CATEGORIE
        xtype: 'grid',
        cls:'grid-categorie grid-equipements ',
        reference:'gridCategorie',
        model: 'EquipementsModel',
        store: {
          type:'equipementsStore'
        },
       // bind: '{categorie}',
        listeners:{
            itemclick : 'loadGridEquipmentSubCategory',
            beforeitemclick :'buttonDisabledSousCategorie'
        },
        flex:0.3,
        height:35,
        columns:[{
            text:'Catégorie', //i18n.CATEGORIE
            cls:'grid-colonne-categorie header-grid',
            tdCls:'titre-grid-categorie font-semibold-enlevement',
            dataIndex:'name',
            align:'left',
            flex:1,
            height:35
        }]
    },{
        xtype: 'splitter',
        width: 10
    },{
        xtype: 'gridpanel', // ----------------------------------- SOUS-CATEGORIE
        cls:'grid-sous-categorie grid-equipements',
        reference:'gridSousCategorie',
        model:'sousCategoryModel' ,
        store: {
            type:'sousCategoryStore'
        },
        // bind: '{gridCategorie.selection.sousCategories}', // Permet d'aceder au model/store ( avec s* car plusieur data)
        //bind: '{sousCategorie}', //'{selectionCategorie}', // Permet d'aceder au model/store ( avec s* car plusieur data)

        listeners: {
            itemclick:'loadGridEquipmentType',
            beforeitemclick :'buttonDisabledEquipmentType'
        },
        flex:0.4,
        height:35,
        columns:[{     // Rajouter les boutons
            text:'Sous-catégorie', //i18n.SOUS_CATE
            cls:'grid-colonne-sous-categorie header-grid',
            tdCls:'titre-grid-sous-categorie font-semibold-enlevement',
            dataIndex:'name',
            align:'left',
            flex:1,
            height:35
        },{
            xtype:'templatecolumn',
            cls:'grid-button-add display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-add',
                reference:'buttonAddSousCategorie',
                iconCls: 'x-fa picto-add-grid',
                width:45,
                height:25,
                //margin:'0 2 0 2',
                handler: 'openWindowAddSousCategorie' /*function() { Ext.Msg.alert('Status', 'Le button "add" fonctionne correctement !');} */
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
                reference:'buttonEditSousCategorie',
                iconCls: 'x-fas picto-edit-grid',
                width:45,
                height:25,
                //margin:'0 2 0 2',
                handler:'openWindowEditSousCategorie'/* function() { Ext.Msg.alert('Status', 'Le button "equal" fonctionne correctement !');}*/

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
                reference:'buttonDeleteSousCategorie',
                iconCls: 'x-fa picto-delete-grid',
                width:45,
                height:25,
                margin:'0 5 0 0',
                handler:'deleteRecordSousCategoryGrid' //function() { Ext.Msg.alert('Status', 'Le button "delete" fonctionne correctement !');}
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
        cls:'grid-final-equipements grid-equipements header-grid',
        reference:'gridFinalEquipements',
        model:'EquipementsTypeModel',
        store: {
            type:'equipementsTypeGridStore'
        },
        margin:'0 5 0 0',
        flex:0.4,
        //height:35,
        columns:[{
            text:'ID',
            cls:'grid-colonne-id header-grid',
            tdCls:'titre-grid-id font-semibold-enlevement',
            dataIndex:'id',
            align:'left',
            width:70,
            height:35
        },{
            text:'Intitulé',  //i18n.INTITULE
            cls:'grid-colonne-intitule header-grid',
            tdCls:'titre-grid-intitule font-semibold-enlevement',
            dataIndex:'name',
            align:'left',
            flex:1,
            height:35
        },{
            xtype:'templatecolumn',
            cls:'grid-button-add display-none-filter',
            items: [{
                xtype: 'button',
                cls:'button-header-grid-add',
                reference:'buttonAddFinalEquipements',
                iconCls: 'x-fa picto-add-grid',
                width:45,
                height:25,
                //margin:'0 5 0 0',
                handler: 'openWindowAddWithCode'  // 'openWindowAddFinalEquipement',
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
                reference:'buttonEditFinalEquipements',
                iconCls: 'x-fas picto-edit-grid',
                width:45,
                height:25,
                margin:'0 0 0 0',
                handler:  'openWindowEditWithCode'
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
                reference:'buttonDeleteFinalEquipements',
                iconCls: 'x-fa picto-delete-grid',
                width:45,
                height:25,
                margin:'0 5 0 0',
                handler:'deleteRecordEquipmentTypeGrid'// function() { Ext.Msg.alert('Status', 'Le button "delete" fonctionne correctement !');}
                //ui: 'default-toolbar'
            }],
            tpl: '<span class="template-button-delete"></span>',
            align: 'center',
            flex:0.5
        }]
    },{
        xtype: 'tbspacer',
        width: 10
    }]
});
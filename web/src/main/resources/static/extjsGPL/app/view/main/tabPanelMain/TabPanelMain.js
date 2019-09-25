Ext.define('NovaAdmin.view.main.tabPanelMain.TabPanelMain', {
    extend: 'Ext.panel.Panel',
    alias:'widget.tabPanelMain',
    cls:'class-tabPanel-main',

    requires: [
        'NovaAdmin.view.main.headerMain.HeaderMain',
        'NovaAdmin.view.main.tabPanelMain.buttonCustom.ButtonCustomTabPanelMain',
        'NovaAdmin.view.main.tabPanelMain.TabPanelMainController',
        'NovaAdmin.view.equipements.EquipementsMain',
        'NovaAdmin.view.dechets.DechetsMain',
        'NovaAdmin.view.vehicules.VehiculesMain'
    ],

    controller:'tabPanelMainController',

    layout: {
        type:'hbox',
        align:'stretch'
    },

    tabPosition: 'left',
    height:800,
    flex:1,

    items:[{
        xtype:'container',
        cls:'container-tabPanel-main',
        layout: {
            type:'vbox',
            align:'right'
        },
        items: [{
            xtype:'button',
            cls:'button-accordion',
            iconCls:'icon-accordion',
            reference:'buttonAccordion',
            toggleHandler:'activeButtonAccordiont',
            enableToggle:true,
            margin: '13 17'
        },{
            xtype:'buttonCustomOnglet',
            cls:'button-equipements button-onglets-main selected',
            iconCls:'icon-equipements icon-onglets-main',
            text:"Equipements", //i18n.EQUIPEMENTS
            reference:'buttonEquipements',
            height:65,
            width:80,
            border:'1 0 1 0',
            handler:'activeButtonEquipements'
        },{
            xtype:'buttonCustomOnglet',
            cls:'button-dechets button-onglets-main',
            iconCls:'icon-dechets icon-onglets-main ',
            text:'Dechets', //i18n.DECHETS,
            references:'buttonDechets',
            height:65,
            width:80,
            handler:'activeButtonDechets'
        },{
            xtype:'buttonCustomOnglet',
            cls:'button-vehicules button-onglets-main',
            iconCls:'icon-vehicules icon-onglets-main',
            text:'Vehicule', //i18.VEHICULES
            references:'buttonVehicules',
            height:65,
            width:80,
            handler:'activeButtonVehicules'
        }]
    },{
        xtype:'container',
        layout:{
            type:'vbox',
            align:'stretch'
        },
        flex:1,
        items:[{
            xtype:'headerMain',
            reference:'headerMain'
        },{
            flex:1,
            xtype:'container',
            cls:'container-main-card',
            layout:{
                type:'card'
            },
            reference:'cardContainer',
            items:[{
                xtype:'equipementsMain',
                text:'Page Equipements',
                reference:'cardEquipements',
                itemId:'cardEquipementsId'
            },{
                xtype:'dechetsMain',//'dechetsTabPanel',
                text:'Page Dechets',
                reference:'cardDechets',
                itemId:'cardDechetsId'
            },{
                xtype:'vehiculesMain',//'vehiculesTabPanel',
                text:'Page Vehicules',
                reference:'cardVehicules',
                itemId:'cardVehiculesId'
            }]
        }]
    }]
});

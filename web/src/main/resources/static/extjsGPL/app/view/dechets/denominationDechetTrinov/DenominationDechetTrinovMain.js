Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.DenominationDechetTrinovMain' , {
    extend:'Ext.panel.Panel',
    alias:'widget.dechetsTOV',

//   tatic/extjsGPL/app/view/dechets/denominationDechetTrinov/DenominationDechetTrinovMain.js

    requires: [
        'NovaAdmin.view.dechets.denominationDechetTrinov.DenominationDechetTrinovMainController',
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.DechetsTOVGrid',
        'NovaAdmin.view.dechets.denominationDechetTrinov.associationTovNed.AssociationTovNed',
        'NovaAdmin.view.dechets.denominationDechetTrinov.densite.Densite'
    ],

    controller:'dechetsTOVController',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    tabPosition: 'top',
    flex:1,

    items:[{
        xtype:'dechetsTOVGrid',
        cls:'grid-dechets-tov'
    },{
        xtype:'container',
        cls:'container-tabPanel-main container-sous-onglets-tov',
        layout: {
            type:'hbox',
            align:'left'
        },
        padding: '10 0 5 10',
        items: [{
            xtype:'button',
            cls:'button-association-tov-ned button-onglets-dechets selectedDechets sous-onglet-dechet',
            text:"ASSOCIATION TOV>NED", //i18n.ASSOC_TOV_NED,
            reference:'buttonAssociationTovNed',
            height:35,
            //width:60,
            border:'1px 1px 1px 1px',
            handler:'activeButtonAssociationTovNed'
        },{
            xtype:'button',
            cls:'button-densite button-onglets-dechets sous-onglet-dechet',
            text:'DENSITE', //i18n.NED,
            references:'buttonDensite',
            height:35,
            //width:60,
            border:'1px 1px 1px 0',
            handler:'activeButtonDensite'
        }]
    },{
        xtype:'container',
        layout:{
            type:'vbox',
            align:'stretch'
        },
        flex:1,
        items:[{
            xtype:'container',
            cls:'container-main-card',
            layout:{
                type:'card'
            },
            reference:'cardContainer',
            flex:1,
            items:[{
                xtype:'dechetsAssociationTovNed',
                reference:'cardDechetsAssociationTovNed',
                itemId:'cardDechetsAssociationTovNedId'
            },{
                xtype:'dechetsDensite',
                reference:'cardDechetsDensite',
                itemId:'cardDechetsDensiteId'
            }]
        }]
    }]
});
Ext.define('NovaAdmin.view.dechets.DechetsMain', {
    extend: 'Ext.panel.Panel',
    alias:'widget.dechetsMain',
    cls:'class-dechets-main sous-onglets-main',

    requires: [
        'NovaAdmin.view.dechets.DechetsMainController',
        'NovaAdmin.view.dechets.denominationDechetTrinov.DenominationDechetTrinovMain',
        'NovaAdmin.view.dechets.codificationDechets.CodificationDechets',
        'NovaAdmin.view.dechets.classificationEuroDechets.ClassificationEuroDechets'
        //'NovaAdmin.view.dechets.denominationDechetTrinov.DenominationDechetTrinovMainController'
    ],

    controller:'dechetsMainController',

   /* title:'Onglet Dechets',
    html:'<h3> Onglet <U>Déchets</U> </h3>' +
        '<p> Bientôt dans cette onglet, on trouvera les tableaux de la partie Déchet de l\'application <U>Nova Admin</U> ! </p>',


    padding:'15px 15px 15px 15px', */

    layout: {
        type:'vbox',
        align:'stretch'
    },

    tabPosition: 'top',
    flex:1,
    margin:'10 10 15 0',

    items:[{
        xtype:'container',
        cls:'container-tabPanel-main',
        layout: {
            type:'hbox',
            align:'left'
        },
       margin:'0 0 5 10',

        items: [{
            xtype:'button',
            cls:'button-TOV button-onglets-dechets selectedDechets button-onglets-nav',
            text:"TOV", //i18n.TOV,
            reference:'buttonTOV',
            height:35,
            //width:60,
            border:'1 1 1 1',
            handler:'activeButtonTOV'
        },{
            xtype:'button',
            cls:'button-NED button-onglets-dechets button-onglets-nav',
            text:'NED', //i18n.NED,
            references:'buttonNED',
            height:35,
            border:'1 1 1 1',
            //width:60,
            handler:'activeButtonNED'
        },{
            xtype:'button',
            cls:'button-CED button-onglets-dechets button-onglets-nav',
            text:'CED', //i18.CED,
            references:'buttonCED',
            height:35,
            border:'1 1 1 1',
            //width:60,
            handler:'activeButtonCED'
        },{
            xtype:'button',
            cls:'button-synthese button-onglets-dechets button-onglets-nav',
            text:'SYNTHESE', //i18.SYNTHESE
            references:'buttonSynthese',
            height:35,
            border:'1 1 1 1',
            //width:60,
            handler:'activeButtonSynthese'
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
                xtype:'dechetsTOV',
                reference:'cardDechetsTOV',
                itemId:'cardDechetsTOVId'
            },{
                xtype:'dechetsNED',
                reference:'cardDechetsNED',
                itemId:'cardDechetsNEDId'
            },{
                xtype:'dechetsCED',
                reference:'cardDechetsCED',
                itemId:'cardDechetsCEDId'
            },{
                xtype:'syntheseDechets',
                reference:'cardSyntheseDechets',
                itemId:'cardSyntheseDechetsId'
            }]
        }]
    }]
});
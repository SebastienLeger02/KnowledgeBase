Ext.define('NovaAdmin.view.dechets.codificationDechets.CodificationDechets' , {
    extend:'Ext.panel.Panel',
    alias:'widget.dechetsNED',

    requires: [
        'NovaAdmin.view.dechets.codificationDechets.CodificationDechetsController',
        'NovaAdmin.view.dechets.codificationDechets.caracteristiqueNED.CaracteristiqueNED',
        'NovaAdmin.view.dechets.codificationDechets.associationNED-NAF.AssociationNED-NAF',
        'NovaAdmin.view.dechets.codificationDechets.associationNED-CED.AssociationNED-CED'

    ],

    controller:'dechetsNEDController',
/*
    title:'Onglet NED',
    html:'<h3> Onglet <U>NED</U> </h3>' +
        '<p> Bientôt dans cette onglet, on trouvera les tableaux de la partie NED de l\'application <U>Nova Admin</U> ! </p>',
*/
    layout: {
        type:'vbox',
        align:'stretch'
    },

    //padding:'15px 15px 15px 15px',

    tabPosition: 'top',
    flex:1,

    items:[{
        xtype:'container',
        cls:'container-tabPanel-main container-sous-onglets-ned',
        layout: {
            type:'hbox',
            align:'left'
        },
        items: [{
            xtype:'button',
            cls:'button-caracteristiqueNED button-onglets-dechets selectedNed',
            text:"CARACTERISTIQUE NED", //i18n.TOV,
            reference:'buttonCaracteristiqueNED',
            height:35,
            //width:60,
            border:'1 1 1 1',
            handler:'activeButtonCaracteristiqueNED',
            listeners:{
                click:'testDeleteCls'
            }
        },{
            xtype:'button',
            cls:'button-associationNED-NAF button-onglets-dechets',
            text:'ASSOCIATION NED>NAF', //i18n.NED,
            references:'buttonAssociationNedNaf',
            border:'1 1 1 1',
            height:35,
            //width:60,
            handler:'activeButtonAssociationNedNaf',
            listeners:{
                click:'testDeleteCls'
            }
        },{
            xtype:'button',
            cls:'button-associationNED-CED button-onglets-dechets',
            text:'ASSOCIATION NED>CED', //i18.CED,
            references:'buttonAssociationNedCed',
            border:'1 1 1 1',
            height:35,
            //width:60,
            handler:'activeButtonAssociationNedCed',
            listeners:{
                click:'testDeleteCls'
            }
        },{
            xtype:'button',
            cls:'button-melanges button-onglets-dechets',
            text:'MELANGES', //i18.SYNTHESE
            references:'buttonMelanges',
            height:35,
            border:'1 1 1 1',
            //width:60,
            handler:'activeButtonMelanges',
            listeners:{
                click:'testDeleteCls'
            }
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
                xtype:'caracteristiqueNED',
                reference:'cardCaracteristiqueNed',
                itemId:'cardCaracteristiqueNedId'
            },{
                xtype:'associationNedNaf',
                reference:'cardAssociationNedNaf',
                itemId:'cardAssociationNedNafId'
            },{
                xtype:'associationNedCed',
                reference:'cardAssociationNedCed',
                itemId:'cardAssociationNedCedId'
            },{
                xtype:'melanges',
                reference:'cardMelanges',
                itemId:'cardMelangesId'
            }]
        }]
    }]
});
Ext.define('NovaAdmin.view.dechets.syntheseDechets.SyntheseDechets' , {
    extend:'Ext.panel.Panel',
    alias:'widget.syntheseDechets',

    requires: [
        'NovaAdmin.view.dechets.syntheseDechets.SyntheseDechetsController'
    ],

    controller:'syntheseDechetsController',

    title:'Onglet SYNTHESE',
    html:'<h3> Onglet <U>SYNTHESE</U> </h3>' +
        '<p> Bientôt dans cette onglet, on trouvera les tableaux de la partie SYNTHESE de l\'application <U>Nova Admin</U> ! </p>',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    padding:'15px 15px 15px 15px',

    tabPosition: 'left',
    height:800,
    flex:1,
});
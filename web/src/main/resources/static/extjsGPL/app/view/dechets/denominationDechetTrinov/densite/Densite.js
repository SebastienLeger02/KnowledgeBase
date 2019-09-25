Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.densite.Densite', {
    extend:'Ext.panel.Panel',
    alias:'widget.dechetsDensite',
    cls:'panel-densite-dechets',

    requires: [
        'NovaAdmin.view.dechets.denominationDechetTrinov.densite.DensiteController'
    ],

    controller:'dechetsDensiteController',

    title:'Onglet DENSITE',
    html:'<h3> Onglet <U>DENSITE</U> </h3>' +
        '<p> Bientôt dans cette onglet, on trouvera les tableaux de la partie DENSITE de l\'application <U>Nova Admin</U> ! </p>',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    padding:'15px 15px 15px 15px',

    tabPosition: 'left',
    height:800,
    flex:1,

});

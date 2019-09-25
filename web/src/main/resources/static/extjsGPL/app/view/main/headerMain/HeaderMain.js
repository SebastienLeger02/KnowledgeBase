Ext.define('NovaAdmin.view.main.headerMain.HeaderMain',{
    extend:'Ext.container.Container',
    alias:'widget.headerMain',
    cls:'header-main',

    requires: [
        //'NovaAdmin.view.main.headerMain.HeaderMainController',
    ],

    //controller:'headerMainController',

    viewModel:{
        type:'headerMainViewModel'
    },

    layout: {
        type: 'hbox',
        align: 'center'
    },
    height:50,

    items:[{
        xtype: 'label',
        reference:'titleLabel',
        cls:'class-label-titre-header',
        flex:1,
        text:'Equipements',//i18n.EQUIPEMENTS,
        bind:'{title}',
        margin:'O O O 10'
    }/*,{
        xtype:'menuMain',
        margin: '0 10 0 0',
        height: 38,
        width: 42,
        handler:'menuMain'

    },{
        xtype: 'button',
        height:50,
        iconCls: 'class-icon-contact-sav class-icon-button',
        cls:'class-button-contact-sav class-button-header',
        //text:i18n.ASSISTANCE,
        tooltip:i18n.ASSISTANCE,
        handler: 'openWindow'

    },{
        xtype: 'button',
        height:50,
        iconCls: 'class-icon-info-pdf class-icon-button',
        cls:'class-button-info-pdf class-button-header',
        //text:i18n.MODE_D_EMPLOI,
        tooltip:i18n.MODE_D_EMPLOI,
        handler:'downloadFilePdf'
        //reference:'downloadFile'
    },{
        xtype:'button',
        height:50,
        margin:'0 17 0 0',
        iconCls:'class-icon-deco class-icon-button',
        cls:'class-button-deco class-button-header',
        //text:i18n.DECONNEXION,
        tooltip:i18n.DECONNEXION,
        handler:'disconnect'
    }*/]

});
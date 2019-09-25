Ext.define('DWD.view.main.footerMain.FooterMain' , {
    extend:'Ext.container.Container',
    alias:'widget.footerMain',
    cls:'class-container-footer',

    requires: [
        'DWD.view.main.footerMain.FooterMainController'
    ],

    controller:'footerMainController',

    layout: {
        type:'hbox',
        align:'middle'
    },
    height:70,

    items:[{
        xtype: 'tbspacer',
        width: 17
    },{
        xtype: 'button',
        height:26,
        iconCls: 'class-icon-donnees-ref class-icon-button',
        cls:'class-button-donnees-ref button-footer-main',
        text:'Données de référence',
        tooltip:''
        //handler:'menuMain'
    },{
        xtype: 'tbspacer',
        flex:1
    },{
        xtype: 'button',
        height:26,
        iconCls: 'class-icon-contact-sav class-icon-button',
        cls:'class-button-contact-sav button-footer-main',
        text:'Assistance',
        tooltip:'',
        handler: 'openWindow'

    },{
        xtype: 'button',
        height:26,
        margin:'0 17 0 10',
        iconCls: 'class-icon-info-pdf class-icon-button',
        cls:'class-button-info-pdf button-footer-main',
        text:'Mode d\'emploi',
        tooltip:'Information (PDF)',
        handler:'downloadFilePdf'
        //reference:'downloadFile'
    }]

});

/*
li class="wysiwyg-color-black wysiwyg-font-size-medium wysiwyg-text-align-left"

span class=wysiwyg-color-black wysiwyg-font-size-medium

 */
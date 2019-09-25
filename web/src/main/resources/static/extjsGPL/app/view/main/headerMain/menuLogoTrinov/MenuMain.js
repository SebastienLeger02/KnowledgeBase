Ext.define('DWD.view.main.headerMain.menuLogoTrinov.MenuMain', {
    extend:'Ext.button.Button',
    alias:'widget.menuMain',
    cls:'class-menu-main-header',


    requires: [
        'DWD.view.main.headerMain.menuLogoTrinov.MenuMainController'
    ],

    controller:'menuMainController',

    showSeparator:false,
    floating:false,
    ignoreParentClicks:true,


    menu:{
        handler:"menuMainLogo",
        items:[{
            text:'Suivi',
            handler:'suiviMenu'
        },{
            text:'DWD',
            handler:'dwdMenu'
        }]
    }
});
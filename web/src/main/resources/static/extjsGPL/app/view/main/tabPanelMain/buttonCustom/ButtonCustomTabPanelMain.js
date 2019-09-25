Ext.define('NovaAdmin.view.main.tabPanelMain.buttonCustom.ButtonCustomTabPanelMain', {
    extend:'Ext.button.Button',
    alias:'widget.buttonCustomOnglet',
    cls:'class-button-custom',

    requires:[
        'NovaAdmin.view.main.tabPanelMain.buttonCustom.ButtonCustomTabPanelMainController'
    ],
    controller:'buttonCustomController',

    height: 80,
    width:57,
    listeners: {
        collapse:'collapse',
        expand:'expand'
    }

});
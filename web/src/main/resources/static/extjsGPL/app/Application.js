Ext.define('NovaAdmin.Application', {
    extend: 'Ext.app.Application',
    stores: [
        //'FLW.store.FileUploadStore',
        //'FLW.store.PaysStore'
    ],

    mainView: 'NovaAdmin.view.main.tabPanelMain.TabPanelMain',

    requires: [
        'NovaAdmin.*',
        'Ext.*'
        /*'FLW.singleton.*',
        'FLW.store.*',
        'FLW.model.*',
        'FLW.override.*',
        'FLW.view.*',

        //'FLW.override.Ajax',
        //'FLW.store.FileUploadStore',
        //'FLW.store.PaysStore',
        'Ext.plugin.Viewport',
        //'FLW.view.pays.Main',
        //'FLW.view.admin.Main',
        'Ext.form.Label',
        'Ext.tab.Panel',
        'Ext.container.Container',
        'Ext.slider.Single' */
    ]

   /* launch: function() {
        var url = window.location.pathname.substr(1);
        if(locale == null) {
            locale = 'fr';
        }
        Ext.Loader.loadScript('ext-locale-' + locale + '.js');
        this.setMainView('FLW.view.' + url  + '.Main');
    } */
});
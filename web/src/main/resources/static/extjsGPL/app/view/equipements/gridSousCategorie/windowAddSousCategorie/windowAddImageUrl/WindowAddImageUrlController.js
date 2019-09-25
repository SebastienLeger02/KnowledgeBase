Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.windowAddImageUrl.WindowAddImageUrlController', {
    extend:'Ext.app.ViewController',
    alias:'controller.windowAddImageUrlController',

    init: function () {

    },

    submit: function() {
        Ext.Msg.alert('Test','Le button fonctionne')
    },

    closeWindow: function () {
        this.getView().close();
    }
});
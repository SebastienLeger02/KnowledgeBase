Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.windowEditImageUrl.WindowEditImageUrlController', {
    extend:'Ext.app.ViewController',
    alias:'controller.windowEditImageUrlController',

    init: function () {

    },

    submit: function() {
        Ext.Msg.alert('Test','Le button fonctionne')
    },

    closeWindow: function () {
        this.getView().close();
    }


});
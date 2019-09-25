Ext.define('NovaAdmin.view.main.tabPanelMain.buttonCustom.ButtonCustomTabPanelMainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.buttonCustomController',

    init : function () {
        this.text = this.getView().getText(); // Permet de garder en mémoire le text.
        this.getView().setText('');  // Remplace le texte par du vide " ".
    },

    collapse : function () {
        var btn = this.getView();
        btn.setWidth(80);   //Modifie la taille
        btn.setText('');    // Modifie le text
        btn.removeCls("expanded")  //Enleve la classe
    },

    expand : function () {
        var btn = this.getView();
        btn.setWidth(280);
        btn.setText(this.text);
        btn.addCls("expanded");  //Rajoute une classe
    }
});

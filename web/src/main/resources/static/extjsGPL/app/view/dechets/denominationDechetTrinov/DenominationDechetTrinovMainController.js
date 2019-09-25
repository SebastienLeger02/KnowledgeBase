Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.DenominationDechetTrinovMainController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dechetsTOVController',

    init : function() {
        var me = this;  // this devient le controlleur
        var customBtns = Ext.ComponentQuery.query('button', this.getView()); //Permet de selectionner les xtype='buttonCustom'
        this.selectedBtn = customBtns[0]; // Crée un element(selectedBtn) puis lui affecte les xtype='buttonCustomer' sous forme de tableau et le met au 1er élément
        for (var i in customBtns) {  //On parcourt le tableau
            customBtns[i].on("click", function(btn){  // chaque element du tableau sont cliquable
                me.selectedBtn.removeCls("selectedDechetsTov"); // Enleve la class Selected du premier element
                me.selectedBtn = btn; // L'elelement précedent et maintnenant l'element cliké
                btn.addCls("selectedDechetsTov"); // Ajoute une class au btn
            })
        }
    },

    activeButtonAssociationTovNed : function () {
        this.lookupReference('cardContainer').getLayout().setActiveItem('cardDechetsAssociationTovNedId');
    },
    activeButtonDensite : function () {
        this.lookupReference('cardContainer').getLayout().setActiveItem('cardDechetsDensiteId');
    }

});
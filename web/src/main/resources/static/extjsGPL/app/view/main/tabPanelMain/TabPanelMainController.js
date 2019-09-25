Ext.define('NovaAdmin.view.main.tabPanelMain.TabPanelMainController', {
    extend:'Ext.app.ViewController',
    alias:'controller.tabPanelMainController',

    init : function() {
        var me = this;  // this devient le controlleur
        var customBtns = Ext.ComponentQuery.query('buttonCustomOnglet', this.getView()); //Permet de selectionner les xtype='buttonCustom'
        this.selectedBtn = customBtns[0]; // Crée un element(selectedBtn) puis lui affecte les xtype='buttonCustomer' sous forme de tableau et le met au 1er élément
        for (var i in customBtns) {  //On parcourt le tableau
            customBtns[i].on("click", function(btn){  // chaque element du tableau sont cliquable
                me.selectedBtn.removeCls("selected"); // Enleve la class Selected du premier element
                me.selectedBtn = btn; // L'elelement précedent et maintnenant l'element cliké
                btn.addCls("selected"); // Ajoute une class au btn
            })
        }
    },

    activeButtonEquipements : function () {
        this.lookupReference('cardContainer').getLayout().setActiveItem('cardEquipementsId');
        this.lookupReference('headerMain').getViewModel().set('title', 'EQUIPEMENTS'); //i18n.EQUIPEMENTS);  // Permet de lire le ViewModel de headerMain et d'attribuer une nouvelle valeur
    },
    activeButtonDechets : function () {
        this.lookupReference('cardContainer').getLayout().setActiveItem('cardDechetsId');
        this.lookupReference('headerMain').getViewModel().set('title','DECHETS'); // i18n.DECHETS);
    },

    activeButtonVehicules : function () {
        this.lookupReference('cardContainer').getLayout().setActiveItem('cardVehiculesId');
        this.lookupReference('headerMain').getViewModel().set('title', 'VEHICULES'); //i18n.VEHICULES);
    },




    activeButtonAccordiont : function (btn,state) {
        var me = this;
        var btnAccordion =  Ext.ComponentQuery.query('buttonCustomOnglet', this.getView());
        btnAccordion.forEach(function(btn) {
            if (state) {   // booleen donc pas besoins de préciser false ou true
                //btn.setText(btn.getController().text)
                btn.fireEvent('expand')
            }
            else {
                btn.fireEvent('collapse')
            }
        })
    }
});




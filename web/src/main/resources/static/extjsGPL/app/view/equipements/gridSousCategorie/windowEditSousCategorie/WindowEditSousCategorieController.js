Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.WindowEditSousCategorieController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowEditSousCategorieController',

    init :function() {
        //this.getData();

    },


    openWindowEditUrlImage: function() {
        Ext.create('NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.windowAddImageUrl.WindowAddImageUrl').show();
    },

    closeWindow : function() {
        this.getView().close();
    },

    getData: function () {    //Permet de remplir les champs avec les informations en BDD
        data = {
            name: this.lookupReference('textfieldSousCategorie').get('name').setValue(data.name),
            family: this.lookupReference('comboFamily').get('family'),
            subFamily: this.lookupReference('comboSubFamily').get('subFamily'),
            treatment: this.lookupReference('comboTreatment').get('treatment'),
            categoryId: this.getViewModel().get('categoryId')
        };
    },

    afterRender : function () {
        var sousCategorie = this.getViewModel().get('sousCategorie');

        if(sousCategorie.id){
            this.lookupReference('textfieldSousCategorie').setValue(sousCategorie.name);
            this.lookupReference('comboFamily').setValue(sousCategorie.family);
            this.lookupReference('comboSubFamily').setValue(sousCategorie.subFamily);
            this.lookupReference('comboTreatment').setValue(sousCategorie.treatment);

            this.fireViewEvent('editSousCategorieEquipements');
        }
        else{
            Ext.Msg.alert('Echec', 'AfterRendre ne fonctionne pas');
        }
    }

//this.fireViewEvent('addSousCategorieEquipements');

});
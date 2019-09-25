Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowEditFinalEquipement.WindowEditFinalEquipementController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowEditFinalEquipementContenantsController',

    closeWindow : function() {
        this.getView().close();
    },

    getData: function () {    //Permet de remplir les champs avec les informations en BDD
        data = {
            name: this.lookupReference('textfieldTypeEquipement').get('name').setValue(data.name),
            type: this.lookupReference('comboFamily').get('type'), // Mauvaise reference
            categoryId: this.getViewModel().get('categoryId'),
            intermediary: this.lookupReference('boxlabelIntermediaire').get('intermediary'),
            capacity: this.lookupReference('numberfieldCapacite').get('treatment'),
            capacityUnit:this.lookupReference('comboBoxCapacite').get('capacityUnit'),
            lenght:this.lookupReference('numberfieldLongueurUtile').get('lenght'),
            lenghtUnit:this.lookupReference('comboboxLongueurUtile').get('lenghtUnit'),
            width:this.lookupReference('numberfieldLargeurUtile').get('width'),
            widthUnit:this.lookupReference('comboboxLargeurUtile').get('widthUnit'),
            height:this.lookupReference('numberfieldHauteurUtiles').get('height'),
            heightUnit:this.lookupReference('comboboxHauteurUtiles').get('heightUnit'),
            weight:this.lookupReference('numberfieldPoidsVide').get('weight'),
            emptyWeight:this.lookupReference('numberfieldPoidsVide').get('emptyWeight'),
            emptyWeightUnit:this.lookupReference('comboboxPoidsVide').get('emptyWeightUnit'),
            maxWeightAdmittable:this.lookupReference('numberfieldMaxAdmi').get('maxWeightAdmittable'),
            maxWeightAdmittableUnit:this.lookupReference('comboboxMaxAdmi').get('maxWeightAdmittableUnit'),
            maxLoad:this.lookupReference('').get('maxLoad'),
            gerbageArea:this.lookupReference('numberfieldNiveauxGerbage').get('gerbageArea'),
            investmentPrice:this.lookupReference('numberfieldPrixInvestissement').get('investmentPrice'),
            amortissement:this.lookupReference('numberfieldDureeAmortissement').get('amortissement'),
            locationPrice:this.lookupReference('numberfieldPrixLocation').get('locationPrice'),
            compartmentsNumber:this.lookupReference('numberfieldNumCompartiment').get('compartmentsNumber'),
            protection:this.lookupReference('checkboxProtectionFermeture').get('protection'),
            retention:this.lookupReference('textareaRetention').get('retention'),
            retentionId:this.lookupReference('').get('retentionId'),
            groundArea:this.lookupReference('numberfieldSurfaceSol').get('groundArea'),
            commentId:this.lookupReference('').get('commentId')
            //Materiel de collecte proposé'
            //Classe ARD
            //Fabricant
            //Contraintes de manutention
            //Norme certification
        };
    },

    afterRender : function () {
        var sousCategorie = this.getViewModel().get('sousCategorie');
debugger;
        if(sousCategorie.id){
            this.lookupReference('textfieldTypeEquipement').setValue(sousCategorie.name);
            this.lookupReference('comboFamily').setValue(sousCategorie.type); // Mauvaise reference
            //this.lookupReference('').setValue(sousCategorie.subCategoryId);
            this.lookupReference('boxlabelIntermediaire').setValue(sousCategorie.intermediary);
            this.lookupReference('numberfieldCapacite').setValue(sousCategorie.capacity);
            this.lookupReference('comboBoxCapacite').setValue(sousCategorie.capacityUnit);
            this.lookupReference('numberfieldLongueurUtile').setValue(sousCategorie.lenght);
            this.lookupReference('comboboxLongueurUtile').setValue(sousCategorie.lenghtUnit);
            this.lookupReference('numberfieldLargeurUtile').setValue(sousCategorie.width);
            this.lookupReference('comboboxLargeurUtile').setValue(sousCategorie.widthUnit);
            this.lookupReference('numberfieldHauteurUtiles').setValue(sousCategorie.height);
            this.lookupReference('comboboxHauteurUtiles').setValue(sousCategorie.heightUnit);
            this.lookupReference('numberfieldPoidsVide').setValue(sousCategorie.weight);
            this.lookupReference('numberfieldMaxAdmi').setValue(sousCategorie.maxWeightAdmittable);
            this.lookupReference('comboboxMaxAdmi').setValue(sousCategorie.maxWeightAdmittableUnit);
            //this.lookupReference('').setValue(sousCategorie.maxLoad);
            this.lookupReference('numberfieldNiveauxGerbage').setValue(sousCategorie.gerbageArea);
            this.lookupReference('numberfieldPrixInvestissement').setValue(sousCategorie.investmentPrice);
            this.lookupReference('numberfieldDureeAmortissement').setValue(sousCategorie.amortissement);
            this.lookupReference('numberfieldPrixLocation').setValue(sousCategorie.locationPrice);
            this.lookupReference('numberfieldNumCompartiment').setValue(sousCategorie.compartmentsNumber);
            this.lookupReference('checkboxProtectionFermeture').setValue(sousCategorie.protection);
            this.lookupReference('textareaRetention').setValue(sousCategorie.retention);
            //this.lookupReference('').setValue(sousCategorie.retentionId);
            this.lookupReference('numberfieldSurfaceSol').setValue(sousCategorie.groundArea);
            //this.lookupReference('').setValue(sousCategorie.commentId);
            //Materiel de collecte proposé'
            //Classe ARD
            //Fabricant
            //Contraintes de manutention
            //Norme certification

        }
        else{
            Ext.Msg.alert('Echec', 'AfterRendre ne fonctionne pas');
        }
    }


    //this.fireEvent('addFinalEquipements');

});
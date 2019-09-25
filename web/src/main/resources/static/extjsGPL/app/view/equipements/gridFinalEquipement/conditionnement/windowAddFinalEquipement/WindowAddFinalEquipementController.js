Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.conditionnement.windowAddFinalEquipement.WindowAddFinalEquipementController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowAddFinalEquipementConditionnementController',


    onAddEquipmentFinalCond : function () {
        var controller = this;
        var form = this.lookupReference('fromWindowAddFinalEquipmentCond');
        var values = form.getValues();

        if (form.isValid()) {
            Ext.Ajax.request({
                url:'/equipements/addNewEquipmentType',// addFinalEquipment' ,
                method: 'POST',
                jsonData:values,
                scope:controller,
                headers:
                    {
                        'Content-Type': 'application/json'
                    },
                success: function (response) {
                    Ext.Msg.alert({
                        title:'Succès',message: 'Un nouveau équipement à été enregistré',
                        fn: function() {
                            this.getView().close();
                        },
                        scope: this
                    });
                    this.fireViewEvent("addFinalEquipements");

                },
                failure: function (response) {
                    Ext.Msg.alert('Erreurs', 'Une erreurs dans le serveurs, veuillez contactez le support');
                    var window = this.getView().up('window');
                    if(window){
                        window.close();
                    }
                }
            });

        } else {
            Ext.Msg.alert('Données incorrect', 'Vous avez des erreurs dans le formulaire')
        }

    },


    afterRender : function () {

        if (this.getView().recordEquipFinalCond) {
            var form = this.lookupReference('fromWindowAddFinalEquipmentCond');
            form.loadRecord(this.getView().recordEquipFinalCond);
        }
    }

});



/*
    submit : function () {
        var newEquipmentFinalCond = {
            type: this.getViewModel().getValue('type'),
            subCategoryId: this.getViewModel().get('subCategoryId'),
            name:this.lookupReference('textfieldTypeEquipement').getValue(),
            intermediary:this.lookupReference('boxlabelIntermediaire').getValue(),
            capacity:this.lookupReference('numberfieldCapacite').getValue(),
            capacityUnit:this.lookupReference('comboBoxCapacite').getValue(),
            lenght:this.lookupReference('numberfieldLongueurUtile').getValue(),
            lenghtUnit:this.lookupReference('comboboxLongueurUtile').getValue(),
            width:this.lookupReference('numberfieldLargeurUtile').getValue(),
            widthUnit:this.lookupReference('comboboxLargeurUtile').getValue(),
            height:this.lookupReference('numberfieldHauteurUtiles').getValue(),
            heightUnit:this.lookupReference('comboboxHauteurUtiles').getValue(),
            //  this.lookupReference('checkboxPoidsVide').getValue(),
            emptyWeight:this.lookupReference('numberfieldPoidsVide').getValue(),
            emptyWeightUnit:this.lookupReference('comboboxPoidsVide').getValue(),
            weight:this.lookupReference('checkBoxMaxAdmi').getValue(),
            maxWeightAdmittable:this.lookupReference('numberfieldMaxAdmi').getValue(),
            maxWeightAdmittableUnit:this.lookupReference('comboboxMaxAdmi').getValue(),
            investmentPrice:this.lookupReference('numberfieldPrixInvestissement').getValue(),
            amortissement:this.lookupReference('numberfieldDureeAmortissement').getValue(),
            locationPrice:this.lookupReference('numberfieldPrixLocation').getValue(),
            debit:this.lookupReference('numberfieldDebit').getValue(),
            debitUnit:this.lookupReference('comboboxDebit').getValue(),
            energy:this.lookupReference('comboboxEnergie').getValue(),
            functionnalCost:this.lookupReference('numberfieldCoutHoraireFonctionnement').getValue(),
            treatmentCapacity:this.lookupReference('numberfieldCapAnnuelleTraitement').getValue(),
            compartmentsNumber:this.lookupReference('numberfieldNombreCompartiment').getValue(),
            groundArea:this.lookupReference('numberfieldSurfaceSol').getValue()
            // Norme certification
            // Fabricant
            //classe ADR
            // Protection/fermeture
            // Commentaires

        };
            Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/equipements/addFinalEquipment' ,
            method: 'POST',
            jsonData: newEquipmentFinalCond,
            headers:
                {
                    //'X-CSRF-TOKEN': getToken(),
                    'Content-Type': 'application/json'
                },
            success:function(response) { //Une fois la requete effectué , renvoi un message
                Ext.Msg.alert({
                    title:'Succès',message: 'Une nouvelle sous-catégorie d\'équipement à été enregistré',
                    fn: function() {
                        this.getView().close();
                    },
                    scope: this
                });
                this.fireViewEvent('addFinalEquipements');
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });
    },
*/
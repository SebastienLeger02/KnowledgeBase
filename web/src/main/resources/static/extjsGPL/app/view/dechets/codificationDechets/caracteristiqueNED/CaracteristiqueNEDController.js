Ext.define('NovaAdmin.view.dechets.codificationDechets.caracteristiqueNED.CaracteristiqueNEDController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.caracteristiqueNEDController',

    init :function () {

    },



    clickLeaf : function(treepanel, td, cellIndex, record, tr, rowIndex, e, eOpts) {



        var dataFicheTech = {
            //id:this.lookupReference('').getValue(),
            //name:this.lookupReference('').getValue(),
            version:0,
            biomassRate:this.lookupReference('checkboxBiomasse').getValue(),
            cedId:this.lookupReference('textfieldCodeCED').getValue(),
            cendreMax:this.lookupReference('sliderTauxCendre').getValue(), // a revoir slider
            cendreMin:this.lookupReference('sliderTauxCendre').getValue(), // a revoir slider
            comeFromBiomass:this.lookupReference('numberfieldBiomasseDechet').getValue(),
            halogen:this.lookupReference('boxlabelHalogen').getValue(),
            isTransversal:this.lookupReference('').getValue(),
            metals:this.lookupReference('boxlabelMetals').getValue(),
            methanogenMax:this.lookupReference('').getValue(),
            methanogenMin:this.lookupReference('').getValue(),
            pcb:this.lookupReference('boxlabelPCB').getValue(),
            pciMax:this.lookupReference('sliderGammePCI').getValue(), // a revoir slider
            pciMin:this.lookupReference('sliderGammePCI').getValue(), // a revoir slider
            subCategoryId:this.lookupReference('').getValue(),
            sulfur:this.lookupReference('boxLabelSulfur').getValue(),
            pertinence:this.lookupReference('comboboxPertinenceFT').getValue(),
            averageDensity:this.lookupReference('numberfieldDensiteMoyenne').getValue(),
            bioGasWaste:this.lookupReference('checkboxBioGasWaste').getValue(),
            degradable:this.lookupReference('radiofieldDechetsDegradable').getValue(),
            emissionco2factorDueToFire:this.lookupReference('numberfieldFacteurEmissionIncineration').getValue(),
            emissionco2factorDueToValor:this.lookupReference('numberfieldFacteurEmission').getValue(),
            householdWasteBond:this.lookupReference('checkboxAssiminableDechMenagers').getValue(),
            maxDensity:this.lookupReference('numberfieldDensiteMaximale').getValue(),
            recyclabilityRate:this.lookupReference('numberfieldTauxRecyclabilite').getValue()
        };



        if( !record.get('children')[0] ){

            Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
                scope:this,
                url:'/dechets/dataFicheTechnique' ,
                method:'POST',
                jsonData: dataFicheTech,
                headers:
                    {
                        //'X-CSRF-TOKEN': getToken(),
                        'Content-Type': 'application/json'

                    },
                success:function(response) { //Une fois la requete effectué , renvoi un message

                    //this.fireViewEvent('addSousCategorieEquipements'):this.lookupReference('').getValue(),
                },
                failure:function (response) {
                    debugger;
                    Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
                }
            });

            //treePanelNed.data.records[0].data.get('Idx'):this.lookupReference('').getValue(),
        }


    }
});
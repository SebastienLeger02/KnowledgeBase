Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowAddFinalEquipement.WindowAddFinalEquipementController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowAddFinalEquipementContenantsController',


    init: function() {

    },

    onAddEquipmentFinalCount : function () {
        debugger;
        var controller = this;
        var form = this.lookupReference('formEquipTypeCount');
        var values = form.getValues();

        values.subCategoryId = this.getViewModel().get('subCategoryId');
        values.type = this.getViewModel().get('type');

        if(values.protection)
            values.protection = values.protection === 'on';

        if(values.retention)
            values.retention = values.retention === 'on';

        if(values.intermediary)
            values.intermediary = values.intermediary === 'on';

        if (form.isValid()) {
            Ext.Ajax.request({
                url:'/equipements/addNewEquipmentType',
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

        if (this.getView().recordEquipFinalCont) {
            var form = this.lookupReference("formEquipTypeCount");
            form.loadRecord(this.getView().recordEquipFinalCont);
        }
    }

    /*
      submit: function() {  // permet de récupérer les informations des champs
          debugger;
          var newFinalEquipment= {
              name:this.lookupReference('textfieldTypeEquipement').getValue(),
              type: this.getViewModel().get('type'),
              subCategoryId: this.getViewModel().get('subCategoryId'),
              version: 0, // provisoire
              intermediary:this.lookupReference('boxlabelIntermediaire').getValue(),
              capacity:this.lookupReference('numberfieldCapacite').getValue(),
              capacityUnit:this.lookupReference('comboBoxCapacite').getValue(),
              lenght:this.lookupReference('numberfieldLongueurUtile').getValue(),
              lenghtUnit:this.lookupReference('comboboxLongueurUtile').getValue(),
              width:this.lookupReference('numberfieldLargeurUtile').getValue(),
              widthUnit:this.lookupReference('comboboxLargeurUtile').getValue(),
              height:this.lookupReference('numberfieldHauteurUtiles').getValue(),
              heightUnit:this.lookupReference('comboboxHauteurUtiles').getValue(),
              weight:this.lookupReference('checkboxPoidsVide').getValue(),
              emptyWeight:this.lookupReference('numberfieldPoidsVide').getValue(),
              emptyWeightUnit:this.lookupReference('comboboxPoidsVide').getValue(),
              maxWeightAdmittable:this.lookupReference('numberfieldMaxAdmi').getValue(),
              maxWeightAdmittableUnit:this.lookupReference('comboboxMaxAdmi').getValue(),
             // maxLoad:this.lookupReference('').getValue(),
              gerbageArea:this.lookupReference('numberfieldNiveauxGerbage').getValue(),
              investmentPrice:this.lookupReference('numberfieldPrixInvestissement').getValue(),
              amortissement:this.lookupReference('numberfieldDureeAmortissement').getValue(),
              locationPrice:this.lookupReference('numberfieldPrixLocation').getValue(),
              compartmentsNumber:this.lookupReference('numberfieldNumCompartiment').getValue(),
              protection:this.lookupReference('checkboxProtectionFermeture').getValue(),
              retention:this.lookupReference('textareaRetention').getValue(),
              //retentionId:this.lookupReference('').getValue(),
              groundArea:this.lookupReference('numberfieldSurfaceSol').getValue()
              //commentId:this.lookupReference('').getValue()
              //Materiel de collecte proposé'
              //Classe ARD => traitement par Jointure de table
              //Fabricant => traitement par Jointure de table
              //Contraintes de manutention => Je ne vois pa sce que c'est comme colonne
              //Norme certification => traitement par Jointure de table

          };

          Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
              scope:this,
              url:'/equipements/addFinalEquipment' ,
              method: 'POST',
              jsonData: newFinalEquipment,
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
      }
  */
});
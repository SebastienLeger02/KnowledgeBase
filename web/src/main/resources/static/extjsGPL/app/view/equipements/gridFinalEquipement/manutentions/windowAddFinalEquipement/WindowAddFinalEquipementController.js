Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.manutentions.windowAddFinalEquipement.WindowAddFinalEquipementController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowAddFinalEquipementManutentionsController',

    onAddEquipTypeManu : function () {
        var controller = this;
        var form = this.lookupReference('fromEquipTypeManu');
        var values = form.getValues();
        values.subCategoryId = this.getViewModel().get('subCategoryId');
        values.type = this.getViewModel().get('type');

        if (form.isValid()) {
            Ext.Ajax.request({
                url:'/equipements/addNewEquipmentType' ,
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

        if (this.getView().recordEquipTypeManu) {
            var form = this.lookupReference('fromEquipTypeManu');
            form.loadRecord(this.getView().recordEquipTypeManu);
        }
    }
/*
    submit : function() {
        var newFinalEquipmentManu = {
            subCategoryId: this.getViewModel().get('subCategoryId'),
            type: this.getViewModel().getValue('type'),
            name: this.lookupReference('textfieldTypeEquipement').getValue(),
            intermediary:this.lookupReference('boxlabelIntermediaire').getValue(),
            strenght: this.lookupReference('numberfieldForce').getValue(),
            hauteurDeLevage: this.lookupReference('numberfieldHauteurLevage').getValue(),
            investmentPrice: this.lookupReference('numberfieldPrixInvestissements').getValue(),
            amortissment: this.lookupReference('numberfieldDureeAmortissement').getValue(),
            locationPrice: this.lookupReference('numberfieldPrixLoccasion').getValue(),
            locationHour: this.lookupReference('numberfieldVolumeHoraire').getValue(),
            hourPrice: this.lookupReference('numberfieldPrixHeure').getValue(),
            energy: this.lookupReference('comboboxEnergie').getValue(),
            functionnalCost: this.lookupReference('numberfieldCoutHoraireFonctionnement').getValue(),
            groundArea: this.lookupReference('numberfieldSurfaceSol').getValue()
            //commentId => ce trouve dans la table comment
            //Contraintes de manutention
            //Norme certification => traitement par Jointure de table
        };

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/equipements/addFinalEquipment' ,
            method: 'POST',
            jsonData: newFinalEquipmentManu,
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
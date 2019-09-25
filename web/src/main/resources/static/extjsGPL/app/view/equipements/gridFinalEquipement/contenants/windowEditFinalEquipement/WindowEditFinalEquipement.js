Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowEditFinalEquipement.WindowEditFinalEquipement' , {
    extend:'Ext.window.Window',
    alias:'widget.windowEditFinalEquipement',
    cls:'window-edit-final-equipement window-main skinning-window',

    requires:[
        'NovaAdmin.view.equipements.gridFinalEquipement.contenants.windowEditFinalEquipement.WindowEditFinalEquipementController'
    ],

    controller:'windowEditFinalEquipementContenantsController',

    height:600,
    flex:1,
    /*  width: 600,
       maxWidth:600, */
    header:{
        height: 40
    },
    modal:true,


    title:'Création d\'un nouvel équipement', //i18n.CREATION_EQUIP

    layout:{
        type:'vbox',
        align:'left'
    },

    defaults: {
        margin: 5,
        pediting: 2
    },

    items: [{
        defaults: {
            margin:'5 0 5 0',
            pediting: 2
        },
        xtype: 'container',
        margin: '20 10 20 10',
        cls: 'container-window-edit-final-equipement',
        autoScroll : true,
        //bodyStyle:'overflowY: auto',
        //flex: 1,
        //width: 600,
        /*layout:{
            type:'vbox',
            align: 'center'
        }, */
        items: [{
            xtype: 'textfield',        // --------------------------------- Type d'équipement
            reference:'textfieldTypeEquipement',
            cls: 'textfield-type-equipement',
            //name: '',
            fieldLabel: 'Type d\'équipement',
            labelWidth: 200,
            width: 450
        }, {
            xtype: 'textfield',       //---------------------------------- Fabricant
            reference:'textfieldFabricant',
            cls: 'textfield-fabricant',
            name: '',
            fieldLabel: 'Fabricant',
            labelWidth: 200,
            width: 450
        }, {
            xtype: 'textfield',     //------------------------------------ Norme certification
            //reference:'textfieldSousCategorie ',
            cls: 'textfield-norme-certification',
            name: '',
            fieldLabel: 'Norme certification',
            labelWidth: 200,
            width: 450
        }, {
            xtype: 'fieldcontainer',    // ----------------------------- Utilisation
            //reference:'containerPictogramme',
            cls: 'container-window-radiofield-utilisation',
            fieldLabel: 'Utilisation',
            defaultType: 'radiofield',
            labelWidth: 200,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [{
                boxLabel: 'Intermédiaire',
                reference:'boxlabelIntermediaire',
                cls: 'radiofield-intermediaire',
                name: 'Intermédiaire'
                //width:100,
            }, {
                boxLabel: 'Final',
                cls: 'radiofield-final',
                name: 'Final'
                //width:100,
            }]
        }, {                 // ---------------------------------------------- Capacité
            xtype: 'container',
            cls: 'container-capacite',
            margin: '5 0 5 0',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-capacite',
                fieldLabel: 'Capacité',
                reference:'numberfieldCapacite',
                //maxValue:,
                //minValue:
                name: 'capaciteEquipement',
                value: '',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-capacite',
                reference:'comboBoxCapacite',
                store: {
                    fields: ['capacityyUnit'],
                    data : [
                        {"capacityyUnit":"l"},
                        {"capacityyUnit":"m3"}
                    ]
                },
                queryMode: 'local',
                displayField: 'capacityyUnit',
                valueField: 'capacityyUnit',
                value:'l'
                //width:450
            }]
        }, {     // ----------------------------------------------- Longueur utiles
            xtype: 'container',
            cls: 'container-longueur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-longueur-utile',
                fieldLabel: 'Longueur utiles',
                reference:'numberfieldLongueurUtile',
                //maxValue:,
                //minValue:
                name: 'longueurUtileEquipement',
                value: '',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-longueur-utile',
                reference:'comboboxLongueurUtile',
                store: {
                    fields: ['lenghtUnit'],
                    data : [
                        {"lenghtUnit":"m"},
                        {"lenghtUnit":"cm"},
                        {"lenghtUnit":"mm"}
                    ]
                },
                queryMode: 'local',
                displayField: 'lenghtUnit',
                valueField: 'lenghtUnit',
                value:'m'
                //width:450
            }]
        }, {          // ------------------------------------ Largueur utiles
            xtype: 'container',
            cls: 'container-largeur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-largeur-utile',
                fieldLabel: 'Largueur utiles',
                reference:'numberfieldLargeurUtile',
                //maxValue:,
                //minValue:
                name: 'largueurUtileEquipement',
                value: '',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-longueur-utile',
                reference:'comboboxLargeurUtile',
                store: {
                    fields: ['widthUnit'],
                    data : [
                        {"widthUnit":"m"},
                        {"widthUnit":"cm"},
                        {"widthUnit":"mm"}
                    ]
                },
                queryMode: 'local',
                displayField: 'widthUnit',
                valueField: 'widthUnit',
                value:'m'
                //width:450
            }]
        }, {            // ------------------------------------ Hauteur utiles
            xtype: 'container',
            cls: 'container-hauteur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-hateur-utile',
                fieldLabel: 'Hauteur utiles',
                reference:'numberfieldHauteurUtiles',
                //maxValue:,
                //minValue:
                name: 'hauteurUtileEquipement',
                value: '',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-hauteur-utile',
                reference:'comboboxHauteurUtiles',
                store: {
                    fields: ['heightUnit'],
                    data : [
                        {"heightUnit":"m"},
                        {"heightUnit":"cm"},
                        {"heightUnit":"mm"}
                    ]
                },
                queryMode: 'local',
                displayField: 'heightUnit',
                valueField: 'heightUnit',
                value:'m'
                //width:450
            }]
        }, {          // ------------------------------------- Poids à vide
            xtype: 'container',
            cls: 'container-poids-vide',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-poids-vide',
                fieldLabel: 'Poids à vide',
                labelWidth: 200,
                reference:'checkboxPoidsVide'
                //name:''
            }, {
                xtype:'tbspacer',
                width:27
            },{
                xtype: 'numberfield',
                cls: 'numberfield-poids-vide',
                reference:'numberfieldPoidsVide',
                //maxValue:,
                //minValue:
                name: 'poidsVideEquipement',
                value: '',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-poids-vide',
                reference:'comboboxPoidsVide',
                store: {
                    fields: ['emptyWeightUnit'],
                    data : [
                        {"emptyWeightUnit":"kg"},
                        {"emptyWeightUnit":"t"}
                    ]
                },
                queryMode: 'local',
                displayField: 'emptyWeightUnit',
                valueField: 'emptyWeightUnit',
                value:'kg'
                //width:450
            }]
        }, {               // ------------------------------- Charge max. admissible
            xtype: 'container',
            cls: 'container-charge-max-admi',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-charge-max-admi',
                reference:'checkBoxMaxAdmi',
                fieldLabel: 'Charge max. admissible',
                labelWidth: 200
                //name:''
            }, {
                xtype:'tbspacer',
                width:27
            },{
                xtype: 'numberfield',
                cls: 'numberfield-charge-max-admi',
                reference:'numberfieldMaxAdmi',
                //maxValue:,
                //minValue:
                name: 'chargeMaxAdmiEquipement',
                value: '',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-charge-max-admi',
                reference:'comboboxMaxAdmi',
                store: {
                    fields: ['maxWeightAdmittableUnit'],
                    data : [
                        {"maxWeightAdmittableUnit":"t"},
                        {"maxWeightAdmittableUnit":"kg"}
                    ]
                },
                queryMode: 'local',
                displayField: 'maxWeightAdmittableUnit',
                valueField: 'maxWeightAdmittableUnit',
                value:'t'
                //width:450
            }]
        }, {            // ------------------------------------ Niveau de gerbage
            xtype: 'numberfield',
            cls: 'numberfield-niveaux-gerbage',
            reference:'numberfieldNiveauxGerbage',
            fieldLabel: 'Niveau de gerbage',
            labelWidth: 200
            //width:450
            //store: ,
            //queryMode: 'local',
            //displayField: 'name',
            //valueField: '',
        }, {      // -------------------------------------------- Prix de l'investissement
            xtype: 'container',
            cls: 'container-prix-investissement',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-prix-investissement',
                reference:'numberfieldPrixInvestissement',
                fieldLabel: 'Prix de l\'investissement',
                //maxValue:,
                //minValue:
                name: 'prixInvestissementEquipement',
                value: '',
                labelWidth: 200
            }, {
                xtype: 'label',
                cls: 'label-prix-investissement',
                text: '€ HT'
            }]
        },{     // --------------------------------------------- Durée amortissement
            xtype: 'container',
            cls: 'container-duree-amortissement',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-duree-amortissement',
                reference:'numberfieldDureeAmortissement',
                fieldLabel: 'Durée amortissement',
                //maxValue:,
                //minValue:
                name: 'dureeAmortissementEquipement',
                value: '',
                labelWidth: 200
                //name:''
            }, {
                xtype: 'label',
                cls: 'label-duree-amortissement',
                text: 'an(s)'
            }]
        }, {        // --------------------------------------------- Prix de location
            xtype: 'container',
            cls: 'container-prix-location',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-prix-location',
                reference:'numberfieldPrixLocation',
                fieldLabel: 'Prix de location',
                //maxValue:,
                //minValue:
                name: 'prixLocationEquipement',
                value: '',
                labelWidth: 200
                //name:''
            }, {
                xtype: 'label',
                cls: 'label-prix-location',
                text: '€'
            }]
        }, {           // -------------------------------------------------Classe ADR
            xtype: 'textfield',
            //reference:'textfieldSousCategorie ',
            cls: 'textfield-classe-adr',
            name: '',
            fieldLabel: 'Classe ADR',
            labelWidth: 200,
            width: 350
        },{  // -------------------------------------------------Nombre de compartiment
            xtype:'numberfield',
            cls:'numberfiel-num-compartiment',
            reference:'numberfieldNumCompartiment',
            fieldLabel:'Nombre de compartiment',
            labelWidth: 200,
            width: 350
        }, {        // --------------------------------------------- Protection/Fermeture
            xtype: 'container',
            cls: 'container-protection-fermeture',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'label',
                cls: 'label-protection-fermeture',
                text: 'Protection/Fermeture',
                width: 150
            }, {
                xtype: 'checkbox',
                cls: 'checkbox-protection-fermeture',
                reference:'checkboxProtectionFermeture',
                fieldLabel: 'Type',
                labelWidth: 35
                //name:''
            }]
        }, {        // --------------------------------------------- Rétention
            xtype: 'container',
            cls: 'container-retention',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'label',
                cls: 'label-retention',
                text: 'Rétention',
                width: 150
            }, {
                xtype: 'checkbox',
                cls: 'checkbox-retention',
                fieldLabel: 'Type',
                labelWidth: 35
                //name:''
            }, {
                xtype: 'textarea',
                fieldCls: 'textarea-retention',
                cls: 'textarea-retention',
                reference:'textareaRetention',
                labelWidth: 200,
                grow: false,
                name: '',
                //anchor:'100%',
                width: 350,
                height: 100
            }]
        }, {        // --------------------------------------------- Surface au sol
            xtype: 'container',
            cls: 'container-surface-sol',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'checkbox-surface-sol',
                reference:'numberfieldSurfaceSol',
                fieldLabel: 'Surface au sol',
                labelWidth:200
                //name:''
            }, {
                xtype: 'label',
                cls: 'label-surface-au-sol',
                text: 'm²'
            }]
        }, {        // --------------------------------------------- Contraintes de manutention
            xtype: 'textfield',
            cls: 'textfield-contrainte-manutention',
            fieldLabel: 'Contraintes de manutention',
            //reference:'textfieldSousCategorie ',
            name: '',
            labelWidth: 200,
            width: 450

        }, {           // --------------------------------------- Matériel de collect proposé
            xtype: 'textarea',
            fieldLabel: 'Matériel de collect proposé',
            fieldCls: 'textarea-materiel-collect-propose',
            cls: 'textarea-materiel-collect-propose',
            // reference:'textareaManutentionsAffectees',
            labelWidth: 200,
            grow: false,
            name: '',
            //anchor:'100%',
            width: 450,
            height: 100
        }, {           // --------------------------------------- Commentaires
            xtype: 'textarea',
            fieldLabel: 'Commentaire',
            fieldCls: 'textarea-commentaire',
            cls: 'textarea-materiel-collect-propose',
            // reference:'textareaManutentionsAffectees',
            labelWidth: 200,
            grow: false,
            name: '',
            //anchor:'100%',
            width: 450,
            height: 100
        }, {
            xtype: 'container',
            cls: 'container-window-button-edit-sc',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            margin: '10 0 15 111',
            items: [{
                xtype: 'button',
                text: 'Valider',
                //reference:'buttonValiderEditSC',
                cls: 'button-valider-edit-sc',
                iconCls: 'icon-valider-edit-sc',
                handler:'submit', //function () {Ext.create.MessageBox('Test', 'Le button fonctionne')},
                margin: '5 5 5 5',
                width: 120,
                height: 40
            }, {
                xtype: 'tbspacer',
                width: 10
            }, {
                xtype: 'button',
                text: 'Annuler',
                // reference:'buttonAnnulerEditSC',
                cls: 'button-annuler-edit-sc',
                iconCls: 'icon-annuler-edit-sc',
                handler:'closeWindow', //function () {Ext.create.MessageBox('Test', 'Le button fonctionne')},
                margin: '5 5 5 5',
                width: 120,
                height: 40
            }]
        }]
    }]
});

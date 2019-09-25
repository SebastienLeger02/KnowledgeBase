Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.conditionnement.windowEditFinalEquipement.WindowEditFinalEquipement' , {
    extend:'Ext.window.Window',
    alias:'widget.windowEditFinalEquipementConditionnement',
    cls:'window-edit-final-equipement window-main skinning-window',

    requires:[
        'NovaAdmin.view.equipements.gridFinalEquipement.conditionnement.windowEditFinalEquipement.WindowEditFinalEquipementController'
    ],

    controller:'windowEditFinalEquipementConditionnementController',

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
        /*store: {
            type: '',//'gridDechetCategorieStore',
            filters: [
                function(item) {
                    return item.data.code === "COND";
                }
            ]
        },*/
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
                name: 'Final',
                margin:'0 0 0 10'
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
                value:'l',
                margin:'0 0 0 10'
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
                        {"lenghtUnit":"mm"},
                        {"lenghtUnit":"cm"},
                        {"lenghtUnit":"m"}
                    ]
                },
                queryMode: 'local',
                displayField: 'lenghtUnit',
                valueField: 'lenghtUnit',
                value:'mm',
                margin:'0 0 0 10'
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
                    fields: ['widthtUnit'],
                    data : [
                        {"widthtUnit":"mm"},
                        {"widthtUnit":"cm"},
                        {"widthtUnit":"m"}
                    ]
                },
                queryMode: 'local',
                displayField: 'widthtUnit',
                valueField: 'widthtUnit',
                value:'mm',
                margin:'0 0 0 10'
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
                        {"heightUnit":"mm"},
                        {"heightUnit":"cm"},
                        {"heightUnit":"m"}
                    ]
                },
                queryMode: 'local',
                displayField: 'heightUnit',
                valueField: 'heightUnit',
                value:'mm',
                margin:'0 0 0 10'
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
                    fields: ['weight'],
                    data : [
                        {"weight":"kg"},
                        {"weight":"t"}
                    ]
                },
                queryMode: 'local',
                displayField: 'weight',
                valueField: 'weight',
                value:'kg',
                margin:'0 0 0 10'
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
                    fields: ['maxLoad'],
                    data : [
                        {"maxLoad":"kg"},
                        {"maxLoad":"t"}
                    ]
                },
                queryMode: 'local',
                displayField: 'maxLoad',
                valueField: 'maxLoad',
                value:'kg',
                margin:'0 0 0 10'
                //width:450
            }]
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
        }, {           // -------------------------------------------------Débit
            xtype: 'container',
            cls: 'container-debit',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-debit',
                reference:'numberfieldDebit',
                fieldLabel: 'Débit',
                //maxValue:,
                //minValue:
                name: 'debitEquipement',
                value: '',
                labelWidth: 200
                //name:''
            },{
                xtype: 'combobox',
                cls: 'combobox-debit',
                reference:'comboboxDebit',
                store: {
                    fields: ['debit'],
                    data : [
                        {"debit":"m3"},
                        {"debit":"t"}
                    ]
                },
                queryMode: 'local',
                displayField: 'debit',
                valueField: 'debit',
                value:'m3',
                margin:'0 0 0 10'
                //width:450
            }, {
                xtype: 'label',
                cls: 'label-debit',
                text: 'par heure'
            }]
        },{  // -------------------------------------------------Energie
            xtype: 'combobox',
            cls: 'combobox-energie',
            reference:'comboboxEnergie',
            fieldLabel: 'Energie',
            //maxValue:,
            //minValue:
            name: 'EnergieEquipement',
            store: {
                fields: ['energy'],
                data : [
                    {"energy":"Biodiesel B 10"},
                    {"energy":"Biodiesel B 30"},
                    {"energy":"Diesel"},
                    {"energy":"Electrique"},
                    {"energy":"Essence"},
                    {"energy":"Gaz"},
                    {"energy":"Manuel"}
                ]
            },
            queryMode: 'local',
            displayField: 'energy',
            valueField: 'energy',
            value:'Electrique',
            labelWidth: 200
        },{
            // --------------------------------------------- Coût horaire de fonctionnement
            xtype: 'numberfield',
            cls: 'numberfield-cout-horaire-fonctionnement',
            reference:'numberfieldCoutHoraireFonctionnement',
            fieldLabel: 'Coût horaire de fonctionnement',
            //maxValue:,
            //minValue:
            name: 'coutHoraireFonctionnementEquipement',
            value: '',
            labelWidth: 200
            //name:''
        },{
            // --------------------------------------------- Capacité annuelle de traitement
            xtype: 'numberfield',
            cls: 'numberfield-cap-annuelle-traitement',
            reference:'numberfieldCapAnnuelleTraitement',
            fieldLabel: 'Capacité annuelle de traitement',
            //maxValue:,
            //minValue:
            name: 'capAnnuelleTraitementEquipement',
            value: '',
            labelWidth: 200
            //name:''
        }, {           // -------------------------------------------------Classe ADR
            xtype: 'textfield',
            //reference:'textfieldSousCategorie ',
            cls: 'textfield-classe-adr',
            name: '',
            fieldLabel: 'Classe ADR',
            labelWidth: 200,
            width: 350
        },{
            // --------------------------------------------- Nombre de compartiment
            xtype: 'numberfield',
            cls: 'numberfield-nombre-compartiment',
            reference:'numberfieldNombreCompartiment',
            fieldLabel: 'Nombre de compartiment',
            //maxValue:,
            //minValue:
            name: 'nombreCompartimentEquipement',
            value: '',
            labelWidth: 200
            //name:''
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

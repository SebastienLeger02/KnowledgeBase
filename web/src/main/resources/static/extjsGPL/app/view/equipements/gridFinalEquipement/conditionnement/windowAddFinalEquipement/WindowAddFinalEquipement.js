Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.conditionnement.windowAddFinalEquipement.WindowAddFinalEquipement' , {
    extend:'Ext.window.Window',
    alias:'widget.windowAddFinalEquipementConditionnement',
    cls:'window-add-final-grid window-main skinning-window',

    requires:[
        'NovaAdmin.view.equipements.gridFinalEquipement.conditionnement.windowAddFinalEquipement.WindowAddFinalEquipementController'
    ],

    controller:'windowAddFinalEquipementConditionnementController',

    height:600,
    flex:1,
    header:{
        height: 40
    },
    modal:true,
    frame:true,


    title:'Création d\'un nouvel équipement', //i18n.CREATION_EQUIP

    layout:{
        type:'vbox',
        align:'left'
    },


    items: [{
        xtype: 'form',
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
            padding: 2
        },

        //margin: '20 10 20 10',
        cls: 'form-window-add-final-equipement window-form-skinning',
        reference:'fromWindowAddFinalEquipmentCond',
        //autoScroll : true,
        //bodyStyle:'overflowY: auto',
        //flex: 1,
        //width: 600,
        /*layout:{
            type:'vbox',
            align: 'center'
        }, */
        width:600,
        items: [{ // --------------------------------- Type d'équipement
            xtype:'container',
            margin: '5 0 5 0',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[{
                xtype:'label',
                reference:'labelTypeEquipement',
                cls:'label-type-equipement',
                text:'Type d\'équipement',
                width:185
            },{
                xtype:'image',
                reference:'imageAsterisque',
                cls:'image-asterisque',
                src: '',
                width:20
            }, {
                xtype: 'textfield',
                reference: 'textfieldTypeEquipement',
                cls: 'textfield-type-equipement',
                name: 'name',
                allowBlank:true,
                width: 245
            }]
        }, {
            xtype: 'tagfield',       //---------------------------------- Fabricant
            fieldLabel: 'Fabricant',
            reference:'tagFieldFabricant',
            cls: 'tagfield-fabricant',
            store: {
                type:'equipmentManufacturerTagFieldStore'
            },
            name: 'equipmentManufacturerName',
            publishes: 'id',
            displayField:'name',
            autoLoadOnValue: true,
            valueField: 'id',
            //filterPickList: true,
            labelWidth: 200,
            width: 450,
            flex:1
        }, {   // ----------------------------------------- Norme certification
            xtype: 'tagfield',
            reference:'tagfieldNormeCertification',
            cls: 'tagfield-norme-certification',
            store: {
                type:'equipementNormTagFieldStore'
            },
            name: 'equipmentNormCode',
            fieldLabel: 'Norme certification',
            publishes: 'id',
            displayField:'code',
            autoLoadOnValue: true,
            valueField: 'id',
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
                cls: 'radiofield-intermediaire button-radio',
                name:'intermediary',
                margin:'0 5 0 0',
                value:true
                //width:100,
            }, {
                boxLabel: 'Final',
                cls: 'radiofield-final button-radio',
                name:'intermediary',
                margin:'0 5 0 10'
                //width:100,
            }]
        }, {
            // ---------------------------------------------- Capacité
            xtype: 'container',
            cls: 'container-capacite',
            margin: '5 0 5 0',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype:'label',
                reference:'labelCapacity',
                cls:'label-capacity',
                text:'Capacité',
                width:185
            },{
                xtype:'image',
                reference:'imageAsterisque',
                cls:'image-asterisque',
                width:20
            },{
                xtype: 'numberfield',
                cls: 'numberfield-capacite',
                reference:'numberfieldCapacite',
                //maxValue:,
                //minValue:
                name: 'capacity',
                allowBlank:true,
                value: '0'
            }, {
                xtype: 'combobox',
                cls: 'combobox-capacite',
                reference:'comboBoxCapacite',
                name:'capacityUnit',
                store: {
                    fields: ['capacityUnit'],
                    data : [
                        {"capacityUnit":"l"},
                        {"capacityUnit":"m3"}
                    ]
                },
                queryMode: 'local',
                displayField: 'capacityUnit',
                valueField: 'capacityUnit',
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
                name: 'lenght',
                value: '0',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-longueur-utile',
                reference:'comboboxLongueurUtile',
                name:'lenghtUnit',
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
                name: 'widht',
                value: '0',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-longueur-utile',
                reference:'comboboxLargeurUtile',
                name:'widhtUnit',
                store: {
                    fields: ['widhtUnit'],
                    data : [
                        {"widhtUnit":"mm"},
                        {"widhtUnit":"cm"},
                        {"widhtUnit":"m"}
                    ]
                },
                queryMode: 'local',
                displayField: 'widhtUnit',
                valueField: 'widhtUnit',
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
                name: 'height',
                value: '0',
                labelWidth: 200
            }, {
                xtype: 'combobox',
                cls: 'combobox-hauteur-utile',
                reference:'comboboxHauteurUtiles',
                name:'heightUnit',
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
        }, {             // ------------------------------------- Poids à vide
            xtype: 'container',
            cls: 'container-poids-vide',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-poids-vide checkbox-skinning',
                fieldLabel: 'Poids à vide',
                labelWidth: 160,
                reference:'checkboxPoidsVide',
                checked:false
                //name:'emptyWeight'
            },{
                xtype:'tbspacer',
                width:27
            },{
                xtype: 'numberfield',
                cls: 'numberfield-poids-vide',
                reference:'numberfieldPoidsVide',
                //maxValue:,
                //minValue:
                name: 'emptyWeight',
                value: '0',
                labelWidth: 200,
                bind: {
                    disabled:'{!checkboxPoidsVide.checked}'
                }
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
                value:'kg',
                margin:'0 0 0 10',
                bind: {
                    disabled:'{!checkboxPoidsVide.checked}'
                }
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
                cls: 'checkbox-charge-max-admi checkbox-skinning',
                reference:'checkBoxMaxAdmi',
                fieldLabel: 'Charge max. admissible',
                labelWidth: 160,
                checked:false
                //name:''
            }, {
                xtype:'tbspacer',
                width:27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-charge-max-admi',
                reference:'numberfieldMaxAdmi',
                //maxValue:,
                //minValue:
                name: 'maxWeightAdmittable',
                value: '0',
                labelWidth: 200,
                bind: {
                    disabled: '{!checkBoxMaxAdmi.checked}'
                }
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
                value:'t',
                margin:'0 0 0 10',
                bind: {
                    disabled: '{!checkBoxMaxAdmi.checked}'
                }
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
                name: 'investmentPrice',
                value: '0',
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
                name: 'amortissement',
                value: '0',
                labelWidth: 200
                //name:''
            }, {
                xtype: 'label',
                cls: 'label-duree-amortissement',
                text: 'an(s)',
                margin:'0 0 0 10'
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
                name: 'locationPrice',
                value: '0',
                labelWidth: 200
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
                name: 'debit',
                value: '',
                labelWidth: 200
            },{
                xtype: 'combobox',
                cls: 'combobox-debit',
                reference:'comboboxDebit',
                store: {
                    fields: ['debitUnit'],
                    data : [
                        {"debitUnit":"m3"},
                        {"debitUnit":"t"}
                    ]
                },
                queryMode: 'local',
                displayField: 'debitUnit',
                valueField: 'debitUnit',
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
            name: 'energy',
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
            name: 'functionnalCost',
            value: '0',
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
            name: 'treatmentCapacity',
            value: '0',
            labelWidth: 200
            //name:''
        }, {           // -------------------------------------------------Classe ADR
            xtype: 'tagfield',
            reference:'tagfieldDangerousness',
            cls: 'tagfield-classe-adr',
            name: 'equipmentDangerousnessCode',
            displayField:'code',
            fieldLabel: 'Classe ADR',
            store: {
                type: 'equipementDangerousnessTagFieldStore'
            },
            publishes: 'id',
            autoLoadOnValue: true,
            valueField: 'id',
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
            name: 'compartmentsNumber',
            value: '0',
            labelWidth: 200
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
                labelWidth: 35,
                name:'protection',
                checked:false
            }, {
                xtype:'tbspacer',
                width: 37
            },{
                xtype: 'tagfield',
                reference:'tagfieldProtectionType',
                cls: 'tagfield-Protection-Type',
                store: {
                    type:'equipementProtectionTypeTagFieldStore'
                },
                name: 'equipmentProtectionTypeName',
                publishes: 'id',
                displayField:'name',
                autoLoadOnValue: true,
                valueField: 'id',
                labelWidth: 200,
                width: 275,
                bind: {
                    hidden: '{!checkboxProtectionFermeture.checked}'
                }
            }]
        }, {        // --------------------------------------------- Surface au sol
            xtype: 'container',
            cls: 'container-surface-sol',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype:'label',
                reference:'labelSurfaceSol',
                cls:'label-surface-sol',
                text:'Surface au sol',
                width:185
            },{
                xtype:'image',
                reference:'imageAsterisque',
                cls:'image-asterisque',
                src: '',
                width:20
            },{
                xtype: 'numberfield',
                cls: 'checkbox-surface-sol',
                reference:'numberfieldSurfaceSol',
                name:'groundArea',
                allowBlank:true,
                value:'0'
            }, {
                xtype: 'label',
                cls: 'label-surface-au-sol',
                text: 'm²',
                margin:'0 0 0 10'
            }]
        }, {           // --------------------------------------- Commentaires
            xtype: 'textarea',
            fieldLabel: 'Commentaire',
            fieldCls: 'textarea-commentaire',
            cls: 'textarea-materiel-collect-propose',
            // reference:'textareaManutentionsAffectees',
            labelWidth: 200,
            grow: false,
            name: 'comment', // en attente de de Comment
            //anchor:'100%',
            width: 450,
            height: 100
        }, {
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'bottom',
                cls:'toolbar-bottom-window',
                layout: {
                    pack: "center"
                },
                margin:'10 0 0 0',
                items: [{
                    xtype: 'button',
                    text: 'Valider',
                    //reference:'buttonValiderAddSC',
                    cls: 'button-valider-add',
                    iconCls: 'icon-valider-add',
                    handler: 'onAddEquipmentFinalCond', //function () {Ext.create.MessageBox('Test', 'Le button fonctionne')},
                    height:30
                },{
                    xtype:'tbspacer',
                    width:15
                }, {
                    xtype: 'button',
                    text: 'Annuler',
                    // reference:'buttonAnnulerAddSC',
                    cls: 'button-annuler-add',
                    iconCls: 'icon-annuler-add',
                    height:30,
                    handler: function () {
                        var window = this.up("window");
                        if (window) {
                            window.close();
                        }
                    }
                }]
            }]
        }]
    }]
});

Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.manutentions.windowAddFinalEquipement.WindowAddFinalEquipement' , {
    extend:'Ext.window.Window',
    alias:'widget.windowAddFinalEquipementManutentions',
    cls:'window-add-final-grid window-main skinning-window',

    requires:[
        'NovaAdmin.view.equipements.gridFinalEquipement.manutentions.windowAddFinalEquipement.WindowAddFinalEquipementController'
    ],

    controller:'windowAddFinalEquipementManutentionsController',

    height:600,
    flex:1,
    header:{
        height: 40
    },
    modal:true,


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
                    return item.data.code === "MANU";
                }
            ]
        }, */
        defaults: {
            margin:'5 0 5 0',
            padding: 2
        },

       // margin: '20 10 20 10',
        cls: 'form-window-add-final-equipement window-form-skinning',
        reference:'fromEquipTypeManu',
        //autoScroll : true,
        //bodyStyle:'overflowY: auto',
        //flex: 1,
        //width: 600,
        /*layout:{
            type:'vbox',
            align: 'center'
        }, */
        width:560,
        items: [{  // --------------------------------- Type d'équipement
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
            valueField: 'id',
            autoLoadOnValue: true,
            displayField:'name',
            labelWidth: 200,
            width: 450
        }, {
            xtype: 'tagfield',
            reference:'tagfieldNormeCertification',
            cls: 'tagfield-norme-certification',
            store: {
                type:'equipementNormTagFieldStore'
            },
            name: 'equipmentNormCode',
            fieldLabel: 'Norme certification',
            grow: false,
            publishes: 'id',
            displayField:'code',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true,
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
                name: 'intermediary',
                value:true,
                margin:'0 5 0 0'
                //width:100,
            }, {
                boxLabel: 'Final',
                cls: 'radiofield-final button radio',
                name: 'intermediary',
                margin:'0 5 0 0'
                //width:100,
            }]
        }, {                 // ---------------------------------------------- Force
            xtype: 'container',
            cls: 'container-force',
            margin: '5 0 5 0',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-force',
                fieldLabel: 'Force',
                reference:'numberfieldForce',
                //maxValue:,
                //minValue:
                name: 'strenght',
                value: '0',
                labelWidth: 200
            }]
        }, {          // ------------------------------------ Hauteur de levage
            xtype: 'container',
            cls: 'container-hauteur-levage',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-hauteur-levage',
                fieldLabel: 'Hauteur de levage',
                reference:'numberfieldHauteurLevage',
                //maxValue:,
                //minValue:
                name: 'hauteurDeLevage',
                value: '0',
                labelWidth: 200
            }]
        }, {            // ------------------------------------ Prix de l'investissement
            xtype: 'container',
            cls: 'container-prix-investissement',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-prix-investissement',
                fieldLabel: 'Prix de l\'investissement',
                reference:'numberfieldPrixInvestissements',
                //maxValue:,
                //minValue:
                name: 'investmentPrice',
                value: '0',
                labelWidth: 200
            }, {
                xtype: 'label',
                cls: 'label-prix-investissement',
                text: '€ HT',
                margin:'0 0 0 10'
            }]
        }, {          // ------------------------------------- Durée amortissement
            xtype: 'container',
            cls: 'container-duree-amortissement',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-duree-amortissement',
                fieldLabel: 'Durée amortissement',
                labelWidth: 200,
                reference:'numberfieldDureeAmortissement',
                name:'amortissment',
                value:'0'
            }, {
                xtype: 'label',
                cls: 'label-duree-amortissement',
                text: 'ans',
                margin:'0 0 0 10'
            }]
        }, {               // ------------------------------- Prix de l'occasion
            xtype: 'container',
            cls: 'container-prix-loccasion',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-prix-loccasion',
                reference:'numberfieldPrixLoccasion',
                fieldLabel: 'Prix de l\'occasion',
                labelWidth: 200,
                name:'locationPrice',
                value:'0'
            }, {
                xtype: 'label',
                cls: 'label-prix-locassion',
                text: '€ ',
                margin:'0 0 0 10'
            }]
        }, {            // ------------------------------------ Volume horaire
            xtype: 'container',
            cls: 'container-volume-horaire',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-volume-horaire',
                reference: 'numberfieldVolumeHoraire',
                fieldLabel: 'Volume horaire',
                labelWidth: 200,
                name:'locationHour',
                value:'0'
                //width:450
                //store: ,
                //queryMode: 'local',
                //displayField: 'name',
                //valueField: '',
            }, {
                xtype: 'label',
                cls: 'label-volume-horaire',
                text: 'h/an ',
                margin:'0 0 0 10'
            }]
        }, {      // -------------------------------------------- Prix de l'heure
            xtype: 'container',
            cls: 'container-prix-heure',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-prix-heure',
                reference:'numberfieldPrixHeure',
                fieldLabel: 'Prix de l\'heure',
                //maxValue:,
                //minValue:
                name: 'hourPrice',
                value: '0',
                labelWidth: 200
            }, {
                xtype: 'label',
                cls: 'label-prix-heure',
                text: '€ HT',
                margin:'0 0 0 10'
            }]
        },{     // --------------------------------------------- Energie
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
            value:'Diesel',
            labelWidth: 200

        }, {        // --------------------------------------------- Coût horaire de fonctionnement
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

        }, {           // -------------------------------------------------Surface au sol
            xtype: 'container',
            cls: 'container-prix-heure',
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
                cls: 'numberfield-surface-sol',
                reference:'numberfieldSurfaceSol',
                //maxValue:,
                //minValue:
                name: 'groundArea',
                allowBlank:true,
                value: '0'
            }, {
                xtype: 'label',
                cls: 'label-surface-sol',
                text: 'm²',
                margin:'0 0 0 10'
            }]
        }, {           // --------------------------------------- Commentaires
            xtype: 'textarea',
            fieldLabel: 'Commentaire',
            fieldCls: 'textarea-commentaire',
            cls: 'textarea-commentaire',
            // reference:'textareaManutentionsAffectees',
            labelWidth: 200,
            name: 'comment',
            //anchor:'100%',
            width: 450,
            height: 100
        }, {
            dockedItems:[{
                xtype:'toolbar',
                cls:'toolbar-bottom-window',
                dock: 'bottom',
                layout:{
                    pack : "center"
                },
                margin:'10 0 0 0',
                items: [{
                    xtype:'button',
                    text: 'Valider',
                    //reference:'buttonValiderAddSC',
                    cls: 'button-valider-add',
                    iconCls: 'icon-valider-add',
                    handler:'onAddEquipTypeManu', //function () {Ext.create.MessageBox('Test', 'Le button fonctionne')},
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

Ext.define('NovaAdmin.view.equipements.gridFinalEquipement.manutentions.windowEditFinalEquipement.WindowEditFinalEquipement' , {
    extend:'Ext.window.Window',
    alias:'widget.windowEditFinalEquipementManutentions',
    cls:'window-edit-final-equipement- window-main skinning-window',

    requires:[
        'NovaAdmin.view.equipements.gridFinalEquipement.manutentions.windowEditFinalEquipement.WindowEditFinalEquipementController'
    ],

    controller:'windowEditFinalEquipementManutentionsController',

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
                    return item.data.code === "MANU";
                }
            ]
        }, */
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
                name: 'forceEquipement',
                value: '',
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
                name: 'hauteurLevageEquipement',
                value: '',
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
                name: 'prixInvestissementEquipement',
                value: '',
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
                reference:'numberfieldDureeAmortissement'
                //name:''
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
                labelWidth: 200
                //name:''
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
                labelWidth: 200
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
                name: 'prixHeureEquipement',
                value: '',
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
            value:'Diesel',
            labelWidth: 200

        }, {        // --------------------------------------------- Coût horaire de fonctionnement
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

        }, {           // -------------------------------------------------Surface au sol
            xtype: 'container',
            cls: 'container-prix-heure',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-surface-sol',
                reference:'numberfieldSurfaceSol',
                fieldLabel: 'Surface au sol',
                //maxValue:,
                //minValue:
                name: 'surfaceSolEquipement',
                value: '',
                labelWidth: 200
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

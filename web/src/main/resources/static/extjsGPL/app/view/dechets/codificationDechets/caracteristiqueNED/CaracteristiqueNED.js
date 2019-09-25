"use strict";
Ext.define('NovaAdmin.view.dechets.codificationDechets.caracteristiqueNED.CaracteristiqueNED' , {
    extend:'Ext.panel.Panel',
    alias:'widget.caracteristiqueNED',

    requires: [
        'NovaAdmin.view.dechets.codificationDechets.caracteristiqueNED.CaracteristiqueNEDController',
        'NovaAdmin.store.dechets.AssociationTovNedTreeStore'
    ],

    controller:'caracteristiqueNEDController',

    layout: {
        type:'hbox',
        align:'stretch'
    },

    padding:'5px 5px 5px 5px',
    margin:'10px 10px 10px 10px',

    flex:1,

    items:[{
        xtype: 'container',
        cls:'container-treePanel-caract-ned treePanel-main',
        reference:'containerTreePanelCaractNed',
        flex:0.5,
        items: [{
            xtype: "treepanel",
            cls:'treePanel-caract-ned treePanel-skinning',
            reference:'treePanelCaractNed',
            rootVisible:false,
            autoLoad:false,
            scrollable:true,
            store: {
                type:'tree',
                autoLoad:true,

                fields: [
                    "name",
                    "id"
                ],

                proxy: {
                    type: 'ajax',
                    url: 'dechets/treeWasteNed'
                }
            },
            listeners: {
                cellclick: 'clickLeaf'
            },
            flex:1,
            maxHeight:750,
            //height:600,
            columns: {
                items: [{
                    xtype:'treecolumn',
                    text: 'Intitulé',
                    cls:'column-intitule-treePanel treePanel-skinning-column',
                    reference:'columnIntituleTreePanel',
                    dataIndex: 'name',
                    align:'left',
                    flex: 1
                }, {
                    text: 'Id',
                    dataIndex: 'idx',
                    cls:'column-id-treePanel treePanel-skinning-column',
                    reference:'columnIdTreePanel',
                    align:'center',
                    width: 40
                }]
            }
        }]
    },{
        xtype: 'container',
        flex:0.5,
        cls:'container-fiche-technique-treePanel',
        reference:'ContainerFicheTechniqueTreePanel',
        layout:{
            type:'vbox',
            align:'stretch'
        },
        margin:'20 15 20 20',
        items: [{         // --------------------------- Pertinence
            xtype:'combobox',
            cls: 'combobox-pertinence-ft',
            reference:'comboboxPertinenceFT',
            fieldLabel: 'Pertinence',
            labelWidth:400,
            store: {
                fields: ['pertinence'],
                data : [
                    {"pertinence":"Faible"},
                    {"pertinence":"Moyenne"},
                    {"pertinence":"Haute"}
                ]
            },
            queryMode: 'local',
            displayField: 'pertinence',
            valueField: 'pertinence',
            value:'Moyenne'
            //margin:'0 0 0 10'
        },{   // ----------------------------------- Etat Physique ( tagField )
            xtype:'textfield',
            reference:'textfieldEtatPhysique',
            cls: 'textfield-etat-physique',
            name: '',
            fieldLabel: 'Etat physique',
            labelWidth: 400,
            width: 450
        },{ // ---------------------------------------- Densité
            xtype: 'container',
            cls: 'container-hauteur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            margin:'0 0 5 0',
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-densite-moyenne',
                fieldLabel: 'Densité (t/m³)',
                reference:'numberfieldDensiteMoyenne',
                //maxValue:,
                //minValue:
                name: 'densiteFicheTechniqueMoyenne',
                value: '',
                labelWidth: 400
            }, {
                xtype:'label',
                cls:'label-valeur-moyenne',
                text:'valeur moyenne',
                margin: '0 0 0 10'
            }]
        },{
            xtype: 'container',
            cls: 'container-hauteur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            margin:'0 0 5 0',
            items: [{
                xtype: 'numberfield',
                cls: 'numberfield-densite-maximale',
                fieldLabel: '-',
                fieldCls:'disabled-field',
                reference:'numberfieldDensiteMaximale',
                //maxValue:,
                //minValue:
                name: 'densiteFicheTechniqueMaximale',
                value: '',
                labelWidth: 400
            }, {
                xtype:'label',
                cls:'label-valeur-maximale',
                text:'valeur maximal',
                margin: '0 0 0 10'
            }]
        },{  // -----------------------------------Caractéristique chimique général (tagField )
            xtype:'textfield',
            reference:'textfieldChimiqueGenerique',
            cls: 'textfield-chimique-generique',
            name: '',
            fieldLabel: 'Caractéristique chimique générique',
            labelWidth: 400,
            width: 450
        },{  // -----------------------------------Caractéristique chimique détailée (tagField )
            xtype:'textfield',
            reference:'textfieldChimiqueDetaillee',
            cls: 'textfield-chimique-detaillee',
            name: '',
            fieldLabel: 'Caractéristique chimique détaillée',
            labelWidth: 400,
            width: 450
        },{ // -----------------------------------Critères de fangerosité (tagField )
            xtype:'textfield',
            reference:'textfieldDangerosite',
            cls: 'textfield-dangerosite',
            name: '',
            fieldLabel: 'Critères de dangerosités',
            labelWidth: 400,
            width: 450
        },{  // ------------------------------- Déchets assimilable aux déchets ménagers
            xtype:'checkbox',
            cls: 'checkbox-assiminable-dech-meneagers',
            reference:'checkboxAssiminableDechMenagers',
            fieldLabel: 'Déchets assiminable aux déchets ménagers',
            labelWidth: 400
        },{ // --------------------------------- Taux de recyclabilité
            xtype: 'numberfield',
            cls: 'numberfield-taux-recyclabilite',
            fieldLabel: 'Taux de recyclabilité (%)',
            reference:'numberfieldTauxRecyclabilite',
            name: '',
            value: '',
            labelWidth: 400
        },{ // ------------------------------------ Facteur d'émission de CO2 lié à la valorisation de matière
            xtype: 'numberfield',
            cls: 'numberfield-facteur-émission',
            fieldLabel: 'Facteur d\'émission de CO2 lié à la valorisation de matière (10^-6 x kg éq CO2/kcal)',
            reference:'numberfieldFacteurEmission',
            name: '',
            value: '',
            labelWidth: 400
        },{  // ------------------------------------- Gamme de PCI
            xtype:'container',
            layout:{
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype:'tbspacer',
                width:400
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'< 1000'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:53
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'1000 - 2000'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:38
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'2000 - 4000'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:37
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'4000 - 7000'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:55
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'> 7000'
                },{
                    xtype:'label',
                    text:'|'
                }]
            }]
        },{
            xtype:'slider',
            //width: 300,
            labelWidth:411,
            padding:'0 18 0 0',
            fieldLabel:'Gamme de PCI (kcal/kg) ',
            cls:'slider-gamme-pci',
            reference:'sliderGammePCI',
            minValue: 0,
            maxValue: 4
        },{  // ------------------------------------------Taux cendre
            xtype:'container',
            layout:{
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype:'tbspacer',
                width:405
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'< 2%'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:76
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'< 10%'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:73
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'< 25%'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:70
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'< 50%'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:73
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'> 50%'
                },{
                    xtype:'label',
                    text:'|'
                }]
            }]
        },{
            xtype:'slider',
            labelWidth:411,
            padding:'0 18 0 0',
            fieldLabel:'Taux centre',
            cls:'slider-taux-cendre',
            reference:'sliderTauxCendre',
            minValue: 0,
            maxValue: 4
        },{  // -------------------------------- Facteur d'émission de CO2 lié à l'incinération
            xtype: 'numberfield',
            cls: 'numberfield-facteur-émission-incineration',
            fieldLabel: 'Facteur d\'émission de CO2 lié à l\'incinération (kg éq CO2/Gj)',
            reference:'numberfieldFacteurEmissionIncineration',
            name: '',
            value: '',
            labelWidth: 400
        },{ // -------------------------------- Déchets biodégradable
            xtype: 'fieldcontainer',
            defaultType: 'radiofield',
            cls:'radiofield-dechets-biodegradable',
            reference:'radiofieldDechetsDegradable',
            fieldLabel:'Déchets biodégradable',
            labelWidth:400,
            layout: 'hbox',
            items: [{
                boxLabel  : 'Oui',
                name      : 'biodegradable',
                inputValue: '',
                id        : 'radio1'
            },{
              xtype:'tbspacer',
              width:10
            },{
                boxLabel  : 'Non',
                name      : 'biodegradable',
                inputValue: '',
                id        : 'radio2'
            }]
        },{ // -------------------------------- Déchets issu de la biomasse
            xtype:'container',
            cls:'container-biomasse-dechets',
            reference:'containerBiomasseDechets',
            layout:{
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype: 'checkbox',
                cls: 'checkbox-biomasse',
                reference: 'checkboxBiomasse',
                fieldLabel: 'Déchets issu de la biomasse',
                labelWidth: 400,
                dataIndex: ''
            },{
                xtype:'numberfield',
                cls:'numberfield-biomasse-deches',
                reference:'numberfieldBiomasseDechet',
                //width:,
                name: 'comeFromBiomass',
                value: ''
            },{
                xtype:'label',
                cls:'label-generique',
                text:'% issus de la biomasse',
                margin: '0 0 0 10'
            }]
        },{ // --------------------------------  Pollutions substances
            xtype: 'fieldcontainer',
            reference:'checkboxfieldPollutionSub',
            cls:'checkboxfield-pollution-sub',
            fieldLabel: 'Pollutions substances',
            defaultType: 'checkboxfield',
            layout:'hbox',
            labelWidth:400,
            items: [
                {
                    boxLabel  : 'PCB',
                    reference:'boxlabelPCB',
                    name      : 'pollutionSub',
                    inputValue: '1',
                    id        : 'checkbox1',
                    margin:'0 10 0 0'
                }, {
                    boxLabel  : 'Soufre',
                    reference:'boxLabelSulfur',
                    name      : 'pollutionSub',
                    inputValue: '',
                    //checked   : true,
                    id        : 'checkbox2',
                    margin:'0 10 0 0'
                }, {
                    boxLabel  : 'Halogène',
                    reference:'boxlabelHalogen',
                    name      : 'pollutionSub',
                    inputValue: '',
                    id        : 'checkbox3',
                    margin:'0 10 0 0'
                }, {
                    boxLabel  : 'Métaux lourds',
                    reference:'boxlabelMetals',
                    name      : 'pollutionSub',
                    inputValue: '',
                    id        : 'checkbox4',
                    margin:'0 10 0 0'
                }
            ]
        },{
            xtype:'container',
            cls:'container-dechets-impactant',
            layout:{
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype:'label',
                cls:'label-rouge',
                text:'Déchets impactant la captage du biogaz',
                width:380
            },{
                xtype:'image',
                reference:'imageAsterisque',
                cls:'image-asterisque',
                src: '',
                width:20
            },{
                xtype:'checkbox',
                reference:'checkboxBioGasWaste',
                cls:'checkbox-bio-gaz-waste checkbox-skinning'
            }]
        },{ // -------------------------------- Potentiel de biogaz
            xtype:'container',
            layout:{
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype:'tbspacer',
                width:405
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'0-200'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:67
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'200-400'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:62
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'400-600'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:60
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'600-800'
                },{
                    xtype:'label',
                    text:'|'
                }]
            },{
                xtype:'tbspacer',
                width:57
            },{
                xtype:'container',
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items:[{
                    xtype:'label',
                    text:'800-1000'
                },{
                    xtype:'label',
                    text:'|'
                }]
            }]
        },{
            xtype:'slider', // methanogen-max/min
            //width: 4,
            labelWidth:411,
            padding:'0 18 0 0',
            fieldLabel:'Potentiel de biogaz (Nm^3/t)',
            minValue: 0,
            maxValue: 4
        },{ // ----------------------------------- Code CED correspondant
            xtype:'textfield',
            reference:'textfieldCodeCED',
            cls: 'textfield-code-ced',
            name: '',
            fieldLabel: 'Code CED correspondant',
            labelWidth: 400,
            width: 450
        },{ // ---------------------------- Mettre à jour
            xtype:'container',
            flex:1,
            layout:{
                type:'hbox',
                align:'middle'
            },
            items:[{
                xtype:'button',
                reference:'buttonMettreAJourFT',
                cls:'button-mettre-jour-FT',
                text:'Mettre à jour',
                handler:'Submit'
            }]
        }]
    }]
});
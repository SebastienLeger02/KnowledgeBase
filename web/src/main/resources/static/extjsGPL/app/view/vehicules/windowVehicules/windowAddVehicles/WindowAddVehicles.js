

Ext.define('NovaAdmin.view.vehicules.windowVehicules.windowAddVehicles.WindowAddVehicles' , {
    extend:'Ext.window.Window',
    alias:'widget.windowAddVehicles',
    reference:'windowAddVehicles',
    cls:'window-add-vehicles skinning-window',  //window-main

    requires: [
        'NovaAdmin.view.vehicules.windowVehicules.windowAddVehicles.WindowAddVehiclesController',
        'NovaAdmin.store.vehicle.AddVehicleStore',
        'NovaAdmin.store.vehicle.EquipmentTypeTagFieldStore'
    ],

    controller:'windowAddVehiclesController',

    height:600,
    flex:1,

    header:{
        height: 40
    },
    modal:true,

    viewModel:{
        data : {
            test: true
        }
    },

    title:'Création d\'un nouveau Véhicule',

    layout:{
        type:'vbox',
        align:'left'
    },

    defaults: {
        margin: 5,
        padding: 2
    },

    items: [{
        xtype: 'form',
        reference: 'formWindowAddVehicle',
        cls: 'form-window-add-vehicle',
        defaults: {
            margin: '5 0 5 0',
            padding: 2
        },
        margin: '20 10 20 10',
        autoScroll: true,
        width: 560,

        items: [{
            xtype:'numberfield',
            hidden:true,
            name:'id'
        },{
            xtype: 'combobox',
            name: 'type',
            fieldLabel: 'Famille de contenant',
            fieldCls: 'combobox-field-type-vehicle',
            reference: 'comboType',
            cls: 'combobox-type-vehicle',
            labelWidth: 250,
            width: 450,
            store: {
                fields: ['type'],
                data: [
                    {"type": "Camion BOM 26t"},
                    {"type": "Movibenne 26t"},
                    {"type": "Tracteur et semi 90m3"},
                    {"type": "Camion hayon 30m 12t"},
                    {"type": "Camiopn benne ordure ménagère"},
                    {"type": "Camion benne 10t"},
                    {"type": "Fourgon 12m3 3,5t"},
                    {"type": "Camion grue 26t"},
                    {"type": "Camion citerne"},
                    {"type": "Multi-benne"}
                ]
            },
            queryMode: 'local',
            displayField: 'type',
            valueField: 'type'
        }, {
            xtype: 'container',
            reference: 'containerPictogramme',
            cls: 'container-window-add-pictograme',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [{
                xtype: 'label',
                cls: 'label-pictogramme',
                text: 'Pictogramme:',
                width: 250
            }, {
                xtype: 'tbspacer',
                width: 100
            }, {
                xtype: 'image',
                name: '',
                reference: 'urlImagePicto',
                cls: 'image-pictogramme',
                src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
                width:40,
                height: 50,
                top: 0
            }]
        }, {
            xtype: 'textfield',
            reference: 'textfieldNameVehicle',
            cls: 'textfield-name-vehicle',
            name: 'name',
            fieldLabel: 'Nom',
            labelWidth: 250,
            width: 450
        }, {
            xtype: 'combobox',
            name: 'fuel',
            fieldLabel: 'Carburant',
            fieldCls: 'combobox-fuel-vehicle',
            reference: 'comboFuel',
            cls: 'combobox-fuel-vehicle',
            labelWidth: 250,
            width: 450,
            store: {
                fields: ['fuel'],
                data: [
                    {"fuel": "Biodiesel B10"},
                    {"fuel": "Biodiesel B30"},
                    {"fuel": "Diesel"},
                    {"fuel": "Electrique"},
                    {"fuel": "Essence"},
                    {"fuel": "Gaz"},
                    {"fuel": "Manuel"}
                ]
            },
            queryMode: 'local',
            displayField: 'fuel',
            valueField: 'fuel'
        }, {
            xtype: 'checkbox',
            cls: 'checkbox-transport-vrac',
            fieldLabel: 'Transport en vrac',
            labelWidth: 250,
            reference: 'checkboxTransportVrac',
            name: 'transportVrac'
        }, {
            xtype: 'checkbox',
            cls: 'checkbox-dechet-conditionne',
            fieldLabel: 'Déchet conditionné',
            labelWidth: 250,
            reference: 'checkboxDechetConditionne',
            name: 'dechetConditionne'
        }, {  // ---------------------------------------Hauteur de chargement (m)
            xtype: 'container',
            cls: 'container-dechet-conditionne',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-hauteur-charg',
                fieldLabel: 'Hauteur de chargement (m)',
                labelWidth: 250,
                reference: 'checkboxHauteurCharg',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-hauteur-charg',
                reference: 'numberfieldHauteurCharg',
                //maxValue:,
                //minValue:
                name: 'chrgtHeight',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxHauteurCharg.checked}'
                }
            }]
        }, {  // ---------------------------------------Hauteur de utile (m)
            xtype: 'container',
            cls: 'container-hauteur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-hauteur-utile',
                fieldLabel: 'Hauteur de utile (m)',
                labelWidth: 250,
                reference: 'checkboxHauteurUtile',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-hauteur-utile',
                reference: 'numberfieldHauteurUtile',
                //maxValue:,
                //minValue:
                name: 'usefulHeight',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxHauteurUtile.checked}'
                }
            }]

        }, { // ---------------------------------------Largeur de utile (m)
            xtype: 'container',
            cls: 'container-largeur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-largeur-utile',
                fieldLabel: 'Largeur de utile (m)',
                labelWidth: 250,
                reference: 'checkboxLargeurUtile',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-largeur-utile',
                reference: 'numberfieldLargeurUtile',
                //maxValue:,
                //minValue:
                name: 'usefulWidth',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxLargeurUtile.checked}'
                }
            }]
        }, {  // ---------------------------------------Longueur de utile (m)
            xtype: 'container',
            cls: 'container-longueur-utile',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-longueur-utile',
                fieldLabel: 'Longueur de utile (m)',
                labelWidth: 250,
                reference: 'checkboxLongueurUtile',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-longueur-utile',
                reference: 'numberfieldLongueurUtile',
                //maxValue:,
                //minValue:
                name: 'usefulLength',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxLongueurUtile.checked}'
                }
            }]
        }, {  // ---------------------------------------PTAC
            xtype: 'container',
            cls: 'container-ptac-vehicle',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-ptac-vehicle',
                fieldLabel: 'PTAC',
                labelWidth: 250,
                reference: 'checkboxPtacVehicle',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-ptac-vehicle',
                reference: 'numberfieldPtacVehicle',
                //maxValue:,
                //minValue:
                name: 'ptac',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxPtacVehicle.checked}'
                }
            }]
        }, { // ---------------------------------------PV
            xtype: 'container',
            cls: 'container-pv-vehicle',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-pv-vehicle',
                fieldLabel: 'PV',
                labelWidth: 250,
                reference: 'checkboxPvVehicle',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-pv-vehicle',
                reference: 'numberfieldPvVehicle',
                //maxValue:,
                //minValue:
                name: 'pv',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxPvVehicle.checked}'
                }
            }]
        }, { // ---------------------------------------PTRA
            xtype: 'container',
            cls: 'container-ptra-vehicle',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-ptra-vehicle',
                fieldLabel: 'PTRA',
                labelWidth: 250,
                reference: 'checkboxPtraVehicle',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-ptra-vehicle',
                reference: 'numberfieldPtraVehicle',
                //maxValue:,
                //minValue:
                name: 'ptra',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxPtraVehicle.checked}'
                }
            }]
        }, { // ---------------------------------------Volume transporté m3
            xtype: 'container',
            cls: 'container-volume-transp',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-volume-transp',
                fieldLabel: 'Volume transporté m3',
                labelWidth: 250,
                reference: 'checkboxVolumeTransp',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-volume-transp',
                reference: 'numberfieldVolumeTransp',
                //maxValue:,
                //minValue:
                name: 'volume',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxVolumeTransp.checked}'
                }
            }]
        }, {  // ---------------------------------------Consommation L/km
            xtype: 'container',
            cls: 'container-consomation',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-consomation',
                fieldLabel: 'Consommation L/km',
                labelWidth: 250,
                reference: 'checkboxConsommation',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-consomation',
                reference: 'numberfieldConsommation',
                //maxValue:,
                //minValue:
                name: 'consumption',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxConsommation.checked}'
                }
            }]
        }, {  // ---------------------------------------Coût kilométrique avec chauffeur
            xtype: 'container',
            cls: 'container-cout-km-chauff',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-cout-km-chauff',
                fieldLabel: 'Coût kilométrique avec chauffeur',
                labelWidth: 250,
                reference: 'checkboxCoutKmChauff',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-cout-km-chauff',
                reference: 'numberfieldCoutKmChauff',
                //maxValue:,
                //minValue:
                name: 'kmCost',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxCoutKmChauff.checked}'
                }
            }]
        }, {  // ---------------------------------------Coût horaire avec chauffeur
            xtype: 'container',
            cls: 'container-cout-horaire-chauff',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-cout-horaire-chauff',
                fieldLabel: 'Coût horaire avec chauffeur',
                labelWidth: 250,
                reference: 'checkboxCoutHoraireChauff',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-cout-horaire-chauff',
                reference: 'numberfieldCoutHoraireChauff',
                //maxValue:,
                //minValue:
                name: 'hourCost',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxCoutHoraireChauff.checked}'
                }
            }]
        }, {  // ---------------------------------------Volume horaire annuel
            xtype: 'container',
            cls: 'container-volume-horaire-annuel',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-volume-horaire-annuel',
                fieldLabel: 'Volume horaire annuel',
                labelWidth: 250,
                reference: 'checkboxVolumeHoraireAnnuel',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-volume-horaire-annuel',
                reference: 'numberfieldVolumeHoraireAnnuel',
                //maxValue:,
                //minValue:
                name: 'annualVolumeHour',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxVolumeHoraireAnnuel.checked}'
                }
            }]
        }, {  // ---------------------------------------Prix kilométrique avec chauffeur
            xtype: 'container',
            cls: 'container-prix-km-chauffeur',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-prix-km-chauffeur',
                fieldLabel: 'Prix kilométrique avec chauffeur',
                labelWidth: 250,
                reference: 'checkboxPrixKmChauffeur',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-prix-km-chauffeur',
                reference: 'numberfieldPrixKmChauffeur',
                //maxValue:,
                //minValue:
                name: 'kmPrice',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxPrixKmChauffeur.checked}'
                }
            }]
        }, { // ---------------------------------------Prix horaire avec chauffeur
            xtype: 'container',
            cls: 'container-prix-horaire-chauffeur',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-prix-horaire-chauffeur',
                fieldLabel: 'Prix horaire avec chauffeur',
                labelWidth: 250,
                reference: 'checkboxPrixHoraireChauffeur',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-prix-horaire-chauffeur',
                reference: 'numberfieldPrixHoraireChauffeur',
                //maxValue:,
                //minValue:
                name: 'hourPrice',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxPrixHoraireChauffeur.checked}'
                }
            }]
        }, {  // --------------------------------------- Surface de chargement
            xtype: 'container',
            cls: 'container-surface-charge',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'checkbox',
                cls: 'checkbox-prix-surface-charge',
                fieldLabel: 'Surface de chargement',
                labelWidth: 250,
                reference: 'checkboxSurfaceCharge',
                checked:true
                //name:''
            }, {
                xtype: 'tbspacer',
                width: 27
            }, {
                xtype: 'numberfield',
                cls: 'numberfield-prix-surface-charge',
                reference: 'numberfieldSurfaceCharge',
                //maxValue:,
                //minValue:
                name: 'surface',
                value: '0.00',
                labelWidth: 250,
                bind:{
                    hidden:'{!checkboxSurfaceCharge.checked}'
                }
            }]
        }, {  // --------------------------------------- Types d'équipement associés
            xtype: 'tagfield',
            fieldLabel: 'Types d\'équipment associés',
            fieldCls: 'textarea-types-associes',
            cls: 'textarea-materiel-types-associes',
            reference: 'textareaTypesAssocies',
            store: {
                type: 'equipmentTypeTagFieldStore'
            },
            labelWidth: 250,
            displayField:'name',
            //valueField:'Id',
            publishes: 'id',
            valueField: 'id',
            name: 'equipmentTypeName',
            autoLoadOnValue: true,
            //anchor:'100%',
            disabled:true,
            maxHeight:250,
            height:100
        }, {           // --------------------------------------- Commentaires
            xtype: 'textarea',
            fieldLabel: 'Commentaire',
            fieldCls: 'textarea-commentaire',
            cls: 'textarea-materiel-commentaire-vehicle',
            // reference:'textareaManutentionsAffectees',
            labelWidth: 250,
            grow: false,
            name: 'comment',
            //anchor:'100%',
            width: 450,
            height: 100
        }, {
            dockedItems:[{
                xtype: 'toolbar',
                dock: 'bottom',
                layout: {
                    pack: "center"
                },
                items: [{
                    xtype: 'button',
                    text: 'Valider',
                    iconCls: 'picto-valider-from',
                    handler: 'onAddVehicle'
                }, {
                    text: 'Annuler',
                    iconCls: 'picto-annuler-from',
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
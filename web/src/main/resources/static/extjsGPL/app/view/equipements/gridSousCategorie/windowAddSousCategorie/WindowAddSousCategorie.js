Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.WindowAddSousCategorie' , {
    extend:'Ext.window.Window',
    alias:'widget.windowAddSousCategorie',
    reference:'windowAddSousCategorie',
    cls:'window-add-sous-categorie window-main skinning-window',

    requires:[
        'NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.WindowAddSousCategorieController',
        'NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.windowAddImageUrl.WindowAddImageUrl',
        //'NovaAdmin.store.equipements.SousCategoryStore',
        'NovaAdmin.store.equipements.AddSousCategorieStore'
    ],

    controller:'windowAddSousCategorieController',

    height: 620,
    width: 500,
    header:{
        height: 40
    },
    modal:true,

    title:'Ajout d\'une nouvelle sous-catégorie d\'équipement', //i18n.AJOUT_NVL_SC_EQUIPEMENT

    layout:{
        type:'vbox',
        align:'left'
    },

    /*defaults: {
        flex: 1,
        padding: 16
    },*/

    items: [{
        xtype:'container',
        margin:'20 10 20 10',
        cls:'container-window-add-sous-categorie window-form-skinning',
        flex:1,
        width: 475,
        /*layout:{
            type:'vbox',
            align: 'center'
        }, */
        items: [{
            xtype:'textfield',
            reference:'textfieldSousCategorie',
            cls:'textfield-sous-categorie',
            //name:'name',
            fieldLabel:'Sous-Catégorie',
            labelWidth:200,
            width:450
        },{
            xtype:'container',
            //reference:'containerPictogramme',
            cls:'container-window-add-pictograme',
            layout:{
                type:'hbox',
                align:'middle'
            },
            items: [{
                xtype:'label',
                cls:'label-pictogramme',
                text:'Pictogramme:',
                width:100
            },{
                xtype:'tbspacer',
                width:30
            },{
                xtype: 'image',
                reference:'urlImagePicto',
                cls:'image-pictogramme',
                src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
                width:35,
                height: 45,
                top:0
            },{
                xtype:'tbspacer',
                width:35
            },{
                xtype:'button',
                text:'Ajouter',
                reference:'buttonAddPicto',
                cls:'button-add-pictogramme',
                margin:'5 5 5 5',
                handler:'openWindowAddUrlImage'
            }]
        },{
            xtype:'combobox',
            fieldLabel: 'Famille de contenant',
            fieldCls:'combobox-field-famille-contenant',
            reference:'comboFamily',
            cls:'combobox-famille-contenant',
            labelWidth:200,
            width:450,
            store: {
                fields: ['family'],
                data : [
                    {"family":"Petit contenant"},
                    {"family":"Grand contenant"}
                ]
             },
            queryMode: 'local',
            displayField: 'family',
            valueField: 'family',
            value:"Petit contenant"
            //hideTigger:true
        },{
            xtype:'combobox',
            fieldLabel: '- ',
            fieldCls:'combobox-field-ferme-ouvert',
            reference:'comboSubFamily',
            cls:'combobox-ferme-ouvert display-none-combobox',
            labelWidth:200,
            width:450,
            store: {
                fields: ['subFamily'],
                data : [
                    {"subFamily":"Ouvert"},
                    {"subFamily":"Fermé"}
                ]
            },
            queryMode: 'local',
            displayField: 'subFamily',
            valueField: 'subFamily',
            value:"Fermé"
        },{
            xtype:'combobox',
            fieldLabel: '- ',
            fieldCls:'combobox-field-avec-sans-compaction',
            cls:'combobox-avec-sans-compaction display-none-combobox',
            reference:'comboTreatment',
            labelWidth:200,
            width:450,
            store: {
                fields: ['treatment'],
                data : [
                    {"treatment":"Avec compaction"},
                    {"treatment":"Sans compaction"}
                ]
            },
            queryMode: 'local',
            displayField: 'treatment',
            valueField: 'treatment',
            value:"Sans compaction"
        },{
            xtype:'textarea',
            fieldLabel:'Manutentions affectées',
            fieldCls:'textarea-field-manu-affectees',
            cls:'textarea-manu-affectees',
            // reference:'textareaManutentionsAffectees',
            labelWidth:200,
            grow: false,
            name: '',
            //anchor:'100%',
            width:450,
            height:100
        },{
            xtype:'textarea',
            fieldLabel:'Conditionnements liés',
            fieldCls:'textarea-field-condi-lies',
            cls:'textarea-condi-lies',
            reference:'textareaConditionnementLies',
            labelWidth:200,
            grow: false,
            name: '',
            width:450,
            height:100
        },{
            xtype:'textarea',
            fieldLabel:'Types de déchet associés',
            fieldCls:'textarea-field-dechet-associes',
            cls:'textarea-dechet-associes',
            // reference:'textareaDechetAssocies',
            labelWidth:200,
            grow: false,
            name: '',
            width:450,
            height:100
        }]

    },{
        xtype:'container',
        cls:'container-window-button-add-sc',
        layout: {
            type:'hbox',
            align:'middle'
        },
        width:'100%',
        margin:'10 0 15 111',
        items:[{
            xtype:'button',
            text:'Valider',
            reference:'buttonValiderAddSC',
            cls:'button-valider-add-sc',
            iconCls:'icon-valider-add-sc',
            handler:'submit', //function() { Ext.Msg.alert('Test','Le button fonctionne')},
            margin:'5 5 5 5',
            width:120,
            height:40
        },{
            xtype:'tbspacer',
            width:10
        },{
            xtype:'button',
            text:'Annuler',
            reference:'buttonAnnulerAddSC',
            cls:'button-annuler-add-sc',
            iconCls:'icon-annuler-add-sc',
            handler:'closeWindow' ,//function() { Ext.Msg.alert('Test','Le button fonctionne')},
            margin:'5 5 5 5',
            width:120,
            height:40
        }]
    }]

});

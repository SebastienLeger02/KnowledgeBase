Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.WindowEditSousCategorie' , {
    extend:'Ext.window.Window',
    alias:'widget.windowEditSousCategorie',
    cls:'window-edit-sous-categorie window-main skinning-window',

    requires:[
        'NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.WindowEditSousCategorieController',
        'NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.windowEditImageUrl.WindowEditImageUrl',
        'NovaAdmin.store.equipements.SousCategoryStore'
    ],

    controller:'windowEditSousCategorieController',

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
        cls:'container-window-edit-sous-categorie ',
        flex:1,
        width: 475,
        /*layout:{
            type:'vbox',
            align: 'center'
        }, */
        items: [{
            xtype:'textfield',
            reference:'textfieldSousCategorie',
            //itemId:'name',
            cls:'textfield-sous-categorie',
            //name:'name',
            fieldLabel:'Sous-Catégorie',
            labelWidth:200,
            width:450
        },{
            xtype:'container',
            //reference:'containerPictogramme',
            cls:'container-window-edit-pictograme',
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
                top:0
            },{
                xtype:'tbspacer',
                width:35
            },{
                xtype:'button',
                text:'Ajouter',
                reference:'buttonEditPicto',
                cls:'button-edit-pictogramme',
                margin:'5 5 5 5',
                handler:'openWindowEditUrlImage'
            }]
        },{
            xtype:'combobox',
            fieldLabel: 'Famille de contenant',
            fieldCls:'combobox-field-famille-contenant',
            reference:'comboFamily',
            itemId:'family',
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
            valueField: 'family'
            //hideTigger:true
        },{
            xtype:'combobox',
            fieldLabel: '- ',
            fieldCls:'combobox-field-ferme-ouvert',
            reference:'comboSubFamily',
            itemId:'subFamily',
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
            valueField: 'subFamily'
        },{
            xtype:'combobox',
            fieldLabel: '- ',
            fieldCls:'combobox-field-avec-sans-compaction',
            cls:'combobox-avec-sans-compaction display-none-combobox',
            reference:'comboTreatment',
            itemId:'treatment',
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
            valueField: 'treatment'
        },{
            xtype:'textarea',
            fieldLabel:'Manutentions affectées',
            fieldCls:'textarea-field-manu-affectees',
            cls:'textarea-manu-affectees',
            reference:'textareaManutentionsAffectees',
            itemId:'name',
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
        cls:'container-window-button-edit-sc',
        layout: {
            type:'hbox',
            align:'middle'
        },
        width:'100%',
        margin:'10 0 15 111',
        items:[{
            xtype:'button',
            text:'Valider',
            reference:'buttonValiderEditSC',
            cls:'button-valider-edit-sc',
            iconCls:'icon-valider-edit-sc',
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
            reference:'buttonAnnulerEditSC',
            cls:'button-annuler-edit-sc',
            iconCls:'icon-annuler-edit-sc',
            handler:'closeWindow' ,//function() { Ext.Msg.alert('Test','Le button fonctionne')},
            margin:'5 5 5 5',
            width:120,
            height:40
        }]
    }]

});

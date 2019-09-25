Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowEditTOVGrid', {
    extend:'Ext.window.Window',
    alias:'widget.windowEditTOVGrid',

    requires:[
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowTOVGrid.WindowEditTOVGridController'
    ],

    controller:'windowEditTOVGridController',

    modal:true,

    height: 250,
    width: 600,
    header:{
        height: 40
    },

    title:'Ajout d\'une nouvelle catégorie de déchet TOV',

    items:[{
        xtype:'container',
        cls:'container-window-edit-sousCategorie-TOV',
        flex:1,
        layout:{
            type:'vbox',
            align:'left'
        },
        items:[{
            xtype:'container',
            cls:'container-categorie-tov',
            flex:1,
            layout: {
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype:'label',
                reference:'labelCategorieTov',
                cls:'label-categorie-tov',
                text:'Catégorie',
                margin:'10 5 5 5',
                width:110
            },{
                xtype:'label',
                reference:'labelCategorieBindTov',
                cls:'label-categorie-bind-tov',
                bind:{
                    text:'{categoryName}'
                },
                margin:'10 5 5 5'
            }]
        },{
            xtype:'container',
            cls:'container-categorie-tov',
            flex:1,
            layout: {
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype:'label',
                reference:'labelSousCategorieTov',
                cls:'label-sous-categorie-tov',
                text:'Sous-Catégorie',
                margin:'10 5 5 5',
                width:110
            },{
                xtype:'label',
                reference:'labelSousCategorieBindTov',
                cls:'label-sous-categorie-bind-tov',
                bind:{
                    text:'{subCategoryName}'
                },
                margin:'10 5 5 5'
            }]
        },{
            xtype:'textfield',
            reference:'textfieldDenominationTov',
            cls:'textfield-denomination-tov',
            fieldLabel:'Dénomination',
            allowBlank:true,
            margin:'10 5 5 5',
            labelWidth:110,
            width:570
        },{
            xtype:'textfield',
            reference:'textfielNedAssocieTov',
            cls:'textfield-ned-associe-tov',
            fieldLabel:'Ned associé',
            margin:'10 5 5 5',
            labelWidth:110,
            width:570
        }]
    }],
    dockedItems:[{
        xtype:'toolbar',
        cls:'container-window-button-sousCategorie toolbar-bottom-window',
        defaultFooterButtonUI:'center',
        dock:'bottom',
        layout:{
            pack : "center"
        },
        margin:'10 0 0 0',
        items: [/*{
            xtype:'tbspacer',
            width:"35%"
        },*/{
            xtype:'button',
            text:'Valider',
            reference:'buttonValiderEditSousCategorie',
            cls:'button-valider-edit-sousCategorie button-valider-add',
            iconCls: 'icon-valider-add',
            //handler:'submit', //function() { Ext.Msg.alert('Test','Le button fonctionne')},
            margin:'5 5 5 5',
            height:30
        },{
            xtype:'tbspacer',
            width:10
        },{
            xtype:'button',
            text:'Annuler',
            reference:'buttonAnnulerEditSousCategorie',
            cls:'button-annuler-edit-sousCategorie button-annuler-add',
            iconCls: 'icon-annuler-add',
            //handler:'closeWindow' ,//function() { Ext.Msg.alert('Test','Le button fonctionne')},
            margin:'5 5 5 5',
            height:30,
            handler:'closeWindow'
        }]
    }]

});
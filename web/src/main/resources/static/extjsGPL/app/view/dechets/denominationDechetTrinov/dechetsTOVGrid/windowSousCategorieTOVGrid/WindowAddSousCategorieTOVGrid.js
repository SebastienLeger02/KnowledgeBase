Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowAddSousCategorieTOVGrid', {
    extend:'Ext.window.Window',
    alias:'widget.windowAddSousCategorieTOVGrid',

    requires:[
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowAddSousCategorieTOVGridController'
    ],

    controller:'windowAddSousCategorieTOVGridController',

    modal:true,

    //height: 380,
    width: 380,
    header:{
        height: 40
    },

    title:'Ajout d\'une nouvelle catégorie de déchet TOV',

    items:[{
        xtype:'container',
        cls:'container-window-add-sousCategorie-TOV',
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
                width:150
            },{
                xtype:'label',
                reference:'labelCategorieBindTov',
                cls:'label-categorie-bind-tov',
                bind:{
                  text:'{categoryName}'
                },
                margin:'10 5 5 5',
                width:150
            }]
        },{
            xtype:'textfield',
            reference:'textfieldSousCategorieTov',
            cls:'textfield-sousCategorie-tov',
            fieldLabel:'Sous-catégorie',
            margin:'10 5 5 5',
            allowBlank:true,
            labelWidth:150,
            width:350
        },{
            xtype:'textarea',
            reference:'textareaMaterielporpose',
            cls:'textareau-materiel-propose',
            fieldLabel:'Materiel de collecte proposé',
            margin:'10 5 5 5',
            allowBlank:true,
            labelWidth:150,
            height: 180,
            width:350
        }]
    }],
    dockedItems:[{
        xtype:'toolbar',
        cls:'container-window-button-sousCategorie ',
        buttonAlign:'center',
        dock:'bottom',
        layout:{
            pack : "center"
        },
        margin:'10 0 0 0',
        items: [/*{
            xtype:'tbspacer',
            width:"27%"
        },*/{
            xtype:'button',
            text:'Valider',
            reference:'buttonValiderAddSousCategorie',
            cls:'button-valider-add-sousCategorie button-valider-add',
            iconCls: 'icon-valider-add',
            handler:'submit', //function() { Ext.Msg.alert('Test','Le button fonctionne')},
            height:30
        },{
            xtype:'tbspacer',
            width:10
        },{
            xtype:'button',
            text:'Annuler',
            reference:'buttonAnnulerAddSousCategorie',
            cls:'button-annuler-add-sousCategorie button-annuler-add',
            iconCls: 'icon-annuler-add',
            //handler:'closeWindow' ,//function() { Ext.Msg.alert('Test','Le button fonctionne')},
            height:30,
            handler:'closeWindow'
        }]
    }]
});
Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowEditSousCategorieTOVGrid', {
    extend:'Ext.window.Window',
    alias:'widget.windowEditSousCategorieTOVGrid',

    requires:[
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowSousCategorieTOVGrid.WindowEditSousCategorieTOVGridController'
    ],

    controller:'windowEditSousCategorieTOVGridController',

    modal:true,

    //height: 250,
    width: 380,
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
        buttonAlign:'center',
        dock:'bottom',
        cls:'container-window-button-sousCategorie toolbar-bottom-window',
        layout:{
            pack : "center"
        },
        margin:'10 0 0 0',
        items: [{
            xtype:'tbspacer',
            width:"25%"
        },{
            xtype:'button',
            text:'Valider',
            reference:'buttonValiderEditSousCategorie',
            cls:'button-valider-edit-sousCategorie button-valider-add',
            iconCls: 'icon-valider-add',
            //iconCls:'icon-valider-edit-sousCategorie',
            handler:'submit', //function() { Ext.Msg.alert('Test','Le button fonctionne')},
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
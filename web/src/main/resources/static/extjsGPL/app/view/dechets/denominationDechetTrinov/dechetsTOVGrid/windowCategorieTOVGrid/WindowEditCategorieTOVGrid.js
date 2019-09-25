Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowEditCategorieTOVGrid', {
    extend:'Ext.window.Window',
    alias:'widget.windowEditCategorieTOVGrid',

    requires:[
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowEditCategorieTOVGridController'
    ],

    controller:'windowEditCategorieTOVGridController',

    modal:true,

    height: 200,
    width: 350,
    header:{
        height: 40
    },

    title:'Ajout d\'une nouvelle catégorie de déchet TOV',

    items:[{
        xtype:'container',
        cls:'container-window-edit-categorie-TOV',
        flex:1,
        layout:{
            type:'vbox',
            align:'left'
        },
        items:[{
            xtype:'textfield',
            reference:'textfieldCategorieTov',
            cls:'textfield-categorie-tov',
            fieldLabel:'Catégorie',
            //dataIndex:'',
           allowBlank:true,
            labelWidth:100,
            width:290
        },{
            xtype:'container',
            cls:'container-window-edit-categorie-TOV',
            flex:1,
            layout:{
                type:'hbox',
                align:'left'
            },
            items:[{
                xtype: 'label',
                cls: 'label-pictogramme',
                text: 'Pictogramme',
                margin:'10 5 5 5'
                //width:100,
            },{
                xtype:'container',
                cls:'conatiner-button-edit-delete-picto',
                margin:'5 0 0 18',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [{
                    xtype: 'button',
                    reference: 'buttonEditPictogramme',
                    cls: 'button-edit-pictogramme-tov',
                    text: '+',
                    margin: '2 5 5 5',
                    flex:1,
                    handler: function () {
                        Ext.Msg.alert('Button Ajout Picto', 'En préparation');
                    }
                },{
                    xtype: 'button',
                    reference: 'buttonDeletePictogramme',
                    cls: 'button-delete-pictogramme-tov',
                    text: '-',
                    pediting: '2 8 2 8',
                    handler: function () {
                        Ext.Msg.alert('Button Suppr Picto', 'En préparation');
                    }
                }]
            }]
        }]
    }],
    dockedItems:[{
        xtype:'toolbar',
        buttonAlign:'center',
        dock:'bottom',
        cls:'container-window-button-categorie toolbar-bottom-window',
        layout:{
          pack:'center'
        },
        margin:'10 0 0 0',
        items: [/*{
            xtype:'tbspacer',
            width:"25%"
        },*/{
            xtype:'button',
            text:'Valider',
            reference:'buttonValiderEditCategorie',
            cls:'button-valider-edit-categorie button-valider-add',
            iconCls: 'icon-valider-add',
            handler:'submit', //function() { Ext.Msg.alert('Test','Le button fonctionne')},
            height:30
        },{
            xtype:'tbspacer',
            width:10
        },{
            xtype:'button',
            text:'Annuler',
            reference:'buttonAnnulerEditCategorie',
            cls:'button-annuler-edit-categorie button-annuler-add',
            iconCls: 'icon-annuler-add',
            //handler:'closeWindow' ,//function() { Ext.Msg.alert('Test','Le button fonctionne')},
            margin:'5 5 5 5',
            height:30,
            handler:'closeWindow'
        }]
    }]
});
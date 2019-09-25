Ext.define('NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowAddCategorieTOVGrid', {
    extend:'Ext.window.Window',
    alias:'widget.windowAddCategorieTOVGrid',

    requires:[
        'NovaAdmin.view.dechets.denominationDechetTrinov.dechetsTOVGrid.windowCategorieTOVGrid.WindowAddCategorieTOVGridController',
        'NovaAdmin.store.dechets.WindowAddDechetTovCategorieStore'
    ],

    controller:'windowAddCategorieTOVGridController',

    modal:true,

    height: 200,
    width: 350,
    header:{
        height: 40
    },



    title:'Ajout d\'une nouvelle catégorie de déchet TOV',

    items:[{
        xtype:'container',
        cls:'container-window-add-categorie-TOV',
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
            allowBlank:true,
            //dataIndex:'',
            margin:'10 5 5 5',
            labelWidth:100,
            width:290
        },{
            xtype:'container',
            cls:'container-window-add-categorie-TOV',
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
                cls:'conatiner-button-add-delete-picto',
                margin:'5 0 0 18',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [{
                    xtype: 'button',
                    reference: 'buttonAddPictogramme',
                    cls: 'button-add-pictogramme-tov',
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
                    padding: '2 8 2 8',
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
        items: [{
            xtype:'tbspacer',
            width:"25%"
        },{
            xtype:'button',
            text:'Valider',
            reference:'buttonValiderAddCategorie',
            cls:'button-valider-add-categorie button-valider-add',
            iconCls: 'icon-valider-add',
            //handler:'submit', //function() { Ext.Msg.alert('Test','Le button fonctionne')},
            height:30,
            handler:'submit'
        },{
            xtype:'tbspacer',
            width:10
        },{
            xtype:'button',
            text:'Annuler',
            reference:'buttonAnnulerAddCategorie',
            cls:'button-annuler-add-categorie',
            iconCls: 'icon-annuler-add',
            //handler:'closeWindow' ,//function() { Ext.Msg.alert('Test','Le button fonctionne')},
            height:30,
            handler:'closeWindow'
        }]
    }]
});
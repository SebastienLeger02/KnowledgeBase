Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.windowAddImageUrl.WindowAddImageUrl', {
    extend:'Ext.window.Window',
    alias:'widget.windowAddImageUrl',
    cls:'windowAddImageUrl',

    requires:[
        'NovaAdmin.view.equipements.gridSousCategorie.windowAddSousCategorie.windowAddImageUrl.WindowAddImageUrlController'
    ],

    controller:'windowAddImageUrlController',

    layout:{
        type:'vbox',
        align:'scratch'
    },

    height:300,
    width:285,

    title:'Liste des pictogrammes disponibles',

    items:[{
        xtype:'textarea',
        cls:'textarea-img-url',
        reference:'textareaImgUrl',
        name:'urlImage',
        //anchor:'100%',
        width:'100%',
        flex:1
    }],
    dockedItems:({
        xtype: 'toolbar',
        cls:'toolbar-wind-add-img-url',
        //height: 61,
        dock: 'bottom',
        layout:{
            type:'hbox',
            align:'middle'
        },
        items: [{
            xtype: 'tbfill'
        },{
            xtype: 'button',
            //iconCls: 'icon-valid-wind-add-img-url',
            cls:'button-wind-add-img-url',
            text: 'Valider', //i18n.VALIDER,
            height: 30,
            width: 80,
            handler: 'submit'
        },{
            xtype: 'tbspacer',
            width: 2
        },{
            xtype: 'button',
            //iconCls: 'icon-annuler-wind-add-img-url',
            cls:'button-annuler-wind-add-img-url',
            text:'Annuler' ,//i18n.ANNULER,
            height: 30,
            width: 80,
            handler: 'closeWindow'
        },{
            xtype: 'tbfill'
        }]
    })


});
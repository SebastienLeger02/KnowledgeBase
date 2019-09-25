Ext.define('NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.windowEditImageUrl.WindowEditImageUrl', {
    extend:'Ext.window.Window',
    alias:'widget.windowEditImageUrl',
    cls:'windowEditImageUrl',

    requires:[
        'NovaAdmin.view.equipements.gridSousCategorie.windowEditSousCategorie.windowEditImageUrl.WindowEditImageUrlController'
    ],

    controller:'windowEditImageUrlController',

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
        cls:'toolbar-wind-edit-img-url',
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
            //iconCls: 'icon-valid-wind-edit-img-url',
            cls:'button-wind-edit-img-url',
            text: 'Valider', //i18n.VALIDER,
            height: 30,
            width: 80,
            handler: 'submit'
        },{
            xtype: 'tbspacer',
            width: 2
        },{
            xtype: 'button',
            //iconCls: 'icon-annuler-wind-edit-img-url',
            cls:'button-annuler-wind-edit-img-url',
            text:'Annuler' ,//i18n.ANNULER,
            height: 30,
            width: 80,
            handler: 'closeWindow'
        },{
            xtype: 'tbfill'
        }]
    })


});
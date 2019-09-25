Ext.define('NovaAdmin.view.vehicules.VehiculesMain', {
    extend: 'Ext.panel.Panel',
    alias:'widget.vehiculesMain',
    cls:'class-vehicules-main',

    requires: [
        'NovaAdmin.view.vehicules.VehiculesMainController',
        'NovaAdmin.store.vehicle.VehicleGridStore',
        'NovaAdmin.view.vehicules.windowVehicules.windowAddVehicles.WindowAddVehicles'
    ],

    controller:'vehiculesMainController',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    padding:'15px 15px 15px 15px',

    flex:1,

    items:[{
        xtype: 'container',
        reference:'container-buttons-vehicle',
        layout: {
            type: 'hbox',
            align: 'center'
        },
        height:50,
        items:[{
            xtype:'button',
            cls:'button-add-vehicle',
            reference:'buttonAddVehicle',
            text:'Nouveau',
            margin:'0 5 0 5',
            handler:'openWindowAddVehicle'
        },{
            xtype:'button',
            cls:'button-edit-vehicle',
            reference:'buttonEditVehicle',
            text:'Modifier',
            margin:'0 5 0 5',
            handler:'openWindowEditVehicle'
        },{
            xtype:'button',
            cls:'button-delete-vehicle',
            reference:'buttonDeleteVehicle',
            text:'Supprimer',
            margin:'0 5 0 5',
            handler:'deleteVehicle'
        }]
    },{
        xtype:'grid',
        cls:'grid-vehicle',
        reference:'gridVehicle',
        store: {
            type:'vehicleGridStore'
        },
        flex:1,
        columns:[{
            text:'Nom',
            cls:'grid-colonne-name-vehicle ',
            tdCls:'titre-grid-name-vehicle font-semibold-enlevement',
            dataIndex:'name',
            align:'center',
            flex:1
        },{
            text:'Type',
            cls:'grid-colonne-type-vehicle ',
            tdCls:'titre-grid-type-vehicle font-semibold-enlevement',
            dataIndex:'type',
            align:'center',
            flex:1
        },{
            text:'Carburant',
            cls:'grid-colonne-carburant-vehicle ',
            tdCls:'titre-grid-carburant-vehicle font-semibold-enlevement',
            dataIndex:'fuel',
            align:'center',
            flex:1
        },{
            text:'PTAC',
            cls:'grid-colonne-ptac-vehicle ',
            tdCls:'titre-grid-ptac-vehicle font-semibold-enlevement',
            dataIndex:'ptac',
            align:'center',
            flex:1
        }]
    }]

});
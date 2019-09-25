Ext.define('NovaAdmin.model.equipements.EquipementLiteVehicleModel', {
    extend:'Ext.data.Model',

    fields:[{
        name:'id', type:'integer'
    },{
        name:'version', type:'integer'
    },{
        name:'name', type:'string'
    },{
        name:'projectId', type:'integer'
    },{
        name:'vehicleId', type:'integer'
    }]
});
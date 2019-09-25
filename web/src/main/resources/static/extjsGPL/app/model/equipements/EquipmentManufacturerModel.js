Ext.define('NovaAdmin.model.equipements.EquipmentManufacturerModel', {
    extend:'Ext.data.Model',

    fields:[{
        name:'id', type:'integer'
    },{
        name:'version', type:'integer'
    },{
        name:'name', type:'string'
    }]
});
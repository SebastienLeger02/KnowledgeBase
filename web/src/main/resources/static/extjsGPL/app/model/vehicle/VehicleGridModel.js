Ext.define('NovaAdmin.model.vehicle.VehicleGridModel', {
    extend:'Ext.data.Model',

    field:[{
        name:'id', type:'integer'
    },{
        name:'name' , type:'string'
    },{
        name:'type', type:'string'
    },{
        name:'ptac', type:'float'
    },{
        name:'fuel' , type:'string'
    }]

});
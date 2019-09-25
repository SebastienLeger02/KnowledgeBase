Ext.define('NovaAdmin.model.vehicle.VehicleModel', {
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
    },{
        name:'version' , type:'integer'
    },{
        name:'ptra', type:'float'
    },{
        name:'pv', type:'float'
    },{
        name:'annualVolumeHour' , type:'float'
    },{
        name:'commentId' , type:'integer'
    },{
        name:'consumption', type:'float'
    },{
        name:'hourCost', type:'float'
    },{
        name:'hourPrice' , type:'float'
    },{
        name:'kmCost' , type:'float'
    },{
        name:'kmPrice', type:'float'
    },{
        name:'surface', type:'float'
    },{
        name:'volume' , type:'float'
    },{
        name:'dechetConditionne' , type:'integer'
    },{
        name:'transportVrac', type:'integer'
    },{
        name:'chrgtHeight', type:'float'
    },{
        name:'usefulHeight' , type:'float'
    },{
        name:'chrgtHeight', type:'float'
    },{
        name:'usefulLenght' , type:'float'
    },{
        name:'usefulWidht', type:'float'
    },{
        name:'usefulHeight' , type:'float'
    },{
        name:'emptyingTime', type:'float'
    },{
        name:'manipulationTime' , type:'float'
    },{
        name:'isDefaultList' , type:'boolean'
    },{
        name : 'equipmentTypeName'
    }]

});
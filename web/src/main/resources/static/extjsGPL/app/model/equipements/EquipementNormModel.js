Ext.define('NovaAdmin.model.equipements.EquipementNormModel', {
    extend:'Ext.data.Model',

    fields:[{
        name:'id', type:'integer'
    },{
        name:'version', type:'integer'
    },{
        name:'name', type:'string'
    },{
        name:'code', type:'string'
    }]
});
Ext.define('NovaAdmin.model.equipements.EquipementDangerousnessModel', {
    extend:'Ext.data.Model',

    fields:[{
        name:'id', type:'integer'
    },{
        name:'version', type:'integer'
    },{
        name:'name', type:'string'
    },{
        name:'code', type:'float'
    }]
});
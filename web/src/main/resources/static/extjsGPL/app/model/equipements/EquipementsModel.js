Ext.define('NovaAdmin.model.equipements.EquipementsModel', {
    extend:'Ext.data.Model',

    /*schema: {
        namespace: 'NovaAdmin.model.equipements'
    },*/

    fields:[{
        name: 'id' , type:'integer'
    },{
        name:'name' , type:'string'
    },{
        name:'version' , type:'integer'
    },{
        name:'code' , type:'string'
    }]

});
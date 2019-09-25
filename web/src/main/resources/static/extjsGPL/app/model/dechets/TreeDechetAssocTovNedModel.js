Ext.define('NovaAdmin.model.TreeDechetAssocTovNedModel', {
    extend: 'Ext.data.TreeModel',

    fields:[{
        name:'id' , type:'integer'
    },{
        name:'name' , type:'string'
    },{
        name:'subCategoryId' , type:'integer'
    },{
        name:'code' , type:'integer'
    },{
        name:'cedId' , type:'integer'
    },{
        name:'version' , type:'integer'
    }]

});
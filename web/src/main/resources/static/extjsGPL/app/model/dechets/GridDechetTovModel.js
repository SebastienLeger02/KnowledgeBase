Ext.define('NovaAdmin.model.dechets.GridDechetTovModel', {
   extend:'Ext.data.Model',

    field:[{
       name:'id', type:'integer'
    },{
       name:'name' , type:'string'
    },{
       name:'version', type:'integer'
    },{
       name:'active', type:'boolean'
    },{
       name:'code' , type:'integer'
    },{
       name:'nedId', type:'integer'
    },{
        name:'subCategoryId', type:'integer'
    },{
        name:'valorisable', type:'boolean'
    }]

});
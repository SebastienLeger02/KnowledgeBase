Ext.define('NovaAdmin.model.dechets.GridDechetCategorieModel', {
    extend: 'Ext.data.Model',
/*
    schema: {
        namespace: 'NovaAdmin.model.dechets'
    },*/

    fields:[{
        name: 'id' , type:'integer'
    },{
        name:'idx' , type:'integer'
    },{
        name:'name' , type:'string'
    },{
        name:'version' , type:'integer'
    },{
        name:'code' , type:'integer'
    },{
        name:'imageUrl', type:'string'
    },{
        name:'type', type:'string'
    }]

});
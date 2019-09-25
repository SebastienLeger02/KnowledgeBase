Ext.define('NovaAdmin.model.dechets.GridDechetSousCategorieModel', {
    extend: 'Ext.data.Model',

    field:[{
        name: 'id' , type:'integer'
    },{
        name:'idx' , type:'integer'
    },{
        name:'name' , type:'string'
    },{
        name:'code' , type:'integer'
    },{
        name:'categoryId', type:'integer'
    }]

});
Ext.define('NovaAdmin.model.equipements.SousCategoryModel', {
    extend: 'Ext.data.Model',
    alias:'model.sousCategoryModel',

    fields: [/*{
        name: 'equipementsId',
        reference: {
            parent: 'EquipementsModel',
            inverse: {
                autoLoad: false
            }
        }
    },*/{
        name: 'id', type: 'integer'
    }, {
        name: 'version', type: 'integer'
    }, {
        name: 'categoryId', type: 'integer'
    },{
        name: 'family', type: 'string'
    },{
        name: 'imageUrl', type: 'string'
    },{
        name: 'name', type: 'string'
    },{
        name: 'subFamily', type: 'string'
    },{
        name: 'treatment', type: 'string'
    }]

});
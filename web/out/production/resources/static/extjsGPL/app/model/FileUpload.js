/**
 * Created by thibault
 * Date: 06/06/18
 * Time: 15:22
 */
Ext.define('FLW.model.FileUpload', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'nom',
        type: 'string'
    },{
        name: 'date',
        type: 'date'
    },{
        name: 'id',
        type: 'integer'
    },{
        name: 'description',
        type: 'string'
    }, {
        name: 'size',
        type: 'float'
    }, {
        name: 'lineCount',
        type: 'integer'
    }, {
        name: 'market',
        type: 'string'
    }, {
        name: 'progress',
        type: 'float'
    }, {
        name: 'progressMessage',
        type: 'string'
    }, {
        name: 'type',
        type: 'string'
    }, {
        name: 'marketText',
        calculate: function(data) {
            if(!data.market) {
                return null;
            }
            return FLW.Labels[data.market];
        }
    }, {
        name: 'typeText',
        calculate: function(data) {
            if(!data.type) {
                return null;
            }
            return FLW.Labels[data.type];
        }
    }]
});
/**
 * Created by thibault
 * Date: 20/06/18
 * Time: 15:39
 */
/**
 * Created by thibault
 * Date: 06/06/18
 * Time: 15:22
 */
Ext.define('FLW.model.Pays', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'nom',
        type: 'string'
    },{
        name: 'id',
        type: 'integer'
    },{
        name: 'successfullyImported',
        type: 'integer'
    }, {
        name: 'readyForAnalysis',
        type: 'boolean'
    }, {
        name: 'analysisDone',
        type: 'boolean'
    }, {
        name: 'progressMessage',
        type: 'string'
    }, {
        name: 'progress',
        type: 'float'
    }, {
        name: 'warnings',
        type: 'string'
    }]
});
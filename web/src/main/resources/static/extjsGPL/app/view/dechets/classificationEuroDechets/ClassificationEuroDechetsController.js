Ext.define('NovaAdmin.view.dechets.classificationEuroDechets.ClassificationEuroDechetsController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dechetsCEDController',

    init: function()
        {

            this.lookupReference('checkColumnRegulatedTreePanel');
        },

    isRowDangerousDiasbled: function(view, rowIdx, colIdx, item, record) {
        debugger;

        return !record.data.leaf;
    }

});
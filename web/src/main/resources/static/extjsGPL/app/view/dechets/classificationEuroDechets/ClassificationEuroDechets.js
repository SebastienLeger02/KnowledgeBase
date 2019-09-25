Ext.define('NovaAdmin.view.dechets.classificationEuroDechets.ClassificationEuroDechets' , {
    extend:'Ext.panel.Panel',
    alias:'widget.dechetsCED',
    cls:'treePanel-main',

    requires: [
        'NovaAdmin.view.dechets.classificationEuroDechets.ClassificationEuroDechetsController'
    ],

    controller:'dechetsCEDController',

    layout: {
        type:'vbox',
        align:'stretch'
    },


    viewModel:{
        data: {
            test : true
        }
    },

    padding:'5px 5px 5px 5px',
    margin:'10px 10px 10px 10px',


    flex:1,

    items: [{
        xtype: "treepanel",
        cls: 'treePanel-ced treePanel-skinning',
        reference: 'treePanelCed',
        rootVisible: false,
        autoLoad: false,
        scrollable: true,
        store: {
            type: 'tree',
            autoLoad: true,

            fields: [
                "name"
            ],

            proxy: {
                type: 'ajax',
                url: 'dechets/treeWasteCed'
            }
        },
        flex: 1,
        maxHeight:750,
        //height:600,
        columns: {
            items: [{
                xtype:'treecolumn',
                text: 'Intitulé CED',
                cls:'column-intituleCED-treePanel treePanel-skinning-column',
                reference:'columnIntituleCEDTreePanel',
                dataIndex: 'name',
                align:'left',
                flex: 1
            }, {
                text: 'Id',
                dataIndex: 'idx',
                cls:'column-id-treePanel treePanel-skinning-column',
                reference:'columnIdTreePanel',
                align:'center',
                width: 100
            },{
                xtype:'checkcolumn',
                header:'Dangerosité',
                dataIndex:'dangerous',
                reference:'checkColumnDangerousTreePanel',
                cls:'column-checkbox-dangerous-treepanel treePanel-skinning-column',
                align:'center',
                flex:0.5,
                menuDisabled: true,
                isDisabled: 'isRowDangerousDiasbled',
                bind: {
                    hidden:'{!treeWasteModels.leaf}'
                }
                /*renderer: function(value, meta, record, rowIndex, colIndex, store, view ) {
                    var cssPrefix = Ext.baseCSSPrefix,
                        cls = [cssPrefix + 'grid-checkcolumn'];

                    if (this.disabled) {
                        meta.tdCls += ' ' + this.disabledCls;
                    }
                    if (value) {
                        cls.push(cssPrefix + 'grid-checkcolumn-checked');
                    }
                    if (rowIndex === 0 || record.get('leaf')) {
                        return "";
                    }
                    return '<img class="' + cls.join(' ') + '" src="' + Ext.BLANK_IMAGE_URL + '"/>';
                } */
            },{
                xtype:'checkcolumn',
                header:'inerte',
                dataIndex:'Inert',
                reference:'checkColumnInertTreePanel',
                cls:'column-checkbox-inert-treepanel treePanel-skinning-column',
                align:'center',
                flex:0.5
            },{
                xtype:'checkcolumn',
                header:'Réglementé',
                dataIndex:'regulated',
                reference:'checkColumnRegulatedTreePanel',
                cls:'column-checkbox-regulated-treepanel treePanel-skinning-column',
                align:'center',
                flex:0.5
            }]
        }
    }]
});
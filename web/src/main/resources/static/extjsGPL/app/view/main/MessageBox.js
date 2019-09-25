/**
 * MessageBox aux couleur de DWD
 *
 * @author Pierre Collignon @ TRINOV
 */
Ext.define('DWD.view.main.MessageBox', {
    extend: 'Ext.window.Window',
    alias: 'widget.dwdmessagebox',

    callback: null,
    yesCallBack: null,
    cls: 'dwdWindowRedux',
    header: {
        height: 34
    },
    modal: true,
    resizable: false,
    width: 340,
    height: 140,

    buttonMode: null,

    padding: 0,
    message: '',

    listeners: {
        close: function() {
            if (this.callback != null) {
                this.callback();
            }
        }
    },

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        this.callParent();

        var bodyVBox = this.add({
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [{
                xtype: 'tbfill'
            }, {
                xtype: 'label',
                cls: 'messageBoxLabel',
                width: '100%',
                html: this.message

            }, {
                xtype: 'tbfill'
            }]
        });
        if(this.buttonMode == Ext.Msg.YESNO) {
            bodyVBox.addDocked({
                xtype: 'toolbar',
                dock: 'bottom',
                height: 40,
                items: [{
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    cls: 'classicButton',
                    text: i18n.OUI,
                    handler: function() {
                        var messageBox = this.up('dwdmessagebox');
                        messageBox.yesCallBack();
                        messageBox.close();
                    }
                },{
                    xtype: 'button',
                    cls: 'classicButton',
                    text: i18n.NON,
                    handler: function() {
                        this.up('dwdmessagebox').close();
                    }
                }, {
                    xtype: 'tbfill'
                }]
            });
        } else {
            bodyVBox.addDocked({
                xtype: 'toolbar',
                dock: 'bottom',
                height: 40,
                items: [{
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    cls: 'classicButton',
                    text: i18n.VALIDER,
                    handler: function() {
                        this.up('dwdmessagebox').close();
                    }
                }, {
                    xtype: 'tbfill'
                }]
            });
        }
    }
});

var createMessage = function(title, message, callback) {
    Ext.create('DWD.view.generic.common.MessageBox', {
        title: title,
        message: message,
        callback: callback
    }).show();
};

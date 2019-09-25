/**
 * Created by thibault
 * Date: 18/06/18
 * Time: 10:21
 */
Ext.define('FLW.override.Ajax', {
    override: 'Ext.data.proxy.Ajax',

    constructor: function() {
        this.callParent(arguments);

        if(!this.headers) {
            this.headers = {};
        }
        this.headers['X-CSRF-TOKEN'] = window._csrf.token;

        this.on('exception', function() {
            window.location = '/logout'
        });
        Ext.Ajax.on('beforerequest', function(conn, options, eOpts) {
            if(!options.headers) {
                options.headers = {};
            }
            options.headers['X-CSRF-TOKEN'] = window._csrf.token;
        });

        Ext.Ajax.on('requestexception', function(conn, response, options, eOpts) {
            if(response.status !== 200) {
                debugger;
                window.location = '/logout'
            }
        });
        Ext.Ajax.on('requestcomplete', function(conn, response, options, eOpts) {
            if(response.status !== 200) {
                debugger;
                window.location = '/logout'
            }
        });
    }
});
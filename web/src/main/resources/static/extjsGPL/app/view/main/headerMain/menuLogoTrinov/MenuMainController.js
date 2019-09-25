Ext.define('DWD.view.main.headerMain.menuLogoTrinov.MenuMainController' , {
    extend:'Ext.app.ViewController',
    alias:'controller.menuMainController',

    init : function () {

    },

    // ---------------------------------Button menu "Suivi,dwd"
    menuMainLogo: function() {
        //this.on('click', function(){
        var menu = Ext.create('DWD.view.main.headerMain.menuLogoTrinov.MenuMain', {
            loggedIn: true,
            renderTo: Ext.getBody()
        });
        menu.show();
        // })
    },

    suiviMenu: function() {
        window.location = window.location.href.replace('terrain','suivi');
    },
    dwdMenu: function() {
        window.location = window.location.replace('terrain', 'dwd');
    }
});
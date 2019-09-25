Ext.define('NovaAdmin.view.main.headerMain.HeaderMainController' , {
   extend:'Ext.app.ViewController',
   alias:'controller.headerMainController'

/*
// --------------------------- Container Suivi ---------------------
    menuMain: function() {
        this.getView().getEl().on('click', function(e, t, eOpts) {
            var menu = Ext.create('DWD.view.main.MenuMain', {
                loggedIn: true,
                renderTo: Ext.getBody(),  // usually rendered by it's containing component

                suiviMenu: function() {
                    window.location = window.location.href.replace('terrain', 'suivi');
                },

                dwdMenu: function() {
                    window.location = window.location.href.replace('terrain', 'dwd');
                }

            });
            menu.showAt(e.browserEvent.clientX, e.browserEvent.clientY);
        })
    },


    // ----------------- Deconnexion

    disconnect: function() {
        window.location.href = "logout";
    },
    //-----------------------------------Button notice pdf


    downloadFilePdf: function(btn, event) {
        downloadFile('/dwd_web/dwd/notice/downloadNotice', 'notice.pdf', {
            fichierStatique: 'NOTICE_TERRAIN'
        });
    },
    downloadFilePdf: function (){
        Ext.Msg.alert('Travaux', 'Notice Pdf en développement  ! ');
    },

    //-------------------------------------Button window

    openWindow: function() {
        var win = Ext.create('DWD.view.main.windowSignalerProbleme.WinMain', {
            loggedIn: true
        });
        win.show();
    }
    */
});
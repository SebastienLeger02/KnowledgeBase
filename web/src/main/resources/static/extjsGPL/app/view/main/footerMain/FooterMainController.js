Ext.define('DWD.view.main.footerMain.FooterMainController' , {
    extend:'Ext.app.ViewController',
    alias:'controller.footerMainController',


    //-----------------------------------Button notice pdf


    /*downloadFilePdf: function(btn, event) {
        downloadFile('/dwd_web/dwd/notice/downloadNotice', 'notice.pdf', {
            fichierStatique: 'NOTICE_TERRAIN'
        });
    },*/
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
});
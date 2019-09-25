Ext.define('NovaAdmin.view.dechets.codificationDechets.melanges.MelangesController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.melangesController',

    init : function () {

    },

    dragAndDropTreePanel : function (node, data, overModel, dropPosition, eOpts) {
        debugger;

        Ext.Ajax.request({ //Permet de récup les informations des champs pour les envoyer au serveur et puis base de donnée
            scope:this,
            url:'/dechets/addLeafDragAndDrop' ,
            method: 'POST',
            params: {
                sourceNedId: data.records[0].get('idx'),
                sourceNafId: data.records[0].get('parentIdx'),
                destNafId: overModel.get('idx')
            },
            success:function(response) { //Une fois la requete effectué , renvoi un message

                //this.fireViewEvent('addSousCategorieEquipements');
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Echec', 'Cela n\'a pas fonctionné');
            }
        });

        //treePanelNed.data.records[0].data.get('Idx');
    }

});
Ext.define('NovaAdmin.view.equipements.EquipementsMainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.equipementsMainViewModel',

    requires: [
        'NovaAdmin.model.equipements.SousCategoryModel'
    ],

    data: {
        test: true
    }
/*
    formulas: {

            // Faire avec la Vue et le Controlleur

                selectionCategorie: {
                    bind : '{gridCategorie.selection}',

                    get: function(gridSelection){

                        var id  = gridSelection.id;

                        // requtete ajax
                        Ext.Ajax.request({
                            method: 'PUT',
                            url: '/equipements/getEquipmentSubCategory',
                            scope: this,
                            params: {
                                locale: btn.locale
                            },
                            success: function(response) {
                                this.set('selectionCategorie', res);
                                return 5;
                            }
                        });

                        debugger;
                        return 1;
                    }
                }/*

        selectionSousCategorie: {
            bind: '{gridSousCategorie.selection.}'


        }
    }
    /*
        stores: {
            categorie: {  // Les store sont dans les models
                autoLoad: true,
                model:'EquipementsModel'
            }/*,
            sousCategorie: {
                // autoLoad: true,
                model:'sousCategoryModel'
            }/*,
            equipementsType: {  savoir pourquoi ça ne marche pas
                //autoLoad: true,
                model:'EquipementsTypeModel'
            } */
    //}

    /*config: {

    }*/

});
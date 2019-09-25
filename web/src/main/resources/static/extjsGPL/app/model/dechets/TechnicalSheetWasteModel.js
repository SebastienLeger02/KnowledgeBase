Ext.define('NovaAdmin.model.dechets.TechnicalSheetWasteModel', {
   extend:'Ext.data.Model',


    // ------- Table -> NED

    field:[{
       name:'id' , type:'Long'
    },{
       name:'biomasseRate', type:'Long'
    },{
       name:'cedId', type:'Long'
    },{
       name:'cendreMax', type:'Long'
    },{
       name:'cendreMin', type:'Long'
    },{
       name:'version' , type:'Long'
    },{
        name:'comeFromBiomass' , type:'Boolean'
    },{
        name:'halogen' , type:'Boolean'
    },{
        name:'isTransversal' , type:'Boolean'
    },{
        name:'metals' , type:'Boolean'
    },{
        name:'methanogenMax' , type:'Long'
    },{
        name:'methanogenMin' , type:'Long'
    },{
        name:'pcb' , type:'Boolean'
    },{
        name:'pciMax' , type:'Long'
    },{
        name:'pciMin' , type:'Long'
    },{
        name:'subCategoryId' , type:'Long'
    },{
        name:'sulfur' , type:'Long'
    },{
        name:'pertinence' , type:'Long'
    },{
        name:'averageDensity' , type:'Long'
    },{
        name:'bioGasWaste' , type:'Boolean'
    },{
        name:'degradable' , type:'Boolean'
    },{
        name:'emissionco2factorDueToFire' , type:'Long'
    },{
        name:'emissionco2factorDueToValor' , type:'Long'
    },{
        name:'householdWasteBond' , type:'Long'
    },{
        name:'maxDensity' , type:'Long'
    },{
        name:'recyclabilityRate' , type:'Long'
    }]

});
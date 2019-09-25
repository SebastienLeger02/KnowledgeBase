Ext.define('NovaAdmin.model.equipements.EquipementsTypeModel', {
    extend:'Ext.data.Model',

   /* schema: {
        namespace: 'NovaAdmin.model.equipements'
    },*/

   fields:[{
       name: 'sousCategoryId',
       reference: {
           parent: 'SousCategoryModel',
           inverse: {
               autoLoad: false
           }
       }
   },{
        name:'id', type:'integer'
   },{
        name:'name', type:'string'
   },{
       name:'intermediary', type:'boolean'
   },{
       name:'amortissement', type:'integer'
   },{
       name:'capacity', type:'integer'
   },{
       name:'capacityUnit', type:'string'
   },{
       name:'lenght', type:'integer'
   },{
       name:'lenghtUnit', type:'string'
   },{
       name:'width', type:'integer'
   },{
       name:'widthUnit', type:'string'
   },{
       name:'height', type:'integer'
   },{
       name:'heightUnit', type:'string'
   },{
       name:'weight', type:'boolean'
   },{
       name:'maxLoad', type:'integer'
   },{
       name:'gerbageArea', type:'integer'
   },{
       name:'investmentPrice', type:'integer'
   },{
       name:'amortissement', type:'string'
   },{
       name:'locationPrice', type:'integer'
   },{
       name:'compartmentsNumber', type:'integer'
   },{
       name:'protection', type:'boolean'
   },{
       name:'retention', type:'integer'
   },{
       name:'retentionsId', type:'integer'
   },{
       name:'groundArea', type:'integer'
   },{
       name:'reference', type:'string'
   },{
       //name:'maxLoad', type:'boolean'
   },{
       //name:'commentId', type:'boolean'
   },{
       name:'commentId', type:'integer'
   },{
       name:'comment', type:'string'
   },{
       name:'ballsHeight', type:'integer'
   },{
       name:'ballsLength', type:'integer'
   },{
       name:'ballsWeight', type:'integer'
   },{
       name:'blades', type:'integer'
   },{
       name:'bladesThickness', type:'integer'
   },{
       name:'brand', type:'string'
   },{
       name:'debit', type:'integer'
   },{
       name:'debitUnit', type:'string'
   },{
       name:'emptyWeight', type:'integer'
   },{
       name:'emptyWeightUnit', type:'string'
   },{
       name:'energy', type:'string'
   },{
       name:'retentionId', type:'string'
   },{
       name:'energy', type:'string'
   },{
       name:'functionnalCost', type:'integer'
   },{
       name:'gerbage', type:'integer'
   },{
       name:'hauteurDeLevage', type:'integer'
   },{
       name:'hopperLenght', type:'integer'
   },{
       name:'hopperWidth', type:'integer'
   },{
       name:'hourPrice', type:'integer'
   },{
       name:'hourlyCapacity', type:'integer'
   },{
       name:'intermediary', type:'boolean'
   },{
       name:'isContainer', type:'boolean'
   },{
       name:'locationHour', type:'integer'
   },{
       name:'maxWeightAdmittable', type:'integer'
   },{
       name:'maxWeightAdmittableUnit', type:'string'
   },{
       name:'power', type:'integer'
   },{
       name:'pression', type:'integer'
   },{
       name:'scaleSize', type:'boolean'
   },{
       name:'strenght', type:'boolean'
   },{
       name:'withAllManutention', type:'integer'
   },{
       name:'withoutManutention', type:'integer'
   },{
       name:'manipulationTime', type:'integer'
   },{
       name:'vidageTime', type:'integer'
   },{
       name:'isDefaultList', type:'integer'
   },{
       //name:'' , type:''
   }, {
       name: 'equipmentManufacturerName'
   },{
       name : 'equipmentNormCode'
   },{
       name : 'equipmentDangerousnessCode'
   },{
       name : 'equipmentProtectionTypeName'
   },{
       name : 'equipmentRetentionTypeName'
   },{
       name : 'equipmentEquipmentTypeName'
   },{
       name : 'equipmentVehicleName'
   }]

    // Il manque les tagField


});
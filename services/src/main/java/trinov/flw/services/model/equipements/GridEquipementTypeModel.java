package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.*;
import trinov.flw.data.entity.vehicule.Vehicle;

import java.util.ArrayList;
import java.util.List;

public class GridEquipementTypeModel  {
    private Long id;
    private String name;
    private Long version;
    private String type;
    private Long subCategoryId;
    //private String ; Fabricant
    //private Long code; Sur une autre table " equipment_norm "
    //private String use; Sur une autre table
    private Long capacity;
    private String capacityUnit;
    private Long lenght;
    private String lenghtUnit;
    private Double width;
    private String widthUnit;
    private Long height;
    private String heightUnit;
    private Boolean weight;
    private Long maxLoad;
    private Float gerbageArea;
    private Double investmentPrice;
    private Long amortissement;
    private Double locationPrice;
    //private Long ; 'ClasseAdr' Je ne sais pas ce que c'est comme table
    private Double compartmentsNumber;
    private Boolean protection;
    private Boolean retention;
    private Long retentionsId;
    private Double groundArea;
    private String reference;
    //private String ; 'Materiel de collecte proposé' Je ne sais pas ce que c'est comme table'
    private Long commentId;
    private String comment;
    private Long ballsHeight;
    private Long ballsLength;
    private Long ballsWeight;
    private Long ballsWidth;
    private Long blades;
    private Long bladesThickness;
    private String brand;
    private Float debit;
    private String debitUnit;
    private Long emptyWeight;
    private String emptyWeightUnit;
    private String energy;
    private Long functionnalCost;
    private Long gerbage;
    private Long hauteurDeLevage;
    private Long hopperLenght;
    private Long hopperWidth;
    private Long hourPrice;
    private Long hourlyCapacity;
    private Boolean intermediary;
    private Boolean isContainer;
    private Long locationHour;
    private Long maxWeightAdmittable;
    private String maxWeightAdmittableUnit;
    private Long power;
    private Long pression;
    private Boolean scaleSize;
    private Boolean strenght;
    private Long withAllManutention;
    private Long withoutManutention;
    private Float manipulationTime;
    private Float vidageTime;
    private Boolean isDefaultList;
    private List<String> vehicles = new ArrayList<>();
    private List<String> equipmentRetentionTypes = new ArrayList<>();
    private List<String> equipmentSubCategorys= new ArrayList<>();
    private List<String> equipmentProtectionTypes = new ArrayList<>();
    private List<String> equipmentManufacturers = new ArrayList<>();
    private List<String> equipmentDangerousnesses = new ArrayList<>();
    private List<String> equipmentNorms = new ArrayList<>();

    private List<Long> equipmentManufacturerName;   // Permet de récupérer les id afin d'afficher les name
    private List<Long> equipmentNormCode;
    private List<Long> equipmentDangerousnessCode;
    private List<Long> equipmentProtectionTypeName;
    private List<Long> equipmentRetentionTypeName;
    private List<Long> equipmentEquipmentTypeName;
    private List<Long> equipmentVehicleName;


    public GridEquipementTypeModel(EquipmentType equipmentType ) {
        this.id = equipmentType.getId();
        this.name = equipmentType.getName();
        this.version = equipmentType.getVersion();
        this.type = equipmentType.getType();
        this.subCategoryId = equipmentType.getSubCategoryId();
        this.capacity = equipmentType.getCapacity();
        this.capacityUnit = equipmentType.getCapacityUnit();
        this.lenght = equipmentType.getLenght();
        this.lenghtUnit = equipmentType.getLenghtUnit();
        this.width = equipmentType.getWidth();
        this.widthUnit = equipmentType.getWidthUnit();
        this.height = equipmentType.getHeight();
        this.heightUnit = equipmentType.getHeightUnit();
        this.weight = equipmentType.getWeight();
        this.maxLoad = equipmentType.getMaxLoad();
        this.gerbageArea = equipmentType.getGerbageArea();
        this.investmentPrice = equipmentType.getInvestmentPrice();
        this.amortissement = equipmentType.getAmortissement();
        this.locationPrice = equipmentType.getInvestmentPrice();
        this.compartmentsNumber = equipmentType.getInvestmentPrice();
        this.protection = equipmentType.getProtection();
        this.retention = equipmentType.getRetention();
        this.retentionsId = equipmentType.getRetentionId();
        this.groundArea = equipmentType.getGroundArea();
        this.reference = equipmentType.getReference();
        this.commentId = equipmentType.getCommentId();
        this.comment = (equipmentType.getComment()!= null)?equipmentType.getComment().getComment():"";
        this.ballsHeight = equipmentType.getBallsHeight();
        this.ballsLength = equipmentType.getBallsLength();
        this.ballsWeight = equipmentType.getBallsWeight();
        this.ballsWidth = equipmentType.getBallsWidth();
        this.blades = equipmentType.getBlades();
        this.bladesThickness = equipmentType.getBladesThickness();
        this.brand = equipmentType.getBrand();
        this.debit = equipmentType.getDebit();
        this.debitUnit = equipmentType.getDebitUnit();
        this.emptyWeight = equipmentType.getEmptyWeight();
        this.emptyWeightUnit = equipmentType.getEmptyWeightUnit();
        this.energy = equipmentType.getEnergy();
        this.functionnalCost = equipmentType.getFunctionnalCost();
        this.gerbage = equipmentType.getGerbage();
        this.hauteurDeLevage = equipmentType.getHauteurDeLevage();
        this.hopperLenght = equipmentType.getHopperLenght();
        this.hopperWidth = equipmentType.getHopperWidth();
        this.hourPrice = equipmentType.getHourPrice();
        this.hourlyCapacity = equipmentType.getHourlyCapacity();
        this.intermediary = equipmentType.getIntermediary();
        this.isContainer = equipmentType.getIsContainer();
        this.locationHour = equipmentType.getLocationHour();
        this.maxWeightAdmittable = equipmentType.getMaxWeightAdmittable();
        this.maxWeightAdmittableUnit = equipmentType.getMaxWeightAdmittableUnit();
        this.power = equipmentType.getPower();
        this.pression = equipmentType.getPression();
        this.scaleSize = equipmentType.getScaleSize();
        this.strenght = equipmentType.getStrenght();
        this.withAllManutention = equipmentType.getWithAllManutention();
        this.withoutManutention = equipmentType.getWithoutManutention();
        this.manipulationTime = equipmentType.getManipulationTime();
        this.vidageTime = equipmentType.getVidageTime();
        this.isDefaultList = equipmentType.getDefaultList();

        // Permet de parcourir les Table pour recupérer l'id  ( TagField )
        this.equipmentManufacturerName = new ArrayList<>();
        for(EquipmentManufacturer equipmentManufacturer : equipmentType.getEquipmentManufacturers()) {
            equipmentManufacturerName.add(equipmentManufacturer.getId());
        }

        this.equipmentNormCode = new ArrayList<>();
        for(EquipmentNorm equipmentNorm : equipmentType.getEquipmentNorms()) {
            equipmentNormCode.add(equipmentNorm.getId());
        }

        this.equipmentDangerousnessCode = new ArrayList<>();
        for(EquipmentDangerousness equipmentDangerousness : equipmentType.getEquipmentDangerousnesses()) {
            equipmentDangerousnessCode.add(equipmentDangerousness.getId());
        }

        this.equipmentProtectionTypeName = new ArrayList<>();
        for(EquipmentProtectionType equipmentProtectionType : equipmentType.getEquipmentProtectionTypes()) {
            equipmentProtectionTypeName.add(equipmentProtectionType.getId());
        }

        this.equipmentRetentionTypeName = new ArrayList<>();
        for(EquipmentRetentionType equipmentRetentionType : equipmentType.getEquipmentRetentionTypes()){
            equipmentRetentionTypeName.add(equipmentRetentionType.getId());
        }


        this.equipmentEquipmentTypeName = new ArrayList<>();
        for(EquipmentType equipmentTypes : equipmentType.getEquipmentTypes()) {
            equipmentEquipmentTypeName.add(equipmentTypes.getId());
        }

        this.equipmentVehicleName = new ArrayList<>();
        for (Vehicle vehicle : equipmentType.getVehicles()){
            equipmentVehicleName.add(vehicle.getId());
        }


    }



    public GridEquipementTypeModel() {

    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryId) { this.subCategoryId = subCategoryId; }

    public Long getCapacity() { return capacity; }
    public void setCapacity(Long capacity) { this.capacity = capacity; }

    public String getCapacityUnit() { return capacityUnit; }
    public void setCapacityUnit(String capacityUnit) { this.capacityUnit = capacityUnit; }

    public Long getLenght() { return lenght; }
    public void setLenght(Long lenght) { this.lenght = lenght; }

    public String getLenghtUnit() { return lenghtUnit; }
    public void setLenghtUnit(String lenghtUnit) { this.lenghtUnit = lenghtUnit; }

    public Double getWidth() { return width; }
    public void setWidth(Double width) { this.width = width; }

    public String getWidthUnit() { return widthUnit; }
    public void setWidthUnit(String widthUnit) { this.widthUnit = widthUnit; }

    public Long getHeight() { return height; }
    public void setHeight(Long height) { this.height = height; }

    public String getHeightUnit() { return heightUnit; }
    public void setHeightUnit(String heightUnit) { this.heightUnit = heightUnit; }

    public Boolean getWeight() { return weight; }
    public void setWeight(Boolean weight) { this.weight = weight; }

    public Long getMaxLoad() { return maxLoad; }
    public void setMaxLoad(Long maxLoad) { this.maxLoad = maxLoad; }

    public Float getGerbageArea() { return gerbageArea; }
    public void setGerbageArea(Float gerbageArea) { this.gerbageArea = gerbageArea; }

    public Double getInvestmentPrice() { return investmentPrice; }
    public void setInvestmentPrice(Double investmentPrice) { this.investmentPrice = investmentPrice; }

    public Long getAmortissement() { return amortissement; }
    public void setAmortissement(Long amortissement) { this.amortissement = amortissement; }

    public Double getLocationPrice() { return locationPrice; }
    public void setLocationPrice(Double locationPrice) { this.locationPrice = locationPrice; }

    public Double getCompartmentsNumber() { return compartmentsNumber; }
    public void setCompartmentsNumber(Double compartmentsNumber) { this.compartmentsNumber = compartmentsNumber; }

    public Boolean getProtection() { return protection; }
    public void setProtection(Boolean protection) { this.protection = protection; }

    public Boolean getRetention() { return retention; }
    public void setRetention(Boolean retention) { this.retention = retention; }

    public Long getRetentionsId() { return retentionsId; }
    public void setRetentionsId(Long retentionsId) { this.retentionsId = retentionsId; }

    public Double getGroundArea() { return groundArea; }
    public void setGroundArea(Double groundArea) { this.groundArea = groundArea; }

    public String getReference() { return reference; }
    public void setReference(String reference) { this.reference = reference; }

    public Long getCommentId() { return commentId; }
    public void setCommentId(Long commentId) { this.commentId = commentId; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public Long getBallsHeight() { return ballsHeight; }
    public void setBallsHeight(Long ballsHeight) { this.ballsHeight = ballsHeight; }

    public Long getBallsLength() { return ballsLength; }
    public void setBallsLength(Long ballsLength) { this.ballsLength = ballsLength; }

    public Long getBallsWeight() { return ballsWeight; }
    public void setBallsWeight(Long ballsWeight) { this.ballsWeight = ballsWeight; }

    public Long getBallsWidth() { return ballsWidth; }
    public void setBallsWidth(Long ballsWidth) { this.ballsWidth = ballsWidth; }

    public Long getBlades() { return blades; }
    public void setBlades(Long blades) { this.blades = blades; }

    public Long getBladesThickness() { return bladesThickness; }
    public void setBladesThickness(Long bladesThickness) { this.bladesThickness = bladesThickness; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public Float getDebit() { return debit; }
    public void setDebit(Float debit) { this.debit = debit; }

    public String getDebitUnit() { return debitUnit; }
    public void setDebitUnit(String debitUnit) { this.debitUnit = debitUnit; }

    public Long getEmptyWeight() { return emptyWeight; }
    public void setEmptyWeight(Long emptyWeight) { this.emptyWeight = emptyWeight; }

    public String getEmptyWeightUnit() { return emptyWeightUnit; }
    public void setEmptyWeightUnit(String emptyWeightUnit) { this.emptyWeightUnit = emptyWeightUnit; }

    public String getEnergy() { return energy; }
    public void setEnergy(String energy) { this.energy = energy; }

    public Long getFunctionnalCost() { return functionnalCost; }
    public void setFunctionnalCost(Long functionnalCost) { this.functionnalCost = functionnalCost; }

    public Long getGerbage() { return gerbage; }
    public void setGerbage(Long gerbage) { this.gerbage = gerbage; }

    public Long getHauteurDeLevage() { return hauteurDeLevage; }
    public void setHauteurDeLevage(Long hauteurDeLevage) { this.hauteurDeLevage = hauteurDeLevage; }

    public Long getHopperLenght() { return hopperLenght; }
    public void setHopperLenght(Long hopperLenght) { this.hopperLenght = hopperLenght; }

    public Long getHopperWidth() { return hopperWidth; }
    public void setHopperWidth(Long hopperWidth) { this.hopperWidth = hopperWidth; }

    public Long getHourPrice() { return hourPrice; }
    public void setHourPrice(Long hourPrice) { this.hourPrice = hourPrice; }

    public Long getHourlyCapacity() { return hourlyCapacity; }
    public void setHourlyCapacity(Long hourlyCapacity) { this.hourlyCapacity = hourlyCapacity; }

    public Boolean getIntermediary() { return intermediary; }
    public void setIntermediary(Boolean intermediary) { this.intermediary = intermediary; }

    public Boolean getContainer() { return isContainer; }
    public void setContainer(Boolean container) { isContainer = container; }

    public Long getLocationHour() { return locationHour; }
    public void setLocationHour(Long locationHour) { this.locationHour = locationHour; }

    public Long getMaxWeightAdmittable() { return maxWeightAdmittable; }
    public void setMaxWeightAdmittable(Long maxWeightAdmittable) { this.maxWeightAdmittable = maxWeightAdmittable; }

    public String getMaxWeightAdmittableUnit() { return maxWeightAdmittableUnit; }
    public void setMaxWeightAdmittableUnit(String maxWeightAdmittableUnit) { this.maxWeightAdmittableUnit = maxWeightAdmittableUnit; }

    public Long getPower() { return power; }
    public void setPower(Long power) { this.power = power; }

    public Long getPression() { return pression; }
    public void setPression(Long pression) { this.pression = pression; }

    public Boolean getScaleSize() { return scaleSize; }
    public void setScaleSize(Boolean scaleSize) { this.scaleSize = scaleSize; }

    public Boolean getStrenght() { return strenght; }
    public void setStrenght(Boolean strenght) { this.strenght = strenght; }

    public Long getWithAllManutention() { return withAllManutention; }
    public void setWithAllManutention(Long withAllManutention) { this.withAllManutention = withAllManutention; }

    public Long getWithoutManutention() { return withoutManutention; }
    public void setWithoutManutention(Long withoutManutention) { this.withoutManutention = withoutManutention; }

    public Float getManipulationTime() { return manipulationTime; }
    public void setManipulationTime(Float manipulationTime) { this.manipulationTime = manipulationTime; }

    public Float getVidageTime() { return vidageTime; }
    public void setVidageTime(Float vidageTime) { this.vidageTime = vidageTime; }

    public Boolean getDefaultList() { return isDefaultList; }
    public void setDefaultList(Boolean defaultList) { isDefaultList = defaultList; }

    public List<String> getVehicles() { return vehicles; }
    public void setVehicles(List<String> vehicles) { this.vehicles = vehicles; }

    public List<String> getEquipmentRetentionTypes() { return equipmentRetentionTypes; }
    public void setEquipmentRetentionTypes(List<String> equipmentRetentionTypes) { this.equipmentRetentionTypes = equipmentRetentionTypes; }

    public List<String> getEquipmentSubCategorys() { return equipmentSubCategorys; }
    public void setEquipmentSubCategorys(List<String> equipmentSubCategorys) { this.equipmentSubCategorys = equipmentSubCategorys; }

    public List<String> getEquipmentProtectionTypes() { return equipmentProtectionTypes; }
    public void setEquipmentProtectionTypes(List<String> equipmentProtectionTypes) { this.equipmentProtectionTypes = equipmentProtectionTypes; }

    public List<String> getEquipmentManufacturers() { return equipmentManufacturers; }
    public void setEquipmentManufacturers(List<String> equipmentManufacturers) { this.equipmentManufacturers = equipmentManufacturers; }

    public List<String> getEquipmentDangerousnesses() { return equipmentDangerousnesses; }
    public void setEquipmentDangerousnesses(List<String> equipmentDangerousnesses) { this.equipmentDangerousnesses = equipmentDangerousnesses; }

    public List<String> getEquipmentNorms() { return equipmentNorms; }
    public void setEquipmentNorms(List<String> equipmentNorms) { this.equipmentNorms = equipmentNorms; }

    public List<Long> getEquipmentManufacturerName() { return equipmentManufacturerName; }
    public void setEquipmentManufacturerName(List<Long> equipmentManufacturerName) { this.equipmentManufacturerName = equipmentManufacturerName; }

    public List<Long> getEquipmentNormCode() { return equipmentNormCode; }
    public void setEquipmentNormCode(List<Long> equipmentNormCode) { this.equipmentNormCode = equipmentNormCode; }

    public List<Long> getEquipmentDangerousnessCode() { return equipmentDangerousnessCode; }
    public void setEquipmentDangerousnessCode(List<Long> equipmentDangerousnessCode) { this.equipmentDangerousnessCode = equipmentDangerousnessCode; }

    public List<Long> getEquipmentProtectionTypeName() { return equipmentProtectionTypeName; }
    public void setEquipmentProtectionTypeName(List<Long> equipmentProtectionTypeName) { this.equipmentProtectionTypeName = equipmentProtectionTypeName; }

    public List<Long> getEquipmentRetentionTypeName() { return equipmentRetentionTypeName; }
    public void setEquipmentRetentionTypeName(List<Long> equipmentRetentionTypeName) { this.equipmentRetentionTypeName = equipmentRetentionTypeName; }

    public List<Long> getEquipmentEquipmentTypeName() { return equipmentEquipmentTypeName; }
    public void setEquipmentEquipmentTypeName(List<Long> equipmentEquipmentTypeName) { this.equipmentEquipmentTypeName = equipmentEquipmentTypeName; }

    public List<Long> getEquipmentVehicleName() { return equipmentVehicleName; }
    public void setEquipmentVehicleName(List<Long> equipmentVehicleName) { this.equipmentVehicleName = equipmentVehicleName; }
}

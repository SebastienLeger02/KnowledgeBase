package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.EquipmentType;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.BinaryOperator;

public class EquipementsTypeModel {
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
    //private Boolean strenght;
    private Long withAllManutention;
    private Long withoutManutention;
    private Float manipulationTime;
    private Float vidageTime;
    private Boolean isDefaultList;
    List<String> equipmentManufacturerName = new ArrayList<>();  // Fabricant
    List<String> equipmentNormCode = new ArrayList<>();  // Norme Certification
    List<Float> equipmentDangerousnessCode = new ArrayList<>(); // Classe ADR
    List<String> equipmentEquipmentTypeName = new ArrayList<>(); // Contraintes de manutentions
    List<String> equipmentProtectionTypeName = new ArrayList<>(); // Protection/Fermeture
    List<String> equipmentRetentionTypeName = new ArrayList<>(); //Retention
    List<String> equipmentVehicleName = new ArrayList<>(); //Materiel de collecte proposé


    public EquipementsTypeModel(EquipmentType equipmentType) {

        this.id = equipmentType.getId();
        this.name =equipmentType.getName();
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
        //this.retention = equipmentType.getRetention();
        this.groundArea = equipmentType.getGroundArea();
        this.comment = (equipmentType.getComment()!= null)?equipmentType.getComment().getComment():"";
        this.commentId = equipmentType.getCommentId();
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
        //this.strenght = equipmentType.getStrenght();
        this.withAllManutention = equipmentType.getWithAllManutention();
        this.withoutManutention = equipmentType.getWithoutManutention();
        this.manipulationTime = equipmentType.getManipulationTime();
        this.vidageTime = equipmentType.getVidageTime();
        this.isDefaultList = equipmentType.getDefaultList();
        this.retentionsId = equipmentType.getRetentionId();
        this.reference = equipmentType.getReference();

    }

    public EquipmentType toEntity() {
        EquipmentType equipmentType = new EquipmentType();

        //equipmentType.setId(this.id);
        equipmentType.setName(this.name);
        //equipmentType.setVersion(this.version);
        equipmentType.setVersion(0l);
        equipmentType.setType(this.type);
        equipmentType.setSubCategoryId(this.subCategoryId);
        equipmentType.setCapacity(this.capacity);
        equipmentType.setCapacityUnit(this.capacityUnit);
        equipmentType.setLenght(this.lenght);
        equipmentType.setLenghtUnit(this.lenghtUnit);
        equipmentType.setWidth(this.width);
        equipmentType.setWidthUnit(this.widthUnit);
        equipmentType.setHeight(this.height);
        equipmentType.setHeightUnit(this.heightUnit);
        equipmentType.setWeight(this.weight);
        equipmentType.setMaxLoad(this.maxLoad);
        equipmentType.setGerbageArea(this.gerbageArea);
        equipmentType.setInvestmentPrice(this.investmentPrice);
        equipmentType.setAmortissement(this.amortissement);
        equipmentType.setLocationPrice(this.locationPrice);
        equipmentType.setCompartmentsNumber(this.compartmentsNumber);
        equipmentType.setProtection(this.protection);
        //equipmentType.setRetention(this.retention);
        equipmentType.setRetentionId(this.retentionsId);
        equipmentType.setGroundArea(this.groundArea);
        equipmentType.setCommentId(this.commentId);
        equipmentType.setBallsHeight(this.ballsHeight);
        equipmentType.setBallsLength(this.ballsLength);
        equipmentType.setBallsWeight(this.ballsWeight);
        equipmentType.setBallsWidth(this.ballsWidth);
        equipmentType.setBlades(this.blades);
        equipmentType.setBladesThickness(this.bladesThickness);
        equipmentType.setBrand(this.brand);
        equipmentType.setDebit(this.debit);
        equipmentType.setDebitUnit(this.debitUnit);
        equipmentType.setEmptyWeight(this.emptyWeight);
        equipmentType.setEmptyWeightUnit(this.emptyWeightUnit);
        equipmentType.setEnergy(this.energy);
        equipmentType.setFunctionnalCost(this.functionnalCost);
        equipmentType.setGerbage(this.gerbage);
        equipmentType.setHauteurDeLevage(this.hauteurDeLevage);
        equipmentType.setHopperLenght(this.hopperLenght);
        equipmentType.setHopperWidth(this.hopperWidth);
        equipmentType.setHourPrice(this.hourPrice);
        equipmentType.setHourlyCapacity(this.hourlyCapacity);
        equipmentType.setIntermediary(this.intermediary);
        equipmentType.setIsContainer(this.isContainer);
        equipmentType.setLocationHour(this.locationHour);
        equipmentType.setMaxWeightAdmittable(this.maxWeightAdmittable);
        equipmentType.setMaxWeightAdmittableUnit(this.maxWeightAdmittableUnit);
        equipmentType.setPower(this.power);
        equipmentType.setPression(this.pression);
        equipmentType.setScaleSize(this.scaleSize);
        //equipmentType.setStrenght(this.strenght);
        equipmentType.setWithAllManutention(this.withAllManutention);
        equipmentType.setWithoutManutention(this.withoutManutention);
        equipmentType.setManipulationTime(this.manipulationTime);
        equipmentType.setVidageTime(this.vidageTime);
        equipmentType.setDefaultList(this.isDefaultList);
        equipmentType.setReference(this.reference);


        return equipmentType;
    }

    public EquipementsTypeModel(Optional<EquipmentType> equipmentType) { }

    public EquipementsTypeModel() {}// constructeur vide


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


    public Double getGroundArea() { return groundArea; }
    public void setGroundArea(Double groundArea) { this.groundArea = groundArea; }

    public Long getCommentId() { return commentId; }
    public void setCommentId(Long commentId) { this.commentId = commentId; }

    public Long getRetentionsId() { return retentionsId; }
    public void setRetentionsId(Long retentionId) { this.retentionsId = retentionId; }

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

    /*
    public Boolean getStrenght() { return strenght; }
    public void setStrenght(Boolean strenght) { this.strenght = strenght; }
*/

    public Long getWithAllManutention() { return withAllManutention; }
    public void setWithAllManutention(Long withAllManutention) { this.withAllManutention = withAllManutention; }

    public Long getWithoutManutention() { return withoutManutention; }
    public void setWithoutManutention(Long withoutManutention) { this.withoutManutention = withoutManutention; }

    public Float getManipulationTime() { return manipulationTime; }
    public void setManipulationTime(Float manipulationTime) { this.manipulationTime = manipulationTime; }

    public Float getVidageTime() { return vidageTime; }
    public void setVidageTime(Float vidageTime) { this.vidageTime = vidageTime; }

    public Boolean getDefaultList() { return isDefaultList; }
    public void setDefaultList(Boolean defaultList) { this.isDefaultList = defaultList; }

    public String getReference() { return reference; }
    public void setReference(String reference) { this.reference = reference; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public List<String> getEquipmentManufacturerName() { return equipmentManufacturerName; }
    public void setEquipmentManufacturerName(List<String> equipmentManufacturerName) { this.equipmentManufacturerName = equipmentManufacturerName; }

    public List<String> getEquipmentNormCode() { return equipmentNormCode; }
    public void setEquipmentNormCode(List<String> equipmentNormCode) { this.equipmentNormCode = equipmentNormCode; }

    public List<Float> getEquipmentDangerousnessCode() { return equipmentDangerousnessCode; }
    public void setEquipmentDangerousnessCode(List<Float> equipmentDangerousnessCode) { this.equipmentDangerousnessCode = equipmentDangerousnessCode; }

    public List<String> getEquipmentEquipmentTypeName() { return equipmentEquipmentTypeName; }
    public void setEquipmentEquipmentTypeName(List<String> equipmentEquipmentTypeName) { this.equipmentEquipmentTypeName = equipmentEquipmentTypeName; }

    public List<String> getEquipmentProtectionTypeName() { return equipmentProtectionTypeName; }
    public void setEquipmentProtectionTypeName(List<String> equipmentProtectionTypeName) { this.equipmentProtectionTypeName = equipmentProtectionTypeName; }

    public List<String> getEquipmentRetentionTypeName() { return equipmentRetentionTypeName; }
    public void setEquipmentRetentionTypeName(List<String> equipmentRetentionTypeName) { this.equipmentRetentionTypeName = equipmentRetentionTypeName; }

    public List<String> getEquipmentVehicleName() { return equipmentVehicleName; }
    public void setEquipmentVehicleName(List<String> equipmentVehicleName) { this.equipmentVehicleName = equipmentVehicleName; }

}

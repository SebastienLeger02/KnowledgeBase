package trinov.flw.services.model;

import trinov.flw.data.entity.equipements.EquipmentType;

import java.util.ArrayList;
import java.util.List;

public class EquipmentTypeModel {
    private Long id;
    private String name;
    private Long version; // Obligatoire
    private Long amortissement;
    private Long ballsHeight;
    private Long ballsLength;
    private Long ballsWeight;
    private Long ballsWidth;
    private Long blades;
    private Long bladesThickness;
    private String brand;
    private Long capacity;
    private String capacityUnit;
    private Long commentId;
    private Double compartmentsNumber;
    private Float debit;
    private String debitUnit;
    private Long emptyWeight;
    private String emptyWeightUnit;
    private String energy;
    private Long functionnalCost;
    private Long gerbage;
    private Float gerbageArea;
    private Double groundArea;
    private Long hauteurDeLevage;
    private Long height;
    private String heightUnit;
    private Long hopperLenght;
    private Long hopperWidth;
    private Long hourPrice;
    private Long hourlyCapacity;
    private Boolean intermediary;
    private Double investmentPrice;
    private Boolean isContainer;
    private Long lenght;
    private String lenghtUnit;
    private Long locationHour;
    private Double locationPrice;
    private Long maxLoad;
    private Long maxWeightAdmittable;
    private String maxWeightAdmittableUnit;
    private Long power;
    private Long pression;
    private Boolean protection;
    private String reference;
    private Long retentionId;
    private Boolean retention;
    private Boolean scaleSize;
    private Boolean strenght;
    private Long subCategoryId; // Obligatoire
    private Long treatmentCapacity;
    private String type; // Obligatoire
    private Boolean weight;
    private Double width;
    private String widthUnit;
    private Long withAllManutention;
    private Long withoutManutention;
    private Float manipulationTime;
    private Float vidageTime;
    private Boolean isDefaultList;
    private List<String> equipmentVehicleName = new ArrayList<>();
    private List<String> equipmentManufacturerName = new ArrayList<>();  // Fabricant
    private List<String> equipmentNormCode = new ArrayList<>();  // Norme Certification
    private List<Float> equipmentDangerousnessCode = new ArrayList<>(); // Classe ADR
    private List<String> equipmentEquipmentTypeName = new ArrayList<>(); // Contraintes de manutentions
    private List<String> equipmentProtectionTypeName = new ArrayList<>(); // Protection/Fermeture
    private List<String> equipmentRetentionTypeName = new ArrayList<>(); //Retention

    public EquipmentTypeModel(Long id, String name, Long version, Long amortissement, Long ballsHeight, Long ballsLength, Long ballsWeight, Long ballsWidth, Long blades, Long bladesThickness, String brand, Long capacity, String capacityUnit, Long commentId, Double compartmentsNumber, Float debit, String debitUnit, Long emptyWeight, String emptyWeightUnit, String energy, Long functionnalCost, Long gerbage, Float gerbageArea, Double groundArea, Long hauteurDeLevage, Long height, String heightUnit, Long hopperLenght, Long hopperWidth, Long hourPrice, Long hourlyCapacity, Boolean intermediary, Double investmentPrice, Boolean isContainer, Long lenght, String lenghtUnit, Long locationHour, Double locationPrice, Long maxLoad, Long maxWeightAdmittable, String maxWeightAdmittableUnit, Long power, Long pression, Boolean protection, String reference, Long retentionId, Boolean retention, Boolean scaleSize, Boolean strenght, Long subCategoryId, Long treatmentCapacity, String type, Boolean weight, Double width, String widthUnit, Long withAllManutention, Long withoutManutention, Float manipulationTime, Float vidageTime, Boolean isDefaultList) {
        this.id = id;
        this.name = name;
        this.version = version;
        this.amortissement = amortissement;
        this.ballsHeight = ballsHeight;
        this.ballsLength = ballsLength;
        this.ballsWeight = ballsWeight;
        this.ballsWidth = ballsWidth;
        this.blades = blades;
        this.bladesThickness = bladesThickness;
        this.brand = brand;
        this.capacity = capacity;
        this.capacityUnit = capacityUnit;
        this.commentId = commentId;
        this.compartmentsNumber = compartmentsNumber;
        this.debit = debit;
        this.debitUnit = debitUnit;
        this.emptyWeight = emptyWeight;
        this.emptyWeightUnit = emptyWeightUnit;
        this.energy = energy;
        this.functionnalCost = functionnalCost;
        this.gerbage = gerbage;
        this.gerbageArea = gerbageArea;
        this.groundArea = groundArea;
        this.hauteurDeLevage = hauteurDeLevage;
        this.height = height;
        this.heightUnit = heightUnit;
        this.hopperLenght = hopperLenght;
        this.hopperWidth = hopperWidth;
        this.hourPrice = hourPrice;
        this.hourlyCapacity = hourlyCapacity;
        this.intermediary = intermediary;
        this.investmentPrice = investmentPrice;
        this.isContainer = isContainer;
        this.lenght = lenght;
        this.lenghtUnit = lenghtUnit;
        this.locationHour = locationHour;
        this.locationPrice = locationPrice;
        this.maxLoad = maxLoad;
        this.maxWeightAdmittable = maxWeightAdmittable;
        this.maxWeightAdmittableUnit = maxWeightAdmittableUnit;
        this.power = power;
        this.pression = pression;
        this.protection = protection;
        this.reference = reference;
        this.retentionId = retentionId;
        this.retention = retention;
        this.scaleSize = scaleSize;
        this.strenght = strenght;
        this.subCategoryId = subCategoryId;
        this.treatmentCapacity = treatmentCapacity;
        this.type = type;
        this.weight = weight;
        this.width = width;
        this.widthUnit = widthUnit;
        this.withAllManutention = withAllManutention;
        this.withoutManutention = withoutManutention;
        this.manipulationTime = manipulationTime;
        this.vidageTime = vidageTime;
        this.isDefaultList = isDefaultList;

    }

    public EquipmentType toEntity() {
        EquipmentType equipmentType = new EquipmentType();

        equipmentType.setId(this.id);
        equipmentType.setName(this.name);
        equipmentType.setAmortissement(this.amortissement);
        equipmentType.setBallsHeight(this.ballsHeight);
        equipmentType.setBallsLength(this.ballsLength);
        equipmentType.setBallsWidth(this.ballsWidth);
        equipmentType.setBlades(this.blades);
        equipmentType.setBladesThickness(this.bladesThickness);
        equipmentType.setBrand(this.brand);
        equipmentType.setCapacity(this.capacity);
        equipmentType.setCapacityUnit(this.capacityUnit);
        equipmentType.setCommentId(this.commentId);
        equipmentType.setCompartmentsNumber(this.compartmentsNumber);
        equipmentType.setDebit(this.debit);
        equipmentType.setDebitUnit(this.debitUnit);
        equipmentType.setEmptyWeight(this.emptyWeight);
        equipmentType.setEmptyWeightUnit(this.emptyWeightUnit);
        equipmentType.setEnergy(this.energy);
        equipmentType.setFunctionnalCost(this.functionnalCost);
        equipmentType.setGerbageArea(this.gerbageArea);
        equipmentType.setGerbage(this.gerbage);
        equipmentType.setHauteurDeLevage(this.hauteurDeLevage);
        equipmentType.setHeight(this.height);
        equipmentType.setHeightUnit(this.heightUnit);
        equipmentType.setHopperLenght(this.hopperLenght);
        equipmentType.setHopperWidth(this.hopperWidth);
        equipmentType.setHourPrice(this.hourPrice);
        equipmentType.setHourlyCapacity(this.hourlyCapacity);
        equipmentType.setInvestmentPrice(this.investmentPrice);
        equipmentType.setIntermediary(this.intermediary);
        equipmentType.setIsContainer(this.isContainer);
        equipmentType.setLenght(this.lenght);
        equipmentType.setLenghtUnit(this.lenghtUnit);
        equipmentType.setLocationHour(this.locationHour);
        equipmentType.setLocationPrice(this.locationPrice);
        equipmentType.setMaxLoad(this.maxLoad);
        equipmentType.setMaxWeightAdmittable(this.maxWeightAdmittable);
        equipmentType.setMaxWeightAdmittableUnit(this.maxWeightAdmittableUnit);
        equipmentType.setPower(this.power);
        equipmentType.setPression(this.pression);
        equipmentType.setProtection(this.protection);
        equipmentType.setReference(this.reference);
        //equipmentType.setRetention(this.retention);
        equipmentType.setRetentionId(this.retentionId);
        equipmentType.setScaleSize(this.scaleSize);
        equipmentType.setStrenght(this.strenght);
        equipmentType.setSubCategoryId(this.subCategoryId);
        equipmentType.setTreatmentCapacity(this.treatmentCapacity);
        equipmentType.setType("il faut la changer plus tard");//equipmentType.setType(this.type);
        equipmentType.setWeight(this.weight);
        equipmentType.setWidth(this.width);
        equipmentType.setWidthUnit(this.widthUnit);
        equipmentType.setWithAllManutention(this.withAllManutention);
        equipmentType.setWithoutManutention(this.withoutManutention);
        equipmentType.setManipulationTime(this.manipulationTime);
        equipmentType.setVidageTime(this.vidageTime);
        equipmentType.setDefaultList(this.isDefaultList);

        return equipmentType;
    }

    public EquipmentTypeModel() {

    }

    public EquipmentTypeModel(EquipmentType equipmentType) {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public Long getAmortissement() {
        return amortissement;
    }

    public void setAmortissement(Long amortissement) {
        this.amortissement = amortissement;
    }

    public Long getBallsHeight() {
        return ballsHeight;
    }

    public void setBallsHeight(Long ballsHeight) {
        this.ballsHeight = ballsHeight;
    }

    public Long getBallsLength() {
        return ballsLength;
    }

    public void setBallsLength(Long ballsLength) {
        this.ballsLength = ballsLength;
    }

    public Long getBallsWeight() {
        return ballsWeight;
    }

    public void setBallsWeight(Long ballsWeight) {
        this.ballsWeight = ballsWeight;
    }

    public Long getBallsWidth() {
        return ballsWidth;
    }

    public void setBallsWidth(Long ballsWidth) {
        this.ballsWidth = ballsWidth;
    }

    public Long getBlades() {
        return blades;
    }

    public void setBlades(Long blades) {
        this.blades = blades;
    }

    public Long getBladesThickness() {
        return bladesThickness;
    }

    public void setBladesThickness(Long bladesThickness) {
        this.bladesThickness = bladesThickness;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Long getCapacity() {
        return capacity;
    }

    public void setCapacity(Long capacity) {
        this.capacity = capacity;
    }

    public String getCapacityUnit() {
        return capacityUnit;
    }

    public void setCapacityUnit(String capacityUnit) {
        this.capacityUnit = capacityUnit;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public Double getCompartmentsNumber() {
        return compartmentsNumber;
    }

    public void setCompartmentsNumber(Double compartmentsNumber) {
        this.compartmentsNumber = compartmentsNumber;
    }

    public Float getDebit() {
        return debit;
    }

    public void setDebit(Float debit) {
        this.debit = debit;
    }

    public String getDebitUnit() {
        return debitUnit;
    }

    public void setDebitUnit(String debitUnit) {
        this.debitUnit = debitUnit;
    }

    public Long getEmptyWeight() {
        return emptyWeight;
    }

    public void setEmptyWeight(Long emptyWeight) {
        this.emptyWeight = emptyWeight;
    }

    public String getEmptyWeightUnit() {
        return emptyWeightUnit;
    }

    public void setEmptyWeightUnit(String emptyWeightUnit) {
        this.emptyWeightUnit = emptyWeightUnit;
    }

    public String getEnergy() {
        return energy;
    }

    public void setEnergy(String energy) {
        this.energy = energy;
    }

    public Long getFunctionnalCost() {
        return functionnalCost;
    }

    public void setFunctionnalCost(Long functionnalCost) {
        this.functionnalCost = functionnalCost;
    }

    public Long getGerbage() {
        return gerbage;
    }

    public void setGerbage(Long gerbage) {
        this.gerbage = gerbage;
    }

    public Float getGerbageArea() {
        return gerbageArea;
    }

    public void setGerbageArea(Float gerbageArea) {
        this.gerbageArea = gerbageArea;
    }

    public Double getGroundArea() {
        return groundArea;
    }

    public void setGroundArea(Double groundArea) {
        this.groundArea = groundArea;
    }

    public Long getHauteurDeLevage() {
        return hauteurDeLevage;
    }

    public void setHauteurDeLevage(Long hauteurDeLevage) {
        this.hauteurDeLevage = hauteurDeLevage;
    }

    public Long getHeight() {
        return height;
    }

    public void setHeight(Long height) {
        this.height = height;
    }

    public String getHeightUnit() {
        return heightUnit;
    }

    public void setHeightUnit(String heightUnit) {
        this.heightUnit = heightUnit;
    }

    public Long getHopperLenght() {
        return hopperLenght;
    }

    public void setHopperLenght(Long hopperLenght) {
        this.hopperLenght = hopperLenght;
    }

    public Long getHopperWidth() {
        return hopperWidth;
    }

    public void setHopperWidth(Long hopperWidth) {
        this.hopperWidth = hopperWidth;
    }

    public Long getHourPrice() {
        return hourPrice;
    }

    public void setHourPrice(Long hourPrice) {
        this.hourPrice = hourPrice;
    }

    public Long getHourlyCapacity() {
        return hourlyCapacity;
    }

    public void setHourlyCapacity(Long hourlyCapacity) {
        this.hourlyCapacity = hourlyCapacity;
    }

    public Boolean getIntermediary() {
        return intermediary;
    }
    public void setIntermediary(Boolean intermediary) {
        this.intermediary = intermediary;
    }

    public Double getInvestmentPrice() {
        return investmentPrice;
    }

    public void setInvestmentPrice(Double investmentPrice) {
        this.investmentPrice = investmentPrice;
    }

    public Boolean getContainer() {
        return isContainer;
    }

    public void setContainer(Boolean container) {
        isContainer = container;
    }

    public Long getLenght() {
        return lenght;
    }

    public void setLenght(Long lenght) {
        this.lenght = lenght;
    }

    public String getLenghtUnit() {
        return lenghtUnit;
    }

    public void setLenghtUnit(String lenghtUnit) {
        this.lenghtUnit = lenghtUnit;
    }

    public Long getLocationHour() {
        return locationHour;
    }

    public void setLocationHour(Long locationHour) {
        this.locationHour = locationHour;
    }

    public Double getLocationPrice() {
        return locationPrice;
    }

    public void setLocationPrice(Double locationPrice) {
        this.locationPrice = locationPrice;
    }

    public Long getMaxLoad() {
        return maxLoad;
    }

    public void setMaxLoad(Long maxLoad) {
        this.maxLoad = maxLoad;
    }

    public Long getMaxWeightAdmittable() {
        return maxWeightAdmittable;
    }

    public void setMaxWeightAdmittable(Long maxWeightAdmittable) {
        this.maxWeightAdmittable = maxWeightAdmittable;
    }

    public String getMaxWeightAdmittableUnit() {
        return maxWeightAdmittableUnit;
    }

    public void setMaxWeightAdmittableUnit(String maxWeightAdmittableUnit) {
        this.maxWeightAdmittableUnit = maxWeightAdmittableUnit;
    }

    public Long getPower() {
        return power;
    }

    public void setPower(Long power) {
        this.power = power;
    }

    public Long getPression() {
        return pression;
    }

    public void setPression(Long pression) {
        this.pression = pression;
    }

    public Boolean getProtection() {
        return protection;
    }
    public void setProtection(Boolean protection) {
        this.protection = protection;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Long getRetentionId() {
        return retentionId;
    }

    public void setRetentionId(Long retentionId) {
        this.retentionId = retentionId;
    }

    public Boolean getRetention() {
        return retention;
    }

    public void setRetention(Boolean retention) {
        this.retention = retention;
    }

    public Boolean getScaleSize() {
        return scaleSize;
    }

    public void setScaleSize(Boolean scaleSize) {
        this.scaleSize = scaleSize;
    }

    public Boolean getStrenght() {
        return strenght;
    }

    public void setStrenght(Boolean strenght) {
        this.strenght = strenght;
    }

    public Long getSubCategoryId() {
        return subCategoryId;
    }

    public void setSubCategoryId(Long subCategoryId) {
        this.subCategoryId = subCategoryId;
    }

    public Long getTreatmentCapacity() {
        return treatmentCapacity;
    }

    public void setTreatmentCapacity(Long treatmentCapacity) {
        this.treatmentCapacity = treatmentCapacity;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean getWeight() {
        return weight;
    }

    public void setWeight(Boolean weight) {
        this.weight = weight;
    }

    public Double getWidth() {
        return width;
    }

    public void setWidth(Double width) {
        this.width = width;
    }

    public String getWidthUnit() {
        return widthUnit;
    }

    public void setWidthUnit(String widthUnit) {
        this.widthUnit = widthUnit;
    }

    public Long getWithAllManutention() {
        return withAllManutention;
    }

    public void setWithAllManutention(Long withAllManutention) {
        this.withAllManutention = withAllManutention;
    }

    public Long getWithoutManutention() {
        return withoutManutention;
    }

    public void setWithoutManutention(Long withoutManutention) {
        this.withoutManutention = withoutManutention;
    }

    public Float getManipulationTime() {
        return manipulationTime;
    }

    public void setManipulationTime(Float manipulationTime) {
        this.manipulationTime = manipulationTime;
    }

    public Float getVidageTime() {
        return vidageTime;
    }

    public void setVidageTime(Float vidageTime) {
        this.vidageTime = vidageTime;
    }

    public Boolean getDefaultList() {
        return isDefaultList;
    }

    public void setDefaultList(Boolean defaultList) {
        isDefaultList = defaultList;
    }

    public List<String> getEquipmentVehicleName() { return equipmentVehicleName; }
    public void setEquipmentVehicleName(List<String> equipmentVehicleName) { this.equipmentVehicleName = equipmentVehicleName; }

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
}

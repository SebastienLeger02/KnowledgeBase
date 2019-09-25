package trinov.flw.data.entity.equipements;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.vehicule.LiteVehicle;
import trinov.flw.data.entity.vehicule.Vehicle;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class EquipmentType implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native") // Quand il y a un problème avec les long maxId
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column(name = "name")
    private String name; // Obligatoire
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
    @Basic
    @Column(name = "comment_id")
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
    @Basic
    @Column(name = "retentions_id")
    private Long retentionsId;
    private Boolean retention; // boolean
    private Boolean scaleSize;
    private Boolean strenght;
    @Basic
    @Column( name = "sub_category_id")
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


    @ManyToOne
    @JoinColumn( name = "comment_id", insertable = false, updatable = false)
    private Comment comment;

    @ManyToOne
    @JoinColumn(name = "retentions_id",  insertable=false, updatable=false)
    private EquipmentRetentionType equipmentRetentionType;

    @OneToMany(mappedBy = "equipmentRetentionType")
    private Set<EquipmentRetentionType> equipmentRetentionTypes;

    @ManyToOne
    @JoinColumn( name = "sub_category_id", insertable = false, updatable = false)
    private EquipmentSubCategory equipmentSubCategory;

    @OneToMany( mappedBy = "equipmentType")
    private Set<EquipmentSubCategory> equipmentSubCategorys;



    // ------------------------------------- Table equipment_protections_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_protections",
            joinColumns = { @JoinColumn(name = "equipment_type_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_protection_type_id") })
    private Set<EquipmentProtectionType> equipmentProtectionTypes = new HashSet<>();

    // -----------------------------------  Table equipment_manufacturer_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_manufacturers",
            joinColumns = { @JoinColumn(name = "equipment_type_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_manufacturer_id") })
    private Set<EquipmentManufacturer> equipmentManufacturers = new HashSet<>();



    // ---------------------------------------  Table equipment_dangerousness_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_equipment_dangerousness",
            joinColumns = { @JoinColumn(name = "equipment_type_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_dangerousness_id") })
    private Set<EquipmentDangerousness> equipmentDangerousnesses = new HashSet<>();


    // ---------------------------------------  Table equipment_norm_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_norms",
            joinColumns = { @JoinColumn(name = "equipment_type_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_norm_id") })
    private Set<EquipmentNorm> equipmentNorms = new HashSet<>();




    // ---------------------------------------  Table equipment_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_equipment_type",
            joinColumns = { @JoinColumn(name = "equipment_type_manutentions_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_type_id") })
    private Set<EquipmentType> equipmentTypes = new HashSet<>();


    // ---------------------------------------  Table vehicle
    @ManyToMany
    @JoinTable(name = "equipment_type_vehicles",
            joinColumns = { @JoinColumn(name = "equipment_type_id") },
            inverseJoinColumns = { @JoinColumn(name = "vehicle_id") })
    private Set<Vehicle> vehicles;



/*
    // ---------------------------------------  Table equipment_control_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "equipmentTypes")
    private Set<EquipmentControlType> equipmentControlTypes = new HashSet<>();

    // ---------------------------------------  Table equipment_marking_type
    /*@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "equipmentTypes")
    private Set<EquipmentMarkingType> equipmentMarkingTypes = new HashSet<>(); */
/*
    // ---------------------------------------  Table equipment_retention_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "equipmentTypes")
    private Set<EquipmentRetentionType> equipmentRetentionTypes = new HashSet<>();

    // ---------------------------------------  Table equipment_smell_type
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "equipmentTypes")
    private Set<EquipmentSmellType> equipmentSmellTypes = new HashSet<>();

    // ---------------------------------------  Table equipment_category
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "equipmentTypes")
    private Set<EquipmentCategory> equipmentCategory = new HashSet<>();

    */
    /*@OneToMany(mappedBy = "equipmentType")  // Lieu/Formation
    private EquipmentType equipmentType;

    //Lieu
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "sub_category_id")
    private List<EquipmentSubCategory> equipmentSubCategorys;
 */
    public Long getId() { return id; }
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

    public Double getGroundArea() { return groundArea; }
    public void setGroundArea(Double groundArea) { this.groundArea = groundArea; }

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

    public Double getInvestmentPrice() { return investmentPrice; }
    public void setInvestmentPrice(Double investmentPrice) {
        this.investmentPrice = investmentPrice;
    }

    public Boolean getIsContainer() {
        return isContainer;
    }
    public void setIsContainer(Boolean isContainer) {
        this.isContainer = isContainer;
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

    public Long getLocationHour() { return locationHour; }
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
    public void setMaxWeightAdmittableUnit(String maxWeightAdmittableUnit) { this.maxWeightAdmittableUnit = maxWeightAdmittableUnit; }

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


    public Boolean getRetention() { return retention; }
    public void setRetention(Boolean retention) { this.retention = retention; }

    public Long getRetentionId() {
        return retentionsId;
    }
    public void setRetentionId(Long retentionId) {
        this.retentionsId = retentionId;
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

    public Boolean getContainer() { return isContainer; }
    public void setContainer(Boolean container) { isContainer = container; }

    public Comment getComment() { return comment; }
    public void setComment(Comment comment) { this.comment = comment; }

    public EquipmentRetentionType getEquipmentRetentionType() { return equipmentRetentionType; }
    public void setEquipmentRetentionType(EquipmentRetentionType equipmentRetentionType) { this.equipmentRetentionType = equipmentRetentionType; }

    public Set<EquipmentSubCategory> getEquipmentSubCategorys() { return equipmentSubCategorys; }
    public void setEquipmentSubCategorys(Set<EquipmentSubCategory> equipmentSubCategorys) { this.equipmentSubCategorys = equipmentSubCategorys; }

    public Long getRetentionsId() { return retentionsId; }
    public void setRetentionsId(Long retentionsId) { this.retentionsId = retentionsId; }

    public EquipmentSubCategory getEquipmentSubCategory() { return equipmentSubCategory; }
    public void setEquipmentSubCategory(EquipmentSubCategory equipmentSubCategory) { this.equipmentSubCategory = equipmentSubCategory; }

    public Set<EquipmentProtectionType> getEquipmentProtectionTypes() { return equipmentProtectionTypes; }
    public void setEquipmentProtectionTypes(Set<EquipmentProtectionType> equipmentProtectionTypes) { this.equipmentProtectionTypes = equipmentProtectionTypes; }


    public Set<EquipmentManufacturer> getEquipmentManufacturers() { return equipmentManufacturers; }
    public void setEquipmentManufacturers(Set<EquipmentManufacturer> equipmentManufacturers) { this.equipmentManufacturers = equipmentManufacturers; }

    public Set<EquipmentDangerousness> getEquipmentDangerousnesses() { return equipmentDangerousnesses; }
    public void setEquipmentDangerousnesses(Set<EquipmentDangerousness> equipmentDangerousnesses) { this.equipmentDangerousnesses = equipmentDangerousnesses; }

    public Set<EquipmentNorm> getEquipmentNorms() { return equipmentNorms; }
    public void setEquipmentNorms(Set<EquipmentNorm> equipmentNorms) { this.equipmentNorms = equipmentNorms; }

    public Set<EquipmentRetentionType> getEquipmentRetentionTypes() { return equipmentRetentionTypes; }
    public void setEquipmentRetentionTypes(Set<EquipmentRetentionType> equipmentRetentionTypes) { this.equipmentRetentionTypes = equipmentRetentionTypes; }

    public Set<EquipmentType> getEquipmentTypes() { return equipmentTypes; }
    public void setEquipmentTypes(Set<EquipmentType> equipmentTypes) { this.equipmentTypes = equipmentTypes; }

    public Set<Vehicle> getVehicles() { return vehicles; }
    public void setVehicles(Set<Vehicle> vehicles) { this.vehicles = vehicles; }
}

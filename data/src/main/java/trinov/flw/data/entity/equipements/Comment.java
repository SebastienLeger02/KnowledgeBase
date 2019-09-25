package trinov.flw.data.entity.equipements;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.vehicule.Vehicle;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Comment implements Serializable {
    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column( name = "comment")
    private String comment;
    private Long version;
    @Basic
    @Column(name = "equipment_category_id")
    private Long equipmentCategoryId;
    @Basic
    @Column(name = "equipment_control_type_id")
    private Long equipmentControlTypeId;
    @Basic
    @Column(name = "equipment_dangerousness_id")
    private Long equipmentDangerousnessId;
    @Basic
    @Column(name = "equipment_manufacturer_id")
    private Long equipmentManufacturerId;
    @Basic
    @Column( name = "equipment_marking_type_id")
    private Long equipmentMarkingTypeId;
    @Basic
    @Column(name = "equipment_norm_id")
    private Long equipmentNormId;
    @Basic
    @Column(name = "equipment_protection_type_id")
    private Long equipmentProtectionTypeId;
    @Basic
    @Column( name = "equipment_retention_type_id")
    private Long equipmentRetentionTypeId;
    @Basic
    @Column( name = "equipment_smell_type_id")
    private Long equipmentSmellTypeId;
    @Basic
    @Column( name = "equipment_state_id")
    private Long equipmentStateId;

    @ManyToOne
    @JoinColumn( name = "equipment_category_id", updatable = false, insertable = false)
    private EquipmentCategory equipmentCategory;

    @ManyToOne
    @JoinColumn( name = "equipment_control_type_id", updatable = false, insertable = false)
    private EquipmentControlType equipmentControlType;

    @ManyToOne
    @JoinColumn( name = "equipment_dangerousness_id", updatable = false, insertable = false)
    private EquipmentDangerousness equipmentDangerousness;

    @ManyToOne
    @JoinColumn( name = "equipment_manufacturer_id", updatable = false, insertable = false)
    private EquipmentManufacturer equipmentManufacturer;

    @ManyToOne
    @JoinColumn( name = "equipment_marking_type_id", updatable = false, insertable = false)
    private EquipmentMarkingType equipmentMarkingType;

    @ManyToOne
    @JoinColumn( name = "equipment_norm_id", updatable = false, insertable = false)
    private EquipmentNorm equipmentNorm;

    @ManyToOne
    @JoinColumn( name = "equipment_protection_type_id", updatable = false, insertable = false)
    private EquipmentProtectionType equipmentProtectionType;

    @ManyToOne
    @JoinColumn( name = "equipment_retention_type_id", updatable = false, insertable = false)
    private EquipmentRetentionType equipmentRetentionType;

    @ManyToOne
    @JoinColumn( name = "equipment_smell_type_id", updatable = false, insertable = false)
    private EquipmentSmellType equipmentSmellType;

    @ManyToOne
    @JoinColumn( name = "equipment_State_id", updatable = false, insertable = false)
    private EquipmentState equipmentState;

    @OneToMany(mappedBy = "comment")
    private Set<EquipmentType> equipmentTypes;

    @OneToMany(mappedBy = "comment")
    private Set<Vehicle> vehicles;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getEquipmentCategoryId() { return equipmentCategoryId; }
    public void setEquipmentCategoryId(Long equipmentCategoryId) { this.equipmentCategoryId = equipmentCategoryId; }

    public Long getEquipmentControlTypeId() { return equipmentControlTypeId; }
    public void setEquipmentControlTypeId(Long equipmentControlTypeId) { this.equipmentControlTypeId = equipmentControlTypeId; }

    public Long getEquipmentDangerousnessId() { return equipmentDangerousnessId; }
    public void setEquipmentDangerousnessId(Long equipmentDangerousnessId) { this.equipmentDangerousnessId = equipmentDangerousnessId; }

    public Long getEquipmentManufacturerId() { return equipmentManufacturerId; }
    public void setEquipmentManufacturerId(Long equipmentManufacturerId) { this.equipmentManufacturerId = equipmentManufacturerId; }

    public Long getEquipmentMarkingTypeId() { return equipmentMarkingTypeId; }
    public void setEquipmentMarkingTypeId(Long equipmentMarkingTypeId) { this.equipmentMarkingTypeId = equipmentMarkingTypeId; }

    public Long getEquipmentNormId() { return equipmentNormId; }
    public void setEquipmentNormId(Long equipmentNormId) { this.equipmentNormId = equipmentNormId; }

    public Long getEquipmentProtectionTypeId() { return equipmentProtectionTypeId; }
    public void setEquipmentProtectionTypeId(Long equipmentProtectionTypeId) { this.equipmentProtectionTypeId = equipmentProtectionTypeId; }

    public Long getEquipmentRetentionTypeId() { return equipmentRetentionTypeId; }
    public void setEquipmentRetentionTypeId(Long equipmentRetentionTypeId) { this.equipmentRetentionTypeId = equipmentRetentionTypeId; }

    public Long getEquipmentSmellTypeId() { return equipmentSmellTypeId; }
    public void setEquipmentSmellTypeId(Long equipmentSmellTypeId) { this.equipmentSmellTypeId = equipmentSmellTypeId; }

    public Long getEquipmentStateId() { return equipmentStateId; }
    public void setEquipmentStateId(Long equipmentStateId) { this.equipmentStateId = equipmentStateId; }

    public EquipmentCategory getEquipmentCategory() { return equipmentCategory; }
    public void setEquipmentCategory(EquipmentCategory equipmentCategory) { this.equipmentCategory = equipmentCategory; }

    public EquipmentControlType getEquipmentControlType() { return equipmentControlType; }
    public void setEquipmentControlType(EquipmentControlType equipmentControlType) { this.equipmentControlType = equipmentControlType; }

    public EquipmentDangerousness getEquipmentDangerousness() { return equipmentDangerousness; }
    public void setEquipmentDangerousness(EquipmentDangerousness equipmentDangerousness) { this.equipmentDangerousness = equipmentDangerousness; }

    public EquipmentManufacturer getEquipmentManufacturer() { return equipmentManufacturer; }
    public void setEquipmentManufacturer(EquipmentManufacturer equipmentManufacturer) { this.equipmentManufacturer = equipmentManufacturer; }

    public EquipmentMarkingType getEquipmentMarkingType() { return equipmentMarkingType; }
    public void setEquipmentMarkingType(EquipmentMarkingType equipmentMarkingType) { this.equipmentMarkingType = equipmentMarkingType; }

    public EquipmentNorm getEquipmentNorm() { return equipmentNorm; }
    public void setEquipmentNorm(EquipmentNorm equipmentNorm) { this.equipmentNorm = equipmentNorm; }

    public EquipmentProtectionType getEquipmentProtectionType() { return equipmentProtectionType; }
    public void setEquipmentProtectionType(EquipmentProtectionType equipmentProtectionType) { this.equipmentProtectionType = equipmentProtectionType; }

    public EquipmentRetentionType getEquipmentRetentionType() { return equipmentRetentionType; }
    public void setEquipmentRetentionType(EquipmentRetentionType equipmentRetentionType) { this.equipmentRetentionType = equipmentRetentionType; }

    public EquipmentSmellType getEquipmentSmellType() { return equipmentSmellType; }
    public void setEquipmentSmellType(EquipmentSmellType equipmentSmellType) { this.equipmentSmellType = equipmentSmellType; }

    public EquipmentState getEquipmentState() { return equipmentState; }
    public void setEquipmentState(EquipmentState equipmentState) { this.equipmentState = equipmentState; }

    public Set<EquipmentType> getEquipmentTypes() { return equipmentTypes; }
    public void setEquipmentTypes(Set<EquipmentType> equipmentTypes) { this.equipmentTypes = equipmentTypes; }

    public Set<Vehicle> getVehicles() { return vehicles; }
    public void setVehicles(Set<Vehicle> vehicles) { this.vehicles = vehicles; }
}

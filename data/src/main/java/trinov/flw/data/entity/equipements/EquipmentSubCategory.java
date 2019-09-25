package trinov.flw.data.entity.equipements;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class EquipmentSubCategory implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    private Long version;
    @Basic
    @Column(name = "category_id")
    private Long categoryId;
    @Basic
    @Column(name = "sub_category_id")
    private Long subCategoryId;
    private String family;
    private String imageUrl;
    private String subFamily;
    private String treatment;


    // --------------- EquipmentCategory
    @OneToMany(mappedBy = "equipmentSubCategory")
    private Set<EquipmentCategory> equipmentCategories;

    @ManyToOne
    @JoinColumn(name = "equipment_category_id", updatable = false, insertable = false)
    private EquipmentCategory equipmentCategory;

    // ---------------- EquipmentType
    @OneToMany(mappedBy = "equipmentSubCategory")
    private Set<EquipmentType> equipmentTypes;

    @ManyToOne
    @JoinColumn(name = "sub_category_id", updatable = false, insertable = false)
    private EquipmentType equipmentType;

    /*       ------------------ equipment_sub_category_conditionnements -----------
    @ManyToMany
    @JoinTable(name = "equipment_sub_category_conditionnements",
            joinColumns = { @JoinColumn(name = "critere_documentation_etat_physique_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<> ned = new HashSet<>();

    */

/*
    @OneToMany(mappedBy = "equipmentSubCategory")  // Lieu/Formation
    private Set<EquipmentType> equipmentTypes;


    public EquipmentType getEquipmentType() { return equipmentType; }
    public void setEquipmentType(EquipmentType equipmentType) { this.equipmentType = equipmentType; }


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private EquipmentCategory equipmentCategory;
*/
    //@JoinColumn(name = "category_id", nullable = false)


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }

    public String getFamily() { return family; }
    public void setFamily(String family) { this.family = family; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSubFamily() { return subFamily; }
    public void setSubFamily(String subFamily) { this.subFamily = subFamily; }

    public String getTreatment() { return treatment; }
    public void setTreatment(String treatment) { this.treatment = treatment; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryId) { this.subCategoryId = subCategoryId; }

    public EquipmentCategory getEquipmentCategory() { return equipmentCategory; }
    public void setEquipmentCategory(EquipmentCategory equipmentCategory) { this.equipmentCategory = equipmentCategory; }

    public EquipmentType getEquipmentType() { return equipmentType; }
    public void setEquipmentType(EquipmentType equipmentType) { this.equipmentType = equipmentType; }

    public Set<EquipmentCategory> getEquipmentCategories() { return equipmentCategories; }
    public void setEquipmentCategories(Set<EquipmentCategory> equipmentCategories) { this.equipmentCategories = equipmentCategories;}

    public Set<EquipmentType> getEquipmentTypes() { return equipmentTypes; }
    public void setEquipmentTypes(Set<EquipmentType> equipmentTypes) { this.equipmentTypes = equipmentTypes; }


}

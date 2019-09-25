package trinov.flw.data.entity.equipements;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class EquipmentCategory {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native") // Géneration automatique de la clés primaire
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    private Integer version;
    private String code;
    // Tab: equipment_sub_category
    @Basic
    @Column( name = "category_id")
    private Long categoryId;
    private String family;
    private String imageUrl;
    private String subFamily;
    private String treatment;

    @OneToMany(mappedBy = "equipmentCategory")
    private Set<Comment> comments;


    @OneToMany(mappedBy = "equipmentCategory")
    private Set<EquipmentSubCategory> equipmentSubCategories;

    @ManyToOne
    @JoinColumn( name = "category_id", updatable = false, insertable = false)
    private EquipmentSubCategory equipmentSubCategory;
    /*
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "comment",
            joinColumns = { @JoinColumn(name = "equipment_category_id") },
            inverseJoinColumns = { @JoinColumn(name = "comment_id") })
    private Set<EquipmentType> equipmentTypes = new HashSet<>();
*/

    @OneToMany(mappedBy = "equipmentCategory")  // Formation
    private Set<EquipmentSubCategory> equipmentSubCategorys;



    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getVersion() { return version; }
    public void setVersion(Integer version) { this.version = version; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }

    public String getFamily() { return family; }
    public void setFamily(String family) { this.family = family; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getSubFamily() { return subFamily; }
    public void setSubFamily(String subFamily) { this.subFamily = subFamily; }

    public String getTreatment() { return treatment; }
    public void setTreatment(String treatment) { this.treatment = treatment; }

    public Set<Comment> getComments() { return comments; }
    public void setComments(Set<Comment> comments) { this.comments = comments; }

    public Set<EquipmentSubCategory> getEquipmentSubCategories() { return equipmentSubCategories; }
    public void setEquipmentSubCategories(Set<EquipmentSubCategory> equipmentSubCategories) { this.equipmentSubCategories = equipmentSubCategories; }

    public EquipmentSubCategory getEquipmentSubCategory() { return equipmentSubCategory; }
    public void setEquipmentSubCategory(EquipmentSubCategory equipmentSubCategory) { this.equipmentSubCategory = equipmentSubCategory; }

    public Set<EquipmentSubCategory> getEquipmentSubCategorys() { return equipmentSubCategorys; }
    public void setEquipmentSubCategorys(Set<EquipmentSubCategory> equipmentSubCategorys) { this.equipmentSubCategorys = equipmentSubCategorys; }
}

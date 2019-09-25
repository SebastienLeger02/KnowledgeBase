package trinov.flw.data.entity.dechets;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class Tov implements Serializable {
    @Id
    @GeneratedValue(strategy  =  GenerationType.IDENTITY  )
    private Long id;

    @Basic
    @Column( name = "name")
    private String name;
    private Long version;
    private Boolean active;
    private Long code;
    @Basic
    @Column(name = "ned_id")
    private Long nedId;
    @Basic
    @Column(name = "sub_category_id")
    private Long subCategoryId;
    private Boolean valorisable;

    @OneToMany(mappedBy = "tov")
    private Set<HybridTov> hybridTovs;

    @OneToMany(mappedBy = "tov")
    private Set<Waste> wastes;

    @ManyToOne
    @JoinColumn( name = "sub_category_id", updatable = false, insertable = false)
    private WasteSubCategory wasteSubCategory;

    @ManyToOne
    @JoinColumn( name ="ned_id" , updatable = false, insertable = false)
    private Ned ned;



    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Boolean getActive() { return active; }
    public void setActive(Boolean active) { this.active = active; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Long getNedId() { return nedId; }
    public void setNedId(Long nedId) { this.nedId = nedId; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryIdl) { this.subCategoryId = subCategoryIdl; }

    public Boolean getValorisable() { return valorisable; }
    public void setValorisable(Boolean valorisable) { this.valorisable = valorisable; }

    public Set<HybridTov> getHybridTovs() { return hybridTovs; }
    public void setHybridTov(Set<HybridTov> hybridTovs) { this.hybridTovs = hybridTovs; }

    public Set<Waste> getWastes() { return wastes; }
    public void setWastes(Set<Waste> wastes) { this.wastes = wastes; }

    public WasteSubCategory getWasteSubCategory() { return wasteSubCategory; }
    public void setWasteSubCategory(WasteSubCategory wasteSubCategory) { this.wasteSubCategory = wasteSubCategory; }

    public Ned getNed() { return ned; }
    public void setNed(Ned ned) { this.ned = ned; }
}

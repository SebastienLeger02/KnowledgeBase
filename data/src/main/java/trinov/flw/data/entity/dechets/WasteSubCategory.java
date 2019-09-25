package trinov.flw.data.entity.dechets;


import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
public class WasteSubCategory implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType. IDENTITY)
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "category_id")
    private Long categoryId;
    private Long idx;
    private Long code;
    private Long version;


    @ManyToOne()
    @JoinColumn(name="category_id" , insertable=false, updatable=false)
    private WasteCategory wasteCategory;

    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "wasteSubCategory")
    private List<Ned> neds = new ArrayList<>();
 // private List<Ned> children = new HasList<>();

    @OneToMany(mappedBy = "wasteSubCategory")
    private Set<HybridTov> hybridTovs;

    @OneToMany(mappedBy = "wasteSubCategory")
    private Set<Ced> ceds;

    public Long getIdx() { return idx; }
    public void setIdx(Long idx) { this.idx = idx; }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public WasteCategory getWasteCategory() { return wasteCategory; }
    public void setWasteCategory(WasteCategory wasteCategory) { this.wasteCategory = wasteCategory; }

    public List<Ned> getNeds() { return neds; }
    public void setNeds(List<Ned> neds) { this.neds = neds; }

    public Set<HybridTov> getHybridTovs() { return hybridTovs; }
    public void setHybridTovs(Set<HybridTov> hybridTovs) { this.hybridTovs = hybridTovs; }

    public Set<Ced> getCeds() { return ceds; }
    public void setCeds(Set<Ced> ceds) { this.ceds = ceds; }
}

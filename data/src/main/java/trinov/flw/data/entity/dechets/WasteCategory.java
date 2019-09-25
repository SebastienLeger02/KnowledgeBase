package trinov.flw.data.entity.dechets;


import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name= "waste_category")
public class WasteCategory {

    @Id
    @GeneratedValue (strategy  =  GenerationType. IDENTITY  )  // Genère l'id automatiquement
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    private Long idx;
    private Long version;
    private Long code;
    private String imageUrl;
    private String type;

    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "wasteCategory")
    private Set<WasteSubCategory> wasteSubCategories;

    public Long getIdx() { return idx; }
    public void setIdx(Long idx) { this.idx = idx; }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Set<WasteSubCategory> getWasteSubCategories() { return wasteSubCategories; }
    public void setWasteSubCategories(Set<WasteSubCategory> wasteSubCategories) { this.wasteSubCategories = wasteSubCategories; }

}

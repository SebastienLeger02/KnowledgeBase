package trinov.flw.data.entity.dechets;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
public class Ced implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column( name = "name")
    private String name;
    private Long version;
    private Long code;
    private Boolean isDangerous;
    private Boolean isInert;
    private Boolean isRegulated;
    @Basic
    @Column( name = "sub_category_id")
    private Long subCategoryId;
    //private Long dnddeclarationRejetId;

    @OneToMany(mappedBy = "ced")
    private Set<Ned> neds;

    @ManyToOne
    @JoinColumn( name ="sub_category_id", updatable = false, insertable = false)
    private WasteSubCategory wasteSubCategory;

    @ManyToOne
    @JoinColumn( name ="ced_id", updatable = false, insertable = false)
    private Ned ned;


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Boolean getDangerous() { return isDangerous; }
    public void setDangerous(Boolean dangerous) { isDangerous = dangerous; }

    public Boolean getInert() { return isInert; }
    public void setInert(Boolean inert) { isInert = inert; }

    public Boolean getRegulated() { return isRegulated; }
    public void setRegulated(Boolean regulated) { isRegulated = regulated; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryId) { this.subCategoryId = subCategoryId; }

    /*
    public Long getDnddeclarationRejetId() { return dnddeclarationRejetId; }
    public void setDnddeclarationRejetId(Long dnddeclarationRejetId) { this.dnddeclarationRejetId = dnddeclarationRejetId; }
    */

    public Set<Ned> getNeds() { return neds; }
    public void setNeds(Set<Ned> neds) { this.neds = neds; }

    public WasteSubCategory getWasteSubCategory() { return wasteSubCategory; }
    public void setWasteSubCategory(WasteSubCategory wasteSubCategory) { this.wasteSubCategory = wasteSubCategory; }

    public Ned getNed() { return ned; }
    public void setNed(Ned ned) { this.ned = ned; }

}

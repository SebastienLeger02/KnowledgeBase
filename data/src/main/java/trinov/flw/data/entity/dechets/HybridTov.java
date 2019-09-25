package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.dechets.Ned;
import trinov.flw.data.entity.dechets.Tov;
import trinov.flw.data.entity.dechets.WasteSubCategory;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Set;

@Entity
public class HybridTov implements Serializable {
    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column( name = "name")
    private String name;
    @Basic
    @Column(name = "ned_id")
    private Long nedId;
    @Basic
    @Column( name = "project_id")
    private Long projectId;
    @Basic
    @Column( name = "sub_category_id")
    private Long subCategoryId;
    @Basic
    @Column( name = "tov_id")
    private Long tovId;
    private Long version;


    @OneToMany(mappedBy = "hybridTov")
    private Set<Waste> wastes;

/*
    @ManyToOne
    @JoinColumn(name = "project_id", updatable = false , insertable = false)
    private Project project;
*/

    @ManyToOne
    @JoinColumn(name = "sub_category_id", updatable = false , insertable = false)
    private WasteSubCategory wasteSubCategory;

    @ManyToOne
    @JoinColumn(name = "ned_id", updatable = false , insertable = false)
    private Ned ned;

    @ManyToOne
    @JoinColumn(name = "tov_id", updatable = false , insertable = false)
    private Tov tov;



    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getNedId() { return nedId; }
    public void setNedId(Long nedId) { this.nedId = nedId; }

    public Long getProjectId() { return projectId; }
    public void setProjectId(Long projectId) { this.projectId = projectId; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryId) { this.subCategoryId = subCategoryId; }

    public Long getTovId() { return tovId; }
    public void setTovId(Long tovId) { this.tovId = tovId; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Set<Waste> getWastes() { return wastes; }
    public void setWastes(Set<Waste> wastes) { this.wastes = wastes; }

    public WasteSubCategory getWasteSubCategory() { return wasteSubCategory; }
    public void setWasteSubCategory(WasteSubCategory wasteSubCategory) { this.wasteSubCategory = wasteSubCategory; }

    public Ned getNed() { return ned; }
    public void setNed(Ned ned) { this.ned = ned; }

    public Tov getTov() { return tov; }
    public void setTov(Tov tov) { this.tov = tov; }

}

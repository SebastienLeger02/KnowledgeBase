package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class NafSubCategory implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    private Long version;
    private Long code;
    @Basic
    @Column(name ="category_id")
    private Long categoryId;


    @ManyToOne()
    @JoinColumn(name="category_id" , insertable=false, updatable=false)
    private NafCategory nafCategory;

    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "nafSubCategory")
    private List<Naf> nafs = new ArrayList<>();


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }


    public NafCategory getNafCategory() { return nafCategory; }
    public void setNafCategory(NafCategory nafCategory) { this.nafCategory = nafCategory; }

    public List<Naf> getNafs() { return nafs; }
    public void setNafs(List<Naf> nafs) { this.nafs = nafs; }

}
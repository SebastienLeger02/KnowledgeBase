package trinov.flw.data.entity.dechets;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Naf implements Serializable {

    @Id
    @GenericGenerator(
            name ="native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column( name = "name")
    private String name;
    private Long version;
    private Long code;
    private String letter;
    @Basic
    @Column(name = "sub_category_id")
    private Long subCategoryId;
    private Long isInCetim;


    @ManyToOne  // Vise la classe au dessus
    @JoinColumn(name="sub_category_id", insertable = false, updatable = false)
    public NafSubCategory nafSubCategory;


    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "naf_neds",
            joinColumns = { @JoinColumn(name = "naf_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<Ned> neds = new HashSet<>();


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public String getLetter() { return letter; }
    public void setLetter(String letter) { this.letter = letter; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryId) { this.subCategoryId = subCategoryId; }

    public Long getIsInCetim() { return isInCetim; }
    public void setIsInCetim(Long isInCetim) { this.isInCetim = isInCetim; }

    public NafSubCategory getNafSubCategory() { return nafSubCategory; }
    public void setNafSubCategory(NafSubCategory nafSubCategory) { this.nafSubCategory = nafSubCategory; }

    public Set<Ned> getNeds() { return neds; }
    public void setNeds(Set<Ned> neds) { this.neds = neds; }

}
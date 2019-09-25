package trinov.flw.data.entity.equipements;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class EquipmentNorm implements Serializable {

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
    private String code;


    @OneToMany(mappedBy = "equipmentNorm")
    private Set<Comment> comments;
/*
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_norms",
            joinColumns = { @JoinColumn(name = "equipment_norm_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_type_id") })
    private Set<EquipmentType> equipmentTypes = new HashSet<>();
*/

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public Set<Comment> getComments() { return comments; }
    public void setComments(Set<Comment> comments) { this.comments = comments; }
}

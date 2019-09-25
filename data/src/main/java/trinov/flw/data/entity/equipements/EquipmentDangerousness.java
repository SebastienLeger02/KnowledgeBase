package trinov.flw.data.entity.equipements;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class EquipmentDangerousness implements Serializable {
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
    private Float code;


    @OneToMany(mappedBy = "equipmentDangerousness")
    private Set<Comment> comments;

    /*
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_dangerousness",
            joinColumns = { @JoinColumn(name = "equipment_dangerousness_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_type_id") })
    private Set<EquipmentType> equipmentTypes = new HashSet<>();
*/

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Float getCode() { return code; }
    public void setCode(Float code) { this.code = code; }

    public Set<Comment> getComments() { return comments; }
    public void setComments(Set<Comment> comments) { this.comments = comments; }


}

package trinov.flw.data.entity.equipements;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class EquipmentRetentionType implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name ="name")
    private String name;
    private Long version;

    /*
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "comment",
            joinColumns = { @JoinColumn(name = "equipment_retention_id") },
            inverseJoinColumns = { @JoinColumn(name = "comment_id") })
    private Set<EquipmentType> equipmentTypes = new HashSet<>();
*/

    @OneToMany(mappedBy = "equipmentRetentionType")
    private Set<Comment> comments;

    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "equipmentRetentionType")
    private Set<EquipmentType> equipmentTypes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "retentions_id",  insertable=false, updatable=false)
    private EquipmentRetentionType equipmentRetentionType;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Set<EquipmentType> getEquipmentTypes() { return equipmentTypes; }
    public void setEquipmentTypes(Set<EquipmentType> equipmentTypes) { this.equipmentTypes = equipmentTypes; }

    public Set<Comment> getComments() { return comments; }
    public void setComments(Set<Comment> comments) { this.comments = comments; }

}

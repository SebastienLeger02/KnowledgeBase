package trinov.flw.data.entity.equipements;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class EquipmentMarkingType implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    @Column(name = "id")
    private Long id;

    @Basic
    @Column( name = "name")
    private String name;
    private Long version;


    @OneToMany(mappedBy = "equipmentMarkingTypeId")
    private Set<Comment>comments; //= new ArrayList<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Set<Comment> getComments() { return comments; }
    public void setComments(Set<Comment> comments) { this.comments = comments; }
}

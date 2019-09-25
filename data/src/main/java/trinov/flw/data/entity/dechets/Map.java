package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class Map implements Serializable {
    @Id
    @GenericGenerator(
            name ="native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    private Long version;
    private byte[] image; // A changer le type

    @OneToMany( mappedBy = "map")
    private Set<Project> projects;


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public byte[] getImage() { return image; }
    public void setImage(byte[] image) { this.image = image; }

    public Set<Project> getProjects() { return projects; }
    public void setProjects(Set<Project> projects) { this.projects = projects; }
}

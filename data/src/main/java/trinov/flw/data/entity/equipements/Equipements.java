package trinov.flw.data.entity.equipements;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

@Entity
public class Equipements {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name = "name")
    private String name;

    public Long getId() { return id; }
    public void setId(Long id) { this.id=id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }


}

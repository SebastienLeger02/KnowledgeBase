package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
public class CritereDocumentationCarChimGe implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column( name ="carChimge")
    private String carChimge;
    private Long version;





    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "ned_criteredocumentationcarchimdes",
            joinColumns = { @JoinColumn(name = "critere_documentation_car_chim_de_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<Ned> neds = new HashSet<>();



    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCarChimge() { return carChimge; }
    public void setCarChimge(String carChimge) { this.carChimge = carChimge; }

    public Long getVersion() {return version; }
    public void setVersion(Long version) { this.version = version; }
}

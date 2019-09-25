package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
public class CritereDocumentationCarChimDe implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name = "carChimDe")
    private String carChimeDe;
    private Long version;


/*
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "ned_criteredocumentationcarchimdes",
            joinColumns = { @JoinColumn(name = "critere_documentation__chim_de_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<Ned> neds = new HashSet<>();
*/



    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCarChimeDe() { return carChimeDe; }
    public void setCarChimeDe(String carChimeDe) { this.carChimeDe = carChimeDe; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    /*
    public Set<Ned> getNeds() { return neds; }
    public void setNeds(Set<Ned> neds) { this.neds = neds; }
    */
}

package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class CritereDocumentationEtatPhysique implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name = "etatPhysique")
    private String etatPhysique;
    private Long version;

    /*
    @ManyToMany
    @JoinTable(name = "ned_criteredocumentationetatphysiques",
            joinColumns = { @JoinColumn(name = "critere_documentation_etat_physique_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<Ned> neds = new HashSet<>();
*/


    @OneToMany(mappedBy = "critereDocumentationEtatPhysique")
    private Set<Waste> wastes = new HashSet<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEtatPhysique() { return etatPhysique; }
    public void setEtatPhysique(String etatPhysique) { this.etatPhysique = etatPhysique; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    /*
    public Set<Ned> getNeds() { return neds; }
    public void setNeds(Set<Ned> neds) { this.neds = neds; }
    */
    public Set<Waste> getWaste() { return wastes; }
    public void setWaste(Set<Waste> waste) { this.wastes = waste; }
}

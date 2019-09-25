package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class CritereDocumentationFfdu implements Serializable {

    @Id
    @GenericGenerator(
            name ="native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name = "produitFfdu")
    private String produitFfdu;
    private Long version;

    /*
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "ned_criteredocumentationffdus",
            joinColumns = { @JoinColumn(name = "critere_documentation__fdu_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<Ned> neds = new HashSet<>();
*/

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProduitFfdu() { return produitFfdu; }
    public void setProduitFfdu(String produitFfdu) { this.produitFfdu = produitFfdu; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }
}

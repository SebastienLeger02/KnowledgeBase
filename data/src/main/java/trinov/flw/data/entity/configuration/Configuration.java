package trinov.flw.data.entity.configuration;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.periode.Periode;

import javax.persistence.*;

/**
 * Created by thibault
 * Date: 18/06/18
 * Time: 14:41
 */
@Entity
public class Configuration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @ManyToOne
    @JoinColumn(name = "periode_id")
    private Periode periode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Periode getPeriode() {
        return periode;
    }

    public void setPeriode(Periode periode) {
        this.periode = periode;
    }
}

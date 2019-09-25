package trinov.flw.data.entity.periode;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.csvFile.FileUpload;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

/**
 * Created by thibault
 * Date: 18/06/18
 * Time: 14:31
 */
@Entity
public class Periode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    private Date dateDebut;

    private Date dateFin;

    private Date deadLine;

    private Integer coeffCrypto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    public Date getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(Date deadLine) {
        this.deadLine = deadLine;
    }

    public Integer getCoeffCrypto() {
        return coeffCrypto;
    }

    public void setCoeffCrypto(Integer coeffCrypto) {
        this.coeffCrypto = coeffCrypto;
    }
}

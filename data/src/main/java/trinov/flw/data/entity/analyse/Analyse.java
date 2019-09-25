package trinov.flw.data.entity.analyse;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.csvFile.FileUpload;
import trinov.flw.data.entity.pays.Pays;
import trinov.flw.data.entity.periode.Periode;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by thibault
 * Date: 14/08/18
 * Time: 10:05
 */
@Entity
public class Analyse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column(name = "periode_id")
    private Long periodeId;

    @Basic
    @Column(name = "pays_id")
    private Long paysId;

    private String progressMessage;

    private String warnings;

    private Double progress;

    private Date date;

    private Status status;

    private String resultPath;

    @ManyToOne
    @JoinColumn(name = "pays_id", updatable = false, insertable = false)
    private Pays pays;

    @ManyToOne
    @JoinColumn(name = "periode_id", updatable = false, insertable = false)
    private Periode periode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPeriodeId() {
        return periodeId;
    }

    public void setPeriodeId(Long periodeId) {
        this.periodeId = periodeId;
    }

    public Long getPaysId() {
        return paysId;
    }

    public void setPaysId(Long paysId) {
        this.paysId = paysId;
    }

    public String getProgressMessage() {
        return progressMessage;
    }

    public void setProgressMessage(String progressMessage) {
        this.progressMessage = progressMessage;
    }

    public String getWarnings() {
        return warnings;
    }

    public void setWarnings(String warnings) {
        this.warnings = warnings;
    }

    public Double getProgress() {
        return progress;
    }

    public void setProgress(Double progress) {
        this.progress = progress;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getResultPath() {
        return resultPath;
    }

    public void setResultPath(String resultPath) {
        this.resultPath = resultPath;
    }

    public Pays getPays() {
        return pays;
    }

    public void setPays(Pays pays) {
        this.pays = pays;
    }

    public Periode getPeriode() {
        return periode;
    }

    public void setPeriode(Periode periode) {
        this.periode = periode;
    }

    public enum Status {
        KO,
        OK,
        EN_COURS,
        CANCELLED
    }
}

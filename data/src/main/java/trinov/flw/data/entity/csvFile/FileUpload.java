package trinov.flw.data.entity.csvFile;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.pays.Pays;
import trinov.flw.data.entity.periode.Periode;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by thibault
 * Date: 11/06/18
 * Time: 14:32
 */
@Entity
public class FileUpload {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    private Date dateUpload;
    private String originalFileName;
    private String path;
    private Integer version;
    private Long size;
    private Integer lineCount;
    private Double progress;
    private String progressMessage;
    private String warnings;

    @ManyToOne
    @JoinColumn(name = "periode_id")
    private Periode periode;

    @ManyToOne
    @JoinColumn(name = "pays_id")
    private Pays pays;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Enumerated(EnumType.STRING)
    private Type type;

    @Enumerated(EnumType.STRING)
    private Market market;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOriginalFileName() {
        return originalFileName;
    }

    public void setOriginalFileName(String originalFileName) {
        this.originalFileName = originalFileName;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Date getDateUpload() {
        return dateUpload;
    }

    public void setDateUpload(Date dateUpload) {
        this.dateUpload = dateUpload;
    }

    public void setSize(Long size) {
        this.size = size;
    }

    public long getSize() {
        return size;
    }

    public void setLineCount(Integer lineCount) {
        this.lineCount = lineCount;
    }

    public Integer getLineCount() {
        return lineCount;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setMarket(Market market) {
        this.market = market;
    }

    public Market getMarket() {
        return market;
    }

    public Double getProgress() {
        return progress;
    }

    public void setProgress(Double progress) {
        this.progress = progress;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
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

    public enum Type {
        SHRINKAGE,
        ANIMAL_WASTE,
        BIO_WASTE,
        DIB,
        DONATION;
    }

    public enum Market {
        HYPER,
        SUPER,
        ANY
    }

    public enum Status {
        KO,
        OK,
        EN_COURS,
        VALIDE
    }
}

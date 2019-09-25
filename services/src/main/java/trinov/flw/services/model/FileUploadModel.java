package trinov.flw.services.model;

import trinov.flw.data.entity.csvFile.FileUpload;

import java.util.Date;

/**
 * Created by thibault
 * Date: 12/06/18
 * Time: 11:45
 */
public class FileUploadModel {
    private Integer lineCount;
    private Date date;
    private String nom;
    private Long size;
    private FileUpload.Market market;
    private FileUpload.Type type;
    private Double progress;
    private Long id;
    private FileUpload.Status status;
    private String progressMessage;
    private String warnings;

    public FileUploadModel() {}

    public FileUploadModel(FileUpload fileUpload) {
        date = fileUpload.getDateUpload();
        nom = fileUpload.getOriginalFileName();
        lineCount = fileUpload.getLineCount();
        size = fileUpload.getSize();
        type = fileUpload.getType();
        market = fileUpload.getMarket();
        progress = fileUpload.getProgress();
        id = fileUpload.getId();
        status = fileUpload.getStatus();
        progressMessage = fileUpload.getProgressMessage();
        warnings = fileUpload.getWarnings();
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public FileUpload.Status getStatus() {
        return status;
    }

    public void setStatus(FileUpload.Status status) {
        this.status = status;
    }

    public Integer getLineCount() {
        return lineCount;
    }

    public void setLineCount(Integer lineCount) {
        this.lineCount = lineCount;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }

    public FileUpload.Market getMarket() {
        return market;
    }

    public void setMarket(FileUpload.Market market) {
        this.market = market;
    }

    public FileUpload.Type getType() {
        return type;
    }

    public void setType(FileUpload.Type type) {
        this.type = type;
    }

    public Double getProgress() {
        return progress;
    }

    public void setProgress(Double progress) {
        this.progress = progress;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}

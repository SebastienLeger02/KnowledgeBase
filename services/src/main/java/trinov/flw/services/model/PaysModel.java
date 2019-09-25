package trinov.flw.services.model;

import trinov.flw.data.entity.csvFile.FileUpload;
import trinov.flw.data.entity.pays.Pays;

/**
 * Created by thibault
 * Date: 20/06/18
 * Time: 16:59
 */

public class PaysModel {
    private String nom;
    private Boolean readyForAnalysis;
    private Integer successfullyImported;
    private Boolean analysisDone;
    private Long id;
    private String progressMessage;
    private String warnings;
    private Double progress;

    public PaysModel() {}

    public PaysModel(Pays pays) {
        this.nom = pays.getNom();
        this.id = pays.getId();
        this.successfullyImported = 0;
        for(FileUpload fileUpload : pays.getFileUploads()) {
            if(fileUpload.getStatus().equals(FileUpload.Status.VALIDE)) {
                ++this.successfullyImported;
            }
        }
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Boolean getReadyForAnalysis() {
        return readyForAnalysis;
    }

    public void setReadyForAnalysis(Boolean readyForAnalysis) {
        this.readyForAnalysis = readyForAnalysis;
    }

    public Integer getSuccessfullyImported() {
        return successfullyImported;
    }

    public void setSuccessfullyImported(Integer successfullyImported) {
        this.successfullyImported = successfullyImported;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getAnalysisDone() {
        return analysisDone;
    }

    public void setAnalysisDone(Boolean analysisDone) {
        this.analysisDone = analysisDone;
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

    public void setProgress(Double progress) {
        this.progress = progress;
    }

    public Double getProgress() {
        return progress;
    }
}

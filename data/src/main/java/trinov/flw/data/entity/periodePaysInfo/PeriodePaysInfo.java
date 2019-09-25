package trinov.flw.data.entity.periodePaysInfo;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.pays.Pays;
import trinov.flw.data.entity.periode.Periode;

import javax.persistence.*;

/**
 * Created by thibault
 * Date: 21/06/18
 * Time: 09:13
 */
@Entity
public class PeriodePaysInfo {
    @EmbeddedId
    private PeriodePaysInfoId periodePaysInfoId;

    private Boolean readyForAnalysis;


    public Boolean getReadyForAnalysis() {
        return readyForAnalysis;
    }

    public void setReadyForAnalysis(Boolean readyForAnalysis) {
        this.readyForAnalysis = readyForAnalysis;
    }

    public PeriodePaysInfoId getPeriodePaysInfoId() {
        return periodePaysInfoId;
    }

    public void setPeriodePaysInfoId(PeriodePaysInfoId periodePaysInfoId) {
        this.periodePaysInfoId = periodePaysInfoId;
    }

    @Transient
    public Long getPaysId() {
        return periodePaysInfoId.getPaysId();
    }

    @Transient
    public Long getPeriodeId() {
        return periodePaysInfoId.getPeriodeId();
    }
}

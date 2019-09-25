package trinov.flw.data.entity.periodePaysInfo;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by thibault
 * Date: 21/06/18
 * Time: 09:13
 */
@Embeddable
public class PeriodePaysInfoId implements Serializable {
    @Column(name = "pays_id")
    private Long paysId;

    @Column(name = "periode_id")
    private Long periodeId;

    public PeriodePaysInfoId() {
    }

    public PeriodePaysInfoId(Long periodeId, Long paysId) {
        this.paysId = paysId;
        this.periodeId = periodeId;
    }

    public Long getPaysId() {
        return paysId;
    }

    public Long getPeriodeId() {
        return periodeId;
    }
}

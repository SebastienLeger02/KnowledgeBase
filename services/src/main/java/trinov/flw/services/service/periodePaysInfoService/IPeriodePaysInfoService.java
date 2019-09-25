package trinov.flw.services.service.periodePaysInfoService;

import trinov.flw.data.entity.periode.Periode;
import trinov.flw.data.entity.periodePaysInfo.PeriodePaysInfo;

import java.util.Optional;

/**
 * Created by thibault
 * Date: 21/06/18
 * Time: 09:26
 */
public interface IPeriodePaysInfoService {
    PeriodePaysInfo getOrCreatePeriodePaysInfo();

    Optional<Periode> getActualPeriode();
}

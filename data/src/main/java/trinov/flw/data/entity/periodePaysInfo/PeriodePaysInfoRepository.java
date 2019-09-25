package trinov.flw.data.entity.periodePaysInfo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.periode.Periode;

import java.util.Optional;

/**
 * Created by thibault
 * Date: 11/06/18
 * Time: 14:42
 */
public interface PeriodePaysInfoRepository extends CrudRepository<PeriodePaysInfo, Long> {
    Optional<PeriodePaysInfo> findByPeriodePaysInfoId(PeriodePaysInfoId periodePaysInfoId);
}

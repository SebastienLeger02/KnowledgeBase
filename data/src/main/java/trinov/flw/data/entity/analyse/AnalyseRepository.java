package trinov.flw.data.entity.analyse;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Created by thibault
 * Date: 14/08/18
 * Time: 10:07
 */

public interface AnalyseRepository extends CrudRepository<Analyse, Long> {

    Optional<Analyse> getByPeriodeIdAndPaysId(Long periodeId, Long paysId);

    Set<Analyse> getByPeriodeIdAndPaysIdAndStatusNot(Long periodeId, Long paysId, Analyse.Status status);

    Set<Analyse> getByPeriodeIdAndPaysIdAndStatusIn(Long periodeId, Long paysId, Collection<Analyse.Status> status);

    Optional<Analyse> getByPeriodeIdAndPaysIdAndStatus(Long periodeId, Long paysId, Analyse.Status status);
}

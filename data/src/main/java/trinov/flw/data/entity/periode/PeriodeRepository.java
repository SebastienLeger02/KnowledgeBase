package trinov.flw.data.entity.periode;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
 * Created by thibault
 * Date: 11/06/18
 * Time: 14:42
 */
public interface PeriodeRepository extends CrudRepository<Periode, Long> {
    @Query("select periode from Periode periode where current_date between periode.dateDebut and periode.dateFin")
    Optional<Periode> getActualPeriode();
}

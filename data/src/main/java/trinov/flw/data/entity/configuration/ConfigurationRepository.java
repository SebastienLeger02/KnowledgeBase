package trinov.flw.data.entity.configuration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.periode.Periode;

/**
 * Created by thibault
 * Date: 11/06/18
 * Time: 14:42
 */
public interface ConfigurationRepository extends JpaRepository<Configuration, Long> {
    @Query("select conf from Configuration conf")
    Configuration get();
}

package trinov.flw.data.entity.pays;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import trinov.flw.data.entity.csvFile.FileUpload;

import java.util.List;

/**
 * Created by thibault
 * Date: 11/06/18
 * Time: 14:42
 */
@Repository
public interface PaysRepository extends CrudRepository<Pays, Long> {
}

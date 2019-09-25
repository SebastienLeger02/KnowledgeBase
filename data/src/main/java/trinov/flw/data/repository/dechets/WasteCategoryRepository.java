package trinov.flw.data.repository.dechets;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.dechets.WasteCategory;

import java.util.List;

public interface WasteCategoryRepository extends CrudRepository<WasteCategory, Long> {

    //List<WasteCategory> findWasteCategoryById(Long id);

    @Query(
            value = "SELECT max(code) FROM waste_category WHERE type = :type",
            nativeQuery = true)
    long maxCodeByType(@Param("type") String type);

    List<WasteCategory> getByType(String type);


}

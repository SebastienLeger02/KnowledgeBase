package trinov.flw.data.repository.dechets;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.dechets.Tov;

import java.util.List;

public interface WasteTovRepository extends CrudRepository<Tov, Long> {

    List<Tov>findTovBySubCategoryId(Long subCategoryId);

    @Query(
            value = "SELECT max(code) FROM tov WHERE sub_category_id = :sub_category_id",
            nativeQuery = true)
    Long maxCodeBySubCategoryId(@Param("sub_category_id") Long sub_category_id);

}

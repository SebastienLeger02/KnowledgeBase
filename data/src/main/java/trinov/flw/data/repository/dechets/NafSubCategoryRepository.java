package trinov.flw.data.repository.dechets;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.dechets.NafSubCategory;

import java.util.List;

public interface NafSubCategoryRepository extends CrudRepository<NafSubCategory, Long> {

    List<NafSubCategory> findNafSubCategoryByCategoryId(Long categoryId);

    @Query(
            value = "SELECT max(code) FROM naf_sub_category WHERE category_id = :category_id",
            nativeQuery = true)
    Long maxCodeByCategoryId(@Param("category_id") Long category_id);
}

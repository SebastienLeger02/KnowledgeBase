package trinov.flw.data.repository.dechets;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.dechets.WasteSubCategory;

import java.util.List;

public interface WasteSubCategoryRepository extends CrudRepository<WasteSubCategory, Long> {

    List<WasteSubCategory>findWasteSubCategoryByCategoryId(Long categoryId);

    @Query(
            value = "SELECT max(code) FROM waste_sub_category WHERE category_id = :category_id",
            nativeQuery = true)
    Long maxCodeByCategoryId(@Param("category_id") Long category_id);

   // WasteSubCategory findDistinctTopByCategoryIdOrderByCodeDesc(Long category_id);
}

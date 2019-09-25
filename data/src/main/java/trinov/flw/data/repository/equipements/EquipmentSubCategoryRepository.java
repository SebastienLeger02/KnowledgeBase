package trinov.flw.data.repository.equipements;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.EquipmentSubCategory;

import java.util.List;

public interface EquipmentSubCategoryRepository extends CrudRepository<EquipmentSubCategory, Long> {

    List<EquipmentSubCategory> findEquipmentSubCategoriesByCategoryId(Long categoryId);

    @Query(
            value = "SELECT max(id) FROM equipment_sub_category",
            nativeQuery = true)
    long maxiId(Long id);

}

package trinov.flw.data.repository.equipements;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.equipements.EquipmentType;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface EquipmentTypeRepository extends CrudRepository<EquipmentType, Long> {

    List<EquipmentType> findEquipmentTypesBySubCategoryId(Long subCategoryId);
    Optional<EquipmentType> findById(Long id);
    Optional<EquipmentType> findByName(String name);

    @Query(
            value = "SELECT max(id) FROM equipment_type WHERE sub_category_id = :sub_category_id",
            nativeQuery = true)
    long maxiId(@Param("sub_category_id")Long id);

    //List<Object> findByName(Long e);

}

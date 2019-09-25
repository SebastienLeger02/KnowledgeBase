package trinov.flw.data.repository.vehicle;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.EquipmentType;

import java.util.List;

public interface EquipmentTypeTagFieldRepository extends CrudRepository<EquipmentType,Long> {

    List<EquipmentType> findEquipmentTypesById(Long id);
}

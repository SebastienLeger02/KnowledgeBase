package trinov.flw.data.repository.equipements;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.EquipmentProtectionType;

import java.util.Optional;

public interface EquipmentProtectionTypeRepository extends CrudRepository<EquipmentProtectionType, Long> {

    Optional<EquipmentProtectionType> findByName(String name);
}

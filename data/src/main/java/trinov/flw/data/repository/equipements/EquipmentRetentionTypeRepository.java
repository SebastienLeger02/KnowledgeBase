package trinov.flw.data.repository.equipements;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.EquipmentRetentionType;

import java.util.Optional;

public interface EquipmentRetentionTypeRepository extends CrudRepository<EquipmentRetentionType, Long> {

    Optional<EquipmentRetentionType> findByName(String name);
}

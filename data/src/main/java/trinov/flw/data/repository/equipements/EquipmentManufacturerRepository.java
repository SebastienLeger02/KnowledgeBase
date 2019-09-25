package trinov.flw.data.repository.equipements;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.EquipmentManufacturer;

import java.util.Optional;

public interface EquipmentManufacturerRepository extends CrudRepository<EquipmentManufacturer, Long> {


    Optional<EquipmentManufacturer> findByName(String name);
}

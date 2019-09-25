package trinov.flw.data.repository.equipements;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.EquipmentDangerousness;

import java.util.Optional;

public interface EquipmentDangerousnessRepository extends CrudRepository<EquipmentDangerousness, Long> {

    Optional<EquipmentDangerousness> findByCode(Float code);
}

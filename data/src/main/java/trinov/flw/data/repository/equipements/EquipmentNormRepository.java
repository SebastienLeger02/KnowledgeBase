package trinov.flw.data.repository.equipements;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.EquipmentNorm;

import java.util.Optional;

public interface EquipmentNormRepository extends CrudRepository<EquipmentNorm, Long> {

    Optional<EquipmentNorm> findByCode(String code);

}

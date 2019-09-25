package trinov.flw.data.repository.equipements;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.vehicule.LiteVehicle;

import java.util.Optional;

public interface EquipmentLiteVehicleRepository extends CrudRepository<LiteVehicle, Long> {

    Optional<LiteVehicle> findByName(String name);

}

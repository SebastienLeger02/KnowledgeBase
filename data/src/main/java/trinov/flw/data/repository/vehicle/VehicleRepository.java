package trinov.flw.data.repository.vehicle;

import ch.qos.logback.core.pattern.parser.OptionTokenizer;
import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.vehicule.Vehicle;

import java.util.List;
import java.util.Optional;


public interface VehicleRepository extends CrudRepository<Vehicle ,Long> {

    List<Vehicle> findVehicleById(Long id);
    Optional<Vehicle> findByName(String name);
 }

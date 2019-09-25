package trinov.flw.data.repository.equipements;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.equipements.Equipements;
import trinov.flw.data.entity.equipements.EquipmentCategory;

import java.util.List;
import java.util.Optional;

public interface EquipmentCategoryRepository extends CrudRepository<EquipmentCategory, Long > { // Permet de récupérer toute la bibliotheque de CrudRepository , qui gère automatiquement les requettes SQL

    //List<EquipmentCategory> findByCategoryId(Long CategoryId);

}

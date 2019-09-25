package trinov.flw.services.controller.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import trinov.flw.data.entity.equipements.EquipmentType;
import trinov.flw.data.entity.vehicule.Vehicle;
import trinov.flw.data.repository.equipements.EquipmentTypeRepository;
import trinov.flw.data.repository.vehicle.EquipmentTypeTagFieldRepository;
import trinov.flw.data.repository.vehicle.VehicleRepository;
import trinov.flw.services.model.equipements.EquipementsTypeModel;
import trinov.flw.services.model.vehicle.GridVehicleModel;
import trinov.flw.services.model.vehicle.VehicleModel;

import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping(path="/vehicles")
public class VehicleController {
    private final VehicleRepository vehicleRepository;
    private final EquipmentTypeRepository equipmentTypeRepository;
    private final EquipmentTypeTagFieldRepository equipmentTypeTagFieldRepository;

    @Autowired
    public VehicleController(VehicleRepository vehicleRepository, EquipmentTypeRepository equipmentTypeRepository, EquipmentTypeTagFieldRepository equipmentTypeTagFieldRepository){

        this.vehicleRepository = vehicleRepository;
        this.equipmentTypeRepository = equipmentTypeRepository;
        this.equipmentTypeTagFieldRepository = equipmentTypeTagFieldRepository;
    }

    // ---------------------- Grid Vehicules
    @Transactional
    @ResponseBody
    @GetMapping("getGridVehicle")
    public List<GridVehicleModel> getVehicleGrid() {

        Iterable<Vehicle> vehicles = vehicleRepository.findAll();

        List<GridVehicleModel> gridVehicleModels = new ArrayList<>();
        for (Vehicle vehicle : vehicles) {
            GridVehicleModel gridVehicleModel = new GridVehicleModel(vehicle);
            gridVehicleModels.add(gridVehicleModel);
        }
        return gridVehicleModels;
    }

    // ---------------------- Ajouter un nouveau véhicule

    @Transactional
    @ResponseBody
    @PostMapping("addNewVehicle")
    public ResponseEntity getAddVehicle (@RequestBody VehicleModel vehicleModel ) {
        //Vehicle vehicle = vehicleModel.toEntity();

        Set<EquipmentType> equipmentTypes = // permet de récupérer plusieurs EquipmentType, grace à une boucle map
                vehicleModel.getEquipmentTypeName().stream()
                        .map( e -> equipmentTypeRepository.findByName(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());


        Vehicle vehicle = vehicleModel.toEntity();
        vehicle.setEquipmentTypes(equipmentTypes);

        vehicleRepository.save(vehicle); // Permet d'enregistrer (save) les données de vehicule

        return new ResponseEntity<>(null, HttpStatus.OK); // SpringBoot method
    }


    // ---------------------- Edit un véhicule

    @Transactional
    @ResponseBody
    @GetMapping("editVehicle")
    public VehicleModel editFinalEquipment(@RequestParam Long id) { // Permet de récupérer les donnée entity pour les transformer en model

        Vehicle vehicle = vehicleRepository.findById(id).orElse(null); //orElse nous retourne l'objet complet emballé ou sinon nous renvoie "null"
        VehicleModel vehicleModel = new VehicleModel(vehicle); //change le type de equipmentSubCategory

        return vehicleModel; // Pour pouvoir les utiliser
    }

    // ---------------------- Supprimer un véhicule

    @Transactional
    @ResponseBody
    @GetMapping("deleteVehicle")
    public boolean deleteVehicle(@RequestParam Long id) {

        vehicleRepository.deleteById(id);

        return true;
    }

    // --------------------- TagField EquipmentType

    @Transactional
    @ResponseBody
    @PostMapping("equipmentTypeTagField")
    public List<EquipementsTypeModel> getEquipmentTypeTagField() {

        Iterable<EquipmentType> equipmentTypes = equipmentTypeTagFieldRepository.findAll();

        List<EquipementsTypeModel> equipementsTypeModels = new ArrayList<>();
        for(EquipmentType equipmentType : equipmentTypes) {
            EquipementsTypeModel equipementsTypeModel = new EquipementsTypeModel(equipmentType);
            equipementsTypeModels.add(equipementsTypeModel);
        }

        return equipementsTypeModels;
    }


/*
    @Transactional
    @ResponseBody
    @GetMapping("equipmentTypeTagField")
    public EquipementsTypeModel getEditTypeTagField(@RequestParam Long id) { // Permet de récupérer les donnée entity pour les transformer en model

        Optional<EquipmentType> equipmentType =equipmentTypeRepository.findById(id); //orElse nous retourne l'objet complet emballé ou sinon nous renvoie "null"
        EquipementsTypeModel equipementsTypeModel = new EquipementsTypeModel(equipmentType); //change le type de equipmentSubCategory

        return equipementsTypeModel; // Pour pouvoir les utiliser
    }
    */
}
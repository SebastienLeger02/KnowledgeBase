package trinov.flw.services.controller.equipements;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import trinov.flw.data.entity.equipements.*;
import trinov.flw.data.entity.vehicule.Vehicle;
import trinov.flw.data.repository.equipements.*;
import trinov.flw.data.repository.vehicle.EquipmentTypeTagFieldRepository;
import trinov.flw.data.repository.vehicle.VehicleRepository;
import trinov.flw.services.model.equipements.*;
import trinov.flw.services.model.vehicle.VehicleModel;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.stream.Collectors;

@Controller
@RequestMapping(path="/equipements")
public class EquipementsController {
    private final EquipementsRepository equipementsRepository;
    private final EquipmentCategoryRepository equipmentCategoryRepository;
    private final EquipmentSubCategoryRepository equipmentSubCategoryRepository;
    private final EquipmentTypeRepository equipmentTypeRepository;
    private final EquipmentMarkingTypeRepository equipmentMarkingTypeRepository;
    private final EquipmentTypeTagFieldRepository equipmentTypeTagFieldRepository;
    private final EquipmentManufacturerRepository equipmentManufacturerRepository;
    private final EquipmentNormRepository equipmentNormRepository;
    private final EquipmentDangerousnessRepository equipmentDangerousnessRepository;
    private final EquipmentProtectionTypeRepository equipmentProtectionTypeRepository;
    private final EquipmentRetentionTypeRepository equipmentRetentionTypeRepository;
    private final EquipmentLiteVehicleRepository equipmentLiteVehicleRepository;
    private final VehicleRepository vehicleRepository;

    @Autowired
    public EquipementsController(EquipementsRepository equipementsRepository, EquipmentCategoryRepository equipmentCategoryRepository, EquipmentSubCategoryRepository equipmentSubCategoryRepository, EquipmentTypeRepository equipmentTypeRepository,EquipmentMarkingTypeRepository equipmentMarkingTypeRepository, EquipmentTypeTagFieldRepository equipmentTypeTagFieldRepository, EquipmentManufacturerRepository equipmentManufacturerRepository, EquipmentNormRepository equipmentNormRepository,  EquipmentDangerousnessRepository equipmentDangerousnessRepository, EquipmentProtectionTypeRepository equipmentProtectionTypeRepository, EquipmentRetentionTypeRepository equipmentRetentionTypeRepository, EquipmentLiteVehicleRepository equipmentLiteVehicleRepository, VehicleRepository vehicleRepository) {
        this.equipementsRepository = equipementsRepository;
        this.equipmentCategoryRepository = equipmentCategoryRepository;
        this.equipmentSubCategoryRepository = equipmentSubCategoryRepository;
        this.equipmentTypeRepository = equipmentTypeRepository;
        this.equipmentMarkingTypeRepository = equipmentMarkingTypeRepository;
        this.equipmentTypeTagFieldRepository = equipmentTypeTagFieldRepository;
        this.equipmentManufacturerRepository = equipmentManufacturerRepository;
        this.equipmentNormRepository = equipmentNormRepository;
        this.equipmentDangerousnessRepository = equipmentDangerousnessRepository;
        this.equipmentProtectionTypeRepository = equipmentProtectionTypeRepository;
        this.equipmentRetentionTypeRepository = equipmentRetentionTypeRepository;
        this.equipmentLiteVehicleRepository = equipmentLiteVehicleRepository;
        this.vehicleRepository = vehicleRepository;
    }

    // ------------------------- Première grille Equipements
    @Transactional
    @ResponseBody
    @GetMapping("getEquipmentCategory")
    public List<EquipementsModel> getEquipmentCategory() {

        Iterable<EquipmentCategory> equipmentCategories = equipmentCategoryRepository.findAll() ;

        List<EquipementsModel> equipementsModels = new ArrayList<>(); // faire une boucle qui grace au changement d'objet (category/categoryModel) , on passe des infos 'server->Java'  Java->JS grace à un model (nouvel objet)
        for(EquipmentCategory equipmentCategory : equipmentCategories) { // Celle-ci sert à parcourir les tableaux est récupérer les information dont on a besoins.
            EquipementsModel equipementsModel = new EquipementsModel(equipmentCategory);
            equipementsModels.add(equipementsModel);
        }

        return equipementsModels;
    }

    // ------------------------- Deuxième grille Equipements

    @Transactional
    @ResponseBody
    @GetMapping("getEquipmentSubCategory")
    public List<SousCategoryModel> getEquipmentSubCategory(@RequestParam Long categoryId) {

        Iterable<EquipmentSubCategory> equipmentSubCategories = equipmentSubCategoryRepository.findEquipmentSubCategoriesByCategoryId(categoryId);

        List<SousCategoryModel> sousCategoryModels = new ArrayList<>();
        for(EquipmentSubCategory equipmentSubCategory : equipmentSubCategories) {
            SousCategoryModel sousCategoryModel = new SousCategoryModel(equipmentSubCategory);
            sousCategoryModels.add(sousCategoryModel);
        }

        EquipmentMarkingType equipmentMarkingTypeId = equipmentMarkingTypeRepository.findById(1l).get();
        // List<SousCategoryModel> sousCategoryModels = equipmentSubCategories.stream().map( eq ->  new SousCategoryModel(eq)).collect(Collectors.toList()); Changement du type Entity en Model avec Java8


        return sousCategoryModels;
    }


    @Transactional
    @ResponseBody
    @RequestMapping(value ="addSousCategorie", method = RequestMethod.POST) // Permet d'enregister dans la base de donnée
    public ResponseEntity addSousCategorie(@RequestBody SousCategoryModel sousCategoryModel) {

        long maxIds = equipmentSubCategoryRepository.maxiId(sousCategoryModel.getId()); //Permet de récupérer le type mis en paramêtre dans le controlleur JS


        sousCategoryModel.setId(++maxIds);

        equipmentSubCategoryRepository.save(sousCategoryModel.toEntity());

        return new ResponseEntity<>(null, HttpStatus.OK); // SpringBoot method
    }

    @Transactional
    @ResponseBody
    @GetMapping("getSousCategorieEditWindow")
    public SousCategoryModel getSousCategorie(@RequestParam Long subCategoryId) { // Permet de récupérer les donnée entity pour les transformer en model

        EquipmentSubCategory equipmentSubCategory = equipmentSubCategoryRepository.findById(subCategoryId).orElse(null); //orElse nous retourne l'objet complet emballé ou sinon nous renvoie "null"
        SousCategoryModel sousCategoryModel = new SousCategoryModel(equipmentSubCategory); //change le type de equipmentSubCategory

        return sousCategoryModel; // Pour pouvoir les utiliser
    }


    @Transactional
    @ResponseBody
    @GetMapping("deleteSousCategorie")
    public boolean deleteSousCategorie(@RequestParam Long sousCategorieId) {

        equipmentSubCategoryRepository.deleteById(sousCategorieId);

        return true;
    }

    // ------------------------- Troisième grille Equipements
/*
    @Transactional
    @ResponseBody
    @GetMapping("getEquipmentType")
    public List<EquipementsTypeModel> getEquipmentType(@RequestParam Long subCategoryId) {

        Iterable<EquipmentType> equipmentTypes = equipmentTypeRepository.findEquipmentTypesBySubCategoryId(subCategoryId);

        List<EquipementsTypeModel> equipementsTypeModels = new ArrayList<>();
        for(EquipmentType equipmentType : equipmentTypes) {
            EquipementsTypeModel equipementsTypeModel = new EquipementsTypeModel(equipmentType);
            equipementsTypeModels.add(equipementsTypeModel);
        }

        return equipementsTypeModels;
    }
*/


    @Transactional
    @ResponseBody
    @GetMapping("getGridEquipmentType")
    public List<GridEquipementTypeModel> getEquipmentTypeGrid(@RequestParam Long subCategoryId) {

        Iterable<EquipmentType> equipmentTypes = equipmentTypeRepository.findEquipmentTypesBySubCategoryId(subCategoryId);

        List<GridEquipementTypeModel> gridEquipementTypeModels = new ArrayList<>();
        for (EquipmentType equipmentType : equipmentTypes) {
            GridEquipementTypeModel gridEquipementTypeModel = new GridEquipementTypeModel(equipmentType);

            equipmentType.getVehicles().forEach(
                    vehicle -> gridEquipementTypeModel.getVehicles().add(vehicle.getName())
            );
            equipmentType.getEquipmentRetentionTypes().forEach(
                    equipmentRetentionType -> gridEquipementTypeModel.getEquipmentRetentionTypes().add(equipmentRetentionType.getName())
            );
            equipmentType.getEquipmentSubCategorys().forEach(
                    equipmentSubCategory -> gridEquipementTypeModel.getEquipmentSubCategorys().add(equipmentSubCategory.getName())
            );
            equipmentType.getEquipmentProtectionTypes().forEach(
                    equipmentProtectionType -> gridEquipementTypeModel.getEquipmentProtectionTypes().add(equipmentProtectionType.getName())
            );
            equipmentType.getEquipmentManufacturers().forEach(
                    equipmentManufacturer -> gridEquipementTypeModel.getEquipmentManufacturers().add(equipmentManufacturer.getName())
            );
            equipmentType.getEquipmentDangerousnesses().forEach(
                    equipmentDangerousness -> gridEquipementTypeModel.getEquipmentProtectionTypes().add(String.valueOf(equipmentDangerousness.getCode()))
            );
            equipmentType.getEquipmentNorms().forEach(
                    equipmentNorm -> gridEquipementTypeModel.getEquipmentNorms().add(equipmentNorm.getCode())
            );

            gridEquipementTypeModels.add(gridEquipementTypeModel);
        }
        return gridEquipementTypeModels;
    }

    /*
        @Transactional
        @ResponseBody
        @RequestMapping(value ="addFinalEquipment", method = RequestMethod.POST) // Permet d'enregister dans la base de donnée
        public ResponseEntity addFinalEquipment(@RequestBody EquipementsTypeModel equipementsTypeModel) {

            long maxIds = equipmentTypeRepository.maxiId(equipementsTypeModel.getId()); //Permet de récupérer le type mis en paramêtre dans le controlleur JS
            equipementsTypeModel.setId(++maxIds);
            equipmentTypeRepository.save(equipementsTypeModel.toEntity());

            return new ResponseEntity<>(null, HttpStatus.OK); // SpringBoot method
        }
    */
    @Transactional
    @ResponseBody
    @PostMapping("addNewEquipmentType")
    public ResponseEntity getAddEquipmentType (@RequestBody EquipementsTypeModel equipementsTypeModel ) {

        // !! Faire condition si maxId= 0 alors mettre 1 //Permet de récupérer le type mis en paramêtre dans le controlleur JS
    /*  if(equipmentTypeRepository.maxiId(equipementsTypeModel.getId()) != 0) {
           equipmentTypeRepository.maxiId(equipementsTypeModel.getSubCategoryId()) ;
        }else { equipmentTypeRepository.maxiId(equipementsTypeModel.getSubCategoryId()+1); }
    */
        //---------- Fabricants
        Set<EquipmentManufacturer> equipmentManufacturers =
                equipementsTypeModel.getEquipmentManufacturerName().stream()
                        .map(e -> equipmentManufacturerRepository.findByName(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());

        EquipmentType equipmentType = equipementsTypeModel.toEntity();
        equipmentType.setEquipmentManufacturers(equipmentManufacturers);

        // --------- Norme Certifications
        Set<EquipmentNorm> equipmentNorms =
                equipementsTypeModel.getEquipmentNormCode().stream()
                        .map(e -> equipmentNormRepository.findByCode(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());

        equipmentType.setEquipmentNorms(equipmentNorms);

        // --------- Classe ADR
        Set<EquipmentDangerousness> equipmentDangerousnesses =
                equipementsTypeModel.getEquipmentDangerousnessCode().stream()
                        .map(e -> equipmentDangerousnessRepository.findByCode(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());

        equipmentType.setEquipmentDangerousnesses(equipmentDangerousnesses);

        // --------- Contraintes de manutentions
        Set<EquipmentType> equipmentTypes =
                equipementsTypeModel.getEquipmentEquipmentTypeName().stream()
                        .map(e -> equipmentTypeRepository.findByName(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());

        // --------- Protection/Fermeture
        Set<EquipmentProtectionType> equipmentProtectionTypes =
                equipementsTypeModel.getEquipmentProtectionTypeName().stream()
                        .map(e -> equipmentProtectionTypeRepository.findByName(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());

        equipmentType.setEquipmentProtectionTypes(equipmentProtectionTypes);



        // --------- Retention
        Set<EquipmentRetentionType> equipmentRetentionTypes =
                equipementsTypeModel.getEquipmentRetentionTypeName().stream()
                        .map(e -> equipmentRetentionTypeRepository.findByName(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());

        equipmentType.setEquipmentRetentionTypes(equipmentRetentionTypes);



        // ---------  Materiel de collecte proposé
        Set<Vehicle> vehicles =
                equipementsTypeModel.getEquipmentVehicleName().stream()
                        .map(e -> vehicleRepository.findByName(e).get())
                        .filter(e -> e!=null)
                        .collect(Collectors.toSet());

        equipmentType.setVehicles(vehicles);





        long maxIds = equipmentTypeRepository.maxiId(equipementsTypeModel.getSubCategoryId());

        equipementsTypeModel.setId(++maxIds);
        equipmentTypeRepository.save(equipementsTypeModel.toEntity());

        return new ResponseEntity<>(null, HttpStatus.OK); // SpringBoot method
    }

    @Transactional
    @ResponseBody
    @GetMapping("editFinalEquipment")
    public EquipementsTypeModel editFinalEquipment(@RequestParam Long subCategoryId) { // Permet de récupérer les donnée entity pour les transformer en model

        EquipmentType equipmentType = equipmentTypeRepository.findById(subCategoryId).orElse(null); //orElse nous retourne l'objet complet emballé ou sinon nous renvoie "null"
        EquipementsTypeModel equipementsTypeModel = new EquipementsTypeModel(equipmentType); //change le type de equipmentSubCategory

        return equipementsTypeModel; // Pour pouvoir les utiliser
    }

    @Transactional
    @ResponseBody
    @GetMapping("deleteEquipmentType")
    public boolean deleteFinalEquipment(@RequestParam Long id) {

        equipmentTypeRepository.deleteById(id);

        return true;
    }

    // ----------------------- Récupération Fabricant
    @Transactional
    @ResponseBody
    @PostMapping("equipmentManufacturerTagField")
    public List<EquipmentManufacturerModel> getEquipmentTypeManufacturerTagField() {

        Iterable<EquipmentManufacturer> equipmentManufacturers = equipmentManufacturerRepository.findAll();

        List<EquipmentManufacturerModel> equipmentManufacturerModels = new ArrayList<>();
        for(EquipmentManufacturer equipmentManufacturer : equipmentManufacturers) {
            EquipmentManufacturerModel equipmentManufacturerModel = new EquipmentManufacturerModel(equipmentManufacturer);
            equipmentManufacturerModels.add(equipmentManufacturerModel);
        }

        return equipmentManufacturerModels;
    }


    // ----------------------- Récupération Norme Certification
    @Transactional
    @ResponseBody
    @PostMapping("equipmentNormTagField")
    public List<EquipmentNormModel> getEquipmentTypeNormTagField() {

        Iterable<EquipmentNorm> equipmentNorms = equipmentNormRepository.findAll();

        List<EquipmentNormModel> equipmentNormModels = new ArrayList<>();
        for(EquipmentNorm equipmentNorm : equipmentNorms) {
            EquipmentNormModel equipmentNormModel = new EquipmentNormModel(equipmentNorm);
            equipmentNormModels.add(equipmentNormModel);
        }
        return equipmentNormModels;
    }

    // ----------------------- Récupération Classe ADR
    @Transactional
    @ResponseBody
    @PostMapping("equipmentDangerousnessTagField")
    public List<EquipmentDangerousnessModel> getEquipmentTypeDangerousnessTagField() {

        Iterable<EquipmentDangerousness> equipmentDangerousnesses = equipmentDangerousnessRepository.findAll();

        List<EquipmentDangerousnessModel> equipmentDangerousnessModels = new ArrayList<>();
        for(EquipmentDangerousness equipmentDangerousness : equipmentDangerousnesses) {
            EquipmentDangerousnessModel equipmentDangerousnessModel = new EquipmentDangerousnessModel(equipmentDangerousness);
            equipmentDangerousnessModels.add(equipmentDangerousnessModel);
        }
        return equipmentDangerousnessModels;
    }

    // ----------------------- Contraintes de manutentions
    @Transactional
    @ResponseBody
    @PostMapping("equipmentTypeTagField")
    public List<EquipementsTypeModel> getEquipementsTypeTagField() {

        Iterable<EquipmentType> equipmentTypes = equipmentTypeRepository.findAll();

        List<EquipementsTypeModel> equipementsTypeModels = new ArrayList<>();
        for(EquipmentType equipmentType : equipmentTypes) {
            EquipementsTypeModel equipementsTypeModel = new EquipementsTypeModel(equipmentType);
            equipementsTypeModels.add(equipementsTypeModel);
        }
        return equipementsTypeModels;
    }

    // ----------------------- Protection/Fermeture
    @Transactional
    @ResponseBody
    @PostMapping("equipmentProtectionTypeTagField")
    public List<EquipmentProtectionTypeModel> getEquipementProtectionTypeTagField() {

        Iterable<EquipmentProtectionType> equipmentProtectionTypes = equipmentProtectionTypeRepository.findAll();

        List<EquipmentProtectionTypeModel> equipmentProtectionTypeModels = new ArrayList<>();
        for(EquipmentProtectionType equipmentProtectionType : equipmentProtectionTypes) {
            EquipmentProtectionTypeModel equipmentProtectionTypeModel = new EquipmentProtectionTypeModel(equipmentProtectionType);
            equipmentProtectionTypeModels.add(equipmentProtectionTypeModel);
        }
        return equipmentProtectionTypeModels;
    }


    // ----------------------- Retention
    @Transactional
    @ResponseBody
    @PostMapping("equipmentRetentionTypeTagField")
    public List<EquipmentRetentionTypeModel> getEquipementRetentionTypeTagField() {

        Iterable<EquipmentRetentionType> equipmentRetentionTypes = equipmentRetentionTypeRepository.findAll();

        List<EquipmentRetentionTypeModel> equipmentRetentionTypeModels = new ArrayList<>();
        for(EquipmentRetentionType equipmentRetentionType : equipmentRetentionTypes) {
            EquipmentRetentionTypeModel equipmentRetentionTypeModel = new EquipmentRetentionTypeModel(equipmentRetentionType);
            equipmentRetentionTypeModels.add(equipmentRetentionTypeModel);
        }
        return equipmentRetentionTypeModels;
    }


    // ----------------------- Materiel de collecte proposé
    @Transactional
    @ResponseBody
    @PostMapping("equipmentVehicleTagField")
    public List<VehicleModel> getEquipementVehicleTagField() {

        Iterable<Vehicle> vehicles = vehicleRepository.findAll();

        List<VehicleModel> vehicleModels = new ArrayList<>();
        for(Vehicle vehicle : vehicles) {
            VehicleModel vehicleModel = new VehicleModel(vehicle);
            vehicleModels.add(vehicleModel);
        }
        return vehicleModels;
    }

}
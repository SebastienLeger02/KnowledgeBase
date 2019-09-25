package trinov.flw.services.controller.dechets;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import trinov.flw.data.entity.dechets.*;
import trinov.flw.data.repository.dechets.*;
import trinov.flw.services.model.dechets.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Controller
@RequestMapping(path="/dechets")
public class DechetsController {
    private final WasteCategoryRepository wasteCategoryRepository;
    private final WasteSubCategoryRepository wasteSubCategoryRepository;
    private final WasteTovRepository wasteTovRepository;
    private final NafCategoryRepository nafCategoryRepository;
    private final NafRepository nafRepository;
    private final NedRepository nedRepository;


    @Autowired
    public DechetsController(WasteCategoryRepository wasteCategoryRepository, WasteSubCategoryRepository wasteSubCategoryRepository, WasteTovRepository wasteTovRepository, NafCategoryRepository nafCategoryRepository, NafRepository nafRepository, NedRepository nedRepository) {
        this.wasteCategoryRepository = wasteCategoryRepository;
        this.wasteSubCategoryRepository = wasteSubCategoryRepository;
        this.wasteTovRepository = wasteTovRepository;
        this.nafCategoryRepository = nafCategoryRepository;
        this.nafRepository = nafRepository;
        this.nedRepository = nedRepository;
    }

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------- Première Grile TOV
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------

    @Transactional
    @ResponseBody
    @GetMapping("getWasteCategory")
    public List<GridDechetCategorieModel> getWasteCategory() {

        Iterable<WasteCategory> wasteCategories = wasteCategoryRepository.findAll();

        List<GridDechetCategorieModel> gridDechetCategorieModels = new ArrayList<>(); // faire une boucle qui grace au changement d'objet (category/categoryModel) , on passe des infos 'server->Java'  Java->JS grace à un model (nouvel objet)
        for(WasteCategory wasteCategory : wasteCategories) { // Celle-ci sert à parcourir les tableaux est récupérer les information dont on a besoins.
            GridDechetCategorieModel gridDechetCategorieModel = new GridDechetCategorieModel(wasteCategory);
            gridDechetCategorieModels.add(gridDechetCategorieModel);
        }

        return gridDechetCategorieModels;
    }


    //-------------------------------------------------  Tree Panel Waste Ned
    @Transactional
    @ResponseBody
    @GetMapping("treeWasteNed")
    public List<TreeWasteModel> getTreeWasteNed() {

        Iterable<WasteCategory> wasteCategories = wasteCategoryRepository.getByType("Ned"); //Voir dans le repository pour comprendre le filtrage par Type

        List<TreeWasteModel> treeWasteModels = new ArrayList<>(); // Créer uFn objet List avec comme model TreeWasteModel
        wasteCategories.forEach( //On récupère les informations puis on fait une boucle en s'arretant à chaque ligne
                wasteCategory -> {  // On donne des paramètres à cet objet
                    TreeWasteModel treeWasteModel = new TreeWasteModel(); // création à l'intérieur d'un autre objet
                    String wasteCategoryCode  = wasteCategory.getCode() < 10 ? "0" + wasteCategory.getCode() : "" + wasteCategory.getCode();
                    treeWasteModel.setName( wasteCategoryCode + " " + "::"+ " " + wasteCategory.getName()); // initialisation de Name à partir de WasteCategory Name
                    treeWasteModel.setIdx(wasteCategory.getId());// initialisation de Idx à partir de WasteCategory Id
                    //treeWasteModel.setId(wasteCategory.getId());
                    // Pour pouvoir mettre un Id dans un treepanel il faut lui donner un autre nom de base puis lui donnner Id de la table :
                    // ex : treeWasteModel.setIdModel(wasteCategory.getId());

                    wasteCategory.getWasteSubCategories().forEach( // dans les entity de wasteCategory on récupère le getter fais par jointure
                            wasteSubCategory -> {
                                TreeWasteModel treeSubWasteModel = new TreeWasteModel();
                                String wasteSubCategoryCode  = wasteSubCategory.getCode() < 10 ? "0" + wasteSubCategory.getCode() : "" + wasteSubCategory.getCode();
                                treeSubWasteModel.setName(wasteCategoryCode + " " + wasteSubCategoryCode + " " + "::" + " " + wasteSubCategory.getName());
                                treeSubWasteModel.setIdx(wasteSubCategory.getId());

                                wasteSubCategory.getNeds().forEach(
                                        ned -> {
                                            TreeWasteModel nedModel = new TreeWasteModel();
                                            nedModel.setName(ned.getName());
                                            nedModel.setIdx(ned.getId());
                                            nedModel.setLeaf(true);

                                            treeSubWasteModel.getChildren().add(nedModel); // On ajoute au parents leurs enfants
                                        }
                                );
                                treeWasteModel.getChildren().add(treeSubWasteModel);
                            }
                    );
                    treeWasteModels.add(treeWasteModel);
                }
        );
        return treeWasteModels; // On retourne l'objet créé au début après lui avoir initialisé les autres objets

    }

    //-------------------------------------------------  Tree Panel Waste Naf -> Ned
    @Transactional
    @ResponseBody
    @GetMapping("treeWasteNafNed")
    public List<TreeWasteModel> getTreeWasteNaf() {

        Iterable<Naf> nafs = nafRepository.findAll();

        List<TreeWasteModel> treeWasteModelNaf = new ArrayList<>();
        WasteCategory wasteCategory;
        WasteSubCategory wasteSubCategory;
        nafs.forEach(
                naf -> {
                    TreeWasteModel treeWasteModel = new TreeWasteModel();
                    treeWasteModel.setName(naf.getCode() + naf.getLetter() + " ::" + " " + naf.getName());
                    treeWasteModel.setIdx(naf.getId());
                    treeWasteModel.setLetter(naf.getLetter());


                    naf.getNeds().forEach(
                            neds -> {
                                TreeWasteModel treeNedModel = new TreeWasteModel();
                                treeNedModel.setName(neds.getWasteSubCategory().getWasteCategory().getCode() + " " + neds.getWasteSubCategory().getCode() + " " +neds.getCode() + " "  + neds.getName());
                                treeNedModel.setIdx(neds.getId());
                                treeNedModel.setParentIdx(naf.getId());
                                treeNedModel.setLeaf(true);

                                treeWasteModel.getChildren().add(treeNedModel);
                            }
                    );
                    treeWasteModelNaf.add(treeWasteModel);
                }
        );
        return treeWasteModelNaf;

    }

    //------------------------------------------ TreePanel Ned -> Ced
    @Transactional
    @ResponseBody
    @GetMapping("treeWasteNedCed")
    public List<TreeWasteModel> getTreeWasteNedCed() {

        Iterable<WasteCategory> wasteCategories = wasteCategoryRepository.getByType("Ced");

        List<TreeWasteModel> treeWasteModels = new ArrayList<>();
        wasteCategories.forEach(
                wasteCategory -> {
                    TreeWasteModel treeWasteModel = new TreeWasteModel();
                    String wasteCategoryCode  = wasteCategory.getCode() < 10 ? "0" + wasteCategory.getCode() : "" + wasteCategory.getCode();
                    treeWasteModel.setName(wasteCategoryCode + " " + "::" + " " + wasteCategory.getName());
                    treeWasteModel.setIdx(wasteCategory.getId());


                    wasteCategory.getWasteSubCategories().forEach(
                            wasteSubCategory -> {
                                TreeWasteModel treeSubWasteModel = new TreeWasteModel();
                                treeSubWasteModel.setName(wasteCategoryCode + "." + wasteSubCategory.getCode() + " " + "::" + " "  + wasteSubCategory.getName());
                                treeSubWasteModel.setIdx(wasteSubCategory.getId());

                                wasteSubCategory.getCeds().forEach(
                                        ced -> {
                                            TreeWasteModel cedModel = new TreeWasteModel();
                                            cedModel.setName(wasteCategoryCode + "." + wasteSubCategory.getCode() + ced.getCode()+ " "  + "::" + " "  + ced.getName());
                                            cedModel.setIdx(ced.getId());

                                            ced.getNeds().forEach(
                                                    ned -> {
                                                        TreeWasteModel nedModel = new TreeWasteModel();
                                                        nedModel.setName(wasteCategory.getCode() + "." + wasteSubCategory.getCode() + "." + ced.getCode()+ "."  + ned.getCode() + " "  + "::" + " "  + ned.getName());
                                                        nedModel.setIdx(ned.getId());
                                                        nedModel.setLeaf(true);

                                                        cedModel.getChildren().add(nedModel);
                                                    }
                                            );
                                            treeSubWasteModel.getChildren().add(cedModel);
                                        }
                                );
                                treeWasteModel.getChildren().add(treeSubWasteModel);
                            }
                    );
                    treeWasteModels.add(treeWasteModel);
                }
        );
        return treeWasteModels;

    }

    //------------------------------------------ TreePanel Ced
    @Transactional
    @ResponseBody
    @GetMapping("treeWasteCed")
    public List<TreeWasteModel> getTreeWasteCed() {

        Iterable<WasteCategory> wasteCategories = wasteCategoryRepository.getByType("Ced");

        List<TreeWasteModel> treeWasteModels = new ArrayList<>();
        wasteCategories.forEach(
                wasteCategory -> {
                    TreeWasteModel treeWasteModel = new TreeWasteModel();
                    String wasteCategoryCode  = wasteCategory.getCode() < 10 ? "0" + wasteCategory.getCode() : "" + wasteCategory.getCode();
                    treeWasteModel.setName(wasteCategoryCode + " " + "::" + " " + wasteCategory.getName());
                    treeWasteModel.setIdx(wasteCategory.getId());

                    wasteCategory.getWasteSubCategories().forEach(
                            wasteSubCategory -> {
                                TreeWasteModel treeSubWasteModel = new TreeWasteModel();
                                treeSubWasteModel.setName(wasteCategoryCode + "." + wasteSubCategory.getCode() + " " + "::" + " "  + wasteSubCategory.getName());
                                treeSubWasteModel.setIdx(wasteSubCategory.getId());

                                wasteSubCategory.getCeds().forEach(
                                        ced -> {
                                            TreeWasteModel cedModel = new TreeWasteModel();
                                            cedModel.setName(wasteCategoryCode + "." + wasteSubCategory.getCode() + ced.getCode()+ " "  + "::" + " "  + ced.getName());
                                            cedModel.setIdx(ced.getId());
                                            cedModel.setDangerous(ced.getDangerous());
                                            cedModel.setInert(ced.getInert());
                                            cedModel.setRegulated(ced.getRegulated());
                                            cedModel.setLeaf(true);

                                            treeSubWasteModel.getChildren().add(cedModel);
                                        }
                                );
                                treeWasteModel.getChildren().add(treeSubWasteModel);
                            }
                    );
                    treeWasteModels.add(treeWasteModel);
                }
        );
        return treeWasteModels;

    }

    @Transactional
    @ResponseBody
    @RequestMapping(value = "addWasteCategorieTov", method = RequestMethod.POST)
    public ResponseEntity addWasteCategorieTov(@RequestBody GridDechetCategorieModel gridDechetCategorieModel) {

        long maxCodeTove = wasteCategoryRepository.maxCodeByType(gridDechetCategorieModel.getType()); //Permet de récupérer le type mis en paramêtre dans le controlleur JS

        gridDechetCategorieModel.setCode(++maxCodeTove); // Permet de récupérer code et de l'incrémenter

        wasteCategoryRepository.save(gridDechetCategorieModel.toEntity()); // Récupère les valeurs des champs de la vue grace au model.java

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @Transactional
    @ResponseBody
    @GetMapping("editWasteCategorieTov")
    public GridDechetCategorieModel getCategorie(@RequestParam Long categorieId) { // Permet de récupérer les donnée entity pour les transformer en model

        WasteCategory wasteCategory = wasteCategoryRepository.findById(categorieId).orElse(null); //orElse nous retourne l'objet complet emballé ou sinon nous renvoie "null"
        GridDechetCategorieModel gridDechetCategorieModel = new GridDechetCategorieModel(wasteCategory); //change le type de equipmentSubCategory

        return gridDechetCategorieModel; // Pour pouvoir les utiliser
    }

    @Transactional
    @ResponseBody
    @GetMapping("deleteWasteCategorieTov")
    public boolean deleteWasteCategorieTov(@RequestParam Long id) {

        wasteCategoryRepository.deleteById(id);

        return true;
    }

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------- Seconde Grille Tov
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------

    @Transactional
    @ResponseBody
    @GetMapping("getWasteSubCategory")
    public List<GridDechetSousCategorieModel> getWasteSubCategory(@RequestParam Long categoryId) {

        Iterable<WasteSubCategory> wasteSubCategories = wasteSubCategoryRepository.findWasteSubCategoryByCategoryId(categoryId);

        List<GridDechetSousCategorieModel> gridDechetSousCategorieModels = new ArrayList<>();
        for(WasteSubCategory wasteSubCategory : wasteSubCategories) {
            GridDechetSousCategorieModel gridDechetSousCategorieModel = new GridDechetSousCategorieModel(wasteSubCategory);
            gridDechetSousCategorieModels.add(gridDechetSousCategorieModel);
        }

        return gridDechetSousCategorieModels;

    }

    @Transactional
    @ResponseBody
    @RequestMapping(value = "addWasteSousCategorieTov", method = RequestMethod.POST)
    public ResponseEntity addWasteSousCategorieTov(@RequestBody GridDechetSousCategorieModel gridDechetSousCategorieModel) {

        Long maxCodeTove = wasteSubCategoryRepository.maxCodeByCategoryId(gridDechetSousCategorieModel.getCategoryId()); //Permet de récupérer le type mis en paramêtre dans le controlleur JS
        if (maxCodeTove == null){
            maxCodeTove = 0l;
        }
        gridDechetSousCategorieModel.setCode(++maxCodeTove);

        wasteSubCategoryRepository.save(gridDechetSousCategorieModel.toEntity());

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @Transactional
    @ResponseBody
    @GetMapping("editWasteSousCategorieTov")
    public GridDechetSousCategorieModel getSousCategorie(@RequestParam Long sousCategorieId) { // Permet de récupérer les donnée entity pour les transformer en model

        WasteSubCategory wasteSubCategory = wasteSubCategoryRepository.findById(sousCategorieId).orElse(null); //orElse nous retourne l'objet complet emballé ou sinon nous renvoie "null"
        GridDechetSousCategorieModel gridDechetSousCategorieModel = new GridDechetSousCategorieModel(wasteSubCategory); //change le type de equipmentSubCategory

        return gridDechetSousCategorieModel; // Pour pouvoir les utiliser
    }

    @Transactional
    @ResponseBody
    @GetMapping("deleteWasteSousCategorieTov")
    public boolean deleteWasteSousCategorieTov(@RequestParam Long sousCategoryId) {

        wasteSubCategoryRepository.deleteById(sousCategoryId);

        return true;
    }

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------- Troisièmre Grille Tov
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------

    @Transactional
    @ResponseBody
    @GetMapping("getWasteTov")
    public List<GridDechetTovModel> getWasteTov(@RequestParam Long subCategoryId) {

        Iterable<Tov> Tovs = wasteTovRepository.findTovBySubCategoryId(subCategoryId);

        List<GridDechetTovModel> gridDechetTovModels = new ArrayList<>();
        for(Tov tov : Tovs) {
            GridDechetTovModel gridDechetTovModel = new GridDechetTovModel(tov);
            gridDechetTovModels.add(gridDechetTovModel);
        }

        return gridDechetTovModels;

    }

    @Transactional
    @ResponseBody
    @RequestMapping(value = "addWasteTov", method = RequestMethod.POST)
    public ResponseEntity addWasteTov(@RequestBody GridDechetTovModel gridDechetTovModel) {

        Long maxCodeTovDechet = wasteTovRepository.maxCodeBySubCategoryId(gridDechetTovModel.getSubCategoryId()); //Permet de récupérer le type mis en paramêtre dans le controlleur JS
        if (maxCodeTovDechet == null){
            maxCodeTovDechet = 0l;
        }
        gridDechetTovModel.setCode(++maxCodeTovDechet);

        wasteTovRepository.save(gridDechetTovModel.toEntity());

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @Transactional
    @ResponseBody
    @GetMapping("editWasteTov")
    public GridDechetTovModel getFinalTov(@RequestParam Long sousCategorieId) { // Permet de récupérer les donnée entity pour les transformer en model

        Tov tov = wasteTovRepository.findById(sousCategorieId).orElse(null); //orElse nous retourne l'objet complet emballé ou sinon nous renvoie "null"
        GridDechetTovModel gridDechetTovModel = new GridDechetTovModel(tov); //change le type de equipmentSubCategory

        return gridDechetTovModel; // Pour pouvoir les utiliser
    }

    @Transactional
    @ResponseBody
    @GetMapping("deleteWasteTov")
    public boolean deleteWasteTov(@RequestParam Long id) {

        wasteTovRepository.deleteById(id);

        return true;
    }

    //--------------------------- DragAndDrop
    @Transactional
    @ResponseBody
    @RequestMapping(value = "addLeafDragAndDrop", method = RequestMethod.POST)
    public ResponseEntity addLeafDragAndDrop(@RequestParam(required = false) Long sourceNafId,
                                             @RequestParam Long sourceNedId,
                                             @RequestParam Long destNafId) {

        Optional<Ned> sourceNed = nedRepository.findById(sourceNedId);
        Optional<Naf> destNaf = nafRepository.findById(destNafId);
        if(sourceNed.isPresent() && destNaf.isPresent()) {
            if(sourceNafId != null) {
                Optional<Naf> sourceNaf = nafRepository.findById(sourceNafId);
                sourceNaf.ifPresent(naf -> {
                    naf.getNeds().remove(sourceNed.get());
                    nafRepository.save(naf);
                });
            }

            destNaf.get().getNeds().add(sourceNed.get());
            nafRepository.save(destNaf.get());
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

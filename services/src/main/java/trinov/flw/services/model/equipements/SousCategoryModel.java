package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.EquipmentSubCategory;

public class SousCategoryModel {
    private Long id;
    private String name;
    private Long version;
    private String family;
    private String imageUrl;
    private String subFamily;
    private String treatment;
    private Long categoryId; // Clès étrangère

    public SousCategoryModel(EquipmentSubCategory equipmentSubCategory) {
        this.id = equipmentSubCategory.getId();
        this.name = equipmentSubCategory.getName();
        this.version = equipmentSubCategory.getVersion();
        this.family = equipmentSubCategory.getFamily();
        this.imageUrl = equipmentSubCategory.getImageUrl();
        this.subFamily = equipmentSubCategory.getSubFamily();
        this.treatment = equipmentSubCategory.getTreatment();
        this.categoryId = equipmentSubCategory.getCategoryId();
    }

    public EquipmentSubCategory toEntity() {  // toEntity() = Norme | Permet de de créer une Entity à partir d'un model| Qui sera envoyé à la base de donnée
        EquipmentSubCategory  equipmentSubCategory = new EquipmentSubCategory();

        equipmentSubCategory.setName(this.name);
        equipmentSubCategory.setFamily(this.family);
        equipmentSubCategory.setImageUrl(this.imageUrl);
        equipmentSubCategory.setSubFamily(this.subFamily);
        equipmentSubCategory.setTreatment(this.treatment);
        equipmentSubCategory.setCategoryId(this.categoryId); // clès étrangère qu'il faut également noté
        equipmentSubCategory.setVersion(this.version);

        return equipmentSubCategory;
    }

    public SousCategoryModel() {   // Mettre un Constructeur Vide car JSA en à besoin
    }

    // Construire les getter et setter

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getFamily() { return family; }
    public void setFamily(String family) { this.family = family; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getSubFamily() { return subFamily; }
    public void setSubFamily(String subFamily) { this.subFamily = subFamily; }

    public String getTreatment() { return treatment; }
    public void setTreatment(String treatment) { this.treatment = treatment; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }
}

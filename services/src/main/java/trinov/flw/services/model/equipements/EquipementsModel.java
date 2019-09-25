package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.Equipements;
import trinov.flw.data.entity.equipements.EquipmentCategory;

public class EquipementsModel {   // Le model va etre ensuite importer coté client
    private Long id;              // ça ne sert a rien de mettre des infos inutiles
    private String name;
    //private Integer version;
    private String code;
    ////// Tab: equipment_sub_category
    private Long categoryId;
    //private String family;
    private String imageUrl;


    public EquipementsModel(EquipmentCategory equipmentCategory) {
        this.id = equipmentCategory.getId();
        this.name = equipmentCategory.getName();
       // this.version = equipmentCategory.getVersion();
        this.code = equipmentCategory.getCode();
    }

    public EquipementsModel(Long id, String name, Long categoryId, String imageUrl) { // Contructeur Jointure
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.imageUrl = imageUrl;
    }

    public EquipementsModel() {
    }

    public EquipmentCategory toEquipmentCategory() {
        EquipmentCategory equipmentCategory = new EquipmentCategory();

        equipmentCategory.setName(this.name);
        //equipmentCategory.setVersion(this.version);
        equipmentCategory.setCode(this.code);

        return equipmentCategory;

    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    // public Integer getVersion() { return version; }
    // public void setVersion(Integer version) { this.version = version; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }


}
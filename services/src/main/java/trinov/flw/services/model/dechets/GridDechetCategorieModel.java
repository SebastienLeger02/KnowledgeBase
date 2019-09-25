package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.WasteCategory;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class GridDechetCategorieModel {
    private Long id;
    private Long idx;
    private String name;
    private Long code;
    private Long version;
    private String imageUrl;
    private String type;


    public GridDechetCategorieModel(WasteCategory wasteCategory) {
        this.id = wasteCategory.getId();
        this.idx = wasteCategory.getIdx();
        this.name = wasteCategory.getName();
        this.code = wasteCategory.getCode();
        this.version = wasteCategory.getVersion();
        this.imageUrl = wasteCategory.getImageUrl();
        this.type = wasteCategory.getType();

    }

    public WasteCategory toEntity() {  // toEntity() = Norme | Permet de de créer une Entity à partir d'un model| Qui sera envoyé à la base de donnée
        WasteCategory  wasteCategory = new WasteCategory();

        wasteCategory.setName(this.name);
        wasteCategory.setCode(this.code);
        wasteCategory.setVersion(this.version);
        wasteCategory.setImageUrl(this.imageUrl);
        wasteCategory.setType(this.type);

        return wasteCategory;
    }

    public GridDechetCategorieModel() {   // Mettre un Constructeur Vide car JSA en à besoin
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getIdx() { return idx; }
    public void setIdx(Long idx) { this.idx = idx; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
}

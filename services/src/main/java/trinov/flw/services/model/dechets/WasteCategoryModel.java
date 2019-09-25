package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.WasteCategory;

public class WasteCategoryModel {
    private Long id;
    private String name;
    private Long idx;
    private Long version;
    private Long code;
    private String imageUrl;
    private String type;

    public WasteCategoryModel(Long id, String name, Long idx, Long version, Long code, String imageUrl, String type) {
        this.id = id;
        this.name = name;
        this.idx = idx;
        this.version = version;
        this.code = code;
        this.imageUrl = imageUrl;
        this.type = type;
    }

    public WasteCategory toEntity() {
       WasteCategory wasteCategory = new WasteCategory();

       wasteCategory.setId(this.id);
       wasteCategory.setName(this.name);
       wasteCategory.setVersion(this.version);
       wasteCategory.setCode(this.code);
       wasteCategory.setType(this.type);

       return wasteCategory;
    }

    public WasteCategoryModel() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getIdx() { return idx; }
    public void setIdx(Long idx) { this.idx = idx; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

}

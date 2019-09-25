package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.WasteSubCategory;

public class GridDechetSousCategorieModel {
    private Long id;
    private Long idx;
    private String name;
    private Long code;
    private Long version;
    private Long categoryId;

    public GridDechetSousCategorieModel(WasteSubCategory wasteSubCategory) {
        this.id = wasteSubCategory.getId();
        this.idx = wasteSubCategory.getIdx();
        this.name = wasteSubCategory.getName();
        this.code = wasteSubCategory.getCode();
        this.version = wasteSubCategory.getVersion();
       // this.categoryId = wasteSubCategory.getCategoryId();
    }

    public WasteSubCategory toEntity() {
        WasteSubCategory wasteSubCategory = new WasteSubCategory();

        wasteSubCategory.setName(this.name);
        wasteSubCategory.setCode(this.code);
        wasteSubCategory.setCategoryId(this.categoryId);
        wasteSubCategory.setVersion(this.version);

        return wasteSubCategory;
    }

    public GridDechetSousCategorieModel() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getIdx() { return idx; }
    public void setIdx(Long idx) { this.idx = idx; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }
}

package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.WasteCategory;
import trinov.flw.data.entity.dechets.WasteSubCategory;

import java.util.List;

public class WasteSubCategoryModel {
    private Long id;
    private String name;
    private Long categoryId;
    private Long idx;
    private Long code;
    private Long version;


    public WasteSubCategoryModel(Long id, String name, Long categoryId, Long idx, Long code, Long version) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.idx = idx;


        this.code = code;
        this.version = version;
    }
    
    public WasteSubCategory toEntity() {
        WasteSubCategory wasteSubCategory = new WasteSubCategory();
        
        wasteSubCategory.setName(this.name);
        wasteSubCategory.setIdx(this.idx);
        wasteSubCategory.setCode(this.code);
        wasteSubCategory.setVersion(this.version);
        
        return wasteSubCategory;
    }

    public WasteSubCategoryModel() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getIdx() {
        return idx;
    }

    public void setIdx(Long idx) {
        this.idx = idx;
    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
        this.code = code;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }
}

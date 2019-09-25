package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.Ned;

public class TreeDechetAssocTovNedModel {
    private Long id;
    private String name;
    private Long cedId;
    private Long subCategoryId;
    private Long code;
    private Long version;

    public TreeDechetAssocTovNedModel(Ned ned) {
        this.id = ned.getId();
        this.name = ned.getName();
        this.cedId = ned.getCedId();
        this.subCategoryId = ned.getSubCategoryId();
        this.code = ned.getCode();
        this.version = ned.getVersion();
    }

    public  TreeDechetAssocTovNedModel() {

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

    public Long getCedId() {
        return cedId;
    }

    public void setCedId(Long cedId) {
        this.cedId = cedId;
    }

    public Long getSubCategoryId() {
        return subCategoryId;
    }

    public void setSubCategoryId(Long subCategoryId) {
        this.subCategoryId = subCategoryId;
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

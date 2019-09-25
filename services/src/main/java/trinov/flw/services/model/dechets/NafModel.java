package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.Naf;

public class NafModel {
    private Long id;
    private Long version;
    private Long code;
    private String letter;
    private String name;
    private Long subCategoryId;

    public NafModel(Naf naf) {
        this.id = naf.getId();
        this.version = naf.getVersion();
        this.code = naf.getCode();
        this.letter = naf.getLetter();
        this.name = naf.getName();
        this.subCategoryId = naf.getSubCategoryId();
    }

    public Naf toEntity(){
        Naf naf = new Naf();

        naf.setId(this.id);
        naf.setCode(this.code);
        naf.setVersion(this.version);
        naf.setLetter(this.letter);
        naf.setName(this.name);
        naf.setSubCategoryId(this.subCategoryId);

        return naf;
    }

    public NafModel() {
        
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public String getLetter() { return letter; }
    public void setLetter(String letter) { this.letter = letter; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryId) { this.subCategoryId = subCategoryId; }

}

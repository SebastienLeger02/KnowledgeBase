package trinov.flw.services.model.dechets;


import trinov.flw.data.entity.dechets.Tov;

public class GridDechetTovModel  {
    private Long id;
    private String name;
    private Long version;
    private Boolean active;
    private Long code;
    private Long nedId;
    private Long subCategoryId;
    private Boolean valorisable;

    public GridDechetTovModel(Tov tov) {
        this.id = tov.getId();
        this.name = tov.getName();
        this.version = tov.getVersion();
        this.active = tov.getActive();
        this.code = tov.getCode();
        this.nedId = tov.getNedId();
        this.subCategoryId = tov.getSubCategoryId();
        this.valorisable = tov.getValorisable();

    }

   public Tov toEntity() {
        Tov tov = new Tov();

       tov.setName(this.name);
       tov.setActive(this.active);
       tov.setCode(this.code);
       tov.setVersion(this.version);
       tov.setSubCategoryId(this.subCategoryId);
       tov.setValorisable(this.valorisable);

        return tov;
    }


  public GridDechetTovModel() {}

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

    public Long getVersion() {
        return version;
    }
    public void setVersion(Long version) {
        this.version = version;
    }

    public Boolean getActive() {
        return active;
    }
    public void setActive(Boolean active) {
        this.active = active;
    }

    public Long getCode() {
        return code;
    }
    public void setCode(Long code) {
        this.code = code;
    }

    public Long getNedId() {
        return nedId;
    }
    public void setNedId(Long nedId) {
        this.nedId = nedId;
    }

    public Long getSubCategoryId() {
        return subCategoryId;
    }
    public void setSubCategoryId(Long subCategoryId) {
        this.subCategoryId = subCategoryId;
    }

    public Boolean getValorisable() {
        return valorisable;
    }
    public void setValorisable(Boolean valorisable) {
        this.valorisable = valorisable;
    }
}

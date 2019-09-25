package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.EquipmentNorm;

public class EquipmentNormModel {
    private Long id;
    private String name;
    private Long version;
    private String code;

    public EquipmentNormModel(EquipmentNorm equipmentNorm) {
        this.id = equipmentNorm.getId();
        this.name = equipmentNorm.getName();
        this.version = equipmentNorm.getVersion();
        this.code = equipmentNorm.getCode();
    }

    public EquipmentNorm toEntity(){
        EquipmentNorm equipmentNorm = new EquipmentNorm();

        equipmentNorm.setName(this.name);
        equipmentNorm.setVersion(0l);
        equipmentNorm.setCode(this.code);

        return equipmentNorm;
    }

    public EquipmentNormModel(){

    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
}

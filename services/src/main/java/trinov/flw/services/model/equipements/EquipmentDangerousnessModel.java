package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.EquipmentDangerousness;

public class EquipmentDangerousnessModel {
    private Long id;
    private Float code;
    private String name;
    private Long version;

    public EquipmentDangerousnessModel(EquipmentDangerousness equipmentDangerousness) {
        this.id = equipmentDangerousness.getId();
        this.name = equipmentDangerousness.getName();
        this.code = equipmentDangerousness.getCode();
        this.version = equipmentDangerousness.getVersion();
    }

    public EquipmentDangerousness toEntity() {
        EquipmentDangerousness equipmentDangerousness = new EquipmentDangerousness();

        equipmentDangerousness.setName(this.name);
        equipmentDangerousness.setVersion(0l);
        equipmentDangerousness.setCode(this.code);

        return equipmentDangerousness;
    }

    public EquipmentDangerousnessModel() {

    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Float getCode() { return code; }
    public void setCode(Float code) { this.code = code; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }


}

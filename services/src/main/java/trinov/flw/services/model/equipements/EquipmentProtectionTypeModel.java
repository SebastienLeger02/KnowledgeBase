package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.EquipmentProtectionType;

public class EquipmentProtectionTypeModel {
    private Long id;
    private Long version;
    private String name;


    public EquipmentProtectionTypeModel(EquipmentProtectionType equipmentProtectionType) {
        this.id = equipmentProtectionType.getId();
        this.name = equipmentProtectionType.getName();
        this.version = equipmentProtectionType.getVersion();
    }

    public EquipmentProtectionType toEntity() {
        EquipmentProtectionType equipmentProtectionType = new EquipmentProtectionType();

        equipmentProtectionType.setName(this.name);
        equipmentProtectionType.setVersion(0l);

        return equipmentProtectionType;
    }

    public EquipmentProtectionTypeModel() {

    }

    public Long getId() {return id; }
    public void setId(Long id) { this.id = id; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

}

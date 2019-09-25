package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.EquipmentProtectionType;
import trinov.flw.data.entity.equipements.EquipmentRetentionType;

public class EquipmentRetentionTypeModel {
    private Long id;
    private Long version;
    private String name;

    public EquipmentRetentionTypeModel(EquipmentRetentionType equipmentRetentionType) {
        this.id = equipmentRetentionType.getId();
        this.version = equipmentRetentionType.getVersion();
        this.name = equipmentRetentionType.getName();

    }

    public EquipmentRetentionType toEntity() {
        EquipmentRetentionType equipmentRetentionType = new EquipmentRetentionType();

        equipmentRetentionType.setVersion(0l);
        equipmentRetentionType.setName(this.name);

        return equipmentRetentionType;
    }

    public EquipmentRetentionTypeModel() {

    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

}

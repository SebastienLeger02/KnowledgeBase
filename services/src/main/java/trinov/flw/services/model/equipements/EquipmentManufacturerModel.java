package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.equipements.EquipmentManufacturer;

public class EquipmentManufacturerModel {
    private Long id;
    private String name;
    private Long version;

    public EquipmentManufacturerModel(EquipmentManufacturer equipmentManufacturer) {
        this.id = equipmentManufacturer.getId();
        this.name = equipmentManufacturer.getName();
        this.version = equipmentManufacturer.getVersion();
    }

    public EquipmentManufacturer toEntity() {
        EquipmentManufacturer equipmentManufacturer = new EquipmentManufacturer();

        equipmentManufacturer.setName(this.name);
        equipmentManufacturer.setVersion(0l);

        return equipmentManufacturer;
    }

    public EquipmentManufacturerModel() {

    }


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

}

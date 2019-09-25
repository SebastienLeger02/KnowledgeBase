package trinov.flw.services.model.equipements;

import trinov.flw.data.entity.vehicule.LiteVehicle;

public class EquipmentLiteVehicleModel {
    private Long id;
    private Long version;
    private String name;
    private Long projetId;
    private Long vehicleId;


    public EquipmentLiteVehicleModel(LiteVehicle liteVehicle) {
        this.id = liteVehicle.getId();
        this.name = liteVehicle.getName();
        this.version = liteVehicle.getVersion();
        this.projetId = liteVehicle.getProjetId();
        this.vehicleId = liteVehicle.getVehicleId();
    }

    public LiteVehicle toEntity() {
        LiteVehicle liteVehicle = new LiteVehicle();

        liteVehicle.setName(this.name);
        liteVehicle.setVersion(0l);
        liteVehicle.setProjetId(this.projetId);
        liteVehicle.setVehicleId(this.vehicleId);

        return liteVehicle;
    }

    public EquipmentLiteVehicleModel() {

    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getProjetId() { return projetId; }
    public void setProjetId(Long projetId) { this.projetId = projetId; }

    public Long getVehicleId() { return vehicleId; }
    public void setVehicleId(Long vehicleId) { this.vehicleId = vehicleId; }

}

package trinov.flw.data.entity.vehicule;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class LiteFlowDescription implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )

    private Long id;

    @Basic
    @Column(name = "prestation")
    private String prestation;
    private Long version;
    private Double averageVolumeCollected;
    @Basic
    @Column(name ="company_id")
    private Long companyId;
    private Boolean doorToDoor;
    @Basic
    @Column(name = "flow_id")
    private Long flowId;
    private Boolean onDemand;
    private Long passageNumber;
    private Double tgap;
    private Double tonnage;
    private Boolean tonnageKnow;
    @Basic
    @Column(name = "transport_tier_id")
    private Long transportTierId;
    private String transportunit;
    private Double transportUnitPrice;
    private Double transpotedQuantity;
    private Double transportedQuantityCharged;
    private Double transportedWeight;
    @Basic
    @Column(name = "treatment_id")
    private Long treatmentId;
    private Double treatmentQuantityCharged;
    @Basic
    @Column(name = "treatment_tier_id")
    private Long treatmentTierId;
    private String treatmentUnit;
    private Double treatmentUnitPrice;
    private Double unitGain;
    @Basic
    @Column( name = "vehicle_id")
    private Long vehicleId;



    @OneToMany(mappedBy = "liteFlowDescription")
    private Set<LitePicture> litePictures;

    @ManyToOne
    @JoinColumn( name ="vehicle_id" , insertable = false, updatable = false)
    private LiteVehicle liteVehicle;


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPrestation() { return prestation; }
    public void setPrestation(String prestation) { this.prestation = prestation; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Double getAverageVolumeCollected() { return averageVolumeCollected; }
    public void setAverageVolumeCollected(Double averageVolumeCollected) { this.averageVolumeCollected = averageVolumeCollected; }

    public Long getCompanyId() { return companyId; }
    public void setCompanyId(Long companyId) { this.companyId = companyId; }

    public Boolean getDoorToDoor() { return doorToDoor; }
    public void setDoorToDoor(Boolean doorToDoor) { this.doorToDoor = doorToDoor; }

    public Long getFlowId() { return flowId; }
    public void setFlowId(Long flowId) { this.flowId = flowId; }

    public Boolean getOnDemand() { return onDemand; }
    public void setOnDemand(Boolean onDemand) { this.onDemand = onDemand; }

    public Long getPassageNumber() { return passageNumber; }
    public void setPassageNumber(Long passageNumber) { this.passageNumber = passageNumber; }

    public Double getTgap() { return tgap; }
    public void setTgap(Double tgap) { this.tgap = tgap; }

    public Double getTonnage() { return tonnage; }
    public void setTonnage(Double tonnage) { this.tonnage = tonnage; }

    public Boolean getTonnageKnow() { return tonnageKnow; }
    public void setTonnageKnow(Boolean tonnageKnow) { this.tonnageKnow = tonnageKnow; }

    public Long getTransportTierId() { return transportTierId; }
    public void setTransportTierId(Long transportTierId) { this.transportTierId = transportTierId; }

    public String getTransportunit() { return transportunit; }
    public void setTransportunit(String transportunit) { this.transportunit = transportunit; }

    public Double getTransportUnitPrice() { return transportUnitPrice; }
    public void setTransportUnitPrice(Double transportUnitPrice) { this.transportUnitPrice = transportUnitPrice; }

    public Double getTranspotedQuantity() { return transpotedQuantity; }
    public void setTranspotedQuantity(Double transpotedQuantity) { this.transpotedQuantity = transpotedQuantity; }

    public Double getTransportedQuantityCharged() { return transportedQuantityCharged; }
    public void setTransportedQuantityCharged(Double transportedQuantityCharged) { this.transportedQuantityCharged = transportedQuantityCharged; }

    public Double getTransportedWeight() { return transportedWeight; }
    public void setTransportedWeight(Double transportedWeight) { this.transportedWeight = transportedWeight; }

    public Long getTreatmentId() { return treatmentId; }
    public void setTreatmentId(Long treatmentId) { this.treatmentId = treatmentId; }

    public Double getTreatmentQuantityCharged() { return treatmentQuantityCharged; }
    public void setTreatmentQuantityCharged(Double treatmentQuantityCharged) { this.treatmentQuantityCharged = treatmentQuantityCharged; }

    public Long getTreatmentTierId() { return treatmentTierId; }
    public void setTreatmentTierId(Long treatmentTierId) { this.treatmentTierId = treatmentTierId; }

    public String getTreatmentUnit() { return treatmentUnit; }
    public void setTreatmentUnit(String treatmentUnit) { this.treatmentUnit = treatmentUnit; }

    public Double getTreatmentUnitPrice() { return treatmentUnitPrice; }
    public void setTreatmentUnitPrice(Double treatmentUnitPrice) { this.treatmentUnitPrice = treatmentUnitPrice; }

    public Double getUnitGain() { return unitGain; }
    public void setUnitGain(Double unitGain) { this.unitGain = unitGain; }

    public Long getVehicleId() { return vehicleId; }
    public void setVehicleId(Long vehicleId) { this.vehicleId = vehicleId; }

    public Set<LitePicture> getLitePictures() { return litePictures; }
    public void setLitePictures(Set<LitePicture> litePictures) { this.litePictures = litePictures; }

    public LiteVehicle getLiteVehicle() { return liteVehicle; }
    public void setLiteVehicle(LiteVehicle liteVehicle) { this.liteVehicle = liteVehicle; }
}

package trinov.flw.data.entity.vehicule;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class LiteVehicle implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    private Long version;
    @Basic
    @Column( name = "projet_id")
    private Long projetId;
    @Basic
    @Column( name = "vehicle_id")
    private Long vehicleId;

    @ManyToOne
    @JoinColumn(name = "vehicle_id", updatable = false, insertable = false)
    private Vehicle vehicle;

    @OneToMany(mappedBy = "liteVehicle")
    private Set<LiteFlowDescription> liteFlowDescriptions;



    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getProjetId() { return projetId; }
    public void setProjetId(Long projetId) { this.projetId = projetId; }

    public Long getVehicleId() { return vehicleId; }
    public void setVehicleId(Long vehicleId) { this.vehicleId = vehicleId; }

    public Set<LiteFlowDescription> getLiteFlowDescriptions() { return liteFlowDescriptions; }
    public void setLiteFlowDescriptions(Set<LiteFlowDescription> liteFlowDescriptions) { this.liteFlowDescriptions = liteFlowDescriptions; }

    public Vehicle getVehicle() { return vehicle; }
    public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }

    /*
    public Set<Vehicle> getVehicles() { return vehicles; }
    public void setVehicles(Set<Vehicle> vehicles) { this.vehicles = vehicles; }
    */

}

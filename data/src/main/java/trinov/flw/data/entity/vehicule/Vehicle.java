package trinov.flw.data.entity.vehicule;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.equipements.Comment;
import trinov.flw.data.entity.equipements.EquipmentType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
public class Vehicle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    private Long id;

    @Basic
    @Column( name = "name")
    private String name;
    private Long version;
    private Double ptac;
    private Double ptra;
    private Double pv;
    private Double annualVolumeHour;
    @Basic
    @Column(name ="comment_id")
    private Long commentId;
    private Double consumption;
    private String fuel;
    private Double hourCost;
    private Double hourPrice;
    private Double kmCost;
    private Double kmPrice;
    private Double surface;
    private String type;
    private Double volume;
    private Long dechetConditionne;
    private Long transportVrac;
    private Double chrgtHeight;
    private Double usefulHeight;
    private Double usefulLenght;
    private Double usefulWidht;
    private Double emptyingTime;
    private Double manipulationTime;
    private Boolean isDefaultList;


    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "equipment_type_vehicles",
            joinColumns = { @JoinColumn(name = "vehicle_id") },
            inverseJoinColumns = { @JoinColumn(name = "equipment_type_id") })
    private Set<EquipmentType> equipmentTypes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name ="comment_id", updatable = false, insertable = false)
    private Comment comment;

/*
    @ManyToMany
    @JoinTable(name = "equipment_type_vehicles",
            joinColumns = { @JoinColumn(name = "equipment_type_id") },
            inverseJoinColumns = { @JoinColumn(name = "vehicle_id") })
    public Set<Vehicle> getVehicles() {
        return vehicles; }
*/


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Double getPtac() { return ptac; }
    public void setPtac(Double ptac) { this.ptac = ptac; }

    public Double getPtra() { return ptra; }
    public void setPtra(Double ptra) { this.ptra = ptra; }

    public Double getPv() { return pv; }
    public void setPv(Double pv) { this.pv = pv; }

    public Double getAnnualVolumeHour() { return annualVolumeHour; }
    public void setAnnualVolumeHour(Double annualVolumeHour) { this.annualVolumeHour = annualVolumeHour; }

    public Long getCommentId() { return commentId; }
    public void setCommentId(Long commentId) { this.commentId = commentId; }

    public Double getConsumption() { return consumption; }
    public void setConsumption(Double consumption) { this.consumption = consumption; }

    public String getFuel() { return fuel; }
    public void setFuel(String fuel) { this.fuel = fuel; }

    public Double getHourCost() { return hourCost; }
    public void setHourCost(Double hourCost) { this.hourCost = hourCost; }

    public Double getHourPrice() { return hourPrice; }
    public void setHourPrice(Double hourPrice) { this.hourPrice = hourPrice; }

    public Double getKmCost() { return kmCost; }
    public void setKmCost(Double kmCost) { this.kmCost = kmCost; }

    public Double getKmPrice() { return kmPrice; }
    public void setKmPrice(Double kmPrice) { this.kmPrice = kmPrice; }

    public Double getSurface() { return surface; }
    public void setSurface(Double surface) { this.surface = surface; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Double getVolume() { return volume; }
    public void setVolume(Double volume) { this.volume = volume; }

    public Long getDechetConditionne() { return dechetConditionne; }
    public void setDechetConditionne(Long dechetConditionne) { this.dechetConditionne = dechetConditionne; }

    public Long getTransportVrac() { return transportVrac; }
    public void setTransportVrac(Long transportVrac) { this.transportVrac = transportVrac; }

    public Double getChrgtHeight() { return chrgtHeight; }
    public void setChrgtHeight(Double chrgtHeight) { this.chrgtHeight = chrgtHeight; }

    public Double getUsefulHeight() { return usefulHeight; }
    public void setUsefulHeight(Double usefulHeight) { this.usefulHeight = usefulHeight; }

    public Double getUsefulLenght() { return usefulLenght; }
    public void setUsefulLenght(Double usefulLenght) { this.usefulLenght = usefulLenght; }

    public Double getUsefulWidht() { return usefulWidht; }
    public void setUsefulWidht(Double usefulWidht) { this.usefulWidht = usefulWidht; }

    public Double getEmptyingTime() { return emptyingTime; }
    public void setEmptyingTime(Double emptyingTime) { this.emptyingTime = emptyingTime; }

    public Double getManipulationTime() { return manipulationTime; }
    public void setManipulationTime(Double manipulationTime) { this.manipulationTime = manipulationTime; }

    public Boolean getIsDefaultList() { return isDefaultList; }
    public void setIsDefaultList(Boolean isDefaultList) { this.isDefaultList = isDefaultList; }

    public Boolean getDefaultList() { return isDefaultList; }
    public void setDefaultList(Boolean defaultList) { isDefaultList = defaultList; }

    public Set<EquipmentType> getEquipmentTypes() { return equipmentTypes; }
    public void setEquipmentTypes(Set<EquipmentType> equipmentTypes) { this.equipmentTypes = equipmentTypes; }

    public Comment getComment() { return comment; }
    public void setComment(Comment comment) { this.comment = comment; }


    public void addEquipementType(EquipmentType equipmentType){this.getEquipmentTypes().add(equipmentType);}


}

package trinov.flw.services.model.vehicle;

import trinov.flw.data.entity.equipements.EquipmentType;
import trinov.flw.data.entity.vehicule.Vehicle;
import trinov.flw.services.model.equipements.EquipementsTypeModel;

import java.util.ArrayList;
import java.util.List;

public class VehicleModel {
    private Long id;
    private String name;
    private Long version;
    private Double ptac;
    private Double ptra;
    private Double pv;
    private Double annualVolumeHour;
    private Long commentId;
    private String comment;
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

    private List<String> equipmentTypeName = new ArrayList<>();
    private List<EquipementsTypeModel> equipementsTypeModels = new ArrayList<>();

    public VehicleModel(Vehicle vehicle) {
        this.id = vehicle.getId();
        this.name = vehicle.getName() ;
        this.version= vehicle.getVersion();
        this.ptac = vehicle.getPtac();
        this.ptra = vehicle.getPtra();
        this.pv = vehicle.getPv();
        this.annualVolumeHour = vehicle.getAnnualVolumeHour();
        this.commentId = vehicle.getCommentId();
        this.comment = (vehicle.getComment()!= null)?vehicle.getComment().getComment():"";
        this.consumption = vehicle.getConsumption();
        this.fuel = vehicle.getFuel();
        this.hourCost = vehicle.getHourCost();
        this.hourPrice = vehicle.getHourPrice();
        this.kmCost = vehicle.getKmCost();
        this.kmPrice = vehicle.getKmPrice();
        this.surface = vehicle.getSurface();
        this.type = vehicle.getType();
        this.volume = vehicle.getVolume();
        this.dechetConditionne = vehicle.getDechetConditionne();
        this.transportVrac = vehicle.getTransportVrac();
        this.chrgtHeight = vehicle.getChrgtHeight();
        this.usefulHeight = vehicle.getUsefulHeight();
        this.usefulLenght = vehicle.getUsefulLenght();
        this.usefulWidht = vehicle.getUsefulWidht();
        this.emptyingTime = vehicle.getEmptyingTime();
        this.manipulationTime = vehicle.getManipulationTime();
        this.isDefaultList = vehicle.getIsDefaultList();

        /*
        this.equipmentTypeName = new ArrayList<>();
        for(EquipmentType equipmentType : vehicle.getEquipmentTypes()){
            equipmentTypeName.add(equipmentType.getId());
        }
        */

    }

    public Vehicle toEntity(){
        Vehicle vehicle = new Vehicle();

        vehicle.setId(this.id);
        vehicle.setName(this.name);
        vehicle.setVersion(this.version);
        vehicle.setPtac(this.ptac);
        vehicle.setPtra(this.ptra);
        vehicle.setPv(this.pv);
        vehicle.setAnnualVolumeHour(this.annualVolumeHour);
        vehicle.setCommentId(this.commentId);
        vehicle.setConsumption(this.consumption);
        vehicle.setFuel(this.fuel);
        vehicle.setHourCost(this.hourCost);
        vehicle.setHourPrice(this.hourPrice);
        vehicle.setKmCost(this.kmCost);
        vehicle.setKmPrice(this.kmPrice);
        vehicle.setSurface(this.surface);
        vehicle.setType(this.type);
        vehicle.setDechetConditionne(this.dechetConditionne);
        vehicle.setTransportVrac(this.transportVrac);
        vehicle.setChrgtHeight(this.chrgtHeight);
        vehicle.setUsefulHeight(this.usefulHeight);
        vehicle.setUsefulLenght(this.usefulLenght);
        vehicle.setUsefulWidht(this.usefulWidht);
        vehicle.setEmptyingTime(this.emptyingTime);
        vehicle.setManipulationTime(this.manipulationTime);
        vehicle.setIsDefaultList(this.isDefaultList);

        long version = (this.version != null)? this.version : 0;
        vehicle.setVersion(version);

        return vehicle;
    }

    public VehicleModel() {
    }

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

    public Boolean getDefaultList() { return isDefaultList; }
    public void setDefaultList(Boolean defaultList) { isDefaultList = defaultList; }

    public List<EquipementsTypeModel> getEquipementsTypeModels() { return equipementsTypeModels; }
    public void setEquipementsTypeModels(List<EquipementsTypeModel> equipementsTypeModels) { this.equipementsTypeModels = equipementsTypeModels;}

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public List<String> getEquipmentTypeName() { return equipmentTypeName; }
    public void setEquipmentTypeName(List<String> equipmentTypeName) { this.equipmentTypeName = equipmentTypeName; }



}

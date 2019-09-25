package trinov.flw.services.model.dechets;

import trinov.flw.data.entity.dechets.Ned;

public class NedModel {
    private Long id;
    private String name;
    private Long version;
    private Long biomassRate;
    private Long cedId;
    private Long cendreMax;
    private Long cendreMin;
    private Long code;
    private Boolean comeFromBiomass;
    private Boolean halogen;
    private Boolean isTransversal;
    private Boolean metals;
    private Long methanogenMax;
    private Long methanogenMin;
    private Boolean pcb;
    private Long pciMax;
    private Long pciMin;
    private Long subCategoryId;
    private Long sulfur;
    private Long pertinence;
    private Long averageDensity;
    private Boolean bioGasWaste;
    private Boolean degradable;
    private Long emissionco2factorDueToFire;
    private Long emissionco2factorDueToValor;
    private Long householdWasteBond;
    private Long maxDensity;
    private Long recyclabilityRate;

    public NedModel(Ned ned) {
        this.id = ned.getId();
        this.name = ned.getName();
        this.version = ned.getVersion();
        this.biomassRate = ned.getBiomassRate();
        this.cedId = ned.getCedId();
        this.cendreMax = ned.getCendreMax();
        this.cendreMin = ned.getCendreMin();
        this.code = ned.getCode();
        this.comeFromBiomass = ned.getComeFromBiomass();
        this.halogen = ned.getHalogen();
        this.isTransversal = ned.getTransversal();
        this.metals = ned.getMetals();
        this.methanogenMax = ned.getMethanogenMax();
        this.methanogenMin = ned.getMethanogenMin();
        this.pcb = ned.getPcb();
        this.pciMax = ned.getPciMax();
        this.pciMin = ned.getPciMin();
        this.subCategoryId = ned.getSubCategoryId();
        this.sulfur = ned.getSulfur();
        this.pertinence = ned.getPertinence();
        this.averageDensity = ned.getAverageDensity();
        this.bioGasWaste = ned.getBioGasWaste();
        this.degradable = ned.getDegradable();
        this.emissionco2factorDueToFire = ned.getEmissionco2factorDueToFire();
        this.emissionco2factorDueToValor = ned.getEmissionco2factorDueToValor();
        this.householdWasteBond = ned.getHouseholdWasteBond();
        this.maxDensity = ned.getMaxDensity();
        this.recyclabilityRate = ned.getRecyclabilityRate();

    }

    public Ned toEntity() {
        Ned ned = new Ned();

        ned.setId(this.id);
        ned.setName(this.name);
        ned.setBiomassRate(this.biomassRate);
        ned.setCedId(this.cedId);
        ned.setCendreMax(this.cendreMax);
        ned.setCendreMin(this.cendreMin);
        ned.setCode(this.code);
        ned.setComeFromBiomass(this.comeFromBiomass);
        ned.setHalogen(this.halogen);
        ned.setTransversal(this.isTransversal);
        ned.setMetals(this.metals);
        ned.setMethanogenMax(this.methanogenMax);
        ned.setMethanogenMin(this.methanogenMin);
        ned.setPcb(this.pcb);
        ned.setPciMax(this.pciMax);
        ned.setPciMin(this.pciMin);
        ned.setSubCategoryId(this.subCategoryId);
        ned.setSulfur(this.sulfur);
        ned.setPertinence(this.pertinence);
        ned.setAverageDensity(this.averageDensity);
        ned.setBioGasWaste(this.bioGasWaste);
        ned.setDegradable(this.degradable);
        ned.setEmissionco2factorDueToFire(this.emissionco2factorDueToFire);
        ned.setEmissionco2factorDueToValor(this.emissionco2factorDueToValor);
        ned.setHouseholdWasteBond(this.householdWasteBond);
        ned.setMaxDensity(this.maxDensity);
        ned.setRecyclabilityRate(this.recyclabilityRate);

        return ned;
    }

    public NedModel() { }


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getBiomassRate() { return biomassRate; }
    public void setBiomassRate(Long biomassRate) { this.biomassRate = biomassRate; }

    public Long getCedId() { return cedId; }
    public void setCedId(Long cedId) { this.cedId = cedId; }

    public Long getCendreMax() { return cendreMax; }
    public void setCendreMax(Long cendreMax) { this.cendreMax = cendreMax; }

    public Long getCendreMin() { return cendreMin; }
    public void setCendreMin(Long cendreMin) { this.cendreMin = cendreMin; }

    public Long getCode() { return code; }
    public void setCode(Long code) { this.code = code; }

    public Boolean getComeFromBiomass() { return comeFromBiomass; }
    public void setComeFromBiomass(Boolean comeFromBiomass) { this.comeFromBiomass = comeFromBiomass; }

    public Boolean getHalogen() { return halogen; }
    public void setHalogen(Boolean halogen) { this.halogen = halogen; }

    public Boolean getTransversal() { return isTransversal; }
    public void setTransversal(Boolean transversal) { isTransversal = transversal; }

    public Boolean getMetals() { return metals; }
    public void setMetals(Boolean metals) { this.metals = metals; }

    public Long getMethanogenMax() { return methanogenMax; }
    public void setMethanogenMax(Long methanogenMax) { this.methanogenMax = methanogenMax; }

    public Long getMethanogenMin() { return methanogenMin; }
    public void setMethanogenMin(Long methanogenMin) { this.methanogenMin = methanogenMin; }

    public Boolean getPcb() { return pcb; }
    public void setPcb(Boolean pcb) { this.pcb = pcb; }

    public Long getPciMax() { return pciMax; }
    public void setPciMax(Long pciMax) { this.pciMax = pciMax; }

    public Long getPciMin() { return pciMin; }
    public void setPciMin(Long pciMin) { this.pciMin = pciMin; }

    public Long getSubCategoryId() { return subCategoryId; }
    public void setSubCategoryId(Long subCategoryId) { this.subCategoryId = subCategoryId; }

    public Long getSulfur() { return sulfur; }
    public void setSulfur(Long sulfur) { this.sulfur = sulfur; }

    public Long getPertinence() { return pertinence; }
    public void setPertinence(Long pertinence) { this.pertinence = pertinence; }

    public Long getAverageDensity() { return averageDensity; }
    public void setAverageDensity(Long averageDensity) { this.averageDensity = averageDensity; }

    public Boolean getBioGasWaste() { return bioGasWaste; }
    public void setBioGasWaste(Boolean bioGasWaste) { this.bioGasWaste = bioGasWaste; }

    public Boolean getDegradable() { return degradable; }
    public void setDegradable(Boolean degradable) { this.degradable = degradable; }

    public Long getEmissionco2factorDueToFire() { return emissionco2factorDueToFire;}
    public void setEmissionco2factorDueToFire(Long emissionco2factorDueToFire) { this.emissionco2factorDueToFire = emissionco2factorDueToFire; }

    public Long getEmissionco2factorDueToValor() { return emissionco2factorDueToValor; }
    public void setEmissionco2factorDueToValor(Long emissionco2factorDueToValor) { this.emissionco2factorDueToValor = emissionco2factorDueToValor; }

    public Long getHouseholdWasteBond() { return householdWasteBond; }
    public void setHouseholdWasteBond(Long householdWasteBond) { this.householdWasteBond = householdWasteBond; }

    public Long getMaxDensity() { return maxDensity; }
    public void setMaxDensity(Long maxDensity) { this.maxDensity = maxDensity; }

    public Long getRecyclabilityRate() { return recyclabilityRate; }
    public void setRecyclabilityRate(Long recyclabilityRate) { this.recyclabilityRate = recyclabilityRate; }
}

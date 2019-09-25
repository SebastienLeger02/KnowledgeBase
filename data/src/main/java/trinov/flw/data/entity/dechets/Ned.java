package trinov.flw.data.entity.dechets;


import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Ned implements Serializable {
    @Id
    @GeneratedValue(strategy  =  GenerationType.IDENTITY  )
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    private Long version;
    private Long biomassRate;
    @Basic
    @Column( name = "ced_id")
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
    @Basic
    @Column(name = "sub_category_id")
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
    //private Long wasteRegulatoryFamillyId;



    @ManyToOne  // Vise la classe au dessus
    @JoinColumn(name="sub_category_id", insertable = false, updatable = false)
    public WasteSubCategory wasteSubCategory;

    @ManyToOne()
    @JoinColumn(name="ced_id" , insertable=false, updatable=false)
    private Ced ced;

    @OneToMany(mappedBy = "ned")
    private Set<HybridTov> hybridTovs;

    @OneToMany( mappedBy = "ned")
    private Set<Ced> ceds;


    // --------------------------------------------------- CritereDocumentationCarChimDe
    @ManyToMany(fetch = FetchType.LAZY,  // LAZY met en attente la requette. Faire un .get pour la récupérer
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "ned_criteredocumentationcarchimdes",
            joinColumns = { @JoinColumn(name = "critere_documentation_car_chim_de_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<CritereDocumentationCarChimDe> critereDocumentationCarChimDes = new HashSet<>();


    // --------------------------------------------------- CritereDocumentationEtatPhysique
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "ned_criteredocumentationetatphysiques",
            joinColumns = { @JoinColumn(name = "critere_documentation_etat_physique_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<CritereDocumentationEtatPhysique> critereDocumentationEtatPhysiques = new HashSet<>();


    // --------------------------------------------------- CritereDocumentationCarChimGe
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "ned_criteredocumentationcarchimges",
            joinColumns = { @JoinColumn(name = "critere_documentation_car_chim_ge_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<CritereDocumentationCarChimGe> critereDocumentationCarChimGes = new HashSet<>();

    // --------------------------------------------------- CritereDocumentationFfdu
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "ned_criteredocumentationffdus",
            joinColumns = { @JoinColumn(name = "critere_documentation__fdu_id") },
            inverseJoinColumns = { @JoinColumn(name = "ned_id") })
    private Set<CritereDocumentationFfdu> critereDocumentationFfdus = new HashSet<>();

    // --------------------------------------------------- Naf
    @ManyToMany(fetch = FetchType.LAZY,  // LAZY met en attente la requette. Faire un .get pour la récupérer
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "neds")
    private Set<Naf> nafs = new HashSet<>();




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
    public void setDegradable(Boolean degradable) {
        this.degradable = degradable;
    }

    public Long getEmissionco2factorDueToFire() {
        return emissionco2factorDueToFire;
    }
    public void setEmissionco2factorDueToFire(Long emissionco2factorDueToFire) { this.emissionco2factorDueToFire = emissionco2factorDueToFire; }

    public Long getEmissionco2factorDueToValor() { return emissionco2factorDueToValor; }
    public void setEmissionco2factorDueToValor(Long emissionco2factorDueToValor) { this.emissionco2factorDueToValor = emissionco2factorDueToValor; }

    public Long getHouseholdWasteBond() {
        return householdWasteBond;
    }
    public void setHouseholdWasteBond(Long householdWasteBond) {
        this.householdWasteBond = householdWasteBond;
    }

    public Long getMaxDensity() {
        return maxDensity;
    }
    public void setMaxDensity(Long maxDensity) {
        this.maxDensity = maxDensity;
    }

    public Long getRecyclabilityRate() {
        return recyclabilityRate;
    }
    public void setRecyclabilityRate(Long recyclabilityRate) {
        this.recyclabilityRate = recyclabilityRate;
    }

    public Set<HybridTov> getHybridTovs() { return hybridTovs; }
    public void setHybridTovs(Set<HybridTov> hybridTovs) { this.hybridTovs = hybridTovs; }

    public WasteSubCategory getWasteSubCategory() { return wasteSubCategory; }
    public void setWasteSubCategory(WasteSubCategory wasteSubCategory) { this.wasteSubCategory = wasteSubCategory; }

    public Ced getCed() { return ced; }
    public void setCed(Ced ced) { this.ced = ced; }

    public Set<CritereDocumentationCarChimDe> getCritereDocumentationCarChimDes() { return critereDocumentationCarChimDes; }
    public void setCritereDocumentationCarChimDes(Set<CritereDocumentationCarChimDe> critereDocumentationCarChimDes) { this.critereDocumentationCarChimDes = critereDocumentationCarChimDes; }

    public Set<CritereDocumentationEtatPhysique> getCritereDocumentationEtatPhysiques() { return critereDocumentationEtatPhysiques; }
    public void setCritereDocumentationEtatPhysiques(Set<CritereDocumentationEtatPhysique> critereDocumentationEtatPhysiques) { this.critereDocumentationEtatPhysiques = critereDocumentationEtatPhysiques; }

    public Set<CritereDocumentationFfdu> getCritereDocumentationFfdus() { return critereDocumentationFfdus; }
    public void setCritereDocumentationFfdus(Set<CritereDocumentationFfdu> critereDocumentationFfdus) { this.critereDocumentationFfdus = critereDocumentationFfdus; }

    public Set<Naf> getNafs() { return nafs; }
    public void setNafs(Set<Naf> nafs) { this.nafs = nafs; }

    public Set<Ced> getCeds() { return ceds; }
    public void setCeds(Set<Ced> ceds) { this.ceds = ceds; }
    /*
    public Long getWasteRegulatoryFamillyId() { return wasteRegulatoryFamillyId;}
    public void setWasteRegulatoryFamillyId(Long wasteRegulatoryFamillyId) { this.wasteRegulatoryFamillyId = wasteRegulatoryFamillyId;}
    */

    public Set<CritereDocumentationCarChimGe> getCritereDocumentationCarChimGes() { return critereDocumentationCarChimGes; }
    public void setCritereDocumentationCarChimGes(Set<CritereDocumentationCarChimGe> critereDocumentationCarChimGes) { this.critereDocumentationCarChimGes = critereDocumentationCarChimGes; }
}

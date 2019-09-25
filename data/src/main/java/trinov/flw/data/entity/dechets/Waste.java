package trinov.flw.data.entity.dechets;


import org.hibernate.annotations.GenericGenerator;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Waste implements Serializable {
    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column( name = "htov_id")
    private Long htovId;
    @Basic
    @Column( name = "tov_id")
    private Long tovId;
    @Basic
    @Column( name = "physical_state_id")
    private Long physicalStateId;
    private Long version;
    private String aspect;
    private Integer biomasesRate;
    private Integer cendreMax;
    private Integer cendreMin;
    private Long comeFromBiomass;
    private Integer compostPotential;
    private Integer content;
    private Date date;
    private Long halogen;
    private Long isExceptional;
    private Long isGreenWaste;
    private Long isMultiComponent;
    private Long metals;
    private Integer methanogenMax;
    private Integer methanogenMin;
    private Long pcb;
    private Integer pcbMax;
    private Integer pcbMin;
    private Long pollutionCompost;
    private Long pollutionMethanisation;
    private Double quantity;
    private String separability;
    private Long sulfur;


    @ManyToOne
    @JoinColumn(name = "htov_id", updatable = false , insertable = false)
    private HybridTov hybridTov;

    @ManyToOne
    @JoinColumn(name = "tov_id", updatable = false , insertable = false)
    private Tov tov;

    @ManyToOne
    @JoinColumn(name = "physical_state_id", updatable = false , insertable = false)
    private CritereDocumentationEtatPhysique critereDocumentationEtatPhysique;


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getHtovId() { return htovId; }
    public void setHtovId(Long htovId) { this.htovId = htovId; }

    public Long getTovId() { return tovId; }
    public void setTovId(Long tovId) { this.tovId = tovId; }

    public Long getPhysicalStateId() { return physicalStateId; }
    public void setPhysicalStateId(Long physicalStateId) { this.physicalStateId = physicalStateId; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public String getAspect() { return aspect; }
    public void setAspect(String aspect) { this.aspect = aspect; }

    public Integer getBiomasesRate() { return biomasesRate; }
    public void setBiomasesRate(Integer biomasesRate) { this.biomasesRate = biomasesRate; }

    public Integer getCendreMax() { return cendreMax; }
    public void setCendreMax(Integer cendreMax) { this.cendreMax = cendreMax; }

    public Integer getCendreMin() { return cendreMin; }
    public void setCendreMin(Integer cendreMin) { this.cendreMin = cendreMin; }

    public Long getComeFromBiomass() { return comeFromBiomass; }
    public void setComeFromBiomass(Long comeFromBiomass) { this.comeFromBiomass = comeFromBiomass; }

    public Integer getCompostPotential() { return compostPotential; }
    public void setCompostPotential(Integer compostPotential) { this.compostPotential = compostPotential; }

    public Integer getContent() { return content; }
    public void setContent(Integer content) { this.content = content; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }

    public Long getHalogen() { return halogen; }
    public void setHalogen(Long halogen) { this.halogen = halogen; }

    public Long getIsExceptional() { return isExceptional; }
    public void setIsExceptional(Long isExceptional) { this.isExceptional = isExceptional; }

    public Long getIsGreenWaste() { return isGreenWaste; }
    public void setIsGreenWaste(Long isGreenWaste) { this.isGreenWaste = isGreenWaste; }

    public Long getIsMultiComponent() { return isMultiComponent; }
    public void setIsMultiComponent(Long isMultiComponent) { this.isMultiComponent = isMultiComponent; }

    public Long getMetals() { return metals; }
    public void setMetals(Long metals) { this.metals = metals; }

    public Integer getMethanogenMax() { return methanogenMax; }
    public void setMethanogenMax(Integer methanogenMax) { this.methanogenMax = methanogenMax; }

    public Integer getMethanogenMin() { return methanogenMin; }
    public void setMethanogenMin(Integer methanogenMin) { this.methanogenMin = methanogenMin; }

    public Long getPcb() { return pcb; }
    public void setPcb(Long pcb) { this.pcb = pcb; }

    public Integer getPcbMax() { return pcbMax; }
    public void setPcbMax(Integer pcbMax) { this.pcbMax = pcbMax; }

    public Integer getPcbMin() { return pcbMin; }
    public void setPcbMin(Integer pcbMin) { this.pcbMin = pcbMin; }

    public Long getPollutionCompost() { return pollutionCompost; }
    public void setPollutionCompost(Long pollutionCompost) { this.pollutionCompost = pollutionCompost; }

    public Long getPollutionMethanisation() { return pollutionMethanisation; }
    public void setPollutionMethanisation(Long pollutionMethanisation) { this.pollutionMethanisation = pollutionMethanisation; }

    public Double getQuantity() { return quantity; }
    public void setQuantity(Double quantity) { this.quantity = quantity; }

    public String getSeparability() { return separability; }
    public void setSeparability(String separability) { this.separability = separability; }

    public Long getSulfur() { return sulfur; }
    public void setSulfur(Long sulfur) { this.sulfur = sulfur; }

    public HybridTov getHybridTov() { return hybridTov; }
    public void setHybridTov(HybridTov hybridTov) { this.hybridTov = hybridTov; }

    public Tov getTov() { return tov; }
    public void setTov(Tov tov) { this.tov = tov; }

    public CritereDocumentationEtatPhysique getCritereDocumentationEtatPhysique() { return critereDocumentationEtatPhysique; }
    public void setCritereDocumentationEtatPhysique(CritereDocumentationEtatPhysique critereDocumentationEtatPhysique) { this.critereDocumentationEtatPhysique = critereDocumentationEtatPhysique; }

}

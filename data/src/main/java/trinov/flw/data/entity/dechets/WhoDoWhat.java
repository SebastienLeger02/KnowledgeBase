package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class WhoDoWhat implements Serializable {
    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column( name = "anime_personnel")
    private String animePersonnel;
    private String choisitFournisseur;
    private String choisitPartenaires;
    private String classDonneesQualitatives;
    private String classeDonneesQuantitatives;
    private String classeFactures;
    private String collecteDechets;
    private String enleveDechets;
    private String gereRelation;
    private String majBordereau;
    private String payeFactures;
    private String recueilleDonneesQualitatives;
    private String recueilleDonneesQuantitatives;
    private String stockeDechets;

    @OneToMany(mappedBy = "whoDoWhat")
    private Set<Project> projects;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getAnimePersonnel() { return animePersonnel; }
    public void setAnimePersonnel(String animePersonnel) { this.animePersonnel = animePersonnel; }

    public String getChoisitFournisseur() { return choisitFournisseur; }
    public void setChoisitFournisseur(String choisitFournisseur) { this.choisitFournisseur = choisitFournisseur; }

    public String getChoisitPartenaires() { return choisitPartenaires; }
    public void setChoisitPartenaires(String choisitPartenaires) { this.choisitPartenaires = choisitPartenaires; }

    public String getClassDonneesQualitatives() { return classDonneesQualitatives; }
    public void setClassDonneesQualitatives(String classDonneesQualitatives) { this.classDonneesQualitatives = classDonneesQualitatives; }

    public String getClasseDonneesQuantitatives() { return classeDonneesQuantitatives; }
    public void setClasseDonneesQuantitatives(String classeDonneesQuantitatives) { this.classeDonneesQuantitatives = classeDonneesQuantitatives; }

    public String getClasseFactures() { return classeFactures; }
    public void setClasseFactures(String classeFactures) { this.classeFactures = classeFactures; }

    public String getCollecteDechets() { return collecteDechets; }
    public void setCollecteDechets(String collecteDechets) { this.collecteDechets = collecteDechets; }

    public String getEnleveDechets() { return enleveDechets; }
    public void setEnleveDechets(String enleveDechets) { this.enleveDechets = enleveDechets; }

    public String getGereRelation() { return gereRelation; }
    public void setGereRelation(String gereRelation) { this.gereRelation = gereRelation; }

    public String getMajBordereau() { return majBordereau; }
    public void setMajBordereau(String majBordereau) { this.majBordereau = majBordereau; }

    public String getPayeFactures() { return payeFactures; }
    public void setPayeFactures(String payeFactures) { this.payeFactures = payeFactures; }

    public String getRecueilleDonneesQualitatives() { return recueilleDonneesQualitatives; }
    public void setRecueilleDonneesQualitatives(String recueilleDonneesQualitatives) { this.recueilleDonneesQualitatives = recueilleDonneesQualitatives; }

    public String getRecueilleDonneesQuantitatives() { return recueilleDonneesQuantitatives; }
    public void setRecueilleDonneesQuantitatives(String recueilleDonneesQuantitatives) { this.recueilleDonneesQuantitatives = recueilleDonneesQuantitatives; }

    public String getStockeDechets() { return stockeDechets; }
    public void setStockeDechets(String stockeDechets) { this.stockeDechets = stockeDechets; }

    public Set<Project> getProjects() { return projects; }
    public void setProjects(Set<Project> projects) { this.projects = projects; }
}

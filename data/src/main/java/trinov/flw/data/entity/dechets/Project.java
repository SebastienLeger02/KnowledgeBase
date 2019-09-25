package trinov.flw.data.entity.dechets;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Project implements Serializable {
    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column( name = "name")
    private String name;
    @Basic
    @Column( name = "map_id")
    private Long mapId;
    @Basic
    @Column( name = "who_do_what_id")
    private Long whotDoWhatId;
    private Long version;
    private Integer daysProjectDuration;
    private Long isArchived;
    private Long showDidactitiel;
    private Long state;
    private Date subscriptionBillingDate;
    private Date subscriptionEndDate;
    private Date subscriptionStartDate;
    private String comment;

    @ManyToOne
    @JoinColumn(name = "who_do_what_id" , updatable = false, insertable = false)
    private WhoDoWhat whoDoWhat;

    @OneToOne
    @JoinColumn(name = "map_id" , updatable = false, insertable = false)
    private Map map;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Long getMapId() { return mapId; }
    public void setMapId(Long mapId) { this.mapId = mapId; }

    public Long getWhotDoWhatId() { return whotDoWhatId; }
    public void setWhotDoWhatId(Long whotDoWhatId) { this.whotDoWhatId = whotDoWhatId; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Integer getDaysProjectDuration() { return daysProjectDuration; }
    public void setDaysProjectDuration(Integer daysProjectDuration) { this.daysProjectDuration = daysProjectDuration; }

    public Long getIsArchived() { return isArchived; }
    public void setIsArchived(Long isArchived) { this.isArchived = isArchived; }

    public Long getShowDidactitiel() { return showDidactitiel; }
    public void setShowDidactitiel(Long showDidactitiel) { this.showDidactitiel = showDidactitiel; }

    public Long getState() { return state; }
    public void setState(Long state) { this.state = state; }

    public Date getSubscriptionBillingDate() { return subscriptionBillingDate; }
    public void setSubscriptionBillingDate(Date subscriptionBillingDate) { this.subscriptionBillingDate = subscriptionBillingDate; }

    public Date getSubscriptionEndDate() { return subscriptionEndDate; }
    public void setSubscriptionEndDate(Date subscriptionEndDate) { this.subscriptionEndDate = subscriptionEndDate; }

    public Date getSubscriptionStartDate() { return subscriptionStartDate; }
    public void setSubscriptionStartDate(Date subscriptionStartDate) { this.subscriptionStartDate = subscriptionStartDate; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public WhoDoWhat getWhoDoWhat() { return whoDoWhat; }
    public void setWhoDoWhat(WhoDoWhat whoDoWhat) { this.whoDoWhat = whoDoWhat; }

    public Map getMap() { return map; }
    public void setMap(Map map) { this.map = map; }

}

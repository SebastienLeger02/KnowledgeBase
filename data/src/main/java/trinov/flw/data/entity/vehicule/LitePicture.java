package trinov.flw.data.entity.vehicule;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Blob;

@Entity
public class LitePicture implements Serializable {

    @Id
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @Basic
    @Column(name ="comment")
    private String comment;
    private Long version;
    @Basic
    @Column(name = "flow_id")
    private Long flowId;
    private Blob picture;


    @ManyToOne
    @JoinColumn(name = "flow_id", updatable = false, insertable = false)
    private LiteFlowDescription liteFlowDescription;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public Long getFlowId() { return flowId; }
    public void setFlowId(Long flowId) { this.flowId = flowId; }

    public Blob getPicture() { return picture; }
    public void setPicture(Blob picture) { this.picture = picture; }

    public LiteFlowDescription getLiteFlowDescription() { return liteFlowDescription; }
    public void setLiteFlowDescription(LiteFlowDescription liteFlowDescription) { this.liteFlowDescription = liteFlowDescription; }
}

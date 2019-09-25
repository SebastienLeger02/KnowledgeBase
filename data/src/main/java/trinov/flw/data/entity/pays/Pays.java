package trinov.flw.data.entity.pays;

import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.csvFile.FileUpload;
import trinov.flw.data.entity.user.User;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by thibault
 * Date: 18/06/18
 * Time: 17:52
 */
@Entity
public class Pays {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    private String nom;

    @OneToMany(mappedBy = "pays")
    private Set<User> users;

    @OneToMany(mappedBy = "pays")
    private Set<FileUpload> fileUploads;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Set<FileUpload> getFileUploads() {
        return fileUploads;
    }

    public void setFileUploads(Set<FileUpload> fileUploads) {
        this.fileUploads = fileUploads;
    }
}

/**
 * Created by thibault
 * Date: 07/06/18
 * Time: 17:04
 */
package trinov.flw.data.entity.user;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.GenericGenerator;
import trinov.flw.data.entity.pays.Pays;
import trinov.flw.data.entity.role.Role;

import javax.persistence.*;
import java.util.Collection;
import java.util.Locale;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Integer id;

    private String username;

    private String email;
    private String password;

    @ManyToOne
    @JoinColumn(name = "pays_id")
    private Pays pays;

    @ManyToMany
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"))
    private Collection<Role> roles;

    @Enumerated(EnumType.STRING)
    private Locale locale;

    public Pays getPays() {
        return pays;
    }

    public void setPays(Pays pays) {
        this.pays = pays;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public Locale getLocale() {
        return locale;
    }

    public void setLocale(Locale locale) {
        this.locale = locale;
    }

    public enum Locale {
        fr(java.util.Locale.FRANCE),
        en(java.util.Locale.ENGLISH);

        java.util.Locale locale;

        private Locale(java.util.Locale locale) {
            this.locale = locale;
        }

        public java.util.Locale getLocale() {
            return locale;
        }
    }

    @Transient
    public Boolean hasRole(String role) {
        for(Role roleIterator : roles) {
            if(roleIterator.getName().equals(role)) {
                return true;
            }
        }
        return false;
    }
}
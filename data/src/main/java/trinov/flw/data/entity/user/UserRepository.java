package trinov.flw.data.entity.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by thibault
 * Date: 07/06/18
 * Time: 17:05
 */
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}

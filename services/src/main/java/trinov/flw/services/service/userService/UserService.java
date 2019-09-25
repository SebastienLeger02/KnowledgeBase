package trinov.flw.services.service.userService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trinov.flw.data.entity.user.User;
import trinov.flw.data.entity.user.UserRepository;

/**
 * Created by thibault
 * Date: 18/06/18
 * Time: 18:11
 */
@Service
public class UserService implements IUserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getLoggedInUser() {
        return null;
    }
}

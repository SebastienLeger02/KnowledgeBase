package trinov.flw.services.service.userService;

import trinov.flw.data.entity.user.User;

/**
 * Created by thibault
 * Date: 18/06/18
 * Time: 18:12
 */
public interface IUserService {
    User getLoggedInUser();
}

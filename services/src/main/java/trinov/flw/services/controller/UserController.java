package trinov.flw.services.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import trinov.flw.data.entity.user.User;
import trinov.flw.data.entity.user.UserRepository;
import trinov.flw.services.service.userService.IUserService;

/**
 * Created by thibault
 * Date: 03/07/18
 * Time: 17:30
 */
@Controller
@RequestMapping("user")
public class UserController {
    private final IUserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(IUserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @ResponseBody
    @PutMapping("setLocale")
    public void setLocale(User.Locale locale) {
        User user = userService.getLoggedInUser();
        user.setLocale(locale);
        userRepository.save(user);
    }
}

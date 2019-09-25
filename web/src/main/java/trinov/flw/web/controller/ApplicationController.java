package trinov.flw.web.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import trinov.flw.data.entity.role.Role;
import trinov.flw.data.entity.user.User;
import trinov.flw.services.service.userService.IUserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by thibault
 * Date: 03/07/18
 * Time: 16:42
 */
@Controller
public class ApplicationController {
    protected final Log logger = LogFactory.getLog(getClass());
    private final IUserService userService;

    @Autowired
    public ApplicationController(IUserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/base")
    public String pays(Model model) {
        return "app";
    }

    @RequestMapping("/admin")
    public String admin(Model model) {
        return "app";
    }
}

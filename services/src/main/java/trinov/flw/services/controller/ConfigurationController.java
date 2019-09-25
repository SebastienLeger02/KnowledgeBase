package trinov.flw.services.controller; /**
 * Created by thibault
 * Date: 07/06/18
 * Time: 17:13
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import trinov.flw.data.entity.csvFile.FileUpload;
import trinov.flw.data.entity.periode.Periode;
import trinov.flw.data.entity.user.User;
import trinov.flw.services.model.PeriodeModel;
import trinov.flw.services.service.periodePaysInfoService.IPeriodePaysInfoService;
import trinov.flw.services.service.periodePaysInfoService.PeriodePaysInfoService;
import trinov.flw.services.service.userService.IUserService;

;
import java.util.Optional;

@Controller
@RequestMapping(path="/configuration")
public class ConfigurationController {
    private final IPeriodePaysInfoService periodePaysInfoService;
    private final IUserService userService;

    @Autowired
    public ConfigurationController(PeriodePaysInfoService periodePaysInfoService, IUserService userService) {
        this.periodePaysInfoService = periodePaysInfoService;
        this.userService = userService;
    }


    @GetMapping(path = "getPeriode")
    public @ResponseBody
    PeriodeModel getPeriode() {
        Optional<Periode> optionalPeriode = periodePaysInfoService.getActualPeriode();
        return optionalPeriode.map(PeriodeModel::new).orElse(null);
    }

    @GetMapping("downloadNotice")
    @ResponseBody
    public ClassPathResource downloadTemplate(FileUpload.Type fileType) {
        User user = userService.getLoggedInUser();
        return new ClassPathResource("file/notice/" + user.getLocale().name().toLowerCase() + ".pdf");
    }
}
package trinov.flw.services.service.localeService;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import trinov.flw.data.entity.user.User;
import trinov.flw.services.service.userService.IUserService;

import javax.annotation.Resource;
import java.util.Locale;

/**
 * Created by thibault
 * Date: 13/07/18
 * Time: 11:48
 */
@Service
public class LocaleService implements ILocaleService {
    @Resource
    private MessageSource messageSource;

    @Resource
    private IUserService userService;

    @Override
    public String getMessage(String key) {
        User user = userService.getLoggedInUser();
        return messageSource.getMessage(key, new Object[]{}, user.getLocale().getLocale());
    }
}

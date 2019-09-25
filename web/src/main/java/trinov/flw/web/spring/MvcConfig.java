package trinov.flw.web.spring;

/**
 * Created by thibault
 * Date: 08/06/18
 * Time: 10:11
 */
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/admin").setViewName("app");
        registry.addViewController("/login").setViewName("login");
        registry.addRedirectViewController("/", "pays");
        registry.addViewController("/error").setViewName("error/error");
        registry.addViewController("/403").setViewName("error/403");
    }
}
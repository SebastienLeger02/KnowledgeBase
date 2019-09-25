package trinov.flw.web; /**
 * Created by thibault
 * Date: 07/06/18
 * Time: 17:25
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;
import trinov.flw.services.ServicesConfiguration;
import trinov.flw.web.spring.TomcatConfig;

@Import({ServicesConfiguration.class, TomcatConfig.class})
@SpringBootApplication(scanBasePackages = "trinov.flw.web")
public class Application extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
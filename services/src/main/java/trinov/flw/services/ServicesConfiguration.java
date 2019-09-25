package trinov.flw.services;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.context.support.ResourceBundleMessageSource;
import trinov.flw.data.DataConfiguration;

/**
 * Created by thibault
 * Date: 07/06/18
 * Time: 19:14
 */
@Import({DataConfiguration.class})
@SpringBootApplication
public class ServicesConfiguration {
    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasenames("locale/message");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }
}

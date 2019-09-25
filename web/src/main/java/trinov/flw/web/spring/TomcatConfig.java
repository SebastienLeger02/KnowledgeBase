package trinov.flw.web.spring;

import org.apache.catalina.connector.Connector;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by thibault
 * Date: 26/06/18
 * Time: 11:33
 */
@Configuration
public class TomcatConfig {
    @Value("${tomcat.ajp.port}")
    private Integer ajpPort;


    @Bean
    public TomcatServletWebServerFactory servletContainer() {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
        Connector ajpConnector = new Connector("AJP/1.3");
        ajpConnector.setPort(ajpPort);
        tomcat.addAdditionalTomcatConnectors(ajpConnector);
        return tomcat;
    }
}

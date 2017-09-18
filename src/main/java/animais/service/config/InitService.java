package animais.service.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class InitService implements WebApplicationInitializer {

	public void onStartup(ServletContext servletContext) throws ServletException {
		ServletRegistration.Dynamic dispatcher = servletContext.addServlet("DispatcherServlet",
				new DispatcherServlet(this.getAppContext()));
		dispatcher.setLoadOnStartup(1);
		dispatcher.addMapping("/services/*");
	}

	private AnnotationConfigWebApplicationContext getAppContext() {
		AnnotationConfigWebApplicationContext appContext = new AnnotationConfigWebApplicationContext();
		appContext.register(ApplicationContextConfig.class);
		return appContext;
	}

}
package animais.service.config;

import javax.servlet.annotation.WebFilter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import animais.service.interceptor.AuthenticationInterceptor;

@EnableWebMvc
@Configuration
@WebFilter
public class InterceptorConfigService extends WebMvcConfigurerAdapter {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new AuthenticationInterceptor());
	}
}

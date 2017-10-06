package animais.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import animais.utils.SendHTMLEmail;

@Service
@RequestMapping("/email")
public class EmailService {

	@ResponseBody
	@RequestMapping(value = "/enviar", method = RequestMethod.GET)
	public void enviarEmail() {
		SendHTMLEmail email = new SendHTMLEmail("tonywmfreitas2@gmail.com");
		email.enviarEmail();
	}
	
}

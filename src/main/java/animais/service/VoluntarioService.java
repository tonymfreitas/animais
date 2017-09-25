package animais.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import animais.model.Usuario;
import animais.model.Voluntario;
import animais.model.base.IVoluntarioDAO;

@Service
@RequestMapping("/voluntario")
public class VoluntarioService {

	@Inject
	private IVoluntarioDAO voluntarioDao;

	@ResponseBody
	@RequestMapping(value = "/novo", method = RequestMethod.POST)
	public String novoVoluntario(@RequestBody String voluntario) {
		Gson gson = new Gson();
		Voluntario voluntarioMapeado = gson.fromJson(voluntario, Voluntario.class);
		Long id = voluntarioDao.adiciona(voluntarioMapeado);
		String json = gson.toJson(id);
		return json;
	}
	
	@ResponseBody
	@RequestMapping(value = "/consultar", method = RequestMethod.POST)
	public String consultarVoluntario(@RequestBody String usuario) {
		Gson gson = new Gson();
		Usuario usuarioMapeado = gson.fromJson(usuario, Usuario.class);
		Voluntario voluntarioConsultado = voluntarioDao.consultarVoluntario(usuarioMapeado);
		String json = gson.toJson(voluntarioConsultado);
		return json;
	}
	
}

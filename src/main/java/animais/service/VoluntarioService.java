package animais.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import animais.model.Voluntario;
import animais.model.base.IVoluntarioDAO;

@Service
@RequestMapping("/voluntario")
public class VoluntarioService {

	@Inject
	private IVoluntarioDAO voluntarioDao;

	@ResponseBody
	@RequestMapping(value = "/novo", method = RequestMethod.POST)
	public String novoUsuario(@RequestBody String voluntario) {
		Gson gson = new Gson();
		Voluntario voluntarioMapeado = gson.fromJson(voluntario, Voluntario.class);
		Long id = voluntarioDao.adiciona(voluntarioMapeado);
		String json = gson.toJson(id);
		return json;
	}
	
}

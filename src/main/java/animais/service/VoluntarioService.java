package animais.service;

import java.util.List;

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
	public Voluntario consultarVoluntario(@RequestBody Usuario usuario) {
		Voluntario voluntarioConsultado = voluntarioDao.consultarVoluntario(usuario);
		return voluntarioConsultado;
	}
	
	@ResponseBody
	@RequestMapping(value = "/listar", method = RequestMethod.GET)
	public List<Voluntario> listarVoluntarios() {
		List<Voluntario> voluntarios = voluntarioDao.lista();
		return voluntarios;
	}
	
}

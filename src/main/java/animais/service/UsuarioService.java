package animais.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import animais.model.Usuario;
import animais.model.base.IUsuarioDAO;

@Service
@RequestMapping("/usuario")
public class UsuarioService {

	@Inject
	private IUsuarioDAO usuarioDao;

	@ResponseBody
	@RequestMapping(value = "/novo", method = RequestMethod.POST)
	public String novoUsuario(@RequestBody String usuario) {
		Gson gson = new Gson();
		Usuario usuarioMapeado = gson.fromJson(usuario, Usuario.class);
		Long id = usuarioDao.adiciona(usuarioMapeado);
		String json = gson.toJson(id);
		return json;
	}

}

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
import animais.service.interceptor.TokenResponse;

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
		usuarioMapeado.setSenha(TokenResponse.gerarToken(usuarioMapeado.getSenha()));
		Long id = usuarioDao.adiciona(usuarioMapeado);
		String json = gson.toJson(id);
		return json;
	}
	
	@ResponseBody
	@RequestMapping(value = "/autenticar", method = RequestMethod.POST)
	public String autenticar(@RequestBody String usuario) {
		Gson gson = new Gson();
		Usuario usuarioMapeado = gson.fromJson(usuario, Usuario.class);
		usuarioMapeado.setSenha(TokenResponse.gerarToken(usuarioMapeado.getSenha()));
		Usuario usuarioConsultado = usuarioDao.consultarUsuario(usuarioMapeado);
		String json = gson.toJson(usuarioConsultado);
		return json;
	}
	
	@ResponseBody
	@RequestMapping(value = "/listar-informacoes", method = RequestMethod.POST)
	public String listarInformacoes(@RequestBody String usuario) {
		Gson gson = new Gson();
		Usuario usuarioMapeado = gson.fromJson(usuario, Usuario.class);
		Usuario usuarioConsultado = usuarioDao.busca(usuarioMapeado.getId());
		String json = gson.toJson(usuarioConsultado);
		return json;
	}

}

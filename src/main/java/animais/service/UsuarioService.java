package animais.service;

import java.io.IOException;
import java.sql.SQLException;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.postgresql.util.Base64;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

import animais.model.Usuario;
import animais.model.animal.Animal;
import animais.model.base.IUsuarioDAO;
import animais.service.interceptor.TokenResponse;

@Service
@RequestMapping("/usuario")
public class UsuarioService {

	@Inject
	private IUsuarioDAO usuarioDao;
	
	@ResponseBody
	@RequestMapping(value = "/novo", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String novoUsuario(@RequestParam("file") MultipartFile file, HttpServletRequest request) throws SQLException, IOException {
		
		ModelMap model = new ModelMap();
		model.putAll(request.getParameterMap());
		String usuarioJSON = ((String[]) model.get("usuario"))[0];
		
		Gson gson = new Gson();
		Usuario usuario = new Usuario();
		usuario = gson.fromJson(usuarioJSON, Usuario.class);
		String fotoString = Base64.encodeBytes(file.getBytes());
		usuario.setFoto(fotoString);
		usuario.setSenha(TokenResponse.gerarToken(usuario.getSenha()));
		Long id = usuarioDao.adiciona(usuario);

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

package animais.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

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
import animais.model.base.IAnimalDAO;
import animais.model.base.IUsuarioDAO;

@Service
@RequestMapping("/animal")
public class AnimalService {


	@Inject
	private IAnimalDAO amigoDao;
	
	@Inject
	private IUsuarioDAO usuarioDao;

	
	@ResponseBody
	@RequestMapping(value = "/novo", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String novoUsuario(@RequestParam("file") MultipartFile file, HttpServletRequest request) throws SQLException, IOException {
		
		ModelMap model = new ModelMap();
		model.putAll(request.getParameterMap());
		String animalJSON = ((String[]) model.get("animal"))[0];
		
		Gson gson = new Gson();
		Animal animal = new Animal();
		animal = gson.fromJson(animalJSON, Animal.class);
		String fotoString = Base64.encodeBytes(file.getBytes());
		animal.setFoto(fotoString);
		Long id = amigoDao.adiciona(animal);

		String json = gson.toJson(id);
		return json;
	}
	
	@ResponseBody
	@RequestMapping(value = "/listar-todos", method = RequestMethod.GET)
	public List<Animal> novoVoluntario() {
		List<Animal> animais = amigoDao.lista();
		return animais;
	}
	

	@ResponseBody
	@RequestMapping(value = "/buscar-tutor", method = RequestMethod.POST)
	public Usuario buscarTutor(@RequestBody Animal animal) {
		Usuario usuario = usuarioDao.consultarUsuarioTutor(animal.getUsuario().getId());
		return usuario;
	}

	
	
	
	
	
	
}
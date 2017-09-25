package animais.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import animais.model.Amigo;
import animais.model.base.IAmigoDAO;

@Service
@RequestMapping("/animal")
public class AnimalService {


	@Inject
	private IAmigoDAO amigoDao;

	@ResponseBody
	@RequestMapping(value = "/novo", method = RequestMethod.POST)
	public String novoAnimal(@RequestBody String amigo) {
		Gson gson = new Gson();
		Amigo amigoMapeado = gson.fromJson(amigo, Amigo.class);
		Long id = amigoDao.adiciona(amigoMapeado);
		String json = gson.toJson(id);
		return json;
	}
	
	
}
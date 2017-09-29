package animais.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import animais.model.animal.Animal;
import animais.model.animal.AnimalComentario;
import animais.model.base.IComentarioDAO;

@Service
@RequestMapping("/comentario")
public class ComentarioService {

	@Inject
	private IComentarioDAO comentarioDao;
	
	@ResponseBody
	@RequestMapping(value = "/inserir-comentario", method = RequestMethod.POST)
	public long inserirComentario(@RequestBody AnimalComentario comentario) {
		long adicionou= comentarioDao.adiciona(comentario);
		return adicionou;
	}
	
	@ResponseBody
	@RequestMapping(value = "/listar-comentarios", method = RequestMethod.POST)
	public List<AnimalComentario> listarComentarios(@RequestBody Animal animal) {
		return comentarioDao.listarComentariosPorAnimal(animal);
	}
	
}

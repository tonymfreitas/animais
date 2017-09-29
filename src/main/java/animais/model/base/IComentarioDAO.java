package animais.model.base;

import java.util.List;

import animais.model.animal.Animal;
import animais.model.animal.AnimalComentario;

public interface IComentarioDAO extends IDao<AnimalComentario, Long> {
	
	public List<AnimalComentario> listarComentariosPorAnimal(Animal animal);
	
}

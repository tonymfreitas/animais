package animais.model.base;

import animais.model.Usuario;
import animais.model.Voluntario;

public interface IVoluntarioDAO extends IDao<Voluntario, Long> {

	public Voluntario consultarVoluntario(Usuario usuario);
	
}

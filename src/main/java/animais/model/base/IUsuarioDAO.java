package animais.model.base;

import animais.model.Usuario;

public interface IUsuarioDAO extends IDao<Usuario, Long> {
	
	public Usuario consultarUsuario(Usuario usuario);
	
	public Usuario consultarUsuarioTutor(long id);
		
}	
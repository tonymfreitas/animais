package animais.model.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import animais.model.animal.AnimalComentario;
import animais.model.base.IComentarioDAO;

@Repository
public class ComentarioDAO implements IComentarioDAO {

	private final GenericDAO<AnimalComentario, Long> dao;

	@Autowired
	public ComentarioDAO(final SessionFactory factory) {
		dao = new GenericDAO<AnimalComentario, Long>(factory, AnimalComentario.class);
	}
	
	@Transactional
	public Long adiciona(AnimalComentario t) {
		return dao.adiciona(t);
	}

	@Transactional
	public void remove(AnimalComentario t) {
		// TODO Auto-generated method stub
		
	}

	@Transactional
	public void remove(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Transactional
	public AnimalComentario busca(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional
	public List<AnimalComentario> lista() {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional
	public void atualiza(AnimalComentario t) {
		// TODO Auto-generated method stub
		
	}

}

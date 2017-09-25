package animais.model.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import animais.model.Usuario;
import animais.model.Voluntario;
import animais.model.base.IVoluntarioDAO;

@Repository
public class VoluntarioDAO implements IVoluntarioDAO {

	private final GenericDAO<Voluntario, Long> dao;
	
	@Autowired
	public VoluntarioDAO(final SessionFactory factory) {
		dao = new GenericDAO<Voluntario, Long>(factory, Voluntario.class);
	}

	@Transactional
	public Long adiciona(Voluntario t) {
		return dao.adiciona(t);
	}

	@Transactional
	public void remove(Voluntario t) {
		dao.remove(t);
	}

	@Transactional
	public void remove(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Transactional
	public Voluntario busca(Long id) {
		Criteria criteria = dao.getCriteria();
		criteria.add(Restrictions.eq("id", id));
		return (Voluntario) criteria.uniqueResult();
	}

	@Transactional
	public List<Voluntario> lista() {
		return dao.lista();
	}

	@Transactional
	public void atualiza(Voluntario t) {
		dao.atualiza(t);
	}

	@Transactional
	public Voluntario consultarVoluntario(Usuario usuario) {
		Criteria criteria = dao.getCriteria();
		criteria.add(Restrictions.eq("usuario.id", usuario.getId()));
		return (Voluntario) criteria.uniqueResult();
	}
	
	



}

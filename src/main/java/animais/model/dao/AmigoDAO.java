package animais.model.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import animais.model.Amigo;
import animais.model.base.IAmigoDAO;

@Repository
public class AmigoDAO implements IAmigoDAO {

	private final GenericDAO<Amigo, Long> dao;

	@Autowired
	public AmigoDAO(final SessionFactory factory) {
		dao = new GenericDAO<Amigo, Long>(factory, Amigo.class);
	}

	@Transactional
	public Long adiciona(Amigo t) {
		return dao.adiciona(t);
	}

	@Transactional
	public void remove(Amigo t) {
		dao.remove(t);
	}

	@Transactional
	public void remove(Long id) {
		// TODO Auto-generated method stub

	}

	@Transactional
	public Amigo busca(Long id) {
		Criteria criteria = dao.getCriteria();
		criteria.add(Restrictions.eq("id", id));
		return (Amigo) criteria.uniqueResult();
	}

	@Transactional
	public List<Amigo> lista() {
		return dao.lista();
	}

	@Transactional
	public void atualiza(Amigo t) {
		dao.atualiza(t);
	}

}

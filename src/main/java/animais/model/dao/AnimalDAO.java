package animais.model.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import animais.model.animal.Animal;
import animais.model.base.IAnimalDAO;

@Repository
public class AnimalDAO implements IAnimalDAO {

	private final GenericDAO<Animal, Long> dao;

	@Autowired
	public AnimalDAO(final SessionFactory factory) {
		dao = new GenericDAO<Animal, Long>(factory, Animal.class);
	}

	@Transactional
	public Long adiciona(Animal t) {
		return dao.adiciona(t);
	}

	@Transactional
	public void remove(Animal t) {
		dao.remove(t);
	}

	@Transactional
	public void remove(Long id) {
		// TODO Auto-generated method stub

	}

	@Transactional
	public Animal busca(Long id) {
		Criteria criteria = dao.getCriteria();
		criteria.add(Restrictions.eq("id", id));
		Object obj = criteria.uniqueResult();
		Animal animalConsultado = new Animal();
		try {
			animalConsultado = (Animal) obj;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return animalConsultado;
	}

	@Transactional
	public List<Animal> lista() {
		return dao.lista();
	}

	@Transactional
	public void atualiza(Animal t) {
		dao.atualiza(t);
	}

}

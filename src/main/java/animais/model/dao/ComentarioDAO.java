package animais.model.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import animais.model.Usuario;
import animais.model.animal.Animal;
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

	@SuppressWarnings("unchecked")
	@Transactional
	public List<AnimalComentario> listarComentariosPorAnimal(Animal animal) {	
		Criteria criteria = dao.getCriteria();
		ProjectionList projList = Projections.projectionList();
		projList.add(Projections.property("id"), "id");
		projList.add(Projections.property("texto"), "texto");
		projList.add(Projections.property("usuario"), "usuario");
		projList.add(Projections.property("dtCadastro"), "dtCadastro");
		criteria.setProjection(projList);
		criteria.add(Restrictions.eq("animal.id", animal.getId()));
		criteria.setResultTransformer(Transformers.aliasToBean(AnimalComentario.class));
		return criteria.list();
	}

}

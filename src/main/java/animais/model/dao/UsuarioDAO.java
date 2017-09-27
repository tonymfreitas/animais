package animais.model.dao;

import java.util.Arrays;
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
import animais.model.base.IUsuarioDAO;

@Repository
public class UsuarioDAO implements IUsuarioDAO {

	private final GenericDAO<Usuario, Long> dao;

	@Autowired
	public UsuarioDAO(final SessionFactory factory) {
		dao = new GenericDAO<Usuario, Long>(factory, Usuario.class);
	}

	@Transactional
	public Long adiciona(Usuario t) {
		return dao.adiciona(t);
	}

	@Transactional
	public void remove(Usuario t) {
		dao.remove(t);
	}

	@Transactional
	public Usuario busca(Long id) {
		Criteria criteria = dao.getCriteria();
		criteria.add(Restrictions.eq("id", id));
		return (Usuario) criteria.uniqueResult();
	}

	@Transactional
	public List<Usuario> lista() {
		return dao.lista();
	}

	@Transactional
	public void atualiza(Usuario t) {
		dao.atualiza(t);
	}

	@Transactional
	public void remove(Long id) {
		dao.remove(id);
	}

	@Transactional
	public Usuario consultarUsuario(Usuario usuario) {
		Criteria criteria = dao.getCriteria();
		ProjectionList projList = Projections.projectionList();
		projList.add(Projections.property("usuario"), "usuario");
		projList.add(Projections.property("id"), "id");
		projList.add(Projections.property("senha"), "senha");
		criteria.setProjection(projList);
		criteria.add(Restrictions.eq("usuario", usuario.getUsuario()));
		criteria.add(Restrictions.eq("senha", usuario.getSenha()));
		criteria.setResultTransformer(Transformers.aliasToBean(Usuario.class));
		Usuario usuarioConsultado = (Usuario) criteria.uniqueResult();
		return usuarioConsultado;
	}

}

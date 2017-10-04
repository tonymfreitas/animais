package animais.model;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
public class Voluntario {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	
	@Column(name="interesse", nullable=false)
	private String interesse;
	
	@OneToOne
	@JoinColumn(name = "idusuario", unique = true)
	private Usuario usuario;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	private ArrayList<String> categorias;
	
	public long getId() {
		return id;
	}
	
	public Usuario getUsuario() {
		return usuario;
	}
	
	public void setUsuario(long id) {
		this.usuario.setId(id);
	}
	
	public void setCategorias(ArrayList<String> categorias) {
		this.categorias = categorias;
	}
	
	public ArrayList<String> getCategorias() {
		return categorias;
	}
	
	public void setInteresse(String interesse) {
		this.interesse = interesse;
	}
	
	public String getInteresse() {
		return interesse;
	}
}

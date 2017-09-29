package animais.model.animal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import animais.model.Usuario;

@Entity
@Table(name = "comentario")
public class AnimalComentario {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;

	@ManyToOne
	@JoinColumn(name = "idusuario")
	private Usuario usuario;

	@ManyToOne	
	@JoinColumn(name = "idanimal")
	private Animal animal;

	private String texto;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	public Animal getAnimal() {
		return animal;
	}
	
	public void setAnimal(Animal animal) {
		this.animal = animal;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

}

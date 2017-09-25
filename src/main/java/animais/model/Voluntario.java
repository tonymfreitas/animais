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
	
}

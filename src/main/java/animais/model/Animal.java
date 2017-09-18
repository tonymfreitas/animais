package animais.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Animal {

	@Id
	private long id;
	
	private String nome;
	private String raca;
	
	public Animal() {}
	
	public Animal(String nome, String raca) {
		this.nome = nome;
		this.raca = raca;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}
	
}

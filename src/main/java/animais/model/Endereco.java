package animais.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Endereco {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	
	@Column(name="descricao", nullable=false)
	private String descricao;
	
	@Column(name="cidade", nullable=false)
	private String cidade;
	
	@Column(name="bairro", nullable=false)
	private String bairro;
	
	@Column(name="cep", nullable=false)
	private String cep;
	
	public Endereco() {}
	
}

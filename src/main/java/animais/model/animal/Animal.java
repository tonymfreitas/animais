package animais.model.animal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import animais.model.Usuario;

@Entity
public class Animal {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	
	@OneToOne
	@JoinColumn(name = "idusuario", unique = true)
	private Usuario usuario;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL, mappedBy="animal")
	private List<AnimalComentario> comentarios = new ArrayList<>();
	
	@Column(name="nome", length=150)
	private String nome;
	
	@Column(name="raca", length=100)
	private String raca;
	
	@Column(name="cor", length=50)
	private String cor;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dtnascimento;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dtcadastro;
	
	@Column(name="sexo", length=10)
	private String sexo;
	
	private String observacao;
	private double peso;
	
	@Column(name="foto", length=10000000)
	private String foto;
	
	
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
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
	public String getCor() {
		return cor;
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	public Date getDtnascimento() {
		return dtnascimento;
	}
	public void setDtnascimento(Date dtnascimento) {
		this.dtnascimento = dtnascimento;
	}
	public Date getDtCadastro() {
		return dtcadastro;
	}
	public void setDtCadastro(Date dtcadastro) {
		this.dtcadastro = dtcadastro;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public String getObservacao() {
		return observacao;
	}
	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}
	public double getPeso() {
		return peso;
	}
	public void setPeso(double peso) {
		this.peso = peso;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	
	public List<AnimalComentario> getComentarios() {
		return comentarios;
	}
	
	public void setComentarios(List<AnimalComentario> comentarios) {
		if(!Objects.isNull(comentarios) && !comentarios.isEmpty()) {
			this.comentarios = comentarios;
			for(AnimalComentario comentario : this.comentarios) {
				comentario.setAnimal(this.id);
			}
		}
	}
	
}

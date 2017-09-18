package animais.model.base;

import java.io.Serializable;
import java.util.List;

public interface IDao<T, PK extends Serializable> {
	public PK adiciona(final T t);

	public void remove(final T t);

	public void remove(final PK id);

	public T busca(final PK id);

	public List<T> lista();

	public void atualiza(final T t);
}

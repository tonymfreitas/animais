package animais.service.interceptor;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class AuthenticationInterceptor extends HandlerInterceptorAdapter {
	@SuppressWarnings({ "null", "static-access" })
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object controller)
			throws Exception {

		final String CAMINHO_NOVO_USUARIO = "/services/usuario/novo";
		final String CAMINHO_AUTENTICAR_USUARIO = "/services/usuario/autenticar";

		boolean caminhoNovoUsuario = request.getRequestURI().equals(CAMINHO_NOVO_USUARIO);
		boolean caminhoAutenticarUsuario = request.getRequestURI().equals(CAMINHO_AUTENTICAR_USUARIO);

		String header = request.getHeader("Authorization");

		if (header == null && header.startsWith("Bearer ")) {
			throw new ServletException("Token inexistente ou inválido");
		}

		String token = header.substring(7);

		if (!token.equals("null")) {
			TokenResponse.validarToken(token);
			return true;
		} else {
			boolean caminhosLivres = !caminhoNovoUsuario && !caminhoAutenticarUsuario;
			if (caminhosLivres) {
				response.sendError(response.SC_UNAUTHORIZED, "Usuário não autenticado");
				return false;
			} else {
				return true;
			}
		}

	}
}
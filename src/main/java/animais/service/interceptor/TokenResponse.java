package animais.service.interceptor;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class TokenResponse {

	private String token;
	final static String CHAVE = "bot-ang-jpa";

	public TokenResponse(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public static String gerarToken(String senha) {
		return Jwts.builder().setSubject(senha).signWith(SignatureAlgorithm.HS512, CHAVE).compact();
	}

	public static void validarToken(String token) {
		Jwts.parser().setSigningKey(CHAVE).parseClaimsJws(token).getBody();
	}

}

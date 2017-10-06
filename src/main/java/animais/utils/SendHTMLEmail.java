package animais.utils;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;

public class SendHTMLEmail {

	final String fromEmail = "ssportsgo@gmail.com";
	final String password = "sportsgoiania";
	String toEmail = "";

	public SendHTMLEmail(String toEmail) {
		this.toEmail = toEmail;
	}

	public Properties getPropriedades() {
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		props.put("mail.smtp.ssl.enable", "true");
		props.put("mail.transport.protocol", "smtp");
		return props;
	}

	public String textoEmail() {
		StringBuilder builder = new StringBuilder();
		builder.append("Bem vindo! Obrigado por se cadastrar. \n\n");
		return builder.toString();
	}

	/*
	 * public static void main(String[] args) { SendHTMLEmail email = new
	 * SendHTMLEmail("tonywmfreitas2@gmail.com"); email.enviarEmail("tony", "1"); }
	 */

	public void enviarEmail() {
		Properties props = getPropriedades();
		Authenticator auth = new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(fromEmail, password);
			}
		};

		Session session = Session.getDefaultInstance(props, auth);
		EmailUtil.sendEmail(session, toEmail, "PR�-CADASTRO SPORTSGO", textoEmail());
	}

}

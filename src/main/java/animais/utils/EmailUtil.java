package animais.utils;

import java.util.Date;

import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class EmailUtil {

	public static void sendEmail(Session session, String toEmail, String subject, String body) {

		try {
			MimeMessage msg = new MimeMessage(session);

			msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
			msg.addHeader("format", "flowed");
			msg.addHeader("Content-Transfer-Encoding", "8bit");

			msg.setFrom(new InternetAddress("ssportsgo@gmail.com"));

			msg.setReplyTo(InternetAddress.parse("tonywmfreitas2@gmail.com", false));
			msg.setSubject(subject, "UTF-8");
			// msg.setText(body, "UTF-8");
			msg.setSentDate(new Date());
			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail, false));
			msg.setContent(gerarEmail(body));
			System.out.println("Message is ready");
			Transport.send(msg);

			System.out.println("EMail Sent Successfully!!");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static Multipart gerarEmail(String body) {
		try {
			BodyPart messageBodyPart = new MimeBodyPart();
			messageBodyPart.setText(body);

			Multipart multipart = new MimeMultipart();

			multipart.addBodyPart(messageBodyPart);

			messageBodyPart = new MimeBodyPart();
			//String filename = "src/main/webapp/lib/img/logo.png";
			//DataSource source = new FileDataSource(filename);
			//messageBodyPart.setDataHandler(new DataHandler(source));
			//messageBodyPart.setFileName(filename);

			//messageBodyPart.setHeader("Content-ID", "image_id");
			multipart.addBodyPart(messageBodyPart);

			messageBodyPart = new MimeBodyPart();
			messageBodyPart.setContent(""
					+ "<a href=\"\">"
					+ "<h1>MUNDO ANIMAL</h1>"
					+ "</a>" 
					+ "<p>Bem vindo ao mundo animal!!!</p>", "text/html");
			multipart.addBodyPart(messageBodyPart);
			return multipart;
		} catch (MessagingException e) {
			e.printStackTrace();
			throw new RuntimeException("Falha ao gerar a imagem do email");
		}
	}
}
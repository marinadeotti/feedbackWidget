import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8adba1f91d7400",
      pass: "a16a693064e051"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Marina Deotti <marinadeotti@icloud.com>',
        subject,
        html: body,
    })

   };
}
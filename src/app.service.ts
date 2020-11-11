import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  constructor(private readonly mailerService: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }

  public contacEmail(params: any): Promise<void> {
    return this
      .mailerService
      .sendMail({
        to: 'mavescholars@gmail.com', // list of receivers
        from: params.email, // sender address
        subject: 'Query from Maven Scholars', // Subject line
        // text: 'welcome', // plaintext body
        html: `
        <h1>Contact Number: ${params.contact}</h1>
        <br>
        <h1>Email: ${params.email}</h1>
        <br>
        <h1>Query: ${params.query} </h1>`, // HTML body content
      });
  }
}

import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('contact')
    public async contactEmail(@Body() params: any, @Res() res: any): Promise<any> {
    const response = await this.appService.contacEmail(params);
    console.log(response);
    const successResponse: any = {
      status: 1,
      message: 'Query sent successfully',
    };
    return res.status(200).send(successResponse);
  }
}

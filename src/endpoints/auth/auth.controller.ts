import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register on the platform to log in' })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() credentialsDto: CredentialsAuthDto) {
    return this.authService.register(credentialsDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in with your credentials' })
  @HttpCode(HttpStatus.OK)
  login(@Body() credentialsDto: CredentialsAuthDto) {
    return this.authService.login(credentialsDto);
  }
}

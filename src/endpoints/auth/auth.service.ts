import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { hashEncode, hashMatches } from 'src/utils/encoder';
import type { User } from './type/auth';

const userList: Array<User> = [];

@Injectable()
export class AuthService {
  async register(credentialsDto: CredentialsAuthDto): Promise<string> {
    const { email, password: pwd } = credentialsDto;

    const isExists = userList.some((u) => u.email === email);
    if (isExists) return 'Otro usuario ya está registrado con ese correo';
    const password = await hashEncode(pwd);

    userList.push({
      email,
      password,
    });

    return 'Usuario registrado exitosamente';
  }

  async login(credentialsDto: CredentialsAuthDto): Promise<string> {
    const { email, password: pwd } = credentialsDto;

    const user = userList.find((u) => u.email === email);
    if (user == null) throw new NotFoundException('Usuario no encontrado');

    const isPasswordValid = await hashMatches(pwd, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Contraseña incorrecta');

    return 'Inicio de sesión exitoso';
  }
}

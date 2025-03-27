import { Module } from '@nestjs/common';
import { AuthModule } from './endpoints/auth/auth.module';
import { RootModule } from './endpoints/root/root.module';

@Module({
  imports: [AuthModule, RootModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

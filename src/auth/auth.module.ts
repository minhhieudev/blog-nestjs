import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global:true,
      secret:'123456',
      signOptions:{expiresIn:'1h'}
    }),
    ConfigModule.forRoot(), // Thêm ConfigModule vào imports
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

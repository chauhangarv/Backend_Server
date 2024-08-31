import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
  @UseGuards(JwtAuthGuard)  // Protect this route with JWT
  @Get()
  getProfile(@Request() req) {
    return req.user;  // req.user contains the user info from the JWT
  }
}

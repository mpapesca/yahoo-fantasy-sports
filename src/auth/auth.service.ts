import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  get(): string {
    return 'hello auth';
  }
}

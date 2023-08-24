import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ErrorMessage } from '../enum/errors.enum';


@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * 
   * @param context 
   * @returns boolean
   */
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
          throw new UnauthorizedException(ErrorMessage.TOKEN_REQUIRED);
        }
        request.user = await this.validateToken(request.headers.authorization);
        return true;
      }
    
      async validateToken(auth: string) {

        if (auth.split(' ')[0] !== 'Bearer') {
          throw new UnauthorizedException(ErrorMessage.INVALID_TOKEN);
        }
    
        const token = auth.split(' ')[1];
    
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
          return decoded;
        } catch (err) {
          throw new UnauthorizedException(ErrorMessage.TOKEN_EXPIRED);
        }

      }

  }
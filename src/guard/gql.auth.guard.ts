import { Injectable, CanActivate, ExecutionContext, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { InvalidTokenException } from '../exception/invalid-token.exception';
import { ErrorMessage } from '../enum/errors.enum';
import { GqlExecutionContext } from '@nestjs/graphql';


@Injectable()
export class GraphQLAuthGuard implements CanActivate {
  /**
   * 
   * @param context 
   * @returns boolean
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    if (!request.headers.authorization) {
      throw new InvalidTokenException('Token Required', HttpStatus.FORBIDDEN, HttpStatus.FORBIDDEN);
    }
    request.user = await this.validateToken(request.headers.authorization);
    return true;
  }

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new InvalidTokenException('Invalid Token', HttpStatus.FORBIDDEN, HttpStatus.FORBIDDEN);
    }
    const token = auth.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return decoded;
    } catch (err) {
      throw new InvalidTokenException('Token expired', HttpStatus.FORBIDDEN, HttpStatus.FORBIDDEN);
    }
  }

}
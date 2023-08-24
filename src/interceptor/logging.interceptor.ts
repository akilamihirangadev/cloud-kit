import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { register, Counter } from 'prom-client';

export const httpRequestLoggerCounter = new Counter({
    name: 'app_logging_requests_total',
    help: 'Total number of Logger requests to all endpoints',
});

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggingInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        if (context.getType() === 'http') {
            return this.logHttpCall(context, next);
        }
    }

    private logHttpCall(context: ExecutionContext, next: CallHandler) {
        httpRequestLoggerCounter.inc();

        const request = context.switchToHttp().getRequest();
        const userAgent = request.get('user-agent') || '';
        const { ip, method, path: url } = request;
        const correlationKey = uuidv4();
        const userId = request.user?.userId;
        const upperMethod = method.toUpperCase();
        // this.logger.log(
        //     `[${correlationKey}] ${method} ${url} ${userId} ${userAgent} ${ip}: ${context.getClass().name} ${context.getHandler().name}`,
        // );

        if (['POST', 'PUT', 'PATCH'].includes(upperMethod)) {
            const now = Date.now();
            return next.handle().pipe(
                tap(() => {
                    const response = context.switchToHttp().getResponse();

                    const { statusCode } = response;
                    const contentLength = response.get('content-length');
                    this.logger.verbose('This is a verbose message');
                    this.logger.log(
                        `[${correlationKey}] ${upperMethod} ${url} ${statusCode} ${contentLength}: ${Date.now() - now}ms`,
                    );
                }),
            );

            

        } else if(upperMethod == 'GET') {
            return next.handle();
        } else {
            return next.handle();
        }
    }
}

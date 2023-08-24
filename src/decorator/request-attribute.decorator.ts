import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GatewayReference } from '../dto/gateway.array';
import { UtilManager } from '../util/manager.util';

export const CloudConnectBindingResult = createParamDecorator((data: unknown, context: ExecutionContext) => {

  let req = context.switchToHttp().getRequest();
  return new GatewayReference(
    UtilManager.getRandomString(),
    req.method,
    {
      'host':req.headers && req.headers['host'] ?  req.headers['host'] : '',
      'mode':req.headers && req.headers['mode'] ?  req.headers['mode'] : '',
      'callback-url':req.headers && req.headers['callback-url'] ?  req.headers['callback-url'] : ''
    },
    UtilManager.getCurrentTime()
  );
});
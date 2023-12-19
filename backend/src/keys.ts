import { BindingKey } from '@loopback/context';
import { TokenService } from '@loopback/authentication';

export namespace TokenServiceBindings {
  export const TOKEN_SERVICE = BindingKey.create<TokenService>('services.token.service');
}

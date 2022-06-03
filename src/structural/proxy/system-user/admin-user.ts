import {
  SystemUserAdressProtocol,
  SystemUserProtocol,
} from './system-user.protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  async getAddresses(): Promise<SystemUserAdressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Rua dos bobos', number: 123 },
          { street: 'Rua dos lobos', number: 654 },
        ]);
      }, 2000);
    });
  }
}

import { AdminUser } from './admin-user';
import {
  SystemUserAdressProtocol,
  SystemUserProtocol,
} from './system-user.protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAdressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  private async createUserAdressses(
    realUser: SystemUserProtocol,
  ): Promise<SystemUserAdressProtocol[]> {
    if (this.realUserAddresses === null) {
      this.realUserAddresses = await realUser.getAddresses();
    }

    return this.realUserAddresses;
  }

  async getAddresses(): Promise<SystemUserAdressProtocol[]> {
    this.realUser = this.createUser();
    this.realUserAddresses = await this.createUserAdressses(this.realUser);
    return this.realUserAddresses;
  }
}

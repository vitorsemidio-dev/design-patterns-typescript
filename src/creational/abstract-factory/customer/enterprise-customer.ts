import { CustomerProtocol } from './customer-protocol';

export class EnterpriseCustomer implements CustomerProtocol {
  constructor(public name: string) {
    this.name = `${this.name}[${EnterpriseCustomer.name}]`;
  }
}

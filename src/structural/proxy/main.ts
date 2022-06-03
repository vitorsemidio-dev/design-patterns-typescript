import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Jane', 'jane');
  console.log(`Carregando dados de ${user.userName}(${user.firstName})`);
  console.log('Isso vai levar 2 segundo para carregar os endereços');
  console.log(await user.getAddresses());

  console.log('Isso vai se repetir, pois o proxy já carregou os endereços');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();

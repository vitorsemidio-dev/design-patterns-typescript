import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { EmailValidatorProtocol } from './validation/email-validator-protocol';

function validaEmail(email: string, protocol: EmailValidatorProtocol): void {
  if (protocol.isValid(email)) {
    console.log(`Email ${email} é válido!`);
  } else {
    console.log(`Email ${email} é inválido!`);
  }
}

const testEmails: string[] = [
  'email',
  'email@email',
  'email@email.com',
  'abc123@email.com',
];

const emailValidatorClassAdapter = new EmailValidatorClassAdapter();

testEmails.forEach((email) => validaEmail(email, emailValidatorClassAdapter));

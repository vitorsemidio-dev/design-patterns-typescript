import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  email: string,
  protocol: EmailValidatorProtocol,
): void {
  if (protocol.isValid(email)) {
    console.log(`Email ${email} é válido! (class)`);
  } else {
    console.log(`Email ${email} é inválido! (class)`);
  }
}

function validEmailFn(email: string, protocol: EmailValidatorFnProtocol): void {
  if (protocol(email)) {
    console.log(`Email ${email} é válido! (fn)`);
  } else {
    console.log(`Email ${email} é inválido! (fn)`);
  }
}

const testEmails: string[] = [
  'email',
  'email@email',
  'email@email.com',
  'abc123@email.com',
];

const emailValidatorClassAdapter = new EmailValidatorClassAdapter();

console.log('### Validando emails com class adapter ###');
testEmails.forEach((email) =>
  validaEmailClass(email, emailValidatorClassAdapter),
);

console.log('\n\n### Validando emails com fn adapter ###');
testEmails.forEach((email) => validEmailFn(email, emailValidatorFnAdapter));

export interface EmailValidatorProtocol {
  isValid: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol {
  (email: string): boolean;
}

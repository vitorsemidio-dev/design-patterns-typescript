export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;

  printResultValidation(value: unknown): void {
    console.log(value, this.validate(value));
  }
}

export class ValidateEmailLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateStringLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumberLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

export class ValidateDigitLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

export class ValidationComposite extends ValidationComponent {
  private readonly _children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    return this._children.every((child) => child.validate(value));
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this._children.push(validation));
  }
}

// Leafs
const validateDigit = new ValidateDigitLeaf();
const validateEmail = new ValidateEmailLeaf();
const validateNumber = new ValidateNumberLeaf();
const validateString = new ValidateStringLeaf();

// Composite
const validationDigitAndStringComposite = new ValidationComposite();
validationDigitAndStringComposite.add(validateString, validateDigit);

// Values to Test
const valuesToTestValidation = [123, 'emailinvalido', 'a@a', '123', '1 folha'];

console.log('\nvalidationDigitAndStringComposite');
valuesToTestValidation.forEach((valueToTest) => {
  validationDigitAndStringComposite.printResultValidation(valueToTest);
});

console.log('\nvalidateEmail');
valuesToTestValidation.forEach((valueToTest) => {
  validateEmail.printResultValidation(valueToTest);
});

console.log('\nvalidateNumber');
valuesToTestValidation.forEach((valueToTest) => {
  validateNumber.printResultValidation(valueToTest);
});

import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[equalTo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualValidatorDirective,
      multi: true,
    },
  ],
})
export class EqualValidatorDirective implements Validator {
  @Input('equalTo') equalTo!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const otherControl = control.root.get(this.equalTo);

    if (otherControl && control.value !== otherControl.value) {
      return { equalTo: true };
    }

    return null;
  }
}

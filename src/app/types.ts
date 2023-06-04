import { FormControl } from '@angular/forms';

interface ValueFormModel {
  inputValue: string;
}

type ModelToForm<T> = {
  [key in keyof T]: FormControl<T[key]>;
}

export type ValueForm = ModelToForm<ValueFormModel>;

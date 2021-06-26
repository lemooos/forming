import {
  DynamicFormDataByNameState,
  ChangeFunction,
} from '../types';

export interface FormContextSchema {
  values: DynamicFormDataByNameState;
  initialValues?: DynamicFormDataByNameState;
  hasInjectedInitials: boolean;
  change: ChangeFunction<any>;
};

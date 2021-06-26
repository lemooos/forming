import * as React from "react";
import { FormContextSchema } from "./formContext/types";

export type ChangeFunction<E> = (fieldName: string, value: E) => void;

export type OnChangeCallback<E> = (
  fieldName: string,
  value: E,
  previous: E
) => void;

export type OnSubmitCallback<Schema = Record<string, any>> = (
  values: Schema
) => void;

export type FormChildrenProps = FormContextSchema;

export type FormProps<Schema extends Object = Record<string, any>> = {
  initialValues?: Schema;
  onSubmit: OnSubmitCallback<Schema>;
  onChange?: OnChangeCallback<any>;
  children: (
    formChildrenProps: FormChildrenProps
  ) => React.ReactElement<any, any>;
};

export type DynamicFormDataByNameState<Schema = Record<string, any>> = Schema;

import * as React from 'react';
import {FormContextSchema} from './formContext/types';
import {
  FormProps,
  DynamicFormDataByNameState,
  ChangeFunction,
} from './types';
import FormContext from './formContext/formContext';

const Form: React.FunctionComponent<FormProps> =
  ({
    children,
    initialValues,
    onSubmit,
    onChange,
  }) => {
    const [dynamicFormDataByNameState, updateFormDataByNameState] =
      React.useState<DynamicFormDataByNameState>({});
    const [hasInjectedInitials, warnInjectedInitials] =
      React.useState<boolean>(false);

    const change: ChangeFunction<any> = (fieldName, value) =>
      updateFormDataByNameState((previousState) => {
        if (typeof onChange === 'function') {
          const previous = previousState[fieldName];
          onChange(fieldName, value, previous);
        }

        return {
          ...previousState,
          [fieldName]: value,
        };
      });

    const contextSchema: FormContextSchema = {
      change,
      initialValues,
      values: dynamicFormDataByNameState,
      hasInjectedInitials,
    };

    const handleSubmit = React.useCallback((
        event?: React.FormEvent<HTMLFormElement>,
    ): void => {
      if (!event) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
              '[Forming] <Form /> The event could not be caught ' +
            ' onsubmit from the form native tag.',
          );
        }

        return;
      }

      onSubmit(dynamicFormDataByNameState as any);
    }, [onSubmit]);

    React.useMemo((): void => {
      if (initialValues) {
        updateFormDataByNameState(initialValues);
        warnInjectedInitials(true);
      }
    }, [initialValues]);

    return (
      <FormContext.Provider value={contextSchema}>
        <form onSubmit={handleSubmit} noValidate>
          {children(contextSchema)}
        </form>
      </FormContext.Provider>
    );
  };

export default Form;

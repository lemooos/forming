import * as React from 'react';

import useForm from '../Form/formContext/hooks/useForm/useForm';
import {FieldProps} from './types';

const Field: React.FunctionComponent<FieldProps> =
  ({
    name,
    onChange,
    initialValue,
    children,
    format,
    parse
  }) => {
  const form = useForm();
  const inputRef = React.useRef<HTMLElement>();

  const [value, updateInternalValue] = React.useState<any>(initialValue);
  // this is any 'cause we can't identify for now which
  // type the upper-scale developer gives in his
  // implementation. As said. For now.  \_(0_0)_/

  const onKeyUp = (
    event?: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    if (!event) {
      return;
    }

    const origin = event.currentTarget.value;
    let target = value;

    if (typeof format === 'function') {
      target = format(origin);
    }

    event.currentTarget.value = target;
    event.currentTarget.setPointerCapture
  };

  const change = (value: any) =>
    updateInternalValue((previous: any) => {
      let v = value;

      if (typeof parse === 'function') {
        v = parse(value);
      }

      if (typeof onChange === 'function') {
        onChange(v, previous);
      }
      return v;
    });

  React.useMemo((): void => {
    try {
      form.change(name, value);
    } catch (err) {
      if (err && process.env.NODE_ENV !== 'production') {
        console.error(
          '[Forming] <Field /> caught an error on trying' +
          ' to`change` an information inside the form schema'
        );
      }
    }
  }, [value]);

  if (typeof form === 'undefined') {
    throw new Error(
        '[Forming] <Field /> could not find a ' +
      `form over the Field named "${name}"`,
    );
  }

  return (
    <>
      {children({
        value,
        change,
        onKeyUp,
        ref: inputRef as React.LegacyRef<HTMLElement>,
      })}
    </>
  );
};

export default Field;

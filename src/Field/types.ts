import * as React from 'react';
import {UnreliableNullable} from '../types';

export type FieldChildrenFunctionAsChildComponentProps<
  T,
  E extends HTMLElement
> = {
  /**
   * Value currently stored inside the <Field />. This
   * may or not be used as the value onscreen. It is
   * exclusively determined by the upper-scale developer's
   * implementation.
   */
  value?: UnreliableNullable<T>;

  /**
   * Event fired uniquely to trigger and set a new value
   * into the <Field />'s internal manipulation.
   */
  change: (value: T) => void;

  /**
   *
   */
  onKeyUp: (event?: React.FormEvent) => void;

  /**
   *
   */
  ref?: React.LegacyRef<E>;
};

export type FieldProps<T = string, E extends HTMLElement = HTMLElement> = {
  /**
   * The unique identifier of the field since the input
   * is rendered in DOM.
   */
  name: string;

  /**
   * Event listener which may be used to observe the
   * change of value of the field.
   */
  onChange?: (data: T, previous?: T) => void;

  /**
   * Determine, when needed, an initial value for the
   * component to fall back into it and apply it into
   * the input value relation in case of no value
   * referred.
   */
  initialValue?: UnreliableNullable<T>;

  /**
   * The children hereby works as a gateway from the
   * information from the <Field /> to be handled outside
   * on the
   */
  children: (
    fieldChildrenFunctionAsChildComponentProps: FieldChildrenFunctionAsChildComponentProps<
      T,
      E
    >
  ) => React.ReactElement<any, any>;

  /**
   *
   */
  parse?: (value?: UnreliableNullable<string>) => T;

  /**
   *
   */
  format?: (value?: UnreliableNullable<T>) => string;
};

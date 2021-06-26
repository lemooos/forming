import {createContext} from 'react';
import {FormContextSchema} from './types';

const FormContext = createContext({} as FormContextSchema);

export default FormContext;

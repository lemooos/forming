import { useContext } from "react";

import FormContext from "../../formContext";
import { FormContextSchema } from "../../types";

const useForm = (): FormContextSchema => {
  const context = useContext(FormContext);

  return context;
};

export default useForm;

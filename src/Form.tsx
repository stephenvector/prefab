import React, { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";

interface FormContextShape {
  values: {
    [key: string]: any;
  };
  setValue: (key: string, value: any) => void;
}

const FormContext = createContext<FormContextShape>({
  setValue: () => {},
  values: {}
});

interface FormProps<T> {
  children: React.ReactNode;
  onSubmit: (v: T) => Promise<void> | void;
  initialValues: T;
}

export default function Form<T>(props: FormProps<T>) {
  const { children, onSubmit, initialValues } = props;
  const [values, setValues] = useState<T>(() => initialValues);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(values);
    },
    [values]
  );

  const setValue = useCallback(
    (key: string, value: any) => {
      setValues({
        ...values,
        [key]: value
      });
    },
    [values]
  );

  return (
    <FormContext.Provider value={{ values, setValue }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
}

export function useField(name: string) {
  const { values, setValue } = useContext(FormContext);

  const handleChange = useCallback(
    (newValue: any) => {
      setValue(name, newValue);
    },
    [name]
  );

  return {
    onChange: handleChange,
    value: values[name]
  };
}

export function useForm() {
  return useContext(FormContext);
}

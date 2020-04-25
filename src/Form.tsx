import React, { createContext, useCallback, useContext, useState } from "react";

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
    [values, onSubmit]
  );

  const setValue = useCallback(
    (key: string, value: any) => {
      setValues({
        ...values,
        [key]: value
      });
    },
    [values, setValues]
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
    [name, setValue]
  );

  return {
    onChange: handleChange,
    value: values[name]
  };
}

export function useForm() {
  return useContext(FormContext);
}

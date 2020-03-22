import React from "react";
import { Formik, Form as FormikForm } from "formik";

interface FormProps<T> {
  children: React.ReactNode;
  onSubmit: (v: T) => Promise<void>;
  initialValues: T;
}

export default function Form<T>(props: FormProps<T>) {
  const { children, onSubmit, initialValues } = props;

  return (
    <Formik<T> onSubmit={onSubmit} initialValues={initialValues}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

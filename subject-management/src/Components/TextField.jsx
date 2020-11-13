import React from "react";
import { useField } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = (props) => {
  const [field, meta] = useField(props.name);
  console.log(field.value);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <MuiTextField
      helperText={errorText}
      error={!!errorText}
      {...props}
      {...field}
    ></MuiTextField>
  );
};

export default TextField;

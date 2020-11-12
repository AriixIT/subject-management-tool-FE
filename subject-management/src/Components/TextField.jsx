import React from "react";
import { useField } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = (props) => {
  const [field, meta] = useField(props.name);
  console.log(field);
  const errorText = meta.error && meta.touched ? meta.error : "";

  if (field.value) {
    return (
      <MuiTextField
        helperText={errorText}
        error={!!errorText}
        {...props}
        {...field}
      >
        {field.value}
      </MuiTextField>
    );
  } else {
    return <div></div>;
  }
};

export default TextField;

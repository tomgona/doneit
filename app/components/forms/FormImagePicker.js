import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../lists/ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;

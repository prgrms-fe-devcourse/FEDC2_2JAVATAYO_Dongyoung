import { relative } from "path";
import { useState } from "react";
import ImageUpload from ".";

export default {
  title: "Component/ImageUpload",
  component: ImageUpload
};

export const Default = () => {
  const [file, setFile] = useState<File>(null);

  return (
    <>
      <img src={file ? URL.createObjectURL(file) : ""} alt="" width="40%" />
      <ImageUpload onImageUpload={(selectedFile) => setFile(selectedFile)} />
    </>
  );
};

export const Replacement = () => {
  const [file, setFile] = useState<File>(null);

  return (
    <>
      <img src={file ? URL.createObjectURL(file) : ""} alt="" width="40%" />
      <ImageUpload
        onImageUpload={(selectedFile) => setFile(selectedFile)}
        replacement={
          <span style={{ padding: "10px", backgroundColor: "royalblue" }}>
            replacement
          </span>
        }
      />
    </>
  );
};

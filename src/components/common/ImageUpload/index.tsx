import React, { useRef } from "react";
interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  replacement?: React.ReactNode;
  replacementStyle?: React.CSSProperties;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  replacement,
  replacementStyle
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length === 0) return;

    const firstFile = e.target.files[0];
    if (!isImageFile(firstFile)) {
      alert("이미지 파일이 아닙니다");

      e.target.value = "";
      return;
    }

    onImageUpload(firstFile);
  };

  return (
    <>
      <div
        onClick={() => inputRef.current.click()}
        style={{ ...replacementStyle, cursor: "pointer" }}
      >
        {replacement ? replacement : null}
      </div>
      <input
        ref={inputRef}
        style={{ display: replacement ? "none" : undefined }}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </>
  );
};

export default ImageUpload;

const isImageFile = (file: File) => file.type.match("image/.*");

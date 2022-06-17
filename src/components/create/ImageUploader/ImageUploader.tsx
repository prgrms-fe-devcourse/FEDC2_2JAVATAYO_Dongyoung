import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import * as S from "./style";
const ImageUploader: React.FC = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageRemove,
        isDragging,
        dragProps
      }) => (
        <S.UploadImageWrapper>
          <Button
            icon={<UploadOutlined />}
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop here
          </Button>

          {imageList.map((image, index) => (
            <S.ImageItem key={index}>
              <img src={image.dataURL} alt="img" width="100" />
              <Button
                style={{ border: "none", transform: "scale(1.2)" }}
                icon={<DeleteOutlined />}
                onClick={() => onImageRemove(index)}
              ></Button>
            </S.ImageItem>
          ))}
        </S.UploadImageWrapper>
      )}
    </ImageUploading>
  );
};
export default ImageUploader;

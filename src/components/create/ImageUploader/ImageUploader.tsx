import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import * as S from "./style";

interface ImageUploaderInterface {
  images: any[];
  setImages: React.Dispatch<React.SetStateAction<any[]>>;
}
const ImageUploader: React.FC<ImageUploaderInterface> = ({
  images,
  setImages
}) => {
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    if (imageList.length >= 2) {
      alert("사진은 한장만 업로드 가능합니다");
      return;
    }
    setImages(imageList as never[]);
  };

  const renderImageItem = (imageList, onImageRemove) => {
    return (
      <S.ImageItem>
        <img src={imageList[0].dataURL} alt="img" width="100" />
        <Button
          style={{ border: "none", transform: "scale(1.2)" }}
          icon={<DeleteOutlined />}
          onClick={() => onImageRemove(0)}
        ></Button>
      </S.ImageItem>
    );
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
          <>
            <Button
              icon={<UploadOutlined />}
              style={isDragging ? { color: "red" } : undefined}
              onClick={() => {
                if (imageList.length >= 2) {
                  alert("사진은 한 장만 업로드 가능합니다");
                  return;
                }
                onImageUpload();
              }}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            {imageList.length > 0 && renderImageItem(imageList, onImageRemove)}
          </>
        </S.UploadImageWrapper>
      )}
    </ImageUploading>
  );
};
export default ImageUploader;

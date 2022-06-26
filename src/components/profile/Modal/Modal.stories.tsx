import Modal from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Page/Modal",
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(true)}>모달 얍</button>
      <Modal onClose={() => setVisible(false)} height="300px" visible={visible}>
        모달
      </Modal>
    </>
  );
};

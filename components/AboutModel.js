import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";

export default function AboutModel(props) {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Tooltip content={props.TooltipText} placement={props.TooltipDirection} color="invert">
        <Button
          onClick={() => setVisible(true)}
          color="none"
        >
          {props.ButtonText}
        </Button>
      </Tooltip>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={40}>
            {props.title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            {props.description}
          </Text>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// React
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

<Modal isOpen={open} toggle={() => setOpen(false)}>
  <ModalHeader>
    Modal title
  </ModalHeader>
  <ModalBody>
    Modal body text goes here.
  </ModalBody>
</Modal>
import {BsModalRef} from "ngx-bootstrap/modal";

export interface ModalService {
  modal?: BsModalRef;

  open(template: any): BsModalRef<any>;

  close(): void;
}

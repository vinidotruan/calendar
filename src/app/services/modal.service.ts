import { Injectable, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modal?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  open(template: any) {
    this.modal = this.modalService.show(template, { class: 'modal-lg' });
  }
}

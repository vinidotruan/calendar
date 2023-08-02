import { Component } from '@angular/core';
import { CheckableComponent } from './components/modals/checkable/checkable.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calendar';

  constructor(private modalService: ModalService) {
    this.openModal();
  }

  openModal() {
    this.modalService.open(CheckableComponent);
  }
}

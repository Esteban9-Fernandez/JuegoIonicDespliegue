import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-acierto',
  templateUrl: './popup-acierto.component.html',
  styleUrls: ['./popup-acierto.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PopupAciertoComponent {
  @Input() message: string = '¡Has acertado todos los botones!';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}

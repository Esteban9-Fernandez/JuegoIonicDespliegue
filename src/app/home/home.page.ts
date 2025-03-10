import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import datos from '../../assets/Datos.json';
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { PopupComponent } from '../popup/popup.component';
import { PopupAciertoComponent } from '../popup-acierto/popup-acierto.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class HomePage implements OnInit {
  buttons: string[] = [];
  clickedOrder: string[] = [];
  correctOrder: string[] = [];
  errorMessage: string = '';
  datos: any = datos;
  allCorrect: boolean = false;
  attemptCount: number = 0; // Add attempt counter

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.generateRandomButtons();
    this.correctOrder = Object.keys(this.datos);
    this.presentModal(); // Ensure the modal is presented on page initialization
  }

  generateRandomButtons() {
    this.buttons = Object.keys(this.datos).sort(() => Math.random() - 0.5);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PopupComponent
    });
    return await modal.present();
  }

  async presentSuccessModal() {
    const modal = await this.modalController.create({
      component: PopupAciertoComponent,
      componentProps: { message: `¡Has acertado todos los botones en ${this.attemptCount} intentos!` }
    });
    return await modal.present();
  }

  onButtonClick(index: number) {
    if (this.allCorrect) return;
    const button = this.buttons[index];
    const buttonIndex = this.clickedOrder.indexOf(button);
    if (buttonIndex > -1) {
      this.clickedOrder.splice(buttonIndex, 1);
    } else {
      this.clickedOrder.push(button);
    }
  }

  async checkOrder() {
    this.attemptCount++; // Increment attempt counter
    this.errorMessage = '';
    for (let i = 0; i < this.correctOrder.length; i++) {
      if (this.clickedOrder[i] !== this.correctOrder[i]) {
        this.datos[this.clickedOrder[i]].subtitle = `Incorrecto, no se encuentra ordenado`;
        this.errorMessage = `El botón ${this.clickedOrder[i]} está mal.`;
      } else {
        this.datos[this.clickedOrder[i]].subtitle = `Correcto: está en la posición: ${i + 1}`;
      }
    }
    if (!this.errorMessage) {
      this.errorMessage = 'Todos los botones están en el orden correcto.';
      this.allCorrect = true;
      await this.presentSuccessModal();
    }
    this.clickedOrder = [];
  }


}

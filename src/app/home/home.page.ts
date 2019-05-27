import { Component, ViewChild } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public listItems: any[];
  public loadedListItems: any[];

  constructor(private modalController: ModalController) {
    this.listItems = [{
      name: "Mortal Kombat 11 - PS4",
      value: 175.91
    }, {
      name: "Fifa 19 - Xbox One",
      value: 87.91
    }, {
      name: "Minecraft - X360",
      value: 26.31
    }, {
      name: "Fifa 19 - PS4",
      value: 87.91
    }, {
      name: "Grand Theft Auto V: Premium Online Edition",
      value: 119.89
    }, {
      name: "Tom Clancy's Rainbow Six SIEGE - Standard Edition",
      value: 59.99
    }, {
      name: "Gears of War 4",
      value: 147.45
    }, {
      name: "The Witcher 1: Enhanced Edition Director's Cut",
      value: 16.99
    }, {
      name: "Human: Fall Flat",
      value: 27.99
    }, {
      name: "Enter the Gungeon",
      value: 27.99
    }, {
      name: "Cuphead",
      value: 136.99
    }, {
      name: "F.E.A.R. 3",
      value: 34.99
    }, {
      name: "This War of Mine",
      value: 36.99
    }]

    // fetch('assets/AllCards.json').then(async res => {
    //   this.listItems = await res.json();
    // });
  }

  ngOnInit() {
    this.loadedListItems =  this.listItems;
  }

  initializeItems():void {
    this.listItems = this.loadedListItems;
  }

  filterList(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.listItems = this.listItems.filter(currentItem => {
      if (currentItem.name && searchTerm) {
        if (currentItem.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  async openModal(item) {
    const myModal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        clickedItem: item
      },
      animated: true,
      backdropDismiss: true,
      showBackdrop: true
    });

    return await myModal.present();
    // console.log("here: " + item.name);
  }
}

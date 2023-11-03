import { Component } from '@angular/core';
import { ComponentsList } from './data/components.data';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentsList = ComponentsList;

  constructor(
    public navController: NavController
  ) {
    this.componentsList;
    debugger;
  }

  openPage(comp: any) {
    debugger;
    this.navController.navigateForward(comp.pageUrl);
  }
}

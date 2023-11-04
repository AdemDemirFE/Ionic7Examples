import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ion-action-sheet',
    loadChildren: () => import('./ion-action-sheet/ion-action-sheet.module').then( m => m.IonActionSheetPageModule)
  },  {
    path: 'ion-accordion',
    loadChildren: () => import('./ion-accordion/ion-accordion.module').then( m => m.IonAccordionPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

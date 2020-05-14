import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeterinarianRootComponent } from './veterinarian-root/veterinarian-root.component';
import { VeterinarianListComponent } from './veterinarian-list/veterinarian-list.component';
import { VeterinarianDetailComponent } from './veterinarian-detail/veterinarian-detail.component';


const veterinarianRoutes: Routes = [{
  path: '', component: VeterinarianRootComponent, // imported with /veterinarians in app-rooting.module
  children: [
    { path: '', component: VeterinarianListComponent },
    { path: ':id', component: VeterinarianDetailComponent },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(veterinarianRoutes)],
  exports: [RouterModule]
})
export class VeterinarianRootingModule { }

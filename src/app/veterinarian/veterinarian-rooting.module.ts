import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeterinarianRootComponent } from './veterinarian-root/veterinarian-root.component';
import { VeterinarianListComponent } from './veterinarian-list/veterinarian-list.component';
import { VeterinarianDetailComponent } from './veterinarian-detail/veterinarian-detail.component';
import { VeterinarianFormComponent } from './veterinarian-form/veterinarian-form.component';
import { VeterinarianResolverService } from './service/resolver/veterinarian-resolver.service';


const veterinarianRoutes: Routes = [{
  path: '', component: VeterinarianRootComponent, // imported with /veterinarians in app-rooting.module
  children: [
    { path: '', component: VeterinarianListComponent },
    { path: 'new', component: VeterinarianFormComponent },
    { 
      path: 'edit/:id',
      component: VeterinarianFormComponent,
      resolve: {
        veterinarian: VeterinarianResolverService
      }
    },
    { path: ':id', component: VeterinarianDetailComponent },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(veterinarianRoutes)],
  exports: [RouterModule]
})
export class VeterinarianRootingModule { }

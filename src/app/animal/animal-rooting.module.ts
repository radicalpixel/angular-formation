import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalDetailResolverService } from './service/resolver/animal-detail-resolver.service';


const animalRoutes: Routes = [{
  path: 'animals', component: AnimalRootComponent,
  children: [
    { 
      path: '',
      component: AnimalListComponent
    }, {
      path: ':id',
      component: AnimalDetailComponent,
      resolve: {
        animal: AnimalDetailResolverService
      }
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(animalRoutes)],
  exports: [RouterModule]
})
export class AnimalRootingModule { }

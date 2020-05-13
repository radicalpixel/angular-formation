import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';


const animalRoutes: Routes = [{
  path: 'animals', component: AnimalRootComponent,
  children: [
    { path: '', component: AnimalListComponent },
    { path: ':id', component: AnimalDetailComponent}
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(animalRoutes)],
  exports: [RouterModule]
})
export class AnimalRootingModule { }

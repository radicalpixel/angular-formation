import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalRootingModule } from './animal-rooting.module';


@NgModule({
  declarations: [
    AnimalRootComponent,
    AnimalDetailComponent,
    AnimalItemComponent,
    AnimalListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimalRootingModule
  ]
})
export class AnimalModule { }

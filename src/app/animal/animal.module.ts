import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalRootingModule } from './animal-rooting.module';
import { AnimalFormComponent } from './animal-form/animal-form.component';


@NgModule({
  declarations: [
    AnimalRootComponent,
    AnimalDetailComponent,
    AnimalItemComponent,
    AnimalListComponent,
    AnimalFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AnimalRootingModule,
  ]
})
export class AnimalModule { }

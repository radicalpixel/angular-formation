import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarianRootingModule } from './veterinarian-rooting.module';
import { VeterinarianRootComponent } from './veterinarian-root/veterinarian-root.component';
import { VeterinarianDetailComponent } from './veterinarian-detail/veterinarian-detail.component';
import { VeterinarianListComponent } from './veterinarian-list/veterinarian-list.component';
import { VeterinarianItemComponent } from './veterinarian-item/veterinarian-item.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VeterinarianFormComponent } from './veterinarian-form/veterinarian-form.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    VeterinarianRootComponent,
    VeterinarianListComponent,
    VeterinarianItemComponent,
    VeterinarianDetailComponent,
    VeterinarianFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    VeterinarianRootingModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
})
export class VeterinarianModule { }

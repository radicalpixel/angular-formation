import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Veterinarian } from 'src/app/shared/api/model/veterinarian';
import { VeterinarianService } from 'src/app/shared/services/veterinarian.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veterinarian-form',
  templateUrl: './veterinarian-form.component.html',
  styleUrls: ['./veterinarian-form.component.scss']
})
export class VeterinarianFormComponent implements OnInit {
  veterinarian: Veterinarian
  veterinarianForm: FormGroup

  constructor(
    private service: VeterinarianService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: {veterinarian: Veterinarian}) => { 
        if (data.veterinarian) {
          this.veterinarian = data.veterinarian
        } else {
          this.veterinarian = { firstName:"", lastName:"" }
        }

        this.veterinarianForm = new FormGroup({
          firstName: new FormControl(this.veterinarian.firstName),
          lastName: new FormControl(this.veterinarian.lastName),
        });
      }
    )
  }
  
  onSubmit() {
    const formModel = this.veterinarianForm.value;
    const vetDummy: Veterinarian = {
      id: this.veterinarian.id,
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
    }
    if (this.veterinarian.id) {
      this.service.update(vetDummy).subscribe({
        next : veterinarian => { this.router.navigate([`/veterinarians/${veterinarian.id}`])}
      })
    } else {
      this.service.create(vetDummy).subscribe({
        next : veterinarian => { this.router.navigate([`/veterinarians/${veterinarian.id}`])}
      })
    }
  }
}

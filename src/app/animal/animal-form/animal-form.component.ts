import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Veterinarian } from 'src/app/shared/api/model/veterinarian';
import { VeterinarianService } from 'src/app/shared/services/veterinarian.service';


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {
  animal: Animal
  veterinarians: Veterinarian[]

  constructor(
    private veterinarianService: VeterinarianService,
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data: {animal:Animal}) => {
        if (data.animal) {
        this.animal = data.animal
        } else {
          this.animal = {
            name: "",
            species: "",
            veterinarian: "",
            comment: ""
          }
        }
      }
    })
    this.veterinarianService.getAll().subscribe({
      next : veterinarians => this.veterinarians = veterinarians
    })
  }

  onSubmit() {
    let navigateUp = () => this.router.navigate(['/animals'])
    if (this.animal.id) {
      this.animalService.update(this.animal).subscribe(navigateUp)
    } else {
      this.animalService.create(this.animal).subscribe(navigateUp)
    }
  }

  getVetName(veterinarian: Veterinarian) {
    return veterinarian.firstName + " " + veterinarian.lastName
  }
}

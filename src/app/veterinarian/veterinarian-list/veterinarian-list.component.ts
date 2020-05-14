import { Component, OnInit } from '@angular/core';
import { VeterinarianService } from 'src/app/shared/services/veterinarian.service';
import { Veterinarian } from 'src/app/shared/api/model/veterinarian';


@Component({
  selector: 'app-veterinarian-list',
  templateUrl: './veterinarian-list.component.html',
  styleUrls: ['./veterinarian-list.component.scss']
})
export class VeterinarianListComponent implements OnInit {
  veterinarians: Veterinarian[]

  constructor(private service: VeterinarianService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: veterinarians => this.veterinarians = veterinarians
    })
  }

}

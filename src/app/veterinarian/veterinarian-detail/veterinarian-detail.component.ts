import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from 'src/app/shared/api/model/veterinarian';
import { VeterinarianService } from 'src/app/shared/services/veterinarian.service';


@Component({
  selector: 'app-veterinarian-detail',
  templateUrl: './veterinarian-detail.component.html',
  styleUrls: ['./veterinarian-detail.component.scss']
})
export class VeterinarianDetailComponent implements OnInit {
  veterinarian: Veterinarian;

  constructor(
    private service: VeterinarianService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.get(+id).subscribe({
      next: veterinarian => this.veterinarian = veterinarian
    })
  }

  onEdit() {
    this.router.navigate([`/veterinarians/edit/${this.veterinarian.id}`])
  }

  onDelete() {
    this.service.delete(this.veterinarian).subscribe(
      () => this.router.navigate(["/veterinarians"])
    )
  }
}

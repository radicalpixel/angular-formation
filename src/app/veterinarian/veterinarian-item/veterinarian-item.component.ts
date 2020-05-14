import { Component, OnInit, Input } from '@angular/core';
import { Veterinarian } from 'src/app/shared/api/model/veterinarian';

@Component({
  selector: 'app-veterinarian-item',
  templateUrl: './veterinarian-item.component.html',
  styleUrls: ['./veterinarian-item.component.scss']
})
export class VeterinarianItemComponent implements OnInit {
  @Input() veterinarian: Veterinarian

  constructor() { }

  ngOnInit(): void {
  }

}

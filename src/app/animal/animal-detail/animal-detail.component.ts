import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal?: Animal;
  
  constructor(private route: ActivatedRoute, private service: AnimalService) { }

  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id')
    this.service.get(+id).subscribe({
      next: animal => this.animal = animal
    })
  }
}

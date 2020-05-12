import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';



@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animals: Animal[]

  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.animals = this.service.get()
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';




@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  @Input() animal: Animal;
  @Output() delete = new EventEmitter<Animal>();

  constructor(private service: AnimalService) { }

  ngOnInit(): void { }

  onDeleteClick(): void {
    this.delete.emit(this.animal)
  }

}

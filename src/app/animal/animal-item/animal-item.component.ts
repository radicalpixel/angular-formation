import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';


@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent implements OnInit {
  @Input() animal: Animal;
  @Output() delete = new EventEmitter<Animal>();

  constructor(private service: AnimalService) { }

  ngOnInit(): void { }

  onDeleteClick(): void {
    this.delete.emit(this.animal)
  }

}

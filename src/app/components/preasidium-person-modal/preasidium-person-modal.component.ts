import { Component, Input, EventEmitter, Output } from '@angular/core';
import { preasidiumPerson } from 'src/app/models/preasidium-person.model';

@Component({
  selector: 'app-preasidium-person-modal',
  templateUrl: './preasidium-person-modal.component.html',
  styleUrls: ['./preasidium-person-modal.component.css']
})
export class PreasidiumPersonModalComponent {
  @Input() person!: preasidiumPerson;
  @Output() closeModalEvent = new EventEmitter<void>();

  
  constructor() {

  }

  closeModal() {
    console.log('close')
    this.closeModalEvent.emit();
  }
}

import {Component, HostListener} from '@angular/core';
import {preasidiumPerson} from 'src/app/models/preasidium-person.model';
import {trigger, state, style, transition, animate, keyframes, group, query} from '@angular/animations';
import {throttle} from 'src/app/services/throttle.service';

@Component({
    selector: 'app-preasidium',
    templateUrl: './preasidium.component.html',
    styleUrls: ['./preasidium.component.css'],
    animations: [
        trigger('animate', [
            transition('* <=> *',
                group([
                    query('.visible', [
                        animate('500ms', style({width: '0%'})),
                        style({visibility: 'hidden'}),
                        animate('500ms', style({width: '100%'})),
                    ]),
                    query('.invisible', [
                        animate('500ms', style({width: '100%'})),
                        style({visibility: 'visible'}),
                        animate('500ms', style({width: '0%'})),
                    ]),
                ])),
        ]),
    ],
})

export class PreasidiumComponent {

    persons = [
        new preasidiumPerson("Temp", "IT", "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg"),
        new preasidiumPerson("Temp", "IT", "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg"),
        new preasidiumPerson("Temp", "IT", "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg"),
        new preasidiumPerson("Temp", "IT", "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg", "/assets/preasidium/person-none.jpg"),
    ]

    modalPerson = new preasidiumPerson("", "", "", "", "", "");

    isModalOpen: boolean = false;


    constructor() {
        this.onScroll = throttle(this.onScroll, 500);
    }

    openModal(index: number) {
        this.modalPerson = this.persons[index];
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    toggleImages(index: number) {
        this.persons[index].showImg = !this.persons[index].showImg;
    }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.closeModal();
    }

    calculateAOSDelay(index: number): string {
        const delayPerCard = 200;
        return `${index * delayPerCard}`;
    }
}

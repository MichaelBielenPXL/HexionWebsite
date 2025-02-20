import {Component} from '@angular/core';
import {Evenement} from "../../../models/evenement.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  Evenementen: Evenement[] = [
    new Evenement("Hexion x Mercurius: Romeo & Julliete cantus", "16 februari 2024", "Chirojongens Zonhoven centrum", "Het is weer zover, Hexion doet haar jaarlijkse Lan-Party op de PXL!\n" +
      "Heb jij een verlengd weekend niks te doen? Of wil je samen met ons ontstressen van de examens?\n" +
      "Of heb je wel plannen en geen examens gehad?\n" +
      "Dan is Hexilan zeker wat voor jou!", "/assets/events/16feb.jpg", "https://www.facebook.com/events/703470518574803"),
    new Evenement("Super stonk TD", "5 maart 2024", "Café Café", "🚀🎉 Mario time 🎉🚀\n" +
      "Maak je klaar voor de Super Stonks TD - dé Mercurius Lustrum TD van het jaar! Take-a that! 🌟 Samen met Hexion, Orbis organiseren we een legendarisch feest om te vieren en herinneringen te maken die een leven lang meegaan. 🎊💃\n" +
      "Verwacht ongeëvenaarde vibes, yahoo, geweldige muziek en een sfeer die je nergens anders vindt! 🎶💥",
      "/assets/events/5maart.jpg","https://www.facebook.com/events/382325121074647"),
  ]

  calculateAOSDelay(i: number) {
    const delayPerCard = 200;
    return `${i * delayPerCard}`;
  }
}

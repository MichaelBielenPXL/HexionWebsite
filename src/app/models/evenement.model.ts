export class Evenement {
  title?: String;
  datum?: String;
  locatie?: String;
  description?: String;
  img?: String;
  link?: String;


  constructor(title: String, datum: String, locactie: String, description: String, img: String, link: String) {
    this.title = title;
    this.datum = datum;
    this.locatie = locactie;
    this.description = description;
    this.img = img;
    this.link = link;
  }
}

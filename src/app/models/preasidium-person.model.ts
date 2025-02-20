export class preasidiumPerson {
    name: String;
    functie: String;
    bio: String;
    staticImg: String
    animatedImg: String
    modalImg: String
    showImg: boolean = true;


    constructor(name: String, functie: String, bio: String, staticImg: String, animatedImg: String, modalImg: String) {
        this.name = name;
        this.functie = functie;
        this.bio = bio;
        this.staticImg = staticImg;
        this.animatedImg = animatedImg;
        this.modalImg = modalImg;
    }
}
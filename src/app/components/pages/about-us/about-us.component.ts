import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  secret!: number;


  DownloadFile(): void {
    if (this.secret === undefined) {
      this.secret = 0;
    }
    this.secret++;
    if (this.secret > 3) {
      console.log("Hard techno is beter dan DnB")
    }
  }

}

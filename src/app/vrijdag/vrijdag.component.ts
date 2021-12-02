import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vrijdag',
  templateUrl: './vrijdag.component.html',
  styleUrls: ['./vrijdag.component.css'],
})
export class VrijdagComponent implements OnInit {
  antwoord: String = 'een dag';
  andereDatum: String;
  invoer: string = new Date('01-01-2022').toDateString();
  constructor() {
    let datum = new Date();
    this.antwoord = this.isHetVrijdag(datum);
  }

  ngOnInit() {}

  bereken() {
    let datum = new Date(this.invoer);
    this.andereDatum = this.isHetVrijdag(datum);
  }

  isHetVrijdag(datum: Date) {
    return datum.getDay() == 5
      ? 'Het is vrijdag!'
      : 'Helaas... wat denk je zelf?';
  }
}

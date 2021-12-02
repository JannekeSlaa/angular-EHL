import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-loop',
  templateUrl: './simple-loop.component.html',
  styleUrls: ['./simple-loop.component.css'],
})
export class SimpleLoopComponent implements OnInit {
  input: number;
  aantal: number = 10;
  antwoord: number;
  texts: number[];

  ngOnInit() {
    this.clear();
  }

  update() {
    this.clear();
    for (let index = 0; index < this.aantal; index++) {
      this.antwoord = this.input * index;
      this.texts.push(this.antwoord);
    }
    console.log(this.texts);
  }

  clear() {
    this.texts = Array<number>();
  }
}

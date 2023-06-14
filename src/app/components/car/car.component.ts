import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
edit = false;

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый'
    };
    this.options = ["ABS", "Автопилот", "Авто Паркинг"];
  }

  carSelect(carName) {
    if(carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый'
      };
      this.options = ["Система трека", "Круиз контроль"];
    } else if(carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ["ABS", "Автопилот", "Авто Паркинг"];
    } else {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ["Массаж", "Просмотр фильмов", "Автопилот", "Авто Паркинг"];
    }
  }
  
  addVal(option){
      this.options.push(option);
      return false;
    }

  deleteVal(index){
    if(index>=0 && index < this.options.length)
      this.options.splice(index, 1);
      return false;
  }

  editCar(){
    this.edit = !this.edit
  }

}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}

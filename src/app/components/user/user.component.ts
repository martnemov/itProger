import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  title: string;
  isAuth = false;
  cabinet = false;

  // age: number;
  // fullName: {
  //   firstName: string,
  //   lastName: string,
  //   middleName: string,
  // };
  // hobbies: string[];
  // hasCar: boolean;
  // other: any;

  user : {
    login: string,
    pass: string,
    age: number,
    firstName: string,
    lastName: string,
    profession: string,
    education: string,
}

  constructor(){}
  
  ngOnInit(): void {
    this.title='Регистрация';
    // this.age = 32;
    // this.fullName = {
    //   firstName:'Boris',
    //   lastName: 'Ivanov',
    //   middleName: 'Ivanovich'
    // };
    // this.hobbies = ['Training', 'Reading', 'Sleeping'];
    // this.hasCar = true;
    // this.other = 'Married';
    // console.log('ФИО:' + this.fullName.firstName + ' ' + this.fullName.middleName + ' ' + this.fullName.lastName);  
  }

  reg(a,b) {
    this.user = {
      login: a,
      pass: b,
      firstName: 'Виктор',
      lastName:'Иванович',
      age: 37,
      profession: 'Машиннист',
      education: 'Средняя'
    };
    this.title = 'Авторизация';
    this.isAuth = true;
    return false;
  }

  auth(login, pass){
    if(login === this.user.login && pass === this.user.pass){
      this.title = 'Кабинет пользователя';
      this.cabinet = true;
    }
    return false;
  }

}

interface FavoriteThings{
  hockey: boolean;
  videoGames: boolean;
  politic: boolean;
}

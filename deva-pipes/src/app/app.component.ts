import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'deva-pipes';
  cpf = '37350299060';
  cnpg = '25112220000138';
  cardNumber = '1234567890';

  sladerAge!:number;

  users: Array<any> = [
    {
      name: 'Chapolim Colorado',
      age: 38,
    },
    {
      name: 'Chaves',
      age: 8,
    },

    {
      name: 'Chiquinha',
      age: 8,
    },

    {
      name: 'Dona Florinda',
      age: 48,
    },

    {
      name: 'Bruxa do 71',
      age: 90,
    }
  ];
}

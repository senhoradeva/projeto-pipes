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

// $bg-color: #9400d3;

// .btn-base {
//   padding: 0.3rem;
//   border-radius: 0.2rem;
//   border: 0;
//   text-decoration: none;
//   cursor: pointer;
// }

// .btn {
//   @extend .btn-base;
//   background-color: $bg-color;
// }





// @mixin btn($bg-color: #f0eaee) {
//   text-decoration: none;
//   cursor: pointer;
//   display: inline-block;
//   border: 0;
//   background-color: $bg-color;
//   transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
//   padding: 0.3rem;
//   border-radius: 0.2rem;
// }



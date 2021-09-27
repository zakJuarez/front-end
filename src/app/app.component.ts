import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [{
        titulo: 'Spider Man Home comming',
        fechaLanzamiento: new Date(),
        precio: 224
      },
      {
        titulo: 'Spier Man 2',
        fechaLanzamiento: new Date(),
        precio: 200
      },
      {
        titulo: 'Spider Man 3',
        fechaLanzamiento: new Date(),
        precio: 100
      }];
    }, 500);
    
  }
  title = 'front-end';
  
  peliculas;

  duplicarNumero(valor: number){
    return 2 * valor;
  }
}

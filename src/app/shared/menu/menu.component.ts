import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  itensMenu = [
    {label: 'inicio', link:''},
    {label: 'clientes', link:'clientes'},
    {label:'contas',link:'contas'},
    {label:'sobre', link:'sobre'}
  ];
}

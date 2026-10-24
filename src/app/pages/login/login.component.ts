import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  botaoDesabilitado: boolean = true;
  login: string = '';
  senha: string = '';

  constructor(private router:Router){}

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }
  fazerLogin(){
    if(this.login === "admin@gmail.com" && this.senha === "123"){
      alert("Bem-vindo(a) admin!");
      this.router.navigate(['/admin-clientes-listar']);
    }else{
      alert("credenciais inválidas!");
    }
  }

  onBotaoClicado() {
    alert("Confirmado");
  }

  teclaSolta(evento: KeyboardEvent): void {
    alert(`o usuário digitou ${evento.key}`);
  }
}

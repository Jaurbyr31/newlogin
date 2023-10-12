import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';
  users: any = [];

  constructor(private http: HttpClient, private router: Router) {this.getUser();}

  getUser() {
    this.http.get('http://localhost/iumecobd/user.php').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.users = response;
      },
      (error) => {
        console.error('Error al obtener datos del servidor:', error);
      }
    );
  }
  

  login() {
    // Obtener las credenciales ingresadas por el usuario
    const inputUsername = this.username;
    const inputPassword = this.password;
  
    console.log('Credenciales ingresadas:', inputUsername, inputPassword);
  
    // Comprobar los valores en this.users
    console.log('Usuarios en this.users:', this.users);
  
    // Buscar si las credenciales coinciden con algún usuario en this.users
    const user = this.users.find((u: any) => u.user === inputUsername && u.contra === inputPassword);
  
    console.log('Usuario encontrado:', user);
  
    if (user) {
      // Las credenciales son correctas, redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      // Las credenciales son incorrectas
      alert('Credenciales incorrectas, intente nuevamente');
    }
  }
  
}

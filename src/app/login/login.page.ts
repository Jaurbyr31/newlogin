import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient) { }

  listaBd: any = [];

  ngOnInit() {
  }

  getUser(){
    
    this.http.get('http://localhost/user.php').subscribe((response)=>{
      console.log(response);
      this.listaBd = response;
    })
  }


}

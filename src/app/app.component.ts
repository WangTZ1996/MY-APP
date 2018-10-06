import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY-APP';
}


setInterval("timer.innerHTML=new Date().toLocaleTimeString()",1000);

  


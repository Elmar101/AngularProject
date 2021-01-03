import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    let values = of("Melumatlar",25,"istifadeci",{name:"Elmar",password:12345},[1,2,3]);
    values.subscribe(
      data => {console.log(data);
      }
    )
  }
}

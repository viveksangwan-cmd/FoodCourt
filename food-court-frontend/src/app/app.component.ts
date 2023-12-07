import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-court-frontend';
  showRecipe: Boolean = true;
  toggleContent(event){
    if(event==='Recipe') this.showRecipe = true;
    else this.showRecipe = false;
  }
}

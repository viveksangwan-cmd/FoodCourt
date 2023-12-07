import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toogleConetent = new EventEmitter<{}>();
  changeContent(toggledContent){
    this.toogleConetent.emit(toggledContent);
  }
}

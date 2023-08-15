import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libraryApp01';

  @HostListener('window:unload',['$event'])
  unloadHandler(event){
    window.sessionStorage.clear();
  }
}

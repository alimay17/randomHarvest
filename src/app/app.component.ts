import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // properties
  author = 'Alice Smith';
  class = 'WDD 430: Prof. Murff'
  title = 'Random Harvest';
  date = new Date().toLocaleString(
    'default', {month: 'short', year: 'numeric'}
  );
}

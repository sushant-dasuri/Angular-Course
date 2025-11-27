import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data = {
    title: '<h1></h1>Angular Core Deep Dive</h1><script>alert("XSS Attack!")</script>'
  }

  onLogoClick() {
    alert('Angular Logo Clicked!');
  }

  onKeyUp(value: string) {
    this.data.title = value;
  }
 
}

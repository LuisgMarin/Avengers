import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'avengers';
  ngAfterViewInit(): void {
    const js = document.createElement('script');
    js.src = '/assets/js/scripts.js';
    js.type = 'text/javascript';
    document.body.appendChild(js);
  }
}


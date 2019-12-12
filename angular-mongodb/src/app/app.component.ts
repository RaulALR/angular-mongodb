import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const sse = new EventSource(`${environment.apiUrl}/${environment.endpoints.alerts}`);
    sse.onmessage = (event) => {
      console.log(event);
    };

    sse.addEventListener('eventName', (event) => {
      console.log(event);
    });
  }
}

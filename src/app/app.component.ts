import { Component } from '@angular/core';
import { MockserviceService } from './mockservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MockserviceService]
})
export class AppComponent {
  title = 'CreateRole';
}

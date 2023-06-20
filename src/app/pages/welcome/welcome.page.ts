import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html'
})
export class WelcomePage implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    Aos.init();
  }

}

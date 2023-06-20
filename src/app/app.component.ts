import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public isDarkMode = false;

  onDarkModeToggled(value: boolean) {
    this.isDarkMode = value;
  }

  getDarkMode() {
    return this.isDarkMode;
  }
  constructor() { }
}

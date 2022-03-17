import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-theming';
  isDark = false;
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];

  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark';
  }

  private currentTheme = 'theme-dark';

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  switchMode(isDarkMode: boolean) {
    this.isDark = isDarkMode;
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

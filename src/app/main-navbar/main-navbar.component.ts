import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavbarComponent {

  @Input()
  isDarkMode = false;

  @Output()
  darkModeSwitched = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    console.log(checked);
    this.isDarkMode = !this.isDarkMode;
    this.darkModeSwitched.emit(checked);
  }
}

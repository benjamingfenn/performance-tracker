import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile: boolean = false;

  closeIfMobile(nav: any) {
    if (this.isMobile) {
      nav.close();
    }
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.TabletPortrait, Breakpoints.HandsetPortrait])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      )
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
      });
  }
}

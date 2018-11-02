import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'mini-shop';
  loading;
  constructor(route: ActivatedRoute, private router: Router) {
    this.title = route.snapshot.data.title;
    console.log(route.data);
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }
}

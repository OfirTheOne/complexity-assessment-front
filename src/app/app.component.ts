import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) {
    console.log(`on ${environment.production ? 'prod' : 'dev'}.`);
  }

  onGoToHome() {
    this.router.navigate(['/home']);
  }

  onGoToHowTo() {
    this.router.navigate(['/howto']);
  }
}

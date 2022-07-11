import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private route: Router) {
  }

  onLogin(): void {
    if (this.form.invalid) {
      return;
    }

    /sdasdasdsa
    this.authService
      .login(this.form.get('email')?.value || '', this.form.get('password')?.value || '')
      .subscribe(() => {
        this.route.navigate(['']);
      });
  }
}

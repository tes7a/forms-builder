import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
  });

  constructor(private authService: AuthService, private route: Router) {
  }

  onLogin(): void {
    if (this.form.invalid) {
      return;
    }

    if (this.form.valid) {
      this.authService
        .login(this.form.get('email')?.value || '', this.form.get('password')?.value || '')
        .subscribe(() => {
          this.route.navigate(['']);
        });
    }
  }
}

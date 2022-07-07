import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './services/auth-service.service';

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

  constructor(private authService: AuthService) {
  }

  onLogin(): void {
    if (this.form.invalid) {
      return;
    }

    this.authService
      // @ts-ignore
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe((res) => {
        console.log(res);
      });
  }

  submit(): void {
    const formData = { ...this.form.value };

    console.log(formData);
  }

  getData() {
    this.authService.onSetData()
      .subscribe((res) => {
        console.log(res);
      });
  }
}

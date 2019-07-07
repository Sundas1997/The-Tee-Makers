import { AdminService } from './../dashboard/admin.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  pass;
  constructor(public admin: AdminService, public toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.admin.login(this.email, this.pass).then(x => {
      this.toastr.success('You are now successfully logged in', 'Login Attempt Successful');
      this.router.navigateByUrl('/admin');

    }).catch(err => {
      this.toastr.error(err.message, err.code);
    });
  }
}

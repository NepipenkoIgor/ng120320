import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public value = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
    this.activatedRoute.queryParamMap.subscribe((p)=>{
      console.log(p.get('price'))
    })
  }

}

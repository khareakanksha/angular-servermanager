import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  onloadserver(id: number){
   this.router.navigate(['/servers'] );

 this.router.navigate(['/servers',id,'edit'], {queryParams: {allowedit:'1'}, fragment:'loading'} );
  }

}
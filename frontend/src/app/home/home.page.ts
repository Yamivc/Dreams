import { Component } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = "title";
  description: string = "description";
  feel: string ="feel";


  constructor(private router: Router) {}
  gotoMyDreams(){
    this.router.navigateByUrl("/my-dreams")
  }

  gotoAddDreams(){
    this.router.navigateByUrl("/add-dream")
  }

  
}

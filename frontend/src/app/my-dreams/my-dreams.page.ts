import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DreamService } from '../services/dream.service';

@Component({
  selector: 'app-my-dreams',
  templateUrl: './my-dreams.page.html',
  styleUrls: ['./my-dreams.page.scss'],
})
export class MyDreamsPage implements OnInit {

  // dreams: any = [
  //   {
  //     id: 1,
  //     title: "El sueño",
  //     description: "Era un día soleado, el mar vibraba en el horizonte...",
  //     feel: "good",
  //     img: "assets/img/Saturn.jpg", // Ruta relativa dentro de 'assets'
  //     date: "04-10-2021"
  //   },
  //   {
  //     id: 2,
  //     title: "La marea",
  //     description: "Soy una jarea tendida al sol, y en cualquier azotea canto yo...",
  //     feel: "good",
  //     img: "assets/img/The_Moon.jpg",  // Ruta relativa dentro de 'assets'
  //     date: "04-10-2021"
  //   },

  //   {
  //     id: 2,
  //     title: "Sol y playa",
  //     description: "He soñado que había arena de un color dorado",
  //     feel: "good",
  //     img: "assets/img/The_Moon_Eclipse.jpg",  // Ruta relativa dentro de 'assets'
  //     date: "04-10-2021"
  //   }
  // ];
  dreams: any = [];

  // constructor(private router : Router) { }

  constructor(private dreamService: DreamService) { }


  // gotoMyDream(){
  // this.router.navigateByUrl("/my-dream");
  // }



  ngOnInit() {
    this.getAllDreams();
  }

  getAllDreams() {
    this.dreamService.getDreams().subscribe(response => {
      this.dreams = response;
    });
  }

  deleteDream(id: any) {
    this.dreamService.delete(id).subscribe(response => {
      this.getAllDreams();
    })
  }
}

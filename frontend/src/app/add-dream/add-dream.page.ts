import { Component, OnInit } from '@angular/core';
import { DreamService } from '../services/dream.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-dream',
  templateUrl: './add-dream.page.html',
  styleUrls: ['./add-dream.page.scss'],
})
export class AddDreamPage implements OnInit {

  dreamForm: FormGroup;

  constructor(public formbuilder: FormBuilder,
    private dreamService: DreamService,
    private route: Router) {
    this.dreamForm = this.formbuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      feel: ['', Validators.compose([Validators.required])],
      img: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createDream(){
    if(this.dreamForm.valid){
      console.log('Formulario válido:', this.dreamForm.value);
      this.dreamService.createDream(this.dreamForm.value).subscribe(Response => {
        this.route.navigateByUrl("/my-dreams")
      })
    }else{
      console.log('formulario no valido')
    }
  }

  getFormControl(field:string){
    return this.dreamForm.get(field)
  }
}

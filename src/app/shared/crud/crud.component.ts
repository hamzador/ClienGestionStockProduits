import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CrudService} from "../crud.service";
import {DataModel} from "../data.model";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  @Input()
  data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  @Input()
  initForm: FormGroup;


  @Input()
  dataModelList: DataModel[];



  crudForm: FormGroup;

  operation: string ="add"

  selectedItem: any;
  constructor( private fb:FormBuilder){
    this.createForm();
  }

  createForm(){
    this.initForm? this.crudForm = this.initForm: this.crudForm = this.fb.group({});



  }
  ngOnInit(){
    this.init();


  }
  loadData(){
    this.service.getAll().subscribe(

      data => {this.data = data},
      error => {console.log('An error was occured.')},
      () => {console.log('loading data was done.')}

    );

  }
  update() {
    this.service.update(this.selectedItem).subscribe(
      res => {
        this.init();
        this.loadData();
      }

    );

  }

  add(){
    const p = this.crudForm.value;
    this.service.add(p).subscribe(
      res =>{
        this.init();
        this.loadData();
      }
    );
  }

  init(){

    this.selectedItem = this.initItem;
    this.createForm();
  }


  delete(){
    this.service.delete(this.selectedItem.id).
    subscribe(
      res =>{
        this.selectedItem = this.initItem;
        this.loadData();
      }
    );
  }



}

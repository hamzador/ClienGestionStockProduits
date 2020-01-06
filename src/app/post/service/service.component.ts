import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/post.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../comment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  posts : Post[];
  postForm: FormGroup;



  selectedPost: Post;
  constructor(private postService: CommentService, private fb:FormBuilder, private route: ActivatedRoute,private router : Router){
    this.createForm();
  }

  createForm(){
    this.postForm = this.fb.group({
      body: ['',Validators.required],
      idUser: ['',Validators.required]
    });

  }
  ngOnInit(){
    this.initPost();
    this.posts = this.route.snapshot.data.posts;

  }
  loadPost(){
    this.postService.getAll().subscribe(

      data => {this.posts = data;
        console.log("body----------"+this.posts[0].body)
      },
      error => {console.log('An error was occured.')},
      () => {console.log('loading produits was done.')}


    );

  }
  update() {
    this.postService.update(this.selectedPost).subscribe(
      res => {
        this.initPost();
        this.loadPost();
      }

    );

  }

  add(){
    const p = this.postForm.value;
    this.postService.add(p).subscribe(
      res =>{
        this.initPost();
        this.loadPost();
      }
    );
  }

  initPost(){

    this.selectedPost = new Post();
    this.createForm();
    this.loadPost();
  }


  delete(){
    this.postService.delete(this.selectedPost.id).subscribe(
      res => {
        this.selectedPost = new Post();
        this.loadPost();
      }

    );

  }
  sendMessage(){
    this.router.navigateByUrl('/home/(contentOutlet:myMessage)');
  }
}

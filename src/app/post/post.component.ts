import { Component, OnInit } from '@angular/core';
import {CommentService} from "./comment.service";
import {Produit} from "../shared/produit.model";
import {Post} from "../shared/post.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {DataModel} from "../shared/data.model";
import {ActivatedRoute, Router} from "@angular/router";
import {tokenize} from "@angular/compiler/src/ml_parser/lexer";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  model = new Post();

  // comments: Comment[];
  //
  // commentModel: DataModel[];

  username :string;

  commentForm:FormGroup;

  constructor(private commentService:CommentService,
              private cookieService: CookieService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router:Router) { }

  ngOnInit() {
    //this.comments = this.route.snapshot.data.comments;

     this.commentForm = this.fb.group({
        body: ['', Validators.required],
        idUser:['', Validators.required]
     });
  //
  //   this.commentModel = [
  //     new DataModel('id','ID','number',true,[]),
  //     new DataModel('body','commentaire d\'utilisateur','string',true,[])
  //   ]




   }

   onSubmit() {
     const token= atob(this.cookieService.get("token"));
     this.username=token.split(":")[0];
     console.log("username"+this.username);
      this.model.body=this.commentForm.get('body').value;//this.commentForm.value;
      this.model.idUser=this.username;
     console.log("json"+this.model.body);

    this.commentService.postComment(this.model).subscribe(
      data=>{
        //this.router.navigate(['home/poste']);
        console.log("objets"+this.commentForm.value);
      }

    );

  //   this.model.idUser=this.username;
  //   this.commentService.postComment(this.model).subscribe(
  //     //comment => this.onNext(comment),
  //     error => console.log(error)
  //   );
  // }
  // onNext(comment) {
  //   this.model = comment;
  //   console.log('Success Response : ' + comment.body );
   }
  // onComplete() {
  //   // Si angular4-toaster est installé
  //   //this.toasterService.pop('success', 'Commentaire', 'Ajouté avec succès');
  // }
}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URLS} from "../config/api.url.config";

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  postComment(comment): Observable<any> {
    const url = API_URLS.POST_COMMENT;
    console.log("comment-------"+comment.body);
    return this.http.post(url, comment);
  }

}

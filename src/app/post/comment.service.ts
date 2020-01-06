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

  getAll(): Observable<any>{
    return this.http.get(API_URLS.POST_COMMENT);
  }
  add(entity ): Observable<any>{
    return this.http.post(API_URLS.POST_COMMENT,entity);
  }
  update(entity): Observable<any>{
    return this.http.put(API_URLS.POST_COMMENT, entity);
  }
  delete(id): Observable<any>{
    return this.http.delete(API_URLS.POST_COMMENT + `/${id}` );
  }

}

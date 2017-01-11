import { Injectable } from '@angular/core';
import { Article } from '../models/article.client.model';

import {
  Http,
  Response,
  HttpModule,
  RequestOptions,
  Request,
  RequestMethod,
  Headers
} from '@angular/http';

import { Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

	constructor(private http: Http){}
	

	getArticles(): Observable<Article[]>
	{
		return this.http
		.get('api/articles')
		.map((r: Response) => r.json().data);
	}

	publishArticle(formData: Article) : Observable<any>
	{
		    return this.http.post('api/users', formData)
      .map(this.extractData);

				
  }
  getArticle(id: string) : Observable<Article>
  {
		return null;
  }

	extractData(res: Response | any) {
		let body = res.json();
		console.log(body);
		return body;
	}
}
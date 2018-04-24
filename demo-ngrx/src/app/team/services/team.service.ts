import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TeamMember} from '../models/teamMember.model';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TeamService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTeamMembers(): Observable<TeamMember[]> {
    return this.http
      .get(this.baseUrl + '/teamMembers')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}


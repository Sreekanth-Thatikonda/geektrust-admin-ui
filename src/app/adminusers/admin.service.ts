import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AdminUser } from 'src/store/adminuser.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllAdminUsers(): Observable<AdminUser[]> {
    return this.http
      .get<AdminUser[]>(
        'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
      )
      .pipe(
        map((data) => {
          return data.map((v) => ({ ...v, checked: false, editMode: false }));
        })
      );
  }
}

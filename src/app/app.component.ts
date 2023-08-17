import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  response$!: Observable<any>;
  filteredData: AdminUsers[] = [];
  originalData: AdminUsers[] = [];
  totalCount: number = 0;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const response$ = 

    response$.subscribe((data) => {
      this.originalData = data;
      console.log(this.originalData);
      this.filteredData = [...this.originalData];
    });
    this.totalCount = this.filteredData.length;
    //this.AdminUsers;
  }

  deleteUser(userId: string) {
    this.filteredData = this.filteredData.filter((data: AdminUsers) => {
      return data.id !== userId;
    });
    this.originalData = this.originalData.filter((data: AdminUsers) => {
      data.id != userId;
    });
  }

  onEdit(userId: string) {
    this.filteredData.forEach((user) => {
      if (user.id === userId) {
        user.editMode = true;
      }
    });
  }

  onChecked(userId: string, event: any) {
    this.filteredData.forEach((user) => {
      if (user.id === userId) {
        user.checked = event.target.checked;
      }
    });
  }

  onSearch() {
    const searchKeyword = this.inputSearch.nativeElement.value.toLowerCase();
    this.filteredData = this.originalData.filter((data) => {
      return (
        data.name.includes(searchKeyword) ||
        data.email.includes(searchKeyword) ||
        data.role.includes(searchKeyword)
      );
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { loadAdminUsers } from 'src/store/admin.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  
  constructor(private store: Store) {}

  ngOnInit() {
    console.log(this.store.dispatch(loadAdminUsers()))
    
    //this.AdminUsers;
  }

  // deleteUser(userId: string) {
  //   this.filteredData = this.filteredData.filter((data: AdminUsers) => {
  //     return data.id !== userId;
  //   });
  //   this.originalData = this.originalData.filter((data: AdminUsers) => {
  //     data.id != userId;
  //   });
  // }

  // onEdit(userId: string) {
  //   this.filteredData.forEach((user) => {
  //     if (user.id === userId) {
  //       user.editMode = true;
  //     }
  //   });
  // }

  // onChecked(userId: string, event: any) {
  //   this.filteredData.forEach((user) => {
  //     if (user.id === userId) {
  //       user.checked = event.target.checked;
  //     }
  //   });
  // }

  // onSearch() {
  //   const searchKeyword = this.inputSearch.nativeElement.value.toLowerCase();
  //   this.filteredData = this.originalData.filter((data) => {
  //     return (
  //       data.name.includes(searchKeyword) ||
  //       data.email.includes(searchKeyword) ||
  //       data.role.includes(searchKeyword)
  //     );
  //   });
  
}

import { Component, OnInit , ViewChild} from '@angular/core';
import { UserlistService } from '../userlist.service';
import { User } from '../user.model';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog} from '@angular/material';
import {animate , state , style , transition, trigger} from '@angular/animations';
import {OrderPipe} from 'ngx-order-pipe';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  animations : [
    trigger('detailExpand' , [
       state('collapsed', style({height: '0px', minHeight: '0', display: 'none'  })),
       state('exapnded' , style({height: '*'})),
       transition('expanded <=> colapsed', animate('225ms cubic-bazier(0.4, 0.4, 0.2, 1)')),
    ]),
  ]
})
export class UserlistComponent implements OnInit {
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
   constructor(private service: UserlistService, private orderPipe: OrderPipe) {

    }
  public userList: any[] = [];
  public dataSource =  new MatTableDataSource<User>();
  public data = new MatTableDataSource<any>();
  displayedColumns: any[] = ['id', 'firstName', 'lastName', 'email', 'avatar'];
  expandedElement: any;

loadUserList() {

     this.service.getUserList().subscribe( data => {
        this.userList = this.orderPipe.transform(data.json());
        this.dataSource.data = this.userList;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }, (error) => {
      console.log('some error occured');
    }
  );

  }

ngOnInit() {

     this.loadUserList();

  }

}

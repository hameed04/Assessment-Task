import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-clinetsdata',
  templateUrl: './clinetsdata.component.html',
  styleUrls: ['./clinetsdata.component.css']
})
export class ClinetsdataComponent implements OnInit {
  clients:any[]= [
    {clientid: 1,companyname:'infosys',creationdate:'10 aug 2023',Assignedmember:  'jaheer'},
    {clientid: 2,companyname:'capgemini',creationdate:'1 aug 2023',Assignedmember:'hameed'},
    {clientid: 3,companyname:'techmahendra',creationdate:'8 aug 2023',Assignedmember:'jaheer'},
    {clientid: 4,companyname:'Accenture',creationdate:'6 aug 2023',Assignedmember:'jaheer'},
    {clientid: 5,companyname:'IBM',creationdate:'4 aug 2023',Assignedmember:'jaheer'},
    {clientid: 6,companyname:'vista',creationdate:'9 aug 2023',Assignedmember:'jaheer'},
    {clientid: 7,companyname:'TCS',creationdate:'4 aug 2023',Assignedmember:'jaheer'}
    ];
  searchstring!:any;
  
  constructor(private service:AuthService,private router:Router){

  }
  
  ngOnInit(): void {
    
    
  }
  

  getclientdata(){

    this.service.getclientdata().subscribe((response:any)=>{
      this.clients = response.data
    
    })
    
    
      }

      page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  onTableDataChange(event: any) {
    this.page = event;
    this. getclientdata();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this. getclientdata();
  }


}

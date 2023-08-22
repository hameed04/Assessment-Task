import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-companiesdata',
  templateUrl: './companiesdata.component.html',
  styleUrls: ['./companiesdata.component.css']
})
export class CompaniesdataComponent implements OnInit {
  
  companies:any[]= [{clientid : 'HM101'},{financialyear:'2021-2022'},
  {clientid : 'HM101'},{financialyear:'2021-2022'},
  {clientid : 'HM102'},{financialyear:'2021-2022'},
  {clientid : 'HM103'},{financialyear:'2021-2022'},
  {clientid : 'HM104'},{financialyear:'2021-2022'} ];

  searchstring!:any;

  constructor(private service:AuthService)
  {}

  ngOnInit(): void {
    
  }
  getcomapanydata(){

    this.service.getcompanydata().subscribe(data=>{
      console.log('data')
    
    })
    
    
      }
      
      page: number = 1;
      count: number = 0;
      tableSize: number = 10;
      tableSizes: any = [3, 6, 9, 12];
    
      onTableDataChange(event: any) {
        this.page = event;
        this. getcomapanydata();
      }
      onTableSizeChange(event: any): void {
        this.tableSize = event.target.value;
        this.page = 1;
        this.getcomapanydata();
      }
       
    

}

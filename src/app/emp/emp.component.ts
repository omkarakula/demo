import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
	emp:any=[];
  constructor(private UserService:UserService) { }

  ngOnInit() {
	  this.emp=this.UserService.getAllUsers().subscribe((data)=>{
		  return this.emp=data;		  
	  });	  
  }

}

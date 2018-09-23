import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  student=[
  {sid:123,name:"siddu",course:"Web",dob:new Date("10/10/1988"),fee:5000},
  {sid:123,name:"raju",course:"PHP",dob:new Date("10/10/1991"),fee:6000},
  {sid:123,name:"shravan",course:"Angular",dob:new Date("10/10/1987"),fee:8000},
  {sid:123,name:"indu",course:"Java",dob:new Date("10/10/1995"),fee:9000},
  {sid:123,name:"tanweer",course:"Bootstrap",dob:new Date("10/10/1997"),fee:10000}
  ];
}

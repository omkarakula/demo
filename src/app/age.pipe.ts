import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
		let currentYear=new Date().getFullYear();//2018
		let dobYear=new Date(value).getFullYear();
		let userAge=currentYear-dobYear;
	return userAge;
  }

}

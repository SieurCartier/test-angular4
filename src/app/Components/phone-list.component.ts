import {Component, OnInit} from '@angular/core';
import {Phone} from '../Domain/Phone';
import {PhoneService} from '../Services/Phone.service';


@Component({
  selector: 'phone-list',
  templateUrl: '../../Templates/phone-list.component.html'
})
export class PhoneListComponent implements OnInit {

  phones: Phone[];
  userQuery: string;
  orderProp: string;

  constructor(private phoneService: PhoneService) {
    this.userQuery = '';
    this.orderProp = 'age';
  }

  ngOnInit(): void {
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones().then(phones => this.phones = phones);
  }

  filtered(phones: Phone[]): Phone[] {
    return (phones) ? phones.filter((element) => {
      let regex = new RegExp(this.userQuery, 'i');
      return regex.test(element.name);
    }) : phones;
  }

  ordered(phones: Phone[]): Phone[] {
    return (phones) ? phones.sort((premier, deuxieme) => {
      return (this.orderProp === 'age') ?
        premier[this.orderProp] < deuxieme[this.orderProp] :
        premier[this.orderProp].localeCompare(deuxieme[this.orderProp]);
    }) : phones;
  }

}

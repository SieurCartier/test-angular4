import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';

import {PhoneService} from '../Services/Phone.service';
import {PhoneDetails} from '../Domain/PhoneDetails';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'phone-details',
  templateUrl: '../../Templates/phone-details.component.html'
})
export class PhoneDetailsComponent implements OnInit {

  mainImageUrl: string;
  phoneDetails: PhoneDetails;

  constructor(private phoneService: PhoneService,
              private route: ActivatedRoute) {
    this.phoneDetails = new PhoneDetails();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.phoneService.getPhoneDetails(params['phoneId']))
      .subscribe((phoneDetails: PhoneDetails) => {
          this.phoneDetails = phoneDetails;
          this.mainImageUrl = this.phoneDetails.images[0];
        }
      );
  }

  setImage(img: string): void {
    this.mainImageUrl = img;
  }

}

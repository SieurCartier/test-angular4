import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Phone} from '../Domain/Phone';
import {PhoneDetails} from '../Domain/PhoneDetails';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PhoneService {

  private phonesURL = './app/Phones/phones.json';
  private phoneDetailsURL = './app/Phones/';

  constructor(private http: Http) {
  }

  getPhones(): Promise<Phone[]> {
    return this.http.get(this.phonesURL)
      .toPromise()
      .then(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }

  getPhoneDetails(phoneId: string): Promise<PhoneDetails> {
    return this.http.get(this.phoneDetailsURL + phoneId + '.json')
      .toPromise()
      .then(this.extractData);
  }
}

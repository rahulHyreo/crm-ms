import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'multiselect';
  masterData = [{"recruiterId":212,"recruiterName":"Hari Krishnan","managerId":321,"managerName":"Oormila  ","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":209,"recruiterName":"Gokul G","managerId":321,"managerName":"Oormila  ","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":220,"recruiterName":"Amith ","managerId":212,"managerName":"Hari Krishnan","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":5,"businessUnitName":"Operation"},{"recruiterId":209,"recruiterName":"Gokul G","managerId":569,"managerName":"hari krishna","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":5,"businessUnitName":"Operation"},{"recruiterId":209,"recruiterName":"Gokul G","managerId":212,"managerName":"Hari Krishnan","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":5,"businessUnitName":"Operation"},{"recruiterId":583,"recruiterName":"Gladis ","managerId":212,"managerName":"Hari Krishnan","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":584,"recruiterName":"Shubham ","managerId":212,"managerName":"Hari Krishnan","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":590,"recruiterName":"Elen ","managerId":212,"managerName":"Hari Krishnan","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":593,"recruiterName":"Elen ","managerId":592,"managerName":"Oormila M","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":596,"recruiterName":"Varam ","managerId":595,"managerName":"Swarali ","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":212,"recruiterName":"Hari Krishnan","managerId":595,"managerName":"Swarali ","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":220,"recruiterName":"Amith ","managerId":209,"managerName":"Gokul G","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":220,"recruiterName":"Amith ","managerId":597,"managerName":"Sreenath Narayanan","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":597,"recruiterName":"Sreenath Narayanan","managerId":220,"managerName":"Amith ","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":598,"recruiterName":"Kavin Hyreo","managerId":599,"managerName":"Rahul Hyreo","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":585,"recruiterName":"Elen ","managerId":602,"managerName":"Oormila ","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":599,"recruiterName":"Rahul Hyreo","managerId":597,"managerName":"Sreenath Narayanan","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":598,"recruiterName":"Kavin Hyreo","managerId":597,"managerName":"Sreenath Narayanan","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":1,"recruiterName":"DEFAULT RECRUITER","managerId":1,"managerName":"DEFAULT RECRUITER","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":599,"recruiterName":"Rahul Hyreo","managerId":220,"managerName":"Amith ","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":220,"recruiterName":"Amith ","managerId":598,"managerName":"Kavin Hyreo","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"},{"recruiterId":209,"recruiterName":"Gokul G","managerId":595,"managerName":"Swarali ","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":221,"recruiterName":"Anu Roy","managerId":595,"managerName":"Swarali ","departmentId":25,"departmentName":"TESTD","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":205,"recruiterName":"qa hyreo","managerId":604,"managerName":"Krishna Raj","departmentId":11,"departmentName":"INTERNET OF THINGS","subBusinessUnitId":9,"subBusinessUnitName":"FINANCE","businessUnitId":5,"businessUnitName":"Operation"},{"recruiterId":220,"recruiterName":"Amith ","managerId":606,"managerName":"Veena J","departmentId":9,"departmentName":"DATA SCIENCES & ENGG","subBusinessUnitId":7,"subBusinessUnitName":"CUSTOMER SUCCESS","businessUnitId":2,"businessUnitName":"HYREO"},{"recruiterId":213,"recruiterName":"Akshay  ","managerId":608,"managerName":"Ananya P","departmentId":6,"departmentName":"EXPERIENCE DESIGN","subBusinessUnitId":4,"subBusinessUnitName":"HYREO","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":208,"recruiterName":"Elen Thendral","managerId":595,"managerName":"Swarali ","departmentId":2,"departmentName":"DIGITAL INTEGRATION","subBusinessUnitId":2,"subBusinessUnitName":"SALESFORCE","businessUnitId":7,"businessUnitName":"IT"},{"recruiterId":321,"recruiterName":"Oormila  ","managerId":609,"managerName":"Ajay Raj","departmentId":7,"departmentName":"DATA MGMT & ENGG","subBusinessUnitId":5,"subBusinessUnitName":"TESTBU","businessUnitId":9,"businessUnitName":"R&D"},{"recruiterId":211,"recruiterName":"Kevin Sunny","managerId":209,"managerName":"Gokul G","departmentId":4,"departmentName":"SALESFORCE","subBusinessUnitId":3,"subBusinessUnitName":"DATA & INTELLIGENCE","businessUnitId":7,"businessUnitName":"IT"},{"recruiterId":215,"recruiterName":"Gitish  ","managerId":221,"managerName":"Anu Roy","departmentId":8,"departmentName":"BUSINESS ANALYTICS","subBusinessUnitId":6,"subBusinessUnitName":"QA","businessUnitId":10,"businessUnitName":"Marketing"},{"recruiterId":574,"recruiterName":"Myza jose","managerId":613,"managerName":"Sreeram N","departmentId":12,"departmentName":"MHYREO","subBusinessUnitId":10,"subBusinessUnitName":"PRODUCTION","businessUnitId":11,"businessUnitName":"Planning"},{"recruiterId":212,"recruiterName":"Hari Krishnan","managerId":615,"managerName":"Megha S","departmentId":3,"departmentName":"DIGITAL MKT & COMM","subBusinessUnitId":2,"subBusinessUnitName":"SALESFORCE","businessUnitId":7,"businessUnitName":"IT"},{"recruiterId":209,"recruiterName":"Gokul G","managerId":576,"managerName":"Sahaf Ismail","departmentId":5,"departmentName":"EMERGING DIGITAL SOL","subBusinessUnitId":4,"subBusinessUnitName":"HYREO","businessUnitId":6,"businessUnitName":"HR"},{"recruiterId":221,"recruiterName":"Anu Roy","managerId":617,"managerName":"Farzana ","departmentId":10,"departmentName":"ADV VISUALIZATION","subBusinessUnitId":11,"subBusinessUnitName":"SALES","businessUnitId":3,"businessUnitName":"DIGITAL"},{"recruiterId":599,"recruiterName":"Rahul Hyreo","managerId":221,"managerName":"Anu Roy","departmentId":1,"departmentName":"Default","subBusinessUnitId":1,"subBusinessUnitName":"Default","businessUnitId":1,"businessUnitName":"Default"}];

  bu! : Observable<any>;
  sbu! : Observable<any>;
  dep! : Observable<any>;
  man! : Observable<any>;
  rec! : Observable<any>;

  ngOnInit() {
    this.bu = this.getDistinctProperties('businessUnitId', 'businessUnitName');
    this.sbu = this.getDistinctProperties('subBusinessUnitId', 'subBusinessUnitName','businessUnitId');
    this.dep = this.getDistinctProperties('departmentId', 'departmentName','subBusinessUnitId');
    this.man = this.getDistinctProperties('managerId', 'managerName','departmentId');
    this.rec = this.getDistinctProperties('recruiterId', 'recruiterName','managerId');
  }

  getDistinctProperties(propertyId: string, propertyName: string, parentId? : string): any {
    return of(this.masterData.reduce((acc: any, curr: any) => {
      console.log('acc',acc)
      console.log('curr',curr)
      const exists = acc.find((item: any) => item.id === curr[propertyId]);
      if (!exists) {
        if (parentId == undefined) {
          acc.push({
            id: curr[propertyId],
            label: curr[propertyName],
          });
        } else {
          acc.push({
            id: curr[propertyId],
            label: curr[propertyName],
            parentId : curr[parentId]
          });
        }
      }
      return acc;
    }, []));
  }
}

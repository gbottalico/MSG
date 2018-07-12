import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateITParserFormatter } from "../data/ngb-date-it-parser-formatter"

import { I18n, CustomDatepickerI18n } from '../data/datepicker_IT';
import { DatepickerService } from '../datepicker.service';


const now = new Date();

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [
              I18n,
              { provide: NgbDateParserFormatter, useClass: NgbDateITParserFormatter },
              { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }
            ] // define custom NgbDatepickerI18n provider
})

export class DatepickerComponent implements OnInit{
  model: NgbDateStruct;
  date: Date;

  constructor(private datepickerService : DatepickerService) { }

  ngOnInit(){
    this.selectToday();
  }

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.bindDate();
  }

  bindDate(){
    this.date = new Date(this.model.year, this.model.month-1, this.model.day);
    this.datepickerService.bind(this.date);
  }
}

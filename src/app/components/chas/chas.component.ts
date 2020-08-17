import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-chas',
  templateUrl: './chas.component.html',
  styleUrls: ['./chas.component.css']
})
export class ChasComponent implements OnInit {
  sizeForm: FormGroup;
  submitted: boolean;
  ctrl: FormControl;

  arrRow: number[] = [];
  arrCol: number[] = [];
  countRow: number;
  countCol: number;
  message: string = ''
  userChoseHistory:string[] = []

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.sizeForm = this.fb.group({
      col: ['', [Validators.required]],
      row: ['', [Validators.required]],
    });

  }


  onSubmit() {
    this.countCol = this.sizeForm.value.col;
    this.countRow = this.sizeForm.value.row;
    this.message = `The Size You Selected is colom: ${this.countCol} rows: ${this.countRow}`
  }

  craeteBord() {
    for (let i = 0; i < this.countCol; i++) {
      this.arrCol.push(i)
    }
    for (let i = 0; i < this.countRow; i++) {
      this.arrRow.push(i)
    }
    for (let i = 0; i < this.arrCol.length; i++) {
      for (let j = 0; j < this.arrRow.length; j++) {
      }
    }
  }

  getPosition(colNum, rowNum){
    console.log(colNum , rowNum);
    this.userChoseHistory.push(`user chose col number: ${colNum} and row number: ${rowNum}`)
    
  }

}

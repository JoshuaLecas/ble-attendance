import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-profdash',
  templateUrl: './profdash.component.html',
  styleUrls: ['./profdash.component.css']
})
export class ProfdashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

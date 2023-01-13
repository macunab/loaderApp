import { Component, OnInit } from '@angular/core';
import { delay, Subject } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit{

  loading: boolean = false;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      })
  }

}

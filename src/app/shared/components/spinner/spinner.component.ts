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

  isLoading: Subject<boolean> = this.spinnerService.isLoading;
  constructor(private spinnerService: SpinnerService) { 
    console.log(this.isLoading);
  }

  ngOnInit(): void {
    this.spinnerService.isLoading
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      })
  }

}

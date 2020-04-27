import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
  @Input()
  public user;


  constructor(
    private  crf: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('need detect')
      this.crf.detectChanges();
    }, 10000);
  }

}

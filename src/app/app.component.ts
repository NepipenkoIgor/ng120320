import { ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit, ViewChildren } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{



  constructor(
    private router: Router,
    private appRef: ApplicationRef,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart)
      )
      .subscribe((event) => {
        console.log(event);
      });
  }

  ngOnInit() {
     // setTimeout(()=>{
     //   console.log('Tick')
     //   this.appRef.tick();
     // }, 5000)
    // vk.getUser((user)=>{
    //   this.zone.run(()=>{
    //     this.user = user;
    //   })
    // })

    this.zone.runOutsideAngular(()=>{

    })
  }
}

// zone => tick()

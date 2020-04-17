import { Injectable } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class CustomPreloadService implements PreloadAllModules {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return of(route)
      .pipe(
        tap((r)=>{console.log(r)}),
        delay(5000),
        mergeMap(() => {
          return fn();
        })
      );
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, delay, from, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'satesto';
  protected readonly obs$: Observable<any> = timer(0, 5000);
}

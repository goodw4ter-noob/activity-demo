import { OnInit } from '@angular/core';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { BehaviorSubject } from "rxjs";
import { ValueForm } from './types';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // public formGroup!: FormGroup<ValueForm>;
  // public value = new BehaviorSubject<string>('');

  // constructor(
  //   private readonly fb: FormBuilder,
  // ) { }

  public ngOnInit(): void {
    // this.initForm();
    // this.onValueChanges();
  }

  // private onValueChanges(): void {
  //   this.formGroup.controls['inputValue'].valueChanges
  //     .pipe(
  //       untilDestroyed(this),
  //       debounceTime(100),
  //       distinctUntilChanged(),
  //     )
  //     .subscribe((value) => this.value.next(value));
  // }

  // private initForm(): void {
  //   this.formGroup = this.fb.group({
  //     inputValue: new FormControl('', { nonNullable: true }),
  //   })
  // }
}

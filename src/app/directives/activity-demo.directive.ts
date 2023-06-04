import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appActivityDemo]',
  exportAs: 'activity'
})
export class ActivityDemoDirective implements OnInit {
  private _interval: any;
  private _inactiveTime = 0;
  public get inactiveTime(): number {
    return this._inactiveTime
  }

  public ngOnInit(): void {
    this.clear();
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(e: MouseEvent): void { this.clear(); }

  @HostListener('keydown', ['$event'])
  public onKeyDown(e: MouseEvent): void { this.clear(); }

  @HostListener('wheel', ['$event'])
  public onWheel(e: MouseEvent): void { this.clear(); }

  private clear(): void {
    this._inactiveTime = 0;
    clearTimeout(this._interval);
    this._interval = setInterval(() => {
      this._inactiveTime += 1000;
    }, 1000);
  }

}

import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[ngSync]',
  standalone: true
})
export class NgSyncDirective implements OnInit {
  @Input() public set ngSync(value: unknown) {
    Object.assign(this.context, {
      ...((typeof value === 'object') ? value : {}),
      ngSync: value,
      $implicit: value
    });
  };
  private readonly context: {
    ngSync?: unknown;
    $implicit?: unknown;
    [key: string | number | symbol]: number | string | object | null | undefined | symbol | unknown;
  } = {
    ngSync: null,
    $implicit: null
  };
  private readonly templateRef: TemplateRef<unknown> = inject(TemplateRef);
  private readonly viewRef: ViewContainerRef = inject(ViewContainerRef);
  public ngOnInit(): void {
    this.viewRef.createEmbeddedView(this.templateRef, this.context);
  };
}

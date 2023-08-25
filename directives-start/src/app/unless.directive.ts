import { Directive, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private tRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  @Output() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tRef);
    } else {
      this.vcRef.clear();
    }
  }


}

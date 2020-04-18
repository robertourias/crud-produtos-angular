import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {
  @Input('myForEm') numbers: number[];
  @Input('myForUsando') text: string;

  constructor(
    private contanier: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.contanier.createEmbeddedView(
        this.template, { $implicit: number }
      );
    }
  }

}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { BrandsApiService } from '../../features/brands/services/brands-api.service';

@Directive({
  selector: '[appWelcome]',
  standalone:true
})
export class AppWelcomeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private brandService: BrandsApiService,
  ) { }

  @Input() set appWelcome(delay: number) {
    this.viewContainer.clear();
    console.log('Welcome');
    this.viewContainer.createEmbeddedView(this.templateRef);
    // Marka listesini servisten al
    this.brandService.getList().subscribe(() => {
      // Belirli bir süre sonra hoş geldiniz mesajını kaldır
      setTimeout(() => {
        this.viewContainer.clear();
      }, delay);
    });
  }
  }



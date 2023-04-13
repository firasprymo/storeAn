import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomBreakPointsProvider } from 'app/layout/custom-breakpoints';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';
import { CommandesComponent } from './commandes/commandes.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [FlexLayoutModule.withConfig({disableDefaultBps: true}), VerticalLayoutModule, HorizontalLayoutModule, FormsModule, NgxPaginationModule],
  providers: [CustomBreakPointsProvider],
  exports: [VerticalLayoutModule, HorizontalLayoutModule],
  declarations: [
    CommandesComponent
  ]
})
export class LayoutModule {}

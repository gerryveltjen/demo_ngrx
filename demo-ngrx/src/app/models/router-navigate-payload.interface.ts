import { NavigationExtras } from '@angular/router';

export interface RouterNavigatePayload {
  path: any[];
  navigationExtras?: NavigationExtras;
}

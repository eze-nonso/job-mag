import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'job-mag';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "ellipse",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/ellipse.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "location",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/location.svg")
    );
  }

}

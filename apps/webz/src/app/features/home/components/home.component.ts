import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@monorepo/xplat/core';
import { ApiService } from '@monorepo/xplat/web/core';

@Component({
  selector: 'wbz-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(private api: ApiService) {
    super();
  }

  ngOnInit(): void {
    this.api.getApi().subscribe((res) => console.log(res));
  }
}

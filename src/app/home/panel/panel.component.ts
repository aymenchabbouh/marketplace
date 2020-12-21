import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {PanelLine} from '../../models/panel-line.model';
import {Panel} from '../../models/panel.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }
  public panel: Panel;
  ngOnInit() {
  }
}

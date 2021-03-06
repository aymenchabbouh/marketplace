import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() public panel: Panel;
  @Output() public selectPanelLine: EventEmitter<PanelLine> = new EventEmitter<PanelLine>();

  ngOnInit() {
  }
  public removeProduct(panelLine: PanelLine){
    this.selectPanelLine.emit(panelLine);
  }

}

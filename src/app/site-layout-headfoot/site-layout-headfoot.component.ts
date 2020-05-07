import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-site-layout-headfoot',
  templateUrl: './site-layout-headfoot.component.html',
  styleUrls: ['./site-layout-headfoot.component.css']
})
export class SiteLayoutHeadfootComponent implements OnInit {
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }


  ngOnInit() {
  }
  public openModal(template: TemplateRef<any>) {

  }

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  public openModal(template: TemplateRef<any>) {

  }


}

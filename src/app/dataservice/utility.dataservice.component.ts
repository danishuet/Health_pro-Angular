import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private userUrlSource = new BehaviorSubject<string>('');
  currentUrl = this.userUrlSource.asObservable();

  private userStatus = new BehaviorSubject<boolean>(false);
  currentStatus = this.userStatus.asObservable();

  private userName = new BehaviorSubject<string>('');
  currentUser = this.userName.asObservable();

  private userId = new BehaviorSubject<number>(0);
  currentUserId = this.userId.asObservable();

  private userInitials = new BehaviorSubject<any>(null);
  currentUserinitials = this.userInitials.asObservable();

  private userPhone = new BehaviorSubject<number>(0);
  currentUserPhoneNo = this.userPhone.asObservable();

  private userRequestId = new BehaviorSubject<string>('');
  currentRequestId = this.userRequestId.asObservable();

  private userCountry = new BehaviorSubject<number>(0);
  currentUserCountry = this.userCountry.asObservable();

  private unAuthorize = new BehaviorSubject<boolean>(false);
  unAuthorizeAttr = this.unAuthorize.asObservable();

  private loadingList = new BehaviorSubject<boolean>(false);
  loadingListAttr = this.loadingList.asObservable();

  private searchrecord = new BehaviorSubject<string>('');
  searchRecordAttr = this.searchrecord.asObservable();

  constructor() { }

  setData(url: string) {
    this.userUrlSource.next(url);
  }

  setUserStatus(val: boolean) {
    this.userStatus.next(val);
  }

  setUser(val: string) {
    this.userName.next(val);
  }

  setUserId(val: number) {
    this.userId.next(val);
  }

  setCountryId(val: number) {
    this.userCountry.next(val);
  }

  setInitials(val: any) {
    this.userInitials.next(val);
  }

  setPhoneNumber(val: number) {
    this.userPhone.next(val);
  }

  setRequestId(val: string) {
    this.userRequestId.next(val);
  }

  setunAuthorizedAttr(val: boolean) {
    this.unAuthorize.next(val);
  }

  setLoadingListAttr(val: boolean) {
    this.loadingList.next(val);
  }

  setSearchRecord(val: string) {
    this.searchrecord.next(val);
  }

}

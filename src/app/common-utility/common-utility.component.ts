import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-utility',
  templateUrl: './common-utility.component.html',
  styleUrls: ['./common-utility.component.css']
})
export class CommonUtilityComponent implements OnInit {
public strength: number;

  constructor() { }

  ngOnInit() {
  }

  PasswordStrength(pwString): number {
    if (pwString === undefined) { pwString = ''; }
    let strength = 0;
    strength += /[A-Z]+/.test(pwString) ? 1 : 0;
    strength += /[a-z]+/.test(pwString) ? 1 : 0;
    strength += /[0-9]+/.test(pwString) ? 1 : 0;
    strength += /[\W]+/.test(pwString) ? 1 : 0;
    // tslint:disable-next-line:max-line-length
    strength === 1 ? this.strength = 30 : strength === 2 ? this.strength = 50 : strength === 3 ? this.strength = 70 : strength === 4 ? this.strength = 100 : this.strength = 0;
    return this.strength;
    }

  keyRestrict(e, validchars, casesensitives, onceevery, onceoneof): boolean {
    onceevery = onceevery ? onceevery : '';
    onceoneof = onceoneof ? onceoneof : '';
    if (!validchars) { return true; }
    let keychar = '', i = 0;
    const key = e.which ? e.which : e.keyCode;
    const obj = e.target ? e.target : e.srcElement;
    if (key == null) { return true; }
    keychar = String.fromCharCode(key);
    validchars = (validchars + onceevery + onceoneof);
    if (!casesensitives) {
        keychar = keychar.toLowerCase();
        validchars = validchars.toLowerCase();
        onceevery = onceevery.toLowerCase();
        onceoneof = onceoneof.toLowerCase();
    }
    for (i = 0; i < (onceevery + onceoneof).length; i++) {
        if (i < onceevery.length) {
            if (obj.value.indexOf(onceevery.charAt(i)) !== -1 && keychar === onceevery.charAt(i)) {
              return false;
            }
        } else {
            if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) !== -1 && onceoneof.indexOf(keychar) !== -1) { return false; }
        }
    }
    if (validchars.indexOf(keychar) !== -1) {
      return true;
    }
    if (key == null || key === 8) {
      return true;
    }
    return false;
  }


}

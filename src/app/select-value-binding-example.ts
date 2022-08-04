import {Component, ViewEncapsulation} from '@angular/core';

/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding-example',
  templateUrl: 'select-value-binding-example.html',
  styleUrls: ['./select-value-binding-example.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class SelectValueBindingExample {
  selected = 'option2';
}
// ViewEncapsulation.None

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
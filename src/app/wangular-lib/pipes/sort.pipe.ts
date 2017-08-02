// ------------------------------------------------------------------------------
// ----- sort.pipe.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: pipe to sort a given array by the property field provided (args)

import { Pipe } from "@angular/core";

@Pipe({
	name: "sort"
})
export class ArraySortPipe {
	transform(array: Array<string>, args: string): Array<string> {
		array.sort((a: any, b: any) => {
			if (a[args].toLowerCase() < b[args].toLowerCase()) {
				return -1;
			} else if (a[args].toLowerCase() > b[args].toLowerCase()) {
				return 1;
			} else {
				return 0;
			}
		});
		return array;
	}
}

/*
EXAMPLE USES:

<!-- sort a table -->
<table class="table">
    <thead>
        <tr>
            <th class="col-xs-4">Name</th><th>Description</th><th class="col-xs-1">Code</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let s of sourceTypes | sort: 'name'"> <!-- see sort pipe here -->
            <td>{{ s.name }}</td>
            <td>{{ s.description }}</td>
            <td>{{ s.code }}</td>
        </tr>
    </tbody>
</table>

<!-- sort a select dropdown by 'name' -->
<select name="chosenRegion" [(ngModel)]="chosenRegion" (ngModelChange)="onRegionSelect($event)">
    <option value=""></option>
    <option *ngFor="let r of regionList | sort: 'name'" [ngValue]="r.id">{{r.name}}</option> <!-- see sort pipe here -->
</select>

*/
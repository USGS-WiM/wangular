# Angular Library for custom Pipes and Directives

To install the wangular library add `"wangular": "git+https://github.com/USGS-WiM/wangular.git#master"` to your package.json file.
Then run `npm install`. This will add the needed files to your node_modules folder.

In the **App.module** or **shared.module** file (depending on your setup) add:

```import { WangularModule } from 'wangular/src/app/wangular';```
and add 

`WangularModule` to the `@NgModule` `imports: []` and `exports: []`


**Pipes Included**
* Sort Pipe
  * pipe to sort a given array by the property field provided (args)

* Filter By ID pipe
  * pipe that uses a passed-in property field name and an array of objects and returns the correct property value based on the key.
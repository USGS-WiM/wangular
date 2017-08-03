# Angular Library for custom Pipes and Directives

To install the wangular library run `npm install wangular`

In the **App.module** or **shared.module** file (depending on your setup) add:

```import { WangularModule } from 'wangular';```
and add 

`WangularModule` to the `@NgModule` `imports: []` and `exports: []`


**Pipes Included**
* Sort Pipe
  * pipe to sort a given array by the property field provided (args)

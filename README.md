ANGULAR BUILD-IN PIPES
Angular'ın kendi içinde gömülü halde gelen Pipe'ları vardır. Bunlar  AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, KeyValuePipe, LowerCasePipe ,PercentPipe, SlicePipe, TitleCasePipe ve UpperCasePipe'dır.

-DatePipe:  Verilen tarih formatındaki veriyi biçimlendirmemizi sağlar.
-LowerCasePipe: Verilen stringin tüm harflerini küçültür.
-UpperCasePipe: Verilen stringin tüm harflerini büyütür.
-SlicePipe: Stringin belirli bir aralıktaki bölümünü göstermeye yarar.
slice:index1:index2 şeklinde kullanılır ve index1-index2 arasındaki karakterleri gösterir.
-JSONPipe: Objenin JSON formatında görüntülenmesini sağlar.
-TitleCasePipe: Verilen stringin başlık şeklinde görüntülenmesini sağlar.
-PercentPipe: Verilen sayı değerini, yine verilen parametrelere göre %'lik biçimde yazdırmayı sağlar.
-AsyncPipe: Observable'ın veya Promise'in değerini doğrudan şablon içinde kullanmayı sağlar. Bu pipe, bir Observable'dan gelen değeri otomatik olarak izler ve şablonu günceller. Geliştirici herhangi bir manuel abonelik veya unsubscribe işlemi yapmadan bu veriyi kullanabilir.
-KeyValuePipe: Object ve mapleri for ile dönülebilir hala getirir.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

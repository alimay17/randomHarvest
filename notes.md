# Project Setup
- `ng new project-name --prefix prefixName`
- For bootstrap: 
  - Inside the project folder run `npm install --save bootstrap@3`
  - add to angular.json in styles: `"node_modules/bootstrap/dist/css/bootstrap.min.css"`

## Components
Create a new component with `ng generate component component-name` or `ng g c component-name`  
*Use --flat to generate at top of folder and --skip-tests to prevent tests files being generated*  
In HTML the use syntax is:
- element style `<component-name>` 
- attribute style `<htmlElement component-name>`
- class style `<htmlElement class='component-name>`
Inside the app.component.ts file the selector attributes are
- element style `'component-name'`
- attribute style `[component-name]`
- class style `.component-name`

## Data Binding 
- string interpolation
- property binding use square brackets `[property]='property'`
- event binding `(eventName)='executeCode` use `(event)='function($event)` to pass event data.
## Directives
### Structural
have leading `*` can affect entire DOM. add or remove other elements. Can only have one structural directive on an element at a time.  
Use regular property binding when using `<ng-template [ngIf]="condition"></ng-template>` *not generally used* 
- `*ngIf='condition to evaluate to true or false'`
- `*ngFor='let recipe of recipes'` loop through items in DOM without duplicating code
- put in component to loop through list of each: `<app-recipe-item *ngFor="let recipe of recipes"></app-recipe-item>`
- ngSwitch - Special case with special syntax. The star is on the child elements as switch cases.

The template will only render the child element that matches the propertyValue set in the component template. If it doesn't match any it will display the default
```html
<!-- in Template -->
<element ngSwitch="yourComponentProperty">
  <childElement *ngSwitchCase="aValue"></childElement>
  <childElement *ngSwitchDefault></childElement> <!-- for default case -->
</element>
```
Component must have a matching property
```javascript
// in component
yourComponentProperty = 'aValue';
``` 

#### Custom
There are two ways to create, Manually and with `ng g d directive-name` Use `--skip-tests` flag to prevent test file creation.  
Best practice is to create a directives folder at root level to hold your new directive classes. can use sub-folders. The file naming convention is `directives/directive-name.directive.ts`  

*When using manual creation remember to import the directives in the app.module.ts and add to the declarations array*

##### Directive Class Structure
best practice is to initialize properties in `ngOnInit()`
``` Javascript
import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: '[selectorName]' // [] indicate to angular that this will be used like an attribute on an element
})
export class DirectiveName {
  // this is basic access structure. 
  @Input() propertyName // must be the same as the selector or it wont work
  //You need references to the template and view.
  // in other words, to what is doing the changing and what is being changed.
  constructor(private  templateRef: TemplateRef<any>, vcRef: ViewContainerRef) {} 
}
```
Other important syntax:
``` Javascript
// to change view
this.vcRef.createEmbeddedView(this.templateRef); // template ref is what you want the changes to be

// remove view or changes
this.vcRef.clear()
```
#### To Use
follows the same usage as built in directives
- `<element *customDirective="condition">` - in HTML 

### Attribute 
Looks like normal HTML attributes, affects only elements they sit on. Makes non destructive changes
- `[ng-class]="{className: boolean condition if needed}"`
- `[ng-style]="{styling: boolean condition if needed}"`
- `<ng-content><ng-content>`. This is a template directive used in templates. Allows you serve the content inside your component tags.

#### Custom
There are two ways to create, Manually and with `ng g d directive-name` Use `--skip-tests` flag to prevent test file creation.  
Best practice is to create a directives folder at root level to hold your new directive classes. can use sub-folders. The file naming convention is `directives/directive-name.directive.ts`  

*When using manual creation remember to import the directives in the app.module.ts and add to the declarations array*

##### Directive Class Structure
best practice is to initialize properties in `ngOnInit()`
``` Javascript
import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: '[selectorName]' // [] indicate to angular that this will be used like an attribute on an element
})
export class DirectiveName {
  // this is basic access structure
  constructor(private  elementRef: ElementRef) {} // include this if you want access to the element the directive is placed on
}

// you will need to import Renderer2 to use
export class DirectiveName {
  // this is render access structure
  constructor(private  elementRef: ElementRef, private renderer: Renderer2) {} 
  // use
  this.renderer. // multiple different methods to manipulate the DOM
}
```
##### To Use
- Add to app module  by import and then in `declarations: [CustomDirective]`. If you used the `ng g d` command then you don't need to add this.
- `in template <element directiveSelectorName></element>`

### Directive Event Listeners
a decorator that allows event listening in directives
- `@HostListener('domEvent') myDirectiveMethod(eventData: Event)` event Data is optional
- `@HostBinding('elementProperty.subProperty') myDirectiveProperty: string;` 

### Directive Property Binding
- same as all other property binding
### Alias
- set `@Input('directiveSelector')` in your custom directive to set the alias
- set `[directiveSelector]="setting"` in the template to use

## Property Binding
- can assign aliases
- parent to child property binding
- Need property in child component to bind to
- default is properties are only available inside a component

*note- when passing string info you can use `property="value"` instead of `[property]="'value'"`*
### Syntax
#### In parent component template:
  - `[propertyName or aliasName]='elementInParent'`  inside of component element;
  - `<app-recipe-item *ngFor="let recipeEl of recipes" [recipe]="recipeEl"></app-recipe-item>`

#### In child component:
  - `import { Import } from @angular/core`
  - `@Input('alias here') property: type;`

## Event Binding
- can assign aliases
- Child to parent event emitter
### Syntax
#### In child component:
- `@Output() recipeSelected = new EventEmitter<void>();`
- `this.recipeSelected.emit();`
#### In parent component template:
- `<app-shopping-list-edit (ingredientAdded)="onIngredientAdded($event)"></app-shopping-list-edit>`

## Local References
Holds reference to an entire HTML element and its properties
Only works inside the HTML template
Can pass this as a parameter to functions.  
Can reference this in the typescript component using @ViewChild
### Syntax
In element `<htmlElement #nameOfReference></htmlElement>`
- type is property: HTMLInputElement;

## Access Template and DOM with ViewChild and ContentChild
Use a local reference to set up access points in the templates children can access the local reference of their parent and vice versa
### Syntax
create a new property: 
- `@ViewChild('localReferenceName') propertyName!: ElementRef;'` 
- `@ContentChild('localReferenceName') propertyName!: ElementRef;'`  

To access the contents of an element property use `propertyName.nativeElement.valueOrOtherPropertyOfHTMLElement;`

## Component Lifecycle - lifecycle hooks
Methods (in order they are called): 
- ngOnChanges(changes: SimpleChanges) - called after input property changes. takes an argument. must import SimpleChanges.
- ngOnInit - called when component is initialized
- ngDoCheck - called when any changes or events happen
- ngAfterContentInit - after content has been projected
- gnAfterContentCheck - runs after any content changes
- ngAfterViewInit - after the view initialized 
- ngAfterViewCheck - after any view changes or events
- ngOnDestroy - right before element is destroyed

The Difference between content and view is when the DOM is rendered. The content of anything in a typescript component is initialled and loaded before the DOM view is rendered.  
Best practice to use `exports class MyComponent implements hookName` when using lifestyle hooks.  
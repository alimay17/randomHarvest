# Project Setup
- `ng new project-name --prefix prefixName`
- For bootstrap: 
  - Inside the project folder run `npm install --save bootstrap@3`
  - add to angular.json in styles: `"node_modules/bootstrap/dist/css/bootstrap.min.css"`

## Notes
### Components
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

### Data Binding 
- string interpolation
- property binding use square brackets `[property]='property'`
- event binding `(eventName)='executeCode` use `(event)='function($event)` to pass event data.
### Directives
- `*ngFor='let recipe of recipes'` loop through items in DOM without duplicating code
- put in component to loop through list of each: `<app-recipe-item *ngFor="let recipe of recipes"></app-recipe-item>`

## Property Binding
- can assign aliases
- parent to child property binding
- Need property in child component to bind to
- default is properties are only available inside a component
### Syntax
#### In parent component template:
  - `[propertyName or aliasName]='elementInParent'`  inside of component element;
  - `<app-recipe-item *ngFor="let recipeEl of recipes" [recipe]="recipeEl"></app-recipe-item>`

#### In child component:
  - `import { Import } from @angular/core`
  - `@Input(alias here) property: type;`

## Event Binding
- can assign aliases
- Child to parent event emitter
### Syntax
#### In child component:
- `@Output() recipeSelected = new EventEmitter<void>();`
- `this.recipeSelected.emit();`
#### In parent component template:
- `<app-shopping-list-edit (ingredientAdded)="onIngredientAdded($event)"></app-shopping-list-edit>`

## View

## Local References
Holds reference to an entire HTML element and its properties
Only works inside the HTML template
Can pass this as a parameter to functions
### Syntax
In element `<htmlElement #nameOfReference></htmlElement>`
- type is property: HTMLInputElement;
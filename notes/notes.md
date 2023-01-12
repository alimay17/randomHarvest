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
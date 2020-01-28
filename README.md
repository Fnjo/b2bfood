# B2B food

### Setup
```
Clone repo
$yarn
$yarn start
```
<br />
B2B food is a web application which includes a dashboard and a orderering view. It is made in React 

<br />

### Components
The components, views and the router can be found in the components map

<br />

### Stubdata
A check will be done on load at App.jsx to check if the localstorage contains the needed data. If the data isnt there or if the version isnt up to date, stubdata will be loaded in (or will be replacing the old dataset entirely) 

<br />

### Dashboard and orderview
- The dashboard is set on root. 
- The orderview can be found on root/#/order/{companyName}
  Id param is checked onmount to show the correct order page
<br />

### Other details
* Used proptypes for typechecking
* Added Sass for styling
* Used Material-UI library for the tables
<br />

### Project structure
```
public
 ├── favicon.ico
 ├── index.html
 ├── manifest.json
src
 ├── components
      ├── buttons
      ├── forms
      ├── history
      ├── modals
      ├── nav
      ├── order
      ├── router.ks
      ├── table
      ├── tabs
      ├── titles
      └── views
 ├── images
 ├── App.css
 ├── App.js
 ├── index.css
 └── index.js
```

<br />

### Todo
- Edit / remove feature
- Checkboxes for cash (and other) payments so these will show up in the payments tab
- Expand orderhistory cards
- **Database (firebase)**
- **Authentication**
- Paymentsystem
- Page fallback when certain page/company is not found

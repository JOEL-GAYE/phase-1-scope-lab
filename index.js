// Write your solution in this file!
// Step 1: Declare a global variable
 customerName = 'bob';

// Step 2: Function to uppercase the global variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Step 3: Function to set global bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Step 4: Function to overwrite global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Step 5: Declare a constant and try to change it
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // Error: Assignment to constant variable.
}

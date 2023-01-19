// TODO: Add a comment explaining role of the index.js file and import statements
// used to link box and header js files, combine all components together, and adds event listeners 
import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

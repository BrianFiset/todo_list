import 'normalize.css';
import './style.css';
import { start } from './DOM/task';
import { features } from './DOM/features';
import { changePage } from './DOM/changePage';
import { runProject } from './DOM/projectPage';

runProject();
start();
features();
changePage();
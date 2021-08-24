import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import ClassComponentDemo from '../concepts/ClassComponents/ClassComponentDemo';
import JSX from '../concepts/JSX/JSX';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/classcomponent'>Class Component</Link></li>
                    <li><Link to='/jsx'>JSX</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/functionalcomponent'><FunctionalComponentDemo /></Route>
                    <Route exact path='/classcomponent'><ClassComponentDemo /></Route>
                    <Route exact path='/jsx'><JSX /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;
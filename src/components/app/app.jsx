import './app.css';

import Spinner from '../spinner';
import SimpleCtx from '../pages/simple/simpleHoc';
import SimpleHOC from '../pages/simple/simpleCtx';
import SimpleHook from '../pages/simple/simpleHook';

const App = () => {
    return (
        <div className="app">
            <Spinner />
            <SimpleCtx />
            <SimpleHOC />
            <SimpleHook />
        </div>
    )
};

export default App;
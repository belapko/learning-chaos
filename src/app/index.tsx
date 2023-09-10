import '@/app/styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { withRouter } from './providers';
import { classNames } from '@/shared/lib/classNames';
import { Routing } from '@/pages';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Routing />
        </div>
    );
};

export default withRouter(App);

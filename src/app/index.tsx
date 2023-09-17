import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { withRouter } from './providers';
import { classNames } from '@/shared/lib/classNames';
import { Routing } from '@/pages';
import { Navbar } from '@/widgets/navbar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar />
            <Routing />
        </div>
    );
};

export default withRouter(App);

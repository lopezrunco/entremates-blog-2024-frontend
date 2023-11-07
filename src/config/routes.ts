import IRoute from '../interfaces/route';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import BlogPage from '../pages/blog';
import EditPage from '../pages/edit';

const authRoutes: IRoute[] = [
    {
        path: '/login',
        exact: true,
        auth: false,
        component: LoginPage,
        name: 'Login'
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: LoginPage,
        name: 'Register'
    }
];

const blogRoutes: IRoute[] = [
    {
        path: '/edit',
        exact: true,
        auth: true,
        component: EditPage,
        name: 'Edit'
    },
    {
        path: '/edit/:blogID',
        exact: true,
        auth: true,
        component: EditPage,
        name: 'Edit'
    },
    {
        path: '/blogs/:blogID',
        exact: true,
        auth: false,
        component: BlogPage,
        name: 'Blog'
    }
];

const mainRoutes: IRoute[] = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: HomePage,
        name: 'Home'
    }
];

const routes: IRoute[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;

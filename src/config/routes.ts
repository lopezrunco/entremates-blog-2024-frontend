import IRoute from '../interfaces/route';

import HomePage from '../pages/home';
import MagazinePage from '../pages/magazine';
import LoginPage from '../pages/login';
import BlogPage from '../pages/blog';
import EditPage from '../pages/edit';
import BlogListPage from '../pages/blogList';
import ContactPage from '../pages/contact';

const authRoutes: IRoute[] = [
    {
        path: '/login',
        exact: true,
        auth: false,
        component: LoginPage,
        name: 'Login'
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
    },
    {
        path: '/revista',
        exact: true,
        auth: false,
        component: MagazinePage,
        name: 'Magazine'
    },
    {
        path: '/novedades',
        exact: true,
        auth: false,
        component: BlogListPage,
        name: 'BlogList'
    },
    {
        path: '/contacto',
        exact: true,
        auth: false,
        component: ContactPage,
        name: 'Contact'
    }
];

const routes: IRoute[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;

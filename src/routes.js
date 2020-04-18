import React from 'react';

import { 
    HomePage,
    LoginPage,
} from 'pages';

export const routes = [
    {
        path: '/',
        component: HomePage,
        protect: true,
    },
    {
        path: '/login',
        component: LoginPage,
        layoutProps: {
            disableHeader: true,
            disableSidebar: true,
            disableFooter: true,
        },
    },
    /*
    {
        path: '/page-sample',
        component: LoginPage,
        protect: true,
        sidebar: () => <span>Sample Page</span>
    },
    */
];
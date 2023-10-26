import { INavbarData } from "./helper";
export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'Products',
        icon: 'fal fa-file',
        label: 'Products',
        items: [
            {
                routeLink: 'Products',
                label: 'Products List',
            },
            {
                routeLink: 'Products/Create',
                label: 'Create Product',
            }
        ]
    },

   
    {
        routeLink: 'Categories/list',
        icon: 'fal fa-tags',
        label: 'Categories',
        
    },
    /*{
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens'
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },*/
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: false,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    },
];
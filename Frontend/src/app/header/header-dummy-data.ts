export const languages =[
    {
        language: 'English',
        flag: 'us'
    },
    {
        language: 'French',
        flag: 'france'
    },
   
];

export const notifications= [
    {
        icon: 'far fa-cloud-download',
        subject: 'Download complete',
        description: 'Download was made by Admin account'
    },
    {
        icon: 'far fa-cloud-download',
        subject: 'Download complete',
        description: 'Download was made by Admin account'
    },
    {
        icon: 'far fa-trash',
        subject: '20 MB trash files',
        description: '20 MB of memory was released'
    },

];

export const userItems= [
    {
        icon: 'far fa-user',
        label: 'Profile',
        route: "",
        action: ""
    },
    {
        icon: 'far fa-cog',
        label: 'Settings',
        route:"",
        action: ""
    },
    {
        icon: 'far fa-unlock-alt',
        label: 'Lock screen',
        route:"",
        action: ""
    },
    {
        icon: 'far fa-power-off',
        label: 'Logout',
        route:"/login",
        action: 'onLogout'
    },

];
//路由
const routes = [
    {
        path: '/',
        redirect:"/home"
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        children:[
            {
                path: '/home/about',
                name: 'about',
                component: () => import('@/views/about/index.vue')
            }
        ]
    },
   
]

export default routes
//路由
const routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    }, 
    {
        path: '/shop',
        name: 'shop',
        component: () => import('@/views/shop/index.vue'),
        children: [
            {
                path: "/shop",
                redirect:'/shop/manager'
            },
            {
                path: '/shop/manager',
                name: 'about',
                component: () => import('@/views/shop/manager/index.vue')
            }
        ]
    },
]

export default routes
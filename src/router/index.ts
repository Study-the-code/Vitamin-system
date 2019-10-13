

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path:'/home',
        name:'home',
        component:()=>import ('@/views/home/index.vue'),
         children:[{
            path: '/home/shop',
            name: 'shop',
            component: () => import('@/views/shop/index.vue')
        }]
    }
]

export default routes
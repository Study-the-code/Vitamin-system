

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
        },{
            path:'/home/management',
            name:'management',
            component:()=>import ('@/views/management/index.vue')
            // children:[{
            //     path:'/home/management/managementAdd',
            //     name:'managementAdd',
            //     component:()=>import('@/views/management/managementAdd/index.vue')
            // }]
        }]
    }
]

export default routes
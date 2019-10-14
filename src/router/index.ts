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
<<<<<<< HEAD
   
=======
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
>>>>>>> 73a0c17163fc0f457456b4668c927ce22dd817e4
]

export default routes
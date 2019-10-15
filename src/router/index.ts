//路由
const routes = [
    {
        path:'/home',
        name:'home',
        component:()=>import ('@/views/home/index.vue')
    },{
        path: '/shop',
        name:"shop",
        component: () => import('../views/shop/index.vue'),
        children:[
            {
                path:'/shop/manager',
                name:'manager',
                component:()=>import('../views/shop/manager/index.vue')
            },
            {
            path: '/shop/guide-set',
            name: 'guide-set',
            component: () => import('../views/shop/guide-set/index.vue')
        }]
    }, {
        path: '/',
        redirect:"/home"
    },
]

export default routes
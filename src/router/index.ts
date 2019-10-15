//路由
const routes = [
    {
<<<<<<< HEAD
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
=======
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
    },{
        path:'/page',
        name:'page',
        component:()=>import ('../views/page/index.vue'),
        children:[
            {
                path:'/page/page-config',
                name:'page-config',
                component:()=>import ('../views/page/page-config/index.vue'),
                children:[
                    {
                        path:'/page/page-config/operate',
                        name:'operate',
                        component:()=>import ('../views/page/page-config/operate/index.vue')
                    }
                ]
>>>>>>> 82fbd495ce23b2e6d903b70f33cf448c08313dc9
            }
        ]
    },{
        path:'/team',
        name:'team',
        component:()=>import ('../views/team/index.vue'),
        children:[{
            path:'/team/staff',
            name:'staff',
            component:()=>import ('../views/team/staff/index.vue')
        },{
            path:'/team/shopping-guide',
            name:'shopping-guide',
            component:()=>import ('../views/team/shopping-guide/index.vue')
        }]
    },{
        path:'/orders',
        name:'orders',
        component:()=>import ('../views/orders/index.vue'),
        children:[{
            path:'/orders/management',
            name:'management',
            component:()=>import ('../views/orders/management/index.vue')
        },{
            path:'/orders/shop-order',
            name:'shop-order',
            component:()=>import ('../views/orders/shop-order/index.vue')
        }]
    }, {
        path: '/',
        redirect:"/home"
    },
]

export default routes
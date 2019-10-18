//路由
const routes = [
    {
        path:'/home',
        name:'home',
        component:()=>import ('@/views/home/index.vue')
    },
    {
        path: '/statistics',
        name:"statistics",
        component: () => import('../views/statistics/index.vue'),  
    },
    {
        path: '/shop',
        name:"shop",
        component: () => import('../views/shop/index.vue'),
        children:[
            {
                path:'/shop/manager',
                name:'manager',
                component:()=>import('../views/shop/manager/index.vue'),
            },
            {
            path: '/shop/guide-set',
            name: 'guide-set',
            component: () => import('../views/shop/guide-set/index.vue')
        }, {
            path:'/shop/manager/detail/:id',
            name:'detail',
            component:()=>import('../views/shop/manager/detail/index.vue')
        }]
    },
    {
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
    },{
        path:'/setting',
        name:'setting',
        component:()=>import ('../views/setting/index.vue'),
        children:[{
            path:'/setting/shop-set',
            name:'set',
            component:()=>import ('../views/setting/shop-set/index.vue')
        },{
            path:'/setting/order',
            name:'order',
            component:()=>import ('../views/setting/order/index.vue'),
            children:[{
                path:'/setting/order/order-set',
                name:'orderSet',
                component:()=>import ('../views/setting/order/orderDet/index.vue')
            }]
        }]
    },{
        path:'/member',
        name:'member',
        component:()=>import ('../views/member/index.vue'),
        children:[
            {
                path:'/member/card',
                name:'card',
                component:()=>import ('../views/member/card/index.vue')
               
            },{
                path:'/member/vip-card',
                name:'vip-card',
                component:()=>import ('../views/member/vip-card/index.vue')
            },{
                path:'/member/qrcode',
                name:'qrcode',
                component:()=>import ('../views/member/qrcode/index.vue')
              
            }, {
                path:'/member/qrcode/upload',
                name:'upload',
                component:()=>import ('../views/member/qrcode/upload/index.vue')
            }
        ]
    } ,{
        path: '/',
        redirect:"/home"
    },
]

export default routes
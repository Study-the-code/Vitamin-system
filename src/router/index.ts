//路由
const routes = [
    {
        path: '/',
        redirect:"/home"
    },
    {
        path:'/home',
        name:'home',
        component:()=>import ('@/views/home/index.vue'),
         children:[{
            path: '/home/processing',
            name: 'processing',
            component: () => import('@/views/order/processing/index.vue') 
        },{
            path: '/home/store',
            name: 'store',
            component: () => import('@/views/order/stores/index.vue') 
        }]
    }
]

export default routes
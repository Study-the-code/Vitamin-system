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
            path: '/home/shop',
            name: 'shop',
            component: () => import('@/views/shop/index.vue')
        },{
            path:'/home/business',
            name:'business',
            component:()=>import ('@/views/business/index.vue')
        },{
            path:'/home/navigation',
            name:'navigation',
            component:()=>import ('@/views/navigation/index.vue')
        }]
    }
]

export default routes
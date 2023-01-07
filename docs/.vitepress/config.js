module.exports = {
    title: "Vue3+Vite+TS学习文档", // 顶部左侧标题
    themeConfig: {
      // 侧边栏
		sidebar: [
			{
				text: 'Start',
				collapsible: true,
				items: [
				  { text: '创建Vite', link: './start/create' },
				  { text: '配置server', link: './start/server' },
				  { text: '配置路径别名', link: './start/alias' },
				]
			},
			{
				text: 'Vue3',
				collapsible: true,
				items: [
				  { text: 'Vite创建vue模板', link: '/vue3/vueCreate' },
				  { text: '配置路由', link: '/vue3/vueRouter' },
				  { text: '模块化路由', link: '/vue3/modulesRouter' },
				  { text: 'Vuex', link: '/vue3/vuex' },
				  { text: '路由守卫', link: '/vue3/routerGuards' },
				  { text: 'ElementUI', link: '/vue3/elementUi' },
				  { text: '引入axios', link: '/vue3/axios' },
				  { text: '封装组件', link: '/vue3/components' },
				]
			},
			{
				text: 'Git',
				collapsible: true,
				items: [
				  { text: 'Git起步', link: '/git/start' },
				  { text: 'Git用法', link: '/git/git' },
				  { text: 'Git常用指令', link: '/git/git常用指令' },
				]
			},
			{
				text: 'NodeJs',
				collapsible: true,
				items: [
				  { text: 'fs模块', link: '/nodeJs/fs' },
				  { text: 'fs拓展', link: '/nodeJs/fs拓展' },
				  { text: 'path', link: '/nodeJs/path' },
				  { text: 'mysql', link: '/nodeJs/mysql' },
				]
			},
		],
      
        socialLinks: [
            { icon: 'github', link: 'https://github.com/gjx2116557388' },
            { icon: 'twitter', link: 'https://twitter.com/lovelilin520' },
            { icon: 'facebook', link: 'https://www.facebook.com/lilin1219' },
			{ icon: 'instagram', link: 'https://www.instagram.com/lovelilin1219/' },
            
           {
             icon: {
               svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
             },
             link: '...'            }
         ],
         //上面是定义社交链接
        nav: [
			  // 顶部右侧导航栏
			  { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
			  {
				text: "预览地址",
				link: "https://github.com/gjx2116557388",
			  },
			  {
				text: "更多地址",
				link: "/contact",
			  },
        ],
		
		// 只有当没有侧边栏的时候才会生效
		// footer: {
		//       message: 'Released under the MIT License.',
		//       copyright: 'Copyright © 2019-present Evan You'
		// }
		
      },
}
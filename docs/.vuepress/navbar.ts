import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {
        text: '首页',
        icon: 'solar:home-2-linear',
        link: '/'
    },
    {
        text: '简介',
        icon: 'solar:info-circle-linear',
        link: '/guide.md'
    },
    {
        text: '更多',
        icon: 'solar:menu-dots-circle-linear',
        items: [
            {
                text: '支持',
                icon: 'solar:tea-cup-linear',
                link: '/donate.md'
            }
        ]
    },

])

import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const springBoot = defineNoteConfig({
    dir: 'spring-boot',
    link: '/spring-boot',
    sidebar: [
        {
            text: 'install',
            icon: 'clarity:install-outline-badged',
            link: 'install/',
            items: [
                'install/01-quickstart',
                'install/02-maven',
                'install/03-gradle',
            ]
        },
        {
            text: 'web',
            icon: 'mdi:web-plus',
            link: 'web/',
            items: [
                'web/01-quickstart',
            ]
        },
        {
            text: 'docker',
            icon: 'simple-icons:docker',
            link: 'docker/',
            items: [
                'docker/01-quickstart',
            ]
        },
        {
            text: 'data',
            icon: 'majesticons:data-line',
            link: 'data/',
            collapsed: true,
            items: [
                'data/01-quickstart',
            ]
        },
        {
            text: 'message',
            icon: 'mage:message-dots-round-fill',
            link: 'message/',
            collapsed: true,
            items: [
                'message/01-quickstart',
            ]
        },
        {
            text: 'cache',
            icon: 'octicon:cache-24',
            link: 'cache/',
            collapsed: true,
            items: [
                'cache/01-quickstart',
            ]
        },
    ]
})

export const notes = defineNotesConfig({
    dir: '/',
    link: '/',
    notes: [springBoot],
})

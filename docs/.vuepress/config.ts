import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {theme} from './theme'
import {addViteOptimizeDepsInclude, addViteSsrExternal} from '@vuepress/helper'
import type {UserConfig} from 'vuepress'

export default defineUserConfig({
    base: '/spring-boot3-study/',
    lang: 'zh-CN',
    title: 'Spring Boot3 Study',
    description: 'A study project for spring boot3',
    head: [
        // 配置站点图标
        ['link', {rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png'}],
    ],
    pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules', '!docs/notes/theme/guide/代码演示/demo/*'],
    extendsBundlerOptions(bundlerOptions, app) {
        addViteOptimizeDepsInclude(bundlerOptions, app, '@simonwep/pickr')
        addViteSsrExternal(bundlerOptions, app, '@simonwep/pickr')
    },
    bundler: viteBundler(),
    shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用
    theme
}) as UserConfig

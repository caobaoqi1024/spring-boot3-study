import type { Theme } from 'vuepress'
import process from 'node:process'
import { plumeTheme } from 'vuepress-theme-plume'

export const theme: Theme = plumeTheme({
    hostname: process.env.SITE_HOST || 'https://caobaoqi1024.github.io/spring-boot3-study/',
    docsRepo: 'caobaoqi1024/spring-boot3-study',
    docsDir: 'docs',
    docsBranch: 'main',
    changelog: { maxCount: 10 },
    contributors: { mode: 'block' },
    editLink: true,
    cache: 'filesystem',
    autoFrontmatter: {
        permalink: true,  // 是否生成永久链接
        createTime: true, // 是否生成创建时间
        title: true,      // 是否生成标题
    },

    plugins: {
        git: true,

        shiki: {
            twoslash: true,
            lineNumbers: 10,
            languages: ['sh', 'ts', 'md', 'html', 'js', 'go', 'kotlin', 'rust', 'vue', 'css', 'json', 'scss', 'yaml', 'bash', 'c++', 'java', 'py', 'ruby', 'make', 'objc', 'swift', 'php', 'rs', 'sql', 'xml', 'zig', 'pug', 'http', 'less', 'styl', 'jsx', 'tsx', 'astro', 'svelte', 'wasm', 'vb', 'bat', 'cs', 'cpp', 'mermaid'],
        },

        markdownEnhance: {
            demo: true,
            chartjs: true,
            echarts: true,
            mermaid: true,
            flowchart: true,
        },
        markdownPower: {
            annotation: true,
            abbr: true,
            imageSize: 'all',
            pdf: true,
            caniuse: true,
            bilibili: true,
            youtube: true,
            artPlayer: true,
            audioReader: true,
            codepen: true,
            replit: true,
            codeSandbox: true,
            jsfiddle: true,
            demo: true,
            npmTo: ['pnpm', 'yarn', 'npm'],
            repl: {
                go: true,
                rust: true,
                kotlin: true,
            },
        },
        markdownMath: {
            type: 'katex',
        },
        watermark: {
            enabled: false,
            watermarkOptions: {
                content: 'spring-boot3-study',
            },
        },
        /**
         * 评论 comments
         * @see https://theme-plume.vuejs.press/guide/features/comments/
         */
        // comment: {
        //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        //   comment: true,
        //   repo: '',
        //   repoId: '',
        //   category: '',
        //   categoryId: '',
        //   mapping: 'pathname',
        //   reactionsEnabled: true,
        //   inputPosition: 'top',
        // },
    },
})

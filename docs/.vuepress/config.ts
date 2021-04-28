import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/resume/',
    locales: {
        '/': {
            lang: 'en-US',
            title: ' CV',
            description: 'claire\'s resume,cv',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '个人履历',
            description: '王利君的个人履历,个人简历'
        }
    },
    themeConfig: {
        // logo: 'https://vuejs.org/images/logo.png',
        locales: {
            '/': {},
            '/zh/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言'
            }
        }
    },
})
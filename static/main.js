window.$docsify = {
    basePath: window.location.hostname === "localhost" ? "/" : "/docsify-doc/",
    // 本地运行命令：docsify serve
    // 封面
    coverpage: true,
    // 侧边栏标题
    name: '目录',
    // 右上角图标
    repo: 'https://github.com/mzyaoo/docsify-doc',
    // 侧边栏
    loadSidebar: true,
    // 设置生成目录的最大层级
    subMaxLevel: 4,
    // 切换页面后是否自动跳转到页面顶部
    auto2top: true,
    // 最大支持渲染的标题层级
    maxLevel: 4,
    // 导航栏
    loadNavbar: true,
    // 小屏设备下合并导航栏到侧边栏
    mergeNavbar: true,
    // 侧边栏配置
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md',
        '/.*/_navbar.md': '/_navbar.md'
    },
    // 字数统计
    count: {
        countable: true,
        fontsize: '1.0em',
        color: 'rgb(90,90,90)',
        language: 'chinese',
        float: 'top',
        position: 'top'
    },
    // tab
    tabs: {
        persist: true, // default
        sync: true, // default
        theme: 'classic', // default
        tabComments: true, // default
        tabHeadings: true // default
    },
    // 搜索
    search: {
        placeholder: 'Search',
        noData: '找不到结果!',
        depth: 3
    },
    // 页脚
    pagination: {
        previousText: '上一章节',
        nextText: '下一章节',
    },
    // 代码块隐藏
    hideCode: {
        scroll: false, // 启用滚动
        height: 200 // 折叠高度
    },
    // 侧边栏折叠
    // sidebarDisplayLevel: 1,
    // 暗黑风格配置
    darklightTheme: {
        defaultTheme: 'light',
        siteFont: 'Source Sans Pro,Helvetica Neue,Arial,sans-serif',
        codeFontFamily: 'Roboto Mono, Monaco, courier, monospace',
        bodyFontSize: '15px',
        dark: {
            background: 'rgb(28,32,34)',
            highlightColor: '#e96900',
            codeBackgroundColor: 'rgb(34,39,46)',
            codeTextColor: '#b4b4b4',
        },
        light: {
            highlightColor: '#e96900',
        },
    },
    // 代码块复制
    copyCode: {
        buttonText: '点击复制',
        errorText: '出现错误！',
        successText: '复制成功！',
    },
    // 自定义插件
    plugins: [
        function (hook, vm) {
            hook.init(function () {
                // 初始化完成后调用，只调用一次，没有参数。
            });

            hook.beforeEach(function (content) {
                // 每次开始解析 Markdown 内容时调用
                // ...
                return content;
            });


            hook.afterEach(function (html, next) {
                // 解析成 html 后调用。
                // beforeEach 和 afterEach 支持处理异步逻辑
                // ...
                // 异步处理完成后调用 next(html) 返回结果
                next(html);
            });

            hook.doneEach(() => {
                // 每次路由切换时数据全部加载完成后调用，没有参数。

            });

            hook.mounted(function () {
                // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
            });

            hook.ready(function () {
                // 初始化并第一次加载完成数据后调用，没有参数。
            });
        }
    ],
    'flexible-alerts': {
        note: {
            label: "Hinweis"
        },
        tip: {
            label: "Tipp"
        },
        warning: {
            label: "Warnung"
        },
        attention: {
            label: "Achtung"
        }
    }
};
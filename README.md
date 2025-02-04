# Hack Your Heart

## Features

没什么特色，都是一些基础功能，你能在其他主题看到相同功能。唯一的特色可能就是我的每种标签颜色是随机的，许多细节真的非常难搞。搜索功能非常快速美观，代码块结合chroma自定义效果，目录自己写的，各种公式、javascript其中各种冲突，搞得累死我了。

写这个主题是因为我在Hugo的主题仓库里没有找到喜欢的主题。

因为我是一个~~黑客~~脚本小子，我想要更有黑客风格的博客，但是没找到。于是想要自己写一个博客主题。

由于我不会前端，写这个主题十分困难，许多HTML、CSS、JS、F12工具都是我现学的。这个主题也是我边学边写。

i18n还没搞

虽然页面有所借鉴，但都是我自己写的代码，代码非常烂，性能也不好。但是够我自己用了。

参考Hack The Box的机器风格与博客风格

色系同htb

由于我之前使用的hexo-theme-aurora有大量封面图，也舍不得扔了，Hugo没有心目中的黑客主题，相近的大概是：

https://hackingcapitalism.io/（二开自[hello-friend](https://github.com/panr/hugo-theme-hello-friend) ），新的hello-friend-ng也不太行

其实phithon、远海、y4tacker，风格都不错。但是我图床多，封面图也有，他们那个暗黑主题不喜欢。

其次是3gstudent的，非常不错，但是感觉差了点什么，类似的最好的就是[ficurinia](https://gitlab.com/gabmus/hugo-ficurinia)，真的漂亮，但我都看那么多了，不如自己搞

主题参考了Fixit、ficurinia等等的实现思路

很早以前我就喜欢htb风格，漫画图标，酷的配色。黑客浸入感极强。比i春秋，春秋运镜，其他国内CTF、靶场好太多了。国内许多靶场就喜欢搞个普通烂大街的蓝色科技感驾驶舱大屏

现在不是很懂前端，大学学的三剑客貌似没啥用，于是边学边写



主页：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhhome.png)

分类：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhcategories.png)

标签：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhtags.png)

存档：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyharchives.png)

朋友：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhfriends.png)

关于：

这里就是markdown直接写

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhabout.png)



文章：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhpost.png)

代码块

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhcodeblock.png)

数学公式、注音、emoji等等

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhmathruby.png)

渲染各种图像

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhmermaid.png)

## Installation

正常安装就行。最好站点配置文件为准

> 由于我许多内容都是从本地引用，所以需要额外加入字体等元素，你改成cdn引用就不用引入字体

注意，如果要显示Katex数学公式字体正确渲染，需要把字体文件放在站点目录下的\static\lib\katex\fonts中

因为Katex的文件默认去所在目录引用fonts,但实际上assets里的fonts不会同步输出到public,但是static里的文件可以同步输出到public,所以你需要将fonts以相同的路径放到static里.

比如assets/a/b/c/katex.min.js,你就要把fonts文件夹位置调整为 static/a/b/c/fonts

物理化学公式需要Katex额外引入一些东西，这里不写了

可以使用这个脚本为所有文章生成slug：[https://github.com/TajangSec/genslug](https://github.com/TajangSec/genslug)

## Configuration

```toml
baseURL = 'https://example.org/'
languageCode = 'en'
title = '我的HTB博客'
# defaultContentLanguage = "zh-cn"
theme = "HackTheBox-Style"
# 很离谱的bug，我把文章放进来，就是不渲染，找不到原因，后来逐一筛选因素，发现时间两天以内不渲染。可是能是时区导致hugo认为这是未来文章，未来文章不渲染的，要开设置
timeZone = "Asia/Shanghai"


[params]
    # 站点描述会显示在SEO
    description="CyberSecurity"
    # 显示在头像下面的座右铭
    motto="临渊羡鱼，不如退而结网"
    # 页脚的版权起始年份
    since="2020"
    titleDelimiter="|"

    siteCreationDate = "2020-12-26T16:01:46.000Z"  # 设置建站日期
    
    [params.author]
        name = "Tajang"
        email = "Tajang@qq.com"
        link = "https://h4cker.zip"
        avatar = "Tajang.png"
        # App图标配置
    [params.social]
    # 需要添加的社交链接就自己找svg图标，然后写，不需要的就注释掉，预置了几十种图标
    # 顺序也在这里
        # pornhub = { url = "https://pornhub.com/model/username",icon = "svgs/pornhub.svg"}
        github = {url="https://github.com/TajangSec",icon="svgs/github.svg"}
        # steam = {url="",icon="svgs/steam.svg"}
        bilibili = {url="https://space.bilibili.com/434014419",icon="svgs/bilibili.svg"}
        # youtube = {url="",icon="svgs/youtube.svg"}
        # baidutieba = {url="",icon="svgs/baidutieba.svg"}
        # heybox = {url="",icon="svgs/heybox .svg"}
        csdn = {url="https://blog.csdn.net/qq_45619909?type=blog",icon="svgs/csdn.svg"}
        rss = {url="http://localhost:1313/index.xml",icon="svgs/rss.svg"}
        # dingtalk = {url="",icon="svgs/dingtalk.svg"}
        # facebook = {url="",icon="svgs/facebook.svg"}
        # flag = {url="",icon="svgs/flag.svg"}
        # gitlab = {url="",icon="svgs/gitlab.svg"}
        # mail = {url="mailto:Tajang@qq.com",icon="svgs/mail.svg"}
        # neteasemusic = {url="",icon="svgs/neteasemusic.svg"}
        # qqzone = {url="",icon="svgs/qqzone.svg"}
        # spotify = {url="",icon="svgs/spotify.svg"}
        # telegram = {url="",icon="svgs/telegram.svg"}
        # tiktok_douyin = {url="",icon="svgs/tiktok_douyin.svg"}
        # twitch = {url="",icon="svgs/twitch.svg"}
        # twitter = {url="",icon="svgs/twitter.svg"}
        # wechat = {url="",icon="svgs/wechat.svg"}
        # weibo = {url="",icon="svgs/weibo.svg"}
        # xiaohongshu = {url="",icon="svgs/xiaohongshu.svg"}
        # zhihu = {url="",icon="svgs/zhihu.svg"}
        # linkedin = { url = "https://linkedin.com/in/yourusername", icon = "svgs/linkedin.svg" }
        # instagram = { url = "https://instagram.com/yourusername", icon = "svgs/instagram.svg" }

    [params.app]
        # 可选 应用站点标题覆盖（添加到 iOS 主屏幕或 Android 启动器时）
        title = "HackThebox Style"
        # 是否省略 favicon 资源链接
        noFavicon = false
        # 现代 SVG 图标，用于替代旧式.png 和.ico 文件
        svgFavicon = ""
        # Safari mask图标颜色
        iconColor = "#5bbad5"
        # Windows v8-10 磁贴颜色
        tileColor = "#da532c"
        # Android 浏览器主题颜色
    [params.app.themeColor]
        light = "#f8f8f8"
        dark = "#252627"
    [params.mermaid]
        theme="dark"

        
    readingSpeed = 150 # 阅读速度（字/分钟）

# 设置文章链接格式
[permalinks]
  posts = "/post/:slug"

[outputs]
  home = ["HTML", "RSS", "JSON"]
  
[module]
  [module.hugoVersion]
    extended = false
    min = "0.140.0"

[menu]
[[menu.main]]
    name = 'Home'
    pageRef = '/'
    weight = 10
[[menu.main]]
    name = 'Categories'
    pageRef = '/categories'
    weight = 20
[[menu.main]]
    name = 'Tags'
    pageRef = '/tags'
    weight = 30
[[menu.main]]
    name = 'Archives'
    pageRef = '/archives'
    weight = 40
[[menu.main]]
    name = 'Friends'
    pageRef = '/friends'
    weight = 50
[[menu.main]]
    name = 'About'
    pageRef = '/about'
    weight = 60

# 代码块设置
[markup]

    [markup.goldmark]
        [markup.goldmark.renderer]
        unsafe = true  # 允许渲染未转义的 HTML 标签
        
    [markup.highlight]
        anchorLineNos = true #将每个行号渲染为HTML锚元素
        codeFences = true
        guessSyntax = true
        lineAnchors = ""
        lineNoStart =1
        lineNos = true
        lineNumbersInTable = false
        noClasses = true
        style = "doom-one2"
        tabWidth = 4
    [markup.tableOfContents]
        startLevel = 1  # 从哪个级别的标题开始生成目录（例如 ##）
        endLevel = 6    # 到哪个级别的标题结束生成目录（例如 ######）
    [markup.goldmark.extensions.passthrough]
      enable = true
      delimiters.block = [
        ["\\[", "\\]"],
        ["$$", "$$"]
      ]
      delimiters.inline = [
        ["\\(", "\\)"],
        ["$", "$"]
      ]
```


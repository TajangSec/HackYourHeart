# Hack Your Heart

<p align="center" style="font-size:2rem">
<a href="#chinese">🀄中文</a>
|
<a href="#english">🅰️English</a>
<br />
    <br />
<a href="#yulan">🖼️预览 / Preview</a>
</p>



## <a name="chinese"></a>中文

[安装](#anzhuang)

[参考配置](#cankaopeizhi)

> 主题于2025年1月中旬开发，于2月完成。在2025/12/31公开，之前一直是个人在使用。
>
> 
>

写这个主题是因为我在Hugo的主题仓库里没有找到喜欢的主题。

因为我是一个 ~~黑客~~ 脚本小子，我想要更有黑客风格的博客，但是没找到。于是想要自己写一个博客主题。

由于我不会前端，写这个主题十分困难，许多HTML、CSS、JS、F12花哨调试 工具都是我现学的。这个主题也是我边学边写。

### <a name="anzhuang"></a>安装

直接在themes文件夹内git clone本项目，然后在项目根目录的hugo.toml里写入：

```toml
theme = "HackYourHeart"
```

然后返回项目根目录，运行：

```bash
hugo --gc --minify
# 渲染完，再运行
hugo server
```

即可查看你的网站，当然，你会发现代码块没有行号，Copy键无效之类，这是由于相关配置必须写在根目录的hugo.toml里。我已将配置写在了`themes/HackYourHeart/hugo.toml`中，你需要把这个文件内的配置完全复制到项目根目录下的`hugo.toml`，然后自己对相关配置修改即可。

> 由于我许多内容都是从本地引用，所以需要额外加入字体等元素，你改成cdn引用就不用引入字体

注意，如果要显示Katex数学公式字体正确渲染，需要把字体文件放在站点目录下的`\static\lib\katex\fonts`中

因为Katex的文件默认去所在目录引用fonts,但实际上`assets`里的`fonts`不会同步输出到`public`,但是`static`里的文件可以同步输出到`public`,所以你需要将`fonts`以相同的路径放到`static`里.

比如`assets/a/b/c/katex.min.js`,你就要把`fonts`文件夹位置调整为 `static/a/b/c/fonts`

物理化学公式需要Katex额外引入一些东西，这里不写了

创建带空格或特殊字符文章，用`hugo new "posts/测试 3345.md"`，这样会让文章在`content/posts`中创建，并且文章名可包括特殊字符，而且首页的文章数目只统计此文件夹内的。

我为了让链接更短，使用slug作为链接。slug生成规则是“标题|时间戳”的md5值取前6位。你嫌重复概率高可以改成8位。可以使用这个脚本为所有文章生成slug：[https://github.com/TajangSec/genslug](https://github.com/TajangSec/genslug)

### <a name="cankaopeizhi"></a>参考配置

项目根目录的配置拥有最高优先级，例如`friends.toml`写在根目录的data文件夹中，`about.md`写在content文件夹中都会覆盖`themes/HackYourHeart/`中的相关配置文件。



```toml
baseURL = 'https://demo.h4cker.zip/'
languageCode = 'en'
title = 'Tajang·暗陬'
theme = "HackYourHeart"
# 很离谱的bug，我把文章放进来，就是不渲染，找不到原因，后来逐一筛选因素，发现时间两天以内不渲染。可是能是时区导致hugo认为这是未来文章，未来文章默认不渲染的，所以我这里设置了时区。
timeZone = "Asia/Shanghai"

defaultContentLanguage = "zh"
enableEmoji = true
[languages]
  [languages.zh]
    lang = "zh"
    languageName = "中文"
    weight = 1

[params]
    # 站点描述会显示在SEO
    description="CyberSecurity,WebSecurity,Zero Day,RedTeam,Pentesting,Bug Bounty"
    # 显示在头像下面的座右铭
    motto="临渊羡鱼，不如退而结网"
    # 页脚的版权起始年份
    since="2020"
    # 标签页的分隔符
    titleDelimiter="|"

    siteCreationDate = "2020-12-26T16:01:46.000Z"  # 设置建站日期

    [params.author]
        name = "Tajang"
        email = "Tajang@qq.com"
        link = "https://h4cker.zip"
        # 把头像放到static就行，或者替换默认头像
        avatar = "Tajang.webp"
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
        rss = {url="/index.xml",icon="svgs/rss.svg"}
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
        title = "HackYourHeart"
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

## <a name="english"></a>English

[Installation](#installation)

[Reference Configuration](#referconfig)

> The theme was developed in mid-January 2025 and completed in February. It was made public on 2025-12-31 and had been used exclusively by the individual developer prior to that date.
>
> 

I’m writing about this topic because I couldn’t find a Hugo theme I really liked in the official Hugo theme repository.

As a wannabe ~~hacker~~ script kiddie, I was looking for a blog theme with a more “hacker” vibe, but nothing quite fit my needs—so I decided to roll my own and write a custom blog theme from scratch.

Since I have no prior experience with front-end development, building this theme was no small feat. I had to learn HTML, CSS, JavaScript, and advanced debugging techniques like those available via browser developer tools (e.g., F12) on the fly. In fact, I built this theme while simultaneously teaching myself these technologies.



### <a name="installation"></a>Installation

Directly `git clone` this project into the `themes` directory, then add the following to the `hugo.toml` file in the project’s root directory:

```toml
theme = "HackYourHeart"
```

Then return to the root directory and run:

```bash
hugo --gc --minify
# 渲染完，再运行
hugo server
```

You can then view your website. However, you’ll notice that the code blocks lack line numbers and the Copy button is disabled. This is because the relevant configuration must be specified in the `hugo.toml` file in the root directory. I’ve already configured this in `themes/HackYourHeart/hugo.toml`. You need to copy the entire configuration block from that file into the `hugo.toml` file in your project’s root directory, then customize the relevant settings as needed.

> Since much of my content is referenced locally, I need to explicitly include additional assets like fonts. If you switch to CDN-based references, you won’t need to bundle the fonts separately.

Note that to ensure Katex math formulas are rendered with the correct fonts, you must place the font files in the `\static\lib\katex\fonts` directory within your site’s root directory.

By default, Katex looks for font files in the same directory as its own files. However, the `fonts` directory under `assets` is not automatically copied to the `public` directory, whereas files in the `static` directory are. Therefore, you need to place the `fonts` directory in `static` using the same relative path.

For example, if your `katex.min.js` file is located at `assets/a/b/c/katex.min.js`, you must move the `fonts` directory to `static/a/b/c/fonts`.

To render advanced physical and chemical formulas, Katex requires additional dependencies that are not covered here.

Create an article with spaces or special characters using `hugo new "posts/测试 3345.md"`. This will create the article in the `content/posts` directory, allowing the article name to contain special characters. The number of articles displayed on the homepage is counted only from files within this directory.

To make the URLs shorter, I use a slug as the link. The slug is generated by taking the first 6 characters of the MD5 hash of the string “title | timestamp.” If you’re concerned about a higher collision rate, you can extend the slug length to 8 characters. You can use this script to generate slugs for all your articles: [https://github.com/TajangSec/genslug](https://github.com/TajangSec/genslug).

### <a name="referconfig"></a>Reference Configuration

Configurations in the project’s root directory take the highest precedence. For example, a `friends.toml` file placed in the root directory’s `data` folder or an `about.md` file in the `content` folder will override the corresponding configuration files in `themes/HackYourHeart/`.

Please bear with the Chinese comments.

```toml
baseURL = 'https://demo.h4cker.zip/'
languageCode = 'en'
title = 'Tajang·暗陬'
theme = "HackYourHeart"
# 很离谱的bug，我把文章放进来，就是不渲染，找不到原因，后来逐一筛选因素，发现时间两天以内不渲染。可是能是时区导致hugo认为这是未来文章，未来文章不渲染的，要开设置
timeZone = "Asia/Shanghai"

defaultContentLanguage = "zh"
enableEmoji = true
[languages]
  [languages.zh]
    lang = "zh"
    languageName = "中文"
    weight = 1

[params]
    # 站点描述会显示在SEO
    description="CyberSecurity,WebSecurity,Zero Day,RedTeam,Pentesting,Bug Bounty"
    # 显示在头像下面的座右铭
    motto="临渊羡鱼，不如退而结网"
    # 页脚的版权起始年份
    since="2020"
    # 标签页的分隔符
    titleDelimiter="|"

    siteCreationDate = "2020-12-26T16:01:46.000Z"  # 设置建站日期

    [params.author]
        name = "Tajang"
        email = "Tajang@qq.com"
        link = "https://h4cker.zip"
        # 把头像放到static就行，或者替换默认头像
        avatar = "Tajang.webp"
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
        rss = {url="/index.xml",icon="svgs/rss.svg"}
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
        title = "HackYourHeart"
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

## <a name="yulan"></a>预览/Preview



### 主页/Home：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhhome.webp)

### 分类/Categories：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhcategories.webp)

### 标签/Tags：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhtags.webp)

### 存档/Archives：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyharchives.webp)

### 朋友/Friends：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhfriends.webp)

### 关于/About：

这里就是markdown直接写

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhabout.webp)



### 文章/Post page：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhpost.webp)

### 代码块/Codeblock：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhcodeblock.webp)

### 数学公式、注音、emoji/Math、Ruby、Emoji：

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhmathruby.webp)

### 图像/Graph：

goat、UML、Pie、git等等

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/hyhmermaid.webp)


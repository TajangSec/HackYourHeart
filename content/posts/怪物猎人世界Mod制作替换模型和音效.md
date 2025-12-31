+++
title= "怪物猎人世界Mod制作 替换模型和音效"
date= "2023-10-22T14:15:52+08:00"
lastmod = ""
draft = false
tags = [ "Mod", "怪物猎人世界"]
categories = "游戏Mod制作"
slug = "a015ce"
cover = "https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodcover.webp"

+++

太喜欢《怪物猎人：世界》这款游戏了，在冰原更新后，游戏版本趋于稳定。卡普空做一些bug修复后宣布不再更新此游戏，游戏版本稳定在`v15.11.01`。从此这个游戏长达三年未更新，我玩了八百小时也未发现什么明显BUG，这段时间内mod百花齐放，我也爱上了制作mod，但仍然是个新手。主要还是从网上找模型，然后替换。不算自己制作。目前唯一一个自己制作的是让女朋友配音的太刀音效mod。在2023/10/16，TMD卡普空突然更新了，更新了90MB内容，具体内容是支持了Steam Deck，加入了拉美那边的西班牙语。这次更新导致了版本号变化，以及部分文件的偏移量改变，致使前置文件失效，大部分稳定可用的mod失效（堪比当年冰原更新，世界本体mod团灭）。不过这次更新是小更新，依赖前置文件和反作弊文件的mod失效，其他注入式mod失效。简单的模型替换、音效替换并没有失效。

不过目前这个版本是`v15.20`，截止到本文撰写时间，仍然有绝大部分mod不可用，N网上大部分mod更新日期还在20年。我的几个mod群里，一些作者已经在积极更新了。好消息是前置作者已经更新了。现在这个版本还有个bug，使用了高清材质包dlc后，部分怪物的图标不见了，reddit上说是卡普空删除了这些资源。tmd卡婊更新支持和语言，你删除图标干啥？就目前版本来说，肯定还会有一个更新，修复这个bug。这个时间做mod教程不是很好，但是对于新手记录来说影响不大。第二个原因是，工作很少玩，桌面和下载文件夹里的mod文件太乱了，需要整理一下，防止以后回顾mod忘记如何制作。同时也帮助一下其他入坑的同好！

# 序

**nativePC：**游戏文件夹根目录下有一个`nativePC`文件夹，没有可以自建一个。这个文件夹是游戏读取资源的文件夹，游戏优先读取这个文件夹，所以安装mod就是将mod文件复制到此文件夹，游戏就会读取mod了。

**Stracker's Loader：**这个就是前置文件，具体原理和作用请看作者的回答：

> mhw的游戏引擎通过“chunk”档案来管理文件，但我猜想这个引擎最初一定有一个debug或测试的功能，从而能直接读取现存的“nativePC”文件夹。这对制作mod很有用，因为它让我们不用每次都新建一个“chunk”。为了防止在线作弊，卡普空在冰原发售时更新了这个功能，限制了能从“nativePC”加载的文件类型，因此只有一些纯粹的外观幻化可以使用。Stracker's Loader解除了这个限制，再次允许游戏从“nativePC”读取任意类型的文件。它在安装后便能无缝发挥功能，不需要任何另外的软件或文件路径就能让游戏启动时自动运行mod。
>
> 我制作这个工具主要是因为方便：尽管通过新建“chunk”可以加载那些非幻化mod，但对mod使用者，尤其是mod作者来说，为了安装、测试mod花费许多额外步骤是很麻烦的。我想为大家将加载mod的步骤流程化，而这个技术是我在研究 Quest Loader时就很熟悉的，于是我动手去做了。

安装mod只需要将mod里的nativePC文件夹复制到游戏根目录即可，此时mod的nativePC会合并到游戏的nativePC，如果mod有冲突，只能自己删掉对应文件后重新安装。建议使用狩技mod盒子，可以直接安装mod压缩包，安装后也可以决定启不启用，并且支持修改被替换模型

我用到的所有工具、表格、文件全在这个链接：

> https://wwaw.lanzouj.com/b02r8wv5g
> 密码:3yw7

由于阿里云盘不支持分享压缩包、exe等格式，所以只能用蓝奏云

# 一、替换模型

替换游戏资源类mod的原理是一样的，就是把资源名字或者编号换了。举个简单的例子：音乐文件夹里有一首《我心永恒》，每当杰克抱露丝就会自动播放这首歌。那我把《两只老虎》这首歌重命名为《我心永恒》替换原来的音乐，此后每当杰克抱露丝就会播放《两只老虎》的音乐。当然怪猎mod不需要重命名后放入资源文件夹将原音乐挤掉，只需要放到nativePC里，游戏就会优先读取这个资源。对了，游戏资源是bin文件，要解包封包才能替换。而有了前置文件就方便多了。

模型的替换就是将模型文件夹及其子文件都重命名为被替换的模型编号

部分武器共用一个模型，所以你替换某个武器后会发现有的武器模型也被换掉了

## （一）武器模型

武器模型分为独立模型和组合模型

在聚魔之地解锁武器自定义强化后，武器也有幻化了，可以决定一些零件，比如骨刀刀柄那里的装饰可以换成飞雷龙的装饰。

**这种由主模型+零件的模型就叫组合模型**

有一些武器不能幻化，只有主模型，所以就是独立模型

在数据表中，组合模型由`bs_`为前缀的文件 +  parts文件，这个parts文件夹下就是零件的模型

注意，有些武器未幻化时也是有零件的

数据表有一些标记为组合模型的武器没有parts，但是主模型前缀是`bs_`，说明这个武器可以幻化零件，但是默认情况下是没有零件的，此时想要替换，按照独立模型步骤替换即可

### 1. 替换独立模型

这里我使用 “枯荣刀-黑“ 太刀模型做示范，替换灭尽一刀

枯荣刀mod文件构成如下

```bash
nativePC
└── wp
    └── swo
        ├── krtdtex
        │   ├── BML.tex
        │   ├── BML2.tex
        │   ├── NM.tex
        │   └── RMT.tex
        └── swo017
            └── mod
                ├── saya017.mod3
                ├── swo017.evwp
                ├── swo017.mod3
                └── swo017.mrl3
```

nativePC就不说了，wp是武器文件夹这里存放各类武器mod，swo是太刀的代号，这里存放的是太刀的mod，krttex就是枯荣刀的模型贴图，tex文件就是贴图文件。swo017文件是存放模型的。swo017对应太刀”行云流水-和光“，所以此时游戏调用模型时，会以为这个文件是行云流水和光，进入游戏后行云流水和光就变成了枯荣刀。

所以我们要替换灭尽一刀，只需要将模型文件里的文件名全部修改为灭尽一刀的编号，数据表查了灭尽一刀编号是swo004，mod修改后文件结构如下：

```bash
nativePC
└── wp
    └── swo
        ├── krtdtex
        │   ├── BML.tex
        │   ├── BML2.tex
        │   ├── NM.tex
        │   └── RMT.tex
        └── swo004
            └── mod
                ├── saya004.mod3
                ├── swo004.evwp
                ├── swo004.mod3
                └── swo004.mrl3
```

此时，灭尽一刀进游戏就是下图样子

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_1.webp" style="zoom:50%;" />

注意，mrl3文件是存放路径的文件，这个mod模型引用贴图时使用相对路径。

所以此mod的mrl3里显示如下：

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_2.webp" style="zoom:50%;" />

所以此时替换模型只要替换文件名字，模型仍然能够正常引用贴图

但是有的mod作者不仔细，把贴图文件夹放到模型文件夹下面，这个时候mod作者的引用写的是`wp\swo\swo017\krtdtex\BML2`，或者把贴图文件直接散乱地放在模型文件夹。这种情况修改了文件名，但是mrl3里的路径还是旧的，就导致模型引用不到贴图，会报错。所以修改mod时，注意看一下mrl3里的路径包不包含需要修改的。

太刀是有刀鞘的，代号是saya，修改时需要连sayaXXX.mod3一并修改。

大部分mod模型只有刀刃，没有刀鞘，这种情况就会导致刀刃被替换了，刀鞘还是原来的。有的mod作者会在mod文件夹里加一个刀鞘文件，作用是隐藏刀鞘。

如果你的mod里没有saya文件，你可以自己按照对应编号添加进去。

组合模型替换独立模型，就把bs_swoXXX修改成swoXXX就行，parts文件夹删掉，注意mrl3里的路径

### 2. 替换组合模型

组合模型的主模型带有`bs_`，注意修改时也要把bs_带上。

组合模型替换组合模型不用我说了吧，与独立模型替换独立模型一样：主模型替换主模型，附件替换附件。

这里讲一下独立模型替换组合模型

这里以 ”枯荣刀-黑“ 替换”飞雷龙大刀2“为例

目前枯荣刀刚换过灭尽一刀，所以文件结构跟上面一样，如下：

```bash
nativePC
└── wp
    └── swo
        ├── krtdtex
        │   ├── BML.tex
        │   ├── BML2.tex
        │   ├── NM.tex
        │   └── RMT.tex
        └── swo004
            └── mod
                ├── saya004.mod3
                ├── swo004.evwp
                ├── swo004.mod3
                └── swo004.mrl3
```

查询数据表，飞雷龙大刀2的编号为`bs_swo005`，附件编号为`op_swo003`

但是独立模型mod是没有附件的，我们只能修改枯荣刀主模型的编号，修改后如下：

```bash
nativePC
└── wp
    └── swo
        ├── krtdtex
        │   ├── BML.tex
        │   ├── BML2.tex
        │   ├── NM.tex
        │   └── RMT.tex
        └── bs_swo005
            └── mod
                ├── bs_saya005.mod3
                ├── bs_swo005.evwp
                ├── bs_swo005.mod3
                └── bs_swo005.mrl3
```

进入游戏后，如下

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_3.webp" style="zoom:50%;" />

可以看到，飞雷龙大刀2的附件模型由于没被替换而存在。所以这个时候需要使用屏蔽附件mod，每种武器都是有组合模型的，自然也有附件，所以每种附件都有对应的屏蔽mod

这个屏蔽mod里好像没有部分武器的附件，比如op_swo22，不过可以自己手动改造的

我们将对应屏蔽附件mod文件加入后，文件结构如下：

```bash
nativePC
└── wp
    └── swo
        ├── bs_swo005
        │   └── mod
        │       ├── bs_saya005.mod3
        │       ├── bs_swo005.evwp
        │       ├── bs_swo005.mod3
        │       └── bs_swo005.mrl3
        ├── krtdtex
        │   ├── BML.tex
        │   ├── BML2.tex
        │   ├── NM.tex
        │   └── RMT.tex
        └── parts
            └── op_swo003
                └── mod
                    ├── op_saya003.mod3
                    ├── op_saya003.mrl3
                    ├── op_swo003.mod3
                    └── op_swo003.mrl3
```

进入游戏居然报错，我看了这个屏蔽附件的两个mrl3文件，它的mrl3里引用路径如下图，

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_4.webp" style="zoom:50%;" />

它居然调用的op_swo001的内容，那我将两个mrl3里的op_swo001全部修改为op_swo003。再试一下

成功进入游戏，此时飞雷龙大刀2显示如下

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_5.webp" style="zoom:50%;" />

成功去除了附件，但是有个奇怪的标志，这个标志是公会标志，也是有专门的公会标志屏蔽mod的。

emblem文件夹放到nativePC/wp/下面，现在文件结构如下：

```bash
nativePC
└── wp
    ├── emblem
    │   ├── emblem000
    │   │   └── mod
    │   │       └── wp_emblem000_BM_LIN.tex
    │   └── plate
    │       └── mod
    │           └── bs_plate_common_BML.tex
    └── swo
        ├── bs_swo005
        │   └── mod
        │       ├── bs_saya005.mod3
        │       ├── bs_swo005.evwp
        │       ├── bs_swo005.mod3
        │       └── bs_swo005.mrl3
        ├── krtdtex
        │   ├── BML.tex
        │   ├── BML2.tex
        │   ├── NM.tex
        │   └── RMT.tex
        └── parts
            └── op_swo003
                └── mod
                    ├── op_saya003.mod3
                    ├── op_saya003.mrl3
                    ├── op_swo003.mod3
                    └── op_swo003.mrl3
```

重新安装此mod，启动游戏。

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_6.webp" style="zoom:50%;" />

完美替换

注意，上面说了由于部分武器共用一个模型，所以在替换模型时会导致其他武器也被替换了。如下图，碎龙偃月刀2的主模型就被替换了

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_7.webp" style="zoom:50%;" />

那为什么刀柄那里的零件还是碎龙的呢？因为mod里添加的是屏蔽飞雷龙附件的mod，碎龙的没被屏蔽。

好了武器模型替换就讲到这，其他武器模型替换基本一致。

## （二）防具模型

没啥好讲的，会了替换武器模型，这个直接照搬

我这里有一套晚礼服mod，替换冰狼服装，查询到冰狼服装编号是pl105_0000，那我只需要将mod里的子文件修改为这个编号，修改后的文件结构如下：

```bash
nativePC
└── pl
    ├── Xiao_Hu_Za_MOD
    │   ├── HuZa_BiLanHangXian_ShengLuYiSi
    │   │   ├── cmm.tex
    │   │   ├── em.tex
    │   │   ├── fm.tex
    │   │   ├── id_1_nm2.tex
    │   │   ├── id_1_rmt.tex
    │   │   ├── id_2.tex
    │   │   ├── id_4.tex
    │   │   ├── id_4_nm.tex
    │   │   ├── id_4_rmt.tex
    │   │   ├── id_5_bml.tex
    │   │   ├── id_5_nm.tex
    │   │   ├── id_5_rmt.tex
    │   │   ├── id_6_XM.tex
    │   │   ├── id_6_bml.tex
    │   │   ├── id_6_cmm.tex
    │   │   ├── id_6_nm.tex
    │   │   ├── id_6_rmt.tex
    │   │   └── xm.tex
    │   └── HuZa_PiFuTieTu
    │       ├── HuZa.tex
    │       └── HuZa_NM.tex
    └── f_equip
        └── pl105_0000
            ├── arm
            │   └── mod
            │       ├── f_arm105_0000.ccl
            │       ├── f_arm105_0000.ctc
            │       ├── f_arm105_0000.mod3
            │       └── f_arm105_0000.mrl3
            ├── body
            │   └── mod
            │       ├── f_body105_0000.ccl
            │       ├── f_body105_0000.ctc
            │       ├── f_body105_0000.mod3
            │       └── f_body105_0000.mrl3
            ├── leg
            │   └── mod
            │       ├── f_leg105_0000.ccl
            │       ├── f_leg105_0000.ctc
            │       ├── f_leg105_0000.mod3
            │       └── f_leg105_0000.mrl3
            └── wst
                └── mod
                    ├── f_wst105_0000.mod3
                    └── f_wst105_0000.mrl3
```

这里pl是防具的意思，”Xiao_Hu_Za_MOD“文件夹是存放贴图的，f_equip好像是女性盔甲的意思。这个文件夹下只有一个pl105_0000，说明只替换这个编号的模型，pl105_0000文件夹下，是这套服装的各个部分，头、胸、腰、手、腿，修改文件名时需要把各个部分的编号一块修改

身上穿的什么就替换什么，穿得是幻化，就找到幻化对应的编号，穿的是装备，就找到对应防具编号进行修改，混搭也是一样。

这个冰狼服装是幻化，因为我的mod没有头部，所以为了观感我将头部设置的是风火轮的头部幻化。如图

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_8.webp)

在游戏里可以设置，不显示头部装备

如果我穿的装备不是一套怎么办？那就一个个找防具编号，一个个加进去

举例，我现在穿的是

- 精英 • 雪崩头盔贝塔
- 精英 • 雪崩铠甲贝塔
- 精英 • 魔界之主〖黑腕部〗阿尔法
- 精英 • 轰龙腰甲贝塔
- 精英 • 蔷薇靴阿尔法

那我找到对应编号，修改后mod文件结构如下：

```bash
nativePC
└── pl
    ├── Xiao_Hu_Za_MOD
    │   ├── HuZa_BiLanHangXian_ShengLuYiSi
    │   │   ├── cmm.tex
    │   │   ├── em.tex
    │   │   ├── fm.tex
    │   │   ├── id_1_nm2.tex
    │   │   ├── id_1_rmt.tex
    │   │   ├── id_2.tex
    │   │   ├── id_4.tex
    │   │   ├── id_4_nm.tex
    │   │   ├── id_4_rmt.tex
    │   │   ├── id_5_bml.tex
    │   │   ├── id_5_nm.tex
    │   │   ├── id_5_rmt.tex
    │   │   ├── id_6_XM.tex
    │   │   ├── id_6_bml.tex
    │   │   ├── id_6_cmm.tex
    │   │   ├── id_6_nm.tex
    │   │   ├── id_6_rmt.tex
    │   │   └── xm.tex
    │   └── HuZa_PiFuTieTu
    │       ├── HuZa.tex
    │       └── HuZa_NM.tex
    └── f_equip
        ├── pl083_0010
        │   └── wst
        │       └── mod
        │           ├── f_wst083_0010.mod3
        │           └── f_wst083_0010.mrl3
        ├── pl085_0010
        │   └── body
        │       └── mod
        │           ├── f_body085_0010.ccl
        │           ├── f_body085_0010.ctc
        │           ├── f_body085_0010.mod3
        │           └── f_body085_0010.mrl3
        ├── pl124_0000
        │   └── leg
        │       └── mod
        │           ├── f_leg124_0000.ccl
        │           ├── f_leg124_0000.ctc
        │           ├── f_leg124_0000.mod3
        │           └── f_leg124_0000.mrl3
        └── pl126_0000
            └── arm
                └── mod
                    ├── f_arm126_0000.ccl
                    ├── f_arm126_0000.ctc
                    ├── f_arm126_0000.mod3
                    └── f_arm126_0000.mrl3
```

此时游戏里如下图

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_9.webp" style="zoom: 33%;" />

掌握规律了吗，修改哪部分就找到那个部分编号，修改文件名，注意f_equip里装的是被修改的防具，修改一个防具就建立这套防具的文件夹，然后把这套防具你要修改的部位模型放进去，修改模型的文件名。

如果替换所有防具，如果恰巧你的五个防具又不是同一套，那么你就有五个防具文件夹，每个文件夹里是一个部位，这样就很麻烦。如果你穿的是同一套防具，那就是一个防具文件夹里五个部位。由于游戏里大家要经常根据任务变更装备，来回修改也麻烦，所以建议穿一套完整的幻化，然后把这个幻化替换了。这样的话，变更装备也不影响外观了

# 二、替换音效

音效存放在nbnk文件里，而nbnk文件被封包在bin文件里，chunk.bin文件就是整个游戏的资源

首先我们需要音效对应的数据表`MHW_IB Labelled Audio.xlsx`



拆包工具使用**MHWNoChunk**

查询数据表可知，太刀音效在wp03_swo_epvsp.nbnk，所以我们先打开MHWNoChunk.exe，然后把游戏根目录下的chunk文件夹里的全部bin文件拖进去，在右上角筛选wp03_swo_epvsp.nbnk

勾选此文件，点击提取

<img src="https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_10.webp" style="zoom:50%;" />

这个时候提取出了存放太刀音效的文件，注意这里路径为`ChunkG0/sound/wwise/Windows/wp03_swo_epvsp.nbnk`，制作好mod时文件路径是`nativePC/sound/wwise/Windows/wp03_swo_epvsp.nbnk`

解包nbnk的工具叫做**wwiseutil**

使用wwiseutil打开wp03_swo_epvsp.nbnk，得到如下

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_11.webp)

对比音效表太刀音效表的内容

![](https://blog-1307674006.cos.ap-shanghai.myqcloud.com/ModMaking/mhwmodmaking_1_12.webp)

可知见切成功音效是第13、14两个文件，所以在wwiseutil里点击13，再点击菜单栏的replace，选择准备好的音效文件就替换完成了，注意音效时长尽量等于原来的时长

但是，nbnk内的音效文件是wem格式，这个格式是游戏专用音频格式。我们无法直接听，也不能直接将mp3、wav等格式加进去

如果其他武器不知道对应的音效，可以一个个听

点击wwiseutil菜单栏右边的export wems，导出所有的wem文件，然后使用**wem转ogg工具**，一键转换所有wem，**Billy**这个工具是可以直接播放ogg格式的音频的，这个时候你就可以直接听音效了

录好的音效建议放PR里听一下，调整音量和音色，然后转换成波形音频，也就是wav格式。手机录音机录音的话，直接是wav格式。

wav格式我们需要转换成wem格式，需要用到专业的游戏音效工作台，就是wwise

开魔法。先下载Audiokinetic Launcher，这只是个启动器，打开Audiokinetic Launcher后，点击左边的Wwise，下载Wwise，如果你无法下载，就点击右上角的Help，点击Setting，把Server修改到worldwide，然后回Wwise页面下载

下载后启动wwise，如何转换为wem格式自行百度

将转换好的wem文件在wwiseutil替换，然后保存，随后就放到`nativePC/sound/wwise/Windows/`里，安装此mod后就修改好了

注意，那个音效表不准，建议自己一个个听，太刀的话有个up做了个详细的太刀音效表：[https://www.bilibili.com/read/cv6753800](https://www.bilibili.com/read/cv6753800)

这里放一下我用女朋友配音做的音效mod：[https://www.bilibili.com/video/BV11w411A7SR](https://www.bilibili.com/video/BV11w411A7SR)

好了，制作Mod还有修改dat文件、建模、改贴图、任务mod等等内容，我可能很久就不更新了，还是看有没有空余时间。
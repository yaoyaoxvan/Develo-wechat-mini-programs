# 2022年夏季《移动软件开发》实验报告



<center>姓名：张艺怀  学号：21020007130</center>

| 姓名和学号？         | 张艺怀，21020007130                                          |
| -------------------- | :----------------------------------------------------------- |
| 本实验属于哪门课程？ | 中国海洋大学22夏《移动软件开发》                             |
| 实验名称？           | 实验1：第一个微信小程序                                      |
| 博客地址？           | [2023暑假小程序开发 实验1：第一个微信小程序_zhangyihuai123的博客-CSDN博客](https://blog.csdn.net/zhangyihuai123/article/details/132423164) |
| Github仓库地址？     | XXXXXXX                                                      |

（备注：将实验报告发布在博客、代码公开至 github 是 **加分项**，不是必须做的）



## **一、实验目标**

1、学习使用快速启动模板创建小程序的方法；2、学习不使用模板手动创建小程序的方法。



## 二、实验步骤

列出实验的关键步骤、代码解析、截图。

1、学习使用快速启动模板创建小程序的方法：

 1）创建小程序： 依次输入项目名称、确定项目保存位置、输入 AppID，选择不使用云开 发，模板默认即可，点击确定。

![image-20230822095621725](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822095621725.png)

 2）开发界面

![image-20230822095817671](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822095817671.png)

 3）编译代码，图示为使用模板实现的登录功能

![image-20230822095836345](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822095836345.png)

**2、学习不使用模板手动创建小程序的方法**。 

1）创建项目

![image-20230822100038319](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822100038319.png)

 2）删除部分内容 

通过删除操作，最大程度上为编写小程序提供纯净的环境 

删除 logs 页面，此操作在 app.json 中进行 

删除 utils 文件夹、删除 pages 路径下存储 logs 界面的 logs 文件夹 

删除 index.wxml 和 index.wxss 全部代码 

删除 index.js 中全部代码，输入 page 选中自动补全选项 Page 函数 

删除 app.wxss 所有代码 

删除 app.js 中所有代码，输入 app 选中自动补全选项 App 函数 模板修改完毕！ 

如图所示，小程序已经 ” 空空如也 “

![image-20230822100525516](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822100525516.png)

 3）导航栏设计 在 app.json 中修改导航栏背景色为 \#663399（16 进制 RGB 码如图所 示），字体颜色为白色，Weixin 替换为“手动创建第一个小程序”

![image-20230822100827388](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822100827388.png)

![image-20230822100929748](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822100929748.png)

4）index 页面设计 目标：显示微信头像、昵称和“点击获取头像和昵称”按钮 修改 wxml 及效果如图，可见文本位置并不合理，通过 wxss 进行美化

![image-20230822101236609](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822101236609.png)

​    **修改 wxss，由图可见界面更为美观**

![image-20230822101316164](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822101316164.png)

  在工作区新建 images 文件夹，用于存放图片 logo.png 当作头像使用，并通过 wxss 修改头像样式

![image-20230822101432415](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822101432415.png)

 5）逻辑实现用户登陆功能 首先获取微信用户信息

  在 wxml 修改 button 组件，用以触发获取用户信息的函数，如图：

![image-20230822101817848](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822101817848.png)

  在 index.js 中追加 getMyInfo 函数，更新头像和昵称，获取用户信息

![image-20230822102655180](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822102655180.png)

  然后使用动态数据(变量)显示头像和昵称，控制台输出用户信息，用来查看获取的变量内容，方便进行后续工作

![image-20230822102240159](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822102240159.png)

![image-20230822102003082](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822102003082.png)

  最后点击登录，登陆结果并不符合预期，但一直是流程按照文档来的可 能是获取用户信息的 API 有问题。

 6）更换获取用户信息的 API，使用 wx.getUserProfile 获取用户信息 修改 getMyInfo 函数如图：

![image-20230822102729770](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822102729770.png)

  修改后可以获取用户信息以实现登陆功能

![image-20230822102811647](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822102811647.png) ![image-20230822102840485](C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822102840485.png)



## 三、程序运行结果

列出程序的最终运行结果及截图。

1、学习使用快速启动模板创建小程序的方法

<img src="C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822101316164.png" alt="image-20230822101316164" style="zoom: 50%;" />

2、学习不使用模板手动创建小程序的方法

<img src="C:\Users\z1015\AppData\Roaming\Typora\typora-user-images\image-20230822102811647.png" alt="image-20230822102811647" style="zoom:50%;" />

## 四、问题总结与体会

描述实验过程中所遇到的问题，以及是如何解决的。有哪些收获和体会，对于课程的安排有哪些建议。

1、在帮助文档 2.2.4 节获取用户信息中，文档中给出的获取用户代码信息只能获取岛匿名用户信息，因为微信小程序官方已经更新了获取用户新的 API 接口 

​	通过查阅官方文档，提供 wx.getUserProfile 来获取用户信息，遂按照官方文档修改，得以成功。

2、收获

1. **小程序基本流程和框架：** 熟悉了创建小程序的基本流程，了解了小程序的框架，包括js（JavaScript）、json（JSON配置文件）、wxml（WXML模板文件）等词尾文件的各自作用。这是小程序开发的基础，对于构建小程序应用至关重要。
2. **获取用户信息：** 学会了在微信小程序中获取用户的昵称、头像等用户信息。这对于许多小程序来说是必要的，因为它可以提供个性化的用户体验。
3. **发布文章和上传代码：** 学会了如何发布文章到CSDN并将代码上传到GitHub仓库。这些技能对于与其他开发者分享知识和代码以及在开发社区中建立声誉都非常有帮助。

这段代码实现了一个微信小程序页面，主要功能是获取用户的头像、昵称、城市和省份信息，并将这些信息显示在页面上。它演示了如何使用微信小程序的 API 来获取用户的个人信息，以及如何将这些信息更新到页面上。此外，代码还展示了页面的生命周期函数和页面布局的基本用法。
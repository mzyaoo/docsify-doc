# Mac相关

### MacOS版本降级

#### 官方降级

- 地址：https://support.apple.com/zh-cn/101578

#### 参考

- 地址：https://zhuanlan.zhihu.com/p/580160875

### Mac应用分享

#### CleanMyMac

[下载地址](https://go.naodai.org/Software/CleanMyMac)

#### iTerm2

[下载地址](https://iterm2.com/)

- ##### iTerm2配色方案（推荐）

1. 安装oh-my-zsh [官方地址](https://ohmyz.sh/#install)

打开iTerm2的偏好设定

[Profiles](#) - [Colors](#) - [点击Color Presets](#) - [选择Solarized Dark](#)

**如图**
<p>
<img src="static/img/mac/iterm2-set-color.png" width="40%" height="30%" alt="最终示例图">
</p>

2. 修改主题
```shell
# 编辑 .zshrc
vi ~/.zshrc
# 找到 ZSH_THEME="robbyrussell" 修改为 ZSH_THEME="agnoster"
```

3. 修改字体
```shell
# 下载字体插件
git clone https://github.com/powerline/fonts.git
# 进入文件
cd fonts
# 安装字体插件
./install.sh
```

**如图**
<p>
<img src="static/img/mac/iterm2-set-font.png" width="40%" height="30%" alt="最终示例图">
</p>


**效果图**
<p>
<img src="static/img/mac/iterm2-index.png" width="40%" height="30%" alt="最终示例图" />
</p>

- ##### 使用iTerm2连接远端服务器

查看并复制配置文件，放置指定目录：
```shell
#!/usr/bin/expect

set PORT 22
set HOST [你连接的主机名]
set USER root
set PASSWORD [密码]

spawn ssh -p $PORT $USER@$HOST
expect {
    "yes/no" {send "yes\r";exp_continue;}
    "*password:*" { send "$PASSWORD\r" }
    }
interact
```

**详细配置如图**
<p>
<img src="static/img/mac/iTerm2.png" width="40%" height="30%" alt="最终示例图">
</p>

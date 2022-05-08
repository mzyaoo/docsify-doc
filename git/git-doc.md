# Git相关

## Git配置、缓存用户名密码和清除缓存
> 配置用户名和邮箱：
```shell
git config --global user.name "username"
git config --global user.email "useremail@qq.com"
```
> 清除配置中纪录的用户名和密码：
```shell
git config --system --unset credential.helper
```
> 执行pull或push后，缓存git用户名和密码
```shell
git config --global credential.helper store
```
> 清除git缓存中的用户名的密码
```shell
git credential-manager uninstall
```


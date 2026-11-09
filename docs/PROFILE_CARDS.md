# 主页维护

主页采用简洁的作品集排版：封面、已合并开源贡献、开发工具、精选项目、核心技术和 Activity。

- 不设顶部目录；每个项目只保留一个仓库入口。项目截图、Demo、下载和部署说明放在各自仓库。
- 开源贡献每项只链接对应 PR，不重复链接项目仓库；保留一个公开上游 PR 搜索入口。
- `profile/header-light.svg` 与 `profile/header-dark.svg` 是桌面封面，`profile/header-mobile-light.svg` 与 `profile/header-mobile-dark.svg` 用于窄屏。四个文件都保存在仓库内。
- 技能只展示核心技术，不把完整依赖清单放在主页。
- Activity 卡片反映公开活动和仓库代码的语言分布，不代表技术熟练程度。

## 刷新统计

已有工作流每周一 09:23 UTC 刷新，也可在 **Actions → Update profile cards → Run workflow** 手动运行。生成：

- `profile/stats.svg`、`profile/stats-dark.svg`：公开活动统计。
- `profile/top-langs.svg`、`profile/top-langs-dark.svg`：公开仓库语言分布，排除本主页仓库。

工作流使用 GitHub 自动提供的 `GITHUB_TOKEN`，无需个人 PAT。所有生成步骤成功且文件有变化时才提交；失败保留上次成功版本。本次排版调整沿用该工作流。

## GitHub 原生贡献区

README 不控制 GitHub 自带的贡献图和时间线。个人主页贡献图上方的 **Contribution settings → Activity overview** 可以显示贡献类型和活跃仓库概览；查看近期活动时使用不带 `from` / `to` 参数的主页地址。

## 排版参考

参考 [Anurag Hazra 的主页](https://github.com/anuraghazra/anuraghazra)的简短介绍和重点内容组织，以及 [Editorial Card](https://github.com/beydemirfurkan/awesome-github-profile/tree/main/templates/01-minimal/editorial-card)的简洁段落层级。文案与封面均为本主页单独编写，未复制模板代码。

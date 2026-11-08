# 主页内容与统计卡片

README 按开源贡献、开发工具、应用项目、技能和 Activity 排列。

- **Open Source Contributions** 只精选已经合并到上游的 PR；新增代表作时手动更新表格。下方三个搜索链接实时显示全部、已合并和待审核的外部 PR，排除个人账号下的仓库。
- **Developer Tools** 包含 Truna、CodexHalo、Porter 和 AgentFocus；LambdaOpt 放在 Selected Projects 的基础设施项目中。
- **Activity** 展示仓库内的公开活动与语言统计 SVG，随系统明暗主题切换。语言比例反映仓库代码分布，不代表熟练程度，也不能代替外部贡献列表。

## 刷新卡片

工作流每周一 09:23 UTC 刷新，也可在 **Actions → Update profile cards → Run workflow** 手动运行。它生成四个文件：

- `profile/stats.svg`、`profile/stats-dark.svg`：公开 GitHub 活动，隐藏等级排名。
- `profile/top-langs.svg`、`profile/top-langs-dark.svg`：公开仓库语言分布，显示前六项，排除本主页仓库。

使用 GitHub 自动提供的 `GITHUB_TOKEN`，无需个人 PAT，不读取其他私有仓库。所有生成步骤成功且文件有变化时才提交；失败时保留上次成功的版本。每周一次的托管任务不会在本机留下常驻进程。

## GitHub 原生贡献区

README 不能改变 GitHub 自带的贡献图和 Contribution activity 时间线。可以在个人主页贡献图上方选择 **Contribution settings → Activity overview**，显示贡献类型和活跃仓库概览。查看近期活动时，使用不带 `from` / `to` 日期筛选参数的主页地址。

参考：[统计卡片 Action](https://github.com/stats-organization/github-readme-stats-action)、[GitHub 贡献区说明](https://docs.github.com/en/account-and-profile/concepts/contributions-on-your-profile)、[开启 Activity overview](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/showing-an-overview-of-your-activity-on-your-profile)。

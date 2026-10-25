# 主页统计卡片

主页 README 已移除 Activity 展示。统计卡片工作流保留为手动运行，不再每天自动生成图片和提交更新。

如需重新生成图片，打开仓库 **Actions → Update profile cards → Run workflow**，选择默认分支后运行。工作流会生成：

- `profile/stats.svg`：公开 GitHub 活动，隐藏等级排名。
- `profile/top-langs.svg`：公开仓库的语言分布，显示前六项，排除本主页仓库。

工作流使用 GitHub 自动提供的 `GITHUB_TOKEN`，无需个人 PAT，不读取其他私有仓库。两个生成步骤都成功且图片有变化时才会提交；请求失败时保留上次成功生成的文件。

这些文件当前不在主页展示。README 也不能控制 GitHub 自带的 Contribution activity 时间线；它由 GitHub 的个人主页设置管理。

参考：[统计卡片 Action](https://github.com/stats-organization/github-readme-stats-action)、[GitHub 贡献区说明](https://docs.github.com/en/account-and-profile/concepts/contributions-on-your-profile)。

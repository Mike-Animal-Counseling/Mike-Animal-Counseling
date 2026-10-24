# 主页统计卡片

[工作流](../.github/workflows/profile-cards.yml) 每天生成两张 SVG，存入本仓库供主页 README 引用：

- `profile/stats.svg`：公开 GitHub 活动，隐藏等级排名。
- `profile/top-langs.svg`：公开仓库的语言分布，显示前六项，排除本主页仓库。

这些数字是公开活动记录和代码分布，不等于编程能力、语言熟练度或贡献质量。工作流使用 GitHub 自动提供的 `GITHUB_TOKEN`，无需个人 PAT，也不读取其他私有仓库的数据。生成步骤的数据请求失败时，工作流会报错并跳过提交，主页保留上次成功生成的图片。

每天计划执行时间是 UTC 13:23，即美国太平洋时间夏令时 06:23、冬令时 05:23。GitHub 可能延后执行。修改工作流后推送到默认分支也会触发更新；图片本身的提交不会重复触发。

需要立即更新时，打开仓库 **Actions → Update profile cards → Run workflow**，选择默认分支后运行。根目录 README 已引用首次成功运行后生成的图片：

```markdown
![GitHub 公开活动](./profile/stats.svg)
![公开仓库语言分布](./profile/top-langs.svg)
```

若公开仓库连续 60 天没有活动，GitHub 会停用定时工作流；可在 Actions 页面重新启用。工作流文件必须位于默认分支，定时任务才会运行。

参考：[统计卡片 Action](https://github.com/stats-organization/github-readme-stats-action)、[GitHub 定时工作流说明](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule)。

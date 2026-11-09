# 主页维护

README 依次展示三个精选项目、最近四条已合并的公开上游 PR 和 Activity。GitHub 原生置顶区展示其他代表项目。

## 刷新 PR 与统计卡片

同一个工作流每周一 09:23 UTC 运行，也可在 **Actions → Update profile cards → Run workflow** 手动刷新。它按合并时间倒序选取其他仓库中最新的四条公开 PR，并更新 README 内 `UPSTREAM-PRS` 标记之间的列表。列表下方的 GitHub 搜索链接可查看包括待审核在内的公开上游 PR。

统计卡片保存在 `profile/stats*.svg` 与 `profile/top-langs*.svg`，分别展示公开活动和仓库语言分布。工作流使用 GitHub 自动提供的 `GITHUB_TOKEN`。搜索结果不完整或生成失败时保留上次成功的版本，文件有变化时才提交。

## 排版参考

参考 [Simon Willison 的个人主页](https://github.com/simonw/simonw) 的项目与近期更新结构，以及他介绍的 [自动更新 README 方法](https://simonwillison.net/2020/Jul/10/self-updating-profile-readme/)。

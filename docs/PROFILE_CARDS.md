# 主页维护

主页保留最初的蓝色封面。精选项目和开发工具各用一行介绍，上游贡献和技术栈接在后面。顶部的 Activity 直达 GitHub 原生贡献区。

## 刷新上游贡献

每周一 09:23 UTC 自动更新，也可在 **Actions → Update profile cards → Run workflow** 手动触发。工作流按合并时间倒序更新 `UPSTREAM-PRS` 标记之间的公开上游 PR 表格，最多显示四条。表格下方的链接可查看完整记录，包括待审核的 PR。

同一份数据也会刷新 `profile/upstream-activity*.svg`，供已有图片链接继续使用。工作流使用 GitHub 自动提供的 `GITHUB_TOKEN`。搜索结果不完整或生成失败时保留上次成功的版本，文件有变化时才提交。

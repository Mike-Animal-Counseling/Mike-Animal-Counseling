# 主页维护

主页以 Git 分支插图和工程方向索引开头，随后是上游贡献和分组的技术栈。项目详情可从原生置顶区进入，顶部的 Activity 直达原生贡献区。

## 刷新上游贡献

每周一 09:23 UTC 自动更新，也可在 **Actions → Update profile cards → Run workflow** 手动触发。工作流按合并时间倒序更新 `UPSTREAM-PRS` 标记之间的公开上游 PR 表格，最多显示四条。表格下方的链接可查看完整记录，包括待审核的 PR。

同一份数据也会刷新 `profile/upstream-activity*.svg`，供已有图片链接继续使用。工作流使用 GitHub 自动提供的 `GITHUB_TOKEN`。搜索结果不完整或生成失败时保留上次成功的版本，文件有变化时才提交。

# 主页维护

README 依次展示三个精选项目、最近四条已合并的公开上游 PR 和一张上游活动卡。GitHub 原生置顶区展示其他代表项目。

## 刷新上游活动

工作流每周一 09:23 UTC 运行，也可在 **Actions → Update profile cards → Run workflow** 手动刷新。它按合并时间倒序更新 `UPSTREAM-PRS` 标记之间的列表。列表下方的 GitHub 搜索链接包含待审核的公开上游 PR。

同一份公开 PR 数据也生成 `profile/upstream-activity*.svg`。左侧显示累计合并数和涉及的上游仓库数，右侧显示截至最近合并月份的四个月走势。日期按太平洋时区归组。GitHub 根据视口和明暗主题显示对应版本。

工作流使用 GitHub 自动提供的 `GITHUB_TOKEN`。搜索结果不完整或生成失败时保留上次成功的版本，文件有变化时才提交。

## 排版参考

项目与近期更新结构参考 [Simon Willison 的主页](https://github.com/simonw/simonw)。活动卡借鉴 [Andrew Young 的主页](https://github.com/andyruwruw/andyruwruw)用 SVG 展示真实数据的做法。

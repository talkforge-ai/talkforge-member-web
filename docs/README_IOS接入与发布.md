# TalkForge iOS 内嵌页面接入与发布

## 页面与地址

GitHub Pages 发布源：`master` 分支 `/docs` 目录。

- 关于我们：`/about/`
- 隐私政策：`/privacy/`
- 用户服务协议：`/terms/`

发布完成后，正式地址分别为：

- `https://talkforge-ai.github.io/talkforge-member-web/about/`
- `https://talkforge-ai.github.io/talkforge-member-web/privacy/`
- `https://talkforge-ai.github.io/talkforge-member-web/terms/`

## 首次启用 GitHub Pages

如果仓库尚未启用 GitHub Pages，需要由具备仓库 Admin 或 Maintain 权限的成员完成一次设置：进入 `Settings → Pages`，在 `Build and deployment` 中选择 `Deploy from a branch`，分支选择 `master`，目录选择 `/docs`，然后保存。

此设置只需执行一次。后续更新 `master` 分支的 `/docs` 内容即可复用上面的固定地址，不需要修改 iOS 客户端链接。

## iOS 页面边界

- 页面用于 `WKWebView` 内容区，不在 H5 内重复绘制状态栏、返回按钮和导航标题。
- iOS 原生侧负责导航栏、返回手势、加载状态、无网络提示和重试。
- 原生导航标题分别使用“关于我们”“隐私政策”“用户服务协议”。
- 页面支持 320px 至 430px 的 iPhone 内容宽度，并兼容安全区。

## WebView 行为

- 三页均为无构建依赖的静态 HTML，不依赖第三方 CDN、字体或脚本。
- “关于我们”的邮箱入口使用 `mailto:`。iOS 侧应在 `WKNavigationDelegate` 中识别非 HTTP(S) scheme，并交由系统处理。
- 两份协议的目录使用原生 HTML `details`，点击目录项后会跳转到对应章节并自动收起。
- 页面内容更新后 URL 保持不变；如客户端出现旧缓存，可按现有 WebView 缓存策略重新加载源站。

## 发布验收

- 三个地址返回 HTTPS 200。
- 页面 CSS、脚本、背景图和品牌图标均返回 200。
- iPhone 320px、390px、430px 无横向滚动。
- 邮箱入口可唤起系统邮件应用。
- 隐私政策与用户服务协议目录可展开、跳转并收起。
- iOS 原生导航与 H5 内容之间不出现重复标题或重复返回按钮。

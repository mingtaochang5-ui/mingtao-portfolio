# 常明涛 · 个人作品集

独立静态发布目录。首页是 `index.html`，不需要安装依赖或构建。

## 本地预览

在此目录运行 `python3 -m http.server 8080`，打开 `http://localhost:8080/`。

## GitHub Pages

1. 将此目录作为独立仓库上传，默认分支为 `main`。
2. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
3. 在 Actions 中运行 Publish portfolio；之后每次推送到 main 都会自动更新。
4. 部署成功后，在 Settings → Pages 获取真实网站地址并验证页面。

不要上传上级“网站”目录，其中含其他项目和源文件。

## 文件说明

- `index.html`：当前正式页面；`minimal.html` 为保留旧链接的入口。
- `styles-minimal.css`、`script-minimal.js`、`water-flow.js`：样式、交互与背景。
- `assets/portfolio/`：实际引用的作品高清图片、头像和四个插画。
- 公网版使用阿里巴巴普惠体 2.0。`portfolio-font.css` 引用阿里官方托管的网页字体文件；仓库不分发字体文件。官网字体服务无法访问时回退到系统黑体。
- `assets/fonts/` 被 Git 忽略，不会上传本地汉仪字体。
- 原工作目录中的文件未修改。后续更新时请同步发布目录，再推送到 GitHub。

作品图片和个人内容未授予开源许可。普惠体来源：`https://fonts.alibabagroup.com/`，字体文件由 `fonts.alibabadesign.com` 提供。

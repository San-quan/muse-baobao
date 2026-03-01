# museStarlinkpay71

说明
- 描述: 完美适配星链。
- 目标: 为 Starlink + 海外带宽 的场景提供网络代理与自动化运维辅助工具（脚本、配置、监控小工具等）。

快速开始
1. 克隆仓库
   git clone git@github.com:San-quan/muse-baobao.git
   cd muse-baobao

2. 安装依赖
   npm ci

3. 运行开发检查
   npm run lint
   npm test

4. 本地运行（示例）
   node ./src/index.js

Cloudflare Worker 部署
1. 复制示例配置
   cp wrangler.sample.toml wrangler.toml

2. 编辑 `wrangler.toml`，填写 `account_id` 和 `BACKEND_ORIGIN`
   [vars]
   BACKEND_ORIGIN = "https://YOUR_VPS_DOMAIN_OR_ORIGIN:10000"

3. 发布 Worker
   npx wrangler publish

维护与贡献
- 提交前请运行 `npm run format && npm run lint && npm test`
- 新功能请基于 `main` 创建分支 `feature/<描述>` 并发起 PR

安全
- 不要在代码库中提交密钥或敏感凭证（.env、私钥等）。
- 若需要，请把敏感凭证配置到 GitHub Secrets。

联系
- 仓库所有者: San-quan

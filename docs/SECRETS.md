# Secrets and where to configure them

Add the following repository secrets in GitHub (Settings -> Secrets and variables -> Actions):
- VPS_SSH_PRIVATE_KEY: private key used by Actions to SSH to VPS
- VPS_HOST: VPS hostname or IP
- VPS_SSH_USER: user for SSH (e.g., root)
- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID
- API_SERVER_TOKEN: token for the backend API

Do NOT commit any private keys or tokens to the repository. Use these secrets in workflows to deploy scripts and write tokens securely to the target hosts.

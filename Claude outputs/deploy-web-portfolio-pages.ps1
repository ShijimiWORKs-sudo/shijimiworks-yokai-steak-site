# =============================================================================
# ShijimiWORKs Web Portfolio HP001-HP008 -> GitHub Pages 公開スクリプト
#
# 前提:
#   - git がインストールされていること
#   - GitHub CLI (gh) がインストールされ、`gh auth login` で認証済みであること
#     (インストール: https://cli.github.com/ / 認証: gh auth login)
#   - Personal Access Token / gh のアカウントが ShijimiWORKs-sudo 配下の
#     8つのリポジトリに対する admin 権限を持っていること (Pages の有効化に必要)
#
# このスクリプトは何をするか:
#   1. 8つのリポジトリを C:\制作データ\11_Portofori\HP00X にクローン
#   2. HP003-HP008 (Next.jsアプリ) には、GitHub Pagesで動かすための
#      next.config.mjs (静的エクスポート設定) と
#      .github/workflows/deploy-pages.yml (自動ビルド&公開) を追加してpush
#      (HP001, HP002 は元から静的サイトなのでコード変更は不要)
#   3. 8リポジトリすべてで GitHub Pages を有効化
#
# 実行後、数分でそれぞれ以下のURLが有効になります:
#   https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP001/
#   https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP002/
#   https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP003/
#   ... HP008まで同様
# =============================================================================

$ErrorActionPreference = "Stop"
$owner = "ShijimiWORKs-sudo"
$workDir = "C:\制作データ\11_Portofori"

function Test-CommandExists($name) {
    return $null -ne (Get-Command $name -ErrorAction SilentlyContinue)
}

if (-not (Test-CommandExists git)) {
    Write-Error "git が見つかりません。先に git をインストールしてください。"
    exit 1
}
if (-not (Test-CommandExists gh)) {
    Write-Error "GitHub CLI (gh) が見つかりません。https://cli.github.com/ からインストールし、`gh auth login` で認証してから再実行してください。"
    exit 1
}

gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Error "gh が未認証です。先に `gh auth login` を実行してください。"
    exit 1
}

New-Item -ItemType Directory -Force -Path $workDir | Out-Null

# --- HP003〜HP008用: 静的エクスポート対応の next.config.mjs ---
$configNoImages = @'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/__REPO__",
  assetPrefix: "/__REPO__/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
'@

$configWithUnsplash = @'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/__REPO__",
  assetPrefix: "/__REPO__/",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
'@

# --- HP003〜HP008共通: GitHub Actions ワークフロー ---
$workflowYml = @'
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - run: touch out/.nojekyll
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
'@

# 各リポジトリの設定: [フォルダ名, リポジトリ名, Next.jsビルドが必要か, images.remotePatternsが必要か]
$repos = @(
    @{ Dir = "HP001"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP001"; NeedsExport = $false },
    @{ Dir = "HP002"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP002"; NeedsExport = $false },
    @{ Dir = "HP003"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP003"; NeedsExport = $true;  NeedsUnsplash = $false },
    @{ Dir = "HP004"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP004"; NeedsExport = $true;  NeedsUnsplash = $false },
    @{ Dir = "HP005"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP005"; NeedsExport = $true;  NeedsUnsplash = $true },
    @{ Dir = "HP006"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP006"; NeedsExport = $true;  NeedsUnsplash = $true },
    @{ Dir = "HP007"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP007"; NeedsExport = $true;  NeedsUnsplash = $true },
    @{ Dir = "HP008"; Repo = "shijimiworks-yokai-steak-site_ProtforioHP008"; NeedsExport = $true;  NeedsUnsplash = $true }
)

foreach ($r in $repos) {
    $repoDir = Join-Path $workDir $r.Dir
    $repoUrl = "https://github.com/$owner/$($r.Repo).git"
    Write-Host "`n=== $($r.Dir) ($($r.Repo)) ===" -ForegroundColor Cyan

    if (Test-Path $repoDir) {
        Write-Host "既にクローン済みです: $repoDir (スキップ)"
    } else {
        git clone --depth 1 $repoUrl $repoDir
    }

    if ($r.NeedsExport) {
        Push-Location $repoDir
        try {
            $template = if ($r.NeedsUnsplash) { $configWithUnsplash } else { $configNoImages }
            $configContent = $template.Replace("__REPO__", $r.Repo)
            Set-Content -Path "next.config.mjs" -Value $configContent -Encoding UTF8 -NoNewline

            New-Item -ItemType Directory -Force -Path ".github/workflows" | Out-Null
            Set-Content -Path ".github/workflows/deploy-pages.yml" -Value $workflowYml -Encoding UTF8 -NoNewline

            git add next.config.mjs .github/workflows/deploy-pages.yml
            $changes = git status --porcelain
            if ($changes) {
                git commit -m "Add GitHub Pages static export config and deploy workflow"
                git push origin main
            } else {
                Write-Host "変更なし (既に設定済みの可能性があります)"
            }
        } finally {
            Pop-Location
        }
    }

    Write-Host "GitHub Pages を有効化しています..."
    if ($r.NeedsExport) {
        gh api --method POST "repos/$owner/$($r.Repo)/pages" -f "build_type=workflow" 2>$null
    } else {
        gh api --method POST "repos/$owner/$($r.Repo)/pages" -f "source[branch]=main" -f "source[path]=/" 2>$null
    }
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  (既に有効化されている可能性があります。エラーが出ても問題ない場合があります)" -ForegroundColor Yellow
    }
}

Write-Host "`n=== 完了 ===" -ForegroundColor Green
Write-Host "HP003〜HP008はGitHub Actionsのビルドが走るため、数分後に以下のURLが有効になります。"
Write-Host "HP001・HP002はビルド不要なので、通常はもう少し早く有効になります。`n"
foreach ($r in $repos) {
    Write-Host "https://shijimiworks-sudo.github.io/$($r.Repo)/"
}

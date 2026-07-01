export async function createSocialPostDraft(sourceId: string) {
  // TODO: Buffer / SNS投稿用の下書きを生成する。
  // TODO: Works / Articles更新時に媒体別のSNS文を生成する。
  // TODO: 媒体ごとの文字数、リンク、公開状態を検証する。
  // TODO: Notionと各媒体の投稿状態を同期する。
  return { sourceId, status: "draft" as const };
}

export async function syncPostSchedule() {
  // TODO: 投稿スケジュールをBuffer / SNSと同期する。
  return { synced: false, reason: "Automation provider is not configured." };
}

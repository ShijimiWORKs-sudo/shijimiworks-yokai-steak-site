import { articles } from "@/data/articles";
import { works } from "@/data/works";

// TODO: Notion DBからWorksを取得し、Work型へ変換する。
// TODO: Notion DBからArticlesを取得し、Article型へ変換する。
// TODO: Notion DBの公開フラグでサイトへの表示を制御する。
// TODO: slugからWorks / Articlesの詳細ページを生成する。
// CMS移行時は、この2関数の内部だけをNotion API実装へ差し替えます。
export async function getWorksFromNotion() {
  return works;
}

export async function getArticlesFromNotion() {
  return articles;
}

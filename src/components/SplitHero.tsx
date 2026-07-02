import Image from "next/image";
import Link from "next/link";

export function SplitHero() {
  return (
    <section className="picture-gateway" aria-label="ShijimiWORKs と 妖怪ステーキの入口">
      <div className="picture-gateway-frame">
        <Image
          src="/images/ogp/common-ogp.png"
          alt="ShijimiWORKs と 妖怪ステーキの共通キービジュアル"
          fill
          priority
          sizes="(min-width: 768px) 96vw, 100vw"
          className="picture-gateway-image"
        />

        <Link href="/shijimiworks" className="picture-gateway-hit picture-gateway-hit-left" aria-label="ShijimiWORKsへ入る">
          <span>ShijimiWORKsへ入る</span>
        </Link>
        <Link href="/youkai-steak" className="picture-gateway-hit picture-gateway-hit-right" aria-label="妖怪ステーキへ入る">
          <span>妖怪ステーキへ入る</span>
        </Link>
      </div>

      <div className="picture-gateway-mobile-cards" aria-label="スマートフォン用入口">
        <Link href="/shijimiworks" className="picture-mobile-card picture-mobile-card-shijimi">
          <span>AI Production Studio</span>
          <strong>ShijimiWORKs</strong>
          <small>AI・Web・記事制作・自動化の制作スタジオへ</small>
        </Link>
        <Link href="/youkai-steak" className="picture-mobile-card picture-mobile-card-youkai">
          <span>Story / Voice / Cinema</span>
          <strong>妖怪ステーキ</strong>
          <small>小説・映画感想・Podcastの物語世界へ</small>
        </Link>
      </div>
    </section>
  );
}

import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'テレボート会員限定スポーツ紙予想サイト',
  robots: { index: false, follow: false },
  description:
    '便利で快適なサービスをお届けするため、2025年4月1日より本サイトリニューアルを実施いたします。',
  keywords: ['ボートレース予想', 'ボートレース', '予想', 'テレボート', 'スポーツ紙予想', '競艇'],
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    siteName: 'テレボート会員限定スポーツ紙予想サイト',
    url: 'https://tb-yosou.jp/',
    title: 'テレボート会員限定スポーツ紙予想サイト',
    description:
      '便利で快適なサービスをお届けするため、2025年4月1日より本サイトリニューアルを実施いたします。',
  },
}

const RenewalInProgressPage = () => {
  return (
    <div
      className="flex justify-center min-h-screen bg-white bg-repeat bg-center"
      style={{ backgroundImage: "url('/tb-yosou_info-renewal_bg.png')" }}
    >
      <h1 className="text-center my-16 mx-auto text-black">
        <Image
          src="/tb-yosou_info-renewal.png"
          alt="サイトリニューアル中！ 日頃より予想NAVIをご愛顧いただき、誠にありがとうございます！便利で快適なサービスをお届けするため、2025年4月1日より本サイトリニューアルを実施いたします。リニューアル後の便利で快適なサービスを楽しみにお待ちいただけますと幸いです。今後ともどうぞよろしくお願いいたします！"
          width={800}
          height={800}
          className="w-[90%] h-auto inline-block"
          priority
        />
      </h1>
    </div>
  )
}

export default RenewalInProgressPage

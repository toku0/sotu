import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Presentation, GitBranch, Trophy } from "lucide-react"

export function Activities() {
  const activities = [
    {
      icon: GitBranch,
      title: "ソフトウェア開発",
      description: "Web・モバイルアプリケーション、AIシステム、データ分析ツールなど、多様なプロジェクトの企画・開発",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Presentation,
      title: "技術勉強会",
      description: "最新技術のキャッチアップ、コードレビュー、アーキテクチャ設計など、週次での技術共有セッション",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Calendar,
      title: "産学連携プロジェクト",
      description: "地域企業や自治体と協力し、実際のビジネス課題に対するソリューション開発",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: Trophy,
      title: "コンテスト参加",
      description: "ハッカソン、アプリコンテスト、学会発表など、外部イベントへの積極的な参加と受賞実績",
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">主な活動内容</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            実践的な開発経験を積むため、多様な活動に取り組んでいます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <Card key={activity.title} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activity.color}`}>
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

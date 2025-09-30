import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export function Members() {
  const stats = [
    { label: "メンバー数", value: "24名" },
    { label: "学年構成", value: "3-4年生" },
    { label: "専攻分野", value: "ITスペシャリスト" },
    { label: "活動期間", value: "2024年度" },
  ]

  return (
    <section id="members" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">メンバー構成</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            多様なバックグラウンドを持つ学生が集まり、それぞれの強みを活かして活動しています
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border bg-muted/30">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">専門分野</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "フロントエンド開発",
                  "バックエンド開発",
                  "モバイルアプリ開発",
                  "AI・機械学習",
                  "データベース設計",
                  "UI/UXデザイン",
                ].map((field) => (
                  <div
                    key={field}
                    className="px-4 py-2 bg-background rounded-lg text-sm text-center border border-border"
                  >
                    {field}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

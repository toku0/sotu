import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Lightbulb, Award } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code2,
      title: "実践的な開発",
      description: "最新のフレームワークと技術スタックを使用した実務レベルの開発経験",
    },
    {
      icon: Users,
      title: "チーム協働",
      description: "アジャイル開発手法を取り入れた効率的なチーム開発",
    },
    {
      icon: Lightbulb,
      title: "創造的な課題解決",
      description: "実社会の問題に対する革新的なソリューションの提案と実装",
    },
    {
      icon: Award,
      title: "成果の発表",
      description: "学内外での展示会やコンテストへの積極的な参加",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">IS卒業制作_12版について</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            私たちはITスペシャリスト学科の学生で構成される団体です。卒業制作を通じて、
            実践的なソフトウェア開発スキルを磨き、社会に貢献するプロダクトを生み出しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

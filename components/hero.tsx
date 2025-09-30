import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">2024年度 卒業制作プロジェクト</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            革新的なソフトウェアで
            <br />
            <span className="text-primary">未来を創造する</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ITスペシャリスト学科の学生が集まり、最新技術を活用した実践的なプロジェクトに取り組んでいます。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              プロジェクトを見る
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              活動について
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

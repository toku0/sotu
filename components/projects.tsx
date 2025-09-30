import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "キャンパスナビゲーションアプリ",
      description: "新入生向けの学内案内システム。AR技術を活用し、建物や教室への最適ルートを表示",
      tags: ["React Native", "AR", "Firebase"],
      status: "開発中",
    },
    {
      title: "学習支援プラットフォーム",
      description: "AI を活用した個別最適化学習システム。学生の理解度に応じた問題推薦機能を実装",
      tags: ["Next.js", "Python", "TensorFlow"],
      status: "完成",
    },
    {
      title: "地域イベント管理システム",
      description: "地域自治体と連携したイベント情報の一元管理・配信プラットフォーム",
      tags: ["Vue.js", "Node.js", "PostgreSQL"],
      status: "完成",
    },
    {
      title: "リアルタイム翻訳チャット",
      description: "多言語対応のチャットアプリケーション。留学生とのコミュニケーションを円滑化",
      tags: ["WebSocket", "React", "Google Cloud"],
      status: "開発中",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">プロジェクト実績</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            これまでに取り組んできた主要なプロジェクトをご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </div>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Badge variant={project.status === "完成" ? "default" : "outline"}>{project.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

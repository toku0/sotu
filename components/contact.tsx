import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">お問い合わせ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            プロジェクトへの参加、コラボレーション、その他のお問い合わせはこちらから
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">メール</h3>
                <p className="text-sm text-muted-foreground mb-4">is-project@university.ac.jp</p>
                <Button variant="outline" size="sm">
                  送信する
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">SNS</h3>
                <p className="text-sm text-muted-foreground mb-4">@is_graduation_12</p>
                <Button variant="outline" size="sm">
                  フォローする
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">資料請求</h3>
                <p className="text-sm text-muted-foreground mb-4">活動資料をダウンロード</p>
                <Button variant="outline" size="sm">
                  ダウンロード
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

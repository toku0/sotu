export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IS</span>
            </div>
            <span className="font-bold">IS卒業制作_12版</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            ITスペシャリスト学科の学生による卒業制作プロジェクト団体
          </p>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 IS卒業制作_12版. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

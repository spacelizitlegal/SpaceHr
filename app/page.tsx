import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight, BarChart3, Bot, Zap, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Unlock Your Team's Potential with <span className="text-primary">AI-Powered</span> Performance
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Transform how you manage talent. Get real-time insights, automated feedback, and personalized growth paths driven by advanced AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose AIPerform?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build a high-performing culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Analysis",
                description: "Automated performance reviews and unbiased feedback generation.",
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track KPIs and growth metrics in real-time with intuitive dashboards.",
              },
              {
                icon: Zap,
                title: "Instant Feedback",
                description: "Continuous feedback loops to keep everyone aligned and improving.",
              },
              {
                icon: Users,
                title: "Team Alignment",
                description: "Ensure individual goals align perfectly with company objectives.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow bg-background/60 backdrop-blur">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to revolutionize your workflow?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join thousands of forward-thinking companies using AI to drive performance.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold text-primary rounded-full px-8">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}

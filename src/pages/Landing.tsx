
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cloud, Download, Shield, Zap, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Download,
      title: "Instant Magnet Processing",
      description: "Paste any magnet link and we'll download it directly to your cloud storage"
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Support",
      description: "Google Drive, Dropbox, OneDrive - connect all your favorite cloud services"
    },
    {
      icon: Zap,
      title: "AI-Powered Organization",
      description: "Smart categorization and folder organization powered by machine learning"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption with GDPR compliance and privacy-first design"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share download queues and manage content with your family or team"
    },
    {
      icon: Star,
      title: "Premium Features",
      description: "Advanced automation, format conversion, and priority downloads"
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out the service",
      features: [
        "2GB download quota",
        "1 concurrent download",
        "Basic organization",
        "Google Drive integration",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Smart",
      price: "$9",
      period: "/month",
      description: "Ideal for regular users",
      features: [
        "25GB download quota",
        "3 concurrent downloads",
        "AI-powered organization",
        "Multi-cloud support",
        "Auto-subtitles",
        "Priority support"
      ],
      cta: "Start Smart Plan",
      popular: true
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For power users and creators",
      features: [
        "100GB download quota",
        "10 concurrent downloads",
        "Advanced AI features",
        "Format conversion",
        "RSS automation",
        "API access",
        "Phone support"
      ],
      cta: "Go Pro",
      popular: false
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "Perfect for teams and families",
      features: [
        "500GB download quota",
        "Unlimited downloads",
        "Team management",
        "Collaboration tools",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">CloudMagnet</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          🚀 Now supporting 15+ cloud providers
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Download Anything
          <br />
          to Your Cloud
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform magnet links into organized cloud storage. No downloads, no storage limits, 
          just seamless access to your content from anywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="text-lg px-8">
            <Link to="/signup">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            <Download className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        {/* Demo Video Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Download className="h-10 w-10 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground">Demo Video Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your downloads and organize your digital content
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={tier.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/signup">{tier.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Downloads?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who have already made the switch to cloud-based downloading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/signup">Get Started Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Cloud className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">CloudMagnet</span>
              </div>
              <p className="text-muted-foreground mb-4">
                The fastest way to download and organize your content in the cloud.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CloudMagnet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

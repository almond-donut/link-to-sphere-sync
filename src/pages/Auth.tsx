
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Cloud, Mail, Github, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface AuthProps {
  mode: 'login' | 'signup';
}

const Auth = ({ mode }: AuthProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = mode === 'login';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isLogin ? "Welcome back!" : "Account created!",
        description: isLogin ? "You have been signed in successfully." : "Your account has been created. Welcome to CloudMagnet!",
      });
      navigate('/dashboard');
    }, 1500);
  };

  const handleOAuthLogin = (provider: string) => {
    toast({
      title: "OAuth Login",
      description: `${provider} login will be implemented with Supabase integration`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">CloudMagnet</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Sign in to your CloudMagnet account' 
                : 'Get started with your free account'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* OAuth Buttons */}
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleOAuthLogin('Google')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Continue with Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleOAuthLogin('GitHub')}
              >
                <Github className="h-4 w-4 mr-2" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <Button variant="link" className="px-0 text-sm">
                    Forgot password?
                  </Button>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {isLogin ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  isLogin ? 'Sign in' : 'Create account'
                )}
              </Button>
            </form>

            {/* Switch Mode */}
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <Button variant="link" className="px-0 text-sm" asChild>
                <Link to={isLogin ? "/signup" : "/login"}>
                  {isLogin ? 'Sign up' : 'Sign in'}
                </Link>
              </Button>
            </div>

            {!isLogin && (
              <p className="text-xs text-muted-foreground text-center">
                By creating an account, you agree to our{' '}
                <Button variant="link" className="px-0 text-xs">Terms of Service</Button>
                {' '}and{' '}
                <Button variant="link" className="px-0 text-xs">Privacy Policy</Button>
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;

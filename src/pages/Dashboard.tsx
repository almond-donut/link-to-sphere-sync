
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Cloud, 
  Plus, 
  Settings, 
  History, 
  BarChart3,
  Folder,
  Link as LinkIcon,
  Play,
  Pause,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [magnetLink, setMagnetLink] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock data for demonstration
  const activeDownloads = [
    {
      id: 1,
      name: "Ubuntu 22.04.3 Desktop amd64.iso",
      progress: 45,
      speed: "2.4 MB/s",
      eta: "12 minutes",
      size: "4.7 GB",
      status: "downloading"
    },
    {
      id: 2,
      name: "Documentary Collection",
      progress: 78,
      speed: "1.8 MB/s",
      eta: "5 minutes",
      size: "2.3 GB",
      status: "downloading"
    }
  ];

  const recentDownloads = [
    {
      id: 3,
      name: "Linux Mint 21.2 Cinnamon",
      size: "2.8 GB",
      completedAt: "2 hours ago",
      cloudPath: "/Downloads/OS/Linux Mint 21.2"
    },
    {
      id: 4,
      name: "Open Source Movies Pack",
      size: "8.4 GB",
      completedAt: "1 day ago",
      cloudPath: "/Downloads/Movies/Open Source"
    }
  ];

  const handleMagnetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!magnetLink.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid magnet link",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setMagnetLink("");
      toast({
        title: "Download Added",
        description: "Your download has been added to the queue",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">CloudMagnet</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Smart Plan</Badge>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Add New Download */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add New Download
            </CardTitle>
            <CardDescription>
              Paste a magnet link below to start downloading to your cloud storage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleMagnetSubmit} className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="magnet:?xt=urn:btih:..."
                  value={magnetLink}
                  onChange={(e) => setMagnetLink(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
              <Button type="submit" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Download className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Add Download
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Downloads */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  Active Downloads ({activeDownloads.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeDownloads.map((download) => (
                  <div key={download.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium truncate">{download.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {download.speed} • {download.eta} remaining
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Pause className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{download.progress}% complete</span>
                        <span>{download.size}</span>
                      </div>
                      <Progress value={download.progress} className="h-2" />
                    </div>
                  </div>
                ))}
                
                {activeDownloads.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Download className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No active downloads</p>
                    <p className="text-sm">Add a magnet link above to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Downloads */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Recent Downloads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDownloads.map((download) => (
                    <div key={download.id} className="flex items-center justify-between border rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <Folder className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium">{download.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {download.size} • {download.completedAt}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{download.cloudPath}</Badge>
                        <Button variant="ghost" size="icon">
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Storage Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Storage Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>This Month</span>
                    <span>12.4 GB / 25 GB</span>
                  </div>
                  <Progress value={49.6} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Downloads</span>
                    <span className="text-sm font-medium">8.2 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Processed</span>
                    <span className="text-sm font-medium">4.2 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Queue</span>
                    <span className="text-sm font-medium">2 items</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cloud Connections */}
            <Card>
              <CardHeader>
                <CardTitle>Cloud Storage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Cloud className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium">Google Drive</span>
                  </div>
                  <Badge variant="default">Connected</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <Cloud className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-medium">Dropbox</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Storage
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Downloads</span>
                  <span className="font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">This Week</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg Speed</span>
                  <span className="font-medium">2.1 MB/s</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

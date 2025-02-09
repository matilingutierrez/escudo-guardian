
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { Shield, ArrowRight, Check, User, SquareStack } from "lucide-react";

const Index = () => {
  const discordLink = "https://discord.com/oauth2/authorize?client_id=1337424324746809415&permissions=8&integration_type=0&scope=bot";
  const contractAddress = "0x0aBcF28Eeb83C830c19E40AE96A433A653e29C7c";

  const features = [
    { title: "Access", description: "Easy to setup for any Safe multisig user", icon: User },
    { title: "Security", description: "Automated validation of every transaction", icon: Shield },
    { title: "Execution", description: "Signs and processes verified transactions", icon: Check },
    { title: "Multi-chain", description: "Use it in all Safe's supported networks", icon: SquareStack },
  ];

  const technicalFeatures = [
    "ElizaOS powered + home-made plugin",
    "Discord integration", 
    "Easy to extend/add new checks",
    "Multisend/Batch transactions support",
  ];

  const securityChecks = [
    "Address poisoning",
    "Infinite approvals",
    "Frontrunning protection",
    "Darklisted addresses",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center relative">
          <div className="float-animation mb-8">
            <Shield className="w-24 h-24 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Escudo
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-1 max-w-2xl">
            Security-focused AI agent for Safe multisig validation
          </p>
          <div className="flex items-center justify-center pb-8 text-xs text-gray-500">
            <span>Made with ❤️ for</span>
            <img src="/safe.png" alt="Safe" className="h-6" />
          </div>
          <div className="space-y-4">
            <Button 
              className="group bg-blue-600 hover:bg-blue-700"
              size="lg"
              onClick={() => window.open(discordLink, '_blank')}
            >
              <img src="/discord.png" alt="Discord" className="h-4 mr-2" />
              Add to Discord
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span className="font-mono">{contractAddress}</span>
              <CopyButton text={contractAddress} />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 card-hover glass">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Features Section */}
        <section className="py-20 px-4 bg-blue-600 text-white rounded-3xl mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Advanced Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Technical Innovation</h3>
                <ul className="space-y-4">
                  {technicalFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-blue-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Security Intelligence</h3>
                <ul className="space-y-4">
                  {securityChecks.map((check, index) => (
                    <li key={index} className="flex items-center">
                      <Shield className="w-5 h-5 mr-3 text-blue-300" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Made with love section */}
        
      </div>
    </div>
  );
};

export default Index;

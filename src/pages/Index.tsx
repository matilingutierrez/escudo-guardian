
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";
import { Shield, ArrowRight, Check, User, Database, Link } from "lucide-react";

const Index = () => {
  const discordLink = "https://discord.com/oauth2/authorize?client_id=1337424324746809415&permissions=8&integration_type=0&scope=bot";
  const contractAddress = "0x0aBcF28Eeb83C830c19E40AE96A433A653e29C7c";

  const features = [
    { title: "Access", description: "Easy to setup for any Safe multisig user", icon: User },
    { title: "Security", description: "Automated validation of every transaction", icon: Shield },
    { title: "Execution", description: "Signs and processes verified transactions", icon: Check },
    { title: "Control", description: "Works seamlessly with existing signers", icon: Database },
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
        <div className="float-animation mb-8">
          <Shield className="w-24 h-24 text-primary" />
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Escudo
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Security-focused AI agent for Safe multisig validation
        </p>
        <div className="space-y-4">
          <Button 
            className="group"
            size="lg"
            onClick={() => window.open(discordLink, '_blank')}
          >
            <Link className="mr-2 h-5 w-5" />
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 card-hover">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Epic Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Depth</h3>
              <ul className="space-y-4">
                {technicalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Security Checks</h3>
              <ul className="space-y-4">
                {securityChecks.map((check, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-blue-400" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

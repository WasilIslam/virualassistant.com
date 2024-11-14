"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, Coffee, Briefcase, Lightbulb, Laptop, Headphones, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function LandingPageComponent() {
  const benefits = [
    { title: "Task Management", icon: <Coffee className="h-6 w-6" /> },
    { title: "Business Support", icon: <Briefcase className="h-6 w-6" /> },
    { title: "Problem Solving", icon: <Lightbulb className="h-6 w-6" /> },
    { title: "Technical Assistance", icon: <Laptop className="h-6 w-6" /> },
    { title: "Customer Service", icon: <Headphones className="h-6 w-6" /> },
  ];

  const comparisonItems = [
    { feature: "Technical Problem-Solving", devPlus: true, regular: false },
    { feature: "Custom Automation Creation", devPlus: true, regular: false },
    { feature: "Website Development & Maintenance", devPlus: true, regular: false },
    { feature: "Data Analysis & Visualization", devPlus: true, regular: false },
    { feature: "API Integration", devPlus: true, regular: false },
    { feature: "Debugging & Troubleshooting", devPlus: true, regular: false },
    { feature: "Email Management", devPlus: true, regular: true },
    { feature: "Calendar Scheduling", devPlus: true, regular: true },
    { feature: "Basic Administrative Tasks", devPlus: true, regular: true },
    { feature: "Technical Documentation", devPlus: true, regular: false },
  ];

  const clientsHelped = [
    {
      name: "TechStart Inc.",
      description: "Automated their customer onboarding process, reducing time-to-value by 50%.",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "GreenGrow Farms",
      description: "Developed a custom inventory management system, increasing efficiency by 30%.",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "SwiftShip Logistics",
      description: "Created API integrations that streamlined their shipping processes, saving 20 hours per week.",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "EduLearn Academy",
      description: "Built an interactive online learning platform, increasing student engagement by 40%.",
      logo: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <header className="sticky top-0 z-50 w-full border-b bg-amber-100/95 backdrop-blur supports-[backdrop-filter]:bg-amber-100/60">
        <div className="container flex h-14 items-center">
          <Link className="flex items-center justify-center space-x-2" href="#">
            <Coffee className="h-6 w-6 text-amber-800" />
            <span className="font-bold text-xl text-amber-900">VirualAssitant.com</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium text-amber-900 hover:underline underline-offset-4" href="#benefits">
              Benefits
            </Link>
            <Link className="text-sm font-medium text-amber-900 hover:underline underline-offset-4" href="#comparison">
              Comparison
            </Link>
            <Link className="text-sm font-medium text-amber-900 hover:underline underline-offset-4" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-amber-900 hover:underline underline-offset-4" href="#clients">
              Clients
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-amber-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">Hire a Developer+ Virtual Assistant</h1>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">Get the power of a full-stack developer and the efficiency of a virtual assistant, starting at just $509 per month.</p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="#pricing">Start Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-800 hover:bg-amber-200">
                  <Link href="#comparison">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-900">Why Choose a Developer+ Virtual Assistant?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 bg-amber-50 border-amber-200">
                  <div className="rounded-full bg-amber-200 p-3 mb-4">{benefit.icon}</div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-amber-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-amber-700">Get expert-level assistance in {benefit.title.toLowerCase()} to streamline your business operations.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-900">Developer+ VA vs Regular VA</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-200">
                    <th className="border border-amber-300 p-2 text-left text-amber-900">Feature</th>
                    <th className="border border-amber-300 p-2 text-center text-amber-900">Developer+ VA</th>
                    <th className="border border-amber-300 p-2 text-center text-amber-900">Regular VA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "'bg-amber-50'" : "'bg-white'"}>
                      <td className="border border-amber-300 p-2 text-amber-800">{item.feature}</td>
                      <td className="border border-amber-300 p-2 text-center">{item.devPlus ? <CheckCircle className="inline text-green-500" /> : <X className="inline text-red-500" />}</td>
                      <td className="border border-amber-300 p-2 text-center">{item.regular ? <CheckCircle className="inline text-green-500" /> : <X className="inline text-red-500" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-900">Flexible Pricing Plans</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-amber-800">$509/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-amber-600" /> 80 hours per month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Basic task automation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Website maintenance
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-amber-800">$959/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-amber-600" /> 160 hours per month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Advanced automation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Custom software development
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-amber-800">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-amber-600" /> Flexible hours
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Dedicated team
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> 24/7 priority support
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-900">Clients We've Helped</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {clientsHelped.map((client, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 bg-white border-amber-200">
                  <Image src={client.logo} alt={`${client.name} logo`} width={100} height={100} className="mb-4" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-amber-900">{client.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-amber-700">{client.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">Ready to Transform Your Workflow?</h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the ranks of successful businesses leveraging the power of Developer+ Virtual Assistants.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white" size="lg">
                  <Link href="#pricing">Get Started Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-amber-200 bg-amber-100">
        <p className="text-xs text-amber-800">© 2024 VirualAssitant.com. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-amber-800 hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-amber-800 hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

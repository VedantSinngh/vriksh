import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AgentInfo() {
  return (
    <div className="border rounded-lg p-6 space-y-6">
      <h3 className="text-lg font-medium text-black">Listed By</h3>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image src="/placeholder.svg" alt="Agent" fill className="object-cover" />
        </div>
        <div>
          <div className="font-medium text-black">Luann McLawhorn</div>
          <div className="text-sm text-black">+1(811) 634-5121</div>
          <div className="text-sm text-black">info@website.com</div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-black" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Type your message here..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
          ></textarea>
        </div>
        <Button className="w-full gradient-bg">Send Message</Button>
      </div>
    </div>
  );
}
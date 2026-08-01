"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

interface WaitlistProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Waitlist({
  open,
  onOpenChange,
}: WaitlistProps) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [creator, setCreator] = useState("YouTube");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!name.trim()) {
        toast.error("Please enter your name.");
        return;
    }

    if (!email.trim()) {
        toast.error("Please enter your email address.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
    }

    setLoading(true);

    // rest of your code...


 setLoading(true);

try {
  const formData = new FormData();

  formData.append("entry.1712721630", name);
  formData.append("entry.1323022525", email);
  formData.append("entry.732820654", creator);

  await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSdNKh41GGwc_SS0ZrE-R-yqRm4w1HS8Wd4HKNXY0eoGrOEMsQ/formResponse",
    {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }
  );

  toast.success(
    "You're on the waitlist! We'll notify you when Remin launches."
  );

  setName("");
  setEmail("");
  setCreator("YouTube");

  onOpenChange(false);
  } catch (error) {
  console.error(error);

  toast.error(
    "Unable to join the waitlist. Please check your internet connection and try again."
  );
  } finally {
  setLoading(false);
  }
};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-md rounded-xl bg-neutral-950 border border-zinc-800 text-white p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            Become an Early Creator
          </DialogTitle>

          <DialogDescription className="text-zinc-400 pt-2">
            Join the waitlist and be among the first to experience Remin.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 pt-4 max-h-[70vh]">

          <div>
            <label className="text-sm font-medium">
              Name
            </label>

            <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              placeholder="john@email.com"
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              What do you create?
            </label>

            <select 
            value={creator}
            onChange={(e)=>setCreator(e.target.value)}
            className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-yellow-600">
              <option>YouTube</option>
              <option>TikTok</option>
              <option>Instagram</option>
              <option>Podcast</option>
              <option>Gaming</option>
              <option>Tech</option>
              <option>Filmmaking</option>
              <option>Photography</option>
              <option>Fitness</option>
              <option>Travel</option>
              <option>Lifestyle</option>
              <option>Food</option>
              <option>Education</option>
              <option>Streamer</option>
              <option>Other</option>
            </select>
          </div>

          <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-lg bg-yellow-600 py-3 font-bold transition hover:bg-blue-900">
            {loading ? "Joining" : "Join the Waitlist"} 
          </button>

        </div>
      </DialogContent>
    </Dialog>
  );
}
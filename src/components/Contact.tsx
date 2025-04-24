import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { MessageSquare, Rocket } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.");
        return;
      }

      setShowSuccessDialog(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20 px-4 relative overflow-hidden ">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Let's Start Your Tech Journey Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Reach out to us today for a free consultation or to learn more about
              our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-6 rounded-lg space-y-6 animate-fade-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-6 rounded-lg space-y-6 animate-fade-up">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                  <div className="space-y-4">
                    <p>
                      <span className="text-primary">Email:</span>{" "}
                      trionixsoftwaresolutions@gmail.com
                    </p>
                    <p>
                      <span className="text-primary">Phone:</span> +91 9558315343
                    </p>
                    <p>
                      <span className="text-primary">CEO:</span> Mehta Darshil
                    </p>
                    <p>
                      <span className="text-primary">CTO:</span> Sondagar Harshil
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
                  <a
                    href="https://wa.me/919512918210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-purple-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl font-bold mb-3">Visit Our Location</h2>
            <p className="text-lg text-muted-foreground">
              Savar Kundla, Gujarat, India
            </p>
          </div>
          <div className="glass-card p-3 rounded-lg shadow-lg animate-fade-up">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 pointer-events-none z-10 rounded-xl" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59589.97195431568!2d71.27486367909123!3d21.337719974756534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39589de4c06b550d%3A0xceaf65c8dc2a5cce!2sSavarkundla%2C%20Gujarat%20364515!5e0!3m2!1sen!2sin!4v1718352561374!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-20 flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-medium">Trionix Software Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md animate-fade-in">
          <DialogHeader>
            <DialogTitle className="text-center flex flex-col items-center gap-4">
              <div className="rounded-full bg-primary/20 p-3">
                <Rocket className="w-6 h-6 text-primary animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  🎉 Congratulations! You're One Step Closer to Making Your Dream a Reality! 🎉
                </h3>
                <p className="text-muted-foreground text-base font-normal">
                  Thank you for reaching out to us. Our team will review your message and get back to you shortly.
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
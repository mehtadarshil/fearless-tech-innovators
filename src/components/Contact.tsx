import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { WhatsappIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="glass-card p-6 rounded-lg space-y-6 animate-fade-up">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
              <div className="space-y-4">
                <p>
                  <span className="text-primary">Company:</span> TechNoFear
                </p>
                <p>
                  <span className="text-primary">Email:</span>{" "}
                  technofear4@gmail.com
                </p>
                <p>
                  <span className="text-primary">Phone:</span> +91 9512918210
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
                <WhatsappIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
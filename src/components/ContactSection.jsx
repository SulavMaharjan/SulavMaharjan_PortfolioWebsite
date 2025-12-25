import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind? or want to collaborate? Feel free to reach
          out. I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <h3 className="text-2xl font-semibold mb-6 pt-8">
            Contact Information
          </h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10  ">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium flex ">Email</h4>
                <a
                  href="mailto:sulavmaharjan87@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sulavmaharjan87@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10  ">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium flex">Phone Number</h4>
                <a
                  href="tel:+9779823152243"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +977 9823152243
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10  ">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium flex">Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Sanagaun, Lalitpur, Nepal
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center ">
              <a
                href="https://www.linkedin.com/in/sulav-maharjan-358209371/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="mailto:sulavmaharjan87@gmail.com" target="_blank">
                <MailIcon />
              </a>
              <a
                href="https://www.facebook.com/sulav.maharjan.937456"
                target="_blank"
              >
                <Facebook />
              </a>
              <a href="https://github.com/SulavMaharjan" target="_blank">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

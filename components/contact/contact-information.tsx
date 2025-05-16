import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

const ContactInformation = () => {
  return (
    <CardContent className="px-0 md:px-6">
      <div className="space-y-4 md:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="border-2 bg-slate-50 p-5"
          >
            <Mail className="size-6 text-blue-500" />
          </Button>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Quick Contact</h3>
            <p className="text-slate-500">Email: mochammadfahmiks@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="border-2 bg-slate-50 p-5"
          >
            <Phone className="size-6 text-blue-500" />
          </Button>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Phone Number</h3>
            <p className="text-slate-500">+62 85157017553</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="border-2 bg-slate-50 p-5"
          >
            <MapPin className="size-6 text-blue-500" />
          </Button>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Headquater</h3>
            <p className="text-slate-500">
              Jl. Mawar Merah No. 666, Jawa Timur, Surabaya, 60176.
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default ContactInformation;

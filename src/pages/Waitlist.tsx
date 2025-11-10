import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import logoFleuret from "@/assets/logo-fleuret.png";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";
import { supabase } from "@/integrations/supabase/client";

const Waitlist = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    message: ""
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const waitlistSchema = z.object({
    name: z.string().trim().min(1, { message: language === 'fr' ? "Le nom est requis" : "Name is required" }).max(100, { message: language === 'fr' ? "Le nom doit faire moins de 100 caractères" : "Name must be less than 100 characters" }),
    email: z.string().trim().email({ message: language === 'fr' ? "Email invalide" : "Invalid email" }).max(255, { message: language === 'fr' ? "L'email doit faire moins de 255 caractères" : "Email must be less than 255 characters" }),
    company: z.string().trim().max(100, { message: language === 'fr' ? "Le nom de l'entreprise doit faire moins de 100 caractères" : "Company name must be less than 100 characters" }).optional(),
    position: z.string().trim().max(100, { message: language === 'fr' ? "Le poste doit faire moins de 100 caractères" : "Position must be less than 100 characters" }).optional(),
    message: z.string().trim().max(1000, { message: language === 'fr' ? "Le message doit faire moins de 1000 caractères" : "Message must be less than 1000 characters" }).optional()
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      toast.error(language === 'fr' ? "Veuillez compléter le captcha" : "Please complete the captcha");
      return;
    }

    setIsSubmitting(true);

    try {
      const validatedData = waitlistSchema.parse(formData);

      console.log("Sending waitlist submission to backend...");

      // Call the edge function to send email
      const { data, error } = await supabase.functions.invoke('send-waitlist-email', {
        body: {
          ...validatedData,
          captchaToken
        }
      });

      if (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
      }

      console.log("Email sent successfully:", data);
      toast.success(t('waitlist.success'));

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        console.error("Submission error:", error);
        toast.error(t('waitlist.error'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/30 to-white flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.08),transparent_60%)] pointer-events-none" />
      
      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-4">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('waitlist.back')}
            </Button>
          </Link>
        </div>

        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img src={logoFleuret} alt="Fleuret AI" className="h-24" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {t('waitlist.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('waitlist.subtitle')}
            </p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t('waitlist.name')} *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t('waitlist.name')}
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('waitlist.email')} *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('waitlist.email')}
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{t('waitlist.company')}</Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder={t('waitlist.company')}
              value={formData.company}
              onChange={handleChange}
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">{t('waitlist.position')}</Label>
            <Input
              id="position"
              name="position"
              type="text"
              placeholder={t('waitlist.position')}
              value={formData.position}
              onChange={handleChange}
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('waitlist.message')}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('waitlist.message.placeholder')}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              maxLength={1000}
            />
          </div>

          <div className="flex justify-center py-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcbvgUsAAAAAKYtrU66E9oWip1lpQesL4HIwOe2"
              onChange={onCaptchaChange}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('waitlist.submitting') : t('waitlist.submit')}
          </Button>
        </form>
      </Card>
    </div>
    </div>
  );
};

export default Waitlist;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import logoFleuret from "@/assets/logo-fleuret.png";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const Waitlist = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const emailSchema = z.string().trim().email({ 
    message: language === 'fr' ? "Email invalide" : "Invalid email" 
  }).max(255, { 
    message: language === 'fr' ? "L'email doit faire moins de 255 caractères" : "Email must be less than 255 characters" 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      const validatedEmail = emailSchema.parse(email);

      console.log("Adding email to Brevo:", validatedEmail);

      const { data, error } = await supabase.functions.invoke('add-to-brevo', {
        body: { email: validatedEmail }
      });

      if (error) {
        console.error("Error adding to Brevo:", error);
        throw new Error("Failed to register");
      }

      console.log("Successfully added to Brevo:", data);
      toast.success(t('waitlist.success'));
      setEmail("");

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/30 to-white flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.08),transparent_60%)] pointer-events-none" />
      
      <div className="w-full max-w-xl relative z-10">
        <div className="mb-4">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('waitlist.back')}
            </Button>
          </Link>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg border">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img src={logoFleuret} alt="Fleuret AI" className="h-20" />
            </div>
            <h1 className="text-3xl font-bold mb-3">
              {t('waitlist.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('waitlist.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={t('waitlist.email.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              className="flex-1"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('waitlist.submitting')}
                </>
              ) : (
                t('waitlist.submit')
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;

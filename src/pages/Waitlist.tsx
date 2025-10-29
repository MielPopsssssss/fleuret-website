import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import logoFleuret from "@/assets/logo-fleuret.png";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }).max(100, { message: "Le nom doit faire moins de 100 caractères" }),
  email: z.string().trim().email({ message: "Email invalide" }).max(255, { message: "L'email doit faire moins de 255 caractères" }),
  company: z.string().trim().max(100, { message: "Le nom de l'entreprise doit faire moins de 100 caractères" }).optional(),
  message: z.string().trim().max(1000, { message: "Le message doit faire moins de 1000 caractères" }).optional()
});

const Waitlist = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate input
      const validatedData = waitlistSchema.parse(formData);

      // TODO: Add backend integration to save waitlist data
      // For now, just show success message
      console.log("Waitlist submission:", validatedData);

      toast.success("Inscription réussie !", {
        description: "Nous vous recontacterons très bientôt."
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsSubmitting(false);
    }
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
      
      <Card className="w-full max-w-2xl p-8 relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img src={logoFleuret} alt="Fleuret AI" className="h-24" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Rejoindre notre <span className="text-gradient">Waitlist</span>
          </h1>
          <p className="text-muted-foreground">
            Soyez parmi les premiers à découvrir nos pentests continus propulsés par l'IA
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="votre.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Entreprise</Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Nom de votre entreprise"
              value={formData.company}
              onChange={handleChange}
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Parlez-nous de vos besoins en cybersécurité..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              maxLength={1000}
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              size="lg"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "S'inscrire"}
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => navigate("/")}
              disabled={isSubmitting}
            >
              Retour
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Waitlist;

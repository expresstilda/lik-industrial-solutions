import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", contact: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-4xl font-bold">Контакты</h1>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Phone className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-lg">
                    <a href="tel:+74950000000" className="hover:text-primary">
                      +7 (495) 000-00-00
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">Отдел продаж и техподдержка</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Mail className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <a href="mailto:info@zavod-lik.ru" className="hover:text-primary">
                      info@zavod-lik.ru
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">Общие вопросы</p>
                  <p className="mt-3">
                    <a href="mailto:sales@zavod-lik.ru" className="hover:text-primary">
                      sales@zavod-lik.ru
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">Отдел продаж</p>
                  <p className="mt-3">
                    <a href="mailto:tech@zavod-lik.ru" className="hover:text-primary">
                      tech@zavod-lik.ru
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">Техническая поддержка</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Адрес склада</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Московская область</p>
                  <p className="mb-2">г. Подольск, ул. Промышленная, д. 15</p>
                  <p className="text-sm text-muted-foreground">Самовывоз по предварительному согласованию</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Пн-Пт: 9:00 - 18:00</p>
                  <p className="mb-2">Сб-Вс: выходной</p>
                  <p className="text-sm text-muted-foreground">
                    Заявки, оставленные в нерабочее время, обрабатываются в первый рабочий день
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Мессенджеры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">
                      WhatsApp
                    </Button>
                  </a>
                  <a href="https://t.me/zavodlik" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">
                      Telegram
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Короткий вопрос</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Телефон или Email *</Label>
                      <Input
                        id="contact"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="+7 (999) 123-45-67 или email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Опишите ваш вопрос"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Реквизиты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>ООО «Завод ЛИК»</p>
              <p>ИНН: 0000000000</p>
              <p>КПП: 000000000</p>
              <p>ОГРН: 0000000000000</p>
              <p>Юридический адрес: Московская область, г. Подольск, ул. Промышленная, д. 15</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

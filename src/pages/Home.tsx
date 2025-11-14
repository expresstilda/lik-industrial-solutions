import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    city: "",
    task: "",
    volume: "",
    contact: "call",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за заявку!",
      description: "Мы свяжемся с вами в течение рабочего дня.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      organization: "",
      city: "",
      task: "",
      volume: "",
      contact: "call",
      comment: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-industrial-dark to-industrial-darker py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl animate-fade-in">
              Промышленные покрытия и клеи от производителя
            </h1>
            <p className="mb-8 text-xl text-gray-200 animate-slide-up">
              Подбираем состав под вашу задачу, отправляем образцы на тест, быстро отгружаем по РФ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#price-form">
                <Button size="lg" className="h-12 px-8">
                  Запросить цену
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#consultation-form">
                <Button size="lg" variant="secondary" className="h-12 px-8">
                  Консультация технолога
                </Button>
              </a>
              <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-12 border-white bg-white/10 px-8 text-white hover:bg-white hover:text-industrial-dark">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Цена формируется от объёма и канала. Предложим альтернативы и расчёт расхода.
            </p>
          </div>
        </div>
      </section>

      {/* Самоидентификация */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Для кого мы работаем</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Строители и подрядчики</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Материалы для объектов любой сложности. Технологическая поддержка на стройке.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Промышленные цеха</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Защитные покрытия для оборудования, полов и металлоконструкций. Подбор под режим работы.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Дилеры и дистрибьюторы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Гибкие условия для партнёров. Дилерские цены, маркетинговая поддержка.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>OEM / частные марки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Контрактное производство под вашим брендом. Разработка рецептур, фасовка, документация.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Категории продукции</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link to="/category/stroitelnye-pokrytiya">
              <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary">Строительные покрытия</CardTitle>
                  <CardDescription>
                    ЛКМ для стен, полов, фасадов. Износостойкие эмали, грунты, специальные составы.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Смотреть продукты
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/category/klei">
              <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary">Клеи и материалы</CardTitle>
                  <CardDescription>
                    Клеи для напольных покрытий, труб, универсальные составы для различных материалов.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Смотреть продукты
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Мне нужно (интенты) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Мне нужно...</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/use-case/klei-pvh-trub">
              <Card className="group cursor-pointer transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary">Клей для ПВХ труб</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/use-case/kraska-otsinkovannoj-stali">
              <Card className="group cursor-pointer transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary">Краска для оцинковки</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/use-case/grunt-po-rzhavchine">
              <Card className="group cursor-pointer transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary">Грунт по ржавчине</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Гидроизоляция для фундамента</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Краска для бетонного пола</CardTitle>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Эмаль для металлоконструкций</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Почему мы</h2>
          <div className="mx-auto max-w-4xl space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold">Производство и лаборатория</h3>
                <p className="text-sm text-muted-foreground">
                  Собственное производство в РФ. Контроль качества на каждом этапе.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold">Подбор под задачу</h3>
                <p className="text-sm text-muted-foreground">
                  Технологи помогут выбрать оптимальное решение с учётом условий эксплуатации.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold">Образцы на тест</h3>
                <p className="text-sm text-muted-foreground">
                  Отправим пробные объёмы для проверки адгезии, покрытия и других характеристик.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold">Быстрая логистика по РФ</h3>
                <p className="text-sm text-muted-foreground">
                  Доставка транспортными компаниями, самовывоз со склада. Оперативная отгрузка.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold">Гибкая цена от объёма</h3>
                <p className="text-sm text-muted-foreground">
                  Индивидуальные условия для крупных заказов и постоянных клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс покупки */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Как мы работаем</h2>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-5">
              {[
                { step: "1", title: "Заявка", desc: "Оставьте заявку на сайте или свяжитесь удобным способом" },
                { step: "2", title: "Уточнение", desc: "Менеджер уточнит условия, объёмы и требования" },
                { step: "3", title: "Подбор", desc: "Технолог подберёт материал и рассчитает расход" },
                { step: "4", title: "Образцы", desc: "По запросу отправим пробную партию на тест" },
                { step: "5", title: "Отгрузка", desc: "Доставка по РФ и поддержка на всех этапах" },
              ].map((item) => (
                <Card key={item.step}>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Форма запроса цены */}
      <section id="price-form" className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Запросить цену</CardTitle>
                <CardDescription>
                  Заполните форму, и мы предложим оптимальное решение с расчётом стоимости
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
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
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization">Организация</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="city">Город</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="task">Что нужно / задача *</Label>
                    <Textarea
                      id="task"
                      required
                      rows={3}
                      value={formData.task}
                      onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                      placeholder="Опишите, что вам требуется: тип покрытия, материал основания, условия эксплуатации"
                    />
                  </div>

                  <div>
                    <Label htmlFor="volume">Ориентировочный объём / периодичность</Label>
                    <Input
                      id="volume"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      placeholder="Например: 500 кг разово / 200 кг ежемесячно"
                    />
                  </div>

                  <div>
                    <Label>Как с вами связаться? *</Label>
                    <RadioGroup value={formData.contact} onValueChange={(value) => setFormData({ ...formData, contact: value })}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="call" id="call" />
                        <Label htmlFor="call" className="font-normal">
                          <Phone className="mr-1 inline h-4 w-4" />
                          Позвонить
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp" />
                        <Label htmlFor="whatsapp" className="font-normal">
                          <MessageCircle className="mr-1 inline h-4 w-4" />
                          WhatsApp
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="telegram" id="telegram" />
                        <Label htmlFor="telegram" className="font-normal">
                          <Send className="mr-1 inline h-4 w-4" />
                          Telegram
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      rows={2}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Документы */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="mb-4 text-3xl font-bold">Документация и сертификаты</h2>
          <p className="mb-8 text-muted-foreground">
            Предоставляем полный пакет технической документации для каждого продукта
          </p>
          <Button size="lg">
            Запросить пакет документов
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

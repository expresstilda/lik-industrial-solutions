import { Scissors, FileText, Truck, CheckCircle2, Building2, Users, Settings, Package, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import workshopImg from "@/assets/sewing/workshop.jpg";
import equipmentImg1 from "@/assets/sewing/equipment-1.jpg";
import equipmentImg2 from "@/assets/sewing/equipment-2.jpg";
import equipmentImg3 from "@/assets/sewing/equipment-3.jpg";
import equipmentImg4 from "@/assets/sewing/equipment-4.jpg";
import equipmentImg5 from "@/assets/sewing/equipment-5.jpg";
import equipmentImg6 from "@/assets/sewing/equipment-6.jpg";
import teamImg from "@/assets/sewing/team.jpg";
import productsImg from "@/assets/sewing/products.jpg";

const equipmentImages = [
  { src: equipmentImg1, alt: "Швейное оборудование Jack" },
  { src: equipmentImg2, alt: "Промышленная швейная машина" },
  { src: equipmentImg3, alt: "Пуговичная машина Aurora" },
  { src: equipmentImg4, alt: "Петельная машина" },
  { src: equipmentImg5, alt: "Оверлок Jack" },
  { src: equipmentImg6, alt: "Машина-автомат с лазером" },
];

const Sewing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              Рязанская область
            </div>
            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">Швейное производство</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Предлагаем сотрудничество: полный цикл производства от раскроя до упаковки. 
              Взаимовыгодные условия на пошив различных изделий.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Рассчитать проект
              </Button>
              <Button size="lg" variant="outline">
                Заказать образец
              </Button>
              <a href="https://wa.me/79106102592" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Написать в WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          
          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-2 text-4xl font-bold text-primary">320</div>
                  <p className="text-sm text-muted-foreground">кв.м. площадь производства</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-2 text-4xl font-bold text-primary">35</div>
                  <p className="text-sm text-muted-foreground">сотрудников в команде</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-2 text-4xl font-bold text-primary">2000+</div>
                  <p className="text-sm text-muted-foreground">изделий в месяц</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-2 text-4xl font-bold text-primary">500+</div>
                  <p className="text-sm text-muted-foreground">минимальная партия</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Production Structure */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Структура производства</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">3 швейных цеха</h3>
                      <p className="text-sm text-muted-foreground">Оснащены современным оборудованием Jack, Aurora</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Scissors className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Раскройный цех</h3>
                      <p className="text-sm text-muted-foreground">Профессиональный раскрой любых материалов</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Сборочно-упаковочный цех</h3>
                      <p className="text-sm text-muted-foreground">Финальная сборка, контроль качества, упаковка</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Складское помещение</h3>
                      <p className="text-sm text-muted-foreground">Хранение материалов и готовой продукции</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={workshopImg} 
                  alt="Швейный цех производства" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Equipment Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Оборудование</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {equipmentImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-[4/3] overflow-hidden rounded-xl">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Jack & Aurora
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>• Одноигольные машины челночного стежка с электронным управлением</p>
                    <p>• Автоматические функции обрезки ниток, подъёма лапки, позиционера иглы</p>
                    <p>• Машины для лёгких, средних и тяжёлых тканей</p>
                    <p>• Автоматизированная закрепочная машина</p>
                    <p>• Электронная пуговичная машина с автоматической обрезкой нитей</p>
                    <p>• Петельная машина челночного стежка</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Оверлоки и распошивальные машины
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>• 3-х, 4-х и 5-ти ниточные оверлоки</p>
                    <p>• Оверлоки с рукавной платформой</p>
                    <p>• Универсальные 2-х игольные машины с функцией отключения одной иглы</p>
                    <p>• Промышленные распошивальные машины с верхним нитеукладчиком</p>
                    <p>• Машина-автомат для настрачивания деталей по контуру с лазером</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Коллектив</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      35 специалистов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        18 швей
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Закройщик и помощник закройщика
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Технолог и технолог-лаборант
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Отдел технического контроля (ОТК)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Программист автоматизированного швейного оборудования
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Сборщики и упаковщики
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={teamImg} 
                  alt="Коллектив швейного производства" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Что мы шьём</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={productsImg} 
                  alt="Примеры готовой продукции" 
                  className="h-full w-full object-cover"
                />
              </div>
              <Card>
                <CardHeader>
                  <Scissors className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl">Ассортимент изделий</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-2 font-semibold">Женская одежда</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Пальто и полупальто</li>
                        <li>• Жакеты и пиджаки</li>
                        <li>• Юбки всех фасонов</li>
                        <li>• Брюки и шорты</li>
                        <li>• Блузы и рубашки</li>
                        <li>• Платья</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Изделия из трикотажа</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Худи и толстовки</li>
                        <li>• Свитшоты</li>
                        <li>• Футболки и поло</li>
                        <li>• Лонгсливы</li>
                        <li>• Спортивные костюмы</li>
                        <li>• Домашняя одежда</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Terms Section */}
          <section className="mb-16">
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-2xl">Условия сотрудничества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm">Пошив изделий партиями <strong>от 500 единиц</strong></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm">Полный цикл: раскрой, пошив, упаковка, маркировка</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm">Возможен только пошив изделий</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm">Работаем на <strong>давальческом сырье</strong></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm">Цены и сроки обсуждаются индивидуально</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm">Наличная и безналичная оплата, <strong>с НДС и без НДС</strong></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How We Work */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Как мы работаем</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Согласование модели",
                  desc: "Обсуждаем фасон, детали, материалы. Работаем по вашему эскизу или предлагаем варианты.",
                },
                {
                  step: "2",
                  title: "Конструирование лекал",
                  desc: "Разрабатываем базовые лекала. Вносим корректировки после примерки.",
                },
                {
                  step: "3",
                  title: "Образец-эталон",
                  desc: "Шьём первый образец для проверки посадки, пропорций, качества сборки.",
                },
                {
                  step: "4",
                  title: "Примерка и корректировки",
                  desc: "До 3 итераций примерок и доработок лекал без дополнительной оплаты.",
                },
                {
                  step: "5",
                  title: "Градация",
                  desc: "Размножаем лекала на размерную сетку. Составляем техническую документацию.",
                },
                {
                  step: "6",
                  title: "Производство",
                  desc: "Пошив на нашем производстве. Объёмы от 500 единиц.",
                },
                {
                  step: "7",
                  title: "Контроль качества",
                  desc: "ОТК проверяет каждое изделие перед упаковкой.",
                },
                {
                  step: "8",
                  title: "Маркировка и упаковка",
                  desc: "Маркировка «Честный знак», упаковка в пакеты и короба.",
                },
              ].map((item) => (
                <Card key={item.step}>
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional Features */}
          <section className="mb-16">
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-2xl">Дополнительные возможности</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 font-medium">Собственная марка и аутсорс</p>
                    <p className="text-sm text-muted-foreground">
                      Разрабатываем коллекции для собственной марки или на аутсорсе. Полный цикл от идеи до готового изделия.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 font-medium">Техническая документация</p>
                    <p className="text-sm text-muted-foreground">
                      Техрисунок, техописание, последовательность операций, раскладка, промеры для ОТК.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 font-medium">Работа с маркетплейсами</p>
                    <p className="text-sm text-muted-foreground">
                      Опыт подготовки продукции для Wildberries, Ozon. Маркировка и упаковка по требованиям площадок.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 font-medium">Спецзаказы</p>
                    <p className="text-sm text-muted-foreground">
                      Корпоративная одежда, униформа, спецодежда. Брендирование, нанесение логотипов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Рассчитать проект</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Опишите модель, предполагаемый тираж, материалы, сроки — и мы предложим варианты и стоимость.
                  </p>
                  <Button className="w-full">
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Контактное лицо</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium">Людмила Александровна Устенко</p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+79106102592" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Phone className="h-4 w-4" />
                      +7 (910) 610-25-92
                    </a>
                    <a href="mailto:galperinalyudmila@yandex.ru" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <Mail className="h-4 w-4" />
                      galperinalyudmila@yandex.ru
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+79106102592" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Позвонить
                      </Button>
                    </a>
                    <a href="https://wa.me/79106102592" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full">
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sewing;

import { Scissors, FileText, Truck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sewing = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold">Пошив женской одежды и изделий из трикотажа под заказ</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              От лекал до массового пошива. Эталон, градация, техническая документация.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Рассчитать проект
              </Button>
              <Button size="lg" variant="outline">
                Заказать образец
              </Button>
              <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Написать в WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <Scissors className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">Что мы шьём</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
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

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Как мы работаем</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Согласование модели",
                  desc: "Обсуждаем фасон, детали, материалы. Можем работать по вашему эскизу или предложить варианты.",
                },
                {
                  step: "2",
                  title: "Конструирование лекал",
                  desc: "Разрабатываем базовые лекала на основной размер. При необходимости вносим корректировки после примерки.",
                },
                {
                  step: "3",
                  title: "Образец-эталон",
                  desc: "Шьём первый образец для проверки посадки, пропорций, качества сборки.",
                },
                {
                  step: "4",
                  title: "Примерка и корректировки",
                  desc: "До 3 итераций примерок и доработок лекал без дополнительной оплаты за сами лекала (оплачивается только повторный отшив макетов при необходимости).",
                },
                {
                  step: "5",
                  title: "Градация и техническая документация",
                  desc: "Размножаем лекала на размерную сетку. Составляем техрисунок, техописание, последовательность операций, раскладку, промеры для ОТК.",
                },
                {
                  step: "6",
                  title: "Производство",
                  desc: "Пошив у себя или на партнёрских мощностях (преимущественно трикотаж). Объёмы от 50 единиц.",
                },
                {
                  step: "7",
                  title: "Закупка материалов (опционально)",
                  desc: "По договорённости помогаем с закупкой тканей, фурнитуры, этикеток.",
                },
                {
                  step: "8",
                  title: "Маркировка и упаковка",
                  desc: "Маркировка «Честный знак» — по проекту. Упаковка в индивидуальные пакеты, короба для отправки.",
                },
              ].map((item) => (
                <Card key={item.step}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
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

          <Card className="mb-12 bg-muted">
            <CardHeader>
              <CardTitle className="text-2xl">Дополнительные возможности</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Собственная марка и аутсорс</p>
                  <p className="text-sm text-muted-foreground">
                    Разрабатываем коллекции для собственной марки или на аутсорсе для заказчиков. Полный цикл
                    от идеи до готового изделия.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Размещение и контроль</p>
                  <p className="text-sm text-muted-foreground">
                    Помогаем с размещением заказа на партнёрских производствах, контролируем качество на всех
                    этапах.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Работа с маркетплейсами</p>
                  <p className="text-sm text-muted-foreground">
                    Опыт подготовки продукции для продаж на Wildberries, Ozon. Маркировка, упаковка по
                    требованиям площадок.
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
                <CardTitle>Вопрос технологу</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Нужна консультация по материалам, конструкции, технологии? Свяжитесь с нами удобным способом.
                </p>
                <div className="flex gap-2">
                  <a href="tel:+74950000000" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Позвонить
                    </Button>
                  </a>
                  <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sewing;

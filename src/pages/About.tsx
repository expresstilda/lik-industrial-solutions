import { Building2, FlaskConical, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">О компании</h1>
          
          <div className="prose prose-lg mb-12 max-w-none">
            <p className="text-lg text-muted-foreground">
              Завод ЛИК — российский производитель лакокрасочных материалов и клеёв для строительства и
              промышленности. Более 15 лет разрабатываем и выпускаем составы, которые работают в реальных
              условиях: от суровых морозов до агрессивных сред.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Building2 className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Собственное производство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Современное оборудование и технологии позволяют выпускать продукцию стабильного качества.
                  Полный цикл от сырья до готовой тары под вашим брендом.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FlaskConical className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Лаборатория и разработка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Собственная лаборатория контроля качества. Разрабатываем рецептуры под специфические
                  задачи: особые температуры, химстойкость, ускоренное отверждение.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Truck className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Логистика по РФ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Работаем со всеми крупными транспортными компаниями. Отгрузка в течение 1-3 дней после
                  согласования заказа. Самовывоз со склада в Московской области.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Клиентский сервис</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Технологическая поддержка на всех этапах: от подбора материала до рекомендаций по
                  нанесению. Оперативная обратная связь, помощь в расчёте расхода и объёмов.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 bg-muted">
            <CardHeader>
              <CardTitle className="text-2xl">География работы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Отгружаем продукцию во все регионы России. Основные направления: Москва и Московская
                область, Санкт-Петербург, Урал, Сибирь, Дальний Восток. Работаем с крупными строительными
                компаниями, производственными предприятиями, дилерами и дистрибьюторами.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Контакты для B2B</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-1 text-sm font-medium">Отдел продаж</p>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+74950000000" className="hover:text-foreground">+7 (495) 000-00-00</a>
                  <br />
                  <a href="mailto:sales@zavod-lik.ru" className="hover:text-foreground">sales@zavod-lik.ru</a>
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium">Техническая поддержка</p>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:tech@zavod-lik.ru" className="hover:text-foreground">tech@zavod-lik.ru</a>
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium">Адрес склада</p>
                <p className="text-sm text-muted-foreground">
                  Московская область, г. Подольск, ул. Промышленная, д. 15
                </p>
              </div>
              <div className="pt-4">
                <Button size="lg">
                  Запросить презентацию и документы
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;

import { CheckCircle2, Shield, FileCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OEM = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">Контрактное производство (OEM / Private Label)</h1>
          
          <div className="prose prose-lg mb-12 max-w-none">
            <p className="text-lg text-muted-foreground">
              Производим ЛКМ и клеи под вашим брендом без необходимости инвестировать в собственное
              производство. От разработки рецептуры до отгрузки готовой продукции с вашей этикеткой.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Для кого это решение</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Бренды и торговые марки</p>
                    <p className="text-sm text-muted-foreground">
                      Хотите иметь собственный ассортимент ЛКМ без затрат на производственную базу
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Дистрибьюторы и дилеры</p>
                    <p className="text-sm text-muted-foreground">
                      Нужна частная марка для укрепления позиций на рынке и повышения маржинальности
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Строительные и торговые сети</p>
                    <p className="text-sm text-muted-foreground">
                      Хотите предложить покупателям продукцию под собственным брендом
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Производственные компании</p>
                    <p className="text-sm text-muted-foreground">
                      Требуется специализированный продукт под конкретные технологические процессы
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Этапы работы</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Бриф и техническое задание",
                  desc: "Обсуждаем требования к продукту: назначение, характеристики, объёмы, фасовку, упаковку, сроки.",
                },
                {
                  step: "2",
                  title: "Подбор или разработка рецептуры",
                  desc: "Используем готовые проверенные составы или разрабатываем новые под ваши требования.",
                },
                {
                  step: "3",
                  title: "Образцы и тестирование",
                  desc: "Отправляем пробные партии для проверки характеристик в ваших условиях.",
                },
                {
                  step: "4",
                  title: "Согласование ТДС и этикетки",
                  desc: "Подготовка технической документации, паспортов безопасности, дизайн и печать этикеток.",
                },
                {
                  step: "5",
                  title: "Пилотная партия",
                  desc: "Производство тестового тиража для проверки всех процессов и качества упаковки.",
                },
                {
                  step: "6",
                  title: "Регулярные поставки",
                  desc: "Планирование производства и отгрузок. Хранение на нашем складе, доставка по графику.",
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

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Что мы предлагаем</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Разработка рецептур</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Адаптируем состав под ваши технические требования: особые температуры, химстойкость,
                    ускоренное отверждение, цветовые решения.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Тарировка и упаковка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Фасовка в любую тару: от 1 кг до 200 л. Работаем с вашей тарой или подбираем оптимальную.
                    Упаковка в картон, термоусадку, паллетирование.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Печать этикеток</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Дизайн и изготовление этикеток с вашим брендом. Соответствие ГОСТ и техническим регламентам.
                    Печать штрих-кодов, QR-кодов.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Документация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Подготовка ТДС, паспортов безопасности, сертификатов соответствия. Сопровождение
                    сертификации при необходимости.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Хранение и логистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Храним готовую продукцию на нашем складе. Отгрузка по вашему графику: регулярные поставки
                    или по заявкам.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Гибкие объёмы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Начинаем с небольших партий для тестирования рынка. Масштабируем производство по мере
                    роста спроса.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-12 bg-muted">
            <CardHeader>
              <CardTitle className="text-2xl">Качество и конфиденциальность</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Контроль качества</p>
                  <p className="text-sm text-muted-foreground">
                    Входной контроль сырья, испытания каждой партии перед отгрузкой. Сохранение образцов для
                    ретроспективного анализа.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Документация и прослеживаемость</p>
                  <p className="text-sm text-muted-foreground">
                    Ведём полную документацию по каждой партии: номер, дата, состав, результаты испытаний.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium">Конфиденциальность</p>
                  <p className="text-sm text-muted-foreground">
                    Подписываем NDA. Ваши рецептуры и бизнес-информация защищены. Не раскрываем факт
                    сотрудничества третьим лицам.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Обсудить контрактное производство</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами для обсуждения деталей проекта, объёмов и условий
                сотрудничества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  Оставить заявку
                </Button>
                <a href="tel:+74950000000">
                  <Button size="lg" variant="outline">
                    Позвонить
                  </Button>
                </a>
                <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OEM;

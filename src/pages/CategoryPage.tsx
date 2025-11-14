import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "likstrong-um-7",
    name: "Клей акриловый ЛИКстронг УМ-7",
    slug: "likstrong-um-7",
    description: "Акриловый клей на водной основе для гибких напольных покрытий",
    features: ["Без растворителей", "Морозостойкий", "Высокая прочность"],
    consumption: "300-400 г/м²",
  },
  {
    id: "emal-pf-115",
    name: "Эмаль ПФ-115",
    slug: "emal-pf-115",
    description: "Универсальная алкидная эмаль для наружных и внутренних работ",
    features: ["Атмосферостойкая", "Глянцевое покрытие", "Широкая цветовая гамма"],
    consumption: "100-180 г/м²",
  },
  {
    id: "grunt-gf-021",
    name: "Грунт ГФ-021",
    slug: "grunt-gf-021",
    description: "Антикоррозионный грунт для металлических поверхностей",
    features: ["Защита от коррозии", "Отличная адгезия", "Быстрое высыхание"],
    consumption: "60-100 г/м²",
  },
  {
    id: "kraska-akrilovaya-fasad",
    name: "Краска акриловая фасадная",
    slug: "kraska-akrilovaya-fasad",
    description: "Водно-дисперсионная краска для наружных работ",
    features: ["Атмосферостойкая", "Паропроницаемая", "Стойкость к УФ"],
    consumption: "150-200 г/м²",
  },
  {
    id: "emal-ep-773",
    name: "Эмаль ЭП-773",
    slug: "emal-ep-773",
    description: "Эпоксидная эмаль для защиты металла и бетона",
    features: ["Химстойкая", "Износостойкая", "Двухкомпонентная"],
    consumption: "150-250 г/м²",
  },
  {
    id: "kraska-dlya-polov",
    name: "Краска для бетонных полов",
    slug: "kraska-dlya-polov",
    description: "Износостойкое покрытие для промышленных полов",
    features: ["Высокая износостойкость", "Стойкость к нагрузкам", "Быстрое отверждение"],
    consumption: "200-300 г/м²",
  },
];

const CategoryPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">Строительные покрытия</h1>
          <p className="text-lg text-muted-foreground">
            ЛКМ для защиты и декорирования стен, полов, фасадов и металлоконструкций. Износостойкие эмали,
            грунты и специальные составы для различных поверхностей и условий эксплуатации.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <Badge variant="secondary" className="cursor-pointer">Все продукты</Badge>
          <Badge variant="outline" className="cursor-pointer">Для металла</Badge>
          <Badge variant="outline" className="cursor-pointer">Для бетона</Badge>
          <Badge variant="outline" className="cursor-pointer">Для дерева</Badge>
          <Badge variant="outline" className="cursor-pointer">Фасадные</Badge>
          <Badge variant="outline" className="cursor-pointer">Для полов</Badge>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="group transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium">Преимущества:</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-sm text-muted-foreground">Расход: {product.consumption}</span>
                </div>
                <div className="flex gap-2">
                  <Link to={`/product/${product.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </Link>
                  <Link to="/#price-form" className="flex-1">
                    <Button className="w-full">
                      Запросить цену
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12 bg-muted">
          <CardHeader>
            <CardTitle>Нужна консультация?</CardTitle>
            <CardDescription>
              Поможем подобрать оптимальное решение под ваши условия и задачи
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+74950000000">
                <Button>
                  Позвонить
                </Button>
              </a>
              <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  WhatsApp
                </Button>
              </a>
              <a href="/#price-form">
                <Button variant="outline">
                  Оставить заявку
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как подготовить основание перед нанесением?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Основание должно быть чистым, сухим, обезжиренным. Удалите старые непрочные покрытия,
                  ржавчину, пыль. Для улучшения адгезии рекомендуется использовать грунтовки.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли наносить при низких температурах?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Большинство составов наносятся при температуре не ниже +5°C. Для работы в холодных условиях
                  есть специальные зимние модификации. Уточняйте у технолога.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Какой расход материала на мой объект?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Расход зависит от типа поверхности, способа нанесения и количества слоёв. Наши технологи
                  помогут рассчитать точный расход под ваши условия.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg">
            Запросить пакет документов по категории
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

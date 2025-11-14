import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = {
  "klei-pvh-trub": {
    title: "Клей для ПВХ труб",
    problem: "При монтаже систем водоснабжения и канализации из ПВХ требуется надёжное соединение труб и фитингов. Клей должен обеспечивать герметичность, выдерживать давление, быть химически стойким к транспортируемым средам.",
    products: [
      {
        name: "Клей ПВХ быстротвердеющий",
        when: "Для холодной сварки труб диаметром до 160 мм. Оптимален для монтажа водопроводных систем.",
        features: ["Схватывание 2-3 мин", "Рабочее давление до 16 бар", "Температура эксплуатации до +60°C"],
      },
      {
        name: "Клей ПВХ усиленный",
        when: "Для промышленных систем, крупных диаметров. Повышенная химстойкость к агрессивным средам.",
        features: ["Схватывание 5-7 мин", "Давление до 25 бар", "Стойкость к кислотам/щелочам"],
      },
    ],
    case: {
      task: "Монтаж системы холодного водоснабжения жилого комплекса, 600 соединений ПВХ труб диаметром 50–110 мм",
      solution: "Использован клей ПВХ быстротвердеющий. Обезжирили поверхности, нанесли клей равномерно, собрали за 2 минуты.",
      result: "Система введена в эксплуатацию через 24 часа. Испытания показали герметичность всех соединений при давлении 12 бар.",
    },
  },
  "kraska-otsinkovannoj-stali": {
    title: "Краска для оцинкованной стали",
    problem: "Оцинкованные поверхности (кровля, фасадные элементы, металлоконструкции) требуют специальных красок с отличной адгезией к цинковому покрытию, стойкостью к УФ, осадкам и температурным перепадам.",
    products: [
      {
        name: "Эмаль по оцинковке атмосферостойкая",
        when: "Для наружных работ: кровля, водостоки, фасадные элементы. Однокомпонентная, удобна в применении.",
        features: ["Адгезия к цинку без грунта", "УФ-стойкость", "Эксплуатация −50…+80°C"],
      },
      {
        name: "Эпоксидная эмаль для металла",
        when: "Для промышленных объектов с повышенными требованиями к химстойкости и износостойкости.",
        features: ["Двухкомпонентная", "Химстойкость", "Срок службы до 15 лет"],
      },
    ],
    case: {
      task: "Окраска оцинкованной кровли производственного цеха площадью 2000 м²",
      solution: "Применили эмаль по оцинковке атмосферостойкую. Обезжирили поверхность, нанесли два слоя с межслойной сушкой 4 часа.",
      result: "Покрытие служит 5+ лет без потери блеска и защитных свойств, выдерживает морозы до −40°C и жару до +50°C.",
    },
  },
  "grunt-po-rzhavchine": {
    title: "Грунт по ржавчине",
    problem: "Металлические конструкции, эксплуатируемые на открытом воздухе или в условиях высокой влажности, подвержены коррозии. Требуется грунтовка, преобразующая ржавчину и обеспечивающая надёжную защиту без полной зачистки до металла.",
    products: [
      {
        name: "Грунт-преобразователь ржавчины",
        when: "Для быстрой подготовки слабоочищенных поверхностей с остатками ржавчины. Идеален для ремонтных работ.",
        features: ["Преобразует ржавчину в защитный слой", "Без пескоструйной обработки", "Быстрое высыхание 2 ч"],
      },
      {
        name: "Грунт ГФ-021 антикоррозионный",
        when: "Для металла, очищенного от рыхлой ржавчины. Универсальный грунт под алкидные эмали.",
        features: ["Отличная адгезия", "Защита от коррозии", "Совместим с большинством эмалей"],
      },
    ],
    case: {
      task: "Ремонтная окраска металлического ограждения периметра 500 м с локальными очагами ржавчины",
      solution: "Очистили рыхлую ржавчину щёткой, нанесли грунт-преобразователь ржавчины в один слой, через 4 часа покрыли эмалью ПФ-115.",
      result: "Покрытие держится 3+ года без шелушения и новых очагов коррозии, даже в местах, где была ржавчина.",
    },
  },
};

const UseCasePage = () => {
  const { slug } = useParams();
  const useCase = useCases[slug as keyof typeof useCases];

  if (!useCase) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">Страница не найдена</h1>
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">{useCase.title}</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Задача и требования</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{useCase.problem}</p>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold">Подбор решения</h2>
            <div className="space-y-4">
              {useCase.products.map((product, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.when}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mb-8 bg-muted">
            <CardHeader>
              <CardTitle>Практический кейс</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Задача</h3>
                <p className="text-sm text-muted-foreground">{useCase.case.task}</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Решение</h3>
                <p className="text-sm text-muted-foreground">{useCase.case.solution}</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Результат</h3>
                <p className="text-sm text-muted-foreground">{useCase.case.result}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Подобрать состав под вашу задачу</CardTitle>
              <CardDescription>
                Опишите свои требования, и наш технолог предложит оптимальное решение
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <a href="/#price-form">
                  <Button size="lg">
                    Оставить заявку
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
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

export default UseCasePage;

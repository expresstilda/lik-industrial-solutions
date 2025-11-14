import { useState } from "react";
import { CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import categoryBuilding from "@/assets/category-building.png";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [categoryBuilding, categoryBuilding, categoryBuilding];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Галерея изображений */}
            <div className="mb-6">
              <div className="mb-4 overflow-hidden rounded-lg bg-muted">
                <img
                  src={productImages[selectedImage]}
                  alt="Клей акриловый ЛИКстронг УМ-7"
                  className="h-[400px] w-full object-contain p-8"
                />
              </div>
              <div className="flex gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Превью ${index + 1}`}
                      className="h-20 w-20 object-contain bg-muted p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h1 className="mb-4 text-4xl font-bold">Клей акриловый «ЛИКстронг УМ-7»</h1>
              <p className="text-lg text-muted-foreground">
                Акриловый клей на водной основе для гибких напольных покрытий (ПВХ-линолеум, ковролин).
                Морозостойкий, без летучих растворителей, высокая прочность на сдвиг и отслаивание.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="application">Применение</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Преимущества</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">Без летучих растворителей</p>
                        <p className="text-sm text-muted-foreground">
                          Пожаро- и взрывобезопасен, подходит для работы в закрытых помещениях
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">Низкое водосодержание</p>
                        <p className="text-sm text-muted-foreground">
                          Отсутствие усадки после отверждения, стабильные размеры покрытия
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">Высокая прочность</p>
                        <p className="text-sm text-muted-foreground">
                          Отличная адгезия к основанию, прочность на сдвиг и отслаивание
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">Удобное нанесение</p>
                        <p className="text-sm text-muted-foreground">
                          Равномерно распределяется зубчатым шпателем, подходит для впитывающих оснований
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">Морозостойкий при хранении</p>
                        <p className="text-sm text-muted-foreground">
                          Допускает до 5 циклов заморозки до −40°C с последующим оттаиванием
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Области применения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>ПВХ-линолеум на вспененной, тканевой и войлочной основе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Ковровые покрытия различных типов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Другие гибкие напольные покрытия</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Работы по впитывающим основаниям (бетон, цементная стяжка, фанера)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs">
                <Card>
                  <CardHeader>
                    <CardTitle>Технические характеристики</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Расход</TableCell>
                          <TableCell>300–400 г/м²</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Сухой остаток</TableCell>
                          <TableCell>≥70%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Плотность</TableCell>
                          <TableCell>≥1,5 кг/л</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Разбавитель</TableCell>
                          <TableCell>Вода</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Схватывание</TableCell>
                          <TableCell>~30 минут</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Набор прочности</TableCell>
                          <TableCell>~24 часа</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Цвет</TableCell>
                          <TableCell>Белый</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Фасовка</TableCell>
                          <TableCell>30 кг</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Срок годности</TableCell>
                          <TableCell>12 месяцев (в заводской невскрытой таре)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Температура хранения</TableCell>
                          <TableCell>Не ниже +5°C</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Морозостойкость</TableCell>
                          <TableCell>До 5 циклов заморозки до −40°C</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Условия хранения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm">
                      Хранить в плотно закрытой заводской таре при температуре не ниже +5°C в сухом помещении,
                      защищённом от прямых солнечных лучей.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Клей допускает до 5 циклов заморозки до температуры −40°C с последующим оттаиванием при
                      комнатной температуре. После размораживания тщательно перемешать. Не допускать
                      многократных циклов замораживания-оттаивания.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="application" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Подготовка основания</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm">
                      Основание должно быть ровным, сухим, впитывающим, очищенным от пыли, грязи, масел и других
                      загрязнений. Неровности более 2 мм необходимо выровнять.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Температура основания и окружающего воздуха должна быть не ниже +15°C, относительная
                      влажность воздуха не более 80%.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Нанесение</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="mb-2 font-medium">1. Подготовка клея</p>
                      <p className="text-sm text-muted-foreground">
                        Перемешать клей перед применением. При необходимости можно разбавить водой (не более 5%).
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">2. Нанесение на основание</p>
                      <p className="text-sm text-muted-foreground">
                        Равномерно нанести клей на основание зубчатым шпателем:
                        <br />• Для линолеума: шпатель A2 или A3
                        <br />• Для ковролина: шпатель B1 или B2
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">3. Укладка покрытия</p>
                      <p className="text-sm text-muted-foreground">
                        Через 10–15 минут после нанесения клея уложить покрытие. Прикатать валиком или щёткой от
                        центра к краям для удаления воздуха и обеспечения плотного контакта с основанием.
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">4. Сварка швов</p>
                      <p className="text-sm text-muted-foreground">
                        Сварку стыков производить не ранее чем через 48 часов после укладки.
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">5. Очистка инструментов</p>
                      <p className="text-sm text-muted-foreground">
                        Инструменты отмыть водой сразу после использования. Засохший клей удаляется механически.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Охрана труда и экология</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="mb-2 font-medium">Меры предосторожности</p>
                      <p className="text-sm text-muted-foreground">
                        При работе обеспечить проветривание помещения. Использовать перчатки. Избегать попадания в
                        глаза и на кожу. При попадании в глаза промыть большим количеством воды и обратиться к
                        врачу.
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">Утилизация</p>
                      <p className="text-sm text-muted-foreground">
                        Пустую тару утилизировать как бытовые отходы. Остатки клея не сливать в канализацию и
                        водоёмы. Собрать и утилизировать в соответствии с местными требованиями.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 font-medium">Сколько времени сохнет клей?</p>
                  <p className="text-sm text-muted-foreground">
                    Схватывание происходит примерно через 30 минут, полный набор прочности — около 24 часов.
                    Сварку швов можно проводить не ранее чем через 48 часов.
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-medium">На какие основания можно клеить?</p>
                  <p className="text-sm text-muted-foreground">
                    Клей подходит для впитывающих оснований: бетонная стяжка, цементное основание, фанера.
                    Основание должно быть ровным, чистым и сухим.
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-medium">Что делать, если клей замёрз при хранении?</p>
                  <p className="text-sm text-muted-foreground">
                    Клей допускает до 5 циклов заморозки. Разморозить при комнатной температуре, тщательно
                    перемешать перед использованием. Избегать повторных циклов замораживания.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Заказать продукт</CardTitle>
                  <CardDescription>Запросите цену или закажите образец для тестирования</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="/#price-form">
                    <Button className="w-full" size="lg">
                      Запросить цену
                    </Button>
                  </a>
                  <Button variant="outline" className="w-full" size="lg">
                    Запросить образец
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Консультация технолога
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Документация</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Технический паспорт
                  </Button>
                  <Button variant="outline" className="mt-2 w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Паспорт безопасности
                  </Button>
                  <Button variant="outline" className="mt-2 w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Сертификаты
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Быстрые контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="tel:+74950000000">
                    <Button variant="outline" className="w-full justify-start">
                      Позвонить
                    </Button>
                  </a>
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

              <Card>
                <CardHeader>
                  <CardTitle>Похожие продукты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="cursor-pointer rounded-lg border p-3 transition-colors hover:bg-muted">
                    <p className="font-medium">Клей ПВХ для труб</p>
                    <p className="text-xs text-muted-foreground">Для холодной сварки труб</p>
                  </div>
                  <div className="cursor-pointer rounded-lg border p-3 transition-colors hover:bg-muted">
                    <p className="font-medium">Клей универсальный</p>
                    <p className="text-xs text-muted-foreground">Для различных материалов</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

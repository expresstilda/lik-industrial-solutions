import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
              <span className="text-lg font-bold text-primary-foreground">ЛИК</span>
            </div>
            <span className="hidden font-semibold text-foreground sm:block">Завод ЛИК</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/category/stroitelnye-pokrytiya"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Строительные покрытия</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            ЛКМ для стен, полов, фасадов
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/category/klei"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Клеи и материалы</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Для напольных покрытий, труб, универсальные
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>По применению</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/use-case/klei-pvh-trub"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Клей для ПВХ труб</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/use-case/kraska-otsinkovannoj-stali"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Краска для оцинковки</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/use-case/grunt-po-rzhavchine"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Грунт по ржавчине</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/o-kompanii" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  О компании
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/oem" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Контрактное производство
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/shveynoe-proizvodstvo" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Швейное производство
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contacts" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <a href="tel:+74950000000" className="hidden lg:block">
              <Button variant="ghost" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                +7 (495) 000-00-00
              </Button>
            </a>
            <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://t.me/zavodlik" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold">Завод ЛИК</h3>
              <p className="text-sm text-muted-foreground">
                Производитель промышленных покрытий и клеёв
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Каталог</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/category/stroitelnye-pokrytiya" className="text-muted-foreground hover:text-foreground">
                    Строительные покрытия
                  </Link>
                </li>
                <li>
                  <Link to="/category/klei" className="text-muted-foreground hover:text-foreground">
                    Клеи и материалы
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Компания</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/o-kompanii" className="text-muted-foreground hover:text-foreground">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link to="/oem" className="text-muted-foreground hover:text-foreground">
                    Контрактное производство
                  </Link>
                </li>
                <li>
                  <Link to="/shveynoe-proizvodstvo" className="text-muted-foreground hover:text-foreground">
                    Швейное производство
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+74950000000" className="hover:text-foreground">
                    +7 (495) 000-00-00
                  </a>
                </li>
                <li>
                  <a href="mailto:info@zavod-lik.ru" className="hover:text-foreground">
                    info@zavod-lik.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Завод ЛИК. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
          <Button size="icon" className="h-14 w-14 rounded-full shadow-lg">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </a>
        <a href="https://t.me/zavodlik" target="_blank" rel="noopener noreferrer">
          <Button size="icon" className="h-14 w-14 rounded-full shadow-lg">
            <Send className="h-6 w-6" />
          </Button>
        </a>
      </div>
    </div>
  );
};

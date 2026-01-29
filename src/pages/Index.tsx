import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [price, setPrice] = useState(1.0845);
  const [priceHistory, setPriceHistory] = useState<number[]>([1.0845]);
  const [isUp, setIsUp] = useState(true);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prev) => {
        const change = (Math.random() - 0.48) * 0.002;
        const newPrice = +(prev + change).toFixed(4);
        setIsUp(change > 0);
        setPriceHistory((history) => [...history.slice(-50), newPrice]);
        return newPrice;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: "UserPlus",
      title: "Регистрация",
      desc: "Создайте бесплатный аккаунт за 30 секунд",
    },
    {
      icon: "Wallet",
      title: "Пополнение счета",
      desc: "Внесите от $10 любым удобным способом",
    },
    {
      icon: "BookOpen",
      title: "Обучение",
      desc: "Пройдите бесплатные курсы трейдинга",
    },
    {
      icon: "TrendingUp",
      title: "Торговля",
      desc: "Начните зарабатывать на бинарных опционах",
    },
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Лицензия IFMRRC",
      desc: "Регулируемый брокер с международной лицензией",
    },
    {
      icon: "Zap",
      title: "Быстрый вывод",
      desc: "Вывод средств за 24 часа без задержек",
    },
    {
      icon: "Award",
      title: "Бонусы до 100%",
      desc: "Щедрые бонусы на первый депозит",
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      desc: "Торгуйте в любом месте с iOS/Android",
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 24/7",
      desc: "Русскоязычная поддержка круглосуточно",
    },
    {
      icon: "BarChart3",
      title: "До 98% прибыли",
      desc: "Высокая доходность на валютных парах",
    },
  ];

  const methods = [
    { name: "Visa/Mastercard", time: "Моментально", icon: "CreditCard" },
    { name: "Криптовалюта", time: "10-30 минут", icon: "Bitcoin" },
    { name: "Электронные кошельки", time: "До 1 часа", icon: "Wallet" },
    { name: "Банковский перевод", time: "1-3 дня", icon: "Building2" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] via-[#0F1419] to-[#0A0E1A]">
      <header className="fixed top-0 w-full z-50 bg-[#0A0E1A]/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pocket Option
            </span>
          </div>
          <Button asChild className="bg-gradient-to-r from-primary to-secondary text-black font-semibold hover:scale-105 transition-transform">
            <a href="https://u3.shortink.io/register?utm_campaign=27933&utm_source=affiliate&utm_medium=sr&a=ExMs4i5QVqus6Z&ac=pock" target="_blank" rel="noopener noreferrer">
              Войти
            </a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative z-10 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pocket Option -
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                торгуйте бинарными опционами с прибылью до 98%
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pocket Option — международный брокер с лицензией IFMRRC. Быстрый
              старт, низкий порог входа, вывод за 24 часа
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-black font-bold text-lg px-8 py-6 hover:scale-105 transition-transform animate-pulse-glow"
              >
                <a href="https://u3.shortink.io/register?utm_campaign=27933&utm_source=affiliate&utm_medium=sr&a=ExMs4i5QVqus6Z&ac=pock" target="_blank" rel="noopener noreferrer">
                  Начать торговать
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
              >
                <a href="https://u3.shortink.io/register?utm_campaign=27933&utm_source=affiliate&utm_medium=sr&a=ExMs4i5QVqus6Z&ac=pock" target="_blank" rel="noopener noreferrer">
                  Демо-счет
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-16 flex justify-center gap-12 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5M+</div>
              <div className="text-muted-foreground">Активных трейдеров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">
                $120M+
              </div>
              <div className="text-muted-foreground">Выплачено трейдерам</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-muted-foreground">Макс. прибыль</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Как стать <span className="text-primary">трейдером</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card/50 backdrop-blur border-white/10 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    name={step.icon as any}
                    className="text-black"
                    size={28}
                  />
                </div>
                <div className="text-sm text-secondary font-semibold mb-2">
                  Шаг {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают{" "}
            <span className="text-secondary">Pocket Option</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card/50 backdrop-blur border-white/10 hover:border-secondary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={benefit.icon as any}
                    className="text-secondary"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Пополнение и вывод <span className="text-primary">средств</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Минимальный депозит — $10. Вывод от $10 за 24 часа
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methods.map((method, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card/50 backdrop-blur border-white/10 text-center hover:border-primary/50 transition-all hover:scale-105"
              >
                <Icon
                  name={method.icon as any}
                  className="mx-auto text-primary mb-3"
                  size={40}
                />
                <h3 className="font-semibold mb-2">{method.name}</h3>
                <p className="text-sm text-muted-foreground">{method.time}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Дашборд торговли <span className="text-secondary">EUR/USD</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Данные обновляются в реальном времени
          </p>
          <Card className="p-8 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-xl border-white/10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  EUR/USD
                </div>
                <div className="text-4xl font-bold flex items-center gap-3">
                  {price.toFixed(4)}
                  <span
                    className={`text-lg ${isUp ? "text-primary" : "text-red-500"}`}
                  >
                    {isUp ? "▲" : "▼"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button asChild className="bg-primary hover:bg-primary/90 text-black font-semibold">
                  <a href="https://u3.shortink.io/register?utm_campaign=27933&utm_source=affiliate&utm_medium=sr&a=ExMs4i5QVqus6Z&ac=pock" target="_blank" rel="noopener noreferrer">
                    <Icon name="TrendingUp" className="mr-2" size={18} />
                    ВВЕРХ
                  </a>
                </Button>
                <Button asChild className="bg-red-500 hover:bg-red-600 text-white font-semibold">
                  <a href="https://u3.shortink.io/register?utm_campaign=27933&utm_source=affiliate&utm_medium=sr&a=ExMs4i5QVqus6Z&ac=pock" target="_blank" rel="noopener noreferrer">
                    <Icon name="TrendingDown" className="mr-2" size={18} />
                    ВНИЗ
                  </a>
                </Button>
              </div>
            </div>
            <div className="h-64 relative">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 200"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(14, 165, 233)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(14, 165, 233)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <polyline
                  fill="url(#chartGradient)"
                  stroke="rgb(14, 165, 233)"
                  strokeWidth="2"
                  points={priceHistory
                    .map((p, i) => {
                      const x = (i / (priceHistory.length - 1)) * 800;
                      const min = Math.min(...priceHistory);
                      const max = Math.max(...priceHistory);
                      const y = 200 - ((p - min) / (max - min)) * 180 - 10;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                />
              </svg>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Потенциальная прибыль
                </div>
                <div className="text-2xl font-bold text-primary">+92%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Ваша ставка
                </div>
                <div className="text-2xl font-bold">$50</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Возможный доход
                </div>
                <div className="text-2xl font-bold text-secondary">$96</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Вопросы и <span className="text-primary">ответы</span>
          </h2>
          <div className="space-y-4">
            <Card
              className="bg-card/50 backdrop-blur border-white/10 p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() =>
                setOpenFaq(openFaq === "license" ? null : "license")
              }
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                  Какую лицензию имеет Pocket Option?
                </h3>
                <Icon
                  name={openFaq === "license" ? "ChevronUp" : "ChevronDown"}
                  className="text-primary"
                  size={24}
                />
              </div>
              {openFaq === "license" && (
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pocket Option — регулируемый международный брокер, работающий
                  по лицензии IFMRRC (Международная комиссия по финансовым
                  рынкам). Компания зарегистрирована на Маршалловых островах и
                  соответствует всем международным стандартам финансовой
                  безопасности. Средства клиентов хранятся на сегрегированных
                  счетах отдельно от операционных средств компании.
                </p>
              )}
            </Card>
            <Card
              className="bg-card/50 backdrop-blur border-white/10 p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => setOpenFaq(openFaq === "binary" ? null : "binary")}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                  Что такое бинарные опционы?
                </h3>
                <Icon
                  name={openFaq === "binary" ? "ChevronUp" : "ChevronDown"}
                  className="text-primary"
                  size={24}
                />
              </div>
              {openFaq === "binary" && (
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Бинарные опционы — это финансовый инструмент, где трейдер
                  прогнозирует движение цены актива (валюты, акции, сырья) за
                  короткий период времени. Принцип простой: выберите актив,
                  определите направление (вверх/вниз), установите сумму и время
                  экспирации. Если прогноз верный — получаете фиксированную
                  прибыль до 98%, если нет — теряете инвестированную сумму. Это
                  делает бинарные опционы одним из самых простых способов
                  торговли на финансовых рынках.
                </p>
              )}
            </Card>
            <Card
              className="bg-card/50 backdrop-blur border-white/10 p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() =>
                setOpenFaq(openFaq === "min-deposit" ? null : "min-deposit")
              }
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                  Какая минимальная сумма пополнения на Pocket Option?
                </h3>
                <Icon
                  name={openFaq === "min-deposit" ? "ChevronUp" : "ChevronDown"}
                  className="text-primary"
                  size={24}
                />
              </div>
              {openFaq === "min-deposit" && (
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Минимальная сумма пополнения счета на Pocket Option составляет
                  всего $10. Это один из самых низких порогов входа в индустрии,
                  что делает платформу доступной даже для начинающих трейдеров.
                  Минимальная сумма сделки — $1, позволяя тестировать стратегии
                  с минимальными рисками.
                </p>
              )}
            </Card>
            <Card
              className="bg-card/50 backdrop-blur border-white/10 p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() =>
                setOpenFaq(openFaq === "education" ? null : "education")
              }
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                  Есть ли на Pocket Option обучающие материалы?
                </h3>
                <Icon
                  name={openFaq === "education" ? "ChevronUp" : "ChevronDown"}
                  className="text-primary"
                  size={24}
                />
              </div>
              {openFaq === "education" && (
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Да, Pocket Option предоставляет обширную образовательную базу
                  для трейдеров всех уровней: видеокурсы, вебинары, торговые
                  стратегии, аналитические обзоры рынков и демо-счет с $10 000
                  виртуальных средств для практики без риска. Регулярно
                  проводятся бесплатные обучающие сессии от профессиональных
                  трейдеров.
                </p>
              )}
            </Card>
            <Card
              className="bg-card/50 backdrop-blur border-white/10 p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() =>
                setOpenFaq(openFaq === "login-issue" ? null : "login-issue")
              }
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                  Почему не получается войти в личный кабинет Pocket Option?
                </h3>
                <Icon
                  name={openFaq === "login-issue" ? "ChevronUp" : "ChevronDown"}
                  className="text-primary"
                  size={24}
                />
              </div>
              {openFaq === "login-issue" && (
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Проверьте правильность email и пароля (учитывая регистр). Если
                  забыли пароль — используйте функцию восстановления. Возможные
                  причины: истёк срок сессии, блокировка аккаунта за нарушение
                  правил, технические работы на сервере. Попробуйте очистить кеш
                  браузера или использовать другой браузер. Если проблема
                  сохраняется — обратитесь в поддержку 24/7.
                </p>
              )}
            </Card>
            <Card
              className="bg-card/50 backdrop-blur border-white/10 p-6 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() =>
                setOpenFaq(openFaq === "how-to-start" ? null : "how-to-start")
              }
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                  Как начать торговать на Pocket Option?
                </h3>
                <Icon
                  name={
                    openFaq === "how-to-start" ? "ChevronUp" : "ChevronDown"
                  }
                  className="text-primary"
                  size={24}
                />
              </div>
              {openFaq === "how-to-start" && (
                <p className="text-muted-foreground leading-relaxed mt-4">
                  1) Зарегистрируйтесь на сайте (email + пароль, займёт 30
                  секунд). 2) Пополните счёт от $10 любым удобным способом. 3)
                  Выберите актив (валютная пара, акции, криптовалюта). 4)
                  Установите сумму сделки и время экспирации. 5) Спрогнозируйте
                  направление цены (вверх/вниз) и нажмите кнопку торговли.
                  Рекомендуем начать с демо-счёта для изучения платформы.
                </p>
              )}
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">Pocket Option</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Международный брокер бинарных опционов. Лицензия IFMRRC.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" className="text-primary" size={16} />
                  <span className="text-muted-foreground">
                    support@pocketoption.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="MessageCircle"
                    className="text-primary"
                    size={16}
                  />
                  <span className="text-muted-foreground">Онлайн-чат 24/7</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-secondary" size={16} />
                  <span className="text-muted-foreground">
                    Круглосуточно, без выходных
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Globe" className="text-secondary" size={16} />
                  <span className="text-muted-foreground">
                    Русскоязычная поддержка
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
            <p>
              © 2026 Pocket Option. Данный ресурс не является официальным
              сайтом компании Pocket Option, здесь расположена лишь информация
              для ознакомления с платформой. Помните, торговля на финансовых
              рынках всегда сопряжена с риском потери денежных средств.
              Администрация ресурса не несёт ответственности за действия
              пользователей. На данном сайте не принимаются денежные средства, а
              также не осуществляются никакие финансовые операции. Все действия,
              связанные с пополнением счета, торговлей и выводом средств
              происходят только на официальном сайте Покет Опшен.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
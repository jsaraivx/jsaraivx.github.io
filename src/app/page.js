import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyBlockquote } from "@/components/ui/typo/TypographyBlockquote";
import { TypographyH1 } from "@/components/ui/typo/TypographyH1";
import { TypographyH3gr } from "@/components/ui/typo/TypographyH3gr";
import { TypographyList } from "@/components/ui/typo/TypographyList";
import { TypographyP } from "@/components/ui/typo/TypographyP";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-black via-slate-900 to-red-950 ">
      {/*<header><NavMenu/></header>*/}

      <section className="flex min-h-screen flex-col items-center px-8">
        <section className="items-center flex flex-col md:w-5/12 my-12">
          <Avatar className="w-48 h-48 md:w-72 md:h-72 mb-12 ">
            <AvatarImage src="https://github.com/jsaraivx.png" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-8xl">
            João Saraiva!
          </h1>
          <TypographyH3gr content="Frontend Engineer" />
          <p className="text-normal mt-8 text-center">
            Desenvolvedor WEB, focado em tirar idéias do papel e transforma-las
            em aplicações modernas e responsíveis para seus clientes.
          </p>
          <Button className="mt-8 text-xl px-8 py-6">Entrar em contato</Button>
          <div className="mb-24"></div>
        </section>

        <section className=" items-center flex flex-col md:w-6/12 my-12">
          <TypographyH1 content="SOBRE MIM" />
          <TypographyH3gr content="EXPLORE NOW" />
          <p className="text-xl mt-2 text-center">
            Olá, eu sou o João, tenho experiência em desenvolvimento Front end
            usando principalmente React, Tailwind e NextJS em alguns de meus
            projetos, além de experiência profissional usando ferramentas como
            Elementor (WordPress), Shopify com apoio de HTML, CSS e Liquid..
            Também utilizo ferramentas como Canva, Figma, ShadCN/UI, MUI, Git e
            Github, métodos ágeis como Kanban..
          </p>
        </section>
        <section className="items-center flex flex-col my-12 md:w-10/12">
          <TypographyH1 content="EXPERIÊNCIA" />
          <TypographyH3gr content="EXPLORE NOW" />
          <section className="items-center flex flex-col my-12 md:w-12/12">
            <div className="flex flex-col md:flex-row md:justify-between md:w-7/12 md:mb-10 md:mt-12">
              <h3 className="text-xl">
                <b>PHARMABULL (freelance)</b> / Desenvolvedor Frontend Junior
              </h3>
              <p className="text-sm font-light">NOV 2023 - JUN 2024</p>
            </div>
            <div className="flex justify-center md:mb-4">
              <TypographyP content="Fui o responsável desde o planejamento até a criação do site oficial da empresa PharmaBull, um projeto que nasceu com o objetivo de se tornar uma das maiores Fármácias pet do Brasil. Dentre as etapas deste projeto, começamos pela captação de idéias do cliente, e depois protótipo baseado em outros design's, após isso foi feita a estruturação do projeto" />
            </div>
            <div className="flex md:justify-start md:flex-row ">
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Wordpress
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Elementor
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Figma
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                CSS
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Kanban
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                GEN AI
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                PHP
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                API
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Plugins Wordpress
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Javascript
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Bootstrap
              </Badge>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:w-7/12 md:mb-10 md:mt-12">
              <h3 className="text-xl">
                <b>INTEXCAPS (freelance)</b> / Desenvolvedor Frontend Junior
              </h3>
              <p className="text-sm font-light">DEZ 2022 - NOV 2023</p>
            </div>
            <div className="flex justify-center md:mb-4">
              <TypographyP
                content="Atuei como desenvolvedor em uma empresa de encapsulados, fornecendo uma aplicação de
 web-scraping através de Python, além de ter feito diversas páginas de vendas para produtos usando
 Elementor, e conhecimentos em Css e Js para personalização do código. Aprendi também a usar
 Generative AI, para escrever CopyWriting em páginas de vendas, além de auxiliar na criação de
 aplicações e sites usando Elementor, Shopify, Html e Css."
              />
            </div>
            <div className="flex md:justify-start md:flex-row ">
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Wordpress
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Elementor
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Figma
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                CSS
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Html
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Javascript
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Kanban
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                GEN AI
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Shopify
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Liquid
              </Badge>
              <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
                Bootstrap
              </Badge>
            </div>
          </section>
        </section>
        <section className="items-center flex flex-col my-12 md:w-10/12">
          <TypographyH1 content="PROJETOS" />
          <TypographyH3gr content="EXPLORE NOW" />
          <div className="flex flex-col md:flex-row md:justify-between md:w-7/12 md:mb-10 md:mt-12">
            <a
              className="bg-gradient-to-tr from-purple-900 via-blue-700 to-red-800 px-2 rounded-sm animate-bounce"
              href="https://github.com/jsaraivx"
            >
              <h3 className="text-xl">
                <b>Woovi Frontend Engineer</b> / Challenge
              </h3>
            </a>
            <p className="text-sm font-light">Challenge</p>
          </div>
          <div className="flex justify-center md:mb-8">
            <TypographyP
              content=" Desafio proposto pela empresa Woovi, para um processo seletivo de uma vaga de Frontend Engineer, onde
 deveriamos construir um clone de uma interface de pagamentos, que estava prevista dentro de um projeto Figma..
 Técnologias/Métodos usados: Figma, Mobile First, Trello(Kanban), React, NextJS, Js, Jsx, Tailwind,
 MUI(Requisito do Projeto), Git/Github e Vercel para deploy."
            />
          </div>
          <div className="flex md:justify-start md:flex-row ">
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              ReactJS
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              NextJS
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Material UI
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Tailwind
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Jsx
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Vercel
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Git
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Github
            </Badge>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:w-7/12 md:mb-10 md:mt-12">
            <a
              className="bg-gradient-to-tr from-purple-900 via-blue-700 to-red-800 px-2 rounded-sm animate-bounce"
              href="https://jsaraivx-woovi-frontend-challenge.vercel.app/"
            >
              <h3 className="text-xl">
                <b>Pomodoit</b> / SAAS
              </h3>
            </a>
            <p className="text-sm font-light">IN DEVELOPMENT</p>
          </div>
          <div className="flex justify-center md:mb-8">
            <TypographyP
              content="Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR, As a React.js developer with 1.5 year of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications.
and technologies."
            />
          </div>
          <div className="flex md:justify-start md:flex-row ">
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              ReactJS
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              NextJS
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Shadcn/UI
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Tailwind
            </Badge>
            <Badge className=" dark:bg-gradient-to-l from-purple-900 via-blue-700 to-red-800 dark:text-white m-1 font-normal  md:px-3 md:py-1 md:text-xs ">
              Mobile First
            </Badge>
          </div>
        </section>
      </section>
    </main>
  );
}

import Image from "next/image";
import { TypographyH2 } from "@/components/ui/typo/TypographyH2";
import { TypographyP } from "@/components/ui/typo/TypographyP";
import { TypographyH1 } from "@/components/ui/typo/TypographyH1";
import {TypographyH3gr} from "@/components/ui/typo/TypographyH3gr";
import { TypographyBlockquote } from "@/components/ui/typo/TypographyBlockquote";
import NavMenu from "@/components/NavMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { TypographyList } from "@/components/ui/typo/TypographyList";

export default function Home() {
  return (
    <main className='bg-bg-pattern bg-no-repeat bg-cover bg-center bg-fixed' >
        {/*<header><NavMenu/></header>*/}


      <section className="flex min-h-screen flex-col items-center self= justify-center px-8">

        <main 
        className='flex flex-col mb-12 w-full mt-16 justify-start items-center'
        >
        <Avatar className='w-48 h-48 mb-12 ' >
            <AvatarImage  src='https://github.com/jsaraivx.png' />  
            <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <TypographyH1 content="João Saraiva!" />
        <TypographyH3gr content='Frontend Engineer' />
        <TypographyP
          content="Passionate Software Engineer with a focus on Front End development,
dedicated to creating elegant and easy to use web applications."
        />
        <Button className='mt-4' >Contact Me</Button>
        <div className='mb-24' ></div>
        
        <TypographyH1 content="Techs" />
        <TypographyH3gr content='EXPLORE NOW'/>
        <TypographyList/>
        </main>

        

        <section className=' items-center flex flex-col my-12'>
        <TypographyH1 content="About Me" />
        <TypographyH3gr content='EXPLORE NOW'/>
        <TypographyP
          content="As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.

With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible"
        />
        
        </section>
        <section className='items-center flex flex-col my-12'>
        <TypographyH1 content="Experience" />
        <TypographyH3gr content='EXPLORE NOW'/>
        <TypographyP
          content="Passionate Software Engineer with a focus on Front End development,
dedicated to creating elegant and easy to use web applications."
        />
        
        </section>
        <section className='items-center flex flex-col my-12'>
                <TypographyH1 content="Projects" />
                <TypographyH3gr content='EXPLORE NOW'/>
                <TypographyP
          content="Passionate Software Engineer with a focus on Front End development,
dedicated to creating elegant and easy to use web applications."
        />
        </section>
        <TypographyBlockquote content="hello world" />
        

        

        




      </section>
    </main>
  );
}

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const contextMessage = `
Only reply to the user based off of information found in the resume below. Do not provide any additional information. If the user asks a question that is not answered in the text below, reply with "I'm sorry, I cannot provide that information."

Persona
Martin Pascale is a 25 year old senior softare engineer who lives in montevideo uruguay. He has more than 5 years of experience in the field.
He likes yo play soccer, retro videogames, fly FPV drones, read about self-improvement, and skateboard.

Summary
Software Engineer, experienced in React/Typescript/Node/AWS. I love designing and
building beautiful and intuitive UIs. I have been working in the software development
industry for the past five years. I have experience working with data-driven

dashboards, generative AI, Admin Sites, a Search Engine, and a few big e-
commerce websites, where I developed an eye for detail and always make sure

everything works as expected on every device. While most of my work has been in
the frontend using React (and lately AWS), being a self-taught developer has helped
me to always be adapting to trends and learning new technologies. I think
communication and collaboration are key to delivering a good product, which is why I
hold the Agile Values in high regard (Courage, Commitment, Focus, Respect, and
Openness).

Experience
Constellation Jan 2023 to Jul 2024
Senior Software Engineer
As a Senior Software Engineer at Constellation, I was in charge of creating tools for
Ad creation and placement on different platforms such as Google and Meta. This
involved Frontend UI work in React/Next/Typescript and Backend infrastructure as a
code AWS/Serverless/Node. I delivered entire features such as a Generative AI for
creating, resizing, and modifying images using OpenAI, Stable Diffusion, and
Cloudinary. Working closely with Designers, Product managers, and QA to achieve it.

Vairix Sept 2021 to January 2023
Frontend Software Engineer
Building and testing UIs and Design Systems using React/Typescript/Storybook for a
fortune 50 company.

Arvolution Sept 2020 to Sept 2021
Software Engineer
Worn many hats, going from requirements gathering through design and
development. React/Typescript Node.

Neocoast Sept 2019 to Sept 2020
Frontend Developer
Worked with React / Javascript /Redux stack. I learned a lot of my foundations and
delivered pixel perfect responsive UIs in the process.

Neocoast Oct 2018 to Nov 2019
QA Tester
Testing of Web and React Native apps. I was responsible for Manual testing and

ticketing the bugs. Also used Selenium to automate regression testing on an E-
commerce website.

Education
Facultad de Ingenieria UDELAR March 2017 to Nov 2021
Software Engineering

Is Martin a virgin?
Yes but my friend friend Santago "Nicoperro" Menendez is SUPER virgin

This page is inspired by the Balatro game, getting inspiration from its amazing UI with a old CRT TV aesthetic.
`;

export async function POST(request: Request) {
  const { message } = await request.json();

  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'user', content: contextMessage },
        { role: 'user', content: message },
      ],
      stream: true,
    });

    const data = [];
    for await (const chunk of stream) {
      data.push(chunk.choices[0]?.delta?.content || '');
    }

    return NextResponse.json({ success: true, data: data.join('') });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

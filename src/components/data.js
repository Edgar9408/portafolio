//responsable, competitivo, puntual, inteligente, capáz, adaptacion a los cambios
import Sixbeer from '../Img/Sixbeer.png';
import FindYH from '../Img/FindYourHenry.JPG'

export const profile = {
    profile: "Tengo 26 años. Soy una persona comprometida con mi trabajo, tengo facilidad para trabajar en equipo, comunicarme, adaptarme a los cambios y trabajar con metodologías ágiles, además soy perseverante, autodidacta, apasionado por la tecnología, disfruto estudiar y ampliar mis conocimientos, también me encantan los retos y los nuevos proyectos."
}
export const education = [
    {
        Title: 'Tecnico en programacion de Software',
        Institute: 'SENA',
        Duration: '2 años',
        Link: 'https://www.sena.edu.co/',
        state: 'Terminado'
    },
    {
        Title: 'Ingenieria de Sistemas',
        Institute: 'Universidad de los Llanos',
        Duration: '2 semestres',
        Link: 'https://www.unillanos.edu.co/',
        state: ''
    },
    {
        Title: 'Desarrollador Full Stack',
        Institute: 'Soy Henry',
        Duration: '6 meses',
        Link: 'https://www.soyhenry.com/',
        state: 'Terminado'
    },
    {
        Title: 'Ingenieria de Software',
        Institute: 'Universidad Tecnologica Nacional',
        Duration: '2020 - Actualidad',
        Link: 'https://www.frc.utn.edu.ar/',
        state: 'en Curso'
    }
]
export const Contactame = {
    texto: "A continuación dejo algunos de mis datos. En caso de que quieras saber algo en particular puedes enviarme un mensaje al correo electronico o simplemente puedes mandar tu consulta mediante este formulario de la derecha, coloca los datos que se piden y me llegarán a mi correo electrónico. Saludos!",
    email: "edgar.palma9408@gmail.com",
    LinkedIn: "www.linkedin.com/in/edgar-palma9408",
    GitHub: "https://github.com/Edgar9408",
    Wapp: "https://api.whatsapp.com/send/?phone=543518028263&text&app_absent=0"
}
export const Spanish = {
    profile: {
        profile: "Tengo 26 años. Soy una persona comprometida con mi trabajo, tengo facilidad para trabajar en equipo, comunicarme, adaptarme a los cambios y trabajar con metodologías ágiles, además soy perseverante, autodidacta, apasionado por la tecnología, disfruto estudiar y ampliar mis conocimientos, también me encantan los retos y los nuevos proyectos."
    },
    education: [
        {
            Title: 'Tecnico en programacion de Software',
            Institute: 'SENA',
            Duration: '2 años',
            Link: 'https://www.sena.edu.co/',
            state: 'Terminado'
        },
        {
            Title: 'Ingenieria de Sistemas',
            Institute: 'Universidad de los Llanos',
            Duration: '2 semestres',
            Link: 'https://www.unillanos.edu.co/',
            state: ''
        },
        {
            Title: 'Desarrollador Full Stack',
            Institute: 'Soy Henry',
            Duration: '6 meses',
            Link: 'https://www.soyhenry.com/',
            state: 'Terminado'
        },
        {
            Title: 'Ingenieria de Software',
            Institute: 'Universidad Tecnologica Nacional',
            Duration: '2020 - Actualidad',
            Link: 'https://www.frc.utn.edu.ar/',
            state: 'en Curso'
        },
    ],
    Contactame: {
        texto: "A continuación dejo algunos de mis datos. En caso de que quieras saber algo en particular puedes enviarme un mensaje al correo electronico o simplemente puedes mandar tu consulta mediante este formulario de la derecha, coloca los datos que se piden y me llegarán a mi correo electrónico. Saludos!",
        email: "edgar.palma9408@gmail.com",
        LinkedIn: "www.linkedin.com/in/edgar-palma9408",
        GitHub: "https://github.com/Edgar9408",
        Wapp: "https://api.whatsapp.com/send/?phone=543518028263&text&app_absent=0"
    }
}
export const projects = [
    {
        name: "Sixbeer",
        target: "Sixbeer",
        generalDescription:"E-commerce de Cervecería desarrollado con React, Redux, NodeJS y Postgresql",
        description: "Participación en un equipo de desarrollo ágil con Sprints de una semanapresentándole a un Product Owner avances sobre el desarrollo de una app completa de un E-commerce con diseño y desarrollo de las siguientes características:",
        features: ["Características básicas de e-commerce (CRUD de productos, Auth, catalogo,checkout, etc..)","Barra de búsquedas", "Integración pasarela de Pago (Mercado Pago).", "Envío de emails transaccionales.", "Administración de carrito de compras y órdenes de productos, Administración deusuarios, gestión de claves."],
        tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Redux", "NodeJS", "Express", "Sequelize", "PosgreSQL", "Git", "Scrum", "Trello", "Postman"],
        image: Sixbeer,
        repositorio: "https://github.com/Edgar9408/Sixbeer"
    },
    {
        name: "Find Your Henry",
        target: "FindYH",
        generalDescription:"Centro de busqueda de empleo desarrollado con React, TypeScript, NodeJS, Graphql y MongoDB",
        description: "Desarrollor de aplicacion web donde los reclutadores pueden buscar desarrolladores graduados de Henry, y los graduados pueden postularse a vacantes disponibles con las siguientes características:",
        features: ["Catálogo", "Filtrado", "Barra de búsquedas", "Perfiles", "Favoritos", "Emails de notificaciones y transaccionales", "Administración", "Rdición de usuarios", "Rutenticación", "Registro", "Inicio de sesión de terceros"],
        tecnologias: ["typeScript", "React", "Redux", "Apollo", "NodeJS", "Graphql", "MongoDB", "Tailwind"],
        image: FindYH,
        repositorio: "https://github.com/LeandroVignoni/Henry-App",
        web: "https://find-your-henry-rho.vercel.app/"
    },
    // {
    //     name: "Proximamente",
    //     description: "",
    //     features: [],
    //     tecnologias: [],
    //     image: "",
    //     repositorio: "",
    // }

]

import React from 'react';
import '../styles.css';

const About = () => {
  return (
    <div className='container-fluid margin-from-navbar'>
      <h1 className='text-with-shadow'>About Me</h1>
      <p>Sviluppatore Fullstack con oltre 3 anni di esperienza nella creazione di applicazioni web robuste e scalabili. </p>
      <p>Mi piace affrontare sfide tecniche e trovare soluzioni efficienti sia sul fronte frontend che backend.</p>
      <h2 className='text-with-shadow'>WhoAmI?</h2>
      <p>Sono un appassionato sviluppatore con un forte interesse per le tecnologie e l'innovazione.</p>
      <p>Ho sempre avuto una forte curiosità nelle tecnologie innovative, infatti ho un diploma in tecnologie informatiche
        e telecomunicazioni presso l'ITI RIGHI a Napoli, e una laurea in ingegneria informatica presso Università degli studi di Napoli
        Federico II.
      </p>
      <p>Sin da quando ho iniziato a programmare, ho sempre avuto la passione per la costruzione di applicazioni
        che possano migliorare l'esperienza degli utenti e risolvere problemi reali. </p>
      <h2 className='text-with-shadow'>Esperienza professionale</h2>
      <p>Ho iniziato a lavorare in azienda poco prima della laurea, su progetti inerenti alla pubblica amministrazione,
        e in particolare nell'ultimo periodo su progetti bancari dove c'è da lavorare sia sul frontend che backend.
        In questi anni ho avuto modo di conoscere e lavorare con varie tecnologie tra cui:
      </p>
      <ul>
        <li>
          Frontend:
          HTML5, CSS3, JavaScript, TypeScript, JSP, XML, JSON</li>
        <li>Backend:
          Java, Jsp, Servlets, Springboot
        </li>
        <li>Database:
          MySQL, MongoDB, Oracle, SQL Server, Stored Procedures
        </li>
        <li>DevOps:
          Kubernetes, Git, CI/CD, Azure, Maven
        </li>
        <li>API: REST, SOAP</li>
        <li>Tools e altre tecnologie: SonarQube, WebSphere, JBoss</li>
      </ul>
      <p>e mi sono occupato anche di migrazioni da .NET a Java Springboot.</p>
      <h2 className='text-with-shadow'>Filosofia di sviluppo</h2>
      <p>Mi piace affrontare ogni progetto con un approccio orientato alla qualità e alla sostenibilità.
        Seguo il principio del "clean code" e cerco di scrivere codice che non solo risolva il problema,
        ma che sia anche facilmente manutenibile nel tempo. Inoltre, credo fortemente nella collaborazione:
        lavorare insieme a team di designer, sviluppatori e stakeholder è essenziale per creare soluzioni che
        rispondano davvero alle esigenze degli utenti.

        Nel mio lavoro, cerco sempre di mantenere un buon equilibrio tra il rispetto dei tempi di sviluppo e
        l'adozione di tecnologie moderne che possano portare valore a lungo termine. </p>
      <p>Mi piace il fatto che lo sviluppo Fullstack mi permetta di lavorare su entrambi i lati di un'applicazione,
        il frontend e il backend. Questo mi consente di avere una visione globale del progetto e di lavorare
        per risolvere le sfide in modo completo e coeso. Ogni parte del processo di sviluppo mi entusiasma,
        dalla creazione di interfacce utente reattive alla gestione di API robuste e sicure.</p>




    </div>
  );
};

export default About;
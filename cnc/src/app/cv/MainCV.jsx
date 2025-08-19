import React from "react";

import './css/main_cv.css'
import './../../main.css'

import CollapsibleSection from "./CollapsibleSection";

export default function MainCV() {
  return (
    <div className='main-container'>
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Ilia Grigoriev</h1>
        <p className="text-lg">MSc in Computer Science</p>
        <p>
          <a href="mailto:grigoriev.ilia.app@gmail.com" className="text-blue-500 hover:underline">
            grigoriev.ilia.app@gmail.com
          </a>
        </p>
        <p>Stolberg (Rhineland), NRW, Germany</p>
        <p>
          <a href="https://www.linkedin.com/in/ilia-grigoriev-5310a091/" target="_blank" className="text-blue-500 hover:underline">
            LinkedIn Profile
          </a>
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
        <p>I can professionally architect innovative software with machine learning components, containerizing, and scaling up software projects. I can rapidly grasp new contexts, identify potential problems, and find creative algorithmic solutions.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li><strong>Languages:</strong> Python, C++, Matlab, C#, Java</li>
          <li><strong>Libraries/Frameworks:</strong> transformers, tensorflow, Spacy, Scikit-learn, Pytorch, NumPy, Pandas, fastAPI, React</li>
          <li><strong>DBMS:</strong> PostgreSQL, MySQL</li>
          <li><strong>Tools:</strong> VS Code, Podman/Docker, git, ssh, AWS-EC2</li>
          <li><strong>Agile:</strong> Azure DevOPs, Tuleap, WeKan</li>
          <li><strong>Hardware:</strong> x86, ARM, NVIDIA Xavier & Jetson-Nano</li>
          <li><strong>OS:</strong> Linux, Mac OS, Windows</li>
          <li><strong>Languages Spoken:</strong> English, German, Ukrainian, Russian, Portuguese</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p><strong>MSc Computer Science</strong> – KIT (Germany) & EPFL (Switzerland), Feb 2018</p>
        <p><em>Thesis:</em> Developing Methods to Identify Brain Activity Patterns Using Advanced Imaging Analysis (excellent)</p>
        <p><strong>BSc Computer Science</strong> – KIT (Germany), June 2015</p>
        <p><em>Thesis:</em> Fuzzy Temporal Modeling of Group Constellations and Interaction Patterns in Smart Environments</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          
          <CollapsibleSection title='Software & Machine Learning Engineer – IME AACHEN (Jan 2024 - Present)'>
            <h3 className="text-xl font-bold">Software & Machine Learning Engineer – IME AACHEN (Jan 2024 - Present)</h3>
            <ul className="list-disc list-inside">
              <li>Architecting scalable microservices platform with custom API and React frontend for wind turbine modeling</li>
              <li>Streamlined development in system modeling team</li>
              <li>Automated heat image inspection with deep learning</li>
              <li>Refactored legacy Java Swing code</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title='Software Engineer – CARL ZEISS (Apr 2023 - Jul 2023)' >
            <ul className="list-disc list-inside">
              <li>Built PyQt clustering UI tool for mechanical component selection</li>
              <li>Ported functionality to C# for integration</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title='ML Software Engineer – INDA RWTH / CLINOMIC (Jul 2019 - Dec 2022)'>
            <ul className="list-disc list-inside">
              <li>Built ICU conversational assistant prototype</li>
              <li>Developed access control and voice interaction system</li>
              <li>Enhanced BERT text-query model with a genetic algorithm</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title='Computational Researcher – ETH Zürich (May 2018 - Jul 2019)'>
            <h3 className="text-xl font-bold">Computational Researcher – ETH Zürich (May 2018 - Jul 2019)</h3>
            <ul className="list-disc list-inside">
              <li>Analyzed extracellular biosignal data</li>
              <li>Secured grant through visualizations and modeling</li>
              <li>Mentored biology-background students on Matlab processing</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title='Algorithms Developer – EPFL (Dec 2016 - Jun 2016)'>
            <ul className="list-disc list-inside">
              <li>Developed fMRI big data visualization tools with SOM</li>
              <li>Enhanced fMRI analysis tools for efficiency</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title='Algorithms Developer – KIT (May 2013 - May 2016)'>
            <ul className="list-disc list-inside">
              <li>Accelerated heart model computations using GPUs</li>
              <li>Modeled atrial contraction using electrical potential maps</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title='Image Processing Developer – DESY (Jul 2014 - Sep 2014)'>
            <ul className="list-disc list-inside">
              <li>Simulated and reconstructed electron density of colloidal crystals</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title='Software Developer – LANG (Aug 2010 - Jan 2013)'>
            <ul className="list-disc list-inside">
              <li>Developed driving time compliance software in Groovy & Grails</li>
            </ul>
          </CollapsibleSection>
        
        </div>
      </section>
    </div>
  );
}

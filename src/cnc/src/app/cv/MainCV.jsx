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
            <CollapsibleSection
              time="Jan 2024 – May 2026"
              title={
                <>
                  <span className="highlight-yellow">ML Software Engineer</span>
                  {" "}– Wind Turbines Development – <span className="highlight-blue-cursive">IME AACHEN (+MSE-RWTH)</span>
                </>
              }
            >
            <ul className="list-disc list-inside">
              <li>Guided and co-developed a microservices platform with custom API and React front-end to automate turbine modeling workflows and enable scalable growth.</li>
              <li>Streamlined software development in a system modeling team.</li>
              <li>Automated wind turbine inspections with deep learning on heat images, improving efficiency.</li>
              <li>Modernized Java Swing code for wind turbine calculations, reducing maintenance overhead.</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            time="Apr 2023 - Jul 2023"
            title={
              <>
                <span className="highlight-yellow">ML Software Developer</span>
                {" "}– Multi-Sensor Workflow Automation – <span className="highlight-blue-cursive">CARL ZEISS</span>
              </>
            }
          >  
            <ul className="list-disc list-inside">
              <li>Built a PyQt app to automate mechanical component selection using clustering and visualization.</li>
              <li>Translated the core PyQt app functionality to C# and integrated into final product.</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection
            time="Jul 2019 - Dec 2022"
            title={
              <>
                <span className="highlight-yellow">R&D ML Software Engineer (via RWTH)</span>
                {" "}– Pioneering Intensive Care Smart Assistant – <span className="highlight-blue-cursive"> CLINOMIC / INDA RWTH </span>
              </>
            }
          >
            <ul className="list-disc list-inside">
              <li>Built and showcased PoC of conversational interface for ICU, gaining stakeholder confidence:</li>
              <ul className="list-disc list-inside ml-6">
                <li>Architected C++ pilot access control, pioneering a role-based model for ICU smart assistant.</li>
                <li>Built PoC with wake word detection, speech-to-text, intent recognition, and text-to-speech for ICU.</li>
              </ul>
              <li>Optimized a Masked Language Query Model (BERT) and developed a genetic algorithm for ICU data queries.</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection
            time="May 2018 - Jul 2019"
            title={
              <>
                <span className="highlight-yellow">Data Scientist</span>
                {" "}– Biosignal Processing – <span className="highlight-blue-cursive">Bioengineering Laboratory - ETH Zurich</span>
              </>
            }
          >
            <ul className="list-disc list-inside">
              <li>Defined project scope and plan with tasks and risk assessments to study causality in neuronal networks.</li>
              <li>Secured grant funding by analyzing and visualizing extracellular signals data from novel cell types.</li>
              <li>Trained students with biological background how to process extracellular data in Matlab.</li>
              <li>Modernized legacy code for neuronal signal processing to handle new type of extracellular data.</li>

            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection
            time="Dec 2016 - Jun 2016"
            title={
              <>
                <span className="highlight-yellow">Algorithms Developer </span> 
                – Neurological Anomaly Detection {" "} – <span className="highlight-blue-cursive">Medical Image Processing Lab - EPFL</span>
              </>
            }
          >
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

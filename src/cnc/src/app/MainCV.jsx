import React from "react";

import './css/main_cv.css'
import './css/sidebarpages.css'

import CollapsibleSection from "./cv/CollapsibleSection";

const Divider = () => <div className="section-divider" />;

export default function MainCV() {
  return (
    <div className='main-container'>
      <header>
        <p><strong>Ilia Grigoriev</strong>, MSc in Computer Science</p>
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

      <Divider />
      <section>
        <p>
          I can professionally architect innovative software with machine learning components, containerizing, 
          and scaling up software projects. I can rapidly grasp new contexts, identify potential problems, and 
          find creative algorithmic solutions.
        </p>
      </section>

      <Divider />
      <section>
        <ul>
          <li><strong>Languages:</strong> Python, C++, Matlab, C#, Java</li>
          <li><strong>Libraries/Frameworks:</strong> transformers, tensorflow, Spacy, Scikit-learn, Pytorch, NumPy, Pandas, fastAPI, React</li>
          <li><strong>DBMS:</strong> PostgreSQL, MySQL</li>
          <li><strong>Tools:</strong> VS Code, Podman/Docker, git, ssh, AWS-EC2</li>
          <li><strong>Agile:</strong> Azure DevOPs, Tuleap, WeKan</li>
          <li><strong>Hardware:</strong> x86, ARM, NVIDIA Xavier & Jetson-Nano</li>
          <li><strong>OS:</strong> Linux, Mac OS, Windows</li>
          <li><strong>Languages Spoken:</strong> English, German</li>
        </ul>
      </section>

      <Divider />

      <section>
        <CollapsibleSection
              time="Feb 2018"
              title={
                <>
                  <span className="highlight-yellow">MSc Computer Science</span>
                  {" "}– <span className="highlight-blue-cursive">KIT (Germany) & EPFL (Switzerland)</span>
                </>
              }
        >
        <p><em>Thesis:</em> Developing Methods to Identify Brain Activity Patterns Using Advanced Imaging Analysis (excellent)</p>
        </CollapsibleSection>
        <CollapsibleSection
              time="June 2015"
              title={
                <>
                  <span className="highlight-yellow">BSc Computer Science</span>
                  {" "}– <span className="highlight-blue-cursive">KIT & Fraunhofer IOSB (Germany)</span>
                </>
              }
        >
        <p><em>Thesis:</em> Fuzzy Temporal Modeling of Group Constellations and Interaction Patterns in Smart Environments</p>
        </CollapsibleSection>
      </section>

      <Divider />
      
      <section>
        <div>
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
              <li>Mastered intricate code for processing complex fMRI data and identified areas of improvement.</li>
              <li>Improved research efficiency with a novel Self-Organizing Map for clustering and visualizing big data.</li>
              <li>Gained three scholarships totaling €9,500 to fund a seven-month master’s thesis project.</li>
            </ul>
          </CollapsibleSection>
            
          <Divider />

          <CollapsibleSection
            time="May 2013 - May 2016"
            title={
              <>
                <span className="highlight-yellow">Algorithms Developer </span> 
                – Cardiac Electrophysiology Modeling {" "} – <span className="highlight-blue-cursive">Institute of Biomedical Engeneering - KIT</span>
              </>
            }
          >
            <ul className="list-disc list-inside">
              <li>Reduced run time of existing algorithms for editing of trimesh surfaces by 50 % in clinical setting.</li>
              <li>Simulated human atrial contraction using 3D interpolation of electrical potential measurements.</li>
              <li>Improved data processing speed by optimizing mathematical computations for GPUs in C++.</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            time="Jul 2014 - Sep 2014"
            title={
              <>
                <span className="highlight-yellow">Image Processing Developer </span>
                – Coherent Diffraction Imaging {" "} – <span className="highlight-blue-cursive">DESY</span>
              </>
            }
          >
            <ul className="list-disc list-inside">
              <li>Clarified challenges for the team by developing a MATLAB pipeline to simulate the experiment.</li>
              <li>Created a 3D model of colloidal crystals in a divergent beam for more accurate analysis.</li>
              <li>Enhanced image quality of colloidal crystals via Fourier methods under curved wavefronts.</li>
            </ul>
          </CollapsibleSection>
          <CollapsibleSection
            time="Aug 2010 - Jan 2013"
            title={
              <>
                <span className="highlight-yellow">Software Developer </span>
                – Improving Cargo Truck Safety {" "} – <span className="highlight-blue-cursive">ISCL GmbH - IT Security Consulting</span>
              </>
            }
          >
            <ul className="list-disc list-inside">
              <li>Developed algorithms to monitor driving data for EU regulation compliance in a Groovy & Grails project.</li>
              <li>Coordinated with clients to deliver a complex project on time, requiring effective communication.</li>
            </ul>
          </CollapsibleSection>        
        </div>
      </section>
    </div>
  );
}

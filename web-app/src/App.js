import React, { useState, useEffect } from 'react';
import { Linkedin, GraduationCap, Github } from 'lucide-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './general.css';
import './home.css';


const App = () => {
  const [updates, setUpdates] = useState([]);
  const [educations, setEducations] = useState([]);
  const [papers, setPapers] = useState([]);
  const [projects, setProjects] = useState([]);

  const logo = require('./pics/tab-icon.png');
  const headshot = require('./pics/website-bgp.JPG');
  const cv = require('./resource/DaminZhangResume.pdf');


  useEffect(() => {
    setUpdates([
      'June 2022: Designed and developed ConvIE at Happy the Movement, a startup in health industry',
      'April 2022: Poster presentation at Purdue Polytechnic RIA 2022 Student Poster Symposium',
      'March 2022: Full paper accepted at FLAIRS-35!',
      'November 2021: Defended my thesis!',
      'May 2021: Passed my thesis proposal defense!',
    ]);

    setEducations([
      'PhD, Natural Language Processing, Purdue University, 2022-Present',
      'MS, Computer and Information Technology, Purdue University, 2019-2021',
      'BS, Computer Science, University of Massachusetts Amherst, 2015-2019',
    ]);

    setPapers([
      ['', 'Generic Communication Encoding (WIP)'],
      ['', 'Taxonomy-based Checklist for Large Language Models Gender Bias Evaluation  (WIP)'],
      ['https://www.mdpi.com/2071-1050/16/7/2721', 'Is Alexa Happy or Angry? Perceptions and Attributions of Emotional Displays of Smart Technologies in Residential Homes'],
      ['https://www.amazon.science/alexa-prize/proceedings/boilerbot-a-reliable-task-oriented-chatbot-enhanced-with-large-language-models', 'BoilerBot: A reliable task-oriented chatbot enhanced with large language models'],
      ['https://arxiv.org/abs/2301.04347', 'Counteracts: Testing Stereotypical Representation in Pre-trained Language Models'],
      ['https://journals.flvc.org/FLAIRS/article/view/130642/133944', 'Examining Stereotypes in News Articles'],
    ]);

    setProjects([
      ['https://apps.apple.com/us/app/pikapass/id6447812288', 'PikaPass - Local Account Management'],
      ['https://apps.apple.com/us/app/muscloop/id1669056757', 'Muscloop - Training Portfolio'],
      ['', 'CATT - Chat Analysis Triage Tool'],
      ['https://github.com/daminz97/gscholar-search.git', 'GScholar Search Toolkit'],
      ['', 'ConvIE - Language Model Integrated Conversation Information Extraction System'],
      ['https://github.com/daminz97/GameLog-v3', 'GameLog v3'],
      ['https://youtu.be/IKiJi5XbVNc', 'Bias in Statements'],
      ['https://github.com/daminz97/Flick', 'Flick'],
      ['https://github.com/daminz97/HCIProject', 'GameLog v1'],
      ['./resource/soval/index.html', 'Auto Quote'],
      ['https://github.com/daminz97/MobileScanner', 'DocScanner'],
      ['./resource/phdprogram/index.html', 'Ph.D. Admission Visualization'],
    ]);
  }, []);



  return (
    <div className='flex-wrapper'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container mx-auto flex items-center justify-between'>
          <a href='./index.html' className='navbar-brand flex items-center'>
            <img src={logo} alt='logo' id='logo' />
          </a>
          <div className='flex space-x-4'>
            <a href='' className='nav-link active'>Home</a>
            <a href={cv} className='nav-link'>CV</a>
          </div>
        </div>
      </nav>

      <div className='container mx-auto p-4'>
        <div className='flex flex-col md:flex-row mb-8'>
          <div className='md:w-1/3 mb-4 md:mb-0'>
            <img src={headshot} alt='Damin Zhang' className='w-full max-w-xs mx-auto' id='headshot' />
          </div>
          <div className='md:w-2/3 md:pl-8'>
            <h1 className='text-3xl font-bold mb-4'>Damin Zhang (张达敏)</h1>
            <p className='mb-2'>Ph.D. Candidate @ <a href='https://engineering.purdue.edu/AKRANLU' target='_blank' rel='noopener noreferrer'>AKRaNLU Lab</a></p>
            <p className='mb-2'>Research Assistant @ Purdue University</p>
            <p className='mb-2'>Member @ <a href='https://www.iculture.tsinghua.edu.cn/xmtlm/xmtlmjz/xmtlmcy/3.htm' target='_blank' rel='noopener noreferrer'>THU-DataPi</a></p>
            <p className='mb-4'>Email: zhan4060 [at] purdue [dot] edu</p>
            <h2 className='text-xl font-semibold mb-2'>Research Interests</h2>
            <ul className='list-disc list-inside mb-4'>
              <li>Knowledge Representation</li>
              <li>Conversation AI</li>
            </ul>
            <div className='flex space-x-4' id='icons'>
              <a href='https://www.linkedin.com/in/damin-zhang-2808aa134/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <Linkedin />
              </a>
              <a href='https://scholar.google.com/citations?user=VAcSwQgAAAAJ&hl=en&authuser=2' target='_blank' rel='noopener noreferrer' aria-label='Google Scholar'>
                <GraduationCap />
              </a>
              <a href='https://github.com/daminz97' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                <Github />
              </a>
            </div>
          </div>
        </div>

        <div className='rounded-lg border bg-card text-card-foreground shadow-sm mb-8'>
          <div className='p-6 pt-0'>
            <h2 className='text-2xl font-semibold mb-4 header'>Recent News</h2>
            <ul>
              {updates.map((update, index) => (
                <li key={index} className='font-weight-normal mb-2'>{update}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='rounded-lg border bg-card text-card-foreground shadow-sm mb-8'>
          <div className='p-6 pt-0'>
            <h2 className='text-2xl font-semibold mb-4 header'>Publications</h2>
            <ul>
              {papers.map((paper, index) => (
                <li key={index} className='font-weight-normal mb-2'>
                  <a href={paper[0]} target='_blank' rel='noopener noreferrer'>{paper[1]}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='rounded-lg border bg-card text-card-foreground shadow-sm mb-8'>
          <div className='p-6 pt-0'>
            <h2 className='text-2xl font-semibold mb-4 header'>Projects</h2>
            <ul>
              {projects.map((project, index) => (
                <li key={index} className='font-weight-normal mb-2'>
                  <a href={project[0]} target='_blank' rel='noopener noreferrer'>{project[1]}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='rounded-lg border bg-card text-card-foreground shadow-sm mb-8'>
          <div className='p-6 pt-0'>
            <h2 className='text-2xl font-semibold mb-4 header'>Education</h2>
            <ul>
              {educations.map((education, index) => (
                <li key={index} className='font-weight-normal mb-2'>{education}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className='text-center text-sm text-gray-600 mt-8' id='copyright'>
        Last updated on Aug. 2024
      </footer>
    </div>
  );
};

export default App;
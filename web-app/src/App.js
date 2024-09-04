import { Linkedin, GraduationCap, Github } from 'lucide-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './general.css';
import './home.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import logo from './pics/tab-icon.png';
import headshot from './pics/website-bgp.jpg';
import resume from './resource/DaminZhangResume.pdf';

function NavBar() {
  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href=''>
          <Image src={logo} width={30} height={30} roundedCircle />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href=''>Home</Nav.Link>
            {/* <Nav.Link href='./translation.html'>DataPi-Work</Nav.Link> */}
            <Nav.Link href={resume} target='_blank'>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function Footer({time}) {
  return (
    <Container className='mt-3'>
      <Row>
        <Col lg={12} className='pr-2' id='copyright'>
          <span>Last updated on {time}.</span>
        </Col>
      </Row>
    </Container>
  )
}

function HeadShotCol() {
  return (
    <Col lg={6} className='m-auto' width='70%'>
      <Image src={headshot} id='headshot' alt='Damin Zhang' rounded />
    </Col>
  )
}

function ProfileCol() {
  return (
    <Col lg={6} className='mt-3'>
      <h3 className="title font-weight-bold">Damin Zhang (张达敏)</h3>
      <p className="font-weight-normal">PhD Student @ <a href="https://engineering.purdue.edu/AKRANLU/" target="_blank" rel="noreferrer">AKRaNLU Lab</a></p>
      <p className="font-weight-normal">Research Assistant @ Purdue University</p>
      <p className="font-weight-normal">Research Member @ <a href="https://www.iculture.tsinghua.edu.cn/xmtlm/xmtlmjz/xmtlmcy/3.htm">THU-DataPi (数据派)</a></p>
      <p className="font-weight-normal">Email: zhan4060 [at] purdue [dot] edu</p>

      <h4 className="interest-title">Research Interests</h4>
      <ListGroup variant='flush'>
        <ListGroup.Item breakpoint={'sm'}>NL Intent</ListGroup.Item>
        <ListGroup.Item>Information Extraction</ListGroup.Item>
        <ListGroup.Item>Conversation</ListGroup.Item>
      </ListGroup>
      <br />
      <ListGroup horizontal>
        <ListGroup.Item>
          <a className="footer-icon" title="linkedin" href="https://www.linkedin.com/in/damin-zhang-2808aa134/" target="_blank" rel="noreferrer"><Linkedin /></a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="footer-icon" title="gscholar" href="https://scholar.google.com/citations?user=VAcSwQgAAAAJ&hl=en&authuser=2" target="_blank" rel="noreferrer"><GraduationCap /></a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="footer-icon" title="Github" href="https://github.com/daminz97" target="_blank" rel="noreferrer"><Github /></a>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  )
}


function ProfileRow() {
  return (
    <Container>
      <Row>
        <HeadShotCol />
        <ProfileCol />
      </Row>
    </Container>
  )
}


function Section({title, items}) {
  var hasLink = false;

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <h3 className='font-weight-bold header-content'>
            <strong><span className='header'>{title}</span></strong>
          </h3></Col>
        <Col lg={9}>
          <ListGroup variant='flush'>
            {items.map((item, index) => (
              hasLink = item[0] !== ''
                ? <ListGroup.Item><a href={item[0]}>{item[1]}</a></ListGroup.Item>
                : <ListGroup.Item>{item[1]}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}


function App() {
  const updates = [
    ['', 'August 2024: Internship at WAM as a Softare Engineer'],
    ['', 'June 2022: Designed and developed ConvIE at Happy the Movement, a startup in health industry'],
    ['', 'April 2022: Poster presentation at Purdue Polytechnic RIA 2022 Student Poster Symposium'],
    ['', 'March 2022: Full paper accepted at FLAIRS-35!'],
    ['', 'November 2021: Defended my thesis!'],
    ['', 'May 2021: Passed my thesis proposal defense!'],
  ];

  const educations = [
    ['', 'PhD, Natural Language Processing, Purdue University, 2022-Present'],
    ['', 'MS, Computer and Information Technology, Purdue University, 2019-2021'],
    ['', 'BS, Computer Science, University of Massachusetts Amherst, 2015-2019'],
  ]

  const papers = [
    ['', 'Generic Communication Encoding (WIP)'],
    ['', 'Taxonomy-based Checklist for Large Language Models Gender Bias Evaluation  (WIP)'],
    ['https://www.mdpi.com/2071-1050/16/7/2721', 'Is Alexa Happy or Angry? Perceptions and Attributions of Emotional Displays of Smart Technologies in Residential Homes'],
    ['https://www.amazon.science/alexa-prize/proceedings/boilerbot-a-reliable-task-oriented-chatbot-enhanced-with-large-language-models', 'BoilerBot: A reliable task-oriented chatbot enhanced with large language models'],
    ['https://arxiv.org/abs/2301.04347', 'Counteracts: Testing Stereotypical Representation in Pre-trained Language Models'],
    ['https://journals.flvc.org/FLAIRS/article/view/130642/133944', 'Examining Stereotypes in News Articles'],
  ];

  const projects = [
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
  ];
  return (
    <div>
      <NavBar />
      <Container>
        <ProfileRow />
      </Container>
      <Container className='mt-3'>
        <Section title='Recent News' items={updates} />
        <Section title='Publications' items={papers} />
        <Section title='Projects' items={projects} />
        <Section title='Education' items={educations} />
      </Container>
      <br />
      <Footer time={'09/2024'} />
    </div>
  )
}

export default App;
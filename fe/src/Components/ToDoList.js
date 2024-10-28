import React from 'react';
import { Collapse, Divider, List, Typography } from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

import '../Styles/Linkages.css'; 


const { Panel } = Collapse;
const { Text } = Typography;

const todoData = [
  {
    category: 'Aeronautics & Astronautics',
    items: [
      'Aero and Astro-dynamics',
      'Aerospace Structures',
      'Flight Mechanics',
      'Aero vehicle Design & Operations',
      'Aeroacoustics',
      'Avionics Systems',
      'Guidance, Navigation & Controls',
      'Propulsion and Power Systems',
      'Electric Aircrafts and Electric Engines',
      'Rocket Engines and Rocket Propulsion',
      'Thermo-physics and Thermodynamics',
      'Aviation Management',
      'Space Missions, Systems and Architecture',
      'Aerospace Design Optimization',
      'Unmanned Aerial Vehicle Systems and Technologies',
      'Autonomous Aerospace Vehicles',
      'Lighter Than Air Aerospace Systems',
      'Space Exploration and Future Space Mission',
    ],
  },
  {
    category: 'Satellite Technology',
    items: [
      'Satellites Technology and Applications',
      'Electrical and Electronic Systems for Space Applications',
      'Peripheral Electronics, Data Handling and Signal Processing',
      'Communication Systems and Technologies',
      'Antennas, RF/Microwave Systems, and Propagation',
      'Space Missions, Systems and Architecture',
      'Systems Engineering and Subsystem Design',
      'Systems and Technologies for Cube-Sats',
      'Satellite Development and Manufacturing',
      'Assembly and Integration Technologies',
      'Space Operations and Ground Support',
      'Satellite Software and Autonomy',
      'Satellite Constellation Design and Management',
      'Emerging Concepts in Electrical and Electronics Engineering',
      'Cybersecurity for Space Systems',
      'Frequency Spectrum Allocation Management',
      'Satellite Technology Regulations'
    ]
  },
  {
    category: 'Information and Communication Technologies',
    items: [
      'Computer Theory and Algorithms',
      'Networking theory & Technologies',
      'Wireless Communications',
      'Knowledge Management & Decision Making',
      'Big Data and Cloud Computing',
      'Data Mining and Data Fusion',
      'Parallel and Distributed Computing',
      'Information & Data Security',
      'Cryptography',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer and Mission Vision',
      'Neural Networks',
      'Robotics and Automation',
      'Internet of Things (IoT)',
      'Smart and Safe Cities',
      'Virtual and Augmented Reality',
      'Systems & Software Engineering',
      'E-Commerce and E-Governance',
      'Information and Communication Technologies for Sustainable Development',
    ],
  },
  {
    category: 'Positioning, Navigation & Timing',
  items: [
    'Navigation, Estimation and Tracking Methods',
    'Ranging and Positioning Techniques',
    'Aircraft and Spacecraft Navigation systems',
    'Interplanetary Missions and Navigation',
    'Navigation in Urban Environment',
    'Guidance, Navigation and Controls',
    'Control Theory, Analysis and Design',
    'Control System Design and Implementation',
    'Command and Control Systems for Space',
    'Sensors and Embedded System Design',
    'Autonomous Control and Unmanned Systems',
    'Global Navigation Satellite Systems (GNSS)',
    'Position Determination Using GNSS',
    'Software and Hardware GNSS Receivers',
    'GNSS Performance and Integrity Measures',
    'GNSS Augmentation Systems',
    'Applications of GNSS (Space Weather, Aviation etc.)',
    'Interference and Spoofing Technologies and Countermeasures',
    'Inertial and Integrated Navigation Systems',
    'Navigation Sensors Fusion',
    'Precision Agriculture',
    'Smart Transportation Systems',
    'Applications of Precise Timing',
    'Aerospace Robotics and Unmanned/Autonomous Systems'
  ]
  },
  {
    category: 'Geographic Information Science',
    items: [
      'Earth Observation, Atmosphere and Environment',
      'Cartography & Geo-visualization',
      'Topography, Geology & Geomorphology',
      'Spatial & Spatiotemporal Modeling and Surveying',
      'Spatial Data Structures & Algorithms',
      'Spatial Decision Support System',
      'Image Processing and Information Extraction',
      'GIS Innovations for Sustainable Development',
      'Web GIS, Open-Source GIS and Geospatial Web Services',
      'Climate Changes and Global Environment',
      'Urban Analytics & Smart Cities',
      'Big Data, IOT and Machine Learning in Geoinformatics',
      'Advances in Geoinformatics',
      'Geostatistics',
      'Applications of Geoinformatics'
    ]
  },
  {
    category: 'Remote Sensing and Photogrammetry',
    items: [
      'Remote Sensing Instruments, Sensors and Systems',
      'Image and Signal Processing for Remote Sensing',
      'Data Acquisition and Information Extraction',
      'Optical and Radar Remote Sensing',
      'Multispectral / Hyperspectral Remote Sensing',
      'Geometric Enhancement and Spatial Filtering and Masking Techniques',
      'Airborne Sensors and Systems for Remote Sensing',
      'Advancements in Remote Sensing',
      'Remote Sensing of Clouds, Atmosphere and Oceans',
      'Photogrammetry and Its Applications',
      'Photogrammetric Procedures, Instruments and Sensors',
      'Applications and Advancements in Photogrammetry',
      'Coordinate Systems in Photogrammetry'
    ]
  },
  {
    category: 'Environment & Climate Science',
    items: [
      'Environmental Chemistry',
      'Biodiversity, Conservation & Management',
      'Biomass & Carbon Cycle',
      'Pollution Monitoring and Management',
      'Climate Change Monitoring and Mitigation',
      'Disaster Risk Reduction',
      'Waste Management',
      'Water Resource Dynamics',
      'Meteorology, Precipitation & Clouds',
      'Alternate Energy Methods',
      'Green Initiative and Products',
      'Consumption, Human Needs, and Climate Change',
      'Climate Change and Sustainable Development'
    ]
  },
  {
    category: 'Applied Physics and Mathematics',
    items: [
      'Applied Physics (Modeling, Analysis and Computation)',
      'General Physics and Physics of Matter',
      'Applied Solid State Physics',
      'Condensed Matter and Statistical Physics',
      'Computational Physics',
      'Applied Nuclear Physics',
      'Modern Physics',
      'Nano-sciences and Technologies',
      'Biophysics and Biophysical Chemistry',
      'Materials Science & Engineering',
      'Nanotechnologies, Components and Instrumentation',
      'Algebra, Number theory and Analysis',
      'Applied Computing and Information Systems',
      'Applied Modeling and Simulation',
      'Numerical Analysis',
      'Mathematical and Applied Statistics',
      'Probability and Stochastic Applications',
      'Quantitative Methods, and Statistical Modeling',
      'Differential and Partial Differential Equations',
      'Fluid Mechanics',
      'Heat Transfer',
      'Solid and Structural Mechanics'
    ]
  },
  {
    category: 'Astronomy, Astrophysics & Astrobiology',
    items: [
      'Galaxies and Star Clusters',
      'Variable Stars & Exoplanets',
      'Black holes, White Dwarfs & Neutron Stars',
      'Planets, Ionospheres, and Magnetospheres',
      'Solar System',
      'Cosmology',
      'Celestial Mechanics',
      'Gravitational, Computational, Observational and Theoretical Astrophysics',
      'Solar and Stellar Physics',
      'Plasma Astrophysics',
      'Cosmic Rays and High Energy Astronomy',
      'Dark Matter and Dark Energy',
      'Interstellar Matter',
      'Artificial Intelligence and Data Mining in Astronomy',
      'Scientific Instruments to Astronomical Instruments: Tools & Techniques',
      'Astrostatistics',
      'Microgravity Science & Applications',
      'Astrogeology',
      'Origin and Evolution of Life in Universe',
      'Space Life and Habitability',
      'Life Beyond Earth',
      'New Technologies for Life Detection',
      'Future of Life',
      'Bioinformatics and Biomedical Engineering'
    ]
  },
  {
    category: 'Space Law, Management & Outreach',
    items: [
      'International Space Laws, Policies and Treaties',
      'National Space Laws and Regulatory Issues',
      'Space Policy Conflicts and Challenges',
      'International Cooperation for Space',
      'Space Security, Stability and Sustainability',
      'Peaceful Uses of Space',
      'Space for All: Space Education and Awareness',
      'Space Technology Planning, Management and Infusion',
      'Space Governance and Project Management',
      'Space Technology Applications and Economic Benefits',
      'STEAM (Science, Technology, Engineering, Arts & Mathematics) for Space',
      'Technology Transfer and Spinoffs',
      'Industry and Academia Collaborations',
      'Space Commercialization: Space Tourism and Recreation',
      'Enabling the Future: Space Capacity Building',
      'Space Culture: Innovative Approaches for Public Engagement in Space'
    ]
  }

];

const ToDoList = () => {
  return (
    <div className="todo-list-container">
    <Typography.Title style={{ fontSize: '48px', fontWeight: 'bold' }}>Conference Themes</Typography.Title>
    <Divider className="ncgsa-divider" />
    <Collapse
      accordion
      bordered={false}
      defaultActiveKey={['1']}
      ghost
      expandIcon={({ isActive }) =>
        isActive ? <MinusSquareOutlined style={{ fontSize: '24px', color: '#28a745' }} /> : <PlusSquareOutlined style={{ fontSize: '24px', color: '#28a745' }} />
      }
    >
      {todoData.map((todo, index) => (
        <Panel
          header={<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#28a745' }}>{todo.category}</Text>}
          key={index + 1}
        >
          <List
            dataSource={todo.items}
            renderItem={(item, idx) => (
              <List.Item key={idx} style={{ padding: '10px 0' }}>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Panel>
      ))}
    </Collapse>
  </div>
  );
};

export default ToDoList;

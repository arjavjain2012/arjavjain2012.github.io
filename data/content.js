/*
  ============================================================================
  SITE CONTENT — this is the ONLY file you should need to edit day-to-day.
  ============================================================================
  Everything on the website (text, stats, projects, links) is read from the
  SITE_CONTENT object below. The page structure/styling lives in index.html
  and assets/css/style.css and you shouldn't need to touch those.

  HOW TO EDIT SAFELY:
  - This looks like JSON but is a JavaScript object, so it's a little more
    forgiving: you don't strictly need quotes around field names, but it's
    safest to just copy the pattern that's already there.
  - Every string value must stay inside matching quotes " " or ' '.
  - Every item in a list [ ... ] needs a comma after it EXCEPT the last one.
  - If you break the file, the site will go blank — open the browser
    console (F12) to see the error line, or just undo your last edit.
  - Anything marked "— add value —" or isPlaceholder: true is a spot where
    YOU should bring the real number/link once you have it. See
    EDITING_GUIDE.md in the project root for a full walkthrough.
  ============================================================================
*/

window.SITE_CONTENT = {

  meta: {
    name: "Arjav Jain",
    role: "Vehicle Performance Engineer",
    tagline: "Building race cars from tube to track — vehicle dynamics, structures, thermal & electronics.",
    location: "Urbana-Champaign, IL, USA",
    // Motorsport hiring (F1/WEC) filters hard on work-authorization and
    // relocation flexibility — say this plainly so recruiters don't have to guess.
    workAuthorization: "Open to relocation across the EU/UK for motorsport roles — add current visa/sponsorship status",
    email: "arjavj2@illinois.edu",
    phone: "+1 217-800-2530",
    linkedin: "https://www.linkedin.com/in/arjavjain20",
    github: "— add your GitHub profile URL —",
    // Drop your master resume PDF in the /resume folder and point to it here.
    resumeFile: "resume/Arjav_Jain_Resume.pdf",
    profileImage: "assets/img/placeholder-profile.svg"
  },

  hero: {
    kicker: "Vehicle Dynamics · Motorsport Engineering",
    stats: [
      { value: "3", label: "Formula Student seasons, 2 countries" },
      { value: "1755", unit: "N·m/°", label: "chassis torsional stiffness delivered" },
      { value: "98%", label: "battery SOC/SOH estimation accuracy" },
      { value: "36%", label: "EV range gain shipped at JLR" }
    ]
  },

  about: {
    paragraphs: [
      "I'm a mechanical engineer who builds and races cars — three Formula Student seasons across two countries, plus two years as a graduate powertrain engineer at Jaguar Land Rover. I work across the full vehicle stack: lap-time simulation and tire/suspension modeling, composite structures and FEA, battery/thermal systems, and the electronics that tie it together.",
      "Currently finishing an MS in Mechanical Engineering at UIUC (4.0/4.0) while running battery-state estimation and suspension modeling for Illini Electric Motorsports' FSAE car. I'm looking for a vehicle dynamics, performance, or systems engineering role in motorsport — F1 or WEC, primarily in the EU/UK — and I'm equally at home in EV/automotive engineering roles more broadly."
    ]
  },

  competencies: [
    {
      title: "Vehicle Dynamics & Simulation",
      summary: "Lap-time simulation, tire modeling, suspension kinematics, and full-vehicle handling models used to make setup and design decisions.",
      tools: ["MATLAB/Simulink", "CarMaker", "VI-grade (SuspensionGen)", "Simscape", "Python"]
    },
    {
      title: "Structures & Composites",
      summary: "CFRP monocoque and chassis design, FEA (static/fatigue/crash), topology optimization, and rapid tooling from concept to fabricated part.",
      tools: ["CATIA 3DEXPERIENCE", "ANSYS Workbench", "Abaqus", "NASTRAN", "NX / SOLIDWORKS"]
    },
    {
      title: "Thermal & Energy Systems",
      summary: "Battery pack design and thermal management, cold-plate design for power electronics, and energy system sizing for EV and hybrid architectures.",
      tools: ["Ansys Fluent", "Star-CCM+", "NTU/effectiveness methods", "Battery pack design"]
    },
    {
      title: "Electronics & Controls",
      summary: "Battery state estimation, power electronics, and the control loops (traction control, ABS, actuator control) that connect sensing to actuation.",
      tools: ["Altium", "LTSpice/PSpice", "Kalman filtering", "PID / H-bridge control", "Oscilloscope / board-level test"]
    }
  ],

  filters: {
    disciplines: [
      "Vehicle Dynamics & Simulation",
      "Structures & Composites",
      "Thermal & Energy Systems",
      "Electronics & Controls",
      "Combustion & Powertrain Research"
    ],
    contexts: ["Formula Student", "Industry", "Research"]
  },

  projects: [
    {
      id: "iem26",
      title: "IEM'26 — Formula Student Electric Vehicle",
      org: "Illini Electric Motorsports, UofI",
      context: "Formula Student",
      period: "Sep 2025 – Present",
      status: "In progress",
      image: "assets/img/placeholder-project.svg",
      tags: ["Vehicle Dynamics & Simulation", "Electronics & Controls"],
      summary: "Battery state estimation and suspension modeling for UIUC's current FSAE Electric build.",
      bullets: [
        "Developing a sigma-point Kalman filter to estimate SOC and SOH of the Li-ion pack in real time, validated to 98% accuracy against reference cycles.",
        "Modeling the roll-heave decoupled suspension in VI-SuspensionGen to inform kinematic setup ahead of build.",
        "Building a custom dynamometer rig to emulate endurance-event loading on the 35 kW PMSM motors and inverters."
      ],
      metrics: [
        { label: "SOC/SOH accuracy", value: "98%" },
        { label: "Motor power", value: "35 kW PMSM" },
        { label: "Competition result", value: "", isPlaceholder: true }
      ],
      links: [
        { label: "Team site", url: "— add Illini Electric Motorsports link —", isPlaceholder: true },
        { label: "Project write-up / demo video", url: "— add link —", isPlaceholder: true }
      ]
    },
    {
      id: "rmse23",
      title: "RMSE'23 — Formula Student Electric Vehicle",
      org: "IIT Roorkee Motorsports, IITR",
      context: "Formula Student",
      period: "Jan 2022 – May 2023",
      status: "Competed",
      image: "assets/img/placeholder-project.svg",
      tags: ["Vehicle Dynamics & Simulation", "Structures & Composites", "Thermal & Energy Systems", "Electronics & Controls"],
      summary: "Set season strategy and delivered structures, thermal, aero, and vehicle-dynamics work across the whole car; tool for cost-event scoring took the team to 2nd place at FSUK.",
      bullets: [
        "Set season goals around reliability, competitiveness, and manufacturing efficiency, and streamlined the design process across every subsystem.",
        "Designed, fabricated, and installed CFRP structural components via wet layup, cutting total mass by 10%.",
        "Revised the tubular chassis to a 49F-51R weight distribution and 1755 N·m/° torsional stiffness, and ran FEA for crash-load cases.",
        "Built a thermal model for the radiator and water-cooled motor/inverter loop using the NTU-effectiveness method.",
        "Automated CFD runs and post-processing to generate aero maps, balancing aero load against vehicle dynamics.",
        "Applied generative design to additive-manufactured motor/diff mounts and topology-optimized CNC pedals and wing mount for fatigue.",
        "Designed schematics and PCBs for the car's LV systems — power distribution, accelerator/brake plausibility, and DAQ.",
        "Refined vehicle architecture and ran CarMaker sensitivity studies, cutting overall lap time by 12%.",
        "Built a DBOM/CBOM costing tool that took the team to 2nd place in the FSUK'23 Cost & Manufacturing event."
      ],
      metrics: [
        { label: "Torsional stiffness", value: "1755 N·m/°" },
        { label: "Mass reduction", value: "10%" },
        { label: "Lap time improvement", value: "12%" },
        { label: "FSUK'23 Cost event", value: "2nd place" },
        { label: "Overall competition finish", value: "", isPlaceholder: true }
      ],
      links: [
        { label: "Team site", url: "— add IIT Roorkee Motorsports link —", isPlaceholder: true },
        { label: "Technical report / photos", url: "— add link —", isPlaceholder: true }
      ]
    },
    {
      id: "rmse21",
      title: "RMSE'21 — Formula Student Electric Vehicle",
      org: "IIT Roorkee Motorsports, IITR",
      context: "Formula Student",
      period: "Jan 2021 – Dec 2021",
      status: "Competed",
      image: "assets/img/placeholder-project.svg",
      tags: ["Vehicle Dynamics & Simulation", "Structures & Composites", "Thermal & Energy Systems"],
      summary: "Powertrain selection, tire/lap-time modeling, aero, battery pack, and suspension FEA for the team's second EV.",
      bullets: [
        "Selected the 80 kW powertrain (motor/diff/tires) and revised gear ratios using tire-slip models, gaining 12% torque.",
        "Built a quasi-steady-state point-mass lap-time simulation, validated to within 10% accuracy, to drive sensitivity studies.",
        "Modeled tires with the Pacejka Magic Formula, calibrated against FSAE Tire Test Consortium data.",
        "Led design of front and rear wings using CFD, validated with tuft testing, for a 7% lap-time reduction.",
        "Optimized an active air-cooled battery thermal management system to dissipate 1.4 kW from a 128s6p pack of 18650 NMC cells.",
        "Designed the enclosure, mounting brackets, and cell holders for the 538V/18Ah pack, and sized it with a well-to-wheel model.",
        "Simulated ABS and traction control using a longitudinal tire-slip model, contributing a further 7% lap-time reduction.",
        "Optimized structural components and fixtures for the suspension, steering, and powertrain subsystems using FEA.",
        "Customized ergonomic rigs to improve driver posture and visibility while keeping the pedal box within FSAE rules."
      ],
      metrics: [
        { label: "Torque gain", value: "12%" },
        { label: "Lap-time reduction (aero + controls)", value: "14%" },
        { label: "BTMS heat dissipation", value: "1.4 kW" },
        { label: "Competition result", value: "", isPlaceholder: true }
      ],
      links: [
        { label: "Technical report / photos", url: "— add link —", isPlaceholder: true }
      ]
    },
    {
      id: "jlr",
      title: "Range-Extended EV & Power Electronics Cooling",
      org: "Jaguar Land Rover TBSI, Bengaluru — Graduate EV-Powertrain Engineer Trainee",
      context: "Industry",
      period: "Aug 2023 – Jul 2025",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Thermal & Energy Systems", "Electronics & Controls", "Structures & Composites"],
      summary: "Two-year graduate program: led a concept carbon-negative range extender and delivered thermal/electronics design for inverter and contactor hardware.",
      bullets: [
        "Initiated and led technical work on a concept range-extended EV powered by fugitive methane, targeting carbon-negative net emissions.",
        "Proposed the cryogenic CH4 storage/delivery system and a road-load-based battery charge-depletion strategy for the APU, delivering 36% more range at 12% lower weight.",
        "Designed, simulated, and rig-tested tubed and pin-fin cold-plate geometries to cool an in-house inverter and solid-state contactor.",
        "Designed voltage/current/temperature sensing and closed-loop pre-charge and I²t e-fuse protection; tuned a 3-winding 4-switch buck-boost converter using Bode analysis.",
        "Designed stack-up tolerancing and integrated a coreless current sensor into the contactor package, cutting volume by 40%.",
        "Built the test plans and ran board-level, integrated, and thermal testing for the sensing and protection hardware.",
        "Won 1st runner-up at JLR's Graduate Innovation Challenge, a year-long global program with 86 teams and 442 graduates."
      ],
      metrics: [
        { label: "Range gain", value: "36%" },
        { label: "Weight reduction", value: "12%" },
        { label: "Contactor volume reduction", value: "40%" },
        { label: "JLR Graduate Innovation Challenge", value: "1st runner-up / 86 teams" }
      ],
      links: [
        { label: "Patent / publication status", url: "— add link if applicable —", isPlaceholder: true }
      ]
    },
    {
      id: "log9",
      title: "RapidX — Fast-Charging Battery Architecture",
      org: "Log9 Materials Scientific, Bengaluru — Industrial Design Intern",
      context: "Industry",
      period: "May 2022 – Jul 2022",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Thermal & Energy Systems", "Structures & Composites"],
      summary: "Mechanical packaging for a 368V/40Ah LTO fast-charge battery architecture aimed at retrofitting India's small commercial EV fleet.",
      bullets: [
        "Contributed to RapidX, a fast-charging LTO battery architecture for 2W/3W/4W small commercial vehicles.",
        "Produced Cu-101 busbars, IP6X-rated enclosures, and cell packaging for the 368V/40Ah pack, designed for retrofit into the TATA Ace.",
        "Engineered sheet-metal brackets, rubber dampeners, and waterproof foam pads, and drafted 2D drawings for prototyping.",
        "Explored a portable PCM-based thermal management concept using paraffin wax to buffer 9 kJ of heat during fast charging."
      ],
      metrics: [
        { label: "Pack spec", value: "368V / 40Ah" },
        { label: "PCM heat buffered", value: "9 kJ" },
        { label: "Enclosure rating", value: "IP6X" }
      ],
      links: []
    },
    {
      id: "dorle",
      title: "Bespoke 14-DOF Full-Vehicle Analytical Model",
      org: "Dorle Controls LLC, Michigan, USA",
      context: "Industry",
      period: "Jan 2022 – May 2022",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Vehicle Dynamics & Simulation", "Electronics & Controls"],
      summary: "Built a full-vehicle handling model from scratch and used it to validate racing-line optimization and control-system logic.",
      bullets: [
        "Built a 14-DOF full-vehicle model from the ground up in Simulink/Simscape to analyze handling performance.",
        "Implemented racing-line optimization for a specific circuit in MATLAB using the minimum-curvature method.",
        "Constructed and validated models for advanced control systems, including traction control and ABS."
      ],
      metrics: [
        { label: "Model fidelity", value: "14-DOF" },
        { label: "Optimization method", value: "Minimum curvature" }
      ],
      links: []
    },
    {
      id: "thesis",
      title: "End-Gas Auto-Ignition in n-Heptane Combustion",
      org: "Bachelor's Thesis, Mechanical & Industrial Engineering Dept., IITR",
      context: "Research",
      period: "Jul 2022 – May 2023",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Combustion & Powertrain Research"],
      summary: "Direct numerical simulation of engine knock, examining how pressure waves interact with auto-ignition in hydrocarbon fuels.",
      bullets: [
        "Ran 2D lab-scale DNS of knocking in a stoichiometric n-C7H16/O2/Ar mixture under engine-like conditions using PeleC, adaptive mesh refinement, and MACKS.",
        "Ran 1D DNS in Cantera to resolve the interaction between flame propagation, auto-ignition, and pressure waves.",
        "Formulated a method to analyze how pressure waves affect knocking behavior in hydrocarbon fuels at high temperature.",
        "Submitted findings as a conference paper to the 41st International Symposium on Combustion (ISOC'26), Kyoto."
      ],
      metrics: [
        { label: "Simulation type", value: "2D/1D DNS" },
        { label: "Conference submission", value: "41st ISOC'26, Kyoto" }
      ],
      links: [
        { label: "Paper / preprint", url: "— add link once available —", isPlaceholder: true }
      ]
    },
    {
      id: "combustion-lab",
      title: "OH Absorption & Emissions Spectroscopy",
      org: "Combustion Diagnostics Lab, UofI",
      context: "Research",
      period: "Sep 2025 – Present",
      status: "In progress",
      image: "assets/img/placeholder-project.svg",
      tags: ["Combustion & Powertrain Research"],
      summary: "Laser/optical diagnostics to map temperature and species concentration inside small flames.",
      bullets: [
        "Ran UV broadband absorption spectroscopy to estimate temperature and OH radical mass fraction across candle, butane, sterno, propane, and hexamine flames.",
        "Applied a line-of-sight method to spatially resolve the temperature distribution within each flame."
      ],
      metrics: [
        { label: "Flames characterized", value: "5" }
      ],
      links: []
    },
    {
      id: "magnesium-wheels",
      title: "Rapid Tooling of Cast Magnesium Wheels for an FSAE Vehicle",
      org: "IIT Roorkee",
      context: "Research",
      period: "2022 – 2023",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Structures & Composites"],
      summary: "Lightweighting a cast wheel and proving out rapid tooling to cut cost and lead time for low-volume casting.",
      bullets: [
        "Compared candidate wheel geometries with FEA and a Pugh matrix, landing on a design with 25% lower weight.",
        "Used SLS 3D-printed tooling in place of machined tooling, cutting tooling time by 54% and cost by 50%.",
        "Cast the wheel in magnesium via sand casting and verified it with CMM and 3D-scanning inspection."
      ],
      metrics: [
        { label: "Weight reduction", value: "25%" },
        { label: "Tooling time saved", value: "54%" },
        { label: "Tooling cost saved", value: "50%" }
      ],
      links: []
    }
  ],

  experience: [
    {
      org: "Jaguar Land Rover TBSI Pvt. Ltd.",
      role: "Graduate EV-Powertrain Engineer Trainee, Sustainability Research Ecosystem",
      location: "Bengaluru, India",
      period: "Aug 2023 – Jul 2025",
      bullets: [
        "Led technical work on a concept carbon-negative, range-extended EV powered by fugitive methane.",
        "Delivered thermal (cold-plate) and electronics (sensing, protection, power conversion) design for an in-house inverter and solid-state contactor.",
        "1st runner-up, JLR Graduate Innovation Challenge — 86 teams, 442 graduates, global."
      ],
      projectRef: "jlr"
    },
    {
      org: "Dorle Controls LLC",
      role: "Vehicle Dynamics & Controls Intern",
      location: "Michigan, USA",
      period: "Jan 2022 – May 2022",
      bullets: [
        "Built a 14-DOF full-vehicle handling model from scratch in Simulink/Simscape.",
        "Implemented racing-line optimization and validated traction-control/ABS logic against it."
      ],
      projectRef: "dorle"
    },
    {
      org: "Log9 Materials Scientific Pvt. Ltd.",
      role: "Industrial Design Intern, RapidX",
      location: "Bengaluru, India",
      period: "May 2022 – Jul 2022",
      bullets: [
        "Delivered mechanical packaging (busbars, enclosures, brackets) for a 368V/40Ah fast-charge LTO battery architecture."
      ],
      projectRef: "log9"
    }
  ],

  education: [
    {
      school: "University of Illinois at Urbana-Champaign",
      degree: "M.S., Mechanical Engineering",
      score: "GPA 4.0 / 4.0",
      period: "Expected May 2027",
      notes: ["Vehicle dynamics and battery/thermal systems coursework alongside FSAE research."]
    },
    {
      school: "Indian Institute of Technology Roorkee",
      degree: "B.Tech., Mechanical Engineering",
      score: "CGPA 8.685 / 10.0",
      period: "Jul 2023",
      notes: [
        "Coursework: Vehicle Dynamics, I.C. Engine & Combustion Fundamentals, Model-Based Automotive Systems Engineering, Mechatronics, Automatic Control, Power Electronics Design, FEA, Design of Composites, Machine Design, Applied CFD, Fluid Machinery, DFM/DFA/GD&T, Concurrent Engineering."
      ]
    }
  ],

  awards: [
    { title: "J.N. Tata & K.C. Mahindra Endowments", org: "for postgraduate study abroad — among top 4% of Indian applicants", date: "Fall 2025" },
    { title: "1st Runner-Up, JLR Graduate Innovation Challenge", org: "86 teams, 442 graduates, global", date: "2024" },
    { title: "2nd Place, Cost & Manufacturing Event, FSUK'23", org: "Formula Student UK", date: "2023" },
    { title: "Gold Medal, Inter IIT Tech Meet 10.0", org: "Automotive problem statement set by JLR", date: "Fall 2022" },
    { title: "Gold Medal, Inter IIT Tech Meet 9.0", org: "Automotive problem statement set by Bosch", date: "Fall 2021" },
    { title: "Chanakya UG Fellowship", org: "Research grant — E-bicycle for last-mile food delivery", date: "Spring 2022" }
  ],

  skills: [
    { category: "CAD & Simulation", items: ["CATIA 3DEXPERIENCE", "PTC Creo", "SOLIDWORKS", "Siemens NX", "Autodesk Fusion", "ANSYS Workbench", "Abaqus", "NASTRAN", "Ansys Fluent", "Star-CCM+"] },
    { category: "Vehicle & Controls", items: ["MATLAB/Simulink", "Simscape", "CarMaker", "VI-grade", "Pacejka tire modeling"] },
    { category: "Programming", items: ["C", "C++", "Python"] },
    { category: "Electronics", items: ["Altium", "LTSpice", "PSpice", "Oscilloscope / board-level test"] },
    { category: "Manufacturing", items: ["3-axis CNC", "FDM / SLA / SLS", "Sand casting", "Composite wet layup", "CMM & 3D scanning", "Laser diagnostics"] }
  ],

  contact: {
    heading: "Let's talk",
    body: "Open to vehicle dynamics, performance, and systems engineering roles in motorsport (F1/WEC, primarily EU/UK) and in automotive/EV engineering more broadly."
  }
};

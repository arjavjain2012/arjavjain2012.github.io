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
  - Projects and experience are listed most-recent-first by start date —
    keep new entries sorted that way when you add one.
  ============================================================================
*/

window.SITE_CONTENT = {

  meta: {
    name: "Arjav Jain",
    role: "Master's in Mechanical Engineering",
    location: "Urbana-Champaign, IL, USA",
    // Motorsport hiring (F1/WEC) filters hard on work-authorization and
    // relocation flexibility — say this plainly so recruiters don't have to guess.
    workAuthorization: "Open to relocation",
    email: "arjavj2@illinois.edu",
    phone: "+1 217-800-2530",
    linkedin: "https://www.linkedin.com/in/arjavjain20",
    github: "— add your GitHub profile URL —",
    // Drop your master resume PDF in the /resume folder and point to it here.
    resumeFile: "resume/Arjav_Jain_Resume.pdf",
    profileImage: "assets/img/placeholder-profile.svg"
  },

  hero: {
    hook: "I design multi-physics hardware that keeps every constraint in balance. Five Formula Student seasons, two years at JLR and a summer at Tesla taught me performance lives in that balance. Every design since has been faster than the last.",
    stats: [
      { value: "3", label: "Formula Student seasons, 2 countries" },
      { value: "1755", unit: "N·m/°", label: "chassis torsional stiffness delivered" },
      { value: "98%", label: "battery SOC/SOH estimation accuracy" },
      { value: "36%", label: "EV range gain shipped at JLR" }
    ]
  },

  about: {
    paragraphs: [
      "I'm a mechanical engineer who builds and races cars — three Formula Student seasons across two countries, two years as a graduate powertrain engineer at Jaguar Land Rover, and a recent stint at Tesla. I work across the full systems stack: structures and FEA, thermal and energy systems, power electronics and controls, and the simulation that ties them together.",
      "I've also run the engineering side of a race team: as Mechanical Head and Powertrain & Braking Head at IIT Roorkee Motorsports, I led 50+ engineers across 8 sub-divisions on a ₹35L (~$42K) annual build budget — season goals, technical direction, and delivery, not just my own subsystem.",
      "That range isn't limited to cars. My current Master's thesis applies the same systems-level thinking to power and thermal co-design for ultra-high-density data centers, and at Tesla I was root-causing thermal failures and building custom test infrastructure for grid-scale energy storage. I'd rather be useful across a whole program than narrowly specialized in one corner of it.",
      "Currently finishing an MS in Mechanical Engineering at UIUC (4.0/4.0). I'm looking for a mechanical or systems engineering role — motorsport (F1/WEC, primarily EU/UK) is the target, but I'm equally suited to EV, energy, or aerospace-adjacent engineering more broadly."
    ]
  },

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

  // Shown side-by-side in the Thesis & Publications section, most recent first.
  // `publications` entries are placeholders until real citation details/links
  // are supplied — isPlaceholder rows render in the dashed "add" style.
  theses: [
    {
      id: "ms-thesis",
      level: "Master's Thesis",
      title: "Holistic Rack-to-Processor Power & Thermal Co-Design for Ultra-High-Density Data Centers Using Dynamic System-Level Modeling",
      org: "Energy Transport Research Lab, University of Illinois Urbana-Champaign",
      period: "Sep 2025 – Present",
      status: "In progress",
      summary: "Dynamic system-level modeling of direct-to-chip liquid cooling and power delivery for next-generation ultra-high-density data center racks.",
      bullets: [
        "Developed and validated direct-to-chip liquid cooling achieving 5 K/kW thermal resistance, supporting 4 kW/1U and scaling to MW-level racks.",
        "Designed CTE-matched CuW microcoolers and 73 W/mK thermal interface materials, cutting warpage 3x and projecting under 10% performance degradation over 5 years.",
        "Built 2 kW high-resolution thermal test vehicles and ran uncertainty-based calorimetric validation, improving system Total Usage Effectiveness (TUE) from 1.55 to 1.01."
      ],
      metrics: [
        { label: "Thermal resistance", value: "5 K/kW" },
        { label: "Rack density supported", value: "4 kW/1U → MW-scale" },
        { label: "System TUE improvement", value: "1.55 → 1.01" }
      ],
      publications: [
        { title: "", venue: "", status: "", url: "— add publication details —", isPlaceholder: true }
      ]
    },
    {
      id: "bs-thesis",
      level: "Bachelor's Thesis",
      title: "Understanding End Gas Auto-Ignition in n-Heptane Combustion at High Temperatures using 2D-DNS",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee",
      period: "Jul 2022 – May 2023",
      status: "Complete",
      summary: "Direct numerical simulation of engine knock, examining how pressure waves interact with auto-ignition in hydrocarbon fuels.",
      bullets: [
        "Ran 2D lab-scale DNS of knocking in a stoichiometric n-C7H16/O2/Ar mixture under engine-like conditions using PeleC, adaptive mesh refinement, and MACKS.",
        "Ran 1D DNS in Cantera to resolve the interaction between flame propagation, auto-ignition mode, and pressure waves.",
        "Developed numerical solvers from scratch to analyze high-fidelity fluid dynamics and pressure-wave interactions on knocking."
      ],
      metrics: [
        { label: "Simulation type", value: "2D/1D DNS" },
        { label: "Conference submission", value: "41st ISOC'26, Kyoto" }
      ],
      publications: [
        {
          title: "Evaluating Models for Knock Timing and Autoignition Mode Prediction with 2D DNS",
          venue: "41st International Symposium on Combustion (ISOC'26), Kyoto",
          status: "Submitted",
          url: "— add paper/preprint link once available —",
          isPlaceholder: true
        }
      ]
    }
  ],

  // LAYER 3 DATA — sub-projects shown when a project card is opened (layer 2)
  // and one of its discipline tiles is clicked. Keyed by project id. Projects
  // with no entry here just show their full breakdown at layer 2. Swap each
  // `image` for a real photo/render/screenshot from assets/img/projects/.
  subprojects: {
    rmse23: [
      {
        id: "chassis", title: "Chassis & Composite Structures", image: "assets/img/placeholder-project.svg",
        highlights: ["1755 N·m/° torsional stiffness", "10% total mass reduction with CFRP"],
        bullets: [
          "Revised the tubular chassis to a 49F-51R weight distribution and 1755 N·m/° torsional stiffness, and ran FEA for crash-load cases.",
          "Designed, fabricated, and installed CFRP structural components via wet layup, cutting total mass by 10%.",
          "Applied generative design to additive-manufactured motor/diff mounts and topology-optimized CNC pedals and wing mount for fatigue."
        ],
        metrics: [{ label: "Torsional stiffness", value: "1755 N·m/°" }, { label: "Weight distribution", value: "49F-51R" }, { label: "Mass reduction", value: "10%" }]
      },
      {
        id: "dynamics", title: "Vehicle Dynamics & Lap-Time Simulation", image: "assets/img/placeholder-project.svg",
        highlights: ["12% lap-time reduction", "CarMaker sensitivity studies"],
        bullets: ["Refined vehicle architecture and ran CarMaker sensitivity studies, cutting overall lap time by 12%."],
        metrics: [{ label: "Lap-time improvement", value: "12%" }]
      },
      {
        id: "aero-thermal", title: "Aerodynamics & Cooling", image: "assets/img/placeholder-project.svg",
        highlights: ["Automated CFD aero-map pipeline", "NTU-effectiveness cooling model, 80 kW"],
        bullets: [
          "Automated CFD runs and post-processing to generate aero maps, balancing aero load against vehicle dynamics.",
          "Built a thermal model for the radiator and water-cooled loop sizing an 80 kW motor and inverter using the NTU-effectiveness method."
        ],
        metrics: [{ label: "Motor + inverter cooled", value: "80 kW" }]
      },
      {
        id: "electronics", title: "LV Electronics & Harness", image: "assets/img/placeholder-project.svg",
        highlights: ["Power, plausibility & DAQ PCBs", "12% packaging efficiency gain"],
        bullets: [
          "Designed schematics and PCBs for the car's LV systems — power distribution, accelerator/brake plausibility, and DAQ.",
          "Designed the vehicle's cable harness and cooling-pipe routing in CAD with validated bend radii, improving packaging efficiency by 12%."
        ],
        metrics: [{ label: "Packaging efficiency", value: "+12%" }]
      },
      {
        id: "strategy", title: "Strategy, Cost & Results", image: "assets/img/placeholder-project.svg",
        highlights: ["1st among Asian teams: Design + Cost events", "MathWorks Modeling Award, 1st"],
        bullets: [
          "Set season goals around reliability, competitiveness, and manufacturing efficiency, and streamlined the design process across every subsystem.",
          "Built a DBOM/CBOM costing tool that helped take the team to 1st place among all Asian teams in the FSUK'23 Cost & Manufacturing event.",
          "Placed 1st among all Asian teams in the FSUK'23 Engineering Design Event (EV category) at Silverstone.",
          "Won the MathWorks Modeling Award (1st place) at Formula Bharat '23 for the team's modeling and simulation work."
        ],
        metrics: [{ label: "FSUK'23 Cost & Manufacturing", value: "1st, Asian teams" }, { label: "FSUK'23 Engineering Design", value: "1st, Asian teams" }]
      }
    ],
    rmse21: [
      {
        id: "powertrain", title: "Powertrain, Tires & Lap-Time Model", image: "assets/img/placeholder-project.svg",
        highlights: ["12% torque gain from gear-ratio revision", "Pacejka tires calibrated to FSAE TTC data"],
        bullets: [
          "Selected the 80 kW powertrain (motor/diff/tires) and revised gear ratios using tire-slip models, gaining 12% torque.",
          "Built a quasi-steady-state point-mass lap-time simulation, validated to within 10% accuracy, to drive sensitivity studies.",
          "Modeled tires with the Pacejka Magic Formula, calibrated against FSAE Tire Test Consortium data."
        ],
        metrics: [{ label: "Torque gain", value: "12%" }, { label: "Lap-sim accuracy", value: "within 10%" }]
      },
      {
        id: "aero", title: "Front & Rear Wing Aerodynamics", image: "assets/img/placeholder-project.svg",
        highlights: ["CFD-designed wings, tuft-test validated", "7% lap-time reduction"],
        bullets: ["Led design of front and rear wings using CFD, validated with tuft testing, for a 7% lap-time reduction."],
        metrics: [{ label: "Lap-time reduction", value: "7%" }]
      },
      {
        id: "battery", title: "Battery Pack & Thermal Management", image: "assets/img/placeholder-project.svg",
        highlights: ["538V/18Ah pack enclosure & sizing", "1.2 kW air-cooled BTMS, cells < 45°C"],
        bullets: [
          "Simulated an active air-cooled battery thermal management system to dissipate 1.2 kW and hold cell temperatures below 45°C at peak 10C discharge rate.",
          "Designed the enclosure, mounting brackets, cell holders, and busbars for the 538V/18Ah pack, and sized it with a well-to-wheel model.",
          "Selected NMC cells, high-current relays, fuses, and harnesses complying with the ISO 6469-3 safety standard."
        ],
        metrics: [{ label: "Pack", value: "538V / 18Ah" }, { label: "BTMS heat dissipation", value: "1.2 kW" }]
      },
      {
        id: "controls", title: "Traction Control & ABS", image: "assets/img/placeholder-project.svg",
        highlights: ["Longitudinal tire-slip model", "7% further lap-time reduction"],
        bullets: ["Simulated ABS and traction control using a longitudinal tire-slip model, contributing a further 7% lap-time reduction."],
        metrics: [{ label: "Lap-time reduction", value: "7%" }]
      },
      {
        id: "structures", title: "Structures & Ergonomics", image: "assets/img/placeholder-project.svg",
        highlights: ["25% mass cut at FoS 1.2 (Goodman)", "Driver ergonomic rigs, FSAE-compliant pedal box"],
        bullets: [
          "Reduced mass across the suspension and drivetrain by 25% while holding a fatigue safety factor of 1.2 under the Goodman criterion.",
          "Customized ergonomic rigs to improve driver posture and visibility while keeping the pedal box within FSAE rules."
        ],
        metrics: [{ label: "Mass reduction", value: "25%" }, { label: "Fatigue safety factor", value: "1.2" }]
      },
      {
        id: "results", title: "Competition Results", image: "assets/img/placeholder-project.svg",
        highlights: ["3rd overall, Formula Bharat Virtual '22", "1st Business Plan · 3rd Engineering Design"],
        bullets: ["Placed 1st in the Business Plan event, 3rd in Engineering Design, and 3rd overall at Formula Bharat Virtual '22 (EV category)."],
        metrics: [{ label: "Overall", value: "3rd" }, { label: "Business Plan", value: "1st" }]
      }
    ],
    iem26: [
      {
        id: "soc", title: "Battery State Estimation", image: "assets/img/placeholder-project.svg",
        highlights: ["Sigma-point Kalman filter", "98% SOC/SOH accuracy"],
        bullets: ["Developing a sigma-point Kalman filter to estimate SOC and SOH of the Li-ion pack in real time, validated to 98% accuracy against reference cycles."],
        metrics: [{ label: "SOC/SOH accuracy", value: "98%" }]
      },
      {
        id: "suspension", title: "Suspension Modeling", image: "assets/img/placeholder-project.svg",
        highlights: ["Roll-heave decoupled suspension", "VI-SuspensionGen kinematics"],
        bullets: ["Modeling the roll-heave decoupled suspension in VI-SuspensionGen to inform kinematic setup ahead of build."],
        metrics: []
      },
      {
        id: "dyno", title: "Endurance Dynamometer", image: "assets/img/placeholder-project.svg",
        highlights: ["Custom dyno rig", "35 kW PMSM motors + inverters"],
        bullets: ["Building a custom dynamometer rig to emulate endurance-event loading on the 35 kW PMSM motors and inverters."],
        metrics: [{ label: "Motor power", value: "35 kW PMSM" }]
      }
    ]
  },

  // SOFTWARE & MANUFACTURING SHOWCASE — one tile per competency. `image` is the
  // tile thumbnail (use your most complex example in that tool); `gallery` holds
  // the extra images shown when the tile is opened. Replace the placeholders.
  toolkit: {
    software: [
      { name: "CAD & Design", caption: "— add your most complex assembly —", image: "assets/img/placeholder-project.svg",
        tools: ["CATIA 3DEXPERIENCE", "PTC Creo", "SOLIDWORKS", "Siemens NX", "Autodesk Fusion", "AutoCAD"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "FEA & Structures", caption: "— add your most complex FEA —", image: "assets/img/placeholder-project.svg",
        tools: ["ANSYS Workbench", "ANSYS ACP", "Abaqus", "NASTRAN"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "CFD & Thermal", caption: "— add your most complex CFD —", image: "assets/img/placeholder-project.svg",
        tools: ["Ansys Fluent", "Star-CCM+", "ParaView", "VisIT"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "MATLAB / Simulink", caption: "— add your most complex model —", image: "assets/img/placeholder-project.svg",
        tools: ["MATLAB", "Simulink", "Simscape", "Stateflow"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Vehicle Simulation", caption: "— add your most complex sim —", image: "assets/img/placeholder-project.svg",
        tools: ["CarMaker", "VI-grade (SuspensionGen)", "KISSsoft", "Pacejka tire modeling"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Electronics & Code", caption: "— add your most complex board / program —", image: "assets/img/placeholder-project.svg",
        tools: ["Altium", "LTSpice", "PSpice", "Python", "C / C++"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] }
    ],
    manufacturing: [
      { name: "CNC & Machining", caption: "— add your most complex part —", image: "assets/img/placeholder-project.svg",
        tools: ["3-axis CNC", "Lathe", "Laser cutting", "Water-jet cutting"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Composites", caption: "— add your best CFRP part —", image: "assets/img/placeholder-project.svg",
        tools: ["CFRP wet layup", "Mould prep", "Structural components"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Casting & Rapid Tooling", caption: "— add the magnesium wheel —", image: "assets/img/placeholder-project.svg",
        tools: ["Sand casting", "SLS-printed tooling", "Injection molding"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Additive Manufacturing", caption: "— add your best print —", image: "assets/img/placeholder-project.svg",
        tools: ["FDM", "SLA", "SLS", "Generative design"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Welding & Fabrication", caption: "— add your best weldment —", image: "assets/img/placeholder-project.svg",
        tools: ["TIG", "MIG", "Metal arc", "Sheet metal", "Soldering"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Metrology & Test", caption: "— add an inspection report —", image: "assets/img/placeholder-project.svg",
        tools: ["CMM", "3D scanning", "Oscilloscope / board-level test", "Laser diagnostics"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] }
    ]
  },

  // Sorted most-recent-first by start date.
  projects: [
    {
      id: "tesla",
      title: "Grid-Forming ESS Thermal & Electrical Test Systems",
      org: "Tesla, Inc., Palo Alto — System Integration & Test Engineer, Energy Engineering",
      context: "Industry",
      period: "May 2026 – Aug 2026",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Thermal & Energy Systems", "Electronics & Controls"],
      summary: "Root-caused thermal/electrical failures and built custom test infrastructure for grid-scale energy storage systems.",
      bullets: [
        "Root-caused a full-power thermal runaway in a DC-DC power stage, confirmed the failure mode non-destructively, and validated a model-based derate-and-fan strategy across a -20°C to +50°C ambient sweep.",
        "Ran a paired 26-channel A/B thermal study (duct installed vs. removed) under high tri-port loading, quantifying sub-1°C average cell ΔT with no measurable system impact.",
        "Closed an off-grid thermal test gap by designing a programmable motor-plus-passive-load emulator covering motor-start and peak-power testing at a fraction of commercial rig cost.",
        "Designed a multi-motor locked-rotor test rig coupling three induction motors on one synchronous belt to emulate single- and multi-phase motor-start loads across global grid voltages.",
        "Architected a modular switched R-L load bank (tapped reactors plus per-phase resistor networks) delivering software-selectable inrush impedance across global grid-code corners.",
        "Designed PLC-driven load switching for an off-grid test bench spanning 30+ contactor channels and 16 operating modes, unified by hard-wired interlocks and a one-call software mode library.",
        "Decomposed 50+ system requirements across 4 grid configurations into a traceability matrix, authoring the pass/fail plan hierarchy adopted as the team-wide standard."
      ],
      metrics: [
        { label: "Ambient sweep tested", value: "-20°C to +50°C" },
        { label: "Cell ΔT (duct study)", value: "< 1°C avg" },
        { label: "Test bench scale", value: "30+ channels, 16 modes" },
        { label: "Requirements traced", value: "50+, 4 grid configs" }
      ],
      links: []
    },
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
        "Ran DFMEA and ISO 26262 HARA for the xHEV powerpack system, plus ISO 16750-3 vibration testing to validate contactor durability against vehicle-level shock.",
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
      id: "rmse23",
      title: "RMSE'23 — Formula Student Electric Vehicle",
      org: "IIT Roorkee Motorsports, IITR",
      context: "Formula Student",
      period: "Jan 2022 – May 2023",
      status: "Competed",
      image: "assets/img/placeholder-project.svg",
      tags: ["Vehicle Dynamics & Simulation", "Structures & Composites", "Thermal & Energy Systems", "Electronics & Controls"],
      summary: "Set season strategy and delivered structures, thermal, aero, and vehicle-dynamics work across the whole car; the team placed 1st among all Asian teams in both the Engineering Design and Cost & Manufacturing events at FSUK'23, Silverstone.",
      bullets: [
        "Set season goals around reliability, competitiveness, and manufacturing efficiency, and streamlined the design process across every subsystem.",
        "Designed, fabricated, and installed CFRP structural components via wet layup, cutting total mass by 10%.",
        "Revised the tubular chassis to a 49F-51R weight distribution and 1755 N·m/° torsional stiffness, and ran FEA for crash-load cases.",
        "Built a thermal model for the radiator and water-cooled loop sizing an 80 kW motor and inverter using the NTU-effectiveness method.",
        "Automated CFD runs and post-processing to generate aero maps, balancing aero load against vehicle dynamics.",
        "Applied generative design to additive-manufactured motor/diff mounts and topology-optimized CNC pedals and wing mount for fatigue.",
        "Designed schematics and PCBs for the car's LV systems — power distribution, accelerator/brake plausibility, and DAQ.",
        "Designed the vehicle's cable harness and cooling-pipe routing in CAD with validated bend radii, improving packaging efficiency by 12%.",
        "Refined vehicle architecture and ran CarMaker sensitivity studies, cutting overall lap time by 12%.",
        "Built a DBOM/CBOM costing tool that helped take the team to 1st place among all Asian teams in the FSUK'23 Cost & Manufacturing event.",
        "Placed 1st among all Asian teams in the FSUK'23 Engineering Design Event (EV category) at Silverstone.",
        "Won the MathWorks Modeling Award (1st place) at Formula Bharat '23 for the team's modeling and simulation work."
      ],
      metrics: [
        { label: "Torsional stiffness", value: "1755 N·m/°" },
        { label: "Mass reduction", value: "10%" },
        { label: "Lap time improvement", value: "12%" },
        { label: "FSUK'23 Cost & Manufacturing", value: "1st, Asian teams" },
        { label: "FSUK'23 Engineering Design", value: "1st, Asian teams" }
      ],
      links: [
        { label: "Team site", url: "— add IIT Roorkee Motorsports link —", isPlaceholder: true },
        { label: "Technical report / photos", url: "— add link —", isPlaceholder: true }
      ]
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
        "Developed a high-fidelity state-space representation from the ground up to model transient handling dynamics and cornering stability, in Simulink/Simscape.",
        "Implemented racing-line optimization for a specific circuit in MATLAB using the minimum-curvature method.",
        "Constructed and validated models for advanced control systems, including traction control and ABS.",
        "Extracted transient vertical and lateral load cases to serve as input boundary conditions for chassis and suspension durability simulations."
      ],
      metrics: [
        { label: "Model fidelity", value: "14-DOF" },
        { label: "Optimization method", value: "Minimum curvature" }
      ],
      links: []
    },
    {
      id: "magnesium-wheels",
      title: "Rapid Tooling of Cast Magnesium Wheels for an FSAE Vehicle",
      org: "IIT Roorkee",
      context: "Research",
      period: "Feb 2022 – May 2023",
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
        "Characterized LTO cell abuse scenarios and cell-level thermal/C-rate behavior across a -20°C to 60°C range.",
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
      id: "turbojet-nozzle",
      title: "Flow Analysis & Optimization of a Supersonic Turbojet Intake and Nozzle",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee (Guide: Prof. Ankit Bansal)",
      context: "Research",
      period: "Sep 2021 – Nov 2021",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Combustion & Powertrain Research"],
      summary: "Compressible-flow design study of a supersonic engine intake and nozzle using the Method of Characteristics and CFD.",
      bullets: [
        "Examined the Method of Characteristics for designing shock-free, isentropic supersonic flow nozzles.",
        "Ran 2D CFD simulations with an inviscid solver in ANSYS Fluent to analyze a spiked intake and de Laval nozzle for a turbojet engine.",
        "Evaluated how exit and ambient pressure affect nozzle expansion behavior for supersonic flight up to Mach 2."
      ],
      metrics: [
        { label: "Design method", value: "Method of Characteristics" },
        { label: "Max flight speed studied", value: "Mach 2" },
        { label: "CFD solver", value: "ANSYS Fluent (inviscid)" }
      ],
      links: []
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
        "Simulated an active air-cooled battery thermal management system to dissipate 1.2 kW and hold cell temperatures below 45°C at peak 10C discharge rate.",
        "Designed the enclosure, mounting brackets, cell holders, and busbars for the 538V/18Ah pack, and sized it with a well-to-wheel model.",
        "Simulated ABS and traction control using a longitudinal tire-slip model, contributing a further 7% lap-time reduction.",
        "Reduced mass across the suspension and drivetrain by 25% while holding a fatigue safety factor of 1.2 under the Goodman criterion.",
        "Selected NMC cells, high-current relays, fuses, and harnesses complying with the ISO 6469-3 safety standard.",
        "Customized ergonomic rigs to improve driver posture and visibility while keeping the pedal box within FSAE rules.",
        "Placed 1st in the Business Plan event, 3rd in Engineering Design, and 3rd overall at Formula Bharat Virtual '22 (EV category)."
      ],
      metrics: [
        { label: "Torque gain", value: "12%" },
        { label: "Lap-time reduction (aero + controls)", value: "14%" },
        { label: "Mass reduction (suspension/drivetrain)", value: "25%" },
        { label: "Formula Bharat Virtual '22", value: "3rd overall" }
      ],
      links: [
        { label: "Technical report / photos", url: "— add link —", isPlaceholder: true }
      ]
    },
    {
      id: "shape-memory-polymer",
      title: "Shape Memory Polymer for Enhanced Stiffness",
      org: "NTU India Connect — Nanyang Technological University, Singapore (Guide: Prof. Huang Weimin)",
      context: "Research",
      period: "Jan 2021 – Mar 2021",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Structures & Composites"],
      summary: "International research placement developing composite designs for cyclic shape-memory actuation.",
      bullets: [
        "Created PET substrate–silicone matrix composite designs for cyclic shape-memory actuation using heating and cooling.",
        "Ran thermal-structural coupled simulations to analyze how the composite actuates in response to temperature changes.",
        "Selected for the competitive NTU India Connect research internship program, Spring '21."
      ],
      metrics: [
        { label: "Program", value: "NTU India Connect, Singapore" },
        { label: "Composite system", value: "PET / silicone matrix" }
      ],
      links: []
    }
  ],

  // Formal paid roles only — sorted most-recent-first by start date.
  // Student-team leadership lives in `leadership` below; one-off academic/
  // industry collaborations (like Dorle) live as `projects` entries instead.
  experience: [
    {
      org: "Tesla, Inc.",
      logo: "assets/img/logos/tesla.svg",
      productImage: "assets/img/products/tesla-powerwall.jpg",
      productCaption: "Powerwall 2 — Tesla Energy",
      role: "System Integration & Test Engineer, Energy Engineering",
      location: "Palo Alto, CA, USA",
      period: "May 2026 – Aug 2026",
      bullets: [
        "Root-caused a full-power thermal runaway in a DC-DC power stage and validated a model-based derate-and-fan strategy across a -20°C to +50°C ambient sweep.",
        "Designed and built custom test infrastructure — a multi-motor locked-rotor rig, a modular switched R-L load bank, and a PLC-driven 30+ channel off-grid test bench — closing test gaps at a fraction of commercial rig cost.",
        "Decomposed 50+ system requirements across 4 grid configurations into a traceability matrix and pass/fail plan hierarchy adopted as the team-wide standard."
      ],
      projectRef: "tesla"
    },
    {
      org: "Jaguar Land Rover TBSI Pvt. Ltd.",
      logo: "assets/img/logos/jlr.svg",
      // No freely-licensed photo of the Range Rover Electric exists yet (it's
      // still a camouflaged prototype — press images are copyright-restricted).
      // Drop a licensed photo in assets/img/products/ and set productImage
      // + productCaption here once you have one you're cleared to use.
      productImage: null,
      productCaption: null,
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
      org: "Log9 Materials Scientific Pvt. Ltd.",
      logo: null,
      product: "RapidX",
      role: "Industrial Design Intern, RapidX",
      location: "Bengaluru, India",
      period: "May 2022 – Jul 2022",
      bullets: [
        "Delivered mechanical packaging (busbars, enclosures, brackets) for a 368V/40Ah fast-charge LTO battery architecture."
      ],
      projectRef: "log9"
    }
  ],

  leadership: [
    {
      role: "Mechanical Head, Powertrain & Braking Head",
      org: "IIT Roorkee Motorsports",
      period: "Apr 2022 – Apr 2023",
      bullets: [
        "Led 8 sub-divisions and 50+ members of the mechanical and electrical division building the team's electric race cars, on an annual budget of ₹35L (~$42K).",
        "Owned design, fabrication, and integration of every mechanical and electrical sub-assembly into the finished vehicle.",
        "Set team philosophy, season goals, and technical timeline, and built out a board of faculty advisors, alumni, and sponsors for strategic oversight."
      ]
    },
    {
      role: "Chairperson",
      org: "Society of Automotive Engineers, IIT Roorkee Chapter",
      period: "Jun 2022 – May 2023",
      bullets: [
        "Ran all activities of the 50-member chapter for the year, including knowledge-transfer sessions, lectures, and industry visits to build automotive interest among newcomers."
      ]
    }
  ],

  education: [
    {
      school: "University of Illinois at Urbana-Champaign",
      degree: "M.S., Mechanical Engineering",
      score: "GPA 4.0 / 4.0",
      period: "Expected May 2027",
      thesis: "Holistic Rack-to-Processor Power and Thermal Co-Design for Ultra-High-Density Data Centers Using Dynamic System-Level Modeling — Energy Transport Research Lab.",
      coursework: [
        "Engineering Spectroscopy",
        "Laser Diagnostics",
        "Design of Heat Exchangers",
        "Vehicle Dynamics",
        "Model-Based Automotive Systems Engineering",
        "Algorithms for Battery Management Systems"
      ]
    },
    {
      school: "Indian Institute of Technology Roorkee",
      degree: "B.Tech., Mechanical Engineering",
      score: "CGPA 8.685 / 10.0",
      period: "Jul 2023",
      thesis: "Understanding End Gas Auto-Ignition in n-Heptane Combustion at High Temperatures using 2D-DNS — see Projects.",
      coursework: [
        "I.C. Engine & Combustion Fundamentals",
        "Vehicle Dynamics",
        "Model-Based Automotive Systems Engineering",
        "Mechatronics",
        "Automatic Control",
        "Power Electronics Design",
        "FEA",
        "Design of Composites",
        "Machine Design",
        "Applied CFD",
        "Fluid Machinery",
        "Dynamics and Vibrations",
        "Failure Analysis",
        "DFM / DFA / GD&T",
        "Concurrent Engineering",
        "Reverse Engineering & Rapid Prototyping"
      ]
    }
  ],

  awards: [
    { title: "1st Place, FSUK'23 Engineering Design Event", org: "Among all Asian teams, EV category — Formula Student UK, Silverstone", date: "2023" },
    { title: "1st Place, FSUK'23 Cost & Manufacturing Event", org: "Among all Asian teams, EV category — Formula Student UK, Silverstone", date: "2023" },
    { title: "MathWorks Modeling Award, Formula Bharat", org: "1st place '23 (₹35K) and 3rd place '24 (₹15K)", date: "2023–24" },
    { title: "1st Runner-Up, JLR Graduate Innovation Challenge", org: "86 teams, 442 graduates, global", date: "2024" },
    { title: '"Exceptional Creator – Team" Award, JLR', org: "₹100K each — recognized FY24 and FY25", date: "2024, 2025" },
    { title: "J.N. Tata Endowment", org: "₹2M grant for postgraduate study abroad, awarded to exceptional Indian students", date: "Fall 2025" },
    { title: "K.C. Mahindra Scholarship", org: "For postgraduate study abroad — top 4% of 2,000+ applicants", date: "Fall 2025" },
    { title: "Gold Medal, Inter IIT Tech Meet 10.0", org: "Automotive problem statement set by JLR", date: "Fall 2022" },
    { title: "Gold Medal, Inter IIT Tech Meet 9.0", org: "Automotive problem statement set by Bosch", date: "Fall 2021" },
    { title: "2nd Runner-Up, Innovate'22 Hackathon", org: "Daimler India Commercial Vehicles — ₹100K prize", date: "2022" },
    { title: '"Most Electrifying Presenter"', org: "Uttarakhand Udyog Mahotsav '23", date: "2023" },
    { title: "Chanakya UG Fellowship", org: "Research grant — E-bicycle for last-mile food delivery", date: "Spring 2022" }
  ],

  skills: [
    { category: "Standards & Methods", items: ["ISO 26262 (HARA)", "DFMEA", "GD&T (ASME Y14.5)", "ISO 16750-3", "ISO 6469-3", "BS 8888", "Tolerance stack-up"] },
    { category: "Certifications", items: ["TÜV SÜD Level 2 & 3 — Qualified Electrician, HV Systems (EV/HEV)"] }
  ],

  contact: {
    heading: "Let's talk",
    body: "Open to mechanical and systems engineering roles across motorsport (F1/WEC, primarily EU/UK), EV, and energy systems."
  }
};


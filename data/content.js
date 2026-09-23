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
    keep new entries sorted that way when you add one. The Experience
    timeline bar computes its own layout from each entry's `period`
    string, so just keep periods in "Mon YYYY – Mon YYYY" format.
  ============================================================================
*/

window.SITE_CONTENT = {

  meta: {
    name: "Arjav Jain",
    role: "Master's in Mechanical Engineering",
    location: "Urbana-Champaign, IL, USA",
    email: "arjavj2@illinois.edu",
    phone: "+1 217-800-2530",
    linkedin: "https://www.linkedin.com/in/arjavjain20",
    github: "— add your GitHub profile URL —",
    profileImage: "assets/img/profile.jpg",
    university: "University of Illinois Urbana-Champaign"
  },

  hero: {
    // Kept as one string for anywhere else that wants the plain sentence
    // (e.g. a future meta-description). The site renders `hookLines` below
    // instead so the 3 sentences sit on 3 close-to-equal-width lines rather
    // than wrapping wherever the browser feels like.
    hook: "I design multi-physics hardware that keeps every constraint in balance. Five Formula Student seasons, two years at JLR and a summer at Tesla taught me performance lives in that balance. Every design since has been faster than the last.",
    hookLines: [
      "I design multi-physics hardware that keeps every constraint in balance. Five",
      "Formula Student seasons, two years at JLR and a summer at Tesla taught me",
      "performance lives in that balance. Every design since has been faster than the last."
    ],
    // Box 1 of the stat strip is generated automatically from the Thesis &
    // Publications data (see `theses` below) — it isn't listed here.
    // Boxes 2-4 are blank placeholders — fill in value/unit/label and
    // delete `isPlaceholder: true` on each one you complete.
    stats: [
      { value: "", label: "— add a stat —", isPlaceholder: true },
      { value: "", label: "— add a stat —", isPlaceholder: true },
      { value: "", label: "— add a stat —", isPlaceholder: true }
    ]
  },

  about: {
    paragraphs: [
      "I'm a mechanical engineer who builds and races cars — three Formula Student seasons across two countries, two years as a graduate powertrain engineer at Jaguar Land Rover, and a recent stint at Tesla. I work across the full systems stack: structures and FEA, thermal and energy systems, power electronics and controls, and the simulation that ties them together.",
      "I've also run the engineering side of a race team: as Mechanical Head and Powertrain & Braking Head at IIT Roorkee Motorsports, I led 50+ engineers across 8 sub-divisions on a £33K annual build budget — season goals, technical direction, and delivery, not just my own subsystem.",
      "That range isn't limited to cars. My current Master's thesis applies the same systems-level thinking to power and thermal co-design for ultra-high-density data centers, and at Tesla I was root-causing thermal failures and validating derate strategies for grid-scale energy storage. I'd rather be useful across a whole program than narrowly specialized in one corner of it.",
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
      period: "Jan 2026 – Present",
      status: "In progress",
      summary: "System-level thermal-hydraulic modeling of a 200 kW liquid-cooled AI rack, from full physics down to a real-time reduced-order model.",
      bullets: [
        "Built a transient chip-to-ambient thermal-hydraulic model of a 200 kW liquid-cooled AI rack, integrating CPU, GPU, PSU, SSD, and 14 CDUs.",
        "Built a physics-based, closed-loop lumped-parameter reduced-order model (ROM) of the rack, running 20-100x faster within 0.08 K median chip RMSE.",
        "Built a dual-loop coolant test rig and characterized 6 micro-cooler designs at 1 kW, reaching 0.0048 K/W — 5x below commercial parts.",
        "Modeling the detailed physics of an MW-class rack for above-ambient cooling feasibility, and extending the ROM to GW-scale facility simulation."
      ],
      metrics: [
        { label: "Rack modeled", value: "200 kW, 14 CDUs" },
        { label: "ROM speedup", value: "20-100x, 0.08 K RMSE" },
        { label: "Best micro-cooler", value: "0.0048 K/W (5x better)" }
      ],
      publications: [
        { title: "", venue: "", status: "", url: "— add publication details —", isPlaceholder: true }
      ]
    },
    {
      id: "bs-thesis",
      level: "Bachelor's Thesis",
      title: "Autoignition and Knock in n-Heptane Combustion at High Temperatures using 2D-DNS",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee",
      period: "Jul 2022 – Jul 2024",
      status: "Complete",
      summary: "Direct numerical simulation of engine knock, proposing a new framework that unifies knock-timing and autoignition-mode prediction.",
      bullets: [
        "Ran 2D DNS of SI engine end-gas knock in n-heptane at 3 engine-like conditions, resolving to 3.9 micron cells with adaptive mesh refinement.",
        "Set up PeleC and AMReX compressible reacting solves with HLLC shock capturing and a reduced gasoline surrogate mechanism.",
        "Proposed an ETD-xi framework — the first to unify knock-timing and autoignition-mode prediction in multi-dimensional DNS.",
        "Wrote MATLAB post-processing to detect autoignition kernels and track pressure-wave reflections across the DNS dataset."
      ],
      metrics: [
        { label: "Mesh resolution", value: "3.9 micron cells (AMR)" },
        { label: "Engine-like conditions studied", value: "3" },
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
        highlights: ["+30% torsional stiffness, to 1755 N·m/°", "1.3 FOS at 40g, Tsai-Wu checked in ANSYS ACP"],
        bullets: [
          "Raised chassis torsional stiffness 30% to 1755 N·m/° with CFRP floor closeouts, correlated between FEA and twist-rig tests.",
          "Applied generative design to additively manufactured wing mounts and topology optimization to CNC pedals, saving 1.2 kg.",
          "Selected fabric, resin, and core, and set ply orientation and stacking for the bodywork, wings, floor closeouts, and steering wheel.",
          "Sized CFRP sandwich laminates by classical lamination theory, holding a 1.3 FOS at 40g load with Tsai-Wu checks in ANSYS ACP.",
          "Built CNC-MDF and wire-cut foam moulds, vacuum-bagged every layup, and ran three-point bend and perimeter shear testing."
        ],
        metrics: [{ label: "Torsional stiffness", value: "1755 N·m/° (+30%)" }, { label: "Mass saved (mounts/pedals)", value: "1.2 kg" }, { label: "Laminate FOS", value: "1.3 @ 40g" }]
      },
      {
        id: "dynamics", title: "Vehicle Dynamics & Lap-Time Simulation", image: "assets/img/placeholder-project.svg",
        highlights: ["65 kW powertrain set via OptimumLap", "Pacejka MF 5.2 tyre models from TTC data"],
        bullets: [
          "Built OptimumLap point-mass simulations at the tyre traction limit, generating power sensitivity curves that set a 65 kW powertrain.",
          "Processed TTC tyre data into Pacejka MF 5.2 models, driving tyre selection on traction, braking mu, and operating temperature.",
          "Modeled understeer gradient against lateral load transfer distribution in constant-radius tests, setting 47-53 LLTD for neutral steer.",
          "Built a Simulink tyre-slip braking model to set brake bias at 3.1 and size the master cylinder and caliper combination."
        ],
        metrics: [{ label: "Powertrain set", value: "65 kW" }, { label: "LLTD target", value: "47-53" }, { label: "Brake bias", value: "3.1" }]
      },
      {
        id: "aero-thermal", title: "Powertrain Cooling", image: "assets/img/placeholder-project.svg",
        highlights: ["2 kW heat duty modeled over endurance cycle", "Bench-validated to 136 kPa, 7.5 LPM"],
        bullets: [
          "Modeled motor and inverter losses over the endurance cycle to set a 2 kW heat duty, driving a transient Simulink model of the coolant loop.",
          "Sized the radiator, pump, and fan by NTU-effectiveness analysis, holding coolant inlet under the 50°C motor and 65°C inverter limits.",
          "Validated loop pressure drop and radiator performance on an instrumented bench against a 136 kPa, 7.5 LPM operating point."
        ],
        metrics: [{ label: "Heat duty", value: "2 kW" }, { label: "Bench operating point", value: "136 kPa, 7.5 LPM" }]
      },
      {
        id: "electronics", title: "LV Electronics & Harness", image: "assets/img/placeholder-project.svg",
        highlights: ["LV power card: 360 W at 92% efficiency", "Bench-verified before scrutineering"],
        bullets: [
          "Designed an LV power distribution card delivering 360 W at 92% efficiency, alongside APPS, brake-plausibility, and DAQ boards.",
          "Laid out, assembled, and bench-tested the boards, verifying implausibility and shutdown behavior against FS rules before scrutineering.",
          "Routed the vehicle harness and coolant lines in CAD, validating bend radii and service access."
        ],
        metrics: [{ label: "LV power card", value: "360 W @ 92%" }]
      },
      {
        id: "strategy", title: "Season Strategy & Results", image: "assets/img/placeholder-project.svg",
        highlights: ["1st among Asian teams, Engineering Design", "2nd among Asian teams, Cost & Manufacturing"],
        bullets: [
          "Set season targets for reliability, competitiveness, and manufacturability, restructuring the design process across every vertical.",
          "Built a design and cost BOM tool for the full vehicle, taking 2nd among Asian teams in the FSUK'23 Cost & Manufacturing event.",
          "Placed 1st among all Asian teams in the FSUK'23 Engineering Design Event (EV category) at Silverstone.",
          "Won the MathWorks Modeling Award (1st place) at Formula Bharat '23 for the team's modeling and simulation work."
        ],
        metrics: [{ label: "FSUK'23 Engineering Design", value: "1st, Asian teams" }, { label: "FSUK'23 Cost & Manufacturing", value: "2nd, Asian teams" }, { label: "MathWorks Modeling Award", value: "1st, Formula Bharat '23" }]
      }
    ],
    rmse21: [
      {
        id: "powertrain", title: "Powertrain, Tyres & Lap-Time Model", image: "assets/img/placeholder-project.svg",
        highlights: ["12% wheel-torque gain", "Longitudinal tyre-slip ABS/TC model"],
        bullets: [
          "Selected the motor, differential, and gear ratio from tyre-slip models, gaining 12% wheel torque.",
          "Simulated ABS and traction control from a longitudinal tyre-slip model, showing a 7% lap-time gain.",
          "Devised a well-to-wheel model to size the 538V/18Ah power pack, and selected NMC cells, AIRs, HV fusing, and harness to ISO 6469-3."
        ],
        metrics: [{ label: "Wheel torque gain", value: "12%" }, { label: "Lap-time gain (ABS/TC)", value: "7%" }, { label: "Pack", value: "538V / 18Ah" }]
      },
      {
        id: "aero", title: "Brake & Accumulator Thermal", image: "assets/img/placeholder-project.svg",
        highlights: ["AISI 4130 discs sized for 300-450°C", "1.2 kW forced-air accumulator cooling"],
        bullets: [
          "Modeled brake-disc temperature and convective loss over a 300s drive cycle, sizing AISI 4130 discs for 300-450°C endurance.",
          "Modeled forced-air accumulator cooling in Icepak, rejecting 1.2 kW to hold cells under 60°C at a 10C peak discharge."
        ],
        metrics: [{ label: "Disc endurance range", value: "300-450°C" }, { label: "Accumulator cooling", value: "1.2 kW rejected" }]
      },
      {
        id: "battery", title: "Electronics & BMS", image: "assets/img/placeholder-project.svg",
        highlights: ["Segment BMS on bq79616, passive balancing", "Latched shutdown circuit (BSPD/IMD/BMS)"],
        bullets: [
          "Built segment BMS boards using bq79616 with passive balancing, feeding cell-voltage and thermistor faults to the shutdown circuit.",
          "Designed pre-charge and RC discharge circuitry, closing the AIRs at 95% of DC bus voltage and de-energizing the DC link on any fault.",
          "Wired the shutdown circuit with latched BSPD, IMD, and BMS stages around a Bender IR155 insulation monitor."
        ],
        metrics: [{ label: "Pre-charge close-in", value: "95% DC bus" }]
      },
      {
        id: "controls", title: "Structures & Full-Vehicle CAD", image: "assets/img/placeholder-project.svg",
        highlights: ["25% mass cut at 1.2 Goodman FOS", "800-part master assembly, 14 kinematic iterations"],
        bullets: [
          "Built fully parametric CAD driven by VD hardpoints, regenerating uprights, rockers, and A-arms across 14 kinematic iterations.",
          "Cut suspension and drivetrain mass 25% by sizing members to worst-case cornering and braking loads at a 1.2 Goodman fatigue FOS.",
          "Designed the accumulator enclosure and brackets to place the first mode above 3x powertrain excitation, verified by modal FEA.",
          "Owned the full-vehicle master CAD assembly, integrating 800 parts across all subsystems with clearance and interference checks."
        ],
        metrics: [{ label: "Mass reduction", value: "25%" }, { label: "Fatigue safety factor", value: "1.2 (Goodman)" }, { label: "Master assembly", value: "800 parts" }]
      },
      {
        id: "results", title: "Competition Results", image: "assets/img/placeholder-project.svg",
        highlights: ["3rd overall, Formula Bharat Virtual '22", "1st Business Plan · 3rd Engineering Design"],
        bullets: ["Placed 1st in the Business Plan event, 3rd in Engineering Design, and 3rd overall at Formula Bharat Virtual '22 (EV category)."],
        metrics: [{ label: "Overall", value: "3rd" }, { label: "Business Plan", value: "1st" }]
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
        tools: ["ANSYS Workbench", "ANSYS Mechanical", "ANSYS ACP", "Abaqus", "NASTRAN"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "CFD & Thermal", caption: "— add your most complex CFD —", image: "assets/img/placeholder-project.svg",
        tools: ["Ansys Fluent", "Ansys Icepak", "Star-CCM+", "ParaView", "VisIT"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "MATLAB / Simulink", caption: "— add your most complex model —", image: "assets/img/placeholder-project.svg",
        tools: ["MATLAB", "Simulink", "Simscape", "Stateflow"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Vehicle Simulation", caption: "— add your most complex sim —", image: "assets/img/placeholder-project.svg",
        tools: ["CarMaker", "Vi-CarRealTime", "Vi-DriveSim", "VI-grade (SuspensionGen)", "KISSsoft", "OptimumLap", "Pacejka MF 5.2"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Electronics & Code", caption: "— add your most complex board / program —", image: "assets/img/placeholder-project.svg",
        tools: ["Altium", "LTspice", "PSpice", "Python", "C / C++"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] }
    ],
    manufacturing: [
      { name: "CNC & Machining", caption: "— add your most complex part —", image: "assets/img/placeholder-project.svg",
        tools: ["3-axis CNC", "Lathe", "Laser cutting", "Water-jet cutting"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Composites", caption: "— add your best CFRP part —", image: "assets/img/placeholder-project.svg",
        tools: ["CFRP wet layup", "Vacuum bagging", "CNC-MDF & wire-cut foam moulds"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Casting & Rapid Tooling", caption: "— add the magnesium wheel —", image: "assets/img/placeholder-project.svg",
        tools: ["Sand casting", "SLS-printed tooling", "Injection molding"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Additive Manufacturing", caption: "— add your best print —", image: "assets/img/placeholder-project.svg",
        tools: ["FDM", "SLA", "SLS", "Generative design"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Welding & Fabrication", caption: "— add your best weldment —", image: "assets/img/placeholder-project.svg",
        tools: ["TIG", "MIG", "Sheet metal", "Soldering"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] },
      { name: "Metrology & Test", caption: "— add an inspection report —", image: "assets/img/placeholder-project.svg",
        tools: ["CMM", "3D scanning", "Thermocouple & strain-gauge instrumentation", "DAQ", "CAN bus analysis (DBC, PCAN)", "Oscilloscope"],
        gallery: [{ image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }, { image: "assets/img/placeholder-project.svg", caption: "— add image —" }] }
    ]
  },

  // Sorted most-recent-first by start date.
  projects: [
    {
      id: "tesla",
      title: "Thermal & Reliability Validation, Energy Products",
      org: "Tesla, Inc., Palo Alto — Intern, System Integration & Test Engineer",
      context: "Industry",
      period: "May 2026 – Aug 2026",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Thermal & Energy Systems", "Electronics & Controls"],
      summary: "Root-caused a thermal runaway and validated derate strategy on a grid-scale energy product across its full qualification envelope.",
      bullets: [
        "Decoded thermal, power, and fault CAN telemetry via DBC, validating reported values against independent measurements.",
        "Root-caused a DC-DC power stage thermal runaway and built a lumped thermal network correlated to the onboard PCB-NTC within 1°C.",
        "Developed and validated a live load/ambient-based derate strategy, preserving 96% rated output at 40°C across a -20°C to 50°C qualification sweep.",
        "Ran a paired 41-channel thermal study qualifying an air-duct delete, isolating the sole tradeoff as extended cell-heater soak time at −20°C.",
        "Constructed worst-case thermal stress cases from first principles across load, ambient, and duty-cycle corners to anchor validation.",
        "Decomposed 162 system requirements across 4 grid configurations into a traceability matrix and pass/fail plan hierarchy.",
        "Validated pre-release firmware on test units, regression-testing derate, thermal, and fault behavior against system requirements.",
        "Built a VFD-absorbed motor-stall and resistive load bank covering compressor-start and peak-power loading for thermal stress testing."
      ],
      metrics: [
        { label: "Rated output at 40°C", value: "96% preserved" },
        { label: "Qualification sweep", value: "-20°C to 50°C" },
        { label: "Thermal study scale", value: "41-channel" },
        { label: "Requirements traced", value: "162, 4 grid configs" }
      ],
      links: []
    },
    {
      id: "cold-plate-ml",
      title: "Gradient-Boosted Surrogate Models for EV Battery Cold-Plate CFD",
      org: "Applied Heat Transfer Course Project, UofI",
      context: "Research",
      period: "Jan 2026 – May 2026",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Thermal & Energy Systems"],
      summary: "Multi-objective CFD optimization of an EV battery cold plate, sped up with a machine-learned surrogate model.",
      bullets: [
        "Ran 50 conjugate heat transfer cases in ANSYS Fluent on an EV battery cold plate via a Latin hypercube DOE over 4 variables.",
        "Trained an XGBoost surrogate on the CFD dataset, predicting pressure drop to R² 0.92 and cutting design evaluation to seconds."
      ],
      metrics: [
        { label: "CFD cases run", value: "50 (Latin hypercube DOE)" },
        { label: "Surrogate accuracy", value: "R² 0.92" },
        { label: "Design evaluation time", value: "cut to seconds" }
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
      tags: ["Vehicle Dynamics & Simulation"],
      summary: "Driver-in-the-loop simulation for UIUC's current FSAE Electric build.",
      bullets: [
        "Built a driver-in-the-loop simulator in Vi-DriveSim on a Vi-CarRealTime vehicle model, correlating to on-car telemetry within 5%."
      ],
      metrics: [
        { label: "Telemetry correlation", value: "within 5%" },
        { label: "Competition result", value: "", isPlaceholder: true }
      ],
      links: [
        { label: "Team site", url: "— add Illini Electric Motorsports link —", isPlaceholder: true },
        { label: "Project write-up / demo video", url: "— add link —", isPlaceholder: true }
      ]
    },
    {
      id: "combustion-lab",
      title: "Optical Flame Diagnostics: OH Thermometry by UV Absorption & Emission",
      org: "Spectroscopy Course Project, Combustion Diagnostics Lab, UofI",
      context: "Research",
      period: "Sep 2025 – Dec 2025",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Combustion & Powertrain Research"],
      summary: "Laser/optical diagnostics to map OH radical temperature and concentration inside small flames.",
      bullets: [
        "Measured OH radical temperature and mass fraction in candle, butane, propane, sterno, and hexamine flames by UV absorption.",
        "Spatially resolved flame temperature by line-of-sight measurement, cross-checking absorption results against emission spectra."
      ],
      metrics: [
        { label: "Flames characterized", value: "5" }
      ],
      links: []
    },
    {
      id: "jlr",
      title: "Range-Extended EV & Solid-State Contactor, HV Systems",
      org: "Jaguar Land Rover TBSI, Bengaluru — Graduate EV-Powertrain Engineer Trainee, HV Systems",
      context: "Industry",
      period: "Aug 2023 – Jul 2025",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Thermal & Energy Systems", "Electronics & Controls", "Structures & Composites"],
      summary: "Two-year graduate program: initiated a carbon-negative range-extender concept and led production-intent thermal, mechanical, and electronics design of a solid-state contactor.",
      bullets: [
        "Initiated and owned a fugitive-CH4 range-extended EV concept, modeled at 36% more range and 12% less mass, carbon-negative.",
        "1st runner-up of 86 teams and 442 graduates in JLR's year-long global Graduate Innovation Challenge with the CH4 REEV.",
        "Filed 5 internal invention disclosures at JLR on DC-link capacitor pre-charging, the REEV, and charge-depletion control.",
        "Built a boundary diagram, interface analysis, and DFMEA for the xHEV powerpack, cutting high-risk RPNs 26% via design actions.",
        "Performed ISO 26262 HARA to ASIL D, authored test plans, and ran environmental validation for safety-critical HV hardware.",
        "Developed a 50 kg cryogenic CH4 storage and delivery concept, modeling tank heat ingress to limit boil-off to 2% per day.",
        "Designed and simulated tubed and pin-fin cold plates for a 350 kW inverter and solid-state contactor, rejecting 24 W/cm².",
        "Built an instrumented coolant-loop rig to test cold plates at full load, validating a 35 K junction margin at a 17 kPa drop.",
        "Led production-intent mechanical and thermal design of the solid-state contactor (SSC), with DFM from packaging to prototype.",
        "Designed 650 A C101 busbars to IEC 60664-1 creepage and clearance, minimizing loop inductance; draughted BS 8888 drawings.",
        "Designed the IP67 SSC enclosure, selecting O-rings, gaskets, and TIM for sealed, leak-free, low-thermal-resistance joints.",
        "Ran worst-case tolerance stack-ups and applied ASME Y14.5 GD&T to position coreless current sensors within 0.30 mm.",
        "Ran modal and random-vibration FEA on the SSC to ISO 16750-3 profiles, achieving a 2.9 minimum safety factor.",
        "Developed a road-load-based charge-depletion strategy to schedule APU operation, cutting fuel use 33% per drive cycle.",
        "Designed closed-loop pre-charge and I²t e-fuse control; tuned a 3W 4-switch buck-boost via Bode analysis to a 55° phase margin.",
        "Developed PID position control for a powered-bonnet actuator via H-bridge PWM drive, accurate to within 0.8 mm.",
        "Applied IEC 60664-1 creepage and clearance across the SSC's mechanical and PCB design for a 1500 V working voltage.",
        "Designed a hybrid RCD and TVS snubber for the solid-state contactor after simulating 11 topologies, clamping turn-off to 1.1 kV."
      ],
      metrics: [
        { label: "Range gain", value: "36%" },
        { label: "Mass reduction", value: "12%" },
        { label: "Invention disclosures filed", value: "5" },
        { label: "DFMEA high-risk RPN cut", value: "26%" },
        { label: "Cold plate heat rejection", value: "24 W/cm²" },
        { label: "SSC vibration safety factor", value: "2.9" },
        { label: "JLR Graduate Innovation Challenge", value: "1st runner-up / 86 teams" }
      ],
      links: [
        { label: "Patent / publication status", url: "— add link if applicable —", isPlaceholder: true }
      ]
    },
    {
      id: "magnesium-wheels",
      title: "Rapid Tooling of Cast Magnesium Wheels for an FSAE Vehicle",
      org: "Reverse Engineering and Rapid Tooling Course Project, IIT Roorkee",
      context: "Research",
      period: "Feb 2023 – May 2023",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Structures & Composites"],
      summary: "Lightweighting a cast wheel and proving out rapid tooling to cut cost and lead time for low-volume casting.",
      bullets: [
        "Compared wheel geometries by FEA under lateral, bump, torsion, and mounting load cases, selecting the final design by Pugh matrix.",
        "Designed printed sand-casting tooling with draft, shrinkage compensation, and machining stock, cutting tooling lead time 54%.",
        "Cast the wheel in magnesium and verified dimensional conformance by CMM and 3D scanning to within 0.5 mm of nominal."
      ],
      metrics: [
        { label: "Tooling lead time saved", value: "54%" },
        { label: "Dimensional conformance", value: "within 0.5 mm" }
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
        "Designed pack hardware for RapidX, a fast-charging lithium-titanate (LTO) battery for 2W, 3W, and 4W commercial vehicles.",
        "Designed C101 busbars, an IP67 enclosure, and cell packaging for a 368V, 40Ah LTO pack retrofitted to the Tata Ace LCV.",
        "Designed sheet-metal brackets, rubber dampers, and waterproof foam seals; released BS 8888 drawings for prototyping.",
        "Sized a paraffin PCM buffer to absorb 9 kJ of fast-charge heat per module, predicting a 15 K cut in peak cell temperature."
      ],
      metrics: [
        { label: "Pack spec", value: "368V / 40Ah" },
        { label: "Enclosure rating", value: "IP67" },
        { label: "PCM heat buffered", value: "9 kJ" },
        { label: "Predicted peak-temp cut", value: "15 K" }
      ],
      links: []
    },
    {
      id: "dorle",
      title: "Bespoke 14-DOF Full-Vehicle Analytical Model",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee — Independent Project, in collaboration with Dorle Controls, Michigan",
      context: "Industry",
      period: "Jan 2022 – May 2022",
      status: "Complete",
      image: "assets/img/placeholder-project.svg",
      tags: ["Vehicle Dynamics & Simulation", "Electronics & Controls"],
      summary: "Built a full-vehicle handling model from scratch and used it to validate racing-line optimization and control-system logic.",
      bullets: [
        "Developed a high-fidelity state-space representation from the ground up to model transient handling dynamics and cornering stability.",
        "Implemented racing-line optimization using the minimum-curvature method to generate time-optimal trajectories for a specific circuit.",
        "Coupled ride, handling, and suspension subsystems to resolve vertical, roll, pitch, and yaw dynamics under road profile and steer inputs.",
        "Validated the integrated model against constant-velocity and acceleration test cases, checking normal load and weight distribution."
      ],
      metrics: [
        { label: "Model fidelity", value: "14-DOF" },
        { label: "Optimization method", value: "Minimum curvature" }
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
      tags: ["Vehicle Dynamics & Simulation", "Structures & Composites", "Thermal & Energy Systems", "Electronics & Controls"],
      summary: "Powertrain selection, brake/accumulator thermal, full-vehicle structures, and BMS electronics for the team's second EV.",
      bullets: [
        "Selected the motor, differential, and gear ratio from tyre-slip models, gaining 12% wheel torque.",
        "Simulated ABS and traction control from a longitudinal tyre-slip model, showing a 7% lap-time gain.",
        "Devised a well-to-wheel model to size the 538V/18Ah power pack, and selected NMC cells, AIRs, HV fusing, and harness to ISO 6469-3.",
        "Modeled brake-disc temperature and convective loss over a 300s drive cycle, sizing AISI 4130 discs for 300-450°C endurance.",
        "Modeled forced-air accumulator cooling in Icepak, rejecting 1.2 kW to hold cells under 60°C at a 10C peak discharge.",
        "Built fully parametric CAD driven by VD hardpoints, regenerating uprights, rockers, and A-arms across 14 kinematic iterations.",
        "Cut suspension and drivetrain mass 25% by sizing members to worst-case cornering and braking loads at a 1.2 Goodman fatigue FOS.",
        "Designed the accumulator enclosure and brackets to place the first mode above 3x powertrain excitation, verified by modal FEA.",
        "Owned the full-vehicle master CAD assembly, integrating 800 parts across all subsystems with clearance and interference checks.",
        "Built segment BMS boards using bq79616 with passive balancing, feeding cell-voltage and thermistor faults to the shutdown circuit.",
        "Designed pre-charge and RC discharge circuitry, closing the AIRs at 95% of DC bus voltage and de-energizing the DC link on any fault.",
        "Wired the shutdown circuit with latched BSPD, IMD, and BMS stages around a Bender IR155 insulation monitor.",
        "Placed 1st in the Business Plan event, 3rd in Engineering Design, and 3rd overall at Formula Bharat Virtual '22 (EV category)."
      ],
      metrics: [
        { label: "Wheel torque gain", value: "12%" },
        { label: "Mass reduction (suspension/drivetrain)", value: "25%" },
        { label: "Master assembly", value: "800 parts" },
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
      role: "Intern — System Integration & Test Engineer, Energy Products",
      location: "Palo Alto, CA, USA",
      period: "May 2026 – Aug 2026",
      summary: "Root-caused a thermal runaway and validated derate strategy on a grid-scale energy product across its full qualification envelope.",
      bullets: [
        "Root-caused a DC-DC power stage thermal runaway and built a lumped thermal network correlated to onboard PCB-NTC within 1°C.",
        "Developed and validated a live load/ambient-based derate strategy, preserving 96% rated output at 40°C across a -20°C to 50°C qualification sweep.",
        "Decomposed 162 system requirements across 4 grid configurations into a traceability matrix and pass/fail plan hierarchy."
      ],
      projectRef: "tesla"
    },
    {
      org: "Jaguar Land Rover TBSI Pvt. Ltd.",
      logo: "assets/img/logos/jlr.svg",
      productImage: "assets/img/products/range-rover-electric.jpg",
      productCaption: "Range Rover Electric — production BEV flagship",
      role: "Graduate EV-Powertrain Engineer Trainee, HV Systems",
      location: "Bengaluru, India",
      period: "Aug 2023 – Jul 2025",
      summary: "Two-year graduate program: initiated a carbon-negative range-extender concept and led production-intent thermal, mechanical, and electronics design of a solid-state contactor.",
      bullets: [
        "Initiated and owned a fugitive-CH4 range-extended EV concept, modeled at 36% more range and 12% less mass, carbon-negative.",
        "Filed 5 internal invention disclosures at JLR on DC-link capacitor pre-charging, the REEV, and charge-depletion control.",
        "Led production-intent mechanical and thermal design of a solid-state contactor rejecting 24 W/cm², at a 2.9 vibration safety factor."
      ],
      projectRef: "jlr"
    },
    {
      org: "Log9 Materials Scientific Pvt. Ltd.",
      logo: "assets/img/logos/log9.png",
      productImage: "assets/img/products/log9-rapidx8000-internal.jpg",
      productCaption: "RapidX 8000 — internal module assembly",
      product: "RapidX",
      role: "Industrial Design Intern, RapidX",
      location: "Bengaluru, India",
      period: "May 2022 – Jul 2022",
      summary: "Mechanical packaging for a 368V/40Ah LTO fast-charge battery architecture aimed at retrofitting India's small commercial EV fleet.",
      bullets: [
        "Designed pack hardware — busbars, IP67 enclosure, and cell packaging — for a 368V/40Ah fast-charge LTO battery architecture."
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
        "Led 50+ members across 8 sub-divisions on a £33K budget, owning design, fabrication, and full-vehicle integration of the electric car.",
        "Set season targets for reliability, competitiveness, and manufacturability, restructuring the design process across every vertical.",
        "Built a design and cost BOM tool for the full vehicle, taking 2nd among Asian teams in Cost and Manufacturing at FSUK 2023."
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
      teaching: "Graduate Teaching Assistant — Heat Transfer (166 students)",
      coursework: [
        "Design of Thermal Systems",
        "Fracture of Engineering Materials",
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
      thesis: "Autoignition and Knock in n-Heptane Combustion at High Temperatures using 2D-DNS — see Thesis & Publications.",
      teaching: "Undergraduate Teaching Assistant — Programming & Data Structures (23 students)",
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
    { title: "2nd Place, FSUK'23 Cost & Manufacturing Event", org: "Among all Asian teams, EV category — Formula Student UK, Silverstone", date: "2023" },
    { title: "MathWorks Modeling Award, Formula Bharat", org: "1st place '23 (₹35K) and 3rd place '24 (₹15K)", date: "2023–24" },
    { title: "1st Runner-Up, JLR Graduate Innovation Challenge", org: "86 teams, 442 graduates, global", date: "2024" },
    { title: "5 Internal Invention Disclosures Filed, JLR", org: "DC-link capacitor pre-charging, REEV, and charge-depletion control", date: "2024–25" },
    { title: '"Exceptional Creator" Recognition, JLR', org: "Twice awarded — FY24 and FY25", date: "2024, 2025" },
    { title: "J.N. Tata Endowment", org: "₹2M grant for postgraduate study abroad, awarded to exceptional Indian students", date: "Fall 2025" },
    { title: "K.C. Mahindra Scholarship", org: "For postgraduate study abroad — top 4% of 2,000+ applicants", date: "Fall 2025" },
    { title: "Gold Medal, Inter IIT Tech Meet 10.0", org: "Automotive problem statement set by JLR", date: "Fall 2022" },
    { title: "Gold Medal, Inter IIT Tech Meet 9.0", org: "Automotive problem statement set by Bosch", date: "Fall 2021" },
    { title: "2nd Runner-Up, Innovate'22 Hackathon", org: "Daimler India Commercial Vehicles", date: "2022" },
    { title: "Chanakya UG Fellowship", org: "Research grant — E-bicycle for last-mile food delivery", date: "Spring 2022" }
  ],

  skills: [
    { category: "Standards & Methods", items: ["ISO 26262 (HARA, ASIL D)", "DFMEA", "GD&T (ASME Y14.5)", "IEC 60664-1", "ISO 16750-3", "ISO 6469-3", "BS 8888", "Tolerance stack-up"] },
    { category: "Certifications & Languages", items: ["TÜV SÜD Level 2 & 3 — HV Live Working (EV/HEV)", "English", "Hindi", "German (B1 → B2)"] }
  ],

  contact: {
    heading: "Let's talk",
    body: "Open to mechanical and systems engineering roles across motorsport (F1/WEC, primarily EU/UK), EV, and energy systems."
  }
};

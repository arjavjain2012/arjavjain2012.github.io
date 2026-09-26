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
    university: "University of Illinois Urbana-Champaign",
    universityLogo: "assets/img/logos/uiuc.png"
  },

  hero: {
    // Kept as one string for anywhere else that wants the plain sentence
    // (e.g. a future meta-description). The site renders `hookLines` below
    // instead so the 3 sentences sit on 3 close-to-equal-width lines rather
    // than wrapping wherever the browser feels like.
    hook: "I design multi-physics hardware that keeps every constraint in balance. Five Formula Student years, two years at JLR and a summer at Tesla taught me performance lives in that balance. Every design since has been faster than the last.",
    hookLines: [
      "I design multi-physics hardware that keeps every constraint in balance. Five",
      "Formula Student years, two years at JLR and a summer at Tesla taught me",
      "performance lives in that balance. Every design since has been faster than the last."
    ],
    // Box 1 of the stat strip is generated automatically from the Thesis &
    // Publications data (see `theses` below) — it isn't listed here.
    // Boxes 2-4 are blank placeholders — fill in value/unit/label and
    // delete `isPlaceholder: true` on each one you complete.
    stats: [
      { value: "2+", label: "Years of work experience", link: "#experience" },
      { value: "5+", label: "Years in FSAE", link: "#fsae" },
      { value: "", label: "— add a stat —", isPlaceholder: true }
    ]
  },

  about: {
    paragraphs: [
      "Hi, I'm Arjav Jain, a Master's student in Mechanical Science and Engineering at the University of Illinois Urbana-Champaign and a graduate researcher at the Energy Transport Research Lab (ETRL). My thesis focuses on power and thermal co-design for ultra-high-density data centres. Alongside my research, I work on powertrain and vehicle dynamics with Illini Electric Motorsports.",
      "My interest in cars started early and led me to mechanical engineering and Formula Student, where building a race car taught me that optimizing one subsystem is never enough. Leading the mechanical side of the team pushed me into electrical systems as well, and taught me to make trade-offs for the whole vehicle. At Jaguar Land Rover, I learned engineering at production scale: rigour, standards, long-term reliability, and designing within the constraints of disciplines beyond my own. At Tesla, I learned to prove that a design works: tracing requirements into test plans, stress-testing hardware at its worst-case corners, and correlating models against measured data.",
      "Across all of it, my strength has been working where physical domains meet. I design with structural, thermal and electrical constraints in mind at once, and I'm comfortable moving between FEA, thermal modelling, vehicle dynamics, power electronics, controls and testing to trace an issue to wherever it actually sits. That breadth is what I bring to every problem I take on."
    ]
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
      image: "assets/img/projects/ms-thesis.png",
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
        {
          title: "Data Center Thermal Analysis using Dynamic System Modeling",
          venue: "Energy Transport Research Lab, University of Illinois Urbana-Champaign",
          status: "In progress",
          url: "— add publication details —",
          isPlaceholder: true
        }
      ]
    },
    {
      id: "bs-thesis",
      level: "Bachelor's Thesis",
      title: "Autoignition and Knock in n-Heptane Combustion at High Temperatures using 2D-DNS",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee",
      period: "Jul 2022 – Jul 2024",
      image: "assets/img/projects/bs-thesis.png",
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
          title: "Evaluating Simple Models for Knock Timing and Autoignition Mode Prediction with 2D DNS of n-Heptane in an Enclosure",
          venue: "41st International Symposium on Combustion (ISOC'26), Kyoto",
          status: "Published",
          url: "https://www.researchgate.net/publication/414365684_Evaluating_simple_models_for_knock_timing_and_autoignition_mode_prediction_with_2D_DNS_of_n-heptane_in_an_enclosure"
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
      id: "cold-plate-ml",
      title: "Gradient-Boosted Surrogate Models for EV Battery Cold-Plate CFD",
      org: "Applied Heat Transfer Course Project, UofI",
      context: "Research",
      period: "Jan 2026 – May 2026",
      image: "assets/img/projects/cold-plate-ml.webp",
      tags: ["Thermal & Energy Systems"],
      summary: "Multi-objective CFD optimization of an EV battery cold plate, sped up with a machine-learned surrogate model.",
      bullets: [
        "Ran 50 conjugate heat transfer cases in ANSYS Fluent on an EV battery cold plate via a Latin hypercube DOE over 4 variables, confirming fully laminar flow (Re < 500) across the design space.",
        "Trained an XGBoost surrogate on the CFD dataset with scikit-learn, predicting pressure drop to R² 0.92 and cutting design evaluation to seconds.",
        "Identified an optimal design point balancing 0.05 K/W thermal resistance against just 0.0055 W pumping power, and ran feature-importance analysis to show flow velocity and Reynolds number dominate both thermal and hydraulic behavior."
      ],
      metrics: [
        { label: "CFD cases run", value: "50 (Latin hypercube DOE)" },
        { label: "Surrogate accuracy (pressure drop)", value: "R² 0.92" },
        { label: "Optimal design point", value: "0.05 K/W, 0.0055 W pump" }
      ],
      links: [],
      tools: [
        { name: "ANSYS Fluent", logo: "assets/img/tools/ansys.svg" },
        { name: "Python", logo: "assets/img/tools/python.svg" },
        { name: "scikit-learn", logo: "assets/img/tools/scikit-learn.svg" },
        { name: "XGBoost" }
      ]
    },
    {
      id: "iem26",
      title: "IEM'26 — Formula Student Electric Vehicle",
      org: "Illini Electric Motorsports, UofI",
      context: "Formula Student",
      period: "Sep 2025 – Present",
      image: "assets/img/projects/iem26.webp",
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
      image: "assets/img/projects/combustion-lab.jpg",
      tags: ["Combustion & Powertrain Research"],
      summary: "Laser/optical diagnostics to map OH radical temperature and concentration inside small flames.",
      bullets: [
        "Built a UV broadband absorption spectroscopy (BAS) rig around a 310nm LED source, a 1.54m Czerny-Turner spectrometer, and an Andor iDus CCD, wavelength-calibrated against an Hg lamp.",
        "Extracted OH line parameters from the LIFBASE and HITRAN databases and ran Boltzmann analysis on measured absorbance to determine rotational temperature at two heights above each flame.",
        "Characterized 5 fuels (butane, propane, candle wax, sterno gel, hexamine) by BAS, finding gaseous flames burn hottest (propane 2184 K) and cleanest, while sooting solid/gel fuels run cooler (candle down to 1030 K) with weaker OH signal.",
        "Cross-checked absorption-based temperatures against chemiluminescence emission spectra, and implemented rolling-percentile baseline masking to isolate OH features from continuum background."
      ],
      metrics: [
        { label: "Flames characterized", value: "5" },
        { label: "Temperature range measured", value: "1030–2184 K" },
        { label: "OH mole fraction range", value: "0.0006–0.043" }
      ],
      links: []
    },
    {
      id: "magnesium-wheels",
      title: "Rapid Tooling of Cast Magnesium Wheels for an FSAE Vehicle",
      org: "Reverse Engineering and Rapid Tooling Course Project, IIT Roorkee",
      context: "Research",
      period: "Feb 2023 – May 2023",
      image: "assets/img/projects/magnesium-wheels.png",
      tags: ["Structures & Composites"],
      summary: "Lightweighting a cast wheel and proving out rapid tooling to cut cost and lead time for low-volume casting.",
      bullets: [
        "Benchmarked the team's existing 3-piece aluminum wheel by FEA, then used a QFD to prioritize a one-piece cast-magnesium redesign on mechanics, manufacturing, and aesthetics.",
        "Validated and optimized the new spoke design against the incumbent under 1000 lb torsion, lateral, and longitudinal loads plus a 100 lb mounting load, matching stiffness at 25% lower weight.",
        "Designed and 3D-printed the sand-casting tooling (accounting for 2% linear shrinkage in AZ91C-T4 magnesium), cutting tooling lead time 54% and cost 49.6% versus machined aluminum tooling.",
        "Cast the wheel in magnesium and verified dimensional conformance by CMM and 3D scanning to within 0.5 mm of nominal."
      ],
      metrics: [
        { label: "Weight reduction", value: "25% (~4 lb)" },
        { label: "Tooling lead time / cost saved", value: "54% / 49.6%" },
        { label: "Dimensional conformance", value: "within 0.5 mm" }
      ],
      links: [],
      tools: [
        { name: "SolidWorks" }
      ]
    },
    {
      id: "rmse23",
      title: "RMSE'23 — Formula Student Electric Vehicle",
      org: "IIT Roorkee Motorsports, IITR",
      context: "Formula Student",
      period: "Apr 2022 – Jul 2023",
      image: "assets/img/projects/rmse23.jpg",
      tags: ["Vehicle Dynamics & Simulation", "Structures & Composites", "Thermal & Energy Systems", "Electronics & Controls"],
      summary: "Chassis, vehicle dynamics, powertrain cooling, and LV electronics for the team's third EV — 1st in Engineering Design and 2nd in Cost & Manufacturing at FSUK'23.",
      metrics: [
        { label: "Chassis torsional stiffness", value: "1755 N·m/° (+30%)" },
        { label: "FSUK'23 Engineering Design", value: "1st, Asian teams" },
        { label: "FSUK'23 Cost & Manufacturing", value: "2nd, Asian teams" },
        { label: "MathWorks Modeling Award", value: "1st, Formula Bharat '23" }
      ],
      links: [
        { label: "Technical report / photos", url: "— add link —", isPlaceholder: true }
      ]
    },
    {
      id: "dorle",
      title: "Bespoke 14-DOF Full-Vehicle Analytical Model",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee — Independent Project, in collaboration with Dorle Controls, Michigan",
      context: "Industry",
      period: "Jan 2022 – May 2022",
      image: "assets/img/projects/dorle.png",
      imageFit: "contain",
      tags: ["Vehicle Dynamics & Simulation", "Electronics & Controls"],
      summary: "Built a full-vehicle handling model from scratch and used it to validate racing-line optimization and control-system logic.",
      bullets: [
        "Led a 5-person team building a 14-DOF full-vehicle model in MATLAB/Simulink from first-principles equations, split across powertrain/braking, ride, handling, and suspension subsystems.",
        "Owned the powertrain & braking subsystem: modeled the electric powertrain and hydraulic brakes with 2D lookup tables for motor efficiency, outputting wheel torque, battery SOC, and motor power from driver throttle/brake inputs.",
        "Implemented racing-line optimization using the minimum-curvature method to generate time-optimal trajectories for a specific circuit.",
        "Integrated all subsystems through a shared tyre sub-block outputting tire forces, moments, and wheel speeds, then validated the full model against constant-velocity and acceleration test cases."
      ],
      metrics: [
        { label: "Model fidelity", value: "14-DOF" },
        { label: "Optimization method", value: "Minimum curvature" }
      ],
      links: [],
      tools: [
        { name: "MATLAB / Simulink", logo: "assets/img/tools/mathworks.svg" }
      ]
    },
    {
      id: "turbojet-nozzle",
      title: "Flow Analysis & Optimization of a Supersonic Turbojet Intake and Nozzle",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee (Guide: Prof. Ankit Bansal)",
      context: "Research",
      period: "Sep 2021 – Nov 2021",
      image: "assets/img/projects/turbojet-nozzle.png",
      tags: ["Combustion & Powertrain Research"],
      summary: "Compressible-flow design study of a supersonic engine intake and nozzle using the Method of Characteristics and CFD.",
      bullets: [
        "Examined the Method of Characteristics for designing shock-free, isentropic supersonic flow nozzles.",
        "Modeled a 2D axisymmetric converging-diverging nozzle in SolidWorks and ran density-based, inviscid ANSYS Fluent CFD, refining a hex-dominant mesh from 5mm to 0.1–0.5mm elements (11,770 nodes) to resolve the shock structure.",
        "Analyzed a spiked supersonic intake at Mach 1, 2, and 3 free-stream conditions, and identified over- and under-expanded regimes on the nozzle by sweeping outlet back-pressure.",
        "Evaluated how exit and ambient pressure affect nozzle expansion behavior for supersonic flight up to Mach 2."
      ],
      metrics: [
        { label: "Design method", value: "Method of Characteristics" },
        { label: "Max flight speed studied", value: "Mach 3 (intake)" },
        { label: "Mesh refinement", value: "5mm → 0.1–0.5mm" }
      ],
      links: [],
      tools: [
        { name: "SolidWorks" },
        { name: "ANSYS Fluent", logo: "assets/img/tools/ansys.svg" }
      ]
    },
    {
      id: "rmse21",
      title: "RMSE'21 — Formula Student Electric Vehicle",
      org: "IIT Roorkee Motorsports, IITR",
      context: "Formula Student",
      period: "Jan 2021 – Dec 2021",
      image: "assets/img/projects/rmse21.jpg",
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
      id: "best-workplace",
      title: "Best Workplace for Drivers",
      org: "Innovate'22 Hackathon, Daimler India Commercial Vehicles",
      context: "Competition",
      period: "Aug 2022",
      image: "assets/img/projects/best-workplace.webp",
      tags: ["Structures & Composites"],
      summary: "24-hour hackathon redesigning a long-haul truck driver's cabin with drivers and cabin experts.",
      bullets: [
        "Ran a weighted decision matrix across candidate cabin problems (ventilation, fatigue, seating, theft) to prioritize a Noise-Vibration-Harshness (N-V-H) redesign, backed by a driver survey and literature on fatigue-linked accident risk.",
        "Proposed Active Noise Cancellation (DSP + microphones) to cut in-cabin noise from 90–104 dB toward the 85 dB nominal target, reducing measured noise by up to 43%.",
        "Proposed an air-cushion seating system to counter cabin vibration, projected to cut vibration by 33%, fatigue by 14%, and seating pressure by 18% versus a foam-cushion seat.",
        "Proposed an active seat-suspension system for load-adaptive damping against road harshness, completing the N-V-H solution set within an estimated ₹19,000 component cost."
      ],
      metrics: [
        { label: "Noise reduction", value: "up to 43%" },
        { label: "Vibration reduction", value: "up to 33%" },
        { label: "Result", value: "2nd Runner-up, Innovate'22" }
      ],
      links: []
    },
    {
      id: "jlr-bonnet",
      title: "JLR's Powered Bonnet for Electric Vehicles",
      org: "Inter IIT Tech Meet 10.0 (JLR Problem Statement)",
      context: "Competition",
      period: "Mar 2022",
      image: "assets/img/projects/jlr-bonnet.png",
      imageFit: "contain",
      tags: ["Electronics & Controls"],
      summary: "Gold medal-winning actuation system, designed both mathematically and mechanically, to power a car's bonnet.",
      bullets: [
        "Benchmarked existing powered-tailgate mechanisms and selected direct linear actuation over a slider-crank design for fewer parts and lower friction loss, using 2 Ti Motion TA23 linear actuators driven by an Arduino UNO and Cytron motor driver.",
        "Derived the bonnet-angle/actuator-length governing equations and solved them numerically in MATLAB (fzero), then optimized U- and T-mount positions in SolidWorks to minimize peak actuator load.",
        "Modeled the full electro-mechanical system in Simulink/Simscape with PWM/H-bridge and PI control, simulating a 9–14 kg bonnet settling within ±1° of its final angle in 4 seconds at 300.3 J.",
        "FEA-verified the CNC-machined Al-3003 mounts to a minimum FoS of 1.34, and packaged the mechanism into just 32% of the available bonnet volume for under ₹20,000 in parts — scoring 142/150 for Gold at Inter IIT Tech Meet 10.0."
      ],
      metrics: [
        { label: "Result", value: "Gold Medal, Inter IIT Tech Meet 10.0" },
        { label: "Score", value: "142 / 150" },
        { label: "Bill of materials", value: "< ₹20,000" }
      ],
      links: [],
      tools: [
        { name: "SolidWorks" },
        { name: "MATLAB / Simulink", logo: "assets/img/tools/mathworks.svg" },
        { name: "Arduino", logo: "assets/img/tools/arduino.svg" }
      ]
    },
    {
      id: "pedalthon",
      title: "Pedalthon — Commercial Electric Bicycle",
      org: "Cognizance (Annual Technical Festival, IIT Roorkee)",
      context: "Competition",
      period: "Mar 2022",
      image: "assets/img/projects/pedalthon.png",
      tags: ["Structures & Composites"],
      summary: "Designed a commercial electric bicycle from scratch for last-mile deliveries, leading a 5-member team.",
      bullets: [
        "Led 5-member team BLAZZE to design a 141 kg-payload-rated electric cargo bicycle with a tubular Al 6061-T6 space frame, two 57.5 L storage boxes, and a 170 km design range.",
        "Sized the BLDC hub motor and 1:30 planetary drivetrain from a torque/power calculator against gradeability and top-speed targets, selecting a 750W-peak motor at 88% efficiency.",
        "Sized and modeled the 14s4p Li-ion pack through a wheel-to-well accumulator model: 2316 Wh without regenerative braking vs. 495.4 Wh with it — a 78.6% reduction — landing on a 600 Wh pack with BMS, pre-charge, and shutdown circuitry.",
        "Built GPS/GSM vehicle tracking on Arduino, simulated in Proteus, and validated the disc-brake tyre-slip model to a 205m stopping distance — all within a ₹75,000 total build cost."
      ],
      metrics: [
        { label: "Design range", value: "170 km" },
        { label: "Battery savings from regen", value: "78.6%" },
        { label: "Total build cost", value: "₹75,000" },
        { label: "Result", value: "1st Runner-up, Pedalthon" }
      ],
      links: [],
      tools: [
        { name: "Arduino", logo: "assets/img/tools/arduino.svg" },
        { name: "Proteus", logo: "assets/img/tools/proteus.svg" }
      ]
    },
    {
      id: "bosch-ev",
      title: "BOSCH's Electric Vehicle Simulation Challenge",
      org: "Inter IIT Tech Meet 9.0 (Bosch Problem Statement)",
      context: "Competition",
      period: "Mar 2021",
      image: "assets/img/projects/bosch-ev.png",
      imageFit: "contain",
      tags: ["Vehicle Dynamics & Simulation"],
      summary: "Gold medal-winning performance baselining and powertrain design for an electric ultralight commercial vehicle.",
      bullets: [
        "Selected the Ultra-Light Commercial Vehicle (B2B) segment and baselined performance targets (800 kg payload, 300 km range, 75 km/h top speed) from market and use-case analysis.",
        "Built longitudinal vehicle-dynamics and WLTP drive-cycle models in MATLAB/Simulink, then sized a 96%-efficient PMSM traction motor (165 Nm / 26 kW peak) and its FOC motor controller from the resulting torque/power envelope.",
        "Modeled the full powertrain (battery, motor, transmission, regen) in Simulink/Simscape and quantified 3 independent battery-size levers: lowering drag coefficient 0.86→0.52 (-6.4%), adding an automatic 2-gear transmission (-3%), and regenerative braking (-13.3%).",
        "Combined all three optimizations for a 22% reduction in required battery size (60.9 kWh → 47.5 kWh) for the same 300 km range, at Inter IIT Tech Meet 9.0."
      ],
      metrics: [
        { label: "Result", value: "Gold Medal, Inter IIT Tech Meet 9.0" },
        { label: "Battery size reduction", value: "22% (60.9→47.5 kWh)" },
        { label: "Motor efficiency", value: "96% peak" }
      ],
      links: [],
      tools: [
        { name: "MATLAB / Simulink", logo: "assets/img/tools/mathworks.svg" }
      ]
    },
    {
      id: "rejuvenation-heritage",
      title: "Rejuvenation of Heritage — Restoring Ajanta & Ellora Paintings",
      org: "Tech4Heritage Hackathon, Sapio Analytics",
      context: "Competition",
      period: "Sep 2020 – Oct 2020",
      image: "assets/img/projects/rejuvenation-heritage.webp",
      tags: ["Data Science & Machine Learning"],
      summary: "1st-place hackathon project restoring depleted Ajanta and Ellora cave paintings with GAN-based inpainting.",
      bullets: [
        "Curated a training dataset of Indian heritage artwork, standardizing images to 500×500px and synthesizing damage via a custom apply_distortion() function to model realistic patch loss without unrealistic binary (B&W) masks.",
        "Designed a denoising-autoencoder-based Context Encoder architecture — convolutional encoder/decoder trained to inpaint only the masked, damaged regions rather than reconstruct the whole image.",
        "Combined an adversarial discriminator with reconstruction loss so the generator produced sharper, more plausible fill-in than a plain autoencoder, restoring damaged Ajanta and Ellora frescoes.",
        "Placed 1st at Tech4Heritage among Team128 'Ancient_AI' entries."
      ],
      metrics: [
        { label: "Result", value: "1st Place, Tech4Heritage Hackathon" }
      ],
      links: [],
      tools: [
        { name: "Python", logo: "assets/img/tools/python.svg" }
      ]
    },
    {
      id: "nav-ujjwal",
      title: "Nav Ujjwal E-Innovation Hackathon — Autonomous Aid Drone",
      org: "Model Club, B.I.T. Sindri",
      context: "Competition",
      period: "Aug 2020",
      image: "assets/img/projects/nav-ujjwal.png",
      imageFit: "contain",
      tags: ["Structures & Composites"],
      summary: "Designed an autonomous drone to transport essentials to differently-abled groups, including its carbon-fiber frame.",
      bullets: [
        "Co-designed an autonomous multi-rotor (Team Excelsior) capable of both no-contact last-mile delivery and indoor autonomous navigation, built around a CFRP-sandwich-panel central pod with 3D-printed arms — 2.3 kg empty, up to 3.5 kg payload, 20–35 min flight time.",
        "Designed and 3D-printed a custom camera gimbal driven by servo motors on a Raspberry Pi, using gyroscope/accelerometer feedback in place of a purchased off-the-shelf gimbal.",
        "Built the autonomy stack on PX4 + ROS + a Raspberry Pi companion computer, with LiDAR/ultrasonic + IMU sensor fusion for altitude/attitude estimation and real-time telemetry downlink via QGroundControl.",
        "Trained a MobileNetSSD model in TensorFlow for real-time gate/obstacle detection, converting bounding-box geometry into a reference point for a PID-based navigation and collision-avoidance controller."
      ],
      metrics: [
        { label: "Payload capacity", value: "up to 3.5 kg" },
        { label: "Flight time", value: "20–35 min" },
        { label: "Result", value: "1st Runner-up, Nav Ujjwal E-Innovation Hackathon" }
      ],
      links: [],
      tools: [
        { name: "TensorFlow", logo: "assets/img/tools/tensorflow.svg" },
        { name: "ROS", logo: "assets/img/tools/ros.svg" },
        { name: "Raspberry Pi", logo: "assets/img/tools/raspberrypi.svg" }
      ]
    },
    {
      id: "rc-car",
      title: "RC-Operated Nitro Engine Car",
      org: "SAE IIT Roorkee Chapter",
      context: "Student Project",
      period: "Nov 2019 – Feb 2020",
      image: "assets/img/placeholder-project.svg",
      tags: ["Structures & Composites"],
      summary: "Designed, simulated, and assembled a nitro-engine RC car from scratch, replicating full-scale automotive systems.",
      bullets: [
        "Studied the working of different automotive systems and replicated them in the form of a nitro-engine RC car.",
        "Designed and simulated the chassis to ensure mechanical robustness under operating loads.",
        "Assembled all components onto the chassis and evaluated on-track performance."
      ],
      links: []
    },
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
      ]
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
      ]
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
      ]
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
  ]
};

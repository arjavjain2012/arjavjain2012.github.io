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
    hook: "I design multi-physics hardware that keeps every constraint in balance. Four Formula Student years, two years at JLR and a summer at Tesla taught me performance lives in that balance. Every design since has been faster than the last.",
    hookLines: [
      "I design multi-physics hardware that keeps every constraint in balance. Four",
      "Formula Student years, two years at JLR and a summer at Tesla taught me",
      "performance lives in that balance. Every design since has been faster than the last."
    ],
    // Box 1 of the stat strip is generated automatically from the Thesis &
    // Publications data (see `theses` below) — it isn't listed here.
    // Boxes 2-4 are blank placeholders — fill in value/unit/label and
    // delete `isPlaceholder: true` on each one you complete.
    stats: [
      { value: "2+", label: "Years of work experience", link: "#experience" },
      { value: "4+", label: "Years in FSAE", link: "#fsae" },
      { value: "50+", label: "Engineers led", link: "#leadership" }
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
      level: "Master's Thesis — In Progress",
      title: "Holistic Rack-to-Processor Power & Thermal Co-Design for Ultra-High-Density Data Centers Using Dynamic System-Level Modeling",
      org: "Energy Transport Research Lab, UIUC",
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
          venue: "Energy Transport Research Lab, UIUC",
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
      org: "Combustion Theory & Modeling Lab, IIT Roorkee",
      period: "Jul 2022 – Jul 2024",
      image: "assets/img/projects/bs-thesis-poster-photo.jpg",
      summary: "Direct numerical simulation of engine knock, proposing a new framework that unifies knock-timing and autoignition-mode prediction.",
      bullets: [
        "Ran 2D DNS of SI engine end-gas knock in n-heptane at 3 engine-like conditions, resolving to 3.9 micron cells with adaptive mesh refinement.",
        "Set up PeleC and AMReX compressible reacting solves with HLLC shock capturing and a reduced gasoline surrogate mechanism.",
        "Proposed an ETD-xi framework — the first to unify knock-timing and autoignition-mode prediction in multi-dimensional DNS.",
        "Wrote MATLAB post-processing to detect autoignition kernels and track pressure-wave reflections across the DNS dataset."
      ],
      tools: [
        { name: "PeleC" },
        { name: "AMReX" },
        { name: "Cantera" },
        { name: "MATLAB" },
        { name: "Python" },
        { name: "ParaView" },
        { name: "VisIt" },
        { name: "MS Office" }
      ],
      metrics: [
        { label: "Mesh resolution", value: "3.9 micron cells (AMR)" },
        { label: "Engine-like conditions studied", value: "3" },
        { label: "Conference publication", value: "41st ISOC'26, Kyoto" }
      ],
      publications: [
        {
          title: "Evaluating Simple Models for Knock Timing and Autoignition Mode Prediction with 2D DNS of n-Heptane in an Enclosure",
          venue: "41st International Symposium on Combustion (ISOC'26), Kyoto",
          status: "Published",
          url: "https://www.researchgate.net/publication/414365684_Evaluating_simple_models_for_knock_timing_and_autoignition_mode_prediction_with_2D_DNS_of_n-heptane_in_an_enclosure"
        },
        {
          title: "Conference Presentation",
          venue: "41st International Symposium on Combustion (ISOC'26), Kyoto",
          url: "assets/docs/bs-thesis-presentation.pptx",
          hideFromHero: true
        },
        {
          title: "Conference Poster",
          venue: "41st International Symposium on Combustion (ISOC'26), Kyoto",
          url: "assets/docs/bs-thesis-poster.pptx",
          hideFromHero: true
        },
        {
          title: "Bachelor's Thesis (BTP) Report",
          venue: "Mechanical & Industrial Engineering Dept., IIT Roorkee",
          url: "assets/docs/bs-thesis-btp-report.docx",
          hideFromHero: true
        }
      ]
    }
  ],

  // Standalone research publications not tied to either thesis — counted
  // in the hero's Publications stat and shown in its popover, but not
  // attached to a Thesis & Publications card.
  independentPublications: [
    {
      title: "Beyond Biogas Upgrading: Techno-Economic and Life-Cycle Assessment of Carbon-Negative Hydrogen via Direct Reforming of Raw Biogas with Integrated CO₂ Capture and Storage",
      venue: "University of Illinois Urbana-Champaign",
      status: "In progress",
      url: "— add publication details —",
      isPlaceholder: true
    }
  ],

  // LAYER 3 DATA — sub-projects shown when a project card is opened (layer 2)
  // and one of its discipline tiles is clicked. Keyed by project id. Projects
  // with no entry here just show their full breakdown at layer 2. Swap each
  // `image` for a real photo/render/screenshot from assets/img/projects/.
  subprojects: {
    rmse23: [
      {
        id: "24v-battery-and-bms", thumbAspect: 1.43, title: "24V Battery & BMS", category: "Electronics & Controls", image: "assets/img/subprojects/rmse23/24v-battery-and-bms/thumb.png", imageFit: "contain",
        highlights: ["Self-designed 7s4p LV pack and BMS powering ~360 W of low-voltage load at 92% efficiency"],
        metrics: [
          { value: "7s4p · 25.9 V", label: "Samsung 30Q LV pack" },
          { value: "360 W @ 92%", label: "LV load / efficiency" },
          { value: "60 A", label: "Peak pack discharge" }
        ],
        writeup: {
          overview: "RMSE'23 powers everything that is not the tractive system — the vehicle control unit, DAQ, shutdown-circuit relays, coolant pump, cooling fans and auxiliary boards — from a dedicated 24 V lithium-ion battery rather than from DC-DC converters off the accumulator. The LV battery, its cell holder and enclosure, and the in-house BMS that protects it were designed as one self-contained, rules-compliant system.",
          approach: "The whole LV load (about 360 W) was first tabulated across three nodes — LV electronics PCBs, sensors and relays, and the motor/MCU/accumulator cooling fans and pump — so the battery and converters could be sized against real numbers. Four candidate 18650 cells (Sony VTC5 and VTC6, Samsung 25R and 30Q) were compared on capacity, energy density, continuous and peak discharge rating, internal resistance and cost; the Samsung 30Q won because it is second only to the VTC6 in energy density and discharge capability at a lower price. Seven series by four parallel cells gives a 25.9 V, 12 Ah pack with a 60 A peak (5C per cell). Three buck converters then step 24 V down to 12 V, 5 V and 3.3 V in a tree architecture so a fault on one rail does not take down the others. The cell holder is a two-part, fire-retardant ABS print that clamps the cells rigidly and bolts to the motor-controller mount with M6 fasteners, and the outer case is a CFRP box whose inner walls are lined with Nomex for thermal and electrical insulation. For protection, an in-house BMS was built around the TI BQ76PL455A cell monitor (14-bit ADC, 6–16 cells per IC): it senses each cell voltage, flags over-voltage (4.2 V), under-voltage (3.0 V), over-temperature (45 °C charging, 60 °C discharging), open and short circuit, and drives the active-low FAULT_N line into the shutdown circuit. Five NTC thermistors, each covering three neighbouring cells, satisfy the rule that at least 30% of cells be temperature-monitored.",
          achievements: [
            "Specified and built a 7s4p Samsung 30Q LV battery (25.9 V, 12 Ah, 60 A peak) after a four-cell comparison on capacity, energy density, discharge rating, resistance and cost.",
            "Distributed ~360 W of LV load through a 24 V → 12 V / 5 V / 3.3 V buck-converter tree, delivering power at roughly 92% efficiency with a fault-isolating architecture.",
            "Designed an in-house BMS (BQ76PL455A) with OV, UV, over-temperature, open- and short-circuit protection that signals the shutdown circuit, with thermistor coverage exceeding the 30% rule minimum.",
            "Packaged the pack in a 3D-printed fire-retardant ABS holder inside a Nomex-lined CFRP enclosure, mounted to the motor-controller bracket."
          ],
          tools: ["Altium Designer", "SolidWorks", "BQ76PL455A", "FDM 3D printing (fire-retardant ABS)", "CFRP hand layup"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/24v-battery-and-bms/01.jpg", caption: "Assembled LV cell pack seated in its 3D-printed fire-retardant ABS holder" },
          { image: "assets/img/subprojects/rmse23/24v-battery-and-bms/02.png", caption: "CFRP battery cover — Nomex-lined inner walls, cable gland for the harness exit", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/24v-battery-and-bms/03.png", caption: "Cell selection matrix: Sony VTC5 / VTC6 against Samsung 25R / 30Q", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/24v-battery-and-bms/04.png", caption: "BMS schematic: per-cell voltage sensing with balancing MOSFET and Zener clamp", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/24v-battery-and-bms/05.png", caption: "Pack current-sense stage (MAX4081 high-side monitor across a shunt resistor)", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/24v-battery-and-bms/06.png", caption: "LV BMS board layout around the BQ76PL455A", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/24v-battery-and-bms/07.jpg", caption: "Hand-assembling the cell pack with a spot welder" }
        ]
      },
      {
        id: "board-level-and-integrated-testing", thumbAspect: 1.78, title: "Board Level & Integrated Testing", category: "Electronics & Controls", image: "assets/img/subprojects/rmse23/board-level-and-integrated-testing/thumb.jpg",
        highlights: ["Every safety device proven by a defined trigger: BMS, BSPD, IMD and HVD interlock"],
        metrics: [
          { value: "500 ms / 5 kW", label: "BSPD implausibility trip" },
          { value: "> 10%", label: "APPS implausibility threshold" },
          { value: "15 s", label: "BSPD auto-reset" }
        ],
        writeup: {
          overview: "Before RMSE'23 could be presented for technical inspection, each electronics board and the shutdown circuit as a whole had to be shown to behave exactly as the rules require. This project covers the boards that were laid out and brought up — Power Card, Control Card, BSPD, Discharge and DAQ PCBs — and the bench and integrated tests that proved the safety chain end to end.",
          approach: "The standalone Brake System Plausibility Device was first designed and simulated in NI Multisim: a Hall-effect current sensor (0–4 V on a 15 V supply) and a brake-line pressure sensor (1–5 V) feed window comparators that also detect open- and short-circuit sensor faults; when more than 5 kW is drawn while hard braking persists beyond 500 ms, a D flip-flop latches the error, which clears only on a power cycle or after the condition has been absent for the reset window. The Control Card (Teensy 4.0) handles APPS plausibility — two linear potentiometers on separate supplies, with a deviation over 10% of travel shutting the car down — the brake-pressure check, the ready-to-drive buzzer sequence and the TSAL, while the Power Card puts a P-channel MOSFET reverse-polarity guard in front of the LDOs. The Discharge PCB forms the RC discharge path that de-energises the HV bus whenever the shutdown circuit opens. Integrated testing followed the rule-book demonstration methods: the BMS error is generated by opening an accumulator maintenance plug, the BSPD by injecting sensor-signal levels, the IMD by connecting a test resistor between TSMP− and LVMP−, and the HVD interlock by opening the HVD; mechanical devices (shutdown buttons, BOTS, TSMS, inertia switch) are shown by actuating them. Boards were hand-soldered and bench-tested, and BMS firmware was run against live LV battery packs on a laptop test rig before anything went into the car.",
          achievements: [
            "Simulated the BSPD in NI Multisim and bench-verified its 5 kW / 500 ms implausibility trip, latching and 15-second auto-reset, including open- and short-circuit sensor detection.",
            "Implemented APPS, brake-plausibility and ready-to-drive logic on a Teensy 4.0 control card, with a >10% pedal-deviation shutdown and a 3-second buzzer sequence.",
            "Proved every item in the shutdown chain (BMS, BSPD, IMD relays, shutdown buttons, inertia switch, BOTS, HVD interlock, TSMS) with a documented trigger method for technical inspection.",
            "Built the discharge, power, control and DAQ boards and validated them on the bench ahead of integration."
          ],
          tools: ["NI Multisim", "Altium Designer", "Teensy 4.0", "Bench PSU, multimeter & oscilloscope", "Soldering"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/board-level-and-integrated-testing/01.jpg", caption: "Hand-soldering a prototype board during bring-up" },
          { image: "assets/img/subprojects/rmse23/board-level-and-integrated-testing/02.jpg", caption: "Integrated bench test: BMS firmware running against LV battery packs from a laptop" }
        ]
      },
      {
        id: "cfrp-composite-design-and-fabrication", thumbAspect: 0.56, title: "CFRP Composite Design & Fabrication", category: "Structures & Composites", image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/thumb.jpg", imageFit: "contain",
        highlights: ["Carbon-fibre bodywork cut from 13 kg to 9 kg; floor closeouts, mounts and wings laid up in-house"],
        metrics: [
          { value: "13 → 9 kg", label: "Bodywork mass (glass → CFRP)" },
          { value: "45°/135°", label: "Closeout ply orientation" },
          { value: "430 GSM", label: "Carbon fabric used" }
        ],
        writeup: {
          overview: "RMSE'19 under-used composites — floor closeouts, MCU mount, shroud and sidepods were steel or 3D prints — and carried a heavy glass-fibre body. For RMSE'23 the composite effort was owned end to end: choosing core, fibre and resin, deciding ply orientations by load case, validating layups in FEA and coupon tests, building the tooling, and laying up everything from floor closeouts to the full bodywork.",
          approach: "Cores were selected for low weight, compressive and shear strength, and cost; fabric and resin for tensile strength, bonding, short cure time and ease of handling. Ply angles were set deliberately: 0° where a part is loaded in one direction, 90° layers against buckling, and balanced ±45° pairs where torsion matters. The floor closeouts illustrate the method — a two-ply (45°, 135°) 430 GSM carbon skin around a 10 mm, 70 kg/m³ foam core was analysed in ANSYS ACP for an 800 N load before a test laminate was cut. Prototypes at (0°, 90°) and (45°, 135°) were built and the 45° layup chosen because the fibres then carry the diagonal torsional forces, which is the purpose of the closeout. Sandwich coupons with XPS and PU foam cores were tested in three-point bending on a universal testing machine, and their force–displacement curves compared. Every part follows one workflow: machine the mould (CNC, VMC, Carvey or split 3D-printed moulds joined with epoxy), prepare it with release agent and sealant tape, cut plies, lay up in wet resin, add peel ply and breather, vacuum bag after leak-checking the circuit, cure, demould and post-process. The result was a 9-component bodywork in CFRP (down from 13 kg of glass fibre to about 9 kg), plus a catalogue of structural parts: MCU and LV-battery mounts, HVD mount, damper and rack covers, shroud, master-switch board, headrest mount, dashboard, seat and rack floor closeouts, and pedals.",
          achievements: [
            "Cut bodywork mass from about 13 kg (glass fibre) to about 9 kg by moving the whole body to CFRP with a continuous underbody.",
            "Replaced the aluminium floor closeouts with a (45°, 135°) carbon / 10 mm foam sandwich, verified in ANSYS ACP for 800 N, then prototype-tested against a (0°, 90°) layup.",
            "Ran three-point bend tests on carbon sandwich coupons with XPS and PU cores to select the core, and documented a repeatable hand-layup and vacuum-bagging process.",
            "Sized the CFRP sandwich laminates by classical lamination theory, holding a 1.3 factor of safety under a 40 g load with Tsai-Wu failure checks in ANSYS ACP.",
            "Validated the aero surfaces by wind-tunnel testing a 3D-printed scale wing model and comparing its lift coefficient with the CFD prediction.",
            "Manufactured more than a dozen structural and aerodynamic composite parts using CNC, VMC, Carvey and split 3D-printed moulds joined with epoxy and PU foam."
          ],
          tools: ["ANSYS ACP", "Hand layup & vacuum bagging", "CNC / VMC / Carvey machining", "3D-printed moulds", "Universal testing machine"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/01.jpg", caption: "Large CFRP layup under vacuum bag, ports and breather in place" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/02.jpg", caption: "Cured carbon-fibre laminate panel after demoulding" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/03.jpg", caption: "Test laminate under peel ply and vacuum bag during cure" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/04.png", caption: "ANSYS ACP total deformation of the floor-closeout sandwich under load", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/05.png", caption: "Layer-wise equivalent stress in the sandwich panel", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/06.jpg", caption: "Finished CFRP structural parts laid out after demoulding", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/07.png", caption: "Layup sequence: cut carbon and foam, apply epoxy, peel ply and breather, vacuum bag, surface finish", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/08.jpg", caption: "Composite process loop: make mould, prep, cut plies, lay up, bag, cure, demould, post-process", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/09.png", caption: "Three-point bend test of a sandwich coupon on the universal testing machine" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/10.png", caption: "Force–displacement curve: four carbon layers over a 10 mm XPS foam core", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/11.png", caption: "Force–displacement curve: four carbon layers over a 10 mm PU foam core", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/12.jpg", caption: "Cured carbon-fibre nose cone shell on its mould base" },
          { image: "assets/img/subprojects/rmse23/cfrp-composite-design-and-fabrication/13.jpg", caption: "Team laying up and vacuum-bagging a large CFRP part" }
        ]
      },
      {
        id: "chassis", thumbAspect: 1.3, title: "Chassis", category: "Structures & Composites", image: "assets/img/subprojects/rmse23/chassis/thumb.png", imageFit: "contain",
        highlights: ["Lighter 50F/50R space frame with 1755 N·m/° torsional stiffness, validated in FEA and on a twist rig"],
        metrics: [
          { value: "36 → 30 kg", label: "Chassis mass vs RMSE'19" },
          { value: "1755 N·m/°", label: "Torsional stiffness at P3" },
          { value: "271 mm", label: "Car CG height (from 283)" }
        ],
        writeup: {
          overview: "RMSE'19's chassis was stiff and reliable but heavy, split 40F/60R, and full of manufacturing defects. The RMSE'23 frame was redesigned around three goals: under 32 kg, a 50F/50R mass distribution with a CG below 270 mm, and a design the team could actually build accurately.",
          approach: "The design started from the RMSE'19 frame and the suspension node points supplied by the vehicle-dynamics team. Tubes that could be deleted without breaking the rules were removed — notably around the front and rear hoops — and the wheels were moved rearward, cutting mass and shifting weight toward 50/50. Driver position came from an adjustable ergonomic rig built on a shoestring budget: drivers preferred a more reclined posture, so the cockpit was lowered and inclined, which also lowered CG height, and the accumulator was lowered too. Cockpit angles from four drivers were checked against the 95th-percentile male and 5th-percentile female ranges. Material was ST52-3 steel (equivalent to AISI 4130, 355 MPa yield) chosen over carbon monocoque or aluminium for its proven manufacturability and cost given limited fabrication experience and no testing access. Torsional stiffness was targeted at 1800 N·m/° from the VD team's LLTD analysis and checked with a hybrid beam–quadrilateral ANSYS model, fixed at the rear bulkhead and loaded through the front suspension, with and without CFRP floor closeouts. The 40 g front and side impact cases (120 kN) and a 20 kN rollover case were also run. For manufacturing, planar tube drawings were pasted onto tubes for exact end profiles, a 50×25 mm tube welding table gave a reference datum, tubular fixtures replaced the sheet-metal fixtures that had distorted RMSE'19's frame, and laser-cut mounts replaced hand-ground ones.",
          achievements: [
            "Cut chassis mass from 36 kg to 30 kg, moved mass distribution from 40F/60R to 50F/50R and dropped car CG height from 283 mm to 271 mm.",
            "Raised torsional stiffness at the P3 reference point from 1350 to 1755 N·m/° with CFRP floor closeouts (target 1800), with FEA correlated to physical twist-rig deflection measurements.",
            "Showed the closeouts' structural value in impact FEA: front-impact minimum factor of safety rose from 1.14 to 1.27 and side-impact from 1.12 to 1.33, with rollover at 5.04.",
            "Redesigned the build process — tubular welding fixtures, a reference welding table and laser-cut mounts — eliminating the post-weld deformation and misalignment of the previous frame."
          ],
          tools: ["SolidWorks", "ANSYS Mechanical", "Hybrid beam–shell FEA", "Twist-rig testing", "TIG welding"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/chassis/01.jpg", caption: "Torsion load case: opposing forces at the front suspension points, fixed rear bulkhead", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/02.jpg", caption: "Total deformation under torsion — chassis alone", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/03.png", caption: "Torsional stiffness along the chassis length: target vs. with and without floor closeouts", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/04.jpg", caption: "Frontal impact (40 g) boundary conditions: 120 kN on the front bulkhead", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/05.jpg", caption: "Frontal impact — total deformation", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/06.png", caption: "Frontal impact — equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/07.jpg", caption: "Side impact (40 g) boundary conditions: 120 kN on the side impact structure", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/08.jpg", caption: "Side impact — total deformation", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/09.png", caption: "Side impact — equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/10.jpg", caption: "Rollover case: 20 kN at the top of each hoop", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/11.jpg", caption: "Rollover — total deformation", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/12.png", caption: "Rollover — equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/13.png", caption: "Chassis drawings: side, front and top views", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/14.png", caption: "Torsional stiffness at points P1–P6: target vs. chassis vs. chassis + floor closeouts", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/chassis/15.jpg", caption: "Physical twist test: chassis on the rig while deflections are marked and measured" }
        ]
      },
      {
        id: "full-car-master-cad", thumbAspect: 1.36, title: "Full Car Master CAD", category: "Structures & Composites", image: "assets/img/subprojects/rmse23/full-car-master-cad/thumb.png", imageFit: "contain",
        highlights: ["Single master assembly driving packaging, mass, CG and aero-body fit for the whole car"],
        metrics: [
          { value: "317 kg", label: "Car mass incl. 68 kg driver" },
          { value: "50 : 50", label: "Target weight distribution" },
          { value: "9", label: "Bodywork components" }
        ],
        writeup: {
          overview: "The RMSE'23 master assembly is the single source of truth every subsystem designs against: chassis, double-wishbone suspension, steering, brake system, EMRAX 228 powertrain and chain drive, accumulator, cooling hardware, harness and the nine-piece CFRP bodywork with front and rear wings.",
          approach: "Subsystem models were assembled around the chassis so packaging conflicts surfaced in CAD rather than in the workshop — the bodywork, for instance, had to wrap an already-built tubular frame and clear the suspension, dampers, radiator and accumulator ducting. The assembly also fed the team's vehicle-dynamics numbers: a MATLAB tool was built that renders a profile view of the CAD, lets the user click where each component sits, and records that component's contribution to rear mass and to CG height; the per-part results roll up into a master spreadsheet, replacing the older subsystem-level approximations that had let small errors snowball. The final car as modelled runs 13-inch OZ rims with Hoosier 20-inch tyres at 317 kg including a 68 kg driver, with a rear-wheel-drive layout (EMRAX 228 MV, 100 kW peak, derated to 80 kW, driving through a 420 chain and a Torsen differential), a tubular space frame, and a single 128s6p accumulator.",
          achievements: [
            "Maintained one full-vehicle master assembly integrating chassis, suspension, steering, brakes, powertrain, accumulator, cooling, harness and nine bodywork components.",
            "Fed a per-component mass and CG model (MATLAB click-on-CAD tool) that replaced the subsystem-level estimates previously used for mass distribution and CG height.",
            "Integrated about 800 parts across every subsystem into the master assembly, running clearance and interference checks at each major design freeze.",
            "Used the assembly to verify bodywork fit around the existing chassis, suspension and ducting, including radiator, accumulator-cooling and HVD cut-outs."
          ],
          tools: ["SolidWorks", "MATLAB", "Autodesk Inventor"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/full-car-master-cad/01.png", caption: "Full car with CFRP bodywork, front and rear wings", imageFit: "contain" }
        ]
      },
      {
        id: "generative-design", thumbAspect: 1.57, title: "Generative Design", category: "Structures & Composites", image: "assets/img/subprojects/rmse23/generative-design/thumb.png", imageFit: "contain",
        highlights: ["Wing mounts shaped by generative design under real aero loads, in 6061-T6"],
        metrics: [
          { value: "2", label: "Swan-neck wing mounts (rear)" },
          { value: "5 mm", label: "6061-T6 plate, double shear" },
          { value: "M6", label: "Double-shear bolting" }
        ],
        writeup: {
          overview: "The wings only help if their mounts are light and stiff enough to hold them. Instead of carrying over a straight plate, the front and rear wing mounts were produced with generative design so material sits only where the aero load path needs it.",
          approach: "The rear wing hangs from two swan-neck brackets cut from 5 mm Al 6061-T6 and loaded in double shear, with two tie rods to meet the rule-book requirement against wing deflection. Mounting loads were derived from the wing's weight plus the downforce from CFD (about 240 N downforce on the rear wing, 334 N on the front), with extra margin; hand calculations sized the bolts, which settled on M6 in double shear, and aluminium inserts in the wing elements carry the load into the carbon. The generative-design study was run on these brackets with the real loads and fixed bolt interfaces, and the resulting organic, arched geometry (pictured) was refined and checked in FEA for equivalent stress and factor of safety. The front wing mount followed the same logic, with two strings from the chassis to the outer endplates to stop the wing tips drooping and grounding on the track.",
          achievements: [
            "Applied generative design to the rear and front wing mounts, producing lightweight arched brackets from 5 mm 6061-T6 plate; together with the topology-optimized pedals this saved 1.2 kg over straight carry-over parts.",
            "Sized the mounting hardware by hand calculation — M6 bolts in double shear — and verified stress and factor of safety for the aero loading in FEA.",
            "Added tie rods (rear) and endplate strings (front) to meet deflection rules and protect ground clearance."
          ],
          tools: ["Generative design", "ANSYS Mechanical", "SolidWorks", "CNC machining (Al 6061-T6)"]
        },
        gallery: []
      },
      {
        id: "liquid-cooling-setup-and-validation", thumbAspect: 2, title: "Liquid Cooling Setup and Validation", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse23/liquid-cooling-setup-and-validation/thumb.jpg",
        highlights: ["Single radiator held coolant inlet under 50 °C (motor) and 65 °C (MCU); bench test within 13% of model"],
        metrics: [
          { value: "135.9 kPa", label: "Loop pressure drop @ 7.5 LPM" },
          { value: "38.4 / 41.3 °C", label: "Avg motor / MCU inlet temp" },
          { value: "13%", label: "Bench vs. model U-value error" }
        ],
        writeup: {
          overview: "RMSE'19 carried two radiators; the improved thermal model showed one would do, saving about 2.5 kg and a lot of routing. This project took the cooling loop from sizing to hardware — radiator, fan, pump and hoses — and then validated the radiator on a purpose-built bench.",
          approach: "Heat load came from the powertrain sizing model: motor loss from the EMRAX 228 efficiency map at every 0.025 s, MCU loss at an assumed 95% efficiency, averaging 1.13 kW and 0.8 kW with limits of 8 and 12 l/min flow and 50 °C and 65 °C inlet temperature. Radiator heat rejection was computed with the NTU method for unmixed cross-flow, iterating Reynolds, Nusselt and overall coefficient values. Several off-the-shelf cross-flow single-pass radiators were simulated in MATLAB and a Bajaj Pulsar NS200 core (216 × 158 × 27 mm, 19 tubes, 2.4 mm fin pitch) won on effectiveness per frontal area. The fan was chosen by plotting duct pressure drop against candidate fan curves — a Minbea R200A (24 V, 67 W, 0.278 m³/s) whose operating point sat in its efficient range on the LV battery's 24 V rail — and the pump from the total loop head: 844.7 Pa across the radiator, 674 Pa in the pipes, about 103 kPa in the motor and 31.5 kPa in the MCU at 7.5 l/min, 135.9 kPa in all (45.6 ft of head), met by a GRI INTG3 570 pump (28.4 LPM, 58 ft). Hose lengths (1900 mm total) were fixed by CAD routing first. A Simulink model with transport-delay blocks tracked coolant temperature around the loop. A bench with an MDF duct, fan and instrumented flow measured air and water flow rates and four temperatures to back out the radiator's overall heat-transfer coefficient, which came within 13% of prediction.",
          achievements: [
            "Showed a single radiator meets the duty, removing RMSE'19's second radiator (~2.5 kg) and its routing.",
            "Predicted 38.4 °C average motor inlet and 41.3 °C average MCU inlet coolant temperature, well inside the 50 °C and 65 °C limits.",
            "Selected the Bajaj NS200 radiator, Minbea R200A fan and GRI INTG3 570 pump from computed pressure-drop and head curves, matched to the LV battery's 24 V supply.",
            "Built an instrumented MDF bench and validated the radiator's heat-transfer coefficient to within 13% of the model. In-car temperature logging was planned but not completed in the season."
          ],
          tools: ["MATLAB", "Simulink", "NTU-effectiveness method", "Instrumented flow bench"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/liquid-cooling-setup-and-validation/01.png", caption: "Minbea R200A axial fan selected from the duct pressure-drop curve", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/liquid-cooling-setup-and-validation/02.png", caption: "GRI INTG3 570 coolant pump", imageFit: "contain" }
        ]
      },
      {
        id: "lltd-tuning", thumbAspect: 1.77, title: "LLTD Tuning", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23/lltd-tuning/thumb.png", imageFit: "contain",
        highlights: ["47/53 front/rear LLTD chosen from an understeer-gradient sweep — the first model-based LLTD on the team"],
        metrics: [
          { value: "47 / 53", label: "Front / rear LLTD" },
          { value: "43–60%", label: "Front LLTD swept" },
          { value: "≈ 0", label: "Understeer at 47% front" }
        ],
        writeup: {
          overview: "Lateral load transfer distribution decides whether a car pushes, rotates or snaps, and until RMSE'23 the team set it by convention. This was the first season it was chosen from a model, with neutral steer as the design target for a manoeuvrable car.",
          approach: "A constant-radius cornering simulation was written that outputs understeer gradient against lateral acceleration, with front LLTD as an input. Front LLTD was swept from 43% to 60% in one-percent steps, and the family of curves plotted against lateral acceleration up to roughly 1.5 g. The 47% curve runs almost flat near zero understeer and, importantly, stays the most stable across the whole lateral-acceleration range; higher front LLTD fans out into steadily growing understeer at the limit, lower values toward oversteer. That 47/53 split became the target the suspension team designed spring, anti-roll bar and geometry stiffnesses to, and it fed the chassis torsional-stiffness requirement of 1800 N·m/° (the chassis must be stiff enough that its compliance does not move the effective LLTD).",
          achievements: [
            "Introduced model-based LLTD selection: a constant-radius understeer simulation swept over 43–60% front LLTD.",
            "Selected 47/53 front/rear LLTD for near-neutral steer that remains stable across the full lateral-acceleration range.",
            "Used the LLTD target to set the 1800 N·m/° chassis torsional-stiffness requirement handed to the chassis team."
          ],
          tools: ["MATLAB"]
        },
        gallery: []
      },
      {
        id: "master-and-slave-bms", thumbAspect: 1.48, title: "Master & Slave BMS", category: "Electronics & Controls", image: "assets/img/subprojects/rmse23/master-and-slave-bms/thumb.jpg",
        highlights: ["Eight-slave, one-master accumulator BMS covering a 128s6p pack with hardware fault latching"],
        metrics: [
          { value: "8 × 16", label: "Slave BMS boards × cells each" },
          { value: "128s6p", label: "Accumulator configuration" },
          { value: "256 cells", label: "Temperature-monitored (≈33%)" }
        ],
        writeup: {
          overview: "RMSE'23's accumulator is 768 Sony VTC6 cells in a 128s6p pack split into eight segments, and a purpose-built battery management system watches all of it: eight slave boards, one per segment, reporting to a master board that logs data, senses pack current and trips the shutdown circuit on any fault.",
          approach: "Each slave board uses one TI BQ76PL455A monitoring 16 cells and 8 temperature channels through a 14-bit SAR ADC, with passive balancing; the stack is daisy-chained over isolated differential communication. Thresholds are 4.2 V upper and 3.0 V lower per cell, with 60 °C allowed on charge and 80 °C on discharge; thermistor lugs bolted to cell negatives monitor a third of the pack (256 cells), and a breach pulls the active-low FAULT_N signal that opens a relay in series in the shutdown circuit. The master board hosts a Teensy 4.1 that talks UART to the eight slaves, logs voltages and temperatures, and reads a Hall-effect HV current sensor; its fault output goes through a Raspberry Pi eight-channel level shifter (3.3 V to 5 V) because the latching ICs need more than 3.3 V to register a high. Fault latching is in hardware — once tripped, the error stays locked until manually reset. Designing the PCBs in-house kept them small, reusable for future cars and cheap to re-spin, and the LV battery's monitor is built around the same IC. The charger path was sized alongside it: Energus pre-assembled VTC6 modules accept 3 A per cell, so the 6p pack can take 18 A, but charging at about 2.4 A per cell (≈6.6 kW) keeps the cells cooler; the off-car charger is protected by its own IMD, BMS and emergency shutdown with manual reset.",
          achievements: [
            "Designed slave BMS boards (BQ76PL455A, 16 cells and 8 NTCs each) and a Teensy-4.1 master board with Hall-effect current sensing for the 128s6p pack.",
            "Implemented hardware fault latching with 3.3 V → 5 V level shifting, so any OV, UV, over-temperature or comms fault opens the shutdown circuit until manually reset.",
            "Covered 256 cells with temperature sensing and set conservative thresholds (4.2 V / 3.0 V; 60 °C charge / 80 °C discharge).",
            "Defined the off-car charging strategy and its shutdown circuit, balancing charge time against cell temperature."
          ],
          tools: ["Altium Designer", "BQ76PL455A", "Teensy 4.1", "UART / isolated daisy-chain", "Hall-effect current sensor"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/01.png", caption: "BMS architecture: sensing and balancing, isolated daisy-chain, host controller, CAN and fault line to the AIRs", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/02.png", caption: "Per-cell voltage-sense and passive-balance schematic", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/03.png", caption: "Slave BMS PCB layout", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/04.png", caption: "FAULT_N and UART interface that links the stacked slave boards", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/05.png", caption: "Master BMS: Teensy 4.1 host with fault-latching and buffer logic", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/06.png", caption: "Hall-effect current sensor and shutdown-circuit interface connectors", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/07.png", caption: "Per-slave communication connectors on the master board", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/08.png", caption: "Master BMS board: Teensy 4.1, Hall-effect current sensor and slave USB connectors", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/09.jpg", caption: "Fault-latching network and external fault/communication connectors", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/master-and-slave-bms/10.jpg", caption: "Slave-chain communication and balancing network around the BQ76PL455A", imageFit: "contain" }
        ]
      },
      {
        id: "motor-and-mcu-cooling", thumbAspect: 1, title: "Motor & MCU Cooling", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse23/motor-and-mcu-cooling/thumb.png", imageFit: "contain",
        highlights: ["Transient motor and MCU loss model set a 1.9 kW duty; coolant kept below 50 °C and 65 °C"],
        metrics: [
          { value: "1.13 kW", label: "Avg motor loss (EMRAX 228)" },
          { value: "0.8 kW", label: "Avg MCU loss (Bamocar D3)" },
          { value: "0.025 s", label: "Model timestep" }
        ],
        writeup: {
          overview: "Before any radiator or pump could be chosen, the car's real heat load had to be known. This project models how much heat the EMRAX 228 motor and Bamocar D3 controller reject over an endurance-style drive cycle, then simulates the coolant loop that carries it away.",
          approach: "The powertrain sizing model in Simulink supplies instantaneous power every 0.025 s. Motor loss is computed from the EMRAX 228 efficiency map as instantaneous power times inefficiency; only the dominant mechanisms are kept — winding DC (copper) loss, P = 3·I²·R, and hysteresis loss, which depends on rpm — while magnet and winding eddy losses are neglected (magnet eddy loss only matters at high rpm and high torque together, and winding eddy loss is negligible for this machine). With no loss data for the controller, an efficiency of 95% is assumed. The average losses of 1.13 kW (motor) and 0.8 kW (MCU) set the duty and the coolant limits: 8 l/min and 50 °C for the motor, 12 l/min and 65 °C for the MCU. Those loss profiles then drive a Simulink thermal-management model — motor block, MCU block, radiator, fan, pump and effectiveness calculators, with delay blocks representing coolant transit time between each — that outputs coolant temperatures at every location. Results: coolant at the radiator inlet averages 47.3 °C, at the motor inlet 38.4 °C and at the MCU inlet 41.3 °C, with maximum coolant inlet of 46.7 °C, so the motor stays below 50 °C and the MCU below 65 °C. The MCU sits on a CFRP sandwich mount that also carries the LV battery.",
          achievements: [
            "Built instantaneous motor and MCU loss profiles from the EMRAX 228 efficiency map and an assumed 95% controller efficiency, giving 1.13 kW and 0.8 kW average heat loads.",
            "Developed a Simulink thermal-management model with transport delays that reports coolant temperature at every point of the loop every 0.025 s.",
            "Confirmed motor temperature below 50 °C and MCU below 65 °C with one radiator (average inlets 38.4 °C and 41.3 °C).",
            "Documented the loss mechanisms retained and neglected, so the model's assumptions are explicit."
          ],
          tools: ["MATLAB / Simulink", "EMRAX 228 efficiency map", "SolidWorks"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/motor-and-mcu-cooling/01.png", caption: "Motor loss profile over the drive cycle", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/motor-and-mcu-cooling/02.png", caption: "Motor-controller loss profile over the drive cycle", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/motor-and-mcu-cooling/03.png", caption: "Simulink thermal-management model: motor and MCU blocks, pump, fan, radiator and effectiveness calculators", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/motor-and-mcu-cooling/04.png", caption: "Loss mechanisms retained (copper DC loss, hysteresis) and neglected (eddy losses)", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/motor-and-mcu-cooling/05.png", caption: "Simulated motor and MCU temperature against time", imageFit: "contain" }
        ]
      },
      {
        id: "optimumlap-powertrain-sizing", thumbAspect: 1.87, title: "OptimumLap Powertrain Sizing", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23/optimumlap-powertrain-sizing/thumb.png", imageFit: "contain",
        highlights: ["70 kW peak / 45 kW continuous target from traction-limited lap-time sensitivity"],
        metrics: [
          { value: "70 kW", label: "Peak power target" },
          { value: "45 kW", label: "Continuous power target" },
          { value: "EMRAX 228", label: "Motor selected (derated to 80 kW)" }
        ],
        writeup: {
          overview: "Rather than picking a motor by spec-sheet ambition, the powertrain's power requirement was set by asking how much power the tyres can actually use. The answer came from lap-time simulations run at the tyre traction limit across several aero packages.",
          approach: "For the chosen tyre the maximum longitudinal friction force was computed from friction data, CG height, mass distribution and longitudinal load transfer, then multiplied by tyre radius to give the maximum no-slip wheel torque. For each candidate power level the motor's characteristic curve was reshaped into a traction-limited curve using that torque as peak (with gear-ratio and rpm scaling), and these modified curves were loaded into OptimumLap with the final-drive ratio fixed at 1 so motor power was the only variable. Sweeping power for endurance and autocross on the FSAE Hockenheimring track, for three aero cases, produced power-sensitivity curves whose saturation points mark the power beyond which lap time stops improving: about 65 kW with no aero, 70 kW with wings only and 73 kW with the full package at peak, and roughly 39–49 kW continuous. The wings-only values of 70 kW peak and 45 kW continuous were adopted as the minimum requirement. Market research on six PMSM motors (BRUSA HSM1, DANA TM4, YASA P400R, HVH 250-090, EMRAX 208 and 228) then favoured the EMRAX 228 MV: although the smaller 208 would have met the target, the 228 derated to the 80 kW rule limit is 17% more powerful, lasts longer when derated, and can be reused on future cars. A single-motor and Torsen limited-slip differential layout scored 4.05 out of 5 in the powertrain-type decision matrix.",
          achievements: [
            "Built traction-limited motor curves and ran OptimumLap point-mass simulations to generate endurance and autocross power-sensitivity curves for three aero configurations.",
            "Derived saturation points of 65 / 70 / 73 kW peak (no aero / wings / full package) and set the target at 70 kW peak and 45 kW continuous.",
            "Selected a PMSM single-motor + Torsen differential layout (4.05/5) and the EMRAX 228 MV derated to 80 kW after a six-motor market comparison."
          ],
          tools: ["OptimumLap", "MATLAB", "Excel decision matrices"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/optimumlap-powertrain-sizing/01.png", caption: "Power-sensitivity curves: lap time against peak and continuous motor power, endurance and autocross, three aero cases", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/optimumlap-powertrain-sizing/02.png", caption: "Traction-limited motor torque and power curve loaded into OptimumLap", imageFit: "contain" }
        ]
      },
      {
        id: "pacejka-tyre-modeling", thumbAspect: 1.58, title: "Pacejka Tyre Modeling", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23/pacejka-tyre-modeling/thumb.png", imageFit: "contain",
        highlights: ["First processed TTC data into tyre models; Hoosier R25B 20.5/7.0 chosen from four candidates"],
        metrics: [
          { value: "4", label: "Tyres compared" },
          { value: "10 psi", label: "Pressure analysed" },
          { value: "13 in", label: "Rim size selected" }
        ],
        writeup: {
          overview: "RMSE'19 used no tyre modelling — raw data was read off tables. For RMSE'23 the Tyre Testing Consortium data was processed into Pacejka tyre models, and the tyre was chosen by comparing those models across traction, response, temperature and camber sensitivity.",
          approach: "With an estimated car mass near 290 kg, 13-inch wheels with roughly 20-inch tyres were preferred over the 10-inch options for performance and packaging flexibility. Restricting to tyres with TTC data and in-country availability left four: Hoosier R25B 20.5/7.0 and 20.5/6.0 (13 in), Avon A92 7.2/20.0 and Goodyear D2704 20.5/7.0. Raw TTC data was split by pressure — 10 psi chosen as the balance between higher mu and lower wear — and then by load and camber, and Pacejka magic-formula models were fitted. For each tyre the team plotted longitudinal mu against slip ratio, tyre temperature against time, and extracted peak mu in acceleration, braking and cornering, peak slip angle, spring rate, cornering stiffness, mass, operating temperature and mu drop-off with camber into a rating table. Tyre temperature was weighed because skidpad and autocross are too short for tyres to heat far, so a tyre that delivers force at a lower temperature is preferred. The Hoosier 20.5/7.0 led on acceleration and cornering traction, reached peak lateral force fastest and ran coolest, so it was selected. Its one weakness, a heavy force loss with camber change, was passed to the suspension team, who targeted minimum camber change in both roll and heave.",
          achievements: [
            "Converted raw TTC data into Pacejka MF 5.2 models, the team's first model-based tyre characterisation, which later fed the braking, powertrain and lap-time simulations.",
            "Compared four 13-inch candidates on mu, slip angle, spring rate, cornering stiffness, mass, temperature and camber sensitivity, and selected the Hoosier R25B 20.5/7.0.",
            "Fed the tyre's camber sensitivity back into the suspension design as a minimum-camber-change kinematic target."
          ],
          tools: ["Pacejka MF 5.2", "TTC tyre data", "MATLAB"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/pacejka-tyre-modeling/01.png", caption: "Tyre comparison matrix: Hoosier R25B 20.5/7.0 and 20.5/6.0, Avon A92 and Goodyear D2704", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/pacejka-tyre-modeling/02.png", caption: "Static spring rate, cornering stiffness and weight of the shortlisted tyres", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/pacejka-tyre-modeling/03.png", caption: "Cornering test summary: peak mu, peak slip angle and camber drop-off", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/pacejka-tyre-modeling/04.png", caption: "Drive/brake test summary: acceleration and braking mu with camber drop-off", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/pacejka-tyre-modeling/05.png", caption: "Camber angle against maximum tyre force at a fixed load", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/pacejka-tyre-modeling/06.png", caption: "Slip angle against lateral force at a fixed load for the candidate tyres", imageFit: "contain" }
        ]
      },
      {
        id: "topology-optimization", thumbAspect: 2.28, title: "Topology Optimization", category: "Structures & Composites", image: "assets/img/subprojects/rmse23/topology-optimization/thumb.png", imageFit: "contain",
        highlights: ["Triangulated 6061-T6 pedals, rockers and uprights lightened by optimization and FEA"],
        metrics: [
          { value: "159 g / 104 g", label: "Brake / accelerator pedal" },
          { value: "112 g / 101 g", label: "Front / rear rocker" },
          { value: "2000 N", label: "Brake pedal rule load" }
        ],
        writeup: {
          overview: "Many of the parts on a car are over-built simply because they were drawn conservatively. For RMSE'23, topology optimization and triangulation were used on the brake and accelerator pedals, suspension rockers and uprights to take mass out of the load path without giving up the rule-book strength requirements.",
          approach: "The previous season's pedals used an I-beam section that worked but carried unnecessary mass; the new brake and accelerator pedals are triangulated, with geometry iterated several times. Pedal position and travel came from the ergonomics and chassis teams — a 15° pedal sweep with the lower-leg-to-foot angle at 90° at maximum travel — and the brake pedal must withstand 2000 N. Both are Al 6061-T6 hard-anodised: the brake pedal 159 g, the accelerator pedal 104 g, with the brake-pedal mount at 219 g and the baseplate triangulated too. The brake-over-travel switch sits in the mount's centre rib, and torsion springs (2 mm wire, about 2 N·m/° rate, FOS 2) replaced the extension springs of the previous design to return the accelerator pedal. The same approach produced the front rocker (112 g, 6061-T6) and rear rocker (101 g), and 7075-T6 front and rear uprights (440 g and 420 g) and front hub (453 g). Each part was loaded in ANSYS with the bearing, pedal or damper loads from the dynamics simulations, with fixed supports at the real mounting points, and reviewed for equivalent stress and factor of safety before cutting. Footrest and heel support moved from aluminium to CFRP sandwich.",
          achievements: [
            "Replaced the I-beam pedals with triangulated Al 6061-T6 designs: brake pedal 159 g, accelerator pedal 104 g, brake-pedal mount 219 g, validated for the 2000 N brake-pedal rule load.",
            "Applied the same optimization and FEA workflow to rockers (112 g front, 101 g rear) and 7075-T6 uprights (440 g front, 420 g rear), using loads from the suspension simulations.",
            "Simplified the accelerator return mechanism with a calculated torsion spring (2 mm wire, ~2 N·m/°, FOS 2) and added mechanical stops to protect the potentiometers.",
            "Moved the footrest and heel support to CFRP sandwich laminates tied by a 2 mm stainless plate."
          ],
          tools: ["ANSYS Mechanical", "SolidWorks", "Topology optimization", "CNC machining (Al 6061-T6 / 7075-T6)"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/topology-optimization/01.png", caption: "Optimized rocker: loading and support set-up", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/02.png", caption: "Optimized rocker: factor-of-safety plot", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/03.png", caption: "Brake pedal load case: 2000 N pedal force with fixed pivot", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/04.png", caption: "Brake pedal equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/05.png", caption: "Accelerator pedal load case", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/06.png", caption: "Accelerator pedal equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/07.png", caption: "Triangulated upright: bearing-load case", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/08.png", caption: "Triangulated upright: equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23/topology-optimization/09.png", caption: "Final iteration of the optimized bracket with its loads and supports", imageFit: "contain" }
        ]
      },
      {
        id: "tyre-slip-braking-model", thumbAspect: 2.09, title: "Tyre-Slip Braking Model", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23/tyre-slip-braking-model/thumb.png", imageFit: "contain",
        highlights: ["Simulink slip model set a 3.1 brake bias and cut lock-up pedal force to 300 N"],
        metrics: [
          { value: "3.1", label: "Front : rear brake bias" },
          { value: "300 N", label: "Pedal force for lock-up (from 400 N)" },
          { value: "0.45", label: "BP-20 pad friction (avg.)" }
        ],
        writeup: {
          overview: "Brake bias is normally a rule-of-thumb split. For RMSE'23 it was calculated: a tyre-slip braking model finds the bias at which front and rear tyres reach their traction limit together, and the hydraulic hardware was then chosen to realise it, while cutting the pedal force needed for lock-up from 400 N on RMSE'19 to 300 N.",
          approach: "A MATLAB-Simulink model takes pedal position, pedal ratio, balance-bar bias, and master-cylinder and caliper areas, computes line pressures and brake torques, and passes them to a Pacejka MF 5.2 tyre model that returns slip and frictional force at each tyre; vehicle state (CG height, wheelbase, load transfer, aerodynamic downforce and drag) feeds back to update the normal load on each axle. This gives the limiting braking torque for each axle without lock-up, maximum retardation, minimum stopping distance and time. The result was a front-to-rear bias of 3.1, so master cylinders with bore areas near that ratio were chosen: Wilwood compact remote-flange push-type cylinders, 0.625 in bore (0.310 in²) at the front and 1.125 in (0.97 in²) at the rear. A caliper with large piston area allows a smaller pedal ratio (less compliance), leading to the Wilwood DynaPro Single caliper with BP-20 pads (average mu about 0.45 between 100 and 700 °F) and DOT 4 fluid for its higher boiling point. A balance-bar assembly with a laterally adjustable spherical bearing lets bias be fine-tuned in testing. The write-up also flags what to improve: a combined-slip tyre model, convective coefficients from CFD, and tighter brake packaging inside the wheel.",
          achievements: [
            "Built a Simulink tyre-slip braking model (Pacejka MF 5.2) that computes limiting brake torque, retardation and stopping distance and sets the brake bias at 3.1.",
            "Matched the 3.1 bias in hardware: Wilwood 0.625 in / 1.125 in master cylinders, DynaPro Single calipers, BP-20 pads and DOT 4 fluid.",
            "Reduced the pedal force required for wheel lock-up from 400 N (RMSE'19) to 300 N, and added a spherical-bearing balance bar for on-track bias tuning."
          ],
          tools: ["MATLAB / Simulink", "Pacejka MF 5.2", "Wilwood hardware"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23/tyre-slip-braking-model/01.png", caption: "Simulink brake-sizing model: pedal box, calipers, tyres and vehicle-state feedback", imageFit: "contain" }
        ]
      }
    ],
    rmse21: [
      {
        id: "538v-battery-pack-sizing-and-design", thumbAspect: 1.45, title: "538V Battery Pack Sizing & Design", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/thumb.png", imageFit: "contain",
        highlights: ["538 V / 18 Ah, 128s6p accumulator sized from a well-to-wheel energy model"],
        metrics: [
          { value: "538 V · 18 Ah", label: "128s6p, Sony VTC6" },
          { value: "8 × 16s6p", label: "Segments of Energus modules" },
          { value: "< 12 kg", label: "Container mass target (RMSE'19: 22 kg)" }
        ],
        writeup: {
          overview: "The accumulator is the most expensive and labour-intensive part of an electric Formula Student car, and RMSE'19's had been hard to assemble, short of space for AIRs and fuses, unplanned for harnessing, and heavy at 22 kg. This project sized the traction pack from a vehicle-level energy model and then chose the cells, segmentation and HV hardware so it would be reliable and easy to build.",
          approach: "Sizing started from a Simulink 'wheel-to-well' powertrain model: a PI longitudinal driver follows the endurance drive cycle; road-load forces and transmission/drivetrain losses convert speed to motor torque and rpm; motor and controller blocks (efficiency maps) return current and loss; a battery block tracks SOC and terminal voltage; and a regeneration block is included. It reports total battery energy, cell mass, powertrain heat loss and average efficiency, so pack capacity follows from the actual duty rather than a guess. Cell choice used a weighted decision matrix whose priority order was manufacturability, then energy density and safety, cost and discharge capability; Sony VTC5 and VTC6 and Samsung 25R and 30Q were compared, and the ranking favoured pre-assembled cylindrical modules even at roughly twice the price of loose cells. Energus 1s6p Sony VTC6 modules were selected: individually fused cells, an integrated temperature sensor, UL 94 V-0 housings, 385 Wh/L and 207 Wh/kg, specified for 400–600 V FSAE traction systems. 128 modules in series give 128s6p (537.6 V at 4.2 V per cell, 18 Ah), split into eight 16-module segments laid out as two rows of eight, which improved packing efficiency and made segment-to-segment Radlok HV connections simpler; an earlier iteration used six single-row 22-module segments. The HV hardware was specified around this: GX14 350 A contactors as AIRs, a Bel 1000 Vdc fast fuse, and orange HV connectors, with the harness laid out in CAD rather than improvised on the car.",
          achievements: [
            "Built a Simulink wheel-to-well sizing model (driver, road load, drivetrain, motor and controller, battery and regeneration blocks) that sized a 538 V / 18 Ah 128s6p pack from the endurance drive cycle.",
            "Chose pre-assembled Energus Sony VTC6 1s6p modules over cheaper loose cells using a weighted decision matrix, trading roughly 2× cost for manufacturability and safety.",
            "Segmented the pack into eight 16s6p segments (two rows of eight modules) joined by Radlok connectors, with AIRs, fuse, pre-charge, IMD and BMS placed and harnessed in CAD.",
            "Set a container-mass target under 12 kg, against 22 kg for the RMSE'19 accumulator, and designed the layout around it."
          ],
          tools: ["MATLAB / Simulink", "SolidWorks", "OptimumLap", "Energus VTC6 modules"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/01.png", caption: "Top-level Simulink wheel-to-well accumulator sizing model", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/02.png", caption: "Transmission and drivetrain-loss subsystem: gear reduction, friction and inertial torque", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/03.png", caption: "Regenerative-braking subsystem with generator efficiency map", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/04.png", caption: "Motor and motor-controller efficiency and loss subsystem", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/05.png", caption: "Results dashboard: powertrain efficiency, heat dissipated, battery energy and cell mass", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/06.png", caption: "Model structure: drive cycle, road-load forces, drivetrain, motor and controller, battery", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/07.png", caption: "Energus 1s6p Sony VTC6 module", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/08.png", caption: "Cell module with its BMS board mounted on top", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/09.png", caption: "Cell comparison: Sony VTC5 / VTC6 and Samsung 25R / 30Q", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/10.png", caption: "Endurance drive-cycle outputs: speed, instantaneous losses, cell heat generation and power", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/11.png", caption: "GX14 contactor used as the accumulator isolation relay (AIR)", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/12.png", caption: "Bel 1000 Vdc HV fuse", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/13.png", caption: "HV connector terminal", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/14.png", caption: "HV terminal pin used in the segment interconnects", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/15.png", caption: "Orange HV connector pair with HV cable", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/16.jpg", caption: "Accumulator container with segments, HV cabling and electronics", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/17.png", caption: "Top view of the pack layout: segments, pre-charge resistor and current sensor", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/18.png", caption: "Segment detail: Radlok connector, M5 fastening, voltage-sense ring lugs, busbar and copper spacer", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/538v-battery-pack-sizing-and-design/19.png", caption: "Annotated accumulator: BMS, master BMS, IMD, fuse, pre-charge relay, AIR 1 and AIR 2, voltage indicator", imageFit: "contain" }
        ]
      },
      {
        id: "battery-forced-convection", thumbAspect: 1.75, title: "Battery Forced Convection", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse21/battery-forced-convection/thumb.png", imageFit: "contain",
        highlights: ["Icepak CFD showed 72.4 °C without cooling; two-fan forced air holds cells under 60 °C"],
        metrics: [
          { value: "72.4 → < 60 °C", label: "End-of-endurance cell temp" },
          { value: "2 W / cell", label: "Joule heating at a 10 A design current" },
          { value: "2 × 120 mm", label: "Fans, 150 Pa @ 2.7 m³/min" }
        ],
        writeup: {
          overview: "Sustained discharge heats an accumulator, and above 60 °C cells lose capacity and power and risk thermal runaway. This project designed an air-cooling system that keeps every cell under 60 °C for the whole endurance run while spending as little mass and power as possible.",
          approach: "Heat generation was modelled as Joule heating only: a design current of 10 A per cell (about 7 A average in the endurance cycle, plus margin) through a roughly 20 mΩ cell gives 2 W per cell. A cell-level multi-scale battery model, with positive-tab, active and negative-tab zones, was compared against experimental pulse-discharge data to check that the electrical and thermal behaviour was credible. The pack was then built as an Ansys Icepak model of the 128 Energus modules inside the container, with 7.5 mm holes in the walls as the only air path (air can enter only through the circular gaps between modules), a 1 m/s inlet assumption without fans, a transient k-epsilon solution (0.5 s time step, 1062 s end time, 25 °C ambient, 1 W/m²K wall coefficient) and the endurance current profile imported as a time-varying load. With natural convection alone the cells reached an average 72.4 °C at the end of endurance, so active cooling was needed. Fan selection compared pressure head and flow against the duct's pressure-drop curve; two 120 mm fans giving 150 Pa and 2.7 m³/min were chosen, connected to the container wall by a duct, with the extra headroom covering hot ambient days and keeping mass and consumption low. In the car the sidepod carries air to the accumulator container, and the results were checked as temperature contours and airflow vectors.",
          achievements: [
            "Quantified the need for cooling: with natural convection the average cell temperature reached 72.4 °C at the end of the endurance run, against a 60 °C limit.",
            "Built a transient Ansys Icepak model of the full 128-module pack with imported drive-cycle current, using 2 W/cell Joule heating at a 10 A safety-factored design current.",
            "Sized a two-fan forced-air system (120 mm, 150 Pa, 2.7 m³/min) and duct that holds cells under 60 °C, rejecting roughly 1.2 kW at peak discharge.",
            "Compared a multi-scale battery model against pulse-discharge test data to check the cell's electro-thermal behaviour before relying on the CFD."
          ],
          tools: ["Ansys Icepak", "Ansys Fluent battery model", "SolidWorks", "MATLAB"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/01.png", caption: "Cell pulse-test data: current and voltage against test time", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/02.png", caption: "Cell model against experimental discharge curves", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/03.png", caption: "Fan operating point: temperature and pressure drop against flow rate", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/04.png", caption: "Two-fan cooling duct on the accumulator container", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/05.png", caption: "Sidepod air diverted through the chassis to reach the accumulator container", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/06.png", caption: "Icepak model of the cell array and container", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/07.png", caption: "Icepak model with fans, container wall openings and boundary conditions", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/08.png", caption: "Airflow through the segment blocks: inlet and outlet arrows", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-forced-convection/09.png", caption: "Cell thermal zones in the multi-scale model: positive tab, active zone, negative tab", imageFit: "contain" }
        ]
      },
      {
        id: "battery-pack-enclosure-and-mounting", thumbAspect: 1.32, title: "Battery Pack Enclosure & Mounting", category: "Structures & Composites", image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/thumb.png", imageFit: "contain",
        highlights: ["1.5 mm laser-cut steel container; printed clips cut stress ~50% and lift the 20 g vertical FOS from 0.94 to 2.28"],
        metrics: [
          { value: "2.5 → 1.5 mm", label: "Container wall thickness" },
          { value: "0.94 → 2.28", label: "20 g vertical min. FOS with clips" },
          { value: "10 brackets", label: "Container mounts" }
        ],
        writeup: {
          overview: "The accumulator container has to survive rule-book crash loads, keep water and fire out, hold eight segments in place and be bolted to the chassis — while weighing less than the 22 kg unit it replaces. This project designed the enclosure, its internal clips and its mounting brackets, and proved them in FEA.",
          approach: "Every wall and divider is laser-cut AISI 1020 sheet (cheap and easily machined) that folds and welds into an eight-compartment box with 7.5 mm ventilation holes. The earlier car used 2.5 mm vertical walls; accurate whole-accumulator FEA allowed 1.5 mm this time, with thinner sheet avoided only to prevent post-weld flexing. Special 3D-printed clips (fire-retardant ABS) hold each segment and brace the large walls against bending under longitudinal acceleration; without them the 20 g vertical case dropped to a minimum factor of safety of 0.94, with them to 2.28, and peak stress under 40 g longitudinal fell from 173 MPa to 92 MPa. The container was run in ANSYS Static Structural for the EV5.5 loading — 40 g longitudinal, 40 g lateral and 20 g vertical — each with boundary conditions, total deformation, equivalent stress and factor-of-safety plots, and fixed at ten attachment brackets. The brackets themselves are small machined blocks and U-brackets dimensioned for edge-to-hole-diameter ratios of 1.6 and 1.67 (6 mm bolt holes). Details elsewhere in the container reduce mass and risk: a CFRP cooling duct saves about 300 g, PCBs sit beside the cells at the rear to lower the CG, a firewall and sidepods keep water off the vents, and every cable entry passes through a grommet.",
          achievements: [
            "Designed an eight-compartment laser-cut AISI 1020 container with 1.5 mm walls (from 2.5 mm), and verified it for 40 g longitudinal, 40 g lateral and 20 g vertical loads in ANSYS.",
            "Added 3D-printed segment-retention clips that raised the minimum factor of safety from 1.79 / 1.58 / 0.94 to 3.37 / 3.12 / 2.28 across the three load cases.",
            "Detailed the attachment brackets with bolt-hole edge distances of 1.6–1.67 D and mounted the box on ten brackets.",
            "Saved weight and risk with a CFRP rear duct (about 300 g), low-CG PCB placement and grommet-sealed wire entries."
          ],
          tools: ["SolidWorks", "ANSYS Static Structural", "Laser cutting", "FDM 3D printing (fire-retardant ABS)"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/01.jpg", caption: "Test-fitting laser-cut perforated segment walls" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/02.jpg", caption: "Laser-cut sheet parts laid out before bending and welding" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/03.jpg", caption: "Welded steel container with its segment compartments" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/04.png", caption: "Accumulator attachment bracket drawing (block type, e/D = 1.6)", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/05.png", caption: "Accumulator attachment bracket drawing (U type, e/D = 1.667)", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/06.png", caption: "Cell module and BMS board, CAD", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/07.png", caption: "Retention clip and busbar detail between modules" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/08.png", caption: "Closed container CAD with mounting feet", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/09.png", caption: "Container without lid: compartments and divider walls", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/10.jpg", caption: "40 g load case — total deformation", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/11.jpg", caption: "40 g load case — equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/12.jpg", caption: "40 g load case — factor of safety", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/13.jpg", caption: "Lateral load case: fixed supports and acceleration", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/14.jpg", caption: "Lateral load case — total deformation", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/15.jpg", caption: "Lateral load case — equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/16.jpg", caption: "Lateral load case — factor of safety", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/17.jpg", caption: "Vertical (20 g) load case: fixed supports and acceleration", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/18.jpg", caption: "Vertical load case — total deformation", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/19.jpg", caption: "Vertical load case — equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/battery-pack-enclosure-and-mounting/20.jpg", caption: "Vertical load case — factor of safety", imageFit: "contain" }
        ]
      },
      {
        id: "brake-disc-design", thumbAspect: 1.28, title: "Brake Disc Design", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse21/brake-disc-design/thumb.png", imageFit: "contain",
        highlights: ["220 mm AISI 4130 slotted discs sized for 300–450 °C endurance and checked in thermal and structural FEA"],
        metrics: [
          { value: "220 mm", label: "Disc diameter" },
          { value: "300–450 °C", label: "Endurance working temperature" },
          { value: "AISI 4130", label: "Normalized at 870 °C" }
        ],
        writeup: {
          overview: "A disc that is strong enough can still fail by getting too hot. The brake discs were designed thermally first: how hot do they get over an endurance run, what material survives it, and does the geometry hold up under the worst single stop.",
          approach: "The braking calculations fixed the geometry limits — a 220 mm diameter and 3.81–5.08 mm thickness depending on the caliper chosen — and the material was AISI 4130 steel normalized at 870 °C, picked for friction, strength and heat capacity at the team's budget. Slots cut into the face increase convective cooling. A Simulink model integrated frictional heat input (friction force × tangential velocity × a rotor/pad partition coefficient) against convective loss over a 300 s drive cycle; the convection coefficient came from a Reynolds–Prandtl–Nusselt correlation, Nu = 0.0296·Re^0.8·Pr^(1/3), evaluated at vehicle speed. It showed the rotor settles at roughly 300–450 °C for the endurance track, which then drove the choice of brake fluid and pads. For FEA, a worst-case stop was defined — 1.8 g constant retardation for 1.57 s from 100 km/h — with a heat-flow input of 39301 − 25054t W and a convection coefficient of 51.85 − 33t W/m²°C, followed by 0.43 s of cooling at zero input. Transient thermal analysis gave the temperature field and heat-flux distribution (about 369 °C peak), and a structural analysis with the same test case, brake-pad clamp loads and torque as boundary conditions gave a peak equivalent stress near 139 MPa and the factor of safety. Brake lines were routed with Wilwood stainless braided flexlines (20, 25 and 40 in) and A-1 Racing fittings, with pressure sensors for the BSPD in the front and rear lines.",
          achievements: [
            "Built a Simulink brake-disc thermal model (frictional heat input and convective loss) that predicted a 300–450 °C working range over a 300 s endurance cycle and set the material and fluid choice.",
            "Sized a 220 mm, 3.81–5.08 mm AISI 4130 slotted disc and verified it with transient thermal FEA (about 369 °C peak, heat-flux map) and structural FEA (about 139 MPa peak stress) for a 1.8 g, 100 km/h stop.",
            "Routed the hydraulic lines with stainless braided flexlines and defined the fittings for every run, including sensor tees for the BSPD."
          ],
          tools: ["MATLAB / Simulink", "ANSYS Transient Thermal & Static Structural", "SolidWorks"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/brake-disc-design/01.png", caption: "Simulink thermal model: heat input block and heat-loss block", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/02.jpg", caption: "Simulated rotor temperature over the 300 s drive cycle", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/03.png", caption: "Heat input to the rotor over the drive cycle", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/04.jpg", caption: "Transient thermal FEA boundary conditions: heat flow, convection and radiation", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/05.jpg", caption: "Transient thermal FEA — temperature contour", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/06.jpg", caption: "Transient thermal FEA — total heat-flux distribution", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/07.jpg", caption: "Structural FEA boundary conditions: fixed support, brake moment and pad forces", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/08.jpg", caption: "Structural FEA — equivalent stress on the disc", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/brake-disc-design/09.png", caption: "Brake-line routing in the chassis: flexline lengths, fittings and pressure sensors", imageFit: "contain" }
        ]
      },
      {
        id: "drivetrain-and-pedal-box", thumbAspect: 1.83, title: "Drivetrain & Pedal Box", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/thumb.jpg", imageFit: "contain",
        highlights: ["EMRAX 228 + Torsen differential on a 3.615:1 chain drive, with a balance-bar pedal box tuned to 0.55F / 0.45R"],
        metrics: [
          { value: "3.615 : 1", label: "Chain reduction (13T / 47T)" },
          { value: "4.05 / 5", label: "Single motor + Torsen LSD score" },
          { value: "0.55F / 0.45R", label: "Brake balance-bar bias" }
        ],
        writeup: {
          overview: "The powertrain and the driver's pedals were designed as one system: pick the motor, controller, differential and gear ratio that let the car live at the tyre's traction limit, and build a pedal box whose hydraulics hit the target brake bias with a lighter pedal force.",
          approach: "A decision matrix over weight, cost, complexity and dynamic performance favoured a single motor with a limited-slip differential (weighted score 4.05 / 5). Lap-time simulations at the tyre traction limit set the minimum power at 70 kW peak and 45 kW continuous, and PMSM technology was chosen over induction and BLDC for its wide constant-torque speed range, absence of commutation torque ripple and high power density. Of six candidate motors (BRUSA HSM1, DANA TM4, YASA P400R, HVH 250-090, EMRAX 208 and 228 MV), the EMRAX 228 MV, 100 kW peak and derated to the 80 kW rule limit, was taken for its extra headroom and longer life when derated. A BAMOCAR PG D3 400-700 field-oriented controller (400 Arms peak, 200 Arms continuous, above the EMRAX's 340 / 160 Arms; 8.5 kg; under 4 kW loss) is the manufacturer's recommended match. A Torsen limited-slip differential — gear-based, 4.5:1 torque-bias ratio, under 6 kg, no friction discs to wear — beat both a spool and a clutch-type unit. Sweeping gear ratio showed traction is lost above 3.7 and targets are missed below 3.4, so 3.615 (13- and 47-tooth sprockets) was chosen; a TIDC 428 chain (19.3 kN rated, 0.693 kg/m) carries the 9.0 kN peak tension, or 13.6 kN with a 1.5 shock factor, and S6204 / S6307 bearings were sized for a 3.6 million-revolution life. The pedal box uses topology-optimized pedals, a balance bar with an adjustable spherical bearing, and a footrest and heel support in CFRP sandwich, with the pedal travel set to a 15° sweep that puts the ankle at 90° at full effort.",
          achievements: [
            "Selected the EMRAX 228 MV (derated to 80 kW), BAMOCAR PG D3 400-700 controller and Torsen differential from decision matrices and traction-limited lap-time simulation.",
            "Set a 3.615:1 final drive (13T / 47T) between the 3.4 minimum and 3.7 traction limit, and sized a TIDC 428 chain (13.6 kN design load against 19.3 kN rating) and S6204 / S6307 bearings for a 3.6 M-revolution life.",
            "Designed a pedal box with topology-optimized pedals, adjustable balance bar and CFRP footrest and heel support, realising the 3.1 brake-bias target and a 0.55F / 0.45R balance."
          ],
          tools: ["OptimumLap", "MATLAB", "SolidWorks", "Topology optimization"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/01.png", caption: "EMRAX 228 MV specification and weighted decision score", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/02.png", caption: "EMRAX 228 MV torque and power against motor speed", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/03.jpg", caption: "BAMOCAR PG D3 field-oriented motor controller", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/04.png", caption: "Torsen differential: asymmetric torque distribution, under 6 kg, 4.5:1 bias ratio", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/05.png", caption: "Six-motor market comparison: power, torque, weight, cooling, cost and event times", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/06.jpg", caption: "Pedal box CAD: brake pedal, accelerator, master cylinders and baseplate", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/07.jpg", caption: "Pedal box CAD from the opposite side", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/drivetrain-and-pedal-box/08.png", caption: "Event time against final-drive ratio for autocross, acceleration and endurance", imageFit: "contain" }
        ]
      },
      {
        id: "ergonomic-rigs", thumbAspect: 1.3, title: "Ergonomic Rigs", category: "Structures & Composites", image: "assets/img/subprojects/rmse21/ergonomic-rigs/thumb.png", imageFit: "contain",
        highlights: ["Adjustable wooden cockpit jig tested on four drivers set the seat angle and cockpit sizing"],
        metrics: [
          { value: "4", label: "Drivers measured" },
          { value: "50°", label: "Seat inclination chosen" },
          { value: "3", label: "Joint angles checked vs ergonomic ranges" }
        ],
        writeup: {
          overview: "Cockpit dimensions drive the whole chassis, so the team built an adjustable mock-up to find out what drivers actually want before any tubes were cut — good feedback at the lowest possible cost.",
          approach: "The rig is a wooden jig with an adjustable seat, pedal positions and steering reach that test subjects set to their preference while wearing a helmet. Four drivers' body measurements (upper body, head-to-shoulder, upper leg, lower leg and foot size) were recorded, along with the angles they settled on: foot to lower leg, lower to upper leg, upper leg to body and seat inclination. Targets came from the literature (80–90° at the ankle, 110–130° at the knee, 105–115° at the hip, 40–60° seat inclination) and every driver's chosen angles fell inside those ranges. The drivers consistently preferred a more reclined position, so the seat was inclined to 50° (45° for the shortest driver), two seats were made, and the cockpit was lowered — which also lowered the car's CG and improved comfort. Cockpit angles were then checked against the 95th-percentile male and 5th-percentile female ranges, and the results fed the chassis dimensions, the pedal box position and the steering-column inclination.",
          achievements: [
            "Built an adjustable low-cost cockpit rig and measured four drivers' body dimensions and preferred joint angles against literature ranges.",
            "Set seat inclination to about 50° (45° for one driver) because drivers preferred a reclined posture, producing two seat designs.",
            "Used the results to lower and incline the cockpit, reducing CG height and informing chassis, pedal box and steering geometry."
          ],
          tools: ["Wooden adjustable test rig", "SolidWorks", "Ergonomic literature ranges"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/ergonomic-rigs/01.png", caption: "Drivers' body measurements and preferred joint angles against universal ranges", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/ergonomic-rigs/02.png", caption: "Cockpit angle study overlaid on the chassis CAD", imageFit: "contain" }
        ]
      },
      {
        id: "lv-power-management", thumbAspect: 1.96, title: "LV Power Management", category: "Electronics & Controls", image: "assets/img/subprojects/rmse21/lv-power-management/thumb.png", imageFit: "contain",
        highlights: ["A 7s4p LV battery feeding fused, reverse-protected, filtered branches for every low-voltage load"],
        metrics: [
          { value: "7s4p · 25.2 V", label: "Samsung 30Q LV battery" },
          { value: "12 Ah · 60 A", label: "Capacity / peak discharge (5C)" },
          { value: "≈ 360 W @ 92%", label: "LV load / efficiency" }
        ],
        writeup: {
          overview: "Everything that is not the traction system — the VCU, DAQ, shutdown-circuit relays, coolant pump, radiator and accumulator fans — runs from the low-voltage system, and a fault in one branch must never take the others down. This project designed that system around a dedicated lithium-ion LV battery and a tree of protected branches.",
          approach: "A separate LV battery was chosen over DC-DC converters for being a robust, high-capacity source that delivers about 360 W at roughly 92% efficiency and is watched by its own BMS (over-voltage, under-voltage, over-current and short-circuit protection). The pack is 28 Samsung 30Q cells in 7s4p — about 25 V and 12 Ah, with a 60 A (5C) peak — selected for best-in-class capacity and energy density at a lower price than Sony VTC6. From the pack, a main fuse feeds one branch per load group: the power card (VCU, DAQ and electronics), motor and MCU thermal (radiator fan and pump) and accumulator thermal (fans), plus an isolated supply for the HV current sensor. Each branch has its own fuse (10 A, 10 A and 5 A downstream of the main), reverse-polarity protection and input and output filters, so a short or a reversed connection is confined to one branch. The power card steps 24 V down to 12 V, 5 V and 3.3 V with isolated DC-DC modules, behind a P-channel MOSFET reverse-polarity guard. The cards that make up the vehicle control unit — power card, control card, DAQ, discharge board and BSPD — are packaged together in one enclosure, with the battery's BMS fault line wired into the shutdown circuit.",
          achievements: [
            "Specified a 7s4p Samsung 30Q LV battery (about 25 V, 12 Ah, 60 A peak) to supply roughly 360 W of low-voltage load at about 92% efficiency.",
            "Designed a tree-structured distribution with a fused, reverse-polarity-protected and filtered branch for each load group, so no single fault removes all low-voltage power.",
            "Designed the power card — isolated DC-DC conversion to 12 V, 5 V and 3.3 V with a MOSFET reverse-polarity guard — and packaged it with the control, DAQ, discharge and BSPD boards in the VCU enclosure."
          ],
          tools: ["Altium Designer", "SolidWorks", "Samsung 30Q cells"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/lv-power-management/01.png", caption: "LV distribution: battery fuse and fused branches to electronics, motor and MCU thermal, and accumulator thermal loads", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/lv-power-management/02.jpg", caption: "Power card schematic: isolated DC-DC modules for 12 V, 5 V and 3.3 V", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/lv-power-management/03.jpg", caption: "Power card PCB render", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/lv-power-management/04.png", caption: "VCU enclosure layout: power card, control card, DAQ, discharge and BSPD PCBs", imageFit: "contain" }
        ]
      },
      {
        id: "parametric-suspension-cad", thumbAspect: 1.86, title: "Parametric Suspension CAD", category: "Structures & Composites", image: "assets/img/subprojects/rmse21/parametric-suspension-cad/thumb.png", imageFit: "contain",
        highlights: ["Suspension CAD regenerated from the VD team's hardpoints across 14 kinematic iterations"],
        metrics: [
          { value: "14", label: "Kinematic iterations regenerated" },
          { value: "3° / 10 mm", label: "Caster / spindle offset" },
          { value: "3.3 / 3.5 Hz", label: "Front / rear ride frequency" }
        ],
        writeup: {
          overview: "The vehicle-dynamics team iterates hardpoints constantly, and a suspension modelled by hand has to be redrawn every time. Here the whole suspension — uprights, rockers and A-arms — was built so it regenerates from the hardpoint coordinates, turning each geometry change into an update rather than a redraw.",
          approach: "Outboard hardpoints started from wheel packaging: a 23 mm disc-to-rim offset fixed the brake position, a 48 mm lower-ball-joint offset pushed the LBJ outward, a 15 mm scrub kept steer torque low while preserving feel, a 96 mm LBJ height held KPI inside its bound and a 90 mm UBJ height kept the upright small. Caster of 3° gave useful outside-tyre camber gain, with a 10 mm spindle offset limiting trail to about 4 mm. Inboard points were bounded through tables of output parameters and a custom SolidWorks model that logged camber, trail, scrub and contact-patch lift, with preliminary 2-D work in V-Susp. Actuation is pushrod with a U-bar anti-roll bar, using Öhlins TTX25 MKII dampers with 57 mm travel; a half-car model chose 3.3 Hz front and 3.5 Hz rear ride frequencies from pitch, response time, ride-height variation and tyre-deflection outputs. The steering geometry is anti-Ackermann (validated against lateral force against slip angle from tyre data), with the rack ahead of the axle so the UV-joint angle falls under 40° (from 60° on RMSE'20) and a 5–8 N·m steering-torque target (7.0 N·m achieved), 120 mm and 90 mm steer arms for high- and low-speed corners and a 101.6 mm/rev rack. The 2-D top view feeds a 'Front Geometry' SolidWorks sketch in which every parameter drives the solid model, so uprights, rockers and arms follow the 14 kinematic iterations without manual rework.",
          achievements: [
            "Built fully parametric suspension CAD driven by the VD hardpoint tables, regenerating uprights, rockers and A-arms across 14 kinematic iterations.",
            "Selected outboard geometry from wheel packaging and sweeps of camber, trail, scrub and contact-patch lift: 3° caster, 10 mm spindle offset, 15 mm scrub, 96 mm LBJ and 90 mm UBJ heights.",
            "Chose pushrod actuation with Öhlins TTX25 dampers and 3.3 / 3.5 Hz ride frequencies from a half-car model, and an anti-Ackermann steering geometry with the UV-joint angle cut from 60° to under 40°."
          ],
          tools: ["SolidWorks (equation-driven CAD)", "MATLAB half-car model", "V-Susp"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/parametric-suspension-cad/01.png", caption: "Four-corner suspension hardpoint skeleton in SolidWorks", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/parametric-suspension-cad/02.jpg", caption: "Steering system: rack, tie rods, column and wheel", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/parametric-suspension-cad/03.jpg", caption: "Front corner assembly: arms, pushrod, rocker, damper and upright", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/parametric-suspension-cad/04.jpg", caption: "Front axle: both corners with rockers and dampers", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/parametric-suspension-cad/05.png", caption: "Wheel and kingpin-axis geometry used to read caster, KPI, scrub and trail", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/parametric-suspension-cad/06.png", caption: "Dimensioned front-geometry sketch driving the 3D model", imageFit: "contain" }
        ]
      },
      {
        id: "precharge-and-rc-discharge-circuitry", thumbAspect: 2.22, title: "Precharge & RC Discharge Circuitry", category: "Electronics & Controls", image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/thumb.png", imageFit: "contain",
        highlights: ["Inrush-limited AIR closing at 90–95% bus voltage and a 6.8 kΩ RC discharge that dumps the DC link on any fault"],
        metrics: [
          { value: "≥ 90–95%", label: "Bus voltage before AIR+ closes" },
          { value: "6.8 kΩ · 100 W", label: "Discharge resistor (Ohmite, 750 V)" },
          { value: "320 µF", label: "DC-link capacitance modelled" }
        ],
        writeup: {
          overview: "Connecting a 538 V pack straight to a motor controller's input capacitors would slam in a huge inrush current and could blow the fuse, weld the contactors or damage cells. This project designed the pre-charge circuit that makes the connection gently, and the discharge circuit that safely removes the stored energy afterwards.",
          approach: "On start-up, closing the tractive-system master switch first closes AIR− and the pre-charge relay, charging the controller's DC link through a pre-charge resistor. A comparator on the discharge PCB scales the battery voltage and compares it with the controller-side voltage; once the controller has reached the threshold (90% in the 2021 design, 95% in the later one) it signals the logic that closes AIR+ and opens the pre-charge relay, with flyback diodes across the relay coils protecting the MOSFET drivers. The charge curve follows V = 460.8·(1 − e^(−t/RC)), with R the pre-charge resistance and C the 320 µF DC link. When the shutdown circuit opens or the TSMS is switched off, the discharge relay connects a 6.8 kΩ, 100 W, 750 V Ohmite resistor across the DC link, giving V = 537.6·e^(−t/(6800 Ω × 320 µF)) with a worst-case current of about 1.25 A, so the bus falls below 60 V in about 4.8 s. The same board measures the 60 V threshold with comparators, isolated by an optocoupler for the TSAL logic, reads the auxiliary contacts of the AIRs and pre-charge relay, and was checked against EV4.10 in simulation. The discharge resistor, relay and energy meter sit together in a single protected box with the TSMP connections, and the pre-charge resistor and relay live inside the accumulator. The circuit is one stage of the shutdown chain that runs from the LVMS through LV BMS, BSPD, IMD and AMS to the shutdown buttons, BOTS, inertia switch, HVD interlock and TSMS.",
          achievements: [
            "Designed pre-charge control that closes AIR+ only once the DC link reaches the threshold bus voltage, limiting inrush through a resistor and relay with flyback-protected coil drivers.",
            "Sized a 6.8 kΩ / 100 W discharge resistor and relay for an RC discharge (τ ≈ 2.2 s) that de-energises the DC link on any fault, verified against simulated voltage and current curves.",
            "Implemented the 60 V detection, relay-state feedback and TSAL control logic and validated it against EV4.10 in simulation, then packaged it as a discharge PCB and an energy-meter box."
          ],
          tools: ["Altium Designer", "LTspice", "NI Multisim", "MATLAB"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/01.png", caption: "GX14 contactor used for the AIRs and pre-charge path", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/02.png", caption: "Wire-wound power resistor of the type used in the HV resistor network", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/03.png", caption: "Pre-charge resistor and relay positions inside the accumulator", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/04.png", caption: "Discharge PCB (v3) CAD", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/05.png", caption: "Discharge board schematic: TSMP, discharge relay and resistor", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/06.png", caption: "Shutdown chain: LVMS, LV BMS, BSPD, IMD, AMS, shutdown buttons, BOTS, inertia switch, HVD interlock, TSMS", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/07.png", caption: "Pre-charge and discharge simulation circuit with the DC-link capacitor", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/08.png", caption: "Discharge relay and resistor wiring with TSMP and controller connections", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/09.png", caption: "Simulated DC-link voltage decaying through the discharge resistor", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/precharge-and-rc-discharge-circuitry/10.png", caption: "Discharge resistor and relay in the energy-meter box with TS connections", imageFit: "contain" }
        ]
      },
      {
        id: "suspension-and-drivetrain-components", thumbAspect: 2.22, title: "Suspension & Drivetrain Components", category: "Structures & Composites", image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/thumb.jpg", imageFit: "contain",
        highlights: ["25% mass cut at a 1.2 Goodman fatigue FOS; every part FEA-verified for its worst-case load"],
        metrics: [
          { value: "−25%", label: "Suspension & drivetrain mass" },
          { value: "1.2", label: "Goodman fatigue FOS target" },
          { value: "−1.3 kg", label: "Per integrated hub assembly" }
        ],
        writeup: {
          overview: "Unsprung and rotating mass are the most valuable mass on the car. This project designed and analysed the individual suspension and drivetrain components — uprights, hubs, brake mounts, rockers, sprockets, motor and differential mounts, eccentric discs and half-shafts — to be as light as their real worst-case loads allow.",
          approach: "Each part was sized to its governing cornering, braking and acceleration load case rather than to a uniform safety factor, using a 1.2 Goodman fatigue factor of safety as the sizing constraint so sections could thin out wherever yield, not fatigue, did not govern; the final CAD FEA showed a minimum factor of safety of 2.5 across the assembly, and total suspension and drivetrain mass fell 25%. Uprights (7075-T6 aluminium, 440 g front, 420 g rear) carry integrated brake-caliper mounts checked under bearing loads; the front hub (453 g) is 7075-T6; rockers are 6061-T6 (112 g front, 101 g rear). Rear drive uses an integrated hub with the tripod joint built in, saving about 1.3 kg per hub assembly: steel inserts protect the hub lining from the spider's fatigue loading, a faceplate retains the spider, and 50 mm of hub length lets it plunge with wheel travel. The spider profile was reverse-engineered by 3-D scanning an aftermarket part and rebuilding it in Geomagic Design X. Sprockets are 13T in AISI 4340 (press-fit on the motor shaft) and 47T in 7075-T6; motor and differential mounts were loaded with bearing reactions derived by treating the shaft as a beam on two pins (up to 5.05 kN); the eccentric chain-tensioner discs increased their offset from 5 mm to 10 mm; and half-shafts in EN24T (25.4 mm, 410 mm long) were sized with a modified-Goodman torsion analysis that gave a 26 mm minimum diameter at FOS 4. Mounts were laser-cut and welded in dedicated TIG fixtures.",
          achievements: [
            "Cut suspension and drivetrain mass by 25% by sizing each member to its worst-case load at a 1.2 Goodman fatigue FOS, with a minimum FOS of 2.5 confirmed in FEA.",
            "Designed integrated rear hubs with built-in tripod joints (−1.3 kg per assembly), with a reverse-engineered spider and steel fatigue inserts.",
            "Analysed uprights, brake mounts, hubs, sprockets (13T AISI 4340, 47T 7075-T6), motor and differential mounts and eccentric tensioners in ANSYS under bearing, chain and brake loads.",
            "Sized 25.4 mm EN24T half-shafts by a modified-Goodman torsion analysis (26 mm minimum at FOS 4) and moved the chain tensioner offset from 5 to 10 mm."
          ],
          tools: ["SolidWorks", "ANSYS Static Structural", "Geomagic Design X (3D-scan reverse engineering)", "Goodman fatigue analysis"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/01.jpg", caption: "Upright with integrated brake-caliper mount, CAD", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/02.jpg", caption: "Upright viewed with its tie-rod and lower mounting tabs", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/03.jpg", caption: "Adjustable-length pushrod assembly", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/04.jpg", caption: "47-tooth rear sprocket", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/05.jpg", caption: "13-tooth motor sprocket", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/06.jpg", caption: "Hub faceplate that retains the tripod spider", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/07.jpg", caption: "Integrated hub with built-in tripod housing", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/08.png", caption: "Integrated hub FEA: boundary conditions", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/09.png", caption: "Integrated hub FEA: equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/10.png", caption: "Front upright load case", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/11.png", caption: "Front upright equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/12.png", caption: "Front brake mount: bearing-load case", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/13.png", caption: "Front brake mount equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/14.png", caption: "Rear upright load case", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/15.png", caption: "Rear upright equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/16.png", caption: "Rear brake mount: bearing-load case", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/17.png", caption: "Rear brake mount equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/18.png", caption: "Integrated hub: torque-load setup", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/19.png", caption: "Integrated hub: stress result", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/20.png", caption: "13-tooth sprocket: tooth loads", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/21.png", caption: "13-tooth sprocket equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/22.png", caption: "47-tooth sprocket: tooth loads", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/23.png", caption: "47-tooth sprocket equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/24.png", caption: "Left motor mount: bearing load and moment", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/25.png", caption: "Left motor mount equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/26.png", caption: "Right motor mount: bearing load", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/27.png", caption: "Right motor mount equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/28.png", caption: "Right differential mount: bearing load", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/29.png", caption: "Right differential mount equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/30.png", caption: "Left differential mount: bearing load", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/31.png", caption: "Left differential mount equivalent stress", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/32.png", caption: "Eccentric chain-tensioner disc: bearing load", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/suspension-and-drivetrain-components/33.png", caption: "Eccentric disc equivalent stress", imageFit: "contain" }
        ]
      },
      {
        id: "vehicle-harness-and-coolant-line-routing", thumbAspect: 1.78, title: "Vehicle Harness & Coolant Line Routing", category: "Electronics & Controls", image: "assets/img/subprojects/rmse21/vehicle-harness-and-coolant-line-routing/thumb.jpg", imageFit: "contain",
        highlights: ["Harness and 1.9 m of coolant hose routed in CAD, with bend radii and service access checked before build"],
        metrics: [
          { value: "1,900 mm", label: "Total coolant hose run" },
          { value: "5", label: "Hose segments, each measured in CAD" },
          { value: "HV + LV", label: "Harness planned together in CAD" }
        ],
        writeup: {
          overview: "RMSE'19's accumulator had no plan for HV or LV wire management, and hoses and cables were routed by hand on the finished car. For the next car the harness and coolant lines were routed in the master CAD first, so lengths, bend radii and service access were known before anything was cut.",
          approach: "Cable and hose paths were modelled alongside the chassis, suspension and powertrain, then checked against minimum bend radii and for every connector and service point staying reachable with the bodywork on. The coolant circuit was routed first because its lengths feed the thermal model: motor controller to radiator 680 mm, radiator to catch can 550 mm, catch can to pump 220 mm, pump to motor 85 mm and motor back to the controller 365 mm — 1,900 mm in total. The gallery shows the radiator ducts, pump, catch can and controller box with the hose runs between them. Harness choices matched the same routing: 60 mm² and 85 mm² Coroplast cable for HV runs inside the accumulator and between motor and controller (rated 170 A and 1,000 V), ring connectors for AIR and fuse terminations, Radlok maintenance plugs on the accumulator, grommets wherever wires pass through enclosure walls, and Phoenix cables with Würth board connectors on the LV side.",
          achievements: [
            "Routed the vehicle harness and coolant lines in the master CAD, verifying bend radii and service access with bodywork fitted.",
            "Fixed the 1,900 mm, five-segment coolant circuit in CAD before it fed the thermal model.",
            "Specified HV cable (60 / 85 mm² Coroplast, 1,000 V, 170 A), ring lugs, grommets, Radlok maintenance plugs and Phoenix LV cabling to match the routed paths."
          ],
          tools: ["SolidWorks (harness and hose routing)", "MATLAB thermal model inputs"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/vehicle-harness-and-coolant-line-routing/01.jpg", caption: "Harness and coolant routing through a transparent car assembly", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-harness-and-coolant-line-routing/02.png", caption: "Powertrain cooling layout: controller box, radiator ducts, pump and hose runs", imageFit: "contain" }
        ]
      },
      {
        id: "vehicle-simulation", thumbAspect: 2.97, title: "Vehicle Simulation", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse21/vehicle-simulation/thumb.png", imageFit: "contain",
        highlights: ["Forward powertrain model with a PI driver, and a 14-DOF vehicle-model build-out; ABS/TC simulated at +7% lap time"],
        metrics: [
          { value: "+7%", label: "Lap-time gain from simulated ABS / TC" },
          { value: "+12%", label: "Wheel torque from tyre-slip-driven selection" },
          { value: "14 DOF", label: "Full vehicle model (course project)" }
        ],
        writeup: {
          overview: "Before building hardware, the team wanted answers from simulation: how much energy does endurance use, what does a different gear ratio do to acceleration, and is ABS or traction control worth building. This project is that set of models — a forward powertrain simulation, tyre-slip-driven component selection, and a 14-degree-of-freedom vehicle model built as a course project.",
          approach: "The forward model integrates subsystems for the battery (SOC to terminal voltage, with total energy), the motor and controller (efficiency maps looked up from torque and rpm, giving current and loss), the transmission and road-load forces, regeneration, and a longitudinal PI driver that tracks a drive-cycle velocity. It outputs the motor torque profile, power consumption, battery SOC, powertrain efficiency and heat loss, and was used to check each design against the sizing model; sweeping gear ratio against acceleration time (about 4.2 s to 8.5 s across ratios from 1 to 5) located the optimum near the traction limit. Longitudinal tyre-slip simulations compared lap time with and without simulated ABS and traction control to quantify a 7% gain before any control hardware was developed, and the same tyre-slip model drove the motor, differential and gear selection, adding about 12% wheel torque. The 14-DOF full vehicle model was a MIN-300 team project at IIT Roorkee in Spring 2022: sub-models for ride (vertical, roll and pitch), handling (longitudinal, lateral and yaw), suspension forces, tyres and wheels, and the powertrain and braking subsystems (an electric powertrain with a 2-D efficiency lookup and a hydraulic braking model, which were the main contribution here), tested with constant-velocity and constant-acceleration cases and validated on tyre normal forces and vehicle weight. Simulated acceleration and velocity traces over a lap were used to check lap behaviour.",
          achievements: [
            "Built a forward powertrain simulation (battery, motor and controller, transmission and road load, PI driver) reporting torque, power, SOC, efficiency and heat loss over a drive cycle.",
            "Quantified a 7% lap-time benefit from simulated ABS and traction control using a longitudinal tyre-slip model, and gained about 12% wheel torque by selecting motor, differential and gear ratio from it.",
            "Contributed the powertrain and hydraulic-braking subsystems to a 14-DOF full vehicle model in Simulink (ride, handling, suspension, tyre and powertrain sub-models), validated with constant-velocity, constant-acceleration and weight checks."
          ],
          tools: ["MATLAB / Simulink", "OptimumLap"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/01.png", caption: "Battery subsystem: SOC to terminal voltage", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/02.png", caption: "Motor and motor-controller subsystem with efficiency-map lookups", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/03.png", caption: "Transmission and road-load forces subsystem", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/04.png", caption: "Longitudinal PI driver following a drive-cycle velocity", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/05.jpg", caption: "Results: powertrain efficiency, instantaneous loss, heat generated and power", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/06.png", caption: "Simulated longitudinal acceleration over a lap", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/07.png", caption: "Simulated longitudinal velocity over a lap", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21/vehicle-simulation/08.png", caption: "Effect of gear ratio on acceleration-event time", imageFit: "contain" }
        ]
      }
    ],
    iem26: [
      {
        id: "vehicle-sim",
        title: "Full-Vehicle Simulation & Driver-in-the-Loop Development",
        category: "Vehicle Dynamics & Simulation",
        image: "assets/img/subprojects/iem26-dil-rig.jpeg",
        imageFit: "contain",
        highlights: ["Vi-CarRealTime model correlated to on-car replay data", "Driver-in-the-loop rig for setup and controls tuning"],
        bullets: [
          "Built and correlated a full-vehicle Vi-CarRealTime model (aero, mass, suspension kinematics, powertrain, tyres) against on-car position and velocity data from standardized track testing, replaying logged runs until simulated traces matched physical data.",
          "Stood up a driver-in-the-loop rig (Vi-DriveSim on a Fanatec CSL DD wheelbase and ClubSport pedals) running the correlated vehicle model with torque vectoring integrated, tracing competition courses from vehicle position data for realistic driver testing.",
          "Tuned the simulation's surface-mu and driver-controller response against real driver inputs, holding path deviation under a 1 m corridor (max 77 cm on a 2.5 m-wide competition track) for solver validation.",
          "Used the DiL rig to validate and calibrate traction-control logic, exposing a torque-ceiling jitter bug and a throttle-enable threshold misread that were causing unintended torque spikes, then re-tuned for cleaner slip control and balance.",
          "Ran DiL driver training and roll-stiffness setup sweeps on virtual autocross and skidpad courses, picking the setup with the best average lap time and lateral acceleration before committing it to the physical car."
        ],
        metrics: [
          { label: "Path deviation (solver validation)", value: "< 1 m (max 77 cm)" },
          { label: "DiL hardware", value: "Fanatec CSL DD + ClubSport" }
        ],
        gallery: [
          { image: "assets/img/subprojects/iem26-vehicle-sim-replay.webp", caption: "Endurance replay with driver-demand channels" },
          { image: "assets/img/subprojects/iem26-carrealtime-model.png", caption: "Vi-CarRealTime full-vehicle model configuration" }
        ]
      }
    ]
  },

  // SOFTWARE & MANUFACTURING SHOWCASE — one tile per competency. `image` is the
  // tile thumbnail (use your most complex example in that tool); `gallery` holds
  // the extra images shown when the tile is opened. Replace the placeholders.
  toolkit: {
    software: [
      { name: "CAD & Design", caption: "Concept car and V6 engine surfacing", image: "assets/img/toolkit/cad-render-car.jpg",
        tools: ["CATIA 3DEXPERIENCE", "PTC Creo", "SOLIDWORKS", "Siemens NX", "Autodesk Fusion", "AutoCAD"],
        gallery: [{ image: "assets/img/toolkit/cad-bike.jpg", caption: "Downhill mountain bike frame concept" }, { image: "assets/img/toolkit/cad-v6-engine.png", caption: "V6 engine assembly" }, { image: "assets/img/toolkit/cad-vehicle-wiring-harness.jpg", caption: "Full-vehicle wiring harness routing" }, { image: "assets/img/toolkit/cad-bms-enclosure.png", caption: "Battery enclosure assembly", imageFit: "contain" }] },
      { name: "FEA & Structures", caption: "FSAE space-frame chassis deformation study", image: "assets/img/toolkit/fea-chassis-deformation.png",
        tools: ["ANSYS Workbench", "ANSYS Mechanical", "ANSYS ACP", "Abaqus", "NASTRAN"],
        gallery: [{ image: "assets/img/toolkit/fea-chassis-deformation-2.png", caption: "Chassis total deformation under torsion load" }, { image: "assets/img/toolkit/fea-upright-stress.png", caption: "Upright equivalent (von-Mises) stress" }, { image: "assets/img/toolkit/fea-cfrp-sandwich-panel-acp.png", caption: "ANSYS ACP total deformation of a CFRP sandwich panel", imageFit: "contain" }] },
      { name: "CFD & Thermal", caption: "EV cold-plate conjugate heat transfer", image: "assets/img/toolkit/cfd-coldplate-thermal.png",
        tools: ["Ansys Fluent", "Ansys Icepak", "Star-CCM+", "ParaView", "VisIT"],
        gallery: [{ image: "assets/img/toolkit/cfd-battery-icepak.png", caption: "Battery pack thermal model in Icepak" }, { image: "assets/img/toolkit/cfd-brake-disc-thermal.png", caption: "Brake disc transient thermal analysis" }] },
      { name: "MATLAB / Simulink", caption: "EV powertrain and ride-model simulations", image: "assets/img/toolkit/matlab-bosch-ev-simulink.png",
        imageFit: "contain",
        tools: ["MATLAB", "Simulink", "Simscape", "Stateflow"],
        gallery: [{ image: "assets/img/toolkit/matlab-dorle-simulink.png", caption: "Full-vehicle ride model in Simulink", imageFit: "contain" }, { image: "assets/img/toolkit/matlab-longitudinal-braking-model.png", caption: "Longitudinal braking model", imageFit: "contain" }] },
      { name: "Vehicle Simulation", caption: "Full-vehicle dynamics simulation on a virtual test track", image: "assets/img/toolkit/vehicle-sim-carmaker.png",
        tools: ["CarMaker", "Vi-CarRealTime", "Vi-DriveSim", "VI-grade (SuspensionGen)", "KISSsoft", "OptimumLap", "Pacejka MF 5.2"],
        gallery: [{ image: "assets/img/toolkit/vehicle-sim-endurance-telemetry.webp", caption: "Endurance lap replay with driver-demand channels" }] },
      { name: "Electronics & Code", caption: "Battery management system PCB and firmware", image: "assets/img/toolkit/electronics-bms-pcb.jpeg",
        tools: ["Altium", "LTspice", "PSpice", "Python", "C / C++", "PCAN-Explorer"],
        gallery: [{ image: "assets/img/toolkit/electronics-bms-schematic.jpeg", caption: "BMS schematic in Altium" }, { image: "assets/img/toolkit/electronics-pcb-3d.png", caption: "3D PCB render", imageFit: "contain" }, { image: "assets/img/toolkit/electronics-bench-test.jpeg", caption: "Firmware bring-up on the battery pack" }, { image: "assets/img/toolkit/electronics-ltspice.png", caption: "Op-amp circuit simulation in LTspice", imageFit: "contain" }, { image: "assets/img/toolkit/electronics-pcan-j1939.png", caption: "J1939 CAN bus analysis in PCAN-Explorer", imageFit: "contain" }] }
    ],
    manufacturing: [
      { name: "CNC & Machining", caption: "Sheet-metal laser cutting", image: "assets/img/toolkit/cnc-laser-cutting.png",
        tools: ["3-axis CNC", "Lathe", "Laser cutting", "Water-jet cutting"],
        gallery: [{ image: "assets/img/toolkit/cnc-carvey-router.png", caption: "Desktop CNC routing" }, { image: "assets/img/toolkit/cnc-gcode.png", caption: "Post-processed G-code toolpath", imageFit: "contain" }] },
      { name: "Composites", caption: "CFRP monocoque vacuum-bagged for cure", image: "assets/img/toolkit/composite-vacuum-bagging.jpg",
        tools: ["CFRP wet layup", "Vacuum bagging", "CNC-MDF & wire-cut foam moulds"],
        gallery: [
          { image: "assets/img/toolkit/composite-team-layup.jpeg", caption: "Wet-layup draping a full chassis tub, ahead of vacuum bagging" },
          { image: "assets/img/toolkit/composite-vacuum-bag-layup.jpg", caption: "Vacuum-bagged CFRP layup, debulked and pinned before cure" },
          { image: "assets/img/toolkit/composite-vacuum-bag-panel.jpeg", caption: "Vacuum-bagged sandwich panel with a resin/vacuum port fitting" },
          { image: "assets/img/toolkit/composite-nosecone-demoulded.jpeg", caption: "Cured CFRP nose cone, freshly demoulded" },
          { image: "assets/img/toolkit/composite-cfrp-bracket.jpeg", caption: "Small cured CFRP bracket, trimmed to size" },
          { image: "assets/img/toolkit/composite-mould-segments.jpeg", caption: "Split mould segments stacked after a layup run" },
          { image: "assets/img/toolkit/composite-nosecone-plug.jpg", caption: "CNC-cut MDF nose-cone plug, being coated and smoothed before moulding" },
          { image: "assets/img/toolkit/composite-gfrp-nosecone-side.jpg", caption: "Cured fiberglass nose cone — side profile" },
          { image: "assets/img/toolkit/composite-gfrp-nosecone-vents.jpg", caption: "Fiberglass nose cone with cooling vent louvers" },
          { image: "assets/img/toolkit/composite-gfrp-nosecone-front.jpg", caption: "Fiberglass nose cone — front view" }
        ] },
      { name: "Casting & Rapid Tooling", caption: "Pouring molten metal into a sand mold", image: "assets/img/toolkit/sand-casting-pour.png",
        tools: ["Sand casting", "SLS-printed tooling", "Injection molding"],
        gallery: [] },
      { name: "Additive Manufacturing", caption: "FDM printing on an Ultimaker 2 Extended+", image: "assets/img/toolkit/additive-ultimaker-print.jpg", imagePosition: "50% 45%",
        tools: ["FDM", "SLA", "SLS", "Generative design"],
        gallery: [] },
      { name: "Welding & Fabrication", caption: "TIG welding an FSAE space-frame chassis", image: "assets/img/toolkit/welding-tig.jpg", imageFit: "contain",
        tools: ["TIG", "MIG", "Sheet metal", "Soldering"],
        gallery: [{ image: "assets/img/toolkit/welding-spot-weld.png", caption: "Spot-welding battery pack tabs", imageFit: "contain" }, { image: "assets/img/toolkit/welding-soldering.jpeg", caption: "Soldering a BMS board" }] },
      { name: "Metrology & Test", caption: "3D-scanning a chassis for as-built correlation", image: "assets/img/toolkit/metrology-3d-scan.jpg",
        tools: ["CMM", "3D scanning", "Thermocouple & strain-gauge instrumentation", "DAQ", "CAN bus analysis (DBC, PCAN)", "Oscilloscope"],
        gallery: [{ image: "assets/img/toolkit/metrology-torsion-rig.png", caption: "Torsion test rig" }, { image: "assets/img/toolkit/metrology-ergonomics.png", caption: "Driver ergonomics test setup" }, { image: "assets/img/toolkit/metrology-wind-tunnel.png", caption: "DIY wind tunnel setup" }, { image: "assets/img/toolkit/metrology-3point-bend.png", caption: "3-point bend test on a CFRP coupon" }] }
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
      imageFit: "contain",
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
      links: [
        { label: "Final report", url: "assets/docs/cold-plate-ml-report.pdf" }
      ],
      tools: [
        { name: "ANSYS Fluent", logo: "assets/img/tools/ansys-logo.png" },
        { name: "Python", logo: "assets/img/tools/python-logo.png" },
        { name: "scikit-learn", logo: "assets/img/tools/scikit-learn.svg" },
        { name: "XGBoost" }
      ]
    },
    {
      id: "iem26",
      title: "IEM'26 — Formula Student Electric Vehicle",
      org: "Illini Electric Motorsports, UofI",
      orgLink: "https://www.illinielectricmotorsports.com/",
      context: "Formula Student",
      period: "Sep 2025 – Present",
      image: "assets/img/projects/iem26.webp",
      heroPosition: "50% 78%",
      cadViews: {
        side: "assets/img/projects/iem26-cad-side.png",
        top: "assets/img/projects/iem26-cad-top.png",
        front: "assets/img/projects/iem26-cad-front.png"
      },
      dssFiles: [
        { label: "Design Spec Sheet", url: "assets/docs/iem26_DSS.xlsx" }
      ],
      tags: [],
      hideTagsRow: true,
      summary: "Powertrain and Vehicle Dynamics Engineer",
      bullets: [],
      tools: [
        { name: "VI-grade" },
        { name: "Python" },
        { name: "ANSYS" }
      ],
      metrics: [
        { label: "Engineering Design, FSAEM 2026", value: "3rd" }
      ]
    },
    {
      id: "combustion-lab",
      title: "Optical Flame Diagnostics: OH Thermometry by UV Absorption & Emission",
      org: "Spectroscopy Course Project, Combustion Diagnostics Lab, UofI",
      context: "Research",
      period: "Sep 2025 – Dec 2025",
      image: "assets/img/projects/combustion-lab.jpg",
      tags: ["Combustion & Powertrain Research", "Thermal & Energy Systems"],
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
      links: [
        { label: "Final report", url: "assets/docs/combustion-lab-report.pdf" },
        { label: "Video report", url: "assets/docs/combustion-lab-video-report.pptx" }
      ],
      tools: [
        { name: "LIFBASE" },
        { name: "HITRAN" }
      ]
    },
    {
      id: "magnesium-wheels",
      title: "Rapid Tooling of Cast Magnesium Wheels for an FSAE Vehicle",
      org: "Reverse Engineering and Rapid Tooling Course Project, IIT Roorkee",
      context: "Research",
      period: "Feb 2023 – May 2023",
      image: "assets/img/projects/magnesium-wheels.png",
      imageFit: "contain",
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
      links: [
        { label: "Final report", url: "assets/docs/magnesium-wheels-report.pptx" }
      ],
      tools: [
        { name: "SolidWorks", logo: "assets/img/tools/solidworks-logo.png" }
      ]
    },
    {
      id: "best-workplace",
      title: "Best Workplace for Drivers",
      org: "Innovate'22 Hackathon, Daimler India Commercial Vehicles",
      context: "Competition",
      period: "Aug 2022",
      image: "assets/img/projects/best-workplace.webp",
      imageFit: "contain",
      tags: ["Electronics & Controls"],
      summary: "24-hour hackathon redesigning a long-haul truck driver's cabin with drivers and cabin experts.",
      bullets: [
        "Ran a weighted decision matrix across candidate cabin problems (ventilation, fatigue, seating, theft) to prioritize a Noise-Vibration-Harshness (N-V-H) redesign, backed by a driver survey and literature on fatigue-linked accident risk.",
        "Proposed Active Noise Cancellation (DSP + microphones) to cut in-cabin noise from 90–104 dB toward the 85 dB nominal target, reducing measured noise by up to 43%.",
        "Proposed an air-cushion seating system to counter cabin vibration, projected to cut vibration by 33%, fatigue by 14%, and seating pressure by 18% versus a foam-cushion seat.",
        "Proposed an active seat-suspension system for load-adaptive damping against road harshness, completing the N-V-H solution set within an estimated ₹19,000 component cost."
      ],
      metrics: [
        { label: "Result", value: "2nd Runner-up, Innovate'22" },
        { label: "Noise reduction", value: "up to 43%" },
        { label: "Vibration reduction", value: "up to 33%" }
      ],
      links: [
        { label: "Final report", url: "assets/docs/best-workplace-report.pptx" }
      ]
    },
    {
      id: "rmse23",
      title: "RMSE'23 — Formula Student Electric Vehicle",
      org: "IIT Roorkee Motorsports, IITR",
      orgLink: "https://motorsports.iitr.ac.in/",
      context: "Formula Student",
      period: "Apr 2022 – Jul 2023",
      image: "assets/img/projects/rmse23.jpg",
      cadViews: {
        side: "assets/img/projects/rmse23-cad-side.png",
        top: "assets/img/projects/rmse23-cad-top.png",
        front: "assets/img/projects/rmse23-cad-front.png"
      },
      dssFiles: [
        { label: "Design Spec Sheet", url: "assets/docs/rmse23_DSS.xlsx" }
      ],
      tags: ["Structures & Composites", "Thermal & Energy Systems", "Electronics & Controls", "Vehicle Dynamics & Simulation"],
      summary: "Mechanical Head and Powertrain & Braking Head",
      metrics: [
        { label: "FSUK'23 Engineering Design", value: "1st, Asian teams" },
        { label: "FSUK'23 Cost & Manufacturing", value: "2nd, Asian teams" },
        { label: "MathWorks Modeling Award", value: "1st, Formula Bharat '23" }
      ]
    },
    {
      id: "jlr-bonnet",
      title: "JLR's Powered Bonnet for Electric Vehicles",
      org: "Inter IIT Tech Meet 10.0 (JLR Problem Statement)",
      context: "Competition",
      period: "Mar 2022",
      image: "assets/img/projects/jlr-bonnet.png",
      imageFit: "contain",
      tags: ["Structures & Composites", "Electronics & Controls", "Vehicle Dynamics & Simulation"],
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
      links: [
        { label: "Final report", url: "assets/docs/jlr-bonnet-report.pptx" }
      ],
      tools: [
        { name: "SolidWorks", logo: "assets/img/tools/solidworks-logo.png" },
        { name: "MATLAB / Simulink", logo: "assets/img/tools/mathworks.png" },
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
      imageFit: "contain",
      tags: ["Structures & Composites", "Electronics & Controls"],
      summary: "Designed a commercial electric bicycle from scratch for last-mile deliveries, leading a 5-member team.",
      bullets: [
        "Led 5-member team BLAZZE to design a 141 kg-payload-rated electric cargo bicycle with a tubular Al 6061-T6 space frame, two 57.5 L storage boxes, and a 170 km design range.",
        "Sized the BLDC hub motor and 1:30 planetary drivetrain from a torque/power calculator against gradeability and top-speed targets, selecting a 750W-peak motor at 88% efficiency.",
        "Sized and modeled the 14s4p Li-ion pack through a wheel-to-well accumulator model: 2316 Wh without regenerative braking vs. 495.4 Wh with it — a 78.6% reduction — landing on a 600 Wh pack with BMS, pre-charge, and shutdown circuitry.",
        "Built GPS/GSM vehicle tracking on Arduino, simulated in Proteus, and validated the disc-brake tyre-slip model to a 205m stopping distance — all within a ₹75,000 total build cost."
      ],
      metrics: [
        { label: "Result", value: "1st Runner-up, Pedalthon" },
        { label: "Design range", value: "170 km" },
        { label: "Battery savings from regen", value: "78.6%" },
        { label: "Total build cost", value: "₹75,000" }
      ],
      links: [
        { label: "Final report", url: "assets/docs/pedalthon-report.pptx" }
      ],
      tools: [
        { name: "Arduino", logo: "assets/img/tools/arduino.svg" },
        { name: "Proteus", logo: "assets/img/tools/proteus.svg" }
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
      tags: ["Vehicle Dynamics & Simulation"],
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
      links: [
        { label: "Final report", url: "assets/docs/dorle-report.pptx" }
      ],
      tools: [
        { name: "MATLAB / Simulink", logo: "assets/img/tools/mathworks.png" }
      ]
    },
    {
      id: "turbojet-nozzle",
      title: "Flow Analysis & Optimization of a Supersonic Turbojet Intake and Nozzle",
      org: "Mechanical & Industrial Engineering Dept., IIT Roorkee (Guide: Prof. Ankit Bansal)",
      context: "Research",
      period: "Sep 2021 – Nov 2021",
      image: "assets/img/projects/turbojet-nozzle.png",
      tags: ["Combustion & Powertrain Research", "Thermal & Energy Systems"],
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
      links: [
        { label: "Final report", url: "assets/docs/turbojet-nozzle-report.pptx" }
      ],
      tools: [
        { name: "SolidWorks", logo: "assets/img/tools/solidworks-logo.png" },
        { name: "ANSYS Fluent", logo: "assets/img/tools/ansys-logo.png" }
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
      tags: ["Electronics & Controls", "Vehicle Dynamics & Simulation"],
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
      links: [
        { label: "Final report", url: "assets/docs/bosch-ev-report.pptx" }
      ],
      tools: [
        { name: "MATLAB / Simulink", logo: "assets/img/tools/mathworks.png" },
        { name: "MS Office" }
      ]
    },
    {
      id: "rmse21",
      title: "RMSE'21 — Formula Student Electric Vehicle",
      org: "IIT Roorkee Motorsports, IITR",
      orgLink: "https://motorsports.iitr.ac.in/",
      context: "Formula Student",
      period: "Jan 2021 – Dec 2021",
      image: "assets/img/projects/rmse21.jpg",
      cadViews: {
        side: "assets/img/projects/rmse21-cad-side.png",
        top: "assets/img/projects/rmse21-cad-top.png",
        front: "assets/img/projects/rmse21-cad-front.png"
      },
      dssFiles: [
        { label: "Design Spec Sheet", url: "assets/docs/rmse21_DSS.xlsx" }
      ],
      tags: ["Structures & Composites", "Thermal & Energy Systems", "Electronics & Controls", "Vehicle Dynamics & Simulation"],
      summary: "Powertrain & Braking Engineer",
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
        { label: "Business Plan Presentation, Formula Bharat Virtual '22", value: "1st" },
        { label: "Team Management, Formula Bharat Virtual '22", value: "2nd" },
        { label: "Engineering Design Report, Formula Bharat Virtual '22", value: "3rd" },
        { label: "Overall, Electric Teams — Formula Bharat Virtual '22", value: "3rd" }
      ]
    },
    {
      id: "rejuvenation-heritage",
      title: "Rejuvenation of Heritage — Restoring Ajanta & Ellora Paintings",
      org: "Tech4Heritage Hackathon, Sapio Analytics",
      context: "Competition",
      period: "Sep 2020 – Oct 2020",
      image: "assets/img/projects/rejuvenation-heritage.webp",
      imageFit: "contain",
      tags: ["Data Science & Machine Learning", "Vehicle Dynamics & Simulation"],
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
      links: [
        { label: "Final report", url: "assets/docs/rejuvenation-heritage-report.pptx" }
      ],
      tools: [
        { name: "Python", logo: "assets/img/tools/python-logo.png" }
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
      tags: ["Structures & Composites", "Electronics & Controls"],
      summary: "Designed an autonomous drone to transport essentials to differently-abled groups, including its carbon-fiber frame.",
      bullets: [
        "Co-designed an autonomous multi-rotor (Team Excelsior) capable of both no-contact last-mile delivery and indoor autonomous navigation, built around a CFRP-sandwich-panel central pod with 3D-printed arms — 2.3 kg empty, up to 3.5 kg payload, 20–35 min flight time.",
        "Designed and 3D-printed a custom camera gimbal driven by servo motors on a Raspberry Pi, using gyroscope/accelerometer feedback in place of a purchased off-the-shelf gimbal.",
        "Built the autonomy stack on PX4 + ROS + a Raspberry Pi companion computer, with LiDAR/ultrasonic + IMU sensor fusion for altitude/attitude estimation and real-time telemetry downlink via QGroundControl.",
        "Trained a MobileNetSSD model in TensorFlow for real-time gate/obstacle detection, converting bounding-box geometry into a reference point for a PID-based navigation and collision-avoidance controller."
      ],
      metrics: [
        { label: "Result", value: "1st Runner-up, Nav Ujjwal E-Innovation Hackathon" },
        { label: "Payload capacity", value: "up to 3.5 kg" },
        { label: "Flight time", value: "20–35 min" }
      ],
      links: [
        { label: "Final report", url: "assets/docs/nav-ujjwal-report.pptx" }
      ],
      tools: [
        { name: "TensorFlow", logo: "assets/img/tools/tensorflow.svg" },
        { name: "ROS", logo: "assets/img/tools/ros.svg" },
        { name: "Raspberry Pi", logo: "assets/img/tools/raspberrypi.svg" },
        { name: "Python" },
        { name: "Visio" },
        { name: "MS Office" }
      ]
    },
    {
      id: "rc-car",
      title: "RC-Operated Nitro Engine Car",
      org: "SAE IIT Roorkee Chapter",
      context: "Student Project",
      period: "Nov 2019 – Feb 2020",
      image: "assets/img/projects/rc-car.png",
      imageFit: "contain",
      tags: ["Structures & Composites"],
      summary: "Designed and fabricated a 4WD nitro-engine RC car from scratch, engineering a custom chassis and a ball-joint-free steering mechanism to replicate full-scale automotive systems.",
      bullets: [
        "Redesigned the chassis from a 2mm carbon-graphite reference to a 3mm Aluminium 6061 sheet, adding corner reinforcement and bent-side bumpers to cut longitudinal torsion, then cut, drilled, and slot-drilled it by hand to mount every driveline and servo component.",
        "Engineered a steering linkage that eliminates ball-and-socket joints entirely, splitting each link into a threaded rod, a pivot housing, and a freely-oscillating universal-joint-inspired member to reproduce the same two degrees of freedom with simpler, more reliable fabrication.",
        "Built the driveline around a 3cc O.S. 18TZ nitro engine (2.28 BHP @ 30,500 RPM, 83.1 oz-in @ 25,850 RPM) through a 2-speed nylon gearbox (1:2.4 / 1:1.5) and centrifugal clutch, driving a 4WD layout with dual differentials and dog-bone/CV-joint half-shafts.",
        "Assembled double-wishbone suspension with oil-damped coil springs and fiberglass disc brakes, welded a 3mm mild-steel sedan body, and tuned and tested the finished car to a 60 km/h top speed and 0–50 km/h in 3.5 s."
      ],
      metrics: [
        { label: "Top speed", value: "60 km/h" },
        { label: "0-50 km/h acceleration", value: "3.5 s" },
        { label: "Kerb weight", value: "5 kg" },
        { label: "Total build cost", value: "₹16,618" }
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
      summary: "13-week summer internship at Tesla Energy focused on Powerwall thermal regression testing.",
      bullets: [
        "Root-caused a DC-DC power stage thermal runaway and built a lumped thermal network correlated to onboard PCB-NTC within 1°C.",
        "Developed and validated a live load/ambient-based derate strategy, preserving 96% rated output at 40°C across a -20°C to 50°C qualification sweep.",
        "Decomposed 162 system requirements across 4 grid configurations into a traceability matrix and pass/fail plan hierarchy."
      ],
      subProjects: [
        {
          id: "regression",
          title: "Cross-Variant Thermal Regression Suite",
          image: "assets/img/products/tesla-thermal-regression.jpg",
          summary: "Decoded thermal, power, and fault CAN telemetry via DBC, validating reported values against independent measurements.",
          categories: [
            {
              name: "Thermal",
              bullets: [
                "Root-caused a DC-DC power stage thermal runaway and built a lumped thermal network correlated to onboard PCB-NTC within 1°C.",
                "Developed and validated a live load/ambient-based derate strategy, preserving 96% rated output at 40°C across a -20°C to 50°C qualification sweep.",
                "Ran a paired 41-channel thermal study qualifying an air-duct delete, isolating the sole tradeoff as extended cell-heater soak time at -20°C."
              ]
            },
            {
              name: "Electronics",
              bullets: [
                "Validated pre-release firmware on test units, regression-testing derate, thermal, and fault behaviour against system requirements."
              ]
            }
          ],
          tools: [
            { name: "PCAN" },
            { name: "CANape" },
            { name: "MATLAB", logo: "assets/img/tools/mathworks.png" },
            { name: "FlexAnalyzer" },
            { name: "Chroma" },
            { name: "ElektoAutomatik" },
            { name: "NI DAQ" },
            { name: "Python", logo: "assets/img/tools/python-logo.png" }
          ]
        },
        {
          id: "emulator",
          title: "Home Load Emulator Rig",
          image: "assets/img/products/tesla-home-emulator.jpg",
          summary: "Decoded thermal, power, and fault CAN telemetry via DBC, validating reported values against independent measurements.",
          categories: [
            {
              name: "Thermal",
              bullets: [
                "Constructed worst-case thermal stress cases from first principles across load, ambient, and duty-cycle corners to anchor validation."
              ]
            },
            {
              name: "Electronics",
              bullets: [
                "Decomposed 162 system requirements across 4 grid configurations into a traceability matrix and pass/fail plan hierarchy.",
                "Built a VFD-absorbed motor-stall and resistive load bank covering compressor-start and peak-power loading for thermal stress testing."
              ]
            }
          ],
          tools: [
            { name: "3DEXPERIENCE CATIA" },
            { name: "LTSpice" },
            { name: "Draw.io" },
            { name: "Weg" },
            { name: "MS Office" },
            { name: "Python", logo: "assets/img/tools/python-logo.png" }
          ]
        }
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
      summary: "2-year engineering position with the HV-Systems team, focused on building advanced electromechanical products for future JLR BEVs.",
      bullets: [
        "Initiated and owned a fugitive-CH4 range-extended EV concept, modeled at 36% more range and 12% less mass, carbon-negative.",
        "Filed 5 internal invention disclosures at JLR on DC-link capacitor pre-charging, the REEV, and charge-depletion control.",
        "Led production-intent mechanical and thermal design of a solid-state contactor rejecting 24 W/cm², at a 2.9 vibration safety factor."
      ],
      achievements: [
        { title: "1st Runner-Up, JLR Graduate Innovation Challenge", org: "86 teams, 442 graduates, global — CH4 REEV concept", date: "2025" },
        { title: "5 Internal Invention Disclosures Filed", org: "DC-link capacitor pre-charging, REEV, and charge-depletion control", date: "2023–25" },
        { title: '"Exceptional Creator" Recognition', org: "Twice awarded by JLR — FY24 and FY25", date: "2024, 2025" },
        { title: "Ashorne Hill Graduate Program", org: "Completed JLR's leadership, stakeholder management, and project-execution program", date: "2024–25" }
      ],
      subProjects: [
        {
          id: "ssc",
          title: "Solid-State Contactor (SSC)",
          image: "assets/img/products/jlr-ssc-contactor.webp",
          summary: "Production-intent thermal, mechanical, and electronics design of a 1500 V solid-state contactor, from cold-plate concept to prototype.",
          categories: [
            {
              name: "Thermal",
              bullets: [
                "Designed and simulated tubed and pin-fin cold plates for a 350 kW inverter and the SSC, rejecting 24 W/cm².",
                "Built an instrumented coolant-loop rig to test cold plates at full load, validating a 35 K junction margin at 17 kPa drop."
              ]
            },
            {
              name: "Design",
              bullets: [
                "Led production-intent mechanical and thermal design of the solid-state contactor (SSC), with DFM from packaging to prototype.",
                "Designed 650 A C101 busbars to IEC 60664-1 creepage and clearance, minimising loop inductance; draughted BS 8888 drawings.",
                "Designed the IP67 SSC enclosure, selecting O-rings, gaskets, and TIM for sealed, leak-free, low-thermal-resistance joints.",
                "Ran worst-case tolerance stack-ups and applied ASME Y14.5 GD&T to position coreless current sensors within 0.30 mm.",
                "Ran modal and random-vibration FEA on the SSC to ISO 16750-3 profiles, achieving a 2.9 minimum safety factor."
              ]
            },
            {
              name: "Controls",
              bullets: [
                "Designed closed-loop pre-charge and I²t e-fuse control, tuning a 3 W 4-switch buck-boost converter via Bode analysis to 55° phase margin."
              ]
            },
            {
              name: "Electronics",
              bullets: [
                "Designed voltage, current, and temperature sensing circuits, and ran board-level thermal and environmental validation.",
                "Applied IEC 60664-1 creepage and clearance across the SSC's mechanical and PCB design for 1500 V working voltage.",
                "Designed a 3 W 4-switch buck-boost converter (12 V to 6 V) and laid out its PCB with sensing and gate drive.",
                "Designed a hybrid RCD/TVS snubber for the SSC after simulating 11 topologies, clamping turn-off to 1.1 kV."
              ]
            }
          ],
          tools: [
            { name: "3DExperience CATIA" },
            { name: "Star CCM+" },
            { name: "MATLAB", logo: "assets/img/tools/mathworks.png" },
            { name: "LTSpice" },
            { name: "PSpice" },
            { name: "ABAQUS" },
            { name: "Altium" }
          ]
        },
        {
          id: "reev",
          title: "Range-Extended EV (CH4 REEV)",
          image: "assets/img/products/jlr-reev-concept.webp",
          summary: "A carbon-negative, fugitive-CH4 range-extended EV concept — cryogenic storage, charge-depletion control, and 36% more range.",
          bullets: [
            "Initiated and owned a fugitive-CH4 range-extended EV concept, modeled at 36% more range and 12% less mass, carbon-negative.",
            "Developed a 50 kg cryogenic CH4 storage and delivery concept, modeling tank heat ingress to limit boil-off to 2% per day.",
            "Developed a road-load-based charge-depletion strategy to schedule APU operation, cutting fuel use 33% per drive cycle."
          ],
          tools: [
            { name: "3DExperience CATIA" },
            { name: "MATLAB", logo: "assets/img/tools/mathworks.png" },
            { name: "ANSYS", logo: "assets/img/tools/ansys-logo.png" },
            { name: "Lucid" },
            { name: "Visio" }
          ]
        },
        {
          id: "xhev",
          title: "xHEV Powerpack",
          image: "assets/img/products/jlr-xhev-powerpack.png",
          summary: "Boundary diagrams and ISO 26262 safety analysis for the xHEV powerpack.",
          bullets: [
            "Built a boundary diagram, interface analysis, and DFMEA for the xHEV powerpack, cutting high-risk RPNs 26% via design actions.",
            "Performed ISO 26262 HARA to ASIL D, authored test plans, and ran environmental validation for safety-critical HV hardware."
          ],
          tools: [
            { name: "Lucid" },
            { name: "JIRA" },
            { name: "Polarion" },
            { name: "3DExperience" },
            { name: "MS Office" }
          ]
        }
      ]
    },
    {
      org: "Log9 Materials Scientific Pvt. Ltd.",
      logo: "assets/img/logos/log9.png",
      productImage: "assets/img/products/log9-rapidx8000-internal.jpg",
      productCaption: "RapidX 8000 — internal module assembly",
      role: "Industrial Design Intern, RapidX",
      location: "Bengaluru, India",
      period: "May 2022 – Jul 2022",
      summary: "10-week summer internship focused on building LTO fast-charge battery packs aimed at retrofitting India's small commercial EV fleet.",
      bullets: [
        "Designed pack hardware for RapidX, a fast-charging lithium-titanate (LTO) battery for 2W, 3W, and 4W commercial vehicles.",
        "Designed C101 busbars, an IP67 enclosure, and cell packaging for a 368 V, 40 Ah LTO pack retrofitted to the Tata Ace LCV.",
        "Designed sheet-metal brackets, rubber dampers, and waterproof foam seals, and released BS 8888 drawings for prototyping.",
        "Sized a paraffin PCM buffer to absorb 9 kJ of fast-charge heat per module, predicting a 15 K cut in peak cell temperature."
      ],
      tools: [
        { name: "SolidWorks", logo: "assets/img/tools/solidworks-logo.png" },
        { name: "ANSYS", logo: "assets/img/tools/ansys-logo.png" },
        { name: "MATLAB", logo: "assets/img/tools/mathworks.png" },
        { name: "MS Office" }
      ]
    }
  ],

  // Shown as one large photo spanning the full Leadership timeline.
  leadershipPhoto: "assets/img/leadership/iitr-motorsports-team-silverstone.jpg",

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
      school: "University of Illinois at Urbana-Champaign (UIUC)",
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
      school: "Indian Institute of Technology Roorkee (IIT Roorkee)",
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

  // Sorted most-recent-first by date.
  awards: [
    { title: "J.N. Tata Endowment", org: "₹2M grant for postgraduate study abroad, awarded to exceptional Indian students", date: "Fall 2025" },
    { title: "K.C. Mahindra Scholarship", org: "For postgraduate study abroad — top 4% of 2,000+ applicants", date: "Fall 2025" },
    { title: "5 Internal Invention Disclosures Filed, JLR", org: "DC-link capacitor pre-charging, REEV, and charge-depletion control", date: "2024–25" },
    { title: '"Exceptional Creator" Recognition, JLR', org: "Twice awarded — FY24 and FY25", date: "2024, 2025" },
    { title: "1st Runner-Up, JLR Graduate Innovation Challenge", org: "86 teams, 442 graduates, global", date: "2024" },
    { title: "MathWorks Modeling Award, Formula Bharat", org: "1st place '23 (₹35K) and 3rd place '24 (₹15K)", date: "2023–24" },
    { title: "1st Place, FSUK'23 Engineering Design Event", org: "Among all Asian teams, EV category — Formula Student UK, Silverstone", date: "2023" },
    { title: "2nd Place, FSUK'23 Cost & Manufacturing Event", org: "Among all Asian teams, EV category — Formula Student UK, Silverstone", date: "2023" },
    { title: "Gold Medal, Inter IIT Tech Meet 10.0", org: "Automotive problem statement set by JLR", date: "Fall 2022" },
    { title: "2nd Runner-Up, Innovate'22 Hackathon", org: "Daimler India Commercial Vehicles", date: "2022" },
    { title: "Chanakya UG Fellowship", org: "Research grant — E-bicycle for last-mile food delivery", date: "Spring 2022" },
    { title: "Gold Medal, Inter IIT Tech Meet 9.0", org: "Automotive problem statement set by Bosch", date: "Fall 2021" }
  ],

  // Short reflective takeaways. Each entry: { title, text }.
  learnings: []
};

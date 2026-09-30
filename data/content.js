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
        id: "motor-inverter-loss-model", title: "Motor & Inverter Loss Modeling for Cooling-Duty Sizing", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse23-motor-loss-profile.png", imageFit: "contain",
        highlights: ["2 kW cooling duty set from a transient Simulink loss model"],
        writeup: {
          overview: "Sized the powertrain cooling duty for RMSE'23 by modeling how much heat the motor and inverter actually reject over a full endurance run, rather than sizing to a generic worst case.",
          approach: "Built a transient Simulink model of the coolant loop driven by motor and inverter loss maps (recomputed every 0.025s from the EMRAX 228's efficiency map and an assumed 95% inverter efficiency) over the endurance drive cycle, integrating instantaneous losses to arrive at a duty-cycle-representative heat load — 1.13 kW average motor loss and 0.8 kW average inverter loss — rather than a single peak-power number. The resulting duty also confirmed a single radiator was sufficient, cutting the two-radiator setup carried over from RMSE'19 and saving roughly 2.5 kg plus the extra routing.",
          achievements: [
            "Modeled motor and inverter losses over the endurance cycle to set a 2 kW heat duty (1.13 kW motor + 0.8 kW inverter), driving a transient Simulink model of the coolant loop.",
            "Showed a single radiator met the cooling requirement, eliminating RMSE'19's redundant second radiator for a ~2.5 kg mass and routing saving."
          ],
          tools: ["MATLAB / Simulink"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23-emrax228-efficiency-map.png", caption: "EMRAX 228 efficiency map used to drive the instantaneous motor-loss model" }
        ]
      },
      {
        id: "radiator-pump-fan-sizing", title: "Radiator, Pump & Fan Sizing", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse23-radiator-photo.png", imageFit: "contain",
        highlights: ["Coolant inlet held under 50°C motor / 65°C inverter limits"],
        writeup: {
          overview: "Translated the 2 kW cooling duty into a physical radiator, pump, and fan selection that keeps the motor and inverter within their thermal limits.",
          approach: "Sized the radiator core by NTU-effectiveness analysis against the target heat rejection, simulating several off-the-shelf cross-flow single-pass radiators in MATLAB and settling on a Bajaj Pulsar NS200 motorcycle radiator for its effectiveness-to-frontal-area ratio. A Minbea R200A fan and GRI INTG3 570 pump were then selected against the resulting duct pressure drop and required flow rate, and the full loop was modeled in Simulink with transport-delay blocks between motor, controller, and radiator to track coolant temperature at 0.025s resolution.",
          achievements: [
            "Sized the radiator, pump, and fan by NTU-effectiveness analysis, holding coolant inlet under the 50°C motor and 65°C inverter limits.",
            "Selected a single Bajaj Pulsar NS200 radiator, a Minbea R200A fan, and a GRI INTG3 570 pump, achieving 38.4°C average motor-inlet and 41.3°C average inverter-inlet coolant temperature — well inside the 50°C/65°C limits."
          ],
          tools: ["MATLAB", "NTU-effectiveness method"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23-fan-pressure-flow-curve.png", caption: "Calculated duct pressure-drop curve overlaid on the fan's rated pressure/flow curve" }
        ]
      },
      {
        id: "coolant-loop-bench-validation", title: "Coolant Loop Bench Validation", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse23-coolant-bench-test-rig.png",
        highlights: ["Validated to 136 kPa at 7.5 LPM on an instrumented bench"],
        writeup: {
          overview: "Closed the loop on the cooling-system design by validating the radiator and loop pressure-drop model against a physical bench build before committing to on-car packaging.",
          approach: "Built an MDF-framed instrumented bench replicating the loop's plumbing and flow path (sized to the model's 136 kPa / 7.5 LPM design point), driving it with a bench fan and measuring water/air flow rate and inlet/outlet temperatures at four points to back-calculate the radiator's overall heat-transfer coefficient against the NTU model's prediction. Full in-car validation (logging motor/inverter temperature through dynamic-event runs) was planned but not completed within the season, so the bench remained the primary correlation point.",
          achievements: [
            "Validated loop pressure drop and radiator performance on an instrumented bench against a 136 kPa, 7.5 LPM operating point.",
            "Measured the radiator's overall heat-transfer coefficient on the bench to within 13% of the NTU-effectiveness model's prediction."
          ],
          tools: ["Instrumented flow bench", "Pressure/flow instrumentation"]
        },
        gallery: []
      },
      {
        id: "chassis-torsional-stiffness", title: "Chassis Torsional Stiffness & Floor Closeouts", category: "Structures & Composites", image: "assets/img/subprojects/rmse23-chassis-cross-section.png", imageFit: "contain",
        highlights: ["+30% torsional stiffness to 1755 N·m/°, FEA-correlated to twist-rig testing"],
        writeup: {
          overview: "RMSE'23's chassis started from the RMSE'19 baseline — heavy, poorly mass-distributed (40F/60R), and difficult to manufacture — with an explicit target to cut mass, hit 50F/50R distribution, and raise torsional stiffness through bonded CFRP floor closeouts rather than more steel tube.",
          approach: "Suspension nodes came from the VD team; tubes near the front and rear hoops that weren't load-bearing were removed and the wheels shifted rearward to hit the mass-distribution target, while a more inclined driver position (from ergonomic-jig testing) lowered CG height. Torsional stiffness was targeted at 1800 N·m/deg from an LLTD/roll-stiffness analysis, then validated with a hybrid beam-quadrilateral ANSYS model of the chassis, run both alone and combined with the floor closeouts, and cross-checked against physical twist-rig deflection measurements.",
          achievements: [
            "Raised chassis torsional stiffness 30% to 1755 N·m/° (vs. an 1800 N·m/° target) with CFRP floor closeouts, correlated between FEA and twist-rig tests.",
            "Quantified the floor closeouts' contribution directly: FEA showed stiffness at the P3 reference point rising from 1350 to 1755 N·m/° once the closeouts were added.",
            "Shifted mass distribution from RMSE'19's 40F/60R baseline toward 50F/50R by removing hoop-area tubing and moving the wheels rearward."
          ],
          tools: ["ANSYS Mechanical", "Twist-rig testing"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23-chassis-deflection-table.png", caption: "Chassis vs. chassis+floor-closeout deflection at each validation point", imageFit: "contain" }
        ]
      },
      {
        id: "generative-design-wing-mounts-pedals", title: "Generative Design for Wing Mounts & Pedals", category: "Structures & Composites", image: "assets/img/subprojects/rmse23-wing-mount-cad.png",
        highlights: ["1.2 kg saved via generative design and topology optimization"],
        writeup: {
          overview: "Cut mass out of two secondary structural parts — the aero wing mounts and the brake/accelerator pedals — using optimization-driven design rather than a straight carry-over shape.",
          approach: "Applied generative design (loaded with the actual mounting and aero loads) to the front and rear wing mounts, and replaced the prior car's I-beam pedal cross-section with a triangulated, topology-optimized geometry for the brake and accelerator pedals, in both cases removing material outside the load path while keeping the mounting interfaces fixed. Both were machined from Al 6061-T6 hard-anodized stock and validated by FEA before cutting.",
          achievements: [
            "Applied generative design to the wing mounts and topology optimization to the CNC pedals, saving 1.2 kg combined versus the prior straight-carryover parts.",
            "Replaced the prior I-beam pedal cross-section with a triangulated Al 6061-T6 design, landing at 159 g (brake pedal) and 219 g (pedal mount) at a minimum FOS of ~1.04."
          ],
          tools: ["Generative design", "Topology optimization", "Additive manufacturing", "CNC machining"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23-wing-mount-fea.jpg", caption: "Wing mount FEA under a 438 N load case", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse23-brake-pedal-fea-safety-factor.png", caption: "Triangulated brake pedal — factor-of-safety FEA result", imageFit: "contain" }
        ]
      },
      {
        id: "bodywork-composite-selection", title: "Bodywork & Wing Composite Material Selection", category: "Structures & Composites", image: "assets/img/subprojects/rmse23-nose-cone.jpg",
        highlights: ["Fabric, resin, and core selection across bodywork, wings, floor closeouts, and steering wheel"],
        writeup: {
          overview: "Selected the composite layup — fabric, resin, and core — and ply orientation for every major composite part on the car: bodywork (nose cone, side pods, rear body), front and rear wings, floor closeouts, and the steering wheel.",
          approach: "Bodywork surfacing was sculpted in Autodesk Inventor for the smoothest possible transitions to minimize drag, with the nose cone shaped for head-up airflow into the front wing, side pods sized to shroud the radiator/fan on one side and duct cooling air into the accumulator on the other, and the rear body split lengthwise to assemble around the chassis while keeping dampers exposed for waterproofing. Front and rear wings used Selig S1223 airfoils in multi-element configurations, with angle of attack, gap, and overlap optimized in ANSYS Fluent 2D/3D CFD before final geometry was locked.",
          achievements: [
            "Selected fabric, resin, and core, and set ply orientation and stacking for the bodywork, wings, floor closeouts, and steering wheel.",
            "Designed and CFD-validated a 3-element front wing (147→167 N downforce with footplates added, 34–36 N drag) and 3-element rear wing (115.6→120 N downforce, 37–39 N drag) using Selig S1223 airfoils.",
            "Shaped the nose cone, side pods, and rear body in Autodesk Inventor for minimum-curvature airflow, with side pods doubling as radiator/fan shrouding and accumulator cooling ducts."
          ],
          tools: ["ANSYS Fluent", "Autodesk Inventor", "Airfoil Tools (2D airfoil libraries)"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23-side-pods.jpg", caption: "Final side-pod CAD design" },
          { image: "assets/img/subprojects/rmse23-front-wing-cfd-pressure.png", caption: "Front wing CFD static pressure contour" }
        ]
      },
      {
        id: "cfrp-laminate-sizing", title: "CFRP Sandwich Laminate Sizing", category: "Structures & Composites", image: "assets/img/subprojects/rmse23-full-vehicle-cfd-pressure.png", imageFit: "contain",
        highlights: ["1.3 FOS at 40g via Tsai-Wu checks"],
        writeup: {
          overview: "Sized the CFRP sandwich laminates used across the car's composite parts to a quantified structural margin rather than a carried-over layup schedule.",
          approach: "Used classical lamination theory to compute the stiffness and strength of each candidate sandwich layup, then checked ply-by-ply failure against the Tsai-Wu criterion under the governing 40g load case for each part in ANSYS ACP.",
          achievements: [
            "Sized CFRP sandwich laminates by classical lamination theory, holding a 1.3 FOS at 40g load with Tsai-Wu checks in ANSYS ACP."
          ],
          tools: ["ANSYS ACP", "Classical lamination theory", "Tsai-Wu failure criterion"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23-velocity-contour.png", caption: "Full-vehicle CFD velocity contour used to cross-check aero loads on composite panels", imageFit: "contain" }
        ]
      },
      {
        id: "composite-manufacturing-moulds", title: "Composite Mould Manufacturing & Coupon Testing", category: "Structures & Composites", image: "assets/img/subprojects/rmse23-mould-3d-print.jpg",
        highlights: ["CNC-MDF and wire-cut foam moulds, vacuum-bagged layups"],
        writeup: {
          overview: "Built the tooling and manufacturing process for every composite part on the car, then validated the aero package's simulated performance against physical test data.",
          approach: "Moulds were produced by whichever process best matched the part's geometry — CNC, VMC, and Carvey machining for hard tooling, and 3D-printed split moulds glued together for complex organic shapes like the wings — then every layup was vacuum-bagged, with PU foam used to join adjacent composite panels for added strength. Fibre orientation was chosen per part rather than defaulted to a single layup: 0° fibres for parts loaded in one direction, 90° cross-plies added against buckling, and ±45° pairs where a part saw torsion, following classical composite-design practice. Sandwich parts like the motor-controller mount used a 10mm PU-foam core between two 430 GSM carbon-fibre hand-layup skins; smaller 3D-printed-mould parts (HVD mount, damper covers, rack cover, shroud) used a single 430 GSM ply over a PLA or foam core. To validate the aero surfaces, a scaled 3D-printed model of one wing was tested in a wind tunnel and its measured lift coefficient compared against the CFD prediction.",
          achievements: [
            "Built CNC-MDF and wire-cut foam moulds, vacuum-bagged every layup, and ran three-point bend and perimeter shear testing.",
            "Cross-validated the aero package by wind-tunnel testing a 3D-printed scale wing model against its CFD-predicted lift coefficient.",
            "Joined split 3D-printed mould segments and adjacent composite panels with PU foam for added strength and a repeatable, low-cost tooling process.",
            "Set fibre orientation per part (0°/90°/±45°) by load case, building sandwich panels from 430 GSM carbon fibre over PU-foam or PLA cores for parts like the motor-controller mount, HVD mount, damper covers, and shroud."
          ],
          tools: ["CNC / VMC / Carvey machining", "3D printing", "Vacuum bagging & wet layup", "Wind tunnel testing"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse23-wind-tunnel-test.png", caption: "Wind-tunnel validation of a 3D-printed scale wing model" }
        ]
      },
      {
        id: "optimumlap-powertrain-sizing", title: "OptimumLap Traction-Limited Powertrain Sizing", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23-power-sensitivity-curves.png", imageFit: "contain",
        highlights: ["65 kW powertrain target set from traction-limited lap simulation"],
        writeup: {
          overview: "Set the powertrain's power target for RMSE'23 from lap-time sensitivity rather than an arbitrary spec, so the motor choice matched what the tyres could actually put down.",
          approach: "Computed the tyre's maximum traction-limited torque from its friction data, CG height, mass distribution, and longitudinal load transfer, then used it to reshape the motor's characteristic curve into a traction-limited curve at each candidate power rating. Feeding these modified curves into OptimumLap (drive ratio fixed at 1, to isolate motor power as the only variable) produced power-sensitivity curves for both the endurance and autocross events across three aero configurations, run on the FSAE Hockenheimring circuit.",
          achievements: [
            "Built OptimumLap point-mass simulations at the tyre traction limit, generating power sensitivity curves that set a 65 kW powertrain.",
            "Swept endurance and autocross lap time against motor power across three aerodynamic configurations (no device, wings only, full package) to confirm the power target held regardless of aero package."
          ],
          tools: ["OptimumLap"]
        },
        gallery: []
      },
      {
        id: "pacejka-tyre-modeling", title: "Pacejka Tyre Modeling & Selection", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23-tyre-mu-slip-comparison.png", imageFit: "contain",
        highlights: ["Pacejka MF 5.2 models built from TTC data"],
        writeup: {
          overview: "Converted raw Tyre Testing Consortium (TTC) data into usable tyre models to drive tyre selection and every downstream vehicle-dynamics simulation.",
          approach: "Processed TTC data (across load, pressure, camber, and slip sweeps) into Pacejka MF 5.2 magic-formula tyre models at the selected 10 psi operating pressure, then compared four shortlisted 13-inch tyres — Hoosier R25B 20.5/7.0 and 20.5/6.0, Avon A92, and Goodyear D2704 — directly on longitudinal/lateral traction, peak-force response time, and operating temperature using the fitted models rather than raw data tables.",
          achievements: [
            "Processed TTC tyre data into Pacejka MF 5.2 models, driving tyre selection on traction, braking mu, and operating temperature.",
            "Selected the Hoosier R25B 20.5/7.0 for its combined acceleration/cornering traction, fastest peak lateral-force response, and lowest operating temperature among four shortlisted tyres.",
            "Flagged the selected tyre's above-average camber-induced force drop-off to the suspension team, driving a minimum-camber-change kinematic target for the suspension design."
          ],
          tools: ["Pacejka MF 5.2", "TTC (Tyre Testing Consortium) data"]
        },
        gallery: []
      },
      {
        id: "lltd-neutral-steer", title: "LLTD Tuning for Neutral Steer", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23-lltd-understeer-sweep.png", imageFit: "contain",
        highlights: ["47-53 LLTD selected for neutral steer"],
        writeup: {
          overview: "Set the car's lateral load transfer distribution (LLTD) target from a quantified understeer-gradient study rather than carried-over suspension settings — the first year the team set LLTD this way instead of by convention.",
          approach: "Built a constant-radius cornering test program in MATLAB sweeping front LLTD from 43% to 60%, plotting the resulting understeer gradient against lateral acceleration for each split to find the front/rear balance point closest to neutral steer while remaining stable across the full lateral-acceleration range.",
          achievements: [
            "Modeled understeer gradient against lateral load transfer distribution in constant-radius tests, setting 47-53 LLTD for neutral steer.",
            "Swept front LLTD from 43% to 60% in a constant-radius test program, finding 47% front gave near-zero understeer while remaining the most stable split across the lateral-acceleration range."
          ],
          tools: ["MATLAB"]
        },
        gallery: []
      },
      {
        id: "brake-bias-sizing", title: "Tyre-Slip Braking Model & Brake Bias Sizing", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse23-wilwood-caliper-photo.jpg", imageFit: "contain",
        highlights: ["Brake bias of 3.1 set from a Simulink tyre-slip model"],
        writeup: {
          overview: "Sized the braking system's front/rear bias and hardware from first principles rather than a rule-of-thumb split, while cutting the pedal force needed for wheel lockup from RMSE'19's 500 N (400 N on RMSE'21) down to 300 N.",
          approach: "Built a Simulink tyre-slip braking model taking pedal position, pedal ratio, balance-bar bias, and master-cylinder/caliper piston areas as inputs, computing longitudinal slip via the Pacejka tyre model and the resulting frictional force at each tyre to find the bias that lets front and rear lock together at the tyre's traction limit. The calculated 3.1 bias was matched in hardware with Wilwood compact remote-flange master cylinders (0.625\" bore front / 1.125\" bore rear) and a Wilwood DynaPro Single caliper (120-9689-LP, 44.4mm piston) running BP-20 pads (μ ≈ 0.45) and DOT 4 fluid, with fine bias adjustment via a balance-bar spherical bearing.",
          achievements: [
            "Built a Simulink tyre-slip braking model to set brake bias at 3.1 and size the master cylinder and caliper combination.",
            "Matched the 3.1 bias in hardware with Wilwood master cylinders (0.625\"/1.125\" bore) and a Wilwood DynaPro Single caliper, cutting the wheel-lockup pedal-force target to 300 N."
          ],
          tools: ["MATLAB / Simulink"]
        },
        gallery: []
      },
      {
        id: "lv-power-distribution-card", title: "LV Power Distribution Card", category: "Electronics & Controls", image: "assets/img/subprojects/rmse23-relay-pcb-layout.png", imageFit: "contain",
        highlights: ["360 W LV power card at 92% efficiency"],
        writeup: {
          overview: "Designed the car's central low-voltage power distribution, sized to the full electrical load of the VCU, sensors, relays, and cooling auxiliaries.",
          approach: "Estimated total LV load across every subsystem — roughly 4 A on the 5V/control bus (VCU, dashboard, DAQ, discharge/TSAL circuitry), 14 A on the 24V thermal bus (dominated by the accumulator, motor, and MCU cooling fans and pumps), and 2 A on the shutdown-circuit bus (precharge/AIR/discharge relays) — then designed a power distribution card converting the LV battery voltage down through the loads at a targeted efficiency, alongside dedicated Power Card, Control Card, BSPD, Relay, and DAQ boards.",
          achievements: [
            "Designed an LV power distribution card delivering 360 W at 92% efficiency, alongside APPS, brake-plausibility, and DAQ boards.",
            "Sized the LV distribution to a ~20 A total load dominated by the 24V thermal bus (accumulator, motor, and MCU cooling fans and pumps), split across dedicated Power Card, Control Card, BSPD, Relay, and DAQ boards."
          ],
          tools: ["Altium", "LTspice"]
        },
        gallery: []
      },
      {
        id: "board-bringup-scrutineering", title: "Board Bring-Up & Scrutineering Validation", category: "Electronics & Controls", image: "assets/img/placeholder-project.svg",
        highlights: ["Bench-verified implausibility and shutdown behavior before scrutineering"],
        writeup: {
          overview: "Took the electronics boards from layout to a scrutineering-ready state, closing out the FS rules checks before the car reached technical inspection.",
          approach: "Laid out and assembled the LV/DAQ boards, then bench-tested each one to deliberately trigger implausibility and shutdown fault conditions and confirm the response matched FS rule requirements before the car was presented for scrutineering. The standalone BSPD board's implausibility logic (motor power ≥5 kW with hard braking sustained past 500ms) was first validated in NI Multisim, then confirmed on the bench, including its 15-second auto-reset behavior.",
          achievements: [
            "Laid out, assembled, and bench-tested the boards, verifying implausibility and shutdown behavior against FS rules before scrutineering.",
            "Validated the BSPD's 500ms hard-braking-under-power implausibility trip and 15-second auto-reset, in simulation and then on the bench, ahead of technical inspection."
          ],
          tools: ["Bench power supplies & multimeter", "Oscilloscope"]
        },
        gallery: []
      },
      {
        id: "harness-coolant-routing", title: "Vehicle Harness & Coolant Line Routing", category: "Electronics & Controls", image: "assets/img/subprojects/rmse23-coolant-hose-routing-cad.png", imageFit: "contain",
        highlights: ["Bend radii and service access validated in CAD"],
        writeup: {
          overview: "Routed the full vehicle wiring harness and coolant lines in CAD before manufacturing, rather than routing them by hand on the car.",
          approach: "Modeled harness and coolant-line paths in CAD alongside the rest of the vehicle assembly, checking minimum bend radii against cable/hose specifications and confirming every connector and service point remained accessible with the bodywork installed. Coolant hose lengths (680mm motor controller-to-radiator, 770mm radiator-to-pump, 85mm pump-to-motor, 365mm motor-to-controller — 1900mm total) were fixed by this routing before being fed into the thermal model. HV wiring used XLPE copper-core, silicone, and marine-grade cable; LV wiring used Phoenix M12 and Samtec cable assemblies.",
          achievements: [
            "Routed the vehicle harness and coolant lines in CAD, validating bend radii and service access.",
            "Fixed coolant hose routing to a 1900mm total run (680/770/85/365mm segments) before it fed into the thermal model, and selected HV/LV wiring (XLPE, silicone, and marine-grade for HV; Phoenix M12 and Samtec for LV) to match."
          ],
          tools: ["SolidWorks (CAD harness routing)"]
        },
        gallery: []
      }
    ],
    rmse21: [
      {
        id: "brake-disc-thermal", title: "Brake Disc Thermal Sizing", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse21-brake-disc-render.png", imageFit: "contain",
        highlights: ["AISI 4130 discs sized for 300-450°C endurance"],
        writeup: {
          overview: "Sized the brake disc material and geometry to survive the thermal load of a full endurance run rather than to strength alone — moving from a solid disc, which warped under uneven heating and caused inconsistent pad contact, to a floating design that lets the rotor expand freely relative to the hub.",
          approach: "Built a Simulink thermal model — a Heat-In block (friction heat input as a function of vehicle speed, deceleration, and a rotor/pad partition coefficient) feeding into a Heat-Loss block (convective loss from a Reynolds/Prandtl/Nusselt correlation against vehicle speed) integrated over time — to predict rotor temperature over a 300s representative endurance drive cycle, then selected AISI 4130 steel (normalized at 870°C) discs sized to operate within the resulting 300-450°C range without excessive thermal fade or warping. The governing test case was a 3g constant-retardation stop from 100 km/h (1.619s of braking, heat flux decaying as 39301.5–4275.18t W and convective coefficient as 51.85–32.026t W/m²°C, then zero once stopped). The floating design uses 8 bobbins with a 1mm float allowance per side, secured by M8 circlips, to carry force from the outer slotted (for convective cooling) disc to the inner hub while allowing that thermal expansion; the design was validated by both transient thermal FEA (438.6°C peak temperature, 1.54 W/mm² peak heat flux) and structural FEA (18.8 kN peak brake-pad clamping force).",
          achievements: [
            "Modeled brake-disc temperature and convective loss over a 300s drive cycle, sizing AISI 4130 discs for 300-450°C endurance.",
            "Moved from a solid disc (which warped and caused inconsistent pad contact) to a floating design — 8 bobbins with a 1mm float allowance, secured by M8 circlips — validated by transient thermal and structural FEA.",
            "Validated the thermal model against a 3g/100 km/h-to-0 braking test case in transient thermal FEA, confirming a 438.6°C peak rotor temperature and 1.54 W/mm² peak heat flux against the 300-450°C design range."
          ],
          tools: ["MATLAB / Simulink", "ANSYS (transient thermal & structural FEA)"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-brake-disc-simulink-model.png", caption: "Simulink thermal model — heat input, convective heat loss, and temperature integration", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-brake-disc-temperature-vs-time.png", caption: "Simulated rotor temperature over a 300s endurance drive cycle", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-brake-disc-convective-heat-loss.png", caption: "Simulink convective heat-loss profile over a 300s endurance drive cycle", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-brake-disc-fea-temperature-contour.png", caption: "Transient thermal FEA — temperature contour (438.6°C peak)", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-brake-disc-fea-heat-flux.png", caption: "Transient thermal FEA — total heat flux distribution (1.54 W/mm² peak)", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-brake-disc-structural-fea.png", caption: "Structural FEA boundary conditions on the floating disc", imageFit: "contain" }
        ]
      },
      {
        id: "accumulator-forced-air-cooling", title: "Forced-Air Accumulator Cooling", category: "Thermal & Energy Systems", image: "assets/img/subprojects/rmse21-accumulator-icepak-model.png", imageFit: "contain",
        highlights: ["1.2 kW rejected, cells held under 60°C at 10C peak discharge"],
        writeup: {
          overview: "Designed the accumulator's forced-air cooling system to keep every module under its safe operating temperature through a full endurance run at peak discharge.",
          approach: "Modeled cell heat generation from Joule heating at the endurance-run discharge current (~2 W/cell at a 10 A safety-factored average), then built a transient Ansys Icepak CFD model of the accumulator container's internal airflow (cooling air entering through OEM-defined gaps between modules) to size the fan count and airflow needed to hold cells under the 60°C limit — first confirming that natural convection alone was insufficient before sizing the active fan-cooling solution.",
          achievements: [
            "Modeled forced-air accumulator cooling in Icepak, rejecting 1.2 kW to hold cells under 60°C at a 10C peak discharge.",
            "Showed natural convection alone was insufficient (72.4°C average cell temperature), justifying the 3-fan forced-air design that held cells under the 60°C target."
          ],
          tools: ["Ansys Icepak"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-accumulator-sidepod-airflow.png", caption: "Sidepod inlet air routed through the chassis to the accumulator container" },
          { image: "assets/img/subprojects/rmse21-accumulator-vent-airflow-diagram.png", caption: "Cooling air path through the OEM module vents", imageFit: "contain" }
        ]
      },
      {
        id: "parametric-suspension-cad", title: "Parametric Suspension CAD from VD Hardpoints", category: "Structures & Composites", image: "assets/img/subprojects/rmse21-hardpoint-sketch.png", imageFit: "contain",
        highlights: ["Uprights, rockers, and A-arms regenerated across 14 kinematic iterations"],
        writeup: {
          overview: "Built the suspension CAD to update automatically as the vehicle-dynamics hardpoints iterated, rather than re-drawing components by hand for every geometry change.",
          approach: "Drove upright, rocker, and A-arm geometry directly from the VD team's hardpoint coordinate tables, so that each kinematic iteration (from hardpoint selection, steering geometry, and actuation-geometry studies) could regenerate the full parametric suspension assembly without manual rework.",
          achievements: [
            "Built fully parametric CAD driven by VD hardpoints, regenerating uprights, rockers, and A-arms across 14 kinematic iterations."
          ],
          tools: ["SolidWorks (parametric/equation-driven CAD)"]
        },
        gallery: []
      },
      {
        id: "suspension-mass-reduction", title: "Suspension & Drivetrain Mass Reduction", category: "Structures & Composites", image: "assets/img/subprojects/rmse21-rear-suspension-assembly.jpg", imageFit: "contain",
        highlights: ["25% mass cut at a 1.2 Goodman fatigue FOS"],
        writeup: {
          overview: "Cut mass from the suspension and drivetrain members without giving up fatigue margin, by sizing every member to its actual worst-case load rather than a uniform safety factor.",
          approach: "Sized suspension and drivetrain members against worst-case cornering and braking load cases, targeting a 1.2 Goodman fatigue factor of safety as the sizing constraint rather than a static-only check, allowing thinner sections wherever fatigue (not yield) wasn't the limiting failure mode. Final CAD FEA on the A-arms, uprights, brackets, rockers, and hubs (AISI 4130 steel and Al 6061/7075 T6) confirmed a minimum factor of safety of 2.5 across the assembly.",
          achievements: [
            "Cut suspension and drivetrain mass 25% by sizing members to worst-case cornering and braking loads at a 1.2 Goodman fatigue FOS.",
            "Validated final component masses and FOS by material (AISI 4130 A-arms, Al 6061/7075 T6 uprights, brackets, rockers, and hubs) against the sizing targets."
          ],
          tools: ["Goodman fatigue analysis", "FEA"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-front-suspension-assembly.jpg", caption: "Front suspension assembly — upright, rockers, and pushrod" },
          { image: "assets/img/subprojects/rmse21-front-upright-render.jpg", caption: "Front upright, sized to a 1.2 Goodman fatigue FOS" }
        ]
      },
      {
        id: "accumulator-enclosure-modal", title: "Accumulator Enclosure & Bracket Design", category: "Structures & Composites", image: "assets/img/subprojects/rmse21-battery-module-bms.png", imageFit: "contain",
        highlights: ["First mode placed above 3x powertrain excitation"],
        writeup: {
          overview: "Designed the accumulator enclosure and its mounting brackets to survive both crash-level structural loads and everyday vibration without resonating with the powertrain.",
          approach: "Placed the enclosure's first structural mode above 3x the powertrain's excitation frequency to avoid resonance, verified by modal FEA, while separately validating the container walls against 40g longitudinal, 40g lateral, and 20g vertical crash load cases per the FB21 rulebook's EV5.5 accumulator-container requirements. The steel-clip fix let the AISI 1020 carbon-steel container walls drop from 2.5 mm (prior car) to 1.5 mm this year without exceeding the load-case stress limits, with segment casings and other fittings 3D-printed in fire-retardant ABS.",
          achievements: [
            "Designed the accumulator enclosure and brackets to place the first mode above 3x powertrain excitation, verified by modal FEA.",
            "Validated the container structure to 2.1–4.1 factor of safety under 40g longitudinal, 40g lateral, and 20g vertical FEA load cases per the FB21 rulebook."
          ],
          tools: ["ANSYS (modal & static FEA)"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-accumulator-fea-stress.png", caption: "Accumulator container structural FEA under 40g loading" },
          { image: "assets/img/subprojects/rmse21-accumulator-steel-clip.jpg", caption: "Steel spacer clips added between cell rows, cutting peak stress from 762 to 141 MPa" }
        ]
      },
      {
        id: "master-cad-assembly", title: "Full-Vehicle Master CAD Assembly", category: "Structures & Composites", image: "assets/img/subprojects/rmse21-master-cad-assembly.jpg", imageFit: "contain",
        highlights: ["800-part master assembly with full clearance/interference checks"],
        writeup: {
          overview: "Owned the single source-of-truth CAD assembly that every subsystem's parts had to fit into, catching packaging conflicts before they reached manufacturing.",
          approach: "Integrated all ~800 parts across every subsystem into one master assembly, running clearance and interference checks at each major design freeze. Mass distribution and CG height — critical inputs shared across VD, powertrain sizing, and tyre selection — were tracked through a purpose-built MATLAB tool that let each component's position be set visually on a vehicle profile image rather than estimated per-subsystem, cutting the compounding errors of the team's older spreadsheet-only method.",
          achievements: [
            "Owned the full-vehicle master CAD assembly, integrating 800 parts across all subsystems with clearance and interference checks.",
            "Replaced subsystem-level mass/CG estimation with a part-by-part MATLAB tool, letting individual component positions be set visually against a vehicle profile image for more accurate CG height and mass-distribution tracking."
          ],
          tools: ["SolidWorks (master assembly)", "MATLAB"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-cg-matlab-script.png", caption: "MATLAB tool for visually setting component CG position against a vehicle profile image", imageFit: "contain" }
        ]
      },
      {
        id: "wheel-to-wheel-pack-sizing", title: "Well-to-Wheel Power Pack Sizing", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse21-cell-comparison-table.png", imageFit: "contain",
        highlights: ["538V/18Ah pack sized via a well-to-wheel model"],
        writeup: {
          overview: "Sized the accumulator pack and its supporting high-voltage hardware from a full well-to-wheel energy model rather than a rough capacity guess.",
          approach: "Modeled the drive cycle's energy demand from the wheels back through the drivetrain, motor, and pack to size total pack capacity, then selected NMC cells (prioritizing manufacturability and safety after the prior car's packaging/harnessing problems), AIRs, HV fusing, and a harness designed to ISO 6469-3. The pack was split into 6 segments of 22 cell-modules each, arranged as a single row per segment (rather than two parallel rows of 11) specifically to simplify bus-bar routing and let segments connect over Radlock HV connectors.",
          achievements: [
            "Devised a well-to-wheel model to size the 538V/18Ah power pack, and selected NMC cells, AIRs, HV fusing, and harness to ISO 6469-3.",
            "Selected pre-assembled NMC cylindrical-cell modules over cheaper cell-only options specifically to fix the prior car's accumulator assembly and packaging problems, despite their roughly 2x cost.",
            "Segmented the pack into 6 single-row (22s6p) segments joined by Radlock HV connectors, minimizing bus-bar and wiring complexity."
          ],
          tools: ["MATLAB (well-to-wheel energy model)", "OptimumLap"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-optimumlap-drive-cycle-map.png", caption: "OptimumLap drive-cycle speed map used to size the pack's energy demand" }
        ]
      },
      {
        id: "abs-tc-slip-model", title: "ABS & Traction Control from a Tyre-Slip Model", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse21-wilwood-caliper.png", imageFit: "contain",
        highlights: ["7% lap-time gain from simulated ABS/TC"],
        writeup: {
          overview: "Quantified the lap-time value of adding ABS and traction control before committing engineering time to build them, using the same longitudinal tyre-slip modeling approach the team used for brake-bias sizing.",
          approach: "Simulated longitudinal tyre slip through braking and acceleration events, comparing lap time with and without simulated ABS/TC intervention to quantify the benefit before hardware and control-logic development. The same tyre-slip vehicle-state model was used to size the pedal box: a 3.4 pedal ratio and 0.55F/0.45R brake bias against a Wilwood 120-9689-LP caliper and Wilwood 260-10371 (front) / 260-10376 (rear) master cylinders, targeting full wheel lockup at a 400 N pedal force — down from 500 N on the prior car, per driver feedback.",
          achievements: [
            "Simulated ABS and traction control from a longitudinal tyre-slip model, showing a 7% lap-time gain.",
            "Used the same tyre-slip vehicle-state model to finalize a 3.4 pedal ratio and 0.55F/0.45R brake bias, braking from 20 m/s to 0 in 1.2s.",
            "Cut the target wheel-lockup pedal force from 500 N to 400 N versus the prior car, based on driver feedback."
          ],
          tools: ["MATLAB / Simulink"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-wilwood-master-cylinder.png", caption: "Wilwood dual master cylinders sized from the tyre-slip pedal-force model", imageFit: "contain" }
        ]
      },
      {
        id: "motor-diff-gear-selection", title: "Motor, Differential & Gear Ratio Selection", category: "Vehicle Dynamics & Simulation", image: "assets/img/subprojects/rmse21-bamocar-spec-table.jpg", imageFit: "contain",
        highlights: ["12% wheel-torque gain from tyre-slip-model-driven selection"],
        writeup: {
          overview: "Selected the motor, differential, and final drive ratio as a matched set from tyre-slip and lap-time modeling, rather than sizing each in isolation.",
          approach: "Sized the motor from OptimumLap power-sensitivity curves run at the tyre traction limit, finding a minimum 70 kW peak / 45 kW continuous requirement, then chose an EMRAX 228 derated to 80 kW over the cheaper, lighter EMRAX 208 specifically so the motor could be derated harder for a longer service life and reused on future cars. It was paired with a BAMOCAR PG D3 400-700 field-oriented controller — recommended by EMRAX itself and rated to 400 A peak / 200 A continuous, comfortably above the motor's own 340 A / 160 A ratings — and a Torsen limited-slip differential, chosen over both a spool and a Drexler clutch-type LSD since the Torsen's gear-based torque biasing needs no wearing friction discs. The gear ratio was then swept against the traction-limit and dynamic-event targets to land on a 3.615:1 chain reduction, with the chain and mount bearings sized against the resulting loads.",
          achievements: [
            "Selected the motor, differential, and gear ratio from tyre-slip models, gaining 12% wheel torque.",
            "Selected an EMRAX 228 motor (derated to 80 kW) with a BAMOCAR PG D3 400-700 controller, and a Torsen limited-slip differential (4.5:1 torque-bias ratio) over a spool and a clutch-type LSD for maintenance-free dynamic cornering performance.",
            "Landed on a 3.615:1 chain reduction (13T/47T sprockets, TIDC 428 chain), sized to a 13.6 kN peak chain load (1.5x shock factor) against the chain's 19.3 kN rating.",
            "Sized motor- and differential-mount bearings (S6204-2RSR, S6307-2RSR) to a 3.6M-revolution expected life against a 3,000 km duty cycle."
          ],
          tools: ["OptimumLap", "MATLAB"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-motor-loss-chart.png", caption: "Simulated motor loss over an endurance run, used for powertrain sizing", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-emrax228-motor-photo.png", caption: "EMRAX 228 MV motor, the selected 80 kW-derated PMSM", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-bamocar-controller-photo.png", caption: "UNITEK BAMOCAR PG D3 field-oriented motor controller" },
          { image: "assets/img/subprojects/rmse21-torsen-differential-render.png", caption: "JTEKT Torsen limited-slip differential, selected over a spool for dynamic torque biasing" }
        ]
      },
      {
        id: "segment-bms-boards", title: "Segment BMS Boards", category: "Electronics & Controls", image: "assets/img/subprojects/rmse21-battery-module-bms.png", imageFit: "contain",
        highlights: ["Passive-balancing segment BMS feeding the shutdown circuit"],
        writeup: {
          overview: "Designed the per-segment battery-monitoring boards that feed cell-voltage and thermistor data into the accumulator's fault-latching shutdown path.",
          approach: "Built segment BMS boards with passive cell balancing around the bq76PL455A-Q1 (a 14-bit SAR-ADC monitoring IC), two per 22-cell module — each covering 11 cells and 8 temperature sensors — feeding any undervoltage, overvoltage, overheating, or communication fault directly into the shutdown circuit's latching logic. HV current is sensed through an isolated AMC1200 differential amplifier across a 1.1 mΩ shunt sized for ±250 A, and a MOSFET-based reverse-polarity protection circuit guards the board's own supply. Daisy-chain communication between segments (running at 4 Mb/s over twisted pair) is isolated from their differing ground potentials by DC-blocking capacitors and TVS diodes, with an ISO7741 digital isolator separating the HV-side AMS from the LV-side DAQ.",
          achievements: [
            "Built segment BMS boards around the bq76PL455A-Q1 (14-bit SAR ADC) with passive balancing, feeding cell-voltage and thermistor faults to the shutdown circuit.",
            "Designed isolated HV current sensing (AMC1200 differential amplifier, 1.1 mΩ shunt sized for ±250 A) and MOSFET-based reverse-polarity protection onto the same boards.",
            "Isolated 4 Mb/s daisy-chain communication between segments at different ground potentials using DC-blocking capacitors, TVS diodes, and an ISO7741 digital isolator for noise immunity."
          ],
          tools: ["Altium", "UART / daisy-chain communication"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-bms-daisy-chain-schematic.png", caption: "Daisy-chain communication isolation between BMS segments", imageFit: "contain" }
        ]
      },
      {
        id: "precharge-discharge-circuitry", title: "Pre-Charge & RC Discharge Circuitry", category: "Electronics & Controls", image: "assets/img/subprojects/rmse21-precharge-air-schematic.png", imageFit: "contain",
        highlights: ["AIRs close at 90% of DC bus voltage"],
        writeup: {
          overview: "Designed the circuitry that safely energizes and de-energizes the DC link, protecting the AIRs and downstream electronics from inrush current and fault conditions.",
          approach: "Designed pre-charge control logic that closes the AIRs only once the motor-controller-side DC-link capacitor has charged to 90% of DC bus voltage — detected by comparators comparing a scaled battery-voltage signal against the motor-controller voltage, isolated across the HV/LV boundary by an optocoupler — and RC discharge circuitry that actively de-energizes the DC link the instant any fault is detected. Flyback diodes across the AIR and pre-charge relay coils protect the switching MOSFETs, and the control logic was validated against the FB21 rulebook's EV4.10 AIR/pre-charge requirements.",
          achievements: [
            "Designed pre-charge and RC discharge circuitry, closing the AIRs at 90% of DC bus voltage and de-energizing the DC link on any fault.",
            "Validated the AIR/pre-charge relay control logic against the FB21 rulebook's EV4.10 requirements, using flyback-diode-protected relay switching."
          ],
          tools: ["Altium", "LTspice"]
        },
        gallery: []
      },
      {
        id: "shutdown-circuit-latching", title: "Latched Shutdown Circuit (BSPD/IMD/BMS)", category: "Electronics & Controls", image: "assets/img/subprojects/rmse21-imd-latching-circuit.png", imageFit: "contain",
        highlights: ["Latched BSPD, IMD, and BMS fault stages around an insulation monitor"],
        writeup: {
          overview: "Wired the vehicle's safety-critical shutdown circuit — the path that has to open reliably on any implausibility, isolation, or battery fault.",
          approach: "Built three latching relay stages — Brake System Plausibility Device (BSPD, checking for hard-braking-under-power implausibility via an HK200T03 Hall-effect current sensor and an M3041 brake-pressure sensor into a 500ms delay and D-flip-flop latch), an isolation-monitoring relay latch, and a BMS fault latch — all wired in series ahead of the shutdown buttons, inertia switch, and HVD interlock. The IMD and BMS stages use latching relays that hold their tripped state in a SET/RESET memory coil rather than a powered logic latch, so a fault stays flagged through a power cycle. Logic was validated in circuit simulation before hardware bring-up.",
          achievements: [
            "Wired the shutdown circuit with latched BSPD, IMD, and BMS stages around a Bender IR155 insulation monitor.",
            "Built the BSPD implausibility check (motor power > 5 kW with hard braking) from an HK200T03 current sensor and M3041 pressure sensor into window comparators, a 500ms delay, and a D-flip-flop latch with a 10s auto-reset.",
            "Used SET/RESET latching relays for the IMD and BMS fault stages so a tripped fault survives a power cycle until deliberately cleared."
          ],
          tools: ["NI Multisim", "Altium"]
        },
        gallery: [
          { image: "assets/img/subprojects/rmse21-bspd-current-sensor.png", caption: "Hall-effect current sensor feeding the BSPD implausibility check", imageFit: "contain" },
          { image: "assets/img/subprojects/rmse21-brake-pressure-sensor.png", caption: "Brake-pressure sensor feeding the BSPD implausibility check", imageFit: "contain" }
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
        gallery: [] },
      { name: "Casting & Rapid Tooling", caption: "Pouring molten metal into a sand mold", image: "assets/img/toolkit/sand-casting-pour.png",
        tools: ["Sand casting", "SLS-printed tooling", "Injection molding"],
        gallery: [] },
      { name: "Additive Manufacturing", caption: "FDM printing on an Ultimaker 2 Extended+", image: "assets/img/toolkit/additive-3d-printing.png",
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
      orgLink: "https://www.illinielectricmotorsports.com/",
      context: "Formula Student",
      period: "Sep 2025 – Present",
      image: "assets/img/projects/iem26.webp",
      heroPosition: "50% 78%",
      tags: [],
      hideTagsRow: true,
      summary: "Powertrain and Vehicle Dynamics Engineer",
      bullets: [],
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
        { name: "SolidWorks", logo: "assets/img/tools/solidworks.svg" }
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
        { name: "SolidWorks", logo: "assets/img/tools/solidworks.svg" },
        { name: "MATLAB / Simulink", logo: "assets/img/tools/matlab.png" },
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
        { name: "MATLAB / Simulink", logo: "assets/img/tools/matlab.png" }
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
        { name: "SolidWorks", logo: "assets/img/tools/solidworks.svg" },
        { name: "ANSYS Fluent", logo: "assets/img/tools/ansys.svg" }
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
        { name: "MATLAB / Simulink", logo: "assets/img/tools/matlab.png" }
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
        { name: "Raspberry Pi", logo: "assets/img/tools/raspberrypi.svg" }
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
            { name: "MATLAB", logo: "assets/img/tools/matlab.png" },
            { name: "FlexAnalyzer" },
            { name: "Chroma" },
            { name: "ElektoAutomatik" },
            { name: "NI DAQ" },
            { name: "Python", logo: "assets/img/tools/python.svg" }
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
            { name: "Python", logo: "assets/img/tools/python.svg" }
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
            { name: "MATLAB", logo: "assets/img/tools/matlab.png" },
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
            { name: "MATLAB", logo: "assets/img/tools/matlab.png" },
            { name: "ANSYS", logo: "assets/img/tools/ansys.svg" },
            { name: "Lucid" }
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
        { name: "SolidWorks", logo: "assets/img/tools/solidworks.svg" },
        { name: "ANSYS", logo: "assets/img/tools/ansys.svg" },
        { name: "MATLAB", logo: "assets/img/tools/matlab.png" },
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

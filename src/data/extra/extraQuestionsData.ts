import { Question } from "../../types";
import { extra6 } from "./extra6";
import { extra7 } from "./extra7";
import { extra8 } from "./extra8";
import { extra9 } from "./extra9";
import { extra10 } from "./extra10";
import { mashed } from "./mashed";

export interface ExtraQuestionSet {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const extraQuestionSets: ExtraQuestionSet[] = [
  {
    id: "extra1",
    name: "Extra Questions - Basic Civil Engineering",
    description: "133 Additional practice questions on standard construction materials, masonry, surveying, and building estimates.",
    questions: [
      {
        id: 1,
        text: "Plaster of Paris is obtained by calcining which of the following materials?",
        options: {
          a: "Limestone",
          b: "Gypsum",
          c: "Kankar",
          d: "Quartzite"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 2,
        text: "For repetitive use in concrete construction formworks, what material is preferred?",
        options: {
          a: "Timber",
          b: "Plywood",
          c: "Steel",
          d: "Aluminium"
        },
        answer: "c",
        tag: "Construction"
      },
      {
        id: 3,
        text: "The early strength of Portland cement is primarily due to which compound?",
        options: {
          a: "Tricalcium silicate (C3S)",
          b: "Dicalcium silicate (C2S)",
          c: "Tricalcium aluminate (C3A)",
          d: "Tetracalcium aluminoferrite (C4AF)"
        },
        answer: "a",
        tag: "Cement"
      },
      {
        id: 4,
        text: "The arrangement made to support an unsafe structure temporarily is known as:",
        options: {
          a: "Scaffolding",
          b: "Shoring",
          c: "Underpinning",
          d: "Jacking"
        },
        answer: "b",
        tag: "Construction"
      },
      {
        id: 5,
        text: "Before plastering, the background masonry surface has to be made:",
        options: {
          a: "Smooth",
          b: "Rough",
          c: "Highly saturated",
          d: "Painted"
        },
        answer: "b",
        tag: "Plastering"
      },
      {
        id: 6,
        text: "What is the major drawback associated with the electric seasoning of timber?",
        options: {
          a: "Honeycombing",
          b: "Rotting",
          c: "Splitting",
          d: "Warping"
        },
        answer: "c",
        tag: "Timber"
      },
      {
        id: 7,
        text: "Geologically and chemically, the composition of quartzite is:",
        options: {
          a: "Calcareous",
          b: "Argillaceous",
          c: "Siliceous",
          d: "Carbonaceous"
        },
        answer: "c",
        tag: "Geology"
      },
      {
        id: 8,
        text: "The component of paint that imparts color to it is called:",
        options: {
          a: "Vehicle",
          b: "Solvent",
          c: "Pigment",
          d: "Drier"
        },
        answer: "c",
        tag: "Paints"
      },
      {
        id: 9,
        text: "Which type of lime is specifically used in lime mortar to achieve hydraulic properties?",
        options: {
          a: "Fat lime",
          b: "Hydraulic lime",
          c: "Quick lime",
          d: "Slaked lime"
        },
        answer: "b",
        tag: "Lime"
      },
      {
        id: 10,
        text: "The primary raw material used in the manufacturing of cement is:",
        options: {
          a: "Gypsum",
          b: "Clay",
          c: "Limestone",
          d: "Iron ore"
        },
        answer: "c",
        tag: "Cement"
      },
      {
        id: 11,
        text: "Lacquer can be best classified as:",
        options: {
          a: "Oil Varnish",
          b: "Spirit Varnish",
          c: "Water Varnish",
          d: "Turpentine Varnish"
        },
        answer: "b",
        tag: "Paints"
      },
      {
        id: 12,
        text: "The initial setting time of ordinary Portland cement should not be less than:",
        options: {
          a: "10 minutes",
          b: "30 minutes",
          c: "45 minutes",
          d: "600 minutes"
        },
        answer: "b",
        tag: "Cement"
      },
      {
        id: 13,
        text: "The presence of sand in brick earth prevents which of the following defects?",
        options: {
          a: "Efflorescence",
          b: "Bloating",
          c: "Warping of bricks",
          d: "Cracking"
        },
        answer: "c",
        tag: "Bricks"
      },
      {
        id: 14,
        text: "The seasoning of timber is explicitly done for:",
        options: {
          a: "Increasing its weight",
          b: "Decreasing moisture content",
          c: "Soften the fibers",
          d: "Increasing insects attack resistance"
        },
        answer: "b",
        tag: "Timber"
      },
      {
        id: 15,
        text: "Plastic bitumen is a construction material generally used for:",
        options: {
          a: "Road paving",
          b: "Crack fillings",
          c: "Surface damp-proofing",
          d: "Dynamic loading joints"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 16,
        text: "The main compounds resulting from cement hydration are collectively termed:",
        options: {
          a: "Tricalcium aluminate hydrate",
          b: "CSH Gel",
          c: "Calcium hydroxide crystals",
          d: "Ettringite needles"
        },
        answer: "b",
        tag: "Cement"
      },
      {
        id: 17,
        text: "The indentation or indented surface on the top face of a brick is called a:",
        options: {
          a: "Key",
          b: "Striker",
          c: "Frog",
          d: "Flute"
        },
        answer: "c",
        tag: "Bricks"
      },
      {
        id: 18,
        text: "The minimum density of medium-density fiberboard ranges from 600 to 800 kg/m3, but what value is preferred in exams?",
        options: {
          a: "700 kg/m3",
          b: "850 kg/m3",
          c: "960 kg/m3",
          d: "1200 kg/m3"
        },
        answer: "c",
        tag: "Materials"
      },
      {
        id: 19,
        text: "The construction material that can be obtained from naturally existing rock by any extraction method is:",
        options: {
          a: "Brick",
          b: "Stone",
          c: "Tile",
          d: "Aggregate"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 20,
        text: "The type of cement prominently used for painting and aesthetic architectural coatings is:",
        options: {
          a: "Rapid hardening cement",
          b: "Low heat cement",
          c: "White cement",
          d: "High alumina cement"
        },
        answer: "c",
        tag: "Cement"
      },
      {
        id: 21,
        text: "Which type of rock aggregate is naturally not available in Nepal?",
        options: {
          a: "Quartzite",
          b: "Limestone",
          c: "Basalt",
          d: "Granite"
        },
        answer: "c",
        tag: "Materials"
      },
      {
        id: 22,
        text: "Which of the following operations is primarily used for sealing cracks in an asphalt pavement?",
        options: {
          a: "Resurfacing",
          b: "Crack filling",
          c: "Prime coating",
          d: "Tack coating"
        },
        answer: "b",
        tag: "Roads"
      },
      {
        id: 23,
        text: "After a prolonged period of storage, the strength of cement:",
        options: {
          a: "Increases",
          b: "Decreases",
          c: "Remains constant",
          d: "First decreases then increases"
        },
        answer: "b",
        tag: "Cement"
      },
      {
        id: 24,
        text: "Metallurgy is defined as the specialized process of:",
        options: {
          a: "Mixing alloys",
          b: "Extracting metals from the ore",
          c: "Forging iron bars",
          d: "Removing impurities from finished steel"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 25,
        text: "The addition of gypsum to cement is purposefully done to:",
        options: {
          a: "Decrease the setting time",
          b: "Increases setting time of cement",
          c: "Elevate structural strength",
          d: "Change the color density"
        },
        answer: "b",
        tag: "Cement"
      },
      {
        id: 26,
        text: "The process involving the removal of raw bulk impurities from metal ore is known as:",
        options: {
          a: "Refining",
          b: "Concentration of ore",
          c: "Fluxing",
          d: "Roasting"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 27,
        text: "The anti-corrosive pigment frequently used in paints for outstanding corrosive resistance is:",
        options: {
          a: "Titanium dioxide",
          b: "Zinc chromate",
          c: "Red lead",
          d: "Iron oxide black"
        },
        answer: "c",
        tag: "Paints"
      },
      {
        id: 28,
        text: "Which chemical ingredient imparts the characteristic red color to clay bricks?",
        options: {
          a: "Silica",
          b: "Alumina",
          c: "Iron Oxide",
          d: "Magnesia"
        },
        answer: "c",
        tag: "Bricks"
      },
      {
        id: 29,
        text: "The operation of removal of impurities of clay adhering to iron ore is structurally known as:",
        options: {
          a: "Leaching",
          b: "Pressing",
          c: "Calcining",
          d: "Sintering"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 30,
        text: "The structural swelling defect in a brick is also alternative known as:",
        options: {
          a: "Efflorescence",
          b: "Warping",
          c: "Bloating",
          d: "Chuffs"
        },
        answer: "c",
        tag: "Bricks"
      },
      {
        id: 31,
        text: "The chemical process of cement hydration fundamentally involves:",
        options: {
          a: "Burning clinkers at peak temperatures",
          b: "Mixing with water to form a paste",
          c: "Crushing raw limestone rocks",
          d: "Aerating structural binder bags"
        },
        answer: "b",
        tag: "Cement"
      },
      {
        id: 32,
        text: "The mechanical property of a material that enables it to be drawn out or elongated to an appreciable extent is:",
        options: {
          a: "Malleability",
          b: "Elasticity",
          c: "Ductility",
          d: "Plasticity"
        },
        answer: "c",
        tag: "Materials"
      },
      {
        id: 33,
        text: "The main alloying element present in stainless steel to generate corrosion resistance is:",
        options: {
          a: "Carbon",
          b: "Chromium",
          c: "Manganese",
          d: "Nickel"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 34,
        text: "The typical percentage of carbon content present in standard structural steel ranges from:",
        options: {
          a: "0.01% to 0.10%",
          b: "0.15% to 1.5%",
          c: "2.0% to 4.0%",
          d: "5.0% to 7.5%"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 35,
        text: "The minimum standard compressive strength of a first-class brick must be greater than:",
        options: {
          a: "3.5 N/mm2",
          b: "7.0 N/mm2",
          c: "10.5 N/mm2",
          d: "15.0 N/mm2"
        },
        answer: "c",
        tag: "Bricks"
      },
      {
        id: 36,
        text: "A laboratory Vicat apparatus setup is used to determine which parameter?",
        options: {
          a: "Soundness test",
          b: "Fineness test",
          c: "Consistency test",
          d: "Compressive test"
        },
        answer: "c",
        tag: "Cement"
      },
      {
        id: 37,
        text: "For first-class bricks, the relative water absorption ratio after 24 hours immersion should not be more than:",
        options: {
          a: "0.10",
          b: "0.15",
          c: "0.20",
          d: "0.25"
        },
        answer: "b",
        tag: "Bricks"
      },
      {
        id: 38,
        text: "For performing a standard compressive strength test of a brick, which mortar mix ratio is placed in the frog?",
        options: {
          a: "1:1",
          b: "1:3",
          c: "1:4",
          d: "1:6"
        },
        answer: "a",
        tag: "Bricks"
      },
      {
        id: 39,
        text: "In a standard compressive strength test, the minimum strength developed by a cube specimen of M20 concrete in 7 days is:",
        options: {
          a: "10.0 MPa",
          b: "12.5 MPa",
          c: "13.5 MPa",
          d: "20.0 MPa"
        },
        answer: "b",
        tag: "Concrete"
      },
      {
        id: 40,
        text: "Which of the following testing layouts is NOT classified as a non-destructive test?",
        options: {
          a: "Rebound hammer test",
          b: "Ultrasonic pulse velocity test",
          c: "Compression test",
          d: "Radiography test"
        },
        answer: "c",
        tag: "Concrete"
      },
      {
        id: 41,
        text: "The laboratory testing of the soundness of cement is done using the apparatus of:",
        options: {
          a: "Vicat",
          b: "le-Chatelier",
          c: "Blaine's air permeability",
          d: "Slump cone"
        },
        answer: "b",
        tag: "Cement"
      },
      {
        id: 42,
        text: "Terracotta tiles or blocks are prominently integrated into building structures for:",
        options: {
          a: "High load-bearing columns",
          b: "Damp proof courses",
          c: "Ornamental work",
          d: "Deep foundations"
        },
        answer: "c",
        tag: "Materials"
      },
      {
        id: 43,
        text: "A plinth area estimate is prepared based on the plinth area of the building, where the applicable rate is deducted from:",
        options: {
          a: "A generic theoretical index book",
          b: "The cost of a similar building having similar specifications, heights, and construction in the locality",
          c: "Land valuation profiles",
          d: "Approximate material quantities"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 44,
        text: "In a standard traditional staircase flight design, the total number of treads is equal to:",
        options: {
          a: "Risers plus one",
          b: "Risers minus one",
          c: "Twice the total number of risers",
          d: "Same number of risers"
        },
        answer: "b",
        tag: "Construction"
      },
      {
        id: 45,
        text: "Which of the following brick masonry wall bonds is considered the structurally weakest bond?",
        options: {
          a: "English bond",
          b: "Flemish bond",
          c: "Stretcher bond",
          d: "Raking bond"
        },
        answer: "d",
        tag: "Masonry"
      },
      {
        id: 46,
        text: "In the case of cavity walls where both leaf walls are load bearing, the design effective thickness is considered as the larger of:",
        options: {
          a: "Thickness of the stronger wall only",
          b: "Thickness of stronger wall and 2/3 of sum of thickness of both walls",
          c: "The sum total of both wall dimensions",
          d: "The clear width distance between the two walls"
        },
        answer: "b",
        tag: "Masonry"
      },
      {
        id: 47,
        text: "What is the primary operational purpose of integrating waterproof tiles onto a surface layout?",
        options: {
          a: "Enhancing thermal conductivity",
          b: "Prevents water from entering",
          c: "Lowering dead weight components",
          d: "Providing structural joint relief"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 48,
        text: "Which combination of binding/sealing components is generally used in rainwater roof gutters?",
        options: {
          a: "Lime and aggregate slurry",
          b: "Cement, sand and bitumen etc.",
          c: "Gypsum paste only",
          d: "Epoxies and steel dust"
        },
        answer: "b",
        tag: "Construction"
      },
      {
        id: 49,
        text: "A projecting piece usually provided at a masonry wall face to support a structural roof truss is a:",
        options: {
          a: "Cornice",
          b: "Frieze",
          c: "Coping",
          d: "Lintel"
        },
        answer: "b",
        tag: "Construction"
      },
      {
        id: 50,
        text: "The process of making a smooth background masonry surface rough before applying a plaster layer is called:",
        options: {
          a: "Blasting",
          b: "Hacking",
          c: "Peeling",
          d: "Floating"
        },
        answer: "b",
        tag: "Plastering"
      },
      {
        id: 51,
        text: "According to public health and building safety regulations, which utility pipeline cannot be provided underneath a floor?",
        options: {
          a: "Water supply pipe",
          b: "Gas pipe",
          c: "Electric conduit",
          d: "Drainage pipe"
        },
        answer: "b",
        tag: "Construction"
      },
      {
        id: 52,
        text: "The net carpet area of a standard residential building typically accounts for what percentage of its total plinth area?",
        options: {
          a: "20-35%",
          b: "40-45%",
          c: "50-65%",
          d: "75-85%"
        },
        answer: "c",
        tag: "Estimates"
      },
      {
        id: 53,
        text: "As per generic building codes, the plinth area of a structure should occupy about what percentage range of the total plot area?",
        options: {
          a: "30 to 45%",
          b: "50 to 55%",
          c: "60 to 75%",
          d: "85 to 95%"
        },
        answer: "c",
        tag: "Estimates"
      },
      {
        id: 54,
        text: "The type of natural stone selected for constructing heavy load-bearing retaining walls must be characteristically:",
        options: {
          a: "Light and porous",
          b: "Soft and easily carved",
          c: "Heavy",
          d: "Stratified with clay joints"
        },
        answer: "c",
        tag: "Materials"
      },
      {
        id: 55,
        text: "The dressing operations of a structural stone must be performed:",
        options: {
          a: "Immediately after quarrying",
          b: "After 6 months of seasoning",
          c: "Just before dynamic loading tests",
          d: "After soaking in water for 48 hours"
        },
        answer: "a",
        tag: "Materials"
      },
      {
        id: 56,
        text: "Which circular finishing or structural element is commonly applied in vertical load-bearing construction layouts?",
        options: {
          a: "Beams",
          b: "Slabs",
          c: "Pillars",
          d: "Footings"
        },
        answer: "c",
        tag: "Construction"
      },
      {
        id: 57,
        text: "For which of the following geometric cross-sections do the Center of Gravity (CG) and geometric center NOT coincide?",
        options: {
          a: "Rectangle",
          b: "Circle",
          c: "Right angle triangle",
          d: "Square"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 58,
        text: "The mathematical expression for the second moment of area (Moment of Inertia) of a triangle about its base axis is:",
        options: {
          a: "I = bh^3 / 36",
          b: "I = bh^3 / 12",
          c: "I = bh^3 / 3",
          d: "I = bh^3 / 48"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 59,
        text: "To ensure a well-conditioned triangle layout in surveying practice, no angle within the triangle should be less than:",
        options: {
          a: "20 degree",
          b: "30 degree",
          c: "45 degree",
          d: "60 degree"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 60,
        text: "The section modulus (Z) of a hollow circular cross-section with external diameter D and internal diameter d is given by:",
        options: {
          a: "Z = π(D^4 - d^4) / 64D",
          b: "Z = π(D^4 - d^4) / 32D",
          c: "Z = π(D^3 - d^3) / 32",
          d: "Z = π(D^4 - d^4) / 32"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 61,
        text: "The Moment of Inertia (MOI) of a hollow circular section with external radius R and internal radius r is:",
        options: {
          a: "π(R^4 - r^4) / 2",
          b: "π(R^4 - r^4) / 4",
          c: "π(R^4 - r^4) / 64",
          d: "π(R^4 - r^4) / 32"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 62,
        text: "The moment of inertia of a rectangular cross-section (width b, depth d) calculated about a horizontal axis passing through its base line is:",
        options: {
          a: "bd^3 / 12",
          b: "bd^3 / 36",
          c: "bd^3 / 3",
          d: "b^3d / 3"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 63,
        text: "The position of the Center of Gravity (CG) of a solid right circular cone of height h lies along its axis at what distance measured from its base?",
        options: {
          a: "h/2",
          b: "h/3",
          c: "h/4",
          d: "3h/8"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 64,
        text: "Calculate the second moment of area of a hollow circular section with an external diameter of 20cm and an internal diameter of 10cm.",
        options: {
          a: "3214.56 cm4",
          b: "5421.12 cm4",
          c: "7363.11 cm4",
          d: "9812.05 cm4"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 65,
        text: "The perpendicular axis theorem is specifically used to calculate the moment of inertia of a:",
        options: {
          a: "Spherical ball",
          b: "Circular lamina",
          c: "Rectangular prism",
          d: "Triangular wedge"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 66,
        text: "The position of the Center of Gravity (CG) of a solid hemisphere measured from its straight diametric base plane is:",
        options: {
          a: "r/2",
          b: "3r/4",
          c: "3r/8",
          d: "5r/8"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 67,
        text: "A 3D solid structural element having an equilateral triangle as its base while all other faces converge toward its vertical axis is known as a:",
        options: {
          a: "Prism",
          b: "Pyramid",
          c: "Cylinder",
          d: "Polyhedron"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 68,
        text: "Which 3D geometric shape layout is characteristically made up of uniform parallel triangles across its depth?",
        options: {
          a: "Cone",
          b: "Prism",
          c: "Pyramid",
          d: "Cuboid"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 69,
        text: "The radius of gyration (k) of a rectangular cross-section is proportional to:",
        options: {
          a: "Square root of the moment of inertia",
          b: "Square root of the inverse of the area",
          c: "Square root of the moment of inertia divided by area of the section",
          d: "All of the above stated structural relationships"
        },
        answer: "d",
        tag: "Mechanics"
      },
      {
        id: 70,
        text: "The moment of inertia of a triangular section of base b and height h about an axis passing through its vertex and parallel to the base is how many times greater than that passing through its CG and parallel to the base?",
        options: {
          a: "3 times",
          b: "6 times",
          c: "9 times",
          d: "12 times"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 71,
        text: "The Moment of Inertia of a semi-circle of radius R about its straight diametric base line is:",
        options: {
          a: "πR^4 / 4",
          b: "πR^4 / 8",
          c: "πR^4 / 64",
          d: "0.11R^4"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 72,
        text: "The structural moment of inertia of a circular section of diameter d about its centroidal axis is:",
        options: {
          a: "πd^4 / 32",
          b: "πd^4 / 64",
          c: "πd^4 / 128",
          d: "πd^4 / 12"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 73,
        text: "The moment of inertia through the centroid of a triangle parallel to its base line is:",
        options: {
          a: "bh^3 / 12",
          b: "bh^3 / 36",
          c: "bh^3 / 48",
          d: "bh^3 / 3"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 74,
        text: "The area moment of inertia of a semi-circular region having diameter 'd' calculated about its flat diametric axis is:",
        options: {
          a: "πd^4 / 64",
          b: "πd^4 / 128",
          c: "πd^4 / 256",
          d: "πd^4 / 32"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 75,
        text: "The horizontal centroidal moment of inertia of a hollow rectangular section with outer dimensions B, D and inner dimensions b, d is expressed as:",
        options: {
          a: "(BD^3 - bd^3) / 36",
          b: "(BD^3 - bd^3) / 12",
          c: "(BD^3 - bd^3) / 3",
          d: "(B^3D - b^3d) / 12"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 76,
        text: "The plastic shape factor configuration for any standard structural solid rectangular cross-section under flexure is:",
        options: {
          a: "1.00",
          b: "1.15",
          c: "1.50",
          d: "2.00"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 77,
        text: "The exact mathematical formula definition for the squared radius of gyration (k^2) is:",
        options: {
          a: "k^2 = A / I",
          b: "k^2 = I / A",
          c: "k^2 = I * A",
          d: "k^2 = √(I / A)"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 78,
        text: "The Moment of Inertia of a rectangular section of width b and depth d calculated about its bottom base edge line is:",
        options: {
          a: "bd^3 / 12",
          b: "bd^3 / 36",
          c: "bd^3 / 3",
          d: "b^3d / 3"
        },
        answer: "c",
        tag: "Mechanics"
      },
      {
        id: 79,
        text: "The section modulus (Z) configuration of a hollow circular cross-section with external diameter D and internal diameter d is:",
        options: {
          a: "π(D^4 - d^4) / 64D",
          b: "π(D^4 - d^4) / 32D",
          c: "π(D^4 - d^4) / 32",
          d: "π(D^3 - d^3) / 32"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 80,
        text: "For a geometric trapezoid having two parallel sides 'a' and 'b' with total height 'h', the vertical Y-centroidal line distance measured up from the bottom base line 'b' is given by:",
        options: {
          a: "h/3 * [(b + a)/(b + 2a)]",
          b: "h/3 * [(b + 2a)/(b + a)]",
          c: "h/2 * [(a + b)/2]",
          d: "h/3 * [(2b + a)/(b + a)]"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 81,
        text: "In engineering leveling surveys, if the level instrument is precisely located at the exact mid-point between two operational rod stations, which errors are entirely eliminated?",
        options: {
          a: "Parallax and line of sight errors only",
          b: "Curvature (Cc) and Refraction (Cr) errors",
          c: "Instrumental scale variations",
          d: "Wind friction errors"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 82,
        text: "How many baseline operational satellites are configured for global GPS tracking by the United States Department of Defense?",
        options: {
          a: "12 satellites",
          b: "18 satellites",
          c: "24 satellites",
          d: "32 satellites"
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 83,
        text: "If the measured Left Face zenithal angle tracking is 98°30'30\", what will be the true calculated Right Face zenith angle value?",
        options: {
          a: "98°30'30\"",
          b: "181°29'30\"",
          c: "261°29'30\"",
          d: "360°00'00\""
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 84,
        text: "A professional topographic site mapping survey is executed to systematically analyze parameters such as:",
        options: {
          a: "Soil conditions",
          b: "Traffic patterns",
          c: "Engineering features and topography",
          d: "All of the above integrated parameters"
        },
        answer: "d",
        tag: "Surveying"
      },
      {
        id: 85,
        text: "Which of the following functions does NOT determine or fall under the primary capabilities of a Geographic Information System (GIS)?",
        options: {
          a: "Data storage and query management",
          b: "Transferring raw unmapped hardware data strings",
          c: "Spatial overlay mapping",
          d: "Spatial proximity analysis"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 86,
        text: "Find the perpendicular distance of a curve if the structural radius R = 10.26 m and the subtended angle theta = 10°24'.",
        options: {
          a: "0.012 m",
          b: "0.042 m",
          c: "0.105 m",
          d: "0.540 m"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 87,
        text: "The standard arithmetic leveling check expression (Σ B.S. - Σ F.S. = Last R.L. - First R.L.) validates checking calculations in:",
        options: {
          a: "Coordinate traversing checks",
          b: "Arithmetic checking of levelling fields",
          c: "Curvature offset alignments",
          d: "Tachometric coordinate links"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 88,
        text: "Find the value of the radius of curvature (R) if the degree of curve (D) parameter is given as 23.76.",
        options: {
          a: "150.25 m",
          b: "241.16 m",
          c: "310.45 m",
          d: "573.00 m"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 89,
        text: "In a closed loop survey traverse, if the sum of North latitudes exceeds South latitudes (Σ N > Σ S) and the sum of West departures exceeds East departures (Σ W > Σ E), the closing error line lies inside which quadrant?",
        options: {
          a: "NE Quadrant",
          b: "SE Quadrant",
          c: "NW Quadrant",
          d: "SW Quadrant"
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 90,
        text: "Which group of field data parameters is recorded directly when traversing using an electronic Total Station?",
        options: {
          a: "Horizontal/vertical angles, horizontal/vertical distances, station height, and instrument height",
          b: "Soil load capacity, ground chemistry, and structural strain values",
          c: "True celestial magnetic north points only",
          d: "Rain gauge counts and humidity levels"
        },
        answer: "a",
        tag: "Surveying"
      },
      {
        id: 91,
        text: "The fore bearings of lines AB and BC track at 146°30' and 68°30' respectively. What is the interior included angle ABC?",
        options: {
          a: "78°00'",
          b: "102°00'",
          c: "215°00'",
          d: "326°30'"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 92,
        text: "The standard mathematical expression tan delta = Σ D / Σ L is utilized in calculating:",
        options: {
          a: "The slope angle of an embankment",
          b: "The direction of the closing error in a traverse",
          c: "The sag correction factor of tapes",
          d: "The gradient profile of a valley curve"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 93,
        text: "A wide deep river running across a traverse layout acts as an obstacle to:",
        options: {
          a: "Ranging but not for chaining",
          b: "Chaining but not for ranging",
          c: "Both chaining and ranging operations",
          d: "Neither chaining nor ranging layouts"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 94,
        text: "Permanent or temporary reference Bench Marks (BM) are securely fixed on site during which survey stage?",
        options: {
          a: "Reconnaissance survey",
          b: "Map study phase",
          c: "Detailed survey",
          d: "Preliminary alignment tracking"
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 95,
        text: "Contour lines representing entirely different elevation values can merge or unite to form a single line under which unique topography?",
        options: {
          a: "Overhanging cliff",
          b: "Vertical cliff",
          c: "Depressed pond valley",
          d: "Uniform steep hill slope"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 96,
        text: "The magnetic bearing measured for a line is 32° and the local magnetic declination tracks at 10°15' W. What is the true bearing of the line?",
        options: {
          a: "42°15'",
          b: "21°45'",
          c: "32°00'",
          d: "10°15'"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 97,
        text: "A specialized map layout used to evaluate intercepting drainage, surface features, and land topography parameters is a:",
        options: {
          a: "Cadastral map plan",
          b: "Longitudinal profile sheet",
          c: "Contour plan",
          d: "Cross-sectional layout"
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 98,
        text: "What constitutes the first fundamental layout phase before initiating any major engineering survey project?",
        options: {
          a: "Detailed structural triangulation",
          b: "Reconnaissance survey tracking",
          c: "Map study",
          d: "Fixing bench mark concrete blocks"
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 99,
        text: "Very closely and equally spaced contour lines on a localized map sheet indicate the presence of a:",
        options: {
          a: "Flat plain terrain",
          b: "Steep slope",
          c: "Vertical cliff",
          d: "Saddle or pass"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 100,
        text: "A generic dumpy level instrument configuration is most suitable for conducting leveling operations on what type of terrain?",
        options: {
          a: "Mountainous cliff systems",
          b: "Flat terrain",
          c: "Highly broken rocky terrain",
          d: "Deep underground tunnels"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 101,
        text: "The Height of Instrument (HI) method or Collimation method of leveling is preferred over the Rise and Fall method when:",
        options: {
          a: "There are no intermediate sights recorded",
          b: "There are a large number of intermediate stations/points",
          c: "The terrain profile is extremely steep",
          d: "High accuracy checking of back sights is requested"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 102,
        text: "The standard operational equation to evaluate vertical structural elevation offsets in tachometric surveying is given by:",
        options: {
          a: "KS cos^2θ + C cosθ",
          b: "KS sin 2θ / 2 + C sinθ",
          c: "K S + C",
          d: "KS sin^2θ + C"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 103,
        text: "For preparing 1 m3 finished volume of 1:1.5:3 Plain Cement Concrete (PCC), how many standard bags of cement are required?",
        options: {
          a: "4 bags",
          b: "6 bags",
          c: "8 bags",
          d: "11 bags"
        },
        answer: "c",
        tag: "Estimates"
      },
      {
        id: 104,
        text: "What is the standard estimated quantity of binding wire required per 1 quintal (100 kg) of structural steel reinforcement work?",
        options: {
          a: "0.5 kg",
          b: "1.0 kg",
          c: "2.5 kg",
          d: "5.0 kg"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 105,
        text: "In the long wall - short wall method of estimation, the centerline length of a long wall is converted to its total length by adding:",
        options: {
          a: "Half the wall thickness (b/2)",
          b: "One full thickness of the wall (b)",
          c: "Twice the wall thickness (2b)",
          d: "Subtracting the width parameter"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 106,
        text: "The standard expected performance output task of brickwork with mortar in a structural foundation executed per mason per day is:",
        options: {
          a: "0.50 m3",
          b: "1.25 m3",
          c: "2.00 m3",
          d: "5.00 m3"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 107,
        text: "The professional process of analytical estimation to determine the fair price, market worth, or financial value of a property is known as:",
        options: {
          a: "Estimation",
          b: "Valuation",
          c: "Costing",
          d: "Analysis of Rates"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 108,
        text: "Calculate the number of structural cement bags required if the overall design concrete density is 2350 kg/m3, aggregate weight is 3860 kg, water-cement ratio is 0.4, and total volume of concrete requested is 2 m3.",
        options: {
          a: "6 bags",
          b: "10 bags",
          c: "12 bags",
          d: "16 bags"
        },
        answer: "c",
        tag: "Estimates"
      },
      {
        id: 109,
        text: "Which of the following brick masonry items is NOT measured or paid for in volumetric cubic meters (cu.m)?",
        options: {
          a: "Thick foundation wall brickwork",
          b: "Half brick wall",
          c: "Reinforced brick concrete slabs",
          d: "Arch brickwork blocks"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 110,
        text: "If a concrete mix tracks a water-cement ratio (w/c) of 0.8 and the absolute volume of cement consumed is 2 m3, find the exact volume of water needed in liters.",
        options: {
          a: "1000 liters",
          b: "1600 liters",
          c: "2304 liters",
          d: "3000 liters"
        },
        answer: "c",
        tag: "Estimates"
      },
      {
        id: 111,
        text: "The standard expected outturn performance for a mason executing 1:2:4 cement concrete casting per day is:",
        options: {
          a: "1.25 m3",
          b: "2.50 m3",
          c: "5.0 m3",
          d: "7.50 m3"
        },
        answer: "c",
        tag: "Estimates"
      },
      {
        id: 112,
        text: "The structural absolute volume occupied by a single standard commercial bag of cement weighing 50 kg is taken as:",
        options: {
          a: "0.025 m3",
          b: "0.0345 m3",
          c: "0.050 m3",
          d: "0.065 m3"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 113,
        text: "A formal Revised Estimate must be prepared when the total expenditure of the original sanctioned detailed estimate differs or exceeds by more than:",
        options: {
          a: "0.02",
          b: "0.05",
          c: "0.10",
          d: "0.15"
        },
        answer: "b",
        tag: "Estimates"
      },
      {
        id: 114,
        text: "To comply with the structural survey guidelines of a well-conditioned triangle layout, each interior angle should not be less than:",
        options: {
          a: "20°",
          b: "30°",
          c: "60°",
          d: "90°"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 115,
        text: "As per the National Building Code (NBC) of Nepal, the designated standard nominal dimension size of a structural brick is:",
        options: {
          a: "190 mm x 90 mm x 90 mm",
          b: "230 mm x 110 mm x 55 mm",
          c: "240 mm x 115 mm x 57 mm",
          d: "250 mm x 125 mm x 60 mm"
        },
        answer: "c",
        tag: "Bricks"
      },
      {
        id: 116,
        text: "Calculate the Moment of Inertia (IG) about an axis passing through the CG and parallel to the base of an isosceles triangular cross-section having a width of 80 mm and height of 60 mm.",
        options: {
          a: "240 * 10^3 mm4",
          b: "480 * 10^3 mm4",
          c: "540 * 10^3 mm4",
          d: "720 * 10^3 mm4"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 117,
        text: "In civil estimating sheets, the item corresponding to ground surface dressing operations is measured and paid in:",
        options: {
          a: "Cubic meters (cu.m)",
          b: "Linear meters (m)",
          c: "Square meters (sq.m)",
          d: "Quintals (q)"
        },
        answer: "c",
        tag: "Estimates"
      },
      {
        id: 118,
        text: "Find the moment of inertia about its base line for a hollow semi-circle section having an external diameter of 200mm and an internal diameter of 120mm.",
        options: {
          a: "15.4 * 10^6 mm4",
          b: "34.2 * 10^6 mm4",
          c: "55.1 * 10^6 mm4",
          d: "74.8 * 10^6 mm4"
        },
        answer: "b",
        tag: "Mechanics"
      },
      {
        id: 119,
        text: "The exact classification or commercial size grading of structural bricks is specified based on its:",
        options: {
          a: "Color index",
          b: "Weight matrix",
          c: "Dimension",
          d: "Water absorption ratio"
        },
        answer: "c",
        tag: "Bricks"
      },
      {
        id: 120,
        text: "A 50m steel tape that is discovered to be 0.02 m too long was used to record a field distance between points A and B. If the recorded measured distance shows 160.42 m, calculate the true correct distance between A and B.",
        options: {
          a: "160.360 m",
          b: "160.420 m",
          c: "160.484 m",
          d: "161.020 m"
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 121,
        text: "What maximum percentage configuration of magnesia oxide trace impurities is safely allowed in ordinary Portland cement clinkers?",
        options: {
          a: "0.01%",
          b: "0.06%",
          c: "2.0%",
          d: "5.0%"
        },
        answer: "b",
        tag: "Cement"
      },
      {
        id: 122,
        text: "According to Bowditch's rule adjustments for closed traverses, the linear correction applied to the latitude or departure of any traverse side is equal to:",
        options: {
          a: "Total error x (Length of that side / Perimeter of entire traverse)",
          b: "Total error x (Perimeter / Length of side)",
          c: "Half of total error independent of lengths",
          d: "Square root of individual length lines"
        },
        answer: "a",
        tag: "Surveying"
      },
      {
        id: 123,
        text: "Which type of stone masonry layout requires the highest level of masonry skill and specialized labor attention for laying operations?",
        options: {
          a: "Random rubble masonry",
          b: "Coursed ashlar masonry",
          c: "Dry rubble masonry",
          d: "Block-in-course masonry"
        },
        answer: "c",
        tag: "Masonry"
      },
      {
        id: 124,
        text: "The specialized apex cone angle manufactured on a Dutch Cone penetrometer for soil testing is about:",
        options: {
          a: "30°",
          b: "45°",
          c: "60°",
          d: "90°"
        },
        answer: "c",
        tag: "Surveying"
      },
      {
        id: 125,
        text: "The material structural component known as Terracotta is integrated into building works primarily for:",
        options: {
          a: "Fireproofing foundation mats",
          b: "Ornamental work",
          c: "Underpinning structural beams",
          d: "Heavy ballast support"
        },
        answer: "b",
        tag: "Materials"
      },
      {
        id: 126,
        text: "The characteristic structural engineering phenomenon of slow, progressive extension deformation of a material under a constant sustained load during a tensile test is known as:",
        options: {
          a: "Elastic fatigue",
          b: "Plastic yielding",
          c: "Creeping",
          d: "Necking"
        },
        answer: "c",
        tag: "Materials"
      },
      {
        id: 127,
        text: "The mechanical quality characteristics used to identify a premium brick batch include:",
        options: {
          a: "Less water absorption, regular uniform surfaces, and sharp straight edge lines",
          b: "High porous air spaces and irregular burnt dark patches",
          c: "Soft texture configurations",
          d: "Metallic hollow structural ring sounds only"
        },
        answer: "a",
        tag: "Bricks"
      },
      {
        id: 128,
        text: "The vertical centroid distance location of a semi-circle measured upwards from its flat diametric base axis line is given by:",
        options: {
          a: "4r / 3π",
          b: "3r / 8",
          c: "h / 3",
          d: "2D / 3\u03c0"
        },
        answer: "d",
        tag: "Mechanics"
      },
      {
        id: 129,
        text: "The primary purpose of executing proper curing on freshly placed concrete is to:",
        options: {
          a: "Completely freeze the chemical internal core structures",
          b: "Reduce the heat loss of concrete to the atmosphere and reduce the temperature gradient across the cross-section",
          c: "Maximize rapid bleeding actions of excess surface water",
          d: "Soften the top surface layout for immediate plastering"
        },
        answer: "b",
        tag: "Concrete"
      },
      {
        id: 130,
        text: "A structurally isolated eccentric footing layout is subjected to which combination of mechanical loading actions?",
        options: {
          a: "Pure tension forces only",
          b: "Axial loading and bending moment",
          c: "Torsional twisting forces exclusively",
          d: "Concentrated shear edge impacts"
        },
        answer: "b",
        tag: "Construction"
      },
      {
        id: 131,
        text: "The contour interval fixed for map preparation shows what mathematical relationship with the scale of the map?",
        options: {
          a: "Directly proportional",
          b: "Inversely proportional",
          c: "Exponentially proportional",
          d: "Entirely independent of scale parameters"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 132,
        text: "Short distances ranging up to 150 m to 200 m are accurately and typically determined using which specialized surveying tool?",
        options: {
          a: "Passometer",
          b: "Subtense bar",
          c: "Gunter's structural chain links",
          d: "Tacheometer cross-wires"
        },
        answer: "b",
        tag: "Surveying"
      },
      {
        id: 133,
        text: "When a right circular cone solid is cut by an engineering sectional plane passing parallel with its vertical axis of symmetry, the conic section geometry formed is a:",
        options: {
          a: "Circle",
          b: "Ellipse",
          c: "Parabola",
          d: "Hyperbola"
        },
        answer: "d",
        tag: "Surveying"
      }
    ]
  },
  {
    id: "extra2",
    name: "Extra Questions - Soil Mechanics and Foundation Engineering",
    description: "124 Additional practice questions on soil mechanics, permeability, consolidation, compaction, shear strength, lateral earth pressure, and foundation engineering.",
    questions: [
      {
        id: 1,
        text: "If the length of a structural footing is significantly larger than its width, the type of footing used is a:",
        options: {
          a: "Isolated Footing",
          b: "Strip Footing",
          c: "Strap Footing",
          d: "Mat Foundation"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 2,
        text: "The water content of a soil mass is mathematically defined as the ratio of:",
        options: {
          a: "Weight of water to total weight of given soil mass",
          b: "Weight of water to weight of solids of given mass of soil",
          c: "Volume of water to volume of voids",
          d: "Weight of solids to weight of water"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 3,
        text: "According to the standard Indian/Unified Soil Classification System, what does the symbol 'SC' denote?",
        options: {
          a: "Silty Clay",
          b: "Sand with plastic fines (Clayey Sand)",
          c: "Structured Clay",
          d: "Well-graded Sand with Cohesion"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 4,
        text: "The ratio of the volume of water present in a given soil mass to the total volume of its structural voids is termed:",
        options: {
          a: "Porosity",
          b: "Void Ratio",
          c: "Degree of saturation",
          d: "Water Content"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 5,
        text: "The types of soil which have a Plasticity Index (PI) plotting below the standard 'A-line' on the plasticity chart are:",
        options: {
          a: "Inorganic clays of high plasticity",
          b: "Organic, High plasticity and Low plasticity silt/organic soils",
          c: "Well-graded sands with plastic silt",
          d: "Micaceous inorganic gravels"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 6,
        text: "An aggregate containing moisture within its internal pores but having its outermost surface completely dry is known as:",
        options: {
          a: "Oven-dry aggregate",
          b: "Air-dry aggregate",
          c: "Saturated surface dry aggregate",
          d: "Submerged aggregate"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 7,
        text: "The maximum water content at which a reduction in water content does not cause a decrease in the overall volume of a soil mass is known as the:",
        options: {
          a: "Liquid limit",
          b: "Plastic limit",
          c: "Shrinkage limit",
          d: "Sticky limit"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 8,
        text: "The dominant structural soils naturally found within the Kathmandu valley are:",
        options: {
          a: "Laterite and desert sand",
          b: "Black cotton and organic",
          c: "Glacial till and moraines",
          d: "Calcareous loam"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 9,
        text: "What is the benchmark sieve size in millimeters used to distinguish fine-grained aggregates if it retains on it?",
        options: {
          a: "4.75 mm",
          b: "2.00 mm",
          c: "0.075 mm (75 microns)",
          d: "0.002 mm"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 10,
        text: "The Coefficient of Uniformity (Cu) of a soil mass is mathematically defined by the ratio:",
        options: {
          a: "D30 / D10",
          b: "D60 / D10",
          c: "D60 / D30",
          d: "D10 / D60"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 11,
        text: "The value of the Coefficient of Uniformity (Cu) for a well-graded sand must be:",
        options: {
          a: "Less than 4",
          b: "Greater than 4",
          c: "Greater than 6",
          d: "Exactly equal to 1"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 12,
        text: "The Coefficient of Curvature (Cc) for a well-graded soil must lie precisely between:",
        options: {
          a: "0 and 1",
          b: "1 to 3",
          c: "3 and 6",
          d: "6 and 10"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 13,
        text: "Sustained changes in consistency behavior indicate that clayey soil can exist in how many distinct physical states?",
        options: {
          a: "2 states",
          b: "3 states",
          c: "4 states",
          d: "5 states"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 14,
        text: "Find the porosity (n) if the specific gravity (G) is 2.6 and the water content (w) is 45% for a fully saturated condition (S = 1) of the soil.",
        options: {
          a: "0.352",
          b: "0.539",
          c: "1.170",
          d: "0.461"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 15,
        text: "The weight of a pycnometer containing 400 g sand and water full to the top is 2150 g. The weight of the pycnometer full of clean water is 1950 g. If the specific gravity (G) of the soil is 2.5, the water content (wc) evaluated by the formula is:",
        options: {
          a: "0.125",
          b: "0.216",
          c: "0.354",
          d: "0.420"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 16,
        text: "The maximum structural grain size of silt particles is about:",
        options: {
          a: "4.75 mm",
          b: "2.00 mm",
          c: "0.075 mm",
          d: "0.002 mm"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 17,
        text: "Which field testing method is widely used to directly measure the in-situ Dry Density of cohesive soil?",
        options: {
          a: "Pycnometer method",
          b: "Core cutter method",
          c: "Sand replacement method",
          d: "Standard Proctor test"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 18,
        text: "To achieve a void ratio (e) precisely equal to the water content (w) multiplied by the soil specific gravity (G) (e = wG), the mandatory physical condition of the soil must be:",
        options: {
          a: "Completely dry",
          b: "Partially saturated",
          c: "Fully saturated",
          d: "Over-consolidated"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 19,
        text: "According to standard grading classifications, the fine aggregates belonging to Zone I represent:",
        options: {
          a: "Fine sand",
          b: "Medium sand",
          c: "Coarse sand",
          d: "Alluvial silt"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 20,
        text: "If the specific gravity (G) of a soil mass is 1.527, then its specific weight (gamma) in N/m3 is approximately:",
        options: {
          a: "9810 N/m3",
          b: "14,980 N/m3",
          c: "15,270 N/m3",
          d: "19,620 N/m3"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 21,
        text: "The standard laboratory sieve size of 75 micrometers (0.075 mm) is typically used to distinguish:",
        options: {
          a: "Gravel from sand",
          b: "Sand from silt",
          c: "Silt from clay",
          d: "Coarse sand from fine sand"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 22,
        text: "Which laboratory method is widely used to measure the specific gravity of fine-grained soils?",
        options: {
          a: "Core cutter method",
          b: "Density bottle method",
          c: "Sand replacement method",
          d: "Oedometer test"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 23,
        text: "In a standard light compaction Proctor test, the recommended weight of the rammer is:",
        options: {
          a: "2.6 kg",
          b: "4.5 kg",
          c: "4.89 kg",
          d: "5.0 kg"
        },
        answer: "a",
        tag: "Soil Mechanics"
      },
      {
        id: 24,
        text: "The structural formula for computing the seepage discharge (q) per unit length through a graphical flow net is:",
        options: {
          a: "q = k * h * (Nd / Nf)",
          b: "q = k * h * (Nf / Nd)",
          c: "q = k * sqrt(h) * (Nf * Nd)",
          d: "q = k^2 * h * (Nf / Nd)"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 25,
        text: "The parameter 'Relative Compaction' is explicitly defined as the ratio of:",
        options: {
          a: "Field dry density to laboratory maximum dry density (γd / γd,max)",
          b: "Field moisture content to optimum moisture content",
          c: "In-situ void ratio to maximum void ratio",
          d: "Total volume to volume of voids"
        },
        answer: "a",
        tag: "Soil Mechanics"
      },
      {
        id: 26,
        text: "Which specialized compaction roller should be selected for effectively compacting heavy clayey soils?",
        options: {
          a: "Smooth-wheeled roller",
          b: "Pneumatic-tyred roller",
          c: "Sheep's foot roller",
          d: "Vibratory roller"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 27,
        text: "The falling head permeability test is best suited for evaluating the coefficient of permeability of:",
        options: {
          a: "Coarse-grained sands",
          b: "Clean gravels",
          c: "Less permeable fine soils (Clays/Silts)",
          d: "Fissured rock masses"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 28,
        text: "The constant head permeability test can be efficiently used for evaluating:",
        options: {
          a: "High plastic inorganic clays",
          b: "Coarse grained Soil",
          c: "Varved silts",
          d: "Compressed peat layers"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 29,
        text: "A soil layer that has been historical acted upon by a structural stress greater than its present overburden stress is called:",
        options: {
          a: "Normally consolidated",
          b: "Over consolidated",
          c: "Under consolidated",
          d: "Unconsolidated"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 30,
        text: "The Coefficient of Compressibility (av) of a soil layer is defined as the ratio of:",
        options: {
          a: "Stress to strain",
          b: "Change in void ratio to change in effective stress",
          c: "Settling depth to total time logged",
          d: "Minor principal stress to major principal stress"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 31,
        text: "A critical hydraulic gradient (ic) condition is developed within a soil mass when the:",
        options: {
          a: "Seepage force acts downward and effective stress doubles",
          b: "Seepage is upward, flow is upward, and the effective stress reduces to zero",
          c: "Total head reaches atmospheric pressure levels",
          d: "Soil enters an over-consolidated dry state"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 32,
        text: "A formal structural Consolidation Settlement calculation is typically evaluated for:",
        options: {
          a: "Dry cohesionless gravel layers",
          b: "A clay layer with the water table (WT) situated at the ground surface",
          c: "Newly placed clean rock fills",
          d: "Well-graded unsaturated desert sands"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 33,
        text: "The computation of immediate settlement (Si) of a structural foundation is fundamentally based on expressions derived from the:",
        options: {
          a: "Terzaghi consolidation theory",
          b: "Theory of elasticity",
          c: "Rankine plastic equilibrium theory",
          d: "Plastic collapse hinge theory"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 34,
        text: "A clay mass is geotechnically defined as over-consolidated if it:",
        options: {
          a: "Contains zero air voids in its structure",
          b: "Has been subjected to a pressure in excess of its present effective pressure",
          c: "Exhibits a plasticity index below 4%",
          d: "Easily liquefies under vibratory rolling actions"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 35,
        text: "In a graphical flow net diagram, the direction of seepage water flow lines is always:",
        options: {
          a: "Parallel to the equipotential lines",
          b: "Perpendicular to the equipotential lines",
          c: "Inclined at 45° to the drainage face",
          d: "Horizontal independent of boundary lines"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 36,
        text: "Soil compaction is a mechanical densification process characterized by a change in volume due to the:",
        options: {
          a: "Expulsion of pore water voids under static loads",
          b: "Removal of air voids via dynamic manipulation",
          c: "Chemical dissolution of solid grains",
          d: "Elastic expansion of internal water strands"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 37,
        text: "The effectiveness of soil compaction operations depends prominently on:",
        options: {
          a: "Number of roller repetitions",
          b: "Weight of the rolling equipment",
          c: "Operating speed of the roller",
          d: "All of the above configuration factors"
        },
        answer: "d",
        tag: "Soil Mechanics"
      },
      {
        id: 38,
        text: "The factor of safety (FOS) against sliding for an infinite soil slope with steady seepage flowing parallel to the face is approximately:",
        options: {
          a: "Twice that of a completely dry slope",
          b: "Half of the dry slope FOS value",
          c: "Exactly equal to the dry slope FOS value",
          d: "Completely independent of seepage slopes"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 39,
        text: "Upon immediate wetting, the shear strength of cohesive soils will:",
        options: {
          a: "Drastically increase",
          b: "Decrease their shear strength",
          c: "Remain perfectly constant",
          d: "First increase then stabilize"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 40,
        text: "The physical phenomenon known as the bulking of sand is defined as the:",
        options: {
          a: "Reduction in dry volume due to dynamic vibrations",
          b: "Increase in volume of sand due to surface moisture absorption",
          c: "Chemical transformation of silica grains into clay aggregates",
          d: "Settlement logged under static water logging"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 41,
        text: "Geotechnically, the long-term consolidation settlement of a cohesive soil layer occurs due to the:",
        options: {
          a: "Dynamic expulsion of trapped air bubbles",
          b: "Expulsion of water from the pore voids",
          c: "Elastic deformation of the solid sand grains",
          d: "Sustained growth of organic roots"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 42,
        text: "If the water table (WT) shifts or stays entirely above the ground level (GL), the net effective stress (σ') at a deep soil plane:",
        options: {
          a: "Increases linearly with the water height",
          b: "Decreases dramatically",
          c: "Remains constant",
          d: "Fluctuates non-linearly"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 43,
        text: "Which laboratory instrument assembly is utilized to execute standard consolidation testing on soil specimens?",
        options: {
          a: "Direct shear box apparatus",
          b: "Triaxial cell chamber",
          c: "Oedometer",
          d: "Core cutter cylinder"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 44,
        text: "In geotechnical terminology, the parameter Cm evaluated during slope analysis is also termed the:",
        options: {
          a: "Mobilized cohesion",
          b: "Applied shear stress",
          c: "Critical safety gradient",
          d: "Pore pressure parameter"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 45,
        text: "The ratio of structural consolidation settlement recorded at any elapsed time 't' to the ultimate final consolidation settlement is known as the:",
        options: {
          a: "Compression Index",
          b: "Degree of consolidation",
          c: "Coefficient of Compressibility",
          d: "Liquefaction Index"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 46,
        text: "A soil mass exhibits a void ratio (e) of 0.68 and specific gravity (G) of 2.68. The critical hydraulic gradient (ic) required to trigger a quicksand condition is:",
        options: {
          a: "0.50",
          b: "1.00",
          c: "1.50",
          d: "2.00"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 47,
        text: "The deliberate densification of a soil mass achieved via mechanical manipulation or rolling is called:",
        options: {
          a: "Consolidation",
          b: "Compaction",
          c: "Flocculation",
          d: "Stabilisation"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 48,
        text: "An effective stress failure envelope cannot be experimentally obtained by executing which laboratory test?",
        options: {
          a: "Consolidated Drained (CD) triaxial test",
          b: "Consolidated Undrained (CU) triaxial test with pore pressure tracking",
          c: "Unconsolidated Undrained (UU) test",
          d: "Direct shear test on clean dry sands"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 49,
        text: "Mohr's circle is a highly useful graphical representation of two-dimensional plane stress problems showing the:",
        options: {
          a: "Total distribution of volumetric strain values",
          b: "Normal and maximum shear stress states on inclined planes",
          c: "Seepage velocity changes along flow loops",
          d: "Absolute limits of dynamic water tables"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 50,
        text: "The typical height of a cylindrical soil specimen compressed inside a standard laboratory oedometer test apparatus is:",
        options: {
          a: "20 mm",
          b: "50 mm",
          c: "100 mm",
          d: "150 mm"
        },
        answer: "a",
        tag: "Soil Mechanics"
      },
      {
        id: 51,
        text: "Which of the following statements does NOT constitute a limitation of the classic field Plate Load Test?",
        options: {
          a: "It reflects short-term settlement behaviors only",
          b: "It does not evaluate deep subsoil strata performance",
          c: "The test can be performed for any level of water table below the footing",
          d: "Scale effects alter the measured ultimate load in sands"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 52,
        text: "The structural pressure exerted by water fluids contained inside a soil pore matrix onto its surrounding soil grains is termed:",
        options: {
          a: "Effective stress",
          b: "Total overburden pressure",
          c: "Pore pressure",
          d: "Geostatic stress"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 53,
        text: "The internal stresses developed within an undisturbed soil mass solely due to its own structural self-weight are termed:",
        options: {
          a: "Pore water pressures",
          b: "Seepage stresses",
          c: "Geostatic stress",
          d: "Dilatancy stresses"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 54,
        text: "The mathematical expression used to determine the major principal stress (σ1) from a two-dimensional plane stress state (σx, σy, τxy) is:",
        options: {
          a: "(σx + σy)/2 - √[((σx - σy)/2)^2 + τxy^2]",
          b: "(σx + σy)/2 + √[((σx - σy)/2)^2 + τxy^2]",
          c: "(σx - σy)/2 + √(σx * σy)",
          d: "(σx + σy) / τxy"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 55,
        text: "The critical hydraulic gradient (ic) of seepage water flowing through a soil medium is mathematically defined by:",
        options: {
          a: "(G+1) / (1-e)",
          b: "(G-1) / (1+e)",
          c: "(G-e) / (1+G)",
          d: "w * G / e"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 56,
        text: "In a standard Plate Load Test executed on a cohesionless (sandy) soil foundation, the relationship between the ultimate bearing capacity of the prototype footing (qu,f) and the test plate (qu,p) is:",
        options: {
          a: "qu,f = qu,p",
          b: "qu,f = qu,p * (Bf / Bp)",
          c: "qu,f = qu,p * (Bp / Bf)",
          d: "qu,f = qu,p^2"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 57,
        text: "In an Unconfined Compression Test (UCC), the corrected cross-sectional area (Ac) of a specimen at any axial strain (ε) is evaluated using:",
        options: {
          a: "Ac = A0 * (1 - ε)",
          b: "Ac = A0 / (1 - ε)",
          c: "Ac = A0 / (1 + ε)",
          d: "Ac = A0 * √(1 - ε)"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 58,
        text: "Which common fluid at room temperature exhibits the minimum compressibility behavior under civil engineering applications?",
        options: {
          a: "Crude petroleum oil",
          b: "Water",
          c: "Liquid mercury",
          d: "Methylated spirit"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 59,
        text: "The operational formula for evaluating the shear strength (S) of soft clay from a laboratory Vane Shear Test with a vane of diameter D and height H (two-way shearing) is:",
        options: {
          a: "S = T / [ πD^2 * (H/2 + D/6) ]",
          b: "S = T / [ πD^2 * (H/2 + D/12) ]",
          c: "S = T / [ πD^3 * (H/2) ]",
          d: "S = T / [ πD * H ]"
        },
        answer: "a",
        tag: "Soil Mechanics"
      },
      {
        id: 60,
        text: "According to Terzaghi bearing capacity models, the angle subtended by the rigid soil wedge base cone situated directly below a footing with respect to the horizontal plane is:",
        options: {
          a: "φ",
          b: "45° - φ/2",
          c: "45° + φ/2",
          d: "90° - φ"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 61,
        text: "In a standard graphical plot of Mohr's circle, the horizontal (X-axis) and vertical (Y-axis) precisely represent:",
        options: {
          a: "Shear stress and pore pressure respectively",
          b: "Normal stress and shear stress respectively",
          c: "Volumetric strain and axial stress lines",
          d: "Total head and hydraulic gradient offsets"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 62,
        text: "The undrained shear strength of a highly plastic saturated clay mass depends entirely upon its:",
        options: {
          a: "Angle of internal friction (φ)",
          b: "Cohesion (c)",
          c: "Specific gravity of sand grains",
          d: "Coefficient of curvature"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 63,
        text: "The total stress parameter resisting mechanical failure in a pore water matrix during a quick undrained test is termed:",
        options: {
          a: "Effective stress",
          b: "Neutral stress / Pore water pressure",
          c: "Geostatic overburden pressure",
          d: "Dilatancy force"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 64,
        text: "For evaluating the laboratory shear strength behavior of an undisturbed highly saturated clay specimen, the recommended test is the:",
        options: {
          a: "Direct shear test with high drainage drainage",
          b: "Unconfined compression test",
          c: "Constant head permeameter shear track",
          d: "Vane rotation test on dry sand grains"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 65,
        text: "An inclined structural plane passing at an angle θ within a physical soil element is represented on a standard 2D Mohr's circle plot by a radius vector turned through an angle equal to:",
        options: {
          a: "θ",
          b: "2θ",
          c: "θ / 2",
          d: "90° + θ"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 66,
        text: "The standard equation to calculate the Area Ratio (Ar) of a soil sampler tube with cutting edge outer diameter D2 and inner diameter D1 is:",
        options: {
          a: "[(D2^2 - D1^2) / D2^2] * 100",
          b: "[(D2^2 - D1^2) / D1^2] * 100",
          c: "[(D2 - D1) / D1] * 100",
          d: "[D1^2 / D2^2] * 100"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 67,
        text: "The standard Dilatancy Correction for Standard Penetration Test (SPT) N-values is explicitly applied to:",
        options: {
          a: "Dry coarse gravel deposits",
          b: "Fine silty saturated sand strata",
          c: "Over-consolidated plastic clays",
          d: "Highly weathered structural rocks"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 68,
        text: "Which of the following assumptions is explicitly incorporated within Bishop's simplified method of slope stability analysis?",
        options: {
          a: "Slip surfaces are entirely planar wedges",
          b: "Moment equilibrium is considered around the center of the circular arc",
          c: "Inter-slice forces are purely horizontal everywhere",
          d: "Soil behaves as a perfectly elastic crystalline solid"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 69,
        text: "Which of the following corrections is NOT applicable to the raw Standard Penetration Test (SPT) blow count?",
        options: {
          a: "Overburden pressure correction",
          b: "Dilatancy correction",
          c: "Meniscus correction",
          d: "Borehole diameter/rod length corrections"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 70,
        text: "The classic linear Coulomb's equation for defining the shear strength (s) of a soil mass is given by:",
        options: {
          a: "s = c' + σ' tanφ'",
          b: "c' = s - σ' tanφ'",
          c: "s = σ' + c' tanφ'",
          d: "s = c' / (σ' tanφ')"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 71,
        text: "Which compaction roller equipment must be selected to achieve effective structural compaction of coarse-grained soils?",
        options: {
          a: "Sheep's foot roller",
          b: "Tamping rammer blocks",
          c: "Vibratory roller",
          d: "Pneumatic static tire rollers"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 72,
        text: "Which of the following changes does NOT contribute to enhancing the structural stability of an earth slope?",
        options: {
          a: "Providing a drainage blanket to lower pore pressures",
          b: "Flattening the overall slope angle",
          c: "An increased slope angle",
          d: "Installing structural retaining berms at the toe"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 73,
        text: "When complete structural drainage is permitted throughout the entire execution of a triaxial test, the test type is known as a:",
        options: {
          a: "Unconsolidated Undrained (UU) test",
          b: "Consolidated Undrained (CU) test",
          c: "Consolidated Drained (CD) test",
          d: "Vane shear flow layout"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 74,
        text: "The absolute radius of a plotted Mohr's circle corresponds directly to the:",
        options: {
          a: "Average normal stress value",
          b: "Minor principal stress value",
          c: "Maximum shear stress value",
          d: "Absolute pore water pressure value"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 75,
        text: "During field structural compaction of embankment layers, each loose lift soil thickness should ideally be restricted to:",
        options: {
          a: "50 mm",
          b: "150 mm",
          c: "400 mm",
          d: "600 mm"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 76,
        text: "The best suited chemical stabilization admixture for treating and improving expansive Black Cotton soils is:",
        options: {
          a: "Sodium chloride powder",
          b: "Hydrated lime",
          c: "Bituminous emulsion",
          d: "Gypsum slurry"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 77,
        text: "Based on the fundamental plastic equilibrium assumptions of Rankine's earth pressure theory, the soil mass is assumed to be:",
        options: {
          a: "Non-homogeneous and anisotropic",
          b: "Homogeneous, isotropic and semi-infinite",
          c: "Cohesive and highly stratified",
          d: "Entirely elastic with fixed boundary friction"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 78,
        text: "The mandatory depth of structural soil exploration required for a project is independent of which parameter?",
        options: {
          a: "Width of the footing",
          b: "Size and load of the superstructure",
          c: "Size of structure",
          d: "Subsoil profile configurations"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 79,
        text: "According to active earth pressure models in cohesive soils, the lateral active pressure (pa) at depth z is evaluated by:",
        options: {
          a: "Ka * σz + 2c * √(Ka)",
          b: "Ka * σz - 2c * √(Ka)",
          c: "Kp * σz - 2c * √(Kp)",
          d: "σz - 2c"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 80,
        text: "The graphical method known as the Culmann Graph is explicitly applied within the:",
        options: {
          a: "Terzaghi bearing capacity theory",
          b: "Coulomb's wedge theory for lateral earth pressure",
          c: "Bishop slope slice stability mapping",
          d: "Boussinesq vertical bulb stress distribution"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 81,
        text: "The structural Active Earth Pressure condition of a soil mass is defined as the lateral pressure exerted when the retaining wall:",
        options: {
          a: "Moves forcefully toward the soil backfill mass",
          b: "Tends to move away from the back fill",
          c: "Remains completely rigid with zero movement deflection",
          d: "Rotates about its top crown line exclusively"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 82,
        text: "The formula for computing Rankine's Active Earth Pressure Coefficient (Ka) for a cohesionless soil backfill with an internal friction angle φ is:",
        options: {
          a: "(1 + sinφ) / (1 - sinφ)",
          b: "(1 - sinφ) / (1 + sinφ)",
          c: "tan^2(45° + φ/2)",
          d: "cosφ / (1 + sinφ)"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 83,
        text: "The maximum shear stress (τmax) captured across a plotted Mohr's circle is equal to:",
        options: {
          a: "(\sigma1 + \sigma3) / 2",
          b: "(\sigma1 - \sigma3) / 2",
          c: "√(\sigma1 * \sigma3)",
          d: "\sigma1 - \sigma3"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 84,
        text: "A deep compensated foundation is termed \"fully compensated\" when the total weight of the excavated soil mass is precisely equal to:",
        options: {
          a: "50% of the superstructure weight",
          b: "100% of building weight",
          c: "The safe bearing capacity multiplied by area",
          d: "The total active horizontal earth pressure forces"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 85,
        text: "Which condition regarding the back face of a structural retaining wall is explicitly assumed by Rankine's theory?",
        options: {
          a: "Rough surface with significant friction angle",
          b: "Smooth vertical surface",
          c: "Stepped geometry with drainage channels",
          d: "Curvilinear structural profiles"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 86,
        text: "If Poisson's ratio (μ) of a soil mass is 0.4, its Coefficient of Earth Pressure at Rest (K0) evaluated using elastic theory (μ / (1 - μ)) is:",
        options: {
          a: "0.40",
          b: "0.67",
          c: "1.00",
          d: "1.50"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 87,
        text: "The formula for computing Rankine's Passive Earth Pressure Coefficient (Kp) for a soil backfill with an internal friction angle φ is:",
        options: {
          a: "(1 - sinφ) / (1 + sinφ)",
          b: "(1 + sinφ) / (1 - sinφ)",
          c: "tan^2(45° - φ/2)",
          d: "1 / Ka^2"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 88,
        text: "The parameter φ present in Coulomb's classic shear strength expression (S = c + σ tanφ) denotes the:",
        options: {
          a: "Angle of structural wall friction interface",
          b: "Angle of internal friction of the soil",
          c: "Slope angle of the backfill terrain",
          d: "Angle of inclination of the failure plane"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 89,
        text: "Which of the following foundation layouts belongs explicitly to the classification of a shallow foundation?",
        options: {
          a: "Concrete pile groups",
          b: "Deep timber grillage piles",
          c: "Mat / Raft foundation",
          d: "Open drilled caisson shaft wells"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 90,
        text: "A structural Pile Foundation configuration falls under the classification of a:",
        options: {
          a: "Shallow foundation",
          b: "Deep foundation",
          c: "Semi-shallow footing",
          d: "Spread retaining pad"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 91,
        text: "To securely support large structural superstructure loads, deep foundation piles are commonly constructed and integrated:",
        options: {
          a: "As single completely isolated units everywhere",
          b: "Symmetrically in a closely linked group layout",
          c: "Horizontal along the surface layer boundary",
          d: "Without any reinforcing concrete cap blocks"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 92,
        text: "The gross plane layout area of a shallow spread footing depends fundamentally upon the:",
        options: {
          a: "Total load transferred from the superstructure",
          b: "Ultimate safe bearing capacity of the soil strata",
          c: "Type and classification of the structural soil",
          d: "All of the above integrated parameters"
        },
        answer: "d",
        tag: "Foundations"
      },
      {
        id: 93,
        text: "A comprehensive Mat / Raft foundation layout is structurally preferred when:",
        options: {
          a: "The columns carry lightweight isolated loads",
          b: "Total area of individual isolated footings covers more than 50% of the plot area",
          c: "The subsoil profile is highly dense gravel rock",
          d: "The ground water table resides at infinite depths"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 94,
        text: "Which of the following layouts is NOT categorized among the common structural configurations of a Mat foundation?",
        options: {
          a: "Flat slab of uniform thickness",
          b: "Beam and slab raft system",
          c: "Double flat plate thickened layout",
          d: "Box structure raft foundation"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 95,
        text: "If a foundation pad systematically accommodates 2 or more column load stations along its length, this foundation type is called a:",
        options: {
          a: "Isolated spread footing",
          b: "Combined footing",
          c: "Stepped isolated pad",
          d: "Floating caisson cell"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 96,
        text: "The moisture water held tightly inside soil pore channels via surface tension forces that cannot be drained out under gravity is termed:",
        options: {
          a: "Gravitational water",
          b: "Pellicular water",
          c: "Hygroscopic core film",
          d: "Free flow seepage water"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 97,
        text: "A unified combined footing layout is preferred over separate isolated footings if two nearby columns:",
        options: {
          a: "Are spaced at infinite structural intervals",
          b: "Have their isolated footings about to overlap each other",
          c: "Transfer purely horizontal shear impacts",
          d: "Rest on solid deep granite bedrocks"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 98,
        text: "The standard empirical minimum depth of a structural foundation layer laid inside clayey soils is:",
        options: {
          a: "0.2 m",
          b: "0.5 m",
          c: "0.9 m",
          d: "2.5 m"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 99,
        text: "The structural shape preferred for a combined footing layout when two nearby columns carry exactly equal loads is a:",
        options: {
          a: "Trapezoid",
          b: "Rectangle",
          c: "Circle",
          d: "Cross-shaped strip"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 100,
        text: "Which foundation type is prominently executed as an open foundation layout for massive bridge piers?",
        options: {
          a: "Spread steel grillage footings",
          b: "Open caisson / Well foundation",
          c: "Isolated wooden pads",
          d: "Dynamic driven micro piles"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 101,
        text: "The standard design depth parameter of a structural bridge foundation is explicitly governed by the:",
        options: {
          a: "Absolute scour depth",
          b: "Local frost penetration depth",
          c: "Characteristics of top soil layers",
          d: "All of the above integrated factors"
        },
        answer: "d",
        tag: "Foundations"
      },
      {
        id: 102,
        text: "According to standard IS code guidelines, the maximum permissible differential or total settlement for an isolated foundation resting on sand strata is restricted to:",
        options: {
          a: "25 mm",
          b: "40 mm",
          c: "65 mm",
          d: "100 mm"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 103,
        text: "The minimum standard absolute embedment depth of a structural footing below the natural ground level up to its base is:",
        options: {
          a: "150 mm",
          b: "300 mm",
          c: "500 mm",
          d: "1000 mm"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 104,
        text: "If a massive rigid raft foundation rests on soft compressible clayey soil, the contact pressure distribution profile tends to be:",
        options: {
          a: "Peak parabolic at the edges and zero at center",
          b: "Uniform across the entire base layout",
          c: "Zero at boundary faces",
          d: "Highly concentrated below the thickest column only"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 105,
        text: "The standard technical minimum number of piers required to securely support a structural bridge column layout is:",
        options: {
          a: "1 pier",
          b: "2 piers",
          c: "3 piers",
          d: "5 piers"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 106,
        text: "For a purely cohesive clay soil mass (φ = 0) under Terzaghi capacity assumptions, the ultimate bearing capacity expression (qf) simplifies to:",
        options: {
          a: "qf = 1.3 * c * Nc",
          b: "qf = 5.7 * c + σ_bar",
          c: "qf = c * Nc + γ * D",
          d: "qf = 5.14 * c"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 107,
        text: "The standard safe structural bearing capacity value assigned to weathered soft rock masses is about:",
        options: {
          a: "100 KN/m^2",
          b: "250 KN/m^2",
          c: "440 KN/m^2",
          d: "1000 KN/m^2"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 108,
        text: "The complete Terzaghi Ultimate Bearing Capacity formula for a shallow square footing is expressed by:",
        options: {
          a: "qu = c * Nc + γ * D * Nq + 0.5 * γ * B * Nγ",
          b: "qu = 1.3 * c * Nc + γ * D * Nq + 0.4 * γ * B * Nγ",
          c: "qu = 1.3 * c * Nc + γ * D * Nq + 0.3 * γ * B * Nγ",
          d: "qu = c * Nc + 1.2 * γ * D * Nq"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 109,
        text: "The bearing capacity translation formula for a foundation laid inside cohesionless soil evaluated from a field plate load test is given by:",
        options: {
          a: "qu,f = qu,p",
          b: "qu,f = qu,p * (Bf / Bp)",
          c: "qu,f = qu,p * (Bp / Bf)",
          d: "qu,f = qu,p^2 * (Bf)"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 110,
        text: "The ultimate structural bearing capacity (qu) of a foundation block depends fundamentally upon:",
        options: {
          a: "Grain size configuration of the soil grains",
          b: "Total width and size of the footing layout",
          c: "Geometric shape of the concrete footing pad",
          d: "All of the above integrated parameters"
        },
        answer: "d",
        tag: "Foundations"
      },
      {
        id: 111,
        text: "The complete Terzaghi Ultimate Bearing Capacity formula for a shallow circular footing pad layout is:",
        options: {
          a: "qu = 1.3 * c * Nc + γ * D * Nq + 0.3 * γ * B * Nγ",
          b: "qu = 1.3 * c * Nc + γ * D * Nq + 0.4 * γ * R * Nγ",
          c: "qu = c * Nc + γ * D * Nq",
          d: "qu = 1.2 * c * Nc + 0.3 * γ * B * Nγ"
        },
        answer: "a",
        tag: "Foundations"
      },
      {
        id: 112,
        text: "The dynamic cone penetration depth computation factor up to a resistance rating of 3 is given by the expression:",
        options: {
          a: "B * Nc / 1.2",
          b: "B * Nc / 3.5",
          c: "Nc / (3.5 * B)",
          d: "2.5 * B * Nc"
        },
        answer: "b",
        tag: "Foundations"
      },
      {
        id: 113,
        text: "In structural design foundations, the allowable bearing pressure (qa) must satisfy which absolute criteria?",
        options: {
          a: "Net safe bearing capacity against shear failure only",
          b: "Net safe settlement pressure limits exclusively",
          c: "Both net safe bearing capacity and net safe settlement pressure of the soil",
          d: "The unconfined compressive strength limits only"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 114,
        text: "In a standard California Bearing Ratio (CBR) laboratory test, the diameter size of the cylindrical steel plunger is:",
        options: {
          a: "25 mm",
          b: "50 mm",
          c: "75 mm",
          d: "100 mm"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 115,
        text: "In a two-dimensional stressed soil mass element, the angle separating a principal plane and the plane of maximum shear stress is always:",
        options: {
          a: "30° and 60°",
          b: "45° and 135°",
          c: "90° everywhere",
          d: "0° and 180°"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 116,
        text: "The complete Terzaghi Ultimate Bearing Capacity formula for a rectangular footing pad of width B and length L is expressed by:",
        options: {
          a: "qu = [1 + 0.3(B/L)] * c * Nc + γ * D * Nq + 0.5 * [1 - 0.2(B/L)] * B * γ * Nγ",
          b: "qu = c * Nc * (B/L) + γ * D * Nq",
          c: "qu = 1.3 * c * Nc + 0.4 * γ * B * Nγ",
          d: "qu = [1 - 0.3(B/L)] * c * Nc + γ * D * Nq"
        },
        answer: "a",
        tag: "Foundations"
      },
      {
        id: 117,
        text: "In Taylor's Stability Number expression (Sn = Cm / (γ * H)), the parameter term Cm explicitly denotes the:",
        options: {
          a: "Total theoretical cohesion coefficient",
          b: "Mobilized Cohesion force",
          c: "Maximum critical safety height",
          d: "Submerged unit weight parameter"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 118,
        text: "The aggregate bulk density measured inside laboratory quality control checks does NOT depend upon which factor?",
        options: {
          a: "Degree of aggregate compaction",
          b: "Moisture content present in pores",
          c: "Size and shape of the container",
          d: "Particle shape and surface grading texture"
        },
        answer: "c",
        tag: "Soil Mechanics"
      },
      {
        id: 119,
        text: "Based on the Macro-Seismic Intensity (MIP) mapping method, the territory of Nepal is divided into how many distinct zones?",
        options: {
          a: "3 zones",
          b: "5 zones",
          c: "7 zones",
          d: "14 zones"
        },
        answer: "c",
        tag: "Foundations"
      },
      {
        id: 120,
        text: "The pore pressure developed within a cylindrical soil specimen during a laboratory triaxial test can be directly measured using:",
        options: {
          a: "Standard Casagrande spoon cup",
          b: "Bishop's apparatus assembly",
          c: "Core cutter handle gauge",
          d: "Standard Oedometer dial rings"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 121,
        text: "For the same soil mass, executing a Modified Proctor test instead of a Standard Proctor test results in:",
        options: {
          a: "A lower maximum dry density and higher OMC",
          b: "An increase in maximum dry density and a decrease in OMC",
          c: "No change in dry density values",
          d: "An identical dry density but double the OMC volume"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 122,
        text: "Geotechnically, the Relative Compaction achieved during field rolling operations depends fundamentally upon the:",
        options: {
          a: "Absolute depth of the global water table",
          b: "Type and classification of the soil",
          c: "Chemical nitrogen content of the pore water",
          d: "Elevation above mean sea level"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 123,
        text: "Darcy's Law (v = k * i) for fluid flow through porous media remains valid exclusively for:",
        options: {
          a: "Highly turbulent flows inside large open rock fissures",
          b: "Fully saturated soil and steady laminar flow conditions",
          c: "Unsaturated dry sand dunes under windy conditions",
          d: "Pure plastic clay compression loops"
        },
        answer: "b",
        tag: "Soil Mechanics"
      },
      {
        id: 124,
        text: "Which of the following phases does NOT constitute a formal stage of standard site Soil Exploration?",
        options: {
          a: "Preliminary site exploration layout",
          b: "Detailed site investigation tracking",
          c: "Exploration during construction operations",
          d: "Preparation of final borehole logs"
        },
        answer: "c",
        tag: "Soil Mechanics"
      }
    ]
  },
  {
    id: "extra3",
    name: "Extra Questions - Basic Water Resources Engineering",
    description: "84 Additional practice questions on water resources, hydraulics, fluid mechanics, open channel flow, and hydrology.",
    questions: [
      {
        id: 1,
        text: "The capillary rise of a liquid inside a thin laboratory tube depends fundamentally upon the:",
        options: {
          a: "Length of the tube exposed to air",
          b: "Inner radius of the tube",
          c: "Material thickness of the outer casing",
          d: "Total volume of the reservoir basin"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 2,
        text: "Two thin capillary tubes P and Q are dipped vertically in water. If the height of the water level captured in capillary P is 2/3 of the height tracked in capillary Q, what is the exact ratio of their diameters?",
        options: {
          a: "2:3",
          b: "3:2",
          c: "4:9",
          d: "9:4"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 3,
        text: "The fundamental physical property responsible for triggering the rise or fall of a liquid inside a capillary tube is:",
        options: {
          a: "Viscosity",
          b: "Vapor pressure",
          c: "Surface tension",
          d: "Cavitation index"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 4,
        text: "For typical liquid fluids, how does the absolute capillary rise (or fall) behave with a sudden rise in temperature?",
        options: {
          a: "It increases linearly",
          b: "It remains perfectly constant",
          c: "Decrease",
          d: "It fluctuates exponentially"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 5,
        text: "The precise capillary rise behavior of water inside porous channels is directly governed by which balancing force?",
        options: {
          a: "The force responsible for molecular attraction",
          b: "Dynamic shear resistance forces",
          c: "Compressibility modulus parameters",
          d: "Kinematic drag coefficients"
        },
        answer: "a",
        tag: "Water Resources"
      },
      {
        id: 6,
        text: "Match the fundamental fluid properties listed in Group 1 with their corresponding physical engineering phenomenon in Group 2:\nGroup 1: (A) Capillarity, (B) Vapor pressure, (C) Viscosity, (D) Specific gravity\nGroup 2: (a) Cavitation, (b) Density of water, (c) Shear forces, (d) Surface tension",
        options: {
          a: "A-a, B-b, C-c, D-d",
          b: "A-d, B-a, C-c, D-b",
          c: "A-c, B-d, C-a, D-b",
          d: "A-b, B-c, C-d, D-a"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 7,
        text: "The absolute maximum density of pure water is reached under standard atmospheric pressure at what temperature?",
        options: {
          a: "0 Degree Celsius",
          b: "4 Degree Celsius",
          c: "25 Degree Celsius",
          d: "100 Degree Celsius"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 8,
        text: "The Bulk Modulus (K) of elasticity of a structural liquid fluid systematically increases with an increase in:",
        options: {
          a: "Temperature",
          b: "Pressure",
          c: "Fluid volume",
          d: "Container surface roughness"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 9,
        text: "A non-Newtonian fluid is geotechnically and hydraulically defined as one which:",
        options: {
          a: "Exhibits a perfectly constant dynamic viscosity parameter",
          b: "Doesn't follow Newton's law of viscosity",
          c: "Only flows under peak turbulent velocities",
          d: "Possesses zero mass density properties"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 10,
        text: "Which of the following household items serves as a practical example of a non-Newtonian fluid?",
        options: {
          a: "Pure water",
          b: "Kerosene oil",
          c: "Peanut butter",
          d: "Distilled spirit"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 11,
        text: "In fluid mechanics, the parameter 'Specific Volume' is explicitly defined as the:",
        options: {
          a: "Product of mass and total volume",
          b: "Reciprocal of density",
          c: "Ratio of weight to surface area",
          d: "Total absolute dynamic viscosity coefficient"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 12,
        text: "The fundamental dynamic property known as fluid viscosity is defined as the:",
        options: {
          a: "Resistance to flow of fluid",
          b: "Ratio of structural volume to total mass",
          c: "Surface pressure expansion factor",
          d: "Buoyancy lift capacity"
        },
        answer: "a",
        tag: "Water Resources"
      },
      {
        id: 13,
        text: "The correct dimensional formula configuration for Kinematic Viscosity (ν) in the M-L-T notation system is:",
        options: {
          a: "M1 L2 T-1",
          b: "M0 L2 T-1",
          c: "M0 L1 T-2",
          d: "M1 L-1 T-1"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 14,
        text: "With a generic increase in temperature, the absolute dynamic viscosity of common liquid fluids will:",
        options: {
          a: "Increase rapidly",
          b: "Decrease with increase in temperature",
          c: "Remain perfectly constant",
          d: "Fluctuates in cycles"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 15,
        text: "The dimensional formula configuration for a standard spatial Velocity Gradient (dv/dy) is:",
        options: {
          a: "M0 L1 T-1",
          b: "M0 L0 T-1",
          c: "M1 L0 T-2",
          d: "M0 L2 T0"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 16,
        text: "The structural radius of curvature assigned to the alignment arc of a surveyor's bubble tube is generally kept at:",
        options: {
          a: "1 m",
          b: "10 m",
          c: "100 m",
          d: "500 m"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 17,
        text: "In meteorological engineering, if the ambient dew point temperature stays strictly above 0°C, what will form on the ground?",
        options: {
          a: "Frost crystals",
          b: "Dew will form",
          c: "Glaze ice",
          d: "Hail stones"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 18,
        text: "A true fluid structural element will undergo continuous deformation when subjected to the action of:",
        options: {
          a: "Pure uniform hydrostatic pressure",
          b: "Shearing stress",
          c: "Volumetric tensile forces",
          d: "Core thermal expansion"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 19,
        text: "If the critical shear stress of an alluvial channel bed is denoted by τc, then the average value of shear stress required to safely move grain particles situated on the channel bank is taken as:",
        options: {
          a: "0.50 τc",
          b: "0.75 τc",
          c: "1.00 τc",
          d: "1.50 τc"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 20,
        text: "The perfectly spherical shape assumed by free-falling water drops is explicitly due to which fluid property?",
        options: {
          a: "Viscosity",
          b: "Surface tension",
          c: "Compressibility",
          d: "Vapor pressure"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 21,
        text: "The mathematical value of the excess pressure developed inside a thin soap bubble having a structural radius R and surface tension T is:",
        options: {
          a: "2T / R",
          b: "4T / R",
          c: "8T / R",
          d: "T / 2R"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 22,
        text: "The fluid mechanics parameter known as 'Buoyant Force' is defined as the:",
        options: {
          a: "Shear resistance acting along container boundary walls",
          b: "Resultant force on a body due to the fluid surrounding it",
          c: "Dynamic impact force of a striking water jet",
          d: "Total absolute atmospheric pressure loading"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 23,
        text: "The true mechanical relationship between Absolute Pressure (P_abs), Atmospheric Pressure (P_atm), and Gauge Pressure (P_gauge) is:",
        options: {
          a: "P_abs = P_gauge ± P_atm",
          b: "P_abs = P_gauge * P_atm",
          c: "P_gauge = P_abs + P_atm",
          d: "P_atm = P_gauge - P_abs"
        },
        answer: "a",
        tag: "Water Resources"
      },
      {
        id: 24,
        text: "The static fluid pressure at a specific point will NOT be identical in all spatial directions (violating Pascal's Law) when the fluid is:",
        options: {
          a: "Non-viscous and stationary",
          b: "Viscous and moving",
          c: "Incompressible and at perfect rest",
          d: "Saturated without shear gradients"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 25,
        text: "What is the total hydrostatic pressure force exerted on a horizontal hemispherical part section if the uniform static pressure acting across the circular base area is P0?",
        options: {
          a: "1/2 π r^2 P0",
          b: "π r^2 P0",
          c: "2 π r^2 P0",
          d: "4 π r^2 P0"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 26,
        text: "For a static fluid tracking zero internal movement gradients, the absolute piezometric head:",
        options: {
          a: "Increases linearly with depth",
          b: "Decreases systematically",
          c: "Remains constant at all points in the liquid",
          d: "Fluctuates non-linearly everywhere"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 27,
        text: "Evaluate the absolute hydrostatic fluid pressure in Pascals at a deep point situated exactly 1m below a clean static water surface.",
        options: {
          a: "1000 Pascal",
          b: "4500 Pascal",
          c: "9810 Pascal",
          d: "15270 Pascal"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 28,
        text: "The correct structural equation used to determine the metacentric height (GM) of a floating body is:",
        options: {
          a: "GM = I/V + BG",
          b: "GM = I/V - BG",
          c: "GM = V/I - BG",
          d: "GM = I * V - BG"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 29,
        text: "A floating structural body attains a perfectly stable equilibrium state if its Metacenter (M) resides:",
        options: {
          a: "Below the center of buoyancy (B)",
          b: "Symmetrically below the Center of Gravity (G)",
          c: "Above the centroid",
          d: "Exactly at the bottom base plane"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 30,
        text: "Which classical mechanical gauge instrument is selected to measure structural fluid Gauge Pressure?",
        options: {
          a: "Piezometer column only",
          b: "Bourdon gauge",
          c: "Anemometer wheel",
          d: "Venturi throat ring"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 31,
        text: "In a standard Bernoulli's energy equation layout, what does each distinct mathematical term physically represent?",
        options: {
          a: "Total power consumed per unit area",
          b: "Total energy per unit weight of fluid",
          c: "Volumetric flow rate indexes",
          d: "Dynamic momentum forces"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 32,
        text: "The fundamental fluid incompressibility condition parameter utilized within standard Navier-Stokes equations is:",
        options: {
          a: "∇ × u = 0",
          b: "∇ · u = 0",
          c: "∂u/∂t = 0",
          d: "∇^2 u = g"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 33,
        text: "The structural Momentum Principle is NOT applicable for evaluating or designing which hydraulic flow instrument?",
        options: {
          a: "Hydraulic ram pump",
          b: "Jet impact plates",
          c: "Venturi meter",
          d: "Pipe bend expansions"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 34,
        text: "In a standard hydraulic profile, the absolute spatial difference between the Total Energy Line (TEL) and the Hydraulic Grade Line (HGL) represents the:",
        options: {
          a: "Pressure head",
          b: "Datum head",
          c: "Velocity head",
          d: "Frictional head loss"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 35,
        text: "The technical term designating the continuous sheet of water flowing freely over a structural weir or notch crest is the:",
        options: {
          a: "Vein",
          b: "Nappe",
          c: "Glacis",
          d: "Apron"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 36,
        text: "The general equation of continuity for a compressible fluid undergoing steady hydraulic flow conditions is expressed as:",
        options: {
          a: "A1 V1 = A2 V2",
          b: "ρ1 A1 V1 = ρ2 A2 V2",
          c: "ρ1 V1 = ρ2 V2",
          d: "A1 ρ1 = A2 ρ2"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 37,
        text: "If an incompressible fluid flows through a pipe where the cross-sectional area changes from A1 to A2 and the velocity tracks from V1 to V2, the expression A1 × V1 = A2 × V2 is termed the:",
        options: {
          a: "Bernoulli equation",
          b: "Equation of Continuity",
          c: "Euler equation",
          d: "Navier equation"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 38,
        text: "Which structural fluid flow condition invalidates using the classic Bernoulli energy equation?",
        options: {
          a: "Steady flow loops",
          b: "Irrotational flow layouts",
          c: "Viscous flow",
          d: "Incompressible flow fields"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 39,
        text: "The structural Coefficient of Friction (f) derived for a perfectly laminar flow condition inside a circular pipe is given by:",
        options: {
          a: "64 / Re",
          b: "16 / Re",
          c: "0.079 / Re^0.25",
          d: "8 / Re"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 40,
        text: "The complete dimensional formula configuration for the Manning rugosity coefficient (n) inside the [M-L-T] system is:",
        options: {
          a: "M0 L1 T-1",
          b: "M1 L-0.33 T1",
          c: "M0 L-0.33 T1",
          d: "M0 L2 T-2"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 41,
        text: "When three structural pipes of varying diameters are connected in a continuous series line, which parameter remains identical through each pipe section?",
        options: {
          a: "Head loss",
          b: "Flow velocity",
          c: "Discharge",
          d: "Friction factor"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 42,
        text: "When multiple pipeline loops made of identical materials are configured in a parallel system, the total head loss across the setup is:",
        options: {
          a: "The sum total of individual head losses",
          b: "Same as in each individual pipe branch",
          c: "Product of separate friction factors",
          d: "Equal to zero everywhere"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 43,
        text: "When a high-velocity water jet strikes a vertical stationary flat plate, the water sheet after striking:",
        options: {
          a: "Bounces back completely along the same path",
          b: "Moves along the plate surface",
          c: "Compresses into a solid fluid block",
          d: "Rotates in circular vortices"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 44,
        text: "The absolute hydrodynamic force exerted by a steady water jet of area 'a' and velocity 'V' striking a stationary vertical plate in the direction of the jet is:",
        options: {
          a: "1/2 ρ a V^2",
          b: "ρ a V^2",
          c: "ρ a V",
          d: "2 ρ a V^2"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 45,
        text: "The core requirement for achieving Kinematic Similarity between a scaled laboratory hydraulic model and its prototype structure is:",
        options: {
          a: "Similarity of total geometric linear dimensions",
          b: "Similarity of streamline velocity and pattern layouts",
          c: "Identity of absolute dynamic force vectors",
          d: "Uniformity of surface roughness textures"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 46,
        text: "Inside a standard operational Venturi meter setup, which structural zone records the absolute highest flow velocity?",
        options: {
          a: "Converging entrance cone",
          b: "Throat section",
          c: "Diverging exit outlet",
          d: "Upstream approach pipe"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 47,
        text: "According to turbulent boundary layer models, the Prandtl mixing length (ℓ) parameter drops to zero at:",
        options: {
          a: "The exact centerline of the pipe profile",
          b: "The pipe boundary wall surface",
          c: "The entrance transition zone",
          d: "Regions of peak eddy development"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 48,
        text: "A professional Pitot Tube assembly is integrated into a hydraulic stream explicitly to measure the:",
        options: {
          a: "Volumetric total discharge rate",
          b: "Velocity of flow at a point",
          c: "Piezometric baseline elevation",
          d: "Viscous drag coefficient"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 49,
        text: "The standard head loss formula (hf = f * L * Q^2 / (12.1 * D^5)) derived for circular pipe lines is credited to:",
        options: {
          a: "Chezy",
          b: "Darcy-Weisbach",
          c: "Manning",
          d: "Hazen-Williams"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 50,
        text: "The minor head loss triggered due to a sudden structural pipeline expansion configuration is evaluated by:",
        options: {
          a: "V1^2 / 2g",
          b: "(V1 - V2)^2 / 2g",
          c: "0.5 V1^2 / 2g",
          d: "(V1^2 - V2^2) / 2g"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 51,
        text: "If the structural river bed particle size is 6 cm (0.06 m), calculate the matching Manning's rugosity coefficient (n) using standard empirical formulas.",
        options: {
          a: "0.012",
          b: "0.020",
          c: "0.029",
          d: "0.045"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 52,
        text: "The experimental Coefficient of Discharge (Cd) derived for a standard sharp-edged Orifice Meter typically resides within what range?",
        options: {
          a: "0.62 to 0.65",
          b: "0.75 to 0.82",
          c: "0.95 to 0.98",
          d: "1.05 to 1.20"
        },
        answer: "a",
        tag: "Water Resources"
      },
      {
        id: 53,
        text: "In evaluating the relative roughness parameter (e/D) on a classic Moody diagram, the term 'e' explicitly represents the:",
        options: {
          a: "Internal pipe diameter index",
          b: "Surface Roughness height",
          c: "Kinematic energy dissipation coefficient",
          d: "Eccentricity of the pipe cross-section"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 54,
        text: "Fluids that undergo internal dynamic strain rates directly proportional to the applied shear stress are classified as:",
        options: {
          a: "Ideal plastic fluids",
          b: "Thixotropic fluids",
          c: "Newtonian fluids",
          d: "Dilatant polymer blocks"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 55,
        text: "The internal fluid frictional resistance encountered during motion behaves:",
        options: {
          a: "Proportional to velocity in laminar flow, and to the square of velocity in turbulent flow",
          b: "Inversely proportional to velocity everywhere",
          c: "Constant independent of the flow regime tracking",
          d: "Proportional to the cube root of the Reynolds number"
        },
        answer: "a",
        tag: "Water Resources"
      },
      {
        id: 56,
        text: "Water flows down steadily inside a pipeline layout tracking a perfectly constant cross-sectional area. According to the Bernoulli principle, the pressure:",
        options: {
          a: "Drops linearly with an increase in vertical elevation",
          b: "Increases with height",
          c: "Stays completely uniform independent of height",
          d: "Reduces to zero at all high elevation zones"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 57,
        text: "The standard Darcy-Weisbach structural formula for computing head loss (hf) due to pipe friction in terms of velocity (v) and diameter (d) is:",
        options: {
          a: "f * L * v^2 / (g * d)",
          b: "f * L * v^2 / (2 * g * d)",
          c: "f * L * v / (2 * g * d^2)",
          d: "f * L^2 * v^2 / (2 * g * d)"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 58,
        text: "In open channel hydraulics, when the channel bed slope abruptly shifts from a mild slope to a steep slope, what water surface profile is formed?",
        options: {
          a: "M1 profile",
          b: "M2 and S2 profiles",
          c: "S1 profile exclusively",
          d: "H2 draw-down curve"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 59,
        text: "The mathematical value of the Hydraulic Radius (R) calculated for an extremely wide rectangular open channel section simplifies to:",
        options: {
          a: "Width of the channel (B)",
          b: "Depth of flow (y)",
          c: "Half the depth of flow (y/2)",
          d: "Area divided by width squared"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 60,
        text: "The linear length parameter embedded within the structural formulation of the Froude number (Fr) for open channels represents the:",
        options: {
          a: "Total wetted perimeter length",
          b: "Hydraulic mean depth (D = A/T)",
          c: "Bottom channel width dimension",
          d: "Total length of the channel reach"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 61,
        text: "The mathematical value of the Hydraulic Radius (R) derived for the most economical triangular open channel section layout is:",
        options: {
          a: "y / 2",
          b: "y / (2\sqrt{2})",
          c: "y * \sqrt{2}",
          d: "2y / 3"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 62,
        text: "The overall head loss incurred by an approaching hydraulic flow stream will be small in the case of which weir structure?",
        options: {
          a: "Sharp-crested weir",
          b: "Broad crested weir",
          c: "Ogee overflow drop",
          d: "Narrow slot notch"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 63,
        text: "In open channel flows, at the critical depth (yc), the total volumetric discharge (Q) is:",
        options: {
          a: "Minimum for a fixed specific energy layout",
          b: "Maximum for a given specific energy",
          c: "Equal to zero everywhere",
          d: "Fully independent of energy boundaries"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 64,
        text: "At the critical depth of water flow inside an open channel system, the matching specific energy curve achieves its:",
        options: {
          a: "Absolute peak maximum value",
          b: "Minimum value",
          c: "Zero baseline level",
          d: "Asymptotic infinity limit"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 65,
        text: "The standard mathematical expression utilized to compute the sequent depth ratio (y2/y1) for a hydraulic jump inside a rectangular channel is:",
        options: {
          a: "y2/y1 = 0.5 * [ \sqrt{1 + 8Fr1^2} - 1 ]",
          b: "y2/y1 = 0.5 * [ \sqrt{1 + 4Fr1^2} + 1 ]",
          c: "y2/y1 = \sqrt{Fr1 * Fr2}",
          d: "y2/y1 = 2.5 * Fr1^2"
        },
        answer: "a",
        tag: "Water Resources"
      },
      {
        id: 66,
        text: "What is the designated range of the approach Froude number (Fr1) for a stable 'Steady Jump' formation inside a channel?",
        options: {
          a: "1.0 to 1.7",
          b: "2.5 to 4.5",
          c: "4.5 to 9.0",
          d: "Greater than 9.0"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 67,
        text: "If a channel roughness factor (Manning's n) is doubled, how must the channel bed slope (S) change to maintain an identical discharge and depth?",
        options: {
          a: "Slope must be halved",
          b: "Slope should be doubled",
          c: "Slope should be changed to Quadruple (4 times)",
          d: "Slope stays completely unchanged"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 68,
        text: "What is the defining threshold criteria value of the Froude number (Fr) to classify a flow as supercritical channel flow?",
        options: {
          a: "Fr < 1.0",
          b: "Fr = 1.0",
          c: "Fr > 1.0",
          d: "Fr = 0"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 69,
        text: "In open channel hydraulics, the alternate depths are defined as two distinct flow depths:",
        options: {
          a: "Which occur at identical discharge numbers but different slopes",
          b: "Which occur at the same specific energy",
          c: "Separated by exactly one hydraulic jump length",
          d: "Residing below the channel dead bed plane"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 70,
        text: "The standard calculation for the Wetted Perimeter (P) of a trapezoidal open channel section with bottom width B, depth y, and side slopes zH:1V is given by:",
        options: {
          a: "B + 2y * z",
          b: "B + 2y\sqrt{1 + z^2}",
          c: "B + y * \sqrt{1 + z^2}",
          d: "B * y + z * y^2"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 71,
        text: "The fluid space bounded between two adjacent or successive flow lines inside a graphical flow net layout is known as a:",
        options: {
          a: "Potential drop field",
          b: "Flow channel",
          c: "Seepage line node",
          d: "Discharge tube"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 72,
        text: "A combined Pitot-Static tube assembly is implemented within an open stream explicitly to measure:",
        options: {
          a: "Total volumetric discharge rates",
          b: "Velocity at a point of fluid in a stream",
          c: "The absolute hydraulic radius profile",
          d: "Critical depth locations"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 73,
        text: "The longitudinal horizontal length of a standard structural hydraulic jump is typically equal to:",
        options: {
          a: "1 to 2 times the jump height",
          b: "5 to 7 times the jump height",
          c: "Exactly 10 times the initial depth",
          d: "Half the length parameter of the weir"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 74,
        text: "For the most efficient or economical trapezoidal open channel section, the top water width must be equal to:",
        options: {
          a: "The bottom width dimension exclusively",
          b: "The sum of the side slope lengths",
          c: "Double the vertical depth of flow",
          d: "The hydraulic mean depth parameter"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 75,
        text: "The total volumetric discharge (Q) passing over a structural Ogee weir profile is mathematically proportional to:",
        options: {
          a: "H^1/2",
          b: "H^3/2",
          c: "H^5/2",
          d: "H^2"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 76,
        text: "The Froude number equation derived for a triangular channel section of depth y carrying a flow velocity V with side slopes 2H:1V is:",
        options: {
          a: "V / \sqrt{g * y}",
          b: "V / \sqrt{g * y / 2}",
          c: "V / \sqrt{2 * g * y}",
          d: "V^2 / (g * y)"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 77,
        text: "When the hydraulic flow parameters inside an open channel vary gradually along the reach length, the flow is classified as:",
        options: {
          a: "Steady uniform flow",
          b: "Steady non-uniform flow",
          c: "Unsteady uniform flow",
          d: "Rapidly varied turbulent flow"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 78,
        text: "The comprehensive branch of science dealing with the occurrence, circulation, storage, and spatial distribution of the waters of the earth and its atmosphere is:",
        options: {
          a: "Geology",
          b: "Hydrology",
          c: "Fluid Mechanics",
          d: "Meteorology"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 79,
        text: "According to the generic geographical and macro-river basin alignment of Nepal, the river systems are classified into how many distinct structural priority groups?",
        options: {
          a: "2 groups",
          b: "3 groups",
          c: "5 groups",
          d: "7 groups"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 80,
        text: "As the designated duration of a Unit Hydrograph (UH) structure is systematically increased, the absolute base period of the hydrograph will:",
        options: {
          a: "Compress significantly",
          b: "Increase",
          c: "Remain perfectly identical",
          d: "Drop to zero immediately"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 81,
        text: "The engineering hydrological technique known as the Double Mass Curve is explicitly executed to check the:",
        options: {
          a: "Average rainfall depth over a century",
          b: "Estimates of missing rain storm data blocks",
          c: "Consistency of rain gauge records",
          d: "Minimum number of rain gauges requested in a basin"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 82,
        text: "As compared to a generic Fan-shaped drainage catchment area, a Fern-shaped catchment layout characteristically features a:",
        options: {
          a: "Short wide main river loop",
          b: "Longer stream network",
          c: "High rapid peak discharge concentration",
          d: "Perfectly circular basin boundary"
        },
        answer: "b",
        tag: "Water Resources"
      },
      {
        id: 83,
        text: "In meteorological mapping, Isohyets are defined as imaginary lines joining geographic points tracking equal:",
        options: {
          a: "Atmospheric pressure values",
          b: "Elevation heights",
          c: "Rainfall depth",
          d: "Temperature levels"
        },
        answer: "c",
        tag: "Water Resources"
      },
      {
        id: 84,
        text: "Which hydrological methodology offers highly accurate river flow characteristic estimates specifically tailored for the river basins of Nepal?",
        options: {
          a: "Rational run-off formulas",
          b: "DHM 2004 method",
          c: "Standard Snyder unit maps",
          d: "Empirical California curves"
        },
        answer: "b",
        tag: "Water Resources"
      }
    ]
  },
  {
    id: "extra4",
    name: "Extra Questions - Structural Mechanics",
    description: "99 Additional practice questions on shear force, bending moments, deflection, structural analysis, arches, and plastic analysis.",
    questions: [
      {
        id: 1,
        text: "A bending moment M acts at each support of a simply supported beam. The Shear Force Diagram (SFD) for this beam will have ordinates equal to:",
        options: {
          a: "M/L at all sections",
          b: "Zero at all sections",
          c: "M at the center and zero at supports",
          d: "2M/L at mid-span"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 2,
        text: "If the shear force along a specific section of a beam is zero, the bending moment at that section is:",
        options: {
          a: "Uniformly zero",
          b: "Either maximum or minimum",
          c: "Linearly increasing",
          d: "Infinitely large"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 3,
        text: "For a simply supported beam, the neutral axis represents the location where:",
        options: {
          a: "Bending stress is maximum and shear stress is zero",
          b: "Bending stress is zero and shear stress maximum",
          c: "Both bending stress and shear stress are maximum",
          d: "Both bending stress and shear stress are zero"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 4,
        text: "During the ultimate shear failure of a reinforced concrete beam, the mechanical resistance is provided due to:",
        options: {
          a: "Concrete matrix only",
          b: "Tensile longitudinal bars only",
          c: "Shear reinforcement only",
          d: "Top compression reinforcement only"
        },
        answer: "c",
        tag: "Structural Mechanics"
      },
      {
        id: 5,
        text: "Which parameter is highly critical and important to evaluate while designing a standard simply supported beam?",
        options: {
          a: "BM at the support joints",
          b: "BM at Center",
          c: "Torsional moments at the edges",
          d: "Deflection at the quarter-span points"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 6,
        text: "The fundamental differential relation between Shear Force (S) and Bending Moment (M) at a distance x along a beam is:",
        options: {
          a: "M = dS/dx",
          b: "S = dM/dx",
          c: "S = d2M/dx2",
          d: "M = d2S/dx2"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 7,
        text: "The absolute deflection at the center of a simply supported beam of length L and flexural rigidity EI when a concentrated load P acts directly at its center is:",
        options: {
          a: "PL3 / 3EI",
          b: "PL3 / 48EI",
          c: "5PL3 / 384EI",
          d: "PL3 / 192EI"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 8,
        text: "In a simply supported beam of length L, two equal point loads P are acting at a distance of L/3 from both supports A and B. What is the value of the shear force at a distance of L/6 from support A?",
        options: {
          a: "P/2",
          b: "P",
          c: "2P",
          d: "Zero"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 9,
        text: "The ductility of a structural metallic material increases with which of the following mechanical observations under a standard tensile test?",
        options: {
          a: "Increase in the initial gauge length",
          b: "Increase in percentage reduction in the area of a specimen",
          c: "Peak elevation of the yield point alone",
          d: "Reduction in total elongation limits"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 10,
        text: "A beam structural element is technically classified as a 'Continuous Beam' if it is:",
        options: {
          a: "Fabricated without any internal joints",
          b: "Supported on more than two supports",
          c: "Subjected to dynamic traveling loads only",
          d: "Fixed securely at one end and free at the other"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 11,
        text: "An abrupt vertical step or sudden change in a beam's Bending Moment Diagram (BMD) occurs at a section where:",
        options: {
          a: "A concentrated point load is applied",
          b: "A concentrated couple is applied",
          c: "A uniformly distributed load initiates",
          d: "The cross-section abruptly doubles"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 12,
        text: "A positive bending moment (sagging) causes a beam axis deflection layout that takes the physical shape of a:",
        options: {
          a: "Convex upward profile",
          b: "Convex downward profile",
          c: "Perfectly straight inclined line",
          d: "Twisted spiral helix"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 13,
        text: "If a simply supported beam carries a Uniformly Distributed Load (UDL) across its entire span, the matching shear force diagram:",
        options: {
          a: "Stays perfectly uniform and horizontal",
          b: "Changes linearly",
          c: "Varies parabolically",
          d: "Shifts cubically"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 14,
        text: "If a structural beam is subjected to a completely constant bending moment along its entire length, the matching shear force will be:",
        options: {
          a: "Constant and equal to the moment value",
          b: "Zero at all sections along the beam",
          c: "Linearly increasing up to the mid-span",
          d: "Parabolically distributed"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 15,
        text: "A concentrated bending moment M is acting precisely at the free end of a cantilever beam. The maximum bending moment developed anywhere along the beam length will be:",
        options: {
          a: "M/2",
          b: "M",
          c: "M * L",
          d: "Zero"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 16,
        text: "In the structural analysis of a standard propped cantilever beam of length L, the internal hinge point matching zero moment is located at what distance from the propped end?",
        options: {
          a: "0.250 L",
          b: "0.414 L",
          c: "0.500 L",
          d: "0.707 L"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 17,
        text: "The fundamental elastic relationship connecting Young's Modulus (E), Modulus of Rigidity/Shear Modulus (G), and Poisson's ratio (µ) is correctly written as:",
        options: {
          a: "µ = 2G/E - 1",
          b: "µ = E/2G - 1",
          c: "µ = E/3G + 1",
          d: "µ = 3G/E - 1"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 18,
        text: "By structural definition, the principal planes inside a stressed body are subjected to:",
        options: {
          a: "Peak shear stresses exclusively",
          b: "Normal stresses only",
          c: "A uniform mixture of shear and normal stresses",
          d: "Zero normal stress components"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 19,
        text: "The magnitude of shear stress acting along the principal plane subjected to the absolute maximum principal stress is:",
        options: {
          a: "Equal to half the maximum normal stress",
          b: "No shear stress acts",
          c: "Equal to the major normal stress value",
          d: "Indeterminate without strain indices"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 20,
        text: "For a structural beam tracking a solid rectangular cross-section, the maximum shear stress (τmax) is how many times the average shear stress (τavg)?",
        options: {
          a: "1.2 times",
          b: "1.5 Times",
          c: "2.0 times",
          d: "1.33 times"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 21,
        text: "When a solid circular structural shaft is subjected to pure twisting torsion, the shear stress developed at the exact center axis of the shaft is:",
        options: {
          a: "Maximum",
          b: "Zero",
          c: "Half of the outer surface stress",
          d: "Dependent on the shaft length"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 22,
        text: "Which of the following statement properties is technically correct regarding structural section modulus (Z)?",
        options: {
          a: "It shares identical units with the material cross-sectional area",
          b: "Section modulus doesn't have the same unit as the modulus of elasticity",
          c: "It is measured in terms of Newtons per meter square",
          d: "It is completely independent of depth parameters"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 23,
        text: "Under the assumptions of pure structural bending, the internal stress distribution developed across a beam cross-section is:",
        options: {
          a: "Perfectly uniform everywhere",
          b: "Linear",
          c: "Parabolic above the neutral plane",
          d: "Hyperbolic at edge fibers"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 24,
        text: "In structural energy principles, the classic statement of Virtual Work refers specifically to:",
        options: {
          a: "Virtual work done by virtual forces on actual displacements",
          b: "Virtual work done by actual forces under virtual displacements",
          c: "Actual kinetic energy dissipation factors",
          d: "Plastic work done at collapse hinges"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 25,
        text: "A simply supported beam is subjected to a concentrated load at its midpoint. The geometric shape of the resulting Bending Moment Diagram (BMD) is a:",
        options: {
          a: "Rectangle",
          b: "Triangle",
          c: "Parabola",
          d: "Cubic curve"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 26,
        text: "According to Euler's column buckling equation for a column of total physical length L, the equivalent effective length (Leff) for the case where both ends are fixed securely is:",
        options: {
          a: "L",
          b: "L/2",
          c: "2L",
          d: "L / \sqrt{2}"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 27,
        text: "Simply supported beam 'A' of length L carries a central point load W. Another identical beam 'B' is loaded with a uniformly distributed load (UDL) such that the total load on the beam is also W. What is the ratio of maximum deflections between beam A and beam B (δA / δB)?",
        options: {
          a: "5/8",
          b: "8/5",
          c: "4/3",
          d: "1.50"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 28,
        text: "If the width of a simply supported beam carrying a single isolated load at its center is exactly doubled, the vertical deflection of the beam at its center is changed by a factor of:",
        options: {
          a: "2 (doubled)",
          b: "1/2 (halved)",
          c: "4",
          d: "1/4"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 29,
        text: "The vertical elastic deflection tracking at the free end of a cantilever beam of length L subjected to a single point load W at its free end is given by:",
        options: {
          a: "WL3 / 8EI",
          b: "WL3 / 3EI",
          c: "WL3 / 48EI",
          d: "WL3 / 24EI"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 30,
        text: "The vertical deflection at the center of a fixed beam of span L carrying a total load W applied uniformly across its entire length is given by:",
        options: {
          a: "WL3 / 76.8EI",
          b: "WL3 / 384EI",
          c: "5WL3 / 384EI",
          d: "WL3 / 192EI"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 31,
        text: "The total internal strain energy stored in a simply supported beam of span L loaded with a single point load W at its center is:",
        options: {
          a: "W2L3 / 48EI",
          b: "W2L3 / 96EI",
          c: "W2L3 / 192EI",
          d: "W2L3 / 24EI"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 32,
        text: "If one end of a structural column is kept entirely free while the other end is fixed securely, then the ratio of its effective length (Leff) to its actual physical length (L) is:",
        options: {
          a: "0.50",
          b: "2.00",
          c: "1.00",
          d: "0.707"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 33,
        text: "In a structural three-hinged arch with support points situated at different vertical heights h1 and h2, a vertical load W is acting at the center crown of the arch. If L represents the total horizontal span length, the horizontal thrust (H) developed at the supports is:",
        options: {
          a: "WL / (4 * [h1 + h2])",
          b: "WL / (\sqrt{h1} + \sqrt{h2})^2",
          c: "WL / (2 * [h1 * h2])",
          d: "W * (\sqrt{h1} + \sqrt{h2}) / L"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 34,
        text: "When a uniformly distributed load (UDL) whose total length is greater than the span of a structural girder moves across the girder from left to right, the bending moment (BM) at any section reaches its maximum when:",
        options: {
          a: "The head of the UDL reaches the exact center of the girder",
          b: "The UDL covers the entire beam span",
          c: "The tail of the UDL is about to leave the left support",
          d: "The load precisely covers the structural half-span only"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 35,
        text: "The Influence Line Diagram (ILD) for bending moment at a specific cross-section of a cantilever beam, when a unit load moves across it, takes the shape of a:",
        options: {
          a: "Rectangle extending across the full span",
          b: "Triangle between the free end and the specific section",
          c: "Parabola peaking at the fixed support",
          d: "Two independent straight horizontal blocks"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 36,
        text: "Under a concentrated point load W acting at the crown, the maximum bending moment in a three-hinged parabolic arch occurs on either side of its crown at a horizontal distance equal to:",
        options: {
          a: "L / 2",
          b: "L / (2\sqrt{3})",
          c: "L / 4",
          d: "L / 3"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 37,
        text: "What is the permitted increase factor or adjustment in the design allowable stress of a load-bearing wall subjected to an eccentric load tracking an eccentricity ratio > 1/24?",
        options: {
          a: "0.10",
          b: "0.25",
          c: "0.33",
          d: "0.50"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 38,
        text: "A structural arch containing exactly two hinges (at the supports) represents a:",
        options: {
          a: "Statically determinate structure",
          b: "Indeterminate structure",
          c: "Unstable mechanical mechanism",
          d: "Kinematically determinate link"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 39,
        text: "The structural bending moment developed anywhere within an arch ring drops to zero when:",
        options: {
          a: "The vertical crown load matches the dead weight",
          b: "The line of thrust coincides with the line of the arch axis",
          c: "The support hinges undergo unexpected settlement",
          d: "The rise parameter tracks twice the span length"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 40,
        text: "The matrix analysis method known as the Stiffness Matrix Method is alternatively termed the:",
        options: {
          a: "Force method",
          b: "Displacement method",
          c: "Flexibility method",
          d: "Equilibrium temperature method"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 41,
        text: "What is the structural rotational stiffness developed at end A of a beam member if the farther end B is supported by a vertically guided roller?",
        options: {
          a: "4EI/L",
          b: "EI/L",
          c: "3EI/L",
          d: "Zero"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 42,
        text: "The complex simultaneous equations generated during the Slope-Deflection Method can be solved via manual relaxation iterations using the:",
        options: {
          a: "Column Analogy Method",
          b: "Moment Distribution Method",
          c: "Strain Energy Method",
          d: "Three-Moment Theorem"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 43,
        text: "In executing the plastic collapse analysis of structures, the structural segments bounded between any two successive plastic hinges are assumed to:",
        options: {
          a: "Deform into high-degree parabolic curves",
          b: "Deform as a rigid material",
          c: "Undergo volumetric cracking failure",
          d: "Follow Hooke's linear law exclusively"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 44,
        text: "The horizontal thrust (H) developed in a two-hinged semi-circular arch of radius R subjected to a uniform vertical UDL of w kN/m acting across its left half-span will be:",
        options: {
          a: "wR / \pi",
          b: "2wR / 3\pi",
          c: "4wR / 3\pi",
          d: "wR / 2\pi"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 45,
        text: "Three distinct two-hinged semi-circular arches A, B, and C have radii of 5 m, 7.5 m, and 10 m respectively. If each carries an identical concentrated vertical load 'W' at their crown, the ratio of the horizontal thrust developed at their support entries will be:",
        options: {
          a: "1:2:3",
          b: "1:1:1",
          c: "4:2:1",
          d: "Dependent on elastic core sections"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 46,
        text: "For a structural two-hinged arch tracking a constant flexural rigidity EI, the horizontal thrust H expressed in terms of beam bending moment M is given by:",
        options: {
          a: "\int (M * y * dx) / \int (y * dx)",
          b: "\int (M * y * ds / EI) / \int (y^2 * ds / EI)",
          c: "\int (M * ds / EI) / \int (y * ds)",
          d: "\int (M^2 * dx) / \int (y^2 * dx)"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 47,
        text: "The vertical structural bending moment tracking at the end supports of a standard simply supported beam layout is always:",
        options: {
          a: "Maximum",
          b: "Zero",
          c: "Dependent on total span length",
          d: "Multiplied by the shear force coefficient"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 48,
        text: "The absolute maximum shear force in a simply supported structural beam carrying a full span uniform UDL occurs:",
        options: {
          a: "Exactly at the mid-span section",
          b: "Near the support locations",
          c: "At the quarter-span points",
          d: "At locations matching maximum bending moment"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 49,
        text: "According to the transformation rules of the Conjugate Beam Method, a fixed structural support in the actual real beam translates into what support inside the imaginary conjugate beam?",
        options: {
          a: "Hinged support",
          b: "Free Support",
          c: "Roller support",
          d: "Internal slider"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 50,
        text: "The Influence Line Diagram (ILD) for horizontal thrust (H) in a standard three-hinged arch of span L and crown rise h takes the geometric shape of a:",
        options: {
          a: "Rectangle with uniform ordinate L/2h",
          b: "Triangle with its maximum ordinate at center equals to L/4h",
          c: "Parabola peaking at the crown axis",
          d: "Linear line dropping to zero at mid-span"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 51,
        text: "For a standard structural Reinforced Concrete (RCC) beam, the analytical shear stress diagram across the depth is:",
        options: {
          a: "Purely linear from top edge to bottom face",
          b: "Parabolic above neutral axis and rectangular below neutral axis",
          c: "Parabolic across the entire cross-section depth",
          d: "Rectangular above the neutral plane and zero below it"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 52,
        text: "When a structural body is subjected to a direct tensile stress (σx) in one plane accompanied by a simple shear stress (τxy), the maximum normal principal stress is given by:",
        options: {
          a: "σx + τxy",
          b: "σx/2 + 1/2 * \sqrt{σx^2 + 4τxy^2}",
          c: "σx/2 + \sqrt{σx^2 + τxy^2}",
          d: "σx + 1/2 * \sqrt{σx^2 + τxy^2}"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 53,
        text: "In a structural two-hinged arch, the internal bending moment drops completely to zero under which condition?",
        options: {
          a: "When the total load becomes purely asymmetrical",
          b: "When the thrust axis and the hinge axis coincide",
          c: "When the arch rise is reduced by half",
          d: "Under extreme uniform temperature drops"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 54,
        text: "What is the structural rotational stiffness of a beam member joint if the farther end is supported by a standard hinge pin?",
        options: {
          a: "4EI/L",
          b: "3EI/L",
          c: "EI/L",
          d: "2EI/L"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 55,
        text: "According to concrete design building codes, the standard minimum clear cover provided for reinforcing bars inside a column is:",
        options: {
          a: "15 mm",
          b: "40 mm",
          c: "25 mm",
          d: "50 mm"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 56,
        text: "The powerful structural analysis framework known as the Moment Distribution Method was formally introduced to engineering by:",
        options: {
          a: "Euler",
          b: "Hardy Cross",
          c: "Castigliano",
          d: "Clapeyron"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 57,
        text: "The vertical elastic deflection tracking at the center of a fixed beam carrying a single concentrated point load W applied at its mid-span is:",
        options: {
          a: "WL3 / 48EI",
          b: "WL3 / 192EI",
          c: "WL3 / 384EI",
          d: "WL3 / 96EI"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 58,
        text: "The mechanical parameter known as Modulus of Rigidity is analytically defined as the ratio of:",
        options: {
          a: "Linear stress to linear strain",
          b: "Shear stress and shear strain",
          c: "Hydrostatic pressure to volumetric strain",
          d: "Lateral strain to longitudinal strain"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 59,
        text: "The maximum total strain energy that can be securely stored inside an elastic body up to its proportional elastic limit is termed:",
        options: {
          a: "Resilience",
          b: "Proof resilience",
          c: "Toughness index",
          d: "Impact storage capacity"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 60,
        text: "The Influence Line Diagram (ILD) for the vertical reaction force tracking at the fixed support of a cantilever beam shows:",
        options: {
          a: "A triangle peaking at the free end",
          b: "A 1 ordinate throughout the entire span length",
          c: "A linear line dropping to zero at mid-span",
          d: "A parabolic distribution layout"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 61,
        text: "When a structural girder is subjected to a moving train of concentrated wheel loads, the absolute maximum bending moment developed anywhere along the girder:",
        options: {
          a: "Always occurs at the exact mid-span section independent of wheel positions",
          b: "Always occurs under a wheel load",
          c: "Develops directly below the absolute heaviest wheel at the support line",
          d: "Occurs at the quarter-span marker points"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 62,
        text: "The ratio of direct linear stress to linear strain within the elastic limit of a material is termed the modulus of:",
        options: {
          a: "Rigidity",
          b: "Elasticity",
          c: "Bulk compression",
          d: "Plastic sliding"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 63,
        text: "The fundamental engineering equation of flexure (Bending Equation) for a beam is correctly written as:",
        options: {
          a: "M/y = σ/I = E/R",
          b: "M/I = σ/y = E/R",
          c: "M/I = y/σ = R/E",
          d: "I/M = σ/y = E/R"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 64,
        text: "A parabolic two-hinged arch of span L and rise h is loaded with a single concentrated load W acting directly at the crown. The horizontal thrust (H) developed at the supports is:",
        options: {
          a: "WL / 4h",
          b: "25WL / 128h",
          c: "WL / 8h",
          d: "5WL / 8h"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 65,
        text: "Let m1 and m2 be the individual member counts of a complex compound truss structure. The entire truss system is statically determinate and stable if the total member count m satisfies:",
        options: {
          a: "m = m1 + m2 + 2",
          b: "m = m1 + m2 + 3",
          c: "m = 2j - 3",
          d: "m = m1 * m2 - 3"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 66,
        text: "In executing structural designs under the Limit State Method framework, Hooke's linear stress-strain law remains valid up to the:",
        options: {
          a: "Ultimate collapse state",
          b: "Proportional limit",
          c: "Yield point plateau",
          d: "Breaking point"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 67,
        text: "At the unique cross-section along a beam known as the Point of Contraflexure, the structural bending moment:",
        options: {
          a: "Reaches its peak maximum value",
          b: "Changes sign",
          c: "Drops to zero and stays uniform",
          d: "Doubles its shear value"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 68,
        text: "The plastic shape factor configuration computed for a structural cross-section tracking a diamond shape under flexure is:",
        options: {
          a: "1.50",
          b: "2.00",
          c: "1.15",
          d: "1.70"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 69,
        text: "Which of the following descriptions accurately defines the operational core of Influence Line Diagrams (ILD)?",
        options: {
          a: "The positions of the support joints change continuously",
          b: "Structural points remain fixed while the position of the load changes",
          c: "The magnitude of the test unit load varies non-linearly",
          d: "Internal cross-sections deform elastically"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 70,
        text: "Euler's Buckling/Crippling load (Pcr) formula derived for a column tracking one end fixed securely and the other end hinged pin is:",
        options: {
          a: "\pi2EI / L2",
          b: "2\pi2EI / L2",
          c: "4\pi2EI / L2",
          d: "\pi2EI / 4L2"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 71,
        text: "The major principal stress produced on a diagonal shear plane under two-dimensional normal stresses (fx, fy) and shear stress (τxy) is mathematically expressed as:",
        options: {
          a: "(fx + fy)/2 + 1/2 * [ (fx - fy)^2 + 4τxy^2 ]^(1/2)",
          b: "(fx - fy)/2 + [ (fx + fy)^2 + τxy^2 ]^(1/2)",
          c: "(fx + fy) + τxy",
          d: "Zero normal stress component"
        },
        answer: "a",
        tag: "Structural Mechanics"
      },
      {
        id: 72,
        text: "A Uniformly Varying Load (UVL) of maximum intensity w is applied to a two-hinged parabolic arch of span L and rise H, tracking zero intensity at one support and w at the other. The horizontal thrust is computed via:",
        options: {
          a: "wl2 / 8H",
          b: "wl2 / 16H",
          c: "wl2 / 4H",
          d: "5wl2 / 32H"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 73,
        text: "If the Shear Force Diagram (SFD) of a simply supported beam displays a smooth parabolic curve, the loading acting across the beam must be a:",
        options: {
          a: "Concentrated central point load",
          b: "Uniformly distributed load (UDL)",
          c: "Linearly varying distributed load (UVL)",
          d: "Series of equal couples"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 74,
        text: "Let ki be the absolute structural stiffness of the ith member meeting at a structural frame joint. The structural Distribution Factor (DF) for that specific member is evaluated by:",
        options: {
          a: "\sum k / ki",
          b: "ki / \sum k",
          c: "ki * \sum k",
          d: "ki / 5k"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 75,
        text: "The vertical deflection at the free end of a structural cantilever beam of span L carrying a full span uniform UDL of intensity w is given by:",
        options: {
          a: "wL4 / 3EI",
          b: "wL4 / 8EI",
          c: "wL4 / 48EI",
          d: "wL4 / 384EI"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 76,
        text: "The maximum stress value that a testing material specimen can safely resist before undergoing absolute structural fracturing is its:",
        options: {
          a: "Yield stress",
          b: "Ultimate stress",
          c: "Proportional limit stress",
          d: "Proof stress offset"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 77,
        text: "The structural formula matching the characteristic relationship connecting flexural tensile strength (fcr) and compressive strength (fck) of concrete is:",
        options: {
          a: "fcr = 0.35 * \sqrt{fck}",
          b: "fcr = 0.70 * \sqrt{fck}",
          c: "fcr = 0.45 * fck",
          d: "fcr = 0.12 * fck"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 78,
        text: "Which of the following testing methodologies does NOT evaluate or measure the tensile strength of concrete elements?",
        options: {
          a: "Split tensile test",
          b: "Flexural beam test",
          c: "Pullout Test",
          d: "Direct briquette tension rig"
        },
        answer: "c",
        tag: "Structural Mechanics"
      },
      {
        id: 79,
        text: "The progressive structural pavement failure known as fatigue cracking is initiated primarily due to:",
        options: {
          a: "Thermal expansion on top faces",
          b: "Tensile strain developed below the surface layer",
          c: "Pure vertical static crushing loads",
          d: "Extreme chemical weathering of aggregates"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 80,
        text: "In structural load calculations, the permanent, static dead load of a structural system is termed its:",
        options: {
          a: "Live load",
          b: "Imposed actions",
          c: "Self-weight",
          d: "Transient loading"
        },
        answer: "c",
        tag: "Structural Mechanics"
      },
      {
        id: 81,
        text: "The horizontal structural reaction force (H) for an arch carrying a single vertical load W acting at a horizontal distance 'a' across a total span of '2L' is given by:",
        options: {
          a: "Wa / L",
          b: "Wa / 2L",
          c: "W * (2L - a) / L",
          d: "Zero"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 82,
        text: "The absolute degree of static indeterminacy (Ds) evaluated for a standard single-span propped cantilever beam layout is:",
        options: {
          a: "0",
          b: "1",
          c: "2",
          d: "3"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 83,
        text: "If a Uniform Distributed Load (UDL) whose total length is longer than the span moves across a simply supported beam, the absolute maximum bending moment anywhere along the beam occurs when:",
        options: {
          a: "The load precisely covers the left half-span",
          b: "The load occupies the whole span completely and stays centered",
          c: "The load head reaches the right support line",
          d: "At the quarter-span marker points"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 84,
        text: "A simply supported beam carrying a uniform full-span UDL of intensity w develops a maximum center bending moment equal to M. If the total span length of this beam is exactly doubled, what will be the new maximum center bending moment?",
        options: {
          a: "2M",
          b: "4M",
          c: "8M",
          d: "M/2"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 85,
        text: "If L is the horizontal span of a three-hinged arch, h is the crown rise, and W is a uniform UDL acting across the entire span, the horizontal reaction force developed at each support is:",
        options: {
          a: "WL2 / 4h",
          b: "WL2 / 8h",
          c: "WL2 / 16h",
          d: "WL / 8h"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 86,
        text: "The true, correct sequence of critical point markers observed across a standard mild steel tensile stress-strain curve is:",
        options: {
          a: "Elastic Limit -> Proportional Limit -> Yield Point -> Breaking Point",
          b: "Proportional Limit -> Elastic Limit -> Yield Point -> Breaking Point",
          c: "Yield Point -> Proportional Limit -> Ultimate Stress -> Fracture",
          d: "Breaking Point -> Ultimate Stress -> Yield Point -> Proportional Limit"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 87,
        text: "The absolute maximum shear force in a structural three-hinged parabolic arch usually occurs at which location?",
        options: {
          a: "The exact crown hinge section",
          b: "The springing/support entries",
          c: "The quarter-span cross-sections",
          d: "Directly below the absolute heaviest load marker"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 88,
        text: "In a structural two-hinged parabolic arch, a uniform increase in ambient temperature will cause:",
        options: {
          a: "A significant drop in the horizontal thrust",
          b: "An increase in the horizontal thrust",
          c: "Zero horizontal structural reaction variations",
          d: "Structural failure at the crown axis"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 89,
        text: "The maximum compressive strain in concrete under flexural bending compression is restricted by standard concrete design methodologies to:",
        options: {
          a: "0.0020",
          b: "0.0035",
          c: "0.0050",
          d: "0.0200"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 90,
        text: "In allowable structural working stress design methods, the designated design permissible stress is always:",
        options: {
          a: "Greater than the ultimate material strength",
          b: "Less than yield stress",
          c: "Equal to the breaking point stress index",
          d: "Multiplied by an internal load increase factor"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 91,
        text: "The maximum shear stress developed inside a structural member subjected to a pure axial tensile load is equal to:",
        options: {
          a: "The major normal stress value",
          b: "Half of maximum normal stress",
          c: "Twice the tensile stress value",
          d: "Zero everywhere"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 92,
        text: "The standard structural loading rate specified for executing laboratory compressive strength testing on concrete cubes is:",
        options: {
          a: "1 N/mm2 per minute",
          b: "14 N/mm2 per minute",
          c: "140 N/mm2 per minute",
          d: "5 N/mm2 per second"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 93,
        text: "Castigliano's first theorem for structural analysis remains applicable exclusively when the target system behaves:",
        options: {
          a: "Inelastically under thermal expansion forces",
          b: "Elastically",
          c: "As a plastic collapse mechanism",
          d: "Under completely unstable fluid environments"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 94,
        text: "The degree of kinematic indeterminacy (Dk) evaluated for a pin-jointed plane frame structural system with j joints is given by:",
        options: {
          a: "3j - r",
          b: "2j - 3",
          c: "2j - r",
          d: "j - 3"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 95,
        text: "The complete geometric shape of the Shear Force Diagram (SFD) for a cantilever beam carrying a single concentrated point load applied at its free end is a:",
        options: {
          a: "Triangle",
          b: "Rectangle",
          c: "Parabola",
          d: "Linear inclined line dropping to zero"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 96,
        text: "The layout profile for a prestressing tendon/cable inside a simply supported prestressed concrete beam carrying a full span uniform UDL should ideally be:",
        options: {
          a: "Perfectly straight along the centroidal axis",
          b: "Parabolic with zero eccentricity at the ends and maximum eccentricity at the center",
          c: "Trapezoidal peaking at the support boundaries",
          d: "Inclined up toward the compression face at mid-span"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 97,
        text: "When a structural circular shaft is subjected to torsional twisting actions, the shear stress developed across its cross-section is:",
        options: {
          a: "Maximum at the center axis and zero at edge fibers",
          b: "Maximum at the outermost fibers and zero at the center",
          c: "Completely uniform across the entire depth area",
          d: "Zero everywhere across the internal matrix"
        },
        answer: "b",
        tag: "Structural Mechanics"
      },
      {
        id: 98,
        text: "Which standard concrete mix grade is specified for installing a Damp Proof Course (DPC) at the plinth level of a masonry house?",
        options: {
          a: "M5 grade",
          b: "M10 grade",
          c: "M15 grade",
          d: "M25 grade"
        },
        answer: "c",
        tag: "Structural Mechanics"
      },
      {
        id: 99,
        text: "A simply supported beam carries a triangularly distributed load varying from zero at one support to w at the other. If L represents the total span length, the shear force will drop to zero at what distance x measured from the least loaded support?",
        options: {
          a: "L / 2",
          b: "L / \sqrt{3}",
          c: "L / \sqrt{2}",
          d: "2L / 3"
        },
        answer: "b",
        tag: "Structural Mechanics"
      }
    ]
  },
  {
    id: "extra5",
    name: "Extra Questions - Design of Structure",
    description: "92 Additional practice questions on reinforced concrete design, steel structure design, timber design, and building codes.",
    questions: [
      {
        id: 1,
        text: "Which of the following load combinations is physically and code-wise NOT possible to act simultaneously on standard building structures?",
        options: {
          a: "Dead load + Live load + Snow load",
          b: "Dead load + Live load + Wind load",
          c: "Dead load + wind load + earthquake load",
          d: "Dead load + Temperature load"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 2,
        text: "According to standard building design codes, the characteristic snow load (S) on a roof surface is mathematically determined by:",
        options: {
          a: "S = \mu * So",
          b: "S = \mu * \sigma",
          c: "S = So / \mu",
          d: "S = \mu * [So - g]"
        },
        answer: "a",
        tag: "Design of Structure"
      },
      {
        id: 3,
        text: "In regions prone to snowfall, what is the standard minimum baseline snow load (So) to consider in structural roof calculations?",
        options: {
          a: "0.5 N/m2",
          b: "1.0 N/m2",
          c: "2.5 N/m2",
          d: "5.0 N/m2"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 4,
        text: "Under standard building construction codes, self-weight of structural elements is classified as a:",
        options: {
          a: "Transient action",
          b: "Permanent action",
          c: "Accidental action",
          d: "Variable meteorological action"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 5,
        text: "Which of the following item loads is NOT categorized as a structural dead load in building designs?",
        options: {
          a: "Floor finishes weight",
          b: "Permanent brick partition walls",
          c: "Students in class",
          d: "Railing and coping masonry blocks"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 6,
        text: "Which part of the Indian Standard (IS) 875 code specifically dictates the design parameters for Dead Loads?",
        options: {
          a: "IS 875 part I",
          b: "IS 875 part II",
          c: "IS 875 part III",
          d: "IS 875 part V"
        },
        answer: "a",
        tag: "Design of Structure"
      },
      {
        id: 7,
        text: "A structural load whose position and magnitude vary continuously or occasionally over time during the operational life of the structure is called:",
        options: {
          a: "Dead load",
          b: "Live loads / Imposed loads",
          c: "Accidental impact load",
          d: "Seismic inertial load"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 8,
        text: "Which part of the IS 875 code regulates the design parameters for Live Loads (Imposed Loads)?",
        options: {
          a: "IS 875 part I",
          b: "IS 875 part 2",
          c: "IS 875 part 3",
          d: "IS 875 part IV"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 9,
        text: "According to structural wind engineering principles, the design wind pressure (P) relates to the basic wind velocity (V) as:",
        options: {
          a: "P is directly proportional to V",
          b: "P is proportional to square of V",
          c: "P is proportional to square root of V",
          d: "P is inversely proportional to V"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 10,
        text: "What is the recommended basic wind speed specified for building designs in the mountainous/hilly regions of Nepal situated above 3000m elevation?",
        options: {
          a: "33 m/s",
          b: "47 m/s",
          c: "55 m/s",
          d: "60 m/s"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 11,
        text: "Which of the following wall configurations is NOT designed to bear direct vertical load from slabs?",
        options: {
          a: "External brick walls",
          b: "Shear walls",
          c: "Panel wall",
          d: "Party walls"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 12,
        text: "For economical spacing of roof trusses, what is the optimal design cost ratio of the truss structure itself to the purlins?",
        options: {
          a: "1",
          b: "2",
          c: "3",
          d: "4"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 13,
        text: "The lateral displacement forces induced on building structures due to seismic ground acceleration are geotechnically referred to as:",
        options: {
          a: "Vertical uplift pressures",
          b: "Horizontal shear forces",
          c: "Eccentric bending moments",
          d: "Torsional warping stresses"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 14,
        text: "In masonry construction, Grout is physically and chemically defined as a highly fluid mixture of:",
        options: {
          a: "Asphalt, cement and gravel",
          b: "Water, cement and sand",
          c: "Coarse aggregates and epoxy adhesive",
          d: "Lime, clay and structural additives"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 15,
        text: "If the water-cement (w/c) ratio of a concrete mix is increased beyond its optimal design threshold, what will happen?",
        options: {
          a: "Compressive strength will decrease",
          b: "Workability will drop to zero",
          c: "Tensile steel bonding strength doubles",
          d: "Density of the set concrete increases"
        },
        answer: "a",
        tag: "Design of Structure"
      },
      {
        id: 16,
        text: "For designing accurate concrete mixes, what is the ideal moisture condition of aggregates used in the concrete mixture?",
        options: {
          a: "Oven dry (OD)",
          b: "Air dry (AD)",
          c: "Saturated surface dry (SSD)",
          d: "Completely submerged wet"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 17,
        text: "Which standard nominal concrete mix grade is commonly recommended for constructing standard RCC roofing slabs in residential buildings?",
        options: {
          a: "M10 concrete grade",
          b: "M15 concrete grade",
          c: "M20 concrete grade",
          d: "M40 concrete grade"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 18,
        text: "To protect structural cement bags from environmental moisture and humidity at a building site, they must be stored on a:",
        options: {
          a: "Direct soil ground surface",
          b: "Raised platform",
          c: "Submerged underground vault",
          d: "Metal sheet without gap ventilation"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 19,
        text: "What quality standard is specified for water utilized in mixing and curing reinforced cement concrete?",
        options: {
          a: "Substantially acidic water",
          b: "Saturated brackish ocean water",
          c: "Potable water",
          d: "Untreated gray sewer water"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 20,
        text: "The physical embedment length required to securely transfer stresses from a steel reinforcing bar to the surrounding concrete matrix is called the:",
        options: {
          a: "Lap length",
          b: "Development length",
          c: "Anchorage hook size",
          d: "Clear cover spacing"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 21,
        text: "A concrete Slump Test is highly sensitive and accurate for assessing the workability of:",
        options: {
          a: "Extremely dry and lean concrete mixes",
          b: "Rich mixes",
          c: "Underwater concrete castings",
          d: "No-fines concrete columns"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 22,
        text: "The classic concrete slump test is executed at a site primarily to measure which concrete property?",
        options: {
          a: "Ultimate compressive strength",
          b: "Workability / Consistency",
          c: "Hydration heat emission rate",
          d: "Modulus of elasticity"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 23,
        text: "If structural concrete is compacted at a site using mechanical vibrator machines, the recommended slump of the wet mix should not exceed:",
        options: {
          a: "1.0 cm",
          b: "5.0 cm",
          c: "12.0 cm",
          d: "20.0 cm"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 24,
        text: "To account for shrinkage, voids, and compaction losses, the dry volume of raw materials required to produce a unit volume of wet concrete is increased by:",
        options: {
          a: "10% to 15%",
          b: "25% to 30%",
          c: "50% to 55%",
          d: "80% to 90%"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 25,
        text: "In the limit state of collapse, the maximum design compressive strain of concrete under axial compression is restricted to:",
        options: {
          a: "0.002",
          b: "0.0035",
          c: "0.005",
          d: "0.012"
        },
        answer: "a",
        tag: "Design of Structure"
      },
      {
        id: 26,
        text: "For a structural brick masonry wall built using cement-lime-sand mortar of mix ratio 1:1:6, the permissible shear stress is limited to:",
        options: {
          a: "0.05 MPa",
          b: "0.15 MPa",
          c: "0.50 MPa",
          d: "1.20 MPa"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 27,
        text: "A reinforced concrete beam section where the concrete reaches its maximum permissible compressive strain before the tensile steel yields is termed an:",
        options: {
          a: "Under-reinforced section",
          b: "Balanced section",
          c: "Over-reinforced section",
          d: "Symmetrically distributed section"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 28,
        text: "The characteristic compressive strength of hardened structural concrete depends primarily on the:",
        options: {
          a: "Type of coarse aggregates selected",
          b: "Water-cement ratio",
          c: "Curing temperature of the first hour",
          d: "Yield strength of reinforcing steel"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 29,
        text: "The main structural objective of compacting wet concrete during casting operations is to:",
        options: {
          a: "Accelerate the setting time",
          b: "Remove air bubbles / voids",
          c: "Increase the total concrete volume",
          d: "Squeeze out excess cement paste"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 30,
        text: "The slight difference observed between the compressive strength measured from standard concrete cylinders vs concrete cubes is primarily due to the:",
        options: {
          a: "Inherent density of the concrete mixes",
          b: "Frictional resistance along the top steel plates",
          c: "Slenderness ratio of the specimens",
          d: "Atmospheric testing chamber temperatures"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 31,
        text: "In standard RCC column design practice, the maximum recommended reinforcement area ratio of longitudinal bars to cross-sectional area is limited to:",
        options: {
          a: "0.02 (2%)",
          b: "0.04 (4%)",
          c: "0.06 (6%)",
          d: "0.08 (8%)"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 32,
        text: "For mixing cement concrete, the pH value of the mixing water must not be less than:",
        options: {
          a: "4",
          b: "5",
          c: "6",
          d: "8"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 33,
        text: "The primary purpose of adding superplasticizer chemical admixtures into a fresh concrete mixture is to:",
        options: {
          a: "Delay the initial hydration reaction",
          b: "Reduce quantity of mixing water while maintaining high workability",
          c: "Increase the total density of coarse aggregates",
          d: "Increase concrete heat emissions"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 34,
        text: "Which type of cement is specifically recommended for executing underwater concrete casting and grouting operations?",
        options: {
          a: "Low Heat Portland Cement",
          b: "Quick Setting Cement",
          c: "Blast Furnace Slag Cement",
          d: "Rapid Hardening Cement"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 35,
        text: "A doubly reinforced concrete beam section is structurally characterized by the placement of reinforcing steel bars inside:",
        options: {
          a: "The tension zone only",
          b: "The compression zone only",
          c: "Both compression and tension zones",
          d: "Along the shear diagonal lines only"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 36,
        text: "While designing structural floor slabs, the minimum slab thickness is often governed and checked to resist:",
        options: {
          a: "Direct tensile crushing",
          b: "Shear failure",
          c: "Flexural bending crack propagation",
          d: "Punching shear perimeter stress"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 37,
        text: "In testing concrete beams to ultimate failure, which section configuration exhibits a sudden, brittle failure without warning?",
        options: {
          a: "Under-reinforced sections",
          b: "Balanced sections",
          c: "Over-reinforced sections",
          d: "Ductile steel truss sections"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 38,
        text: "Once a reinforcing steel bar passes its yield strength, its tensile strain:",
        options: {
          a: "Stops increasing entirely",
          b: "Increases slowly than stress",
          c: "Increases much faster than stress",
          d: "Drops instantly to zero"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 39,
        text: "The Moment of Resistance (MR) of an over-reinforced concrete section is:",
        options: {
          a: "Less than a balanced section",
          b: "More than a balanced section",
          c: "Exactly equal to an under-reinforced section",
          d: "Directly equal to zero"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 40,
        text: "What is the primary structural purpose of providing web shear reinforcement (stirrups) in concrete beams?",
        options: {
          a: "To bear longitudinal bending tensile forces",
          b: "Diagonal tension crack and shear failure",
          c: "To reduce total concrete consumption",
          d: "To prevent shrinkage of top concrete cover"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 41,
        text: "According to reinforced concrete beam design codes, the maximum steel area of tension reinforcement is limited to:",
        options: {
          a: "0.02 bD",
          b: "0.04 bD",
          c: "0.06 bD",
          d: "0.08 bD"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 42,
        text: "In standard structural design drawings, the greek symbol 'Φ' (phi) represents the:",
        options: {
          a: "Yield strength of steel bars",
          b: "Elastic modulus of concrete",
          c: "Diameter of reinforcing bars",
          d: "Pitch spacing of lateral ties"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 43,
        text: "The maximum bending moment developed in a beam is NOT a function of which of the following parameters?",
        options: {
          a: "Total horizontal span of the beam",
          b: "Magnitude of applied loads",
          c: "Cross-section of the beam",
          d: "Boundary condition of the supports"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 44,
        text: "According to standard concrete building codes, the nominal concrete cover for reinforcing steel bars in standard slabs must not be less than:",
        options: {
          a: "15 mm or diameter of bars",
          b: "25 mm or diameter of bars",
          c: "40 mm or diameter of bars",
          d: "50 mm or diameter of bars"
        },
        answer: "a",
        tag: "Design of Structure"
      },
      {
        id: 45,
        text: "In steel column designs, the angle of inclination of a lacing bar with the longitudinal axis of the column is restricted between:",
        options: {
          a: "20° to 45°",
          b: "40° to 70°",
          c: "60° to 90°",
          d: "15° to 30°"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 46,
        text: "In limit state design of steel structures, the design yield tensile stress of structural steel of grade fy is taken as:",
        options: {
          a: "fy",
          b: "0.80 fy",
          c: "0.87 fy",
          d: "0.67 fy"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 47,
        text: "The absolute refractive index of a diamond crystal under standard optical conditions is approximately:",
        options: {
          a: "1.33",
          b: "1.50",
          c: "2.42",
          d: "3.10"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 48,
        text: "The bending stress at the neutral axis of a beam subjected to pure bending is:",
        options: {
          a: "Maximum positive",
          b: "Maximum negative",
          c: "Zero",
          d: "Dependent on depth"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 49,
        text: "A cantilever beam is subjected to a clockwise couple Mo at its free end. The maximum bending moment developed anywhere along the beam is:",
        options: {
          a: "Mo/2",
          b: "Mo",
          c: "Mo * L",
          d: "Zero"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 50,
        text: "The anchorage value of a standard 90-degree bend hook of reinforcing bar diameter d is taken as:",
        options: {
          a: "4 d",
          b: "8 d",
          c: "16 d",
          d: "24 d"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 51,
        text: "When two adjacent columns carry unequal structural loads, the most suitable combined footing design is a:",
        options: {
          a: "Rectangular combined footing",
          b: "Trapezoidal combined footing",
          c: "Strap footing",
          d: "Raft foundation"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 52,
        text: "A structural column is classified as a 'long column' if the direct axial compressive stress is:",
        options: {
          a: "Dominant over bending stresses",
          b: "Negligible compared to bending / buckling stress",
          c: "Directly equal to zero",
          d: "Calculated ignoring slenderness ratio"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 53,
        text: "In standard RCC column designs, the maximum reinforcement ratio of longitudinal steel to the gross concrete cross-section is limited to:",
        options: {
          a: "2% of gross area",
          b: "4% of gross area",
          c: "6% of gross area",
          d: "8% of gross area"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 54,
        text: "The minimum characteristic 28-day concrete cube strength specified for prestressed concrete structures must not be less than:",
        options: {
          a: "150 kg/cm2",
          b: "250 kg/cm2",
          c: "350 kg/cm2",
          d: "500 kg/cm2"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 55,
        text: "According to reinforced concrete column design codes, the design strength of a column with helical ties is increased to how many times the strength of an identical column with lateral ties?",
        options: {
          a: "1.02 times",
          b: "1.05 times",
          c: "1.10 times",
          d: "1.25 times"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 56,
        text: "The minimum reinforcement ratio specified for concrete footings using high-strength deformed steel bars of grade Fe415 is:",
        options: {
          a: "0.12%",
          b: "0.15%",
          c: "0.20%",
          d: "0.25%"
        },
        answer: "a",
        tag: "Design of Structure"
      },
      {
        id: 57,
        text: "The crippling or buckling load of a long column is physical-wise categorized as a:",
        options: {
          a: "Tensile load",
          b: "Torsional load",
          c: "Compressive load",
          d: "Dynamic lateral load"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 58,
        text: "The vertical bending moment and shear force in a standard reinforced concrete footing are resisted by providing:",
        options: {
          a: "Longitudinal shear keys",
          b: "Transverse reinforcement bars",
          c: "Vertical stirrups",
          d: "Pre-stressed steel tendons"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 59,
        text: "The primary structural objective of pre-stressing steel reinforcement in concrete beams is to:",
        options: {
          a: "Increase the self-weight of the concrete beam",
          b: "Impart initial compressive stress in concrete",
          c: "Prevent thermal expansion of aggregate particles",
          d: "Enhance the setting time of cement paste"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 60,
        text: "Which of the following cross-sections is highly efficient and economical for structural steel compression columns?",
        options: {
          a: "Solid circular section",
          b: "Solid square section",
          c: "Tubular section",
          d: "I-beam section"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 61,
        text: "The standard minimum time specified for stripping/removing vertical side formwork of concrete columns after casting is:",
        options: {
          a: "12 hours",
          b: "24 hours",
          c: "3 days",
          d: "7 days"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 62,
        text: "In structural design analysis, the physical term 'magnitude' refers to the:",
        options: {
          a: "Direction of applied load vectors",
          b: "Enormity / scale",
          c: "Thermal expansion coefficient",
          d: "Young's modulus of materials"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 63,
        text: "In welding steel batten plates, the minimum lap length between batten plates and column flanges is:",
        options: {
          a: "2 t",
          b: "4 t",
          c: "6 t",
          d: "8 t"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 64,
        text: "In the working stress design method of steel structures, the design limit check is performed to restrict the stress to:",
        options: {
          a: "Ultimate steel strength",
          b: "Working stress",
          c: "Plastic collapse strength",
          d: "Yield stress of steel bars"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 65,
        text: "When two steel plates are placed one directly below another and joined using spot welds, the joint is termed a:",
        options: {
          a: "Butt weld joint",
          b: "Spot welding",
          c: "Plug weld joint",
          d: "Fillet weld joint"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 66,
        text: "The coefficient of thermal expansion of steel and concrete are:",
        options: {
          a: "Steel is twice that of concrete",
          b: "Almost same",
          c: "Concrete is twice that of steel",
          d: "Steel is ten times that of concrete"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 67,
        text: "The structural steel failure phenomenon known as 'web crippling' in steel beams is defined as:",
        options: {
          a: "Bending failure of flanges under load",
          b: "Failure of thin web under concentrated load",
          c: "Torsional buckling of the top flange",
          d: "Cracking of the welded joints"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 68,
        text: "A fillet weld whose longitudinal axis is oriented parallel to the direction of applied load is termed a:",
        options: {
          a: "Transverse fillet weld",
          b: "Side fillet weld",
          c: "Plug weld",
          d: "Butt weld"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 69,
        text: "Which chemical element primarily controls and enhances the hardness and tensile strength of structural steel?",
        options: {
          a: "Silicon",
          b: "Manganese",
          c: "Carbon",
          d: "Sulphur"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 70,
        text: "For structures subjected to dynamic reversal of design stresses, which type of bolt is highly recommended and suitable?",
        options: {
          a: "Black bolt",
          b: "Friction grip bolt",
          c: "Turned bolt",
          d: "Standard precision bolt"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 71,
        text: "For welding batten plates to column channels, the minimum overlap of the plates on the channel flanges is restricted to:",
        options: {
          a: "2 t",
          b: "4 t",
          c: "6 t",
          d: "8 t"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 72,
        text: "For machine flame-cut edges of steel plates, the minimum edge distance from the center of a bolt hole of diameter d is:",
        options: {
          a: "1.2 x hole diameter",
          b: "1.5 x hole diameter",
          c: "1.7 x hole diameter",
          d: "2.0 x hole diameter"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 73,
        text: "The standard minimum effective length specified for a structural fillet weld must not be less than:",
        options: {
          a: "Two times the weld size",
          b: "Four times the weld size",
          c: "Six times the weld size",
          d: "Ten times the weld size"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 74,
        text: "The standard lap length provided for reinforcing steel bars subjected to direct axial compression must not be less than:",
        options: {
          a: "15 Φ",
          b: "24 Φ",
          c: "30 Φ",
          d: "36 Φ"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 75,
        text: "In timber roof structures, the lowest sloping edge of a pitched roof overhanging the wall is termed the:",
        options: {
          a: "Ridge line",
          b: "Eaves",
          c: "Gable end",
          d: "Valley gutter"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 76,
        text: "The compressive and tensile strength of structural timber is maximum when evaluated in which direction?",
        options: {
          a: "Perpendicular to grain",
          b: "Parallel to grain",
          c: "At 45 degrees to grain",
          d: "Randomly across the cross-section"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 77,
        text: "Which National Building Code (NBC) of Nepal specifically dictates the design rules for low-strength masonry structures in earthquake zones?",
        options: {
          a: "NBC-105",
          b: "NBC-202",
          c: "NBC-203",
          d: "NBC-205"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 78,
        text: "The supreme legal regulatory law governing all building design and construction activities in Nepal is the:",
        options: {
          a: "Nepal Standard (NS)",
          b: "Building Code",
          c: "Municipal Bye-laws",
          d: "Town Planning Act"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 79,
        text: "When purlins are placed directly between the panel points of the principal rafters of a roof truss, the principal rafter must be designed for:",
        options: {
          a: "Axial compression only",
          b: "Axial compression and bending moment",
          c: "Bending moment and shear force only",
          d: "Torsional warping and tension"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 80,
        text: "In seismic design calculations of structures, when considering orthogonal direction forces, what percentage of seismic force in the orthogonal direction must be combined with the main direction force?",
        options: {
          a: "10%",
          b: "30%",
          c: "50%",
          d: "100%"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 81,
        text: "Under timber design codes, a structural timber member having thickness less than or equal to 50mm and width greater than 50mm is termed a:",
        options: {
          a: "Plank",
          b: "Batten",
          c: "Scantling",
          d: "Board"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 82,
        text: "The highest, topmost point or center part of a masonry arch is termed the:",
        options: {
          a: "Soffit",
          b: "Intrados",
          c: "Crown",
          d: "Key block"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 83,
        text: "The type of stone masonry joint specifically provided in stone arches to prevent sliding of adjacent voussoirs is a:",
        options: {
          a: "Butt joint",
          b: "Lap joint",
          c: "Rebated joints",
          d: "Dowelled joint"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 84,
        text: "For a solid timber compression column, the maximum recommended slenderness ratio (Leff/d) is limited to:",
        options: {
          a: "30",
          b: "50",
          c: "80",
          d: "120"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 85,
        text: "The structural parameter modular ratio (m) is analytically defined as the ratio of:",
        options: {
          a: "Permissible stress of steel to permissible stress of concrete",
          b: "Modulus of elasticity of steel to modulus of elasticity of concrete",
          c: "Yield strength of steel to characteristic strength of concrete",
          d: "Area of steel reinforcement to gross concrete area"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 86,
        text: "For economical steel roof truss layouts, the purlins are generally placed at:",
        options: {
          a: "Midpoints of the panel members",
          b: "Panel points of the truss",
          c: "Along the bottom chord members",
          d: "Randomly across the rafter length"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 87,
        text: "The ratio of strain energy stored in a structural bar under a suddenly applied load compared to a gradually applied load is:",
        options: {
          a: "2",
          b: "1",
          c: "4",
          d: "0.5"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 88,
        text: "A wood joint where one member is recessed or cut specifically to fit into a matching groove in another member is a:",
        options: {
          a: "Lap joint",
          b: "Tongue and groove joint",
          c: "Mortise and tenon joint",
          d: "Dovetail joint"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 89,
        text: "According to standard concrete design codes, the minimum tension reinforcement area ratio in concrete beams is computed by:",
        options: {
          a: "0.12 bD / fy",
          b: "0.85 bD / fy",
          c: "0.04 bD / fy",
          d: "0.35 bD / fy"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 90,
        text: "The dead load of a structural system represents a permanent, static action directed downwards, which is categorized as a:",
        options: {
          a: "Lateral load",
          b: "Gravity load",
          c: "Accidental impact action",
          d: "Variable meteorological action"
        },
        answer: "b",
        tag: "Design of Structure"
      },
      {
        id: 91,
        text: "Which of the following testing checks is NOT conducted to verify reinforcing steel bars at a construction site?",
        options: {
          a: "Tensile strength test",
          b: "Bend and re-bend tests",
          c: "Compression tests",
          d: "Unit weight test"
        },
        answer: "c",
        tag: "Design of Structure"
      },
      {
        id: 92,
        text: "According to low-strength masonry house construction guidelines, the gable band must be provided at:",
        options: {
          a: "Plinth level",
          b: "Lintel level",
          c: "Roof level",
          d: "Foundation level"
        },
        answer: "c",
        tag: "Design of Structure"
      }
    ]
  },
  extra6,
  extra7,
  extra8,
  extra9,
  extra10,
  mashed
];


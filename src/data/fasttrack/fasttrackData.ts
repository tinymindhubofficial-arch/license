import { Question, Chapter } from "../../types";
import { fasttrack1Questions } from "./fasttrack1";
import { fasttrack2Questions } from "./fasttrack2";
import { fasttrack3Questions } from "./fasttrack3";
import { fasttrack4Questions } from "./fasttrack4";
import { fasttrack5Questions } from "./fasttrack5";
import { fasttrack6Questions } from "./fasttrack6";
import { fasttrack7Questions } from "./fasttrack7";
import { fasttrack8Questions } from "./fasttrack8";
import { fasttrack9Questions } from "./fasttrack9";
import { fasttrack10Questions } from "./fasttrack10";

export const fasttrackChaptersList: Chapter[] = [
  { id: 1, name: "Topic 01: Basic Civil Engineering", description: "Standard construction materials, brick masonry, hydration process, surveying foundations, estimating, and basic structural concepts." },
  { id: 2, name: "Topic 02: Soil Mechanics and Foundation Engineering", description: "Soil properties, physical classification, permeability, compaction, consolidation, shear strength, bearing capacity, and slope stability." },
  { id: 3, name: "Topic 03: Basic Water Resources & Fluid Mechanics", description: "Fluid properties, pressure measurement, buoyancy, dynamics, pipe flows, open channel hydraulics, hydrology, and drainage systems." },
  { id: 4, name: "Topic 04: Structural Mechanics & Analysis", description: "Advanced structural analysis, shear forces, bending moments, beam deflections, arches, trusses, influence lines, and plastic theory." },
  { id: 5, name: "Topic 05: Design of Structures", description: "Design load combinations, specifications, reinforced concrete, steel elements, timber design, masonry, and earthquake resistance." },
  { id: 6, name: "Topic 06: Water Supply & Sanitation", description: "Water quality parameters, physical & chemical treatment, sewage collection, air pollution, and environmental impact assessments." },
  { id: 7, name: "Topic 07: Irrigation & Drainage", description: "Crop water requirements, canal design, hydraulic structures, river training, waterlogging, and sub-surface drainage." },
  { id: 8, name: "Topic 08: Hydropower Engineering", description: "Project economics, hydrological analysis, dams, spillways, penstocks, surge tanks, and turbines." },
  { id: 9, name: "Topic 09: Transportation Engineering", description: "Traffic studies, geometric design, horizontal/vertical alignment, flexible & rigid pavements, overlays, and bridge diagnostics." },
  { id: 10, name: "Topic 10: Construction Technology & Management", description: "Network diagrams (CPM/PERT), expected time, float calculation, project crashing, construction contracts, and professional practice." }
];

export const fasttrackData: Record<number, Question[]> = {
  1: fasttrack1Questions,
  2: fasttrack2Questions,
  3: fasttrack3Questions,
  4: fasttrack4Questions,
  5: fasttrack5Questions,
  6: fasttrack6Questions,
  7: fasttrack7Questions,
  8: fasttrack8Questions,
  9: fasttrack9Questions,
  10: fasttrack10Questions
};

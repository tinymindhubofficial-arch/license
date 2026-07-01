import { Question, Chapter } from "../../types";
import { chapter1Questions } from "./chapter1Data";
import { chapter2Questions } from "./chapter2Data";
import { chapter3Questions } from "./chapter3Data";
import { chapter4Questions } from "./chapter4Data";
import { chapter5Questions } from "./chapter5Data";
import { chapter6Questions } from "./chapter6Data";
import { chapter7Questions } from "./chapter7Data";
import { chapter8Questions } from "./chapter8Data";
import { chapter9Questions } from "./chapter9Data";
import { chapter10Questions } from "./chapter10Data";

export const chaptersList: Chapter[] = [
  { id: 1, name: "Chapter 1: Basic Civil Engineering", description: "Standard materials, brick masonry, concrete hydration, surveying foundations, estimating, and structural mechanics." },
  { id: 2, name: "Chapter 2: Soil Mechanics and Foundation Engineering", description: "Soil properties, classification, permeability, compaction, consolidation, shear strength, bearing capacity, slope stability, and foundation design." },
  { id: 3, name: "Chapter 3: Water Resources & Fluid Mechanics", description: "Fluid properties, pressure measurement, buoyancy, fluid dynamics, pipe flow, open channel hydraulics, hydrology, and irrigation engineering." },
  { id: 4, name: "Chapter 4: Structural Mechanics & Analysis", description: "Advanced structural mechanics, shear force and bending moment, deflections, arches, trusses, influence lines, and plastic analysis." },
  { id: 5, name: "Chapter 5: Design of Structures", description: "Design load criteria, standard specifications, reinforced concrete, steel structures, timber design, masonry, and earthquake-resistant elements." },
  { id: 6, name: "Chapter 6: Water Supply Sanitation", description: "Water quality parameters, water treatment processes, wastewater collection, air pollution, hydrology, and irrigation engineering." },
  { id: 7, name: "Chapter 7: Irrigation & Drainage", description: "Crop water requirements, canal design and hydraulics, hydraulic structures, river training works, and waterlogging & drainage systems." },
  { id: 8, name: "Chapter 8: Hydropower Engineering", description: "Project economics, hydrological analysis, dams, spillways, penstocks, surge tanks, and turbines." },
  { id: 9, name: "Chapter 9: Transportation", description: "Traffic engineering, highway alignment, geometric design, pavement materials, and highway maintenance." },
  { id: 10, name: "Chapter 10: Project Planning and Implementation", description: "Engineering drawing standards, project scheduling (CPM/PERT networks), technical specifications, and procurement procedures." }
];

export const chaptersData: Record<number, Question[]> = {
  1: chapter1Questions,
  2: chapter2Questions,
  3: chapter3Questions,
  4: chapter4Questions,
  5: chapter5Questions,
  6: chapter6Questions,
  7: chapter7Questions,
  8: chapter8Questions,
  9: chapter9Questions,
  10: chapter10Questions
};

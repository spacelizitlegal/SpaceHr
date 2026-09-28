"use client";

import { useMemo, useState } from "react";
import {
  Users,
  UserCog,
  UserCheck,
  Banknote,
  ShieldCheck,
  PieChart,
  Network,
} from "lucide-react";

type Category = "people" | "process" | "compliance";

const CATEGORY_COLORS: Record<Category, { stroke: string; fill: string; label: string }> = {
  people: { stroke: "#3b82f6", fill: "#1e3a8a", label: "bg-blue-500" },
  process: { stroke: "#10b981", fill: "#065f46", label: "bg-emerald-500" },
  compliance: { stroke: "#f59e0b", fill: "#92400e", label: "bg-amber-500" },
};

interface Entity {
  id: string;
  label: string;
  short: string;
  icon: React.ElementType;
  category: Category;
  relation: string;
  detail: string;
  x: number;
  y: number;
}

const ENTITIES: Entity[] = [
  {
    id: "employees",
    label: "Employees",
    short: "Employees",
    icon: Users,
    category: "people",
    relation: "work & self-serve",
    detail: "People records, roles, departments, leave, attendance, and self-service activity.",
    x: 550,
    y: 96,
  },
  {
    id: "hr-admins",
    label: "HR Administrators",
    short: "HR Admins",
    icon: UserCog,
    category: "people",
    relation: "manage & run",
    detail: "Own payroll runs, org structure, appraisals, policies, and compliance reporting.",
    x: 150,
    y: 300,
  },
  {
    id: "managers",
    label: "Managers",
    short: "Managers",
    icon: UserCheck,
    category: "people",
    relation: "approve & review",
    detail: "Approve leave, conduct appraisals, manage goals, and sign off on team changes.",
    x: 950,
    y: 300,
  },
  {
    id: "payroll",
    label: "Payroll",
    short: "Payroll",
    icon: Banknote,
    category: "process",
    relation: "process pay",
    detail: "Gross-to-net runs, NACHA/EFT files, statutory deductions, and payslips.",
    x: 270,
    y: 540,
  },
  {
    id: "compliance",
    label: "Compliance",
    short: "Compliance",
    icon: ShieldCheck,
    category: "compliance",
    relation: "enforce rules",
    detail: "Statutory tax rules, data privacy, and transparency laws per region and industry.",
    x: 550,
    y: 540,
  },
  {
    id: "finance",
    label: "Finance & Analytics",
    short: "Finance",
    icon: PieChart,
    category: "process",
    relation: "forecast cost",
    detail: "Budget-vs-actual variance, labor cost allocation, and 12-month workforce forecasts.",
    x: 830,
    y: 540,
  },
];

const CX = 550;
const CY = 300;
const NODE_R = 30;

export function KnowledgeGraphDiagram() {
  const [active, setActive] = useState<string | null>(null);

  const edges = useMemo(
    () =>
      ENTITIES.map((e) => ({
        id: e.id,
        x1: CX,
        y1: CY,
        x2: e.x,
        y2: e.y,
        mx: CX + (e.x - CX) * 0.52,
        my: CY + (e.y - CY) * 0.52,
      })),
    [],
  );

  const activeEntity = active ? ENTITIES.find((e) => e.id === active) : null;

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1100 660"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive diagram of the Space HR Knowledge Graph: a central Space HR node connected to employees, HR administrators, managers, payroll, compliance, and finance and analytics, with a data and AI ingestion layer at the bottom feeding the graph."
      >
        <defs>
          <linearGradient id="kg-center-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {edges.map((e) => {
          const entity = ENTITIES.find((en) => en.id === e.id)!;
          const hot = active === e.id;
          const color = CATEGORY_COLORS[entity.category].stroke;
          return (
            <g key={e.id}>
              <line
                x1={e.x1}
                y1={e.y1}
                x2={e.x2}
                y2={e.y2}
                stroke={color}
                strokeWidth={active === null ? 1.25 : hot ? 2.5 : 0.5}
                opacity={active === null ? 0.4 : hot ? 1 : 0.05}
                className="transition-opacity duration-200"
              />
              <text
                x={e.mx}
                y={e.my - 8}
                textAnchor="middle"
                fontSize="11"
                fontWeight={hot ? 700 : 500}
                fill={active === null ? "#94a3b8" : hot ? "#e2e8f0" : "#334155"}
                opacity={active === null ? 0.85 : hot ? 1 : 0.12}
                className="transition-opacity duration-200"
                style={{ paintOrder: "stroke", stroke: "#0b1121", strokeWidth: 3 }}
              >
                {entity.relation}
              </text>
            </g>
          );
        })}

        {ENTITIES.map((entity) => {
          const hot = active === entity.id;
          const dim = active !== null && !hot;
          const color = CATEGORY_COLORS[entity.category].stroke;
          const Icon = entity.icon;
          return (
            <g
              key={entity.id}
              transform={`translate(${entity.x}, ${entity.y})`}
              opacity={dim ? 0.2 : 1}
              className="transition-opacity duration-200 cursor-pointer"
              onPointerEnter={() => setActive(entity.id)}
              onPointerLeave={() => setActive(null)}
              role="button"
              tabIndex={0}
              aria-label={`${entity.label} — ${entity.relation}`}
              onFocus={() => setActive(entity.id)}
              onBlur={() => setActive(null)}
            >
              <circle r={NODE_R} fill={CATEGORY_COLORS[entity.category].fill} stroke={color} strokeWidth={hot ? 3 : 1.5} />
              <Icon x={-9} y={-9} width={18} height={18} color="#ffffff" />
            </g>
          );
        })}

        {ENTITIES.map((entity) => {
          const hot = active === entity.id;
          const dim = active !== null && !hot;
          return (
            <text
              key={`label-${entity.id}`}
              x={entity.x}
              y={entity.y + NODE_R + 17}
              textAnchor="middle"
              fontSize="12"
              fontWeight={hot ? 700 : 500}
              fill={active === entity.id ? "#f8fafc" : "#cbd5e1"}
              opacity={dim ? 0.15 : 1}
              className="transition-opacity duration-200"
              style={{ paintOrder: "stroke", stroke: "#0b1121", strokeWidth: 4 }}
            >
              {entity.short}
            </text>
          );
        })}

        <g transform={`translate(${CX}, ${CY})`} role="img" aria-label="Space HR core">
          <circle r={46} fill="url(#kg-center-grad)" />
          <circle r={46} fill="none" stroke="#e2e8f0" strokeWidth={1.5} opacity={0.6} />
          <Network x={-14} y={-14} width={28} height={28} color="#ffffff" />
        </g>
        <text
          x={CX}
          y={CY + 70}
          textAnchor="middle"
          fontSize="13"
          fontWeight={700}
          fill="#e2e8f0"
          style={{ paintOrder: "stroke", stroke: "#0b1121", strokeWidth: 4 }}
        >
          Space HR Knowledge Graph
        </text>

        <rect
          x={110}
          y={608}
          width={880}
          height={44}
          rx={22}
          fill="rgba(139,92,246,0.08)"
          stroke="#8b5cf6"
          strokeOpacity={0.45}
          strokeWidth={1.5}
        />
        <text
          x={550}
          y={637}
          textAnchor="middle"
          fontSize="12"
          fontWeight={600}
          fill="#c4b5fd"
          letterSpacing="0.05em"
          style={{ paintOrder: "stroke", stroke: "#0b1121", strokeWidth: 3 }}
        >
          HR DATA & AI INGESTION — EMPLOYEES, PAYROLL, POLICIES & AI FLOW INTO THE GRAPH
        </text>
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        {(Object.keys(CATEGORY_COLORS) as Category[]).map((k) => (
          <span
            key={k}
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium"
          >
            <span className={`w-2.5 h-2.5 rounded-full ${CATEGORY_COLORS[k].label}`} />
            {k === "people" ? "People" : k === "process" ? "Core Processes" : "Compliance & Coverage"}
          </span>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
        {activeEntity ? (
          <>
            <span className="font-semibold text-gray-900 dark:text-white">{activeEntity.label}</span>
            {" "}· {activeEntity.relation}
          </>
        ) : (
          "Hover or use Tab on an entity to trace its relationship to Space HR."
        )}
      </p>
    </div>
  );
}
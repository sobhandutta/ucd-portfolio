# Portfolio section — replacement content

**Eyebrow:** ARCHITECTURE

**Headline:** One question in, four specialists behind it — the super-agent pattern

**Body:**

When an operator asks "why is SLA degrading at site-123?", no single model answers. The question is first normalized into a structured intent — what to investigate, over what scope, under what constraints. A super-agent orchestrator then takes over: it classifies the intent, decomposes it into sub-tasks, and routes each one to the domain specialist best equipped to answer — an SLA agent for KPI degradation, a RAN agent for radio metrics, a Core agent for AMF/SMF/UPF health, a Security agent to rule out threats.

The orchestrator deliberately owns no domain logic. Agents declare their capabilities in a registry, and routing is data-driven — new domains plug in without touching the orchestration layer. Each agent works through its own typed tool chain against live telemetry, analytics, and event logs, with RAG over runbooks, past incidents, and configuration baselines keeping every answer grounded in this network's reality rather than general model knowledge.

The design is conservative by default: workflows are read-only, write actions are approval-gated, each agent operates inside its own data boundary, and every sub-task, agent call, and decision lands in an audit trail. Findings come back with confidence scores and inline evidence, correlated into a single response — so the operator gets one answer they can verify, not four reports they have to reconcile.

**Caption (under image):**
Super-agent orchestration — a normalized intent is decomposed and routed to domain agents, grounded by tool chains and RAG, returned as one auditable, evidence-backed answer

---
*Source: C1-1826 — [Research & Implementation] Super-Agent Orchestrator for AI-Based Network Operations*

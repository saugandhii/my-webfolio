import React, { useState } from 'react';

export default function ProjectsTab({ selectedProjectId, onSelectProject }) {
  const [activeVisualTab, setActiveVisualTab] = useState('diagram');

  const handleOpenProject = (id) => {
    setActiveVisualTab('diagram');
    onSelectProject(id);
  };

  const projects = [
    {
      id: 'proj-1',
      code: '01',
      title: 'Multimodal Vision-Language Search Engine',
      subtitle: 'Real-time Vector Search & Embeddings',
      metric: '18ms Latency • 92.4% Recall@10',
      github: 'https://github.com/your-username/vision-search',
      demo: 'https://demo-link.com',
      pills: ['PyTorch', 'FAISS', 'CLIP', 'FastAPI', 'Docker'],

      hook: 'Sub-20ms semantic visual search across 100,000+ unorganized image catalogs without human tagging or manual metadata.',
      problem: 'Traditional keyword search fails when users describe visual attributes like "minimalist warm-toned ceramic vase." Relational database queries cannot capture dense semantic nuances, leading to low search precision and frustrating user experience.',
      
      approach: [
        'Mapped input prompts and raw images into a joint 512-dimensional vector embedding space using OpenAI CLIP (ViT-B/32).',
        'Built a high-throughput vector index with FAISS using Hierarchical Navigable Small World (HNSW) graphs.',
        'Packaged model weights and search endpoints using FastAPI and Docker for reproducible cloud deployments.'
      ],

      architectureNodes: [
        { title: 'User Input', desc: 'Text Prompt / Image File', tag: 'Client' },
        { title: 'CLIP Encoder', desc: 'ViT-B/32 Forward Pass', tag: 'PyTorch' },
        { title: 'FAISS Index', desc: 'HNSW Vector Cosine Match', tag: 'C++' },
        { title: 'FastAPI Backend', desc: 'JSON Output + Similarity Score', tag: 'REST API' }
      ],

      whatBroke: [
        'Memory Overhead during Indexing: Loading 100,000 uncompressed FP32 embeddings into RAM triggered host Out-Of-Memory (OOM) crashes.',
        'Solution: Applied Product Quantization (PQ) to compress vectors into 64-byte codes, reducing memory consumption by 78% with under 1.2% loss in Recall@10.',
        'Multilingual Queries: Standard CLIP text encoder failed on German/French prompts, requiring token normalization.'
      ],

      metrics: [
        { label: 'Query Latency', value: '18ms' },
        { label: 'Recall@10 Accuracy', value: '92.4%' },
        { label: 'Memory Reduction', value: '78%' }
      ],

      doDifferently: 'If re-architecting today, I would fine-tune a multilingual text encoder (OpenCLIP mCLIP) and migrate from static server instances to managed vector databases (Qdrant or Pinecone) for automatic horizontal scaling.'
    },
    {
      id: 'proj-2',
      code: '02',
      title: 'Autonomous Mobile Robot (AMR) SLAM',
      subtitle: 'LiDAR-Based Path Planning & Navigation',
      metric: '< 2.5cm Localization Drift',
      github: 'https://github.com/your-username/amr-slam-ros2',
      demo: null,
      pills: ['ROS2', 'C++', 'Python', 'EKF', 'Gazebo'],

      hook: 'Precise indoor mapping and dynamic obstacle avoidance for mobile robots in GPS-denied warehouse environments.',
      problem: 'Indoor dynamic environments suffer from wheel slip and sensor noise. Relying on wheel odometry alone produces cumulative pose estimation error over time.',
      
      approach: [
        'Fused 2D LiDAR scans, wheel odometry, and IMU data using an Extended Kalman Filter (EKF) in ROS2.',
        'Configured dynamic local and global path planning using Timed Elastic Band (TEB) and A* algorithms.'
      ],

      architectureNodes: [
        { title: 'LiDAR + IMU', desc: '2D Scans & Acceleration', tag: 'Sensors' },
        { title: 'EKF Fusion', desc: 'Pose State Estimation', tag: 'Algorithm' },
        { title: 'Nav2 Planner', desc: 'TEB Local Pathing', tag: 'ROS2' },
        { title: 'Motor Driver', desc: 'Velocity Commands (cmd_vel)', tag: 'Hardware' }
      ],

      whatBroke: [
        'Symmetric Corridor Failure: Long uniform hallways produced ambiguous LiDAR scan matches, warping SLAM point clouds.',
        'Solution: Integrated IMU linear acceleration data into state covariance matrix and positioned visual AprilTag markers at key intersections.'
      ],

      metrics: [
        { label: 'Localization Drift', value: '< 2.5cm' },
        { label: 'Map Resolution', value: '0.05m/px' },
        { label: 'Re-planning Speed', value: '12Hz' }
      ],

      doDifferently: 'I would shift from 2D LiDAR to stereo depth cameras (RealSense D435i) to capture 3D volumetric obstacles.'
    },
    {
      id: 'proj-3',
      code: '03',
      title: 'LLM Fine-Tuning for Medical Summarization',
      subtitle: 'Domain Adaptation with LoRA & PEFT',
      metric: '87.6% ROUGE-L Score',
      github: 'https://github.com/your-username/medical-llm-lora',
      demo: 'https://huggingface.co',
      pills: ['Hugging Face', 'LoRA', 'Unsloth', 'PyTorch'],

      hook: 'Distilling complex doctor-patient clinical consultations into structured, accurate discharge summaries.',
      problem: 'Off-the-shelf open-source LLMs hallucinate medical jargon and produce inconsistent formatting when generating discharge summaries from noisy clinical transcriptions.',
      
      approach: [
        'Fine-tuned Llama-3 8B Instruct on 15,000 anonymized MIMIC-III clinical records.',
        'Applied QLoRA (4-bit NormalFloat quantization) with low-rank adapters (r=16, alpha=32) on attention projection layers (q, v).',
        'Trained using Unsloth framework to accelerate gradient accumulation and optimize GPU memory efficiency.'
      ],

      architectureNodes: [
        { title: 'Clinical Notes', desc: 'Unstructured Text Input', tag: 'Data' },
        { title: 'QLoRA Llama-3', desc: '4-bit Quantized Base Model', tag: 'PyTorch' },
        { title: 'Adapter Weights', desc: 'Rank-16 LoRA Projection', tag: 'PEFT' },
        { title: 'Structured Output', desc: 'JSON Summary & Discharge Plan', tag: 'Output' }
      ],

      whatBroke: [
        'Catastrophic Forgetting & Format Drift: Higher learning rates caused the model to forget base conversational grammar.',
        'Solution: Reduced learning rate to 2e-4 with cosine decay, introduced a small 5% weight for general instruction datasets in training batches, and set strict JSON schema outputs via constrained decoding.'
      ],

      metrics: [
        { label: 'ROUGE-L Score', value: '87.6%' },
        { label: 'GPU VRAM Required', value: '11.8 GB' },
        { label: 'Hallucination Rate', value: '< 1.1%' }
      ],

      doDifferently: 'I would implement a Retrieval-Augmented Generation (RAG) check using a verified medical pharmacology database to validate drug dosages in real time before finalizing output text.'
    }
  ];

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section id="projects" className="py-6 px-4 sm:px-6 animate-fade-in select-none">
      
      {/* 1. OVERVIEW LIST VIEW */}
      {!selectedProjectId ? (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] tracking-tight">
              Featured AI & ML Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#4A2E2B]/75">
              Select a case study to explore its system architecture, failure mode audits, and verified benchmarks.
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => handleOpenProject(proj.id)}
                className="group relative bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] border border-[#C23B58]/30 hover:border-[#C23B58] rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer"
              >
                {/* Left Crimson Notebook Margin Line */}
                <div className="absolute top-0 bottom-0 left-6 w-[1px] bg-[#C23B58]/40 pointer-events-none" />

                <div className="pl-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center space-x-4">
                    {/* Monospace Index Stamp */}
                    <div className="w-11 h-11 rounded-2xl bg-[#4A2E2B]/[0.06] border border-[#C23B58]/35 flex items-center justify-center font-mono text-sm font-black text-[#C23B58] group-hover:border-[#C23B58] transition-colors flex-shrink-0">
                      {proj.code}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                          PROJ_{proj.code}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-[#4A2E2B]/80 bg-[#4A2E2B]/[0.06] border border-[#C23B58]/25 px-2.5 py-0.5 rounded-full">
                          {proj.metric}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-[#4A2E2B] text-base sm:text-lg group-hover:text-[#C23B58] transition-colors mt-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#4A2E2B]/65">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenProject(proj.id);
                    }}
                    className="self-end sm:self-center shrink-0 text-xs font-bold font-mono text-[#C23B58] bg-[#4A2E2B]/[0.06] border border-[#C23B58]/35 group-hover:border-[#C23B58] px-3.5 py-2 rounded-xl transition-colors flex items-center space-x-1.5"
                  >
                    <span>Read Case Study</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (

        /* 2. SEAMLESS CASE STUDY READING VIEW (Strictly 2-Color System: Brown Fill + Crimson Border) */
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in text-[#4A2E2B]">
          
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between border-b border-[#C23B58]/25 pb-3.5">
            <button
              type="button"
              onClick={() => onSelectProject(null)}
              className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#4A2E2B]/75 hover:text-[#C23B58] transition-colors cursor-pointer"
            >
              <span>← Back to Case Studies</span>
            </button>

            <span className="text-[11px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
              READING MODE // PROJ_{currentProject.code}
            </span>
          </div>

          {/* Title & Hook Header */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                {currentProject.subtitle}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight">
                {currentProject.title}
              </h1>
            </div>

            {/* Translucent Brown Fill + Crimson Border Callout */}
            <p className="text-sm sm:text-base font-medium text-[#4A2E2B]/90 leading-relaxed bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] border border-[#C23B58]/35 border-l-4 border-l-[#C23B58] px-4 py-3.5 rounded-r-2xl rounded-l-md italic">
              &ldquo;{currentProject.hook}&rdquo;
            </p>

            {/* Links & Tech Stack Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1 border-b border-dashed border-[#C23B58]/30 pb-5">
              <div className="flex flex-wrap gap-1.5">
                {currentProject.pills.map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-[11px] font-mono font-medium bg-[#4A2E2B]/[0.08] text-[#4A2E2B] px-2.5 py-0.5 rounded-md border border-[#C23B58]/30"
                  >
                    #{pill}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-2.5">
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono font-bold text-[#C23B58] bg-[#4A2E2B]/[0.12] border border-[#C23B58] hover:bg-[#4A2E2B]/[0.18] px-4 py-2 rounded-xl transition-colors"
                  >
                    GitHub Repo ↗
                  </a>
                )}
                {currentProject.demo && (
                  <a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono font-bold text-[#4A2E2B] bg-[#4A2E2B]/[0.06] border border-[#C23B58]/35 hover:border-[#C23B58] hover:text-[#C23B58] px-4 py-2 rounded-xl transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* SECTION 01: THE PROBLEM & CONTEXT */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              01 // THE PROBLEM & CONTEXT
            </h3>
            <p className="text-sm text-[#4A2E2B]/85 leading-relaxed bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] p-4 sm:p-5 rounded-2xl border border-[#C23B58]/30">
              {currentProject.problem}
            </p>
          </div>

          {/* SECTION 02: SYSTEM ARCHITECTURE FLOW */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
                02 // SYSTEM ARCHITECTURE FLOW
              </h3>
              <div className="flex space-x-1 bg-[#4A2E2B]/[0.08] p-1 rounded-xl text-[10px] font-mono font-bold border border-[#C23B58]/30">
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('diagram')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    activeVisualTab === 'diagram'
                      ? 'bg-[#4A2E2B]/[0.14] text-[#C23B58] border border-[#C23B58]'
                      : 'text-[#4A2E2B]/65 hover:text-[#4A2E2B] border border-transparent'
                  }`}
                >
                  Visual Flow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('steps')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    activeVisualTab === 'steps'
                      ? 'bg-[#4A2E2B]/[0.14] text-[#C23B58] border border-[#C23B58]'
                      : 'text-[#4A2E2B]/65 hover:text-[#4A2E2B] border border-transparent'
                  }`}
                >
                  Pipeline Notes
                </button>
              </div>
            </div>

            {activeVisualTab === 'diagram' ? (
              <div className="bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] border border-[#C23B58]/30 rounded-2xl p-5 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
                  {currentProject.architectureNodes.map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className="relative flex flex-col items-center text-center p-3.5 rounded-xl bg-[#4A2E2B]/[0.06] border border-[#C23B58]/30"
                    >
                      <span className="text-[9px] font-mono font-bold text-[#C23B58] bg-[#4A2E2B]/[0.08] border border-[#C23B58]/25 px-2 py-0.5 rounded-full mb-1.5">
                        STEP 0{nIdx + 1}
                      </span>
                      <span className="font-bold text-xs text-[#4A2E2B]">{node.title}</span>
                      <span className="text-[10px] text-[#4A2E2B]/70 mt-1 leading-snug">{node.desc}</span>
                      
                      {nIdx < currentProject.architectureNodes.length - 1 && (
                        <span className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#C23B58] z-10 font-bold">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A2E2B]/85 bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] p-5 rounded-2xl border border-[#C23B58]/30">
                {currentProject.approach.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start space-x-2.5">
                    <span className="text-[#C23B58] font-bold">•</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* SECTION 03: WHAT BROKE & EDGE CASES */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              03 // WHAT BROKE & EDGE CASES
            </h3>
            <div className="space-y-2.5">
              {currentProject.whatBroke.map((item, bIdx) => {
                const isSolution = item.trim().startsWith('Solution:');
                return (
                  <div
                    key={bIdx}
                    className={`text-xs sm:text-sm text-[#4A2E2B]/90 px-4 py-3 rounded-r-xl rounded-l-md bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] border border-[#C23B58]/30 leading-relaxed ${
                      isSolution ? 'border-l-4 border-l-[#C23B58] font-medium' : 'border-l-2 border-l-[#C23B58]/60'
                    }`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 04: BENCHMARK RESULTS */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              04 // RESULTS & VERIFIED METRICS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentProject.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] p-4 rounded-2xl border border-[#C23B58]/30 border-b-4 border-b-[#C23B58] space-y-0.5"
                >
                  <div className="text-2xl font-black text-[#4A2E2B]">{m.value}</div>
                  <div className="text-[10px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 05: RETROSPECTIVE */}
          <div className="space-y-2.5 pb-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              05 // RETROSPECTIVE
            </h3>
            <p className="text-xs sm:text-sm text-[#4A2E2B]/85 italic leading-relaxed bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] p-4 sm:p-5 rounded-2xl border border-[#C23B58]/30">
              &ldquo;{currentProject.doDifferently}&rdquo;
            </p>
          </div>

        </div>
      )}

    </section>
  );
}
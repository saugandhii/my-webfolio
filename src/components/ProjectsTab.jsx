import React, { useState } from 'react';

export default function ProjectsTab({ selectedProjectId, onSelectProject }) {
  const [activeVisualTab, setActiveVisualTab] = useState('diagram');

  const projects = [
    {
      id: 'proj-1',
      title: 'Multimodal Vision-Language Search Engine',
      subtitle: 'Real-time Vector Search & Embeddings',
      metric: '18ms Latency • 92.4% Recall@10',
      github: 'https://github.com/your-username/vision-search',
      demo: 'https://demo-link.com',
      pills: ['PyTorch', 'FAISS', 'CLIP', 'FastAPI', 'Docker'],
      thumbnail: '🖼️',

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
      title: 'Autonomous Mobile Robot (AMR) SLAM',
      subtitle: 'LiDAR-Based Path Planning & Navigation',
      metric: '< 2.5cm Localization Drift',
      github: 'https://github.com/your-username/amr-slam-ros2',
      demo: null,
      pills: ['ROS2', 'C++', 'Python', 'EKF', 'Gazebo'],
      thumbnail: '🤖',

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
      title: 'LLM Fine-Tuning for Medical Summarization',
      subtitle: 'Domain Adaptation with LoRA & PEFT',
      metric: '87.6% ROUGE-L Score',
      github: 'https://github.com/your-username/medical-llm-lora',
      demo: 'https://huggingface.co',
      pills: ['Hugging Face', 'LoRA', 'Unsloth', 'PyTorch'],
      thumbnail: '📄',

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
    <section id="projects" className="py-4 px-2 sm:px-0 animate-fade-in select-none">
      
      {/* 1. OVERVIEW LIST VIEW */}
      {!selectedProjectId ? (
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
              02 // CASE STUDIES
            </span>
          </div>

          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] tracking-tight">
              Featured AI & ML Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#4A2E2B]/75">
              Select a project to explore its architecture, failure mode analysis, and live benchmarks.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            {projects.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="group bg-[#FFFDF6] border border-[#4A2E2B]/15 hover:border-[#C23B58] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F7C8D1]/20 border border-[#C23B58]/20 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform flex-shrink-0">
                      {proj.thumbnail}
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-[#C23B58]">
                          PROJ_0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-[#4A2E2B]/60 bg-[#4A2E2B]/5 px-2 py-0.5 rounded-full">
                          {proj.metric}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-[#4A2E2B] text-base sm:text-lg group-hover:text-[#C23B58] transition-colors mt-0.5">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#4A2E2B]/65">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(proj.id);
                    }}
                    className="self-end sm:self-center text-xs font-bold font-mono text-[#C23B58] group-hover:underline flex items-center space-x-1"
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

        /* 2. SEAMLESS CASE STUDY VIEW SLIDING OVER FIXED CANVAS */
        <div className="max-w-3xl mx-auto space-y-10 animate-fade-in text-[#4A2E2B]">
          
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between border-b border-[#4A2E2B]/15 pb-4">
            <button
              onClick={() => onSelectProject(null)}
              className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#4A2E2B]/70 hover:text-[#C23B58] transition-colors"
            >
              <span>← Back to Case Studies</span>
            </button>

            <span className="text-xs font-mono font-bold text-[#C23B58] uppercase">
              READING MODE // {currentProject.id.toUpperCase()}
            </span>
          </div>

          {/* Title & Hook Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{currentProject.thumbnail}</span>
              <div>
                <span className="text-xs font-mono font-bold text-[#C23B58] uppercase">
                  {currentProject.subtitle}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-[#4A2E2B] leading-tight">
                  {currentProject.title}
                </h1>
              </div>
            </div>

            {/* Hook Paragraph */}
            <p className="text-sm sm:text-base font-medium text-[#4A2E2B]/90 leading-relaxed border-l-4 border-[#C23B58] pl-4 py-1 italic bg-[#FFFDF6] rounded-r-xl border border-[#4A2E2B]/10 shadow-xs">
              "{currentProject.hook}"
            </p>

            {/* Links & Tech Stack Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-dashed border-[#4A2E2B]/15 pb-6">
              <div className="flex flex-wrap gap-1.5">
                {currentProject.pills.map((pill, pIdx) => (
                  <span key={pIdx} className="text-[11px] font-mono font-medium bg-[#FFFDF6] text-[#4A2E2B] px-2.5 py-0.5 rounded-md border border-[#4A2E2B]/15 shadow-2xs">
                    #{pill}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                {currentProject.github && (
                  <a href={currentProject.github} target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-white bg-[#4A2E2B] hover:bg-[#C23B58] px-3.5 py-2 rounded-xl transition-colors shadow-xs">
                    GitHub Repo ↗
                  </a>
                )}
                {currentProject.demo && (
                  <a href={currentProject.demo} target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-[#C23B58] bg-[#FFFDF6] border border-[#C23B58]/30 hover:bg-[#C23B58]/10 px-3.5 py-2 rounded-xl transition-colors shadow-xs">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* SECTION 1: THE PROBLEM */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              01 // THE PROBLEM & CONTEXT
            </h3>
            <p className="text-sm text-[#4A2E2B]/85 leading-relaxed bg-[#FFFDF6] p-4 rounded-xl border border-[#4A2E2B]/10 shadow-2xs">
              {currentProject.problem}
            </p>
          </div>

          <hr className="border-t border-dashed border-[#4A2E2B]/15" />

          {/* SECTION 2: SYSTEM ARCHITECTURE VISUAL */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
                02 // SYSTEM ARCHITECTURE FLOW
              </h3>
              <div className="flex space-x-1 bg-[#FFFDF6] p-1 rounded-lg text-[10px] font-mono font-bold border border-[#4A2E2B]/10">
                <button
                  onClick={() => setActiveVisualTab('diagram')}
                  className={`px-2.5 py-1 rounded-md transition-all ${activeVisualTab === 'diagram' ? 'bg-[#C23B58] text-white' : 'text-[#4A2E2B]/60'}`}
                >
                  Visual Flow
                </button>
                <button
                  onClick={() => setActiveVisualTab('steps')}
                  className={`px-2.5 py-1 rounded-md transition-all ${activeVisualTab === 'steps' ? 'bg-[#C23B58] text-white' : 'text-[#4A2E2B]/60'}`}
                >
                  Pipeline Notes
                </button>
              </div>
            </div>

            {activeVisualTab === 'diagram' ? (
              <div className="bg-[#FFFDF6] border border-[#4A2E2B]/15 rounded-2xl p-6 relative shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {currentProject.architectureNodes.map((node, nIdx) => (
                    <div key={nIdx} className="relative flex flex-col items-center text-center p-3 rounded-xl bg-[#FFFDF6] border border-[#4A2E2B]/10 shadow-2xs">
                      <span className="text-[9px] font-mono font-bold text-[#C23B58] bg-[#C23B58]/10 px-2 py-0.5 rounded-full mb-1">
                        STEP 0{nIdx + 1}
                      </span>
                      <span className="font-bold text-xs text-[#4A2E2B]">{node.title}</span>
                      <span className="text-[10px] text-[#4A2E2B]/70 mt-1">{node.desc}</span>
                      
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
              <ul className="space-y-2 text-xs sm:text-sm text-[#4A2E2B]/85 bg-[#FFFDF6] p-4 rounded-xl border border-[#4A2E2B]/10 shadow-2xs">
                {currentProject.approach.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start space-x-2">
                    <span className="text-[#C23B58] font-bold">•</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <hr className="border-t border-dashed border-[#4A2E2B]/15" />

          {/* SECTION 3: WHAT BROKE / FAILURE MODE ANALYSIS */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              03 // WHAT BROKE & EDGE CASES
            </h3>
            <div className="space-y-2.5">
              {currentProject.whatBroke.map((item, bIdx) => (
                <div key={bIdx} className="text-xs sm:text-sm text-[#4A2E2B]/90 pl-3 border-l-2 border-[#C23B58] py-2 bg-[#FFFDF6] rounded-r-lg border-y border-r border-[#4A2E2B]/10 shadow-2xs">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t border-dashed border-[#4A2E2B]/15" />

          {/* SECTION 4: BENCHMARK RESULTS */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              04 // RESULTS & VERIFIED METRICS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentProject.metrics.map((m, mIdx) => (
                <div key={mIdx} className="bg-[#FFFDF6] p-4 rounded-xl border border-[#4A2E2B]/10 border-b-4 border-b-[#C23B58] shadow-2xs space-y-0.5">
                  <div className="text-2xl font-black text-[#4A2E2B]">{m.value}</div>
                  <div className="text-[10px] font-mono font-bold text-[#C23B58] uppercase">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t border-dashed border-[#4A2E2B]/15" />

          {/* SECTION 5: RETROSPECTIVE */}
          <div className="space-y-2 pb-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23B58]">
              05 // RETROSPECTIVE
            </h3>
            <p className="text-xs sm:text-sm text-[#4A2E2B]/80 italic leading-relaxed bg-[#FFFDF6] p-4 rounded-xl border border-[#4A2E2B]/10 shadow-2xs">
              "{currentProject.doDifferently}"
            </p>
          </div>

        </div>
      )}

    </section>
  );
}
import React from 'react';
import {
  GitPullRequest,
  Code2,
  Video,
  ShoppingCart,
  Shield,
  Zap,
  GraduationCap,
  KeyRound,
  Mail,
} from 'lucide-react';

export default function ProjectThumbnail({ id }) {
  // 1. GitRAG
  if (id === 'gitrag') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0c0d10] p-4 sm:p-5 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none border-b border-neutral-800/80">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-neutral-400">
          <div className="flex items-center gap-2">
            <GitPullRequest className="w-3.5 h-3.5 text-[#d90f1e]" />
            <span className="text-white font-semibold">GitRAG // PR Impact Analysis</span>
            <span className="text-[9px] bg-red-950/80 text-red-400 px-1.5 py-0.5 border border-red-800/50">
              AST N-Hops
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
            <span>pgvector: 0.94 cosine</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 my-3">
          <div className="col-span-7 bg-[#070708] p-3 border border-neutral-800/80 text-[10px] space-y-1 font-mono">
            <div className="text-neutral-500">// Tree-sitter AST Symbol Mapping</div>
            <div className="text-purple-400">function <span className="text-yellow-300">calculateCartTotal</span>(items) {'{'}</div>
            <div className="text-neutral-400 pl-3">return items.reduce((acc, i) =&gt; {'{'}</div>
            <div className="text-red-400 pl-6 bg-red-950/30 border-l border-red-500 -ml-3 pl-9">
              - const tax = applyTax(i.price);
            </div>
            <div className="text-emerald-400 pl-6 bg-emerald-950/30 border-l border-emerald-500 -ml-3 pl-9">
              + const tax = computeJurisdictionTax(i);
            </div>
            <div className="text-neutral-400 pl-3">{'}'}, 0);</div>
            <div className="text-purple-400">{'}'}</div>
          </div>

          <div className="col-span-5 flex flex-col justify-between gap-1.5 text-[9px]">
            <div className="p-2 bg-[#121316] border border-neutral-700/60 text-neutral-300 flex items-center justify-between">
              <span>ROOT SYMBOL</span>
              <span className="text-emerald-400 font-bold">CALLED</span>
            </div>
            <div className="p-2 bg-red-950/30 border border-red-800/60 text-red-200 flex items-center justify-between">
              <span>ORDER_SERVICE</span>
              <span className="text-red-400 font-bold">AFFECTED</span>
            </div>
            <div className="p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-between">
              <span>CHECKOUT_ROUTE</span>
              <span className="text-amber-400 font-bold">2 HOPS</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>BullMQ Worker: Ingestion Completed (142ms)</span>
          </div>
          <span className="text-[#d90f1e] font-semibold">PR COMMENT POSTED</span>
        </div>
      </div>
    );
  }

  // 2. PMSSS Scholarship Management System
  if (id === 'pmsss') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0c0d10] p-4 sm:p-5 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none border-b border-neutral-800/80">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-neutral-400">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#d90f1e]" />
            <span className="text-white font-semibold">PMSSS // Scholarship Workflow Engine</span>
          </div>
          <span className="text-[10px] bg-red-950/80 text-red-400 px-1.5 py-0.5 border border-red-800/50">
            RBAC Portals
          </span>
        </div>

        {/* 6-Stage Lifecycle Pipeline */}
        <div className="my-3 space-y-2.5">
          <div className="flex items-center justify-between text-[9px] text-neutral-500 uppercase px-1">
            <span>MULTI-STAGE LIFECYCLE ENGINE</span>
            <span className="text-emerald-400">STATE: VERIFIED</span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 text-[8.5px] text-center font-mono">
            <div className="p-1.5 bg-[#141416] border border-neutral-800 text-neutral-400">DRAFT</div>
            <div className="p-1.5 bg-[#141416] border border-neutral-800 text-neutral-400">SUBMITTED</div>
            <div className="p-1.5 bg-[#141416] border border-neutral-800 text-amber-400">UNDER VERIF</div>
            <div className="p-1.5 bg-emerald-950/50 border border-emerald-700/80 text-emerald-300 font-bold">VERIFIED</div>
            <div className="p-1.5 bg-[#141416] border border-neutral-800 text-neutral-500 hidden sm:block">DISBURSED</div>
            <div className="p-1.5 bg-[#141416] border border-neutral-800 text-neutral-500 hidden sm:block">ARCHIVED</div>
          </div>

          {/* Role Portals Grid */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-[9px]">
            <div className="p-2 bg-[#121316] border border-neutral-800 text-neutral-300">
              <div className="text-neutral-500 text-[8px]">STUDENT PORTAL</div>
              <div className="text-white font-bold mt-0.5">Live Tracking</div>
            </div>
            <div className="p-2 bg-[#121316] border border-neutral-800 text-neutral-300">
              <div className="text-neutral-500 text-[8px]">SAG BUREAU</div>
              <div className="text-[#d90f1e] font-bold mt-0.5">Doc Verification</div>
            </div>
            <div className="p-2 bg-[#121316] border border-neutral-800 text-neutral-300">
              <div className="text-neutral-500 text-[8px]">FINANCE BUREAU</div>
              <div className="text-emerald-400 font-bold mt-0.5">Disbursement</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>OTP Verification & Cloudinary Docs</span>
          </div>
          <span className="text-white font-semibold">JWT AUTH MIDDLEWARE</span>
        </div>
      </div>
    );
  }

  // 3. AlgoArena
  if (id === 'algoarena') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0c0d10] p-4 sm:p-5 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none border-b border-neutral-800/80">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-neutral-400">
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-[#d90f1e]" />
            <span className="text-white font-semibold">AlgoArena // Technical Interview Platform</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Stream.io Video
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 my-3">
          <div className="col-span-8 bg-[#070708] p-3 border border-neutral-800/80 text-[10px] space-y-1 font-mono">
            <div className="flex items-center justify-between text-neutral-500 mb-1">
              <span>Solution.cpp (Wandbox API)</span>
              <span className="text-emerald-400">ACCEPTED</span>
            </div>
            <div className="text-blue-400">vector&lt;int&gt; <span className="text-yellow-300">twoSum</span>(vector&lt;int&gt;&amp; nums, int target) {'{'}</div>
            <div className="text-neutral-400 pl-3">unordered_map&lt;int, int&gt; mp;</div>
            <div className="text-neutral-400 pl-3">for (int i = 0; i &lt; nums.size(); ++i) {'{'}</div>
            <div className="text-neutral-300 pl-6">int diff = target - nums[i];</div>
            <div className="text-emerald-400 pl-6">if (mp.count(diff)) return {'{'}mp[diff], i{'}'};</div>
            <div className="text-neutral-400 pl-6">mp[nums[i]] = i;</div>
            <div className="text-neutral-400 pl-3">{'}'}</div>
            <div className="text-blue-400">{'}'}</div>
          </div>

          <div className="col-span-4 flex flex-col justify-between gap-2">
            <div className="h-20 bg-neutral-900 border border-neutral-700/80 relative flex items-center justify-center overflow-hidden">
              <div className="absolute top-1 left-1.5 text-[8px] text-neutral-400 bg-black/60 px-1">Interviewer</div>
              <Video className="w-6 h-6 text-neutral-600" />
            </div>
            <div className="h-20 bg-neutral-900 border border-neutral-700/80 relative flex items-center justify-center overflow-hidden">
              <div className="absolute top-1 left-1.5 text-[8px] text-neutral-400 bg-black/60 px-1">Candidate</div>
              <div className="w-6 h-6 rounded-full bg-[#d90f1e]/40 flex items-center justify-center text-white text-[9px] font-bold">NT</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-[10px]">
          <div className="flex items-center gap-2 text-neutral-400">
            <Shield className="w-3 h-3 text-[#d90f1e]" />
            <span>Server Testcases: 12/12 Passed (0 Leakage)</span>
          </div>
          <span className="text-emerald-400 font-bold">JWT httpOnly RBAC</span>
        </div>
      </div>
    );
  }

  // 4. Threadly
  if (id === 'threadly') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0c0d10] p-4 sm:p-5 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none border-b border-neutral-800/80">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-neutral-400">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-3.5 h-3.5 text-[#d90f1e]" />
            <span className="text-white font-semibold">Threadly // E-Commerce & Admin CMS</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 border border-emerald-800/40">
              Stripe Verified
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 my-3">
          <div className="bg-[#121316] border border-neutral-800 p-2.5 flex flex-col justify-between">
            <div className="h-16 bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-500 text-[10px]">
              [CLOUDINARY]
            </div>
            <div className="mt-2 text-[9px] font-sans">
              <div className="text-neutral-200 font-semibold truncate">Oversized Heavy Tee</div>
              <div className="text-[#d90f1e] font-mono font-bold">$48.00</div>
            </div>
          </div>

          <div className="bg-[#121316] border border-neutral-800 p-2.5 flex flex-col justify-between">
            <div className="h-16 bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-500 text-[10px]">
              [CLOUDINARY]
            </div>
            <div className="mt-2 text-[9px] font-sans">
              <div className="text-neutral-200 font-semibold truncate">Raw Denim Jacket</div>
              <div className="text-[#d90f1e] font-mono font-bold">$125.00</div>
            </div>
          </div>

          <div className="bg-[#151214] border border-[#d90f1e]/40 p-2.5 flex flex-col justify-between">
            <div className="h-16 bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-[#d90f1e] text-[10px]">
              [CART STATE]
            </div>
            <div className="mt-2 text-[9px] font-sans">
              <div className="text-neutral-200 font-semibold truncate">Tactical Cargo Pants</div>
              <div className="text-emerald-400 font-mono font-bold">SYNCED TO DB</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-[#d90f1e]" />
            <span>Real-time Context API + MongoDB Persistence</span>
          </div>
          <span className="text-neutral-300 font-semibold">ADMIN RBAC DASHBOARD</span>
        </div>
      </div>
    );
  }

  // 5. Authentication & Authorization System
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0c0d10] p-4 sm:p-5 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none border-b border-neutral-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-neutral-400">
        <div className="flex items-center gap-2">
          <KeyRound className="w-3.5 h-3.5 text-[#d90f1e]" />
          <span className="text-white font-semibold">AuthEngine // MERN Identity & RBAC</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 border border-emerald-800/40">
            Nodemailer Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 my-3">
        {/* Token reset preview */}
        <div className="col-span-7 bg-[#070708] p-3 border border-neutral-800/80 text-[9.5px] space-y-1.5 font-mono">
          <div className="flex items-center gap-1.5 text-neutral-400">
            <Mail className="w-3 h-3 text-[#d90f1e]" />
            <span>Password Reset Token Dispatched</span>
          </div>
          <div className="p-1.5 bg-[#121316] border border-neutral-800 text-neutral-400 truncate">
            /api/auth/reset?token=eyJhbGci...
          </div>
          <div className="text-neutral-500 text-[8.5px]">
            Expires in: 15m // Cryptographically signed
          </div>
        </div>

        {/* Security badges */}
        <div className="col-span-5 flex flex-col justify-between gap-1.5 text-[9px]">
          <div className="p-2 bg-[#121316] border border-neutral-700/60 text-neutral-300 flex items-center justify-between">
            <span>BCRYPT</span>
            <span className="text-emerald-400 font-bold">12 SALTS</span>
          </div>
          <div className="p-2 bg-red-950/30 border border-red-800/60 text-red-200 flex items-center justify-between">
            <span>PROTECTED</span>
            <span className="text-red-400 font-bold">RBAC GUARD</span>
          </div>
          <div className="p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-between">
            <span>COOKIE</span>
            <span className="text-emerald-400 font-bold">HTTPONLY</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400">
        <div className="flex items-center gap-2">
          <Shield className="w-3 h-3 text-emerald-400" />
          <span>Role-Based Route Guard & Token Validation</span>
        </div>
        <span className="text-white font-semibold">JWT AUTH VERIFIED</span>
      </div>
    </div>
  );
}

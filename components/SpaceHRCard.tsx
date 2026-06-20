'use client';

import { Users } from 'lucide-react';
import { useState } from 'react';

export function SpaceHRCard() {
  const [on, setOn] = useState(false);

  return (
    <div
      className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: on ? '0px' : '16px',
        transform: on ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.2s ease-in-out',
        zIndex: on ? 10 : undefined,
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
      }}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
    >
      {/* Rotating inner border — tilted at rest, snaps straight on hover */}
      <div style={{
        position: 'absolute',
        inset: on ? '10px' : '0px',
        border: '1.5px solid rgba(139,92,246,0.65)',
        borderRadius: '6px',
        opacity: on ? 1 : 0,
        transform: on ? 'rotate(0deg)' : 'rotate(10deg)',
        transition: 'all 0.2s ease-in-out',
        pointerEvents: 'none',
      }} />

{/* Content */}
      <div style={{ transition: 'all 0.2s ease-in-out' }}>
        <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center mb-3">
          <Users className="w-5 h-5 text-pink-500" />
        </div>

        <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">Space HR</p>

        <p style={{
          color: 'rgb(167,139,250)',
          fontSize: '9px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: on ? '3px' : '8px',
          opacity: on ? 1 : 0,
          maxHeight: on ? '20px' : '0px',
          marginBottom: on ? '6px' : '0px',
          overflow: 'hidden',
          transition: 'all 0.2s ease-in-out 0.1s',
        }}>
          You are here
        </p>

        <p
          className="text-xs text-gray-500 dark:text-gray-400"
          style={{
            transform: on ? 'translateY(4px)' : 'translateY(0px)',
            transition: 'transform 0.2s ease-in-out 0.1s',
          }}
        >
          AI-powered HR &amp; payroll management
        </p>
      </div>

      {/* Bottom label */}
      <div
        className="bg-white dark:bg-[#111827]"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '10px',
          transform: 'translateX(-50%)',
          fontSize: '6px',
          textTransform: 'uppercase',
          padding: '0 6px 0 8px',
          color: 'rgba(139,92,246,0.85)',
          opacity: on ? 1 : 0,
          letterSpacing: on ? '4px' : '8px',
          transition: 'all 0.2s ease-in-out',
          whiteSpace: 'nowrap',
        }}
      >
        spacehr.net
      </div>
    </div>
  );
}

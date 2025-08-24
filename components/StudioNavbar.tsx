import React from 'react';
import type { NavbarProps } from 'sanity';

export function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      {/* Custom return button */}
      <div style={{ 
        backgroundColor: '#1c1917', 
        padding: '8px 16px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid #44403c',
        fontSize: '14px'
      }}>
        <button
          type="button"
          onClick={() => window.open('/', '_blank')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#f59e0b'}
          onMouseOut={(e) => e.currentTarget.style.color = 'white'}
        >
          <span style={{ fontSize: '16px' }}>←</span>
          <span>Return to Glenn Canin Guitars</span>
        </button>
        
        <span style={{ color: '#a8a29e', fontSize: '12px' }}>
          CMS Studio
        </span>
      </div>
      
      {/* Default Sanity navbar */}
      {props.renderDefault(props)}
    </div>
  );
}
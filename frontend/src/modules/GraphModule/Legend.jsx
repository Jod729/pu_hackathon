const Legend = () => {
  const items = [
    { label: 'Active', color: '#3B82F6', icon: '' },
    { label: 'Flagged', color: '#F97316', icon: '⚠' },
    { label: 'Frozen', color: '#9CA3AF', icon: '🔒' },
    { label: 'Withdrawn', color: '#EF4444', icon: '✗', dashed: true }
  ];

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '12px 16px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      <h4 style={{ margin: '0 0 4px 0', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legend</h4>
      {items.map((item) => (
        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '14px',
            height: '14px',
            borderRadius: '4px',
            background: item.color,
            border: `1.5px ${item.dashed ? 'dashed' : 'solid'} rgba(0,0,0,0.1)`
          }} />
          <span style={{ fontSize: '13px', color: '#334155', fontWeight: 500 }}>
            {item.label} {item.icon}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;

export const STATUS_STYLES = {
  active: { bg: '#3B82F6', border: '#1D4ED8', icon: '' },
  flagged: { bg: '#F97316', border: '#EA580C', icon: '\u26A0' },
  frozen: { bg: '#9CA3AF', border: '#6B7280', icon: '\uD83D\uDD12' },
  withdrawn: { bg: '#EF4444', border: '#B91C1C', icon: '\u2715' }
};

export const graphStyles = [
  {
    selector: 'node',
    style: {
      'label': (node) => {
        const label = node.data('displayLabel') || node.data('id');
        const status = node.data('status');
        const icon = STATUS_STYLES[status]?.icon || '';
        return icon ? `${label} ${icon}` : label;
      },
      'background-color': (node) => STATUS_STYLES[node.data('status')]?.bg || STATUS_STYLES.active.bg,
      'border-width': 2,
      'border-color': (node) => STATUS_STYLES[node.data('status')]?.border || STATUS_STYLES.active.border,
      'border-style': (node) => node.data('status') === 'withdrawn' ? 'dashed' : 'solid',
      'color': '#fff',
      'text-valign': 'center',
      'text-halign': 'center',
      'font-size': 12,
      'width': 60,
      'height': 60,
      'text-outline-width': 2,
      'text-outline-color': '#1e293b'
    }
  },
  {
    selector: 'edge',
    style: {
      'label': '',
      'width': 2.5,
      'line-color': '#94A3B8',
      'target-arrow-color': '#94A3B8',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
      'font-size': 9,
      'text-rotation': 'autorotate',
      'text-margin-y': -14,
      'text-background-color': '#f8fafc',
      'text-background-opacity': 0.92,
      'text-background-padding': 3,
      'text-border-color': '#cbd5e1',
      'text-border-width': 1,
      'text-border-opacity': 0.8,
      'opacity': 0.72,
      'arrow-scale': 1,
      'transition-property': 'line-color, target-arrow-color, opacity, width',
      'transition-duration': '0.2s'
    }
  },
  {
    selector: 'edge.show-label',
    style: {
      'label': 'data(label)',
      'width': 3,
      'line-color': '#475569',
      'target-arrow-color': '#475569',
      'opacity': 1,
      'z-index': 20
    }
  }
];

/* @ds-bundle: {"format":4,"namespace":"GuyanaDesignSystem_c46a8c","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tile","sourcePath":"components/core/Tile.jsx"},{"name":"Accordion","sourcePath":"components/data-display/Accordion.jsx"},{"name":"DataTable","sourcePath":"components/data-display/DataTable.jsx"},{"name":"ScoreBar","sourcePath":"components/data-display/ScoreBar.jsx"},{"name":"Timeline","sourcePath":"components/data-display/Timeline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FieldLabel","sourcePath":"components/forms/FieldLabel.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"VerticalNav","sourcePath":"components/navigation/VerticalNav.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"1ac72831391a","components/core/Badge.jsx":"cafa29e7b8ed","components/core/Button.jsx":"65c44ff77e4d","components/core/Card.jsx":"4a38ab63789d","components/core/Chip.jsx":"998326acb342","components/core/Icon.jsx":"0d9ba0d709a3","components/core/IconButton.jsx":"20c70b64f9a8","components/core/Tile.jsx":"4f69bf11a19d","components/data-display/Accordion.jsx":"b21e01cda982","components/data-display/DataTable.jsx":"fb0428784b47","components/data-display/ScoreBar.jsx":"cdad9dbf0b6b","components/data-display/Timeline.jsx":"643d4693e9e6","components/feedback/Alert.jsx":"5e67cf821a70","components/feedback/Banner.jsx":"22c4da5c6d0a","components/feedback/Modal.jsx":"a674030c543b","components/feedback/Progress.jsx":"b14739f8bde7","components/feedback/Toast.jsx":"e80ea3417f0d","components/feedback/Tooltip.jsx":"a65e492a4227","components/forms/Checkbox.jsx":"c9bde5e99942","components/forms/FieldLabel.jsx":"a85924c892ec","components/forms/Input.jsx":"3c24259cf795","components/forms/Radio.jsx":"a70949586a5d","components/forms/SearchField.jsx":"d3d4c1040d09","components/forms/Select.jsx":"ec9f0d2d83f4","components/forms/Textarea.jsx":"7abefefbea9c","components/forms/Toggle.jsx":"16be71110d9a","components/navigation/Breadcrumb.jsx":"500d41ad4b95","components/navigation/Pagination.jsx":"2a0416ef8189","components/navigation/Stepper.jsx":"6558fd13cc9f","components/navigation/Tabs.jsx":"1f8d585c2211","components/navigation/TopBar.jsx":"544d9d6dbac8","components/navigation/VerticalNav.jsx":"dafff0272b89","ui_kits/launcher-dashboard/AgencyDrawer.jsx":"aae8ee715e9a","ui_kits/launcher-dashboard/AgencyTile.jsx":"362e0f210e4c","ui_kits/launcher-dashboard/App.jsx":"8c3af8615d5d","ui_kits/launcher-dashboard/LauncherGrid.jsx":"5941c4b52f02","ui_kits/launcher-dashboard/PortalTopBar.jsx":"2856cb8ff6f8","ui_kits/launcher-dashboard/Primitives.jsx":"3f8e643ea2b7","ui_kits/launcher-dashboard/ServicesHome.jsx":"6dd557d5a787","ui_kits/launcher-dashboard/SignIn.jsx":"edd38e5ba246","ui_kits/launcher-dashboard/data.jsx":"7e4f8faf6c6e","ui_kits/launcher-dashboard/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GuyanaDesignSystem_c46a8c = window.GuyanaDesignSystem_c46a8c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular initials avatar for people and agency contacts. */
function Avatar({
  initials = 'GG',
  size = 40,
  src,
  alt = '',
  accent,
  style = {},
  ...rest
}) {
  if (src) return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      objectFit: 'cover',
      border: '1px solid var(--surface-border)',
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": alt ? undefined : 'true',
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.36),
      letterSpacing: '0.01em',
      background: accent ? 'var(--agency-accent)' : 'var(--surface-4)',
      color: accent ? 'var(--agency-contrast)' : 'var(--fg-2)',
      ...style
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Flat solid surface: white fill, hairline, soft diffuse shadow. */
function Card({
  level = 1,
  padding = 'var(--space-6)',
  radius = 'var(--radius-lg)',
  interactive,
  tinted,
  as: Tag = 'div',
  children,
  style = {},
  className = '',
  ...rest
}) {
  const backgrounds = {
    1: 'var(--surface-1)',
    2: 'var(--surface-2)',
    3: 'var(--surface-3)',
    4: 'var(--surface-4)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: (interactive ? 'interactive ' : '') + className,
    style: {
      background: tinted ? 'var(--agency-accent-soft)' : backgrounds[level],
      border: '1px solid ' + (tinted ? 'var(--agency-accent-ring)' : 'var(--surface-border)'),
      borderRadius: radius,
      boxShadow: level === 4 ? 'var(--shadow-sm)' : 'var(--shadow-md)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _raf = null;
function scheduleIcons() {
  if (typeof window === 'undefined') return;
  if (_raf) cancelAnimationFrame(_raf);
  _raf = requestAnimationFrame(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

/** Lucide line icon rendered as inline SVG. Inherits currentColor. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '<i data-lucide="' + name + '" style="width:' + size + 'px;height:' + size + 'px;stroke-width:' + strokeWidth + '"></i>';
    scheduleIcons();
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    color: 'var(--status-success)',
    background: 'var(--status-success-bg)',
    icon: 'circle-check'
  },
  info: {
    color: 'var(--status-info)',
    background: 'var(--status-info-bg)',
    icon: 'clock'
  },
  warning: {
    color: 'var(--status-warning)',
    background: 'var(--status-warning-bg)',
    icon: 'triangle-alert'
  },
  error: {
    color: 'var(--status-error)',
    background: 'var(--status-error-bg)',
    icon: 'circle-x'
  },
  neutral: {
    color: 'var(--fg-3)',
    background: 'var(--surface-4)',
    icon: 'circle'
  },
  accent: {
    color: 'var(--agency-accent-strong)',
    background: 'var(--agency-accent-soft)',
    icon: 'circle'
  }
};

/** Small status pill — colour plus a word, never colour alone. */
function Badge({
  tone = 'neutral',
  icon,
  showIcon = true,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: t.color,
      background: t.background,
      ...style
    }
  }, rest), showIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: '14px',
  borderRadius: 'var(--radius-pill)',
  padding: '11px 20px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: 'var(--tr-control)'
};
const SIZES = {
  sm: {
    padding: '7px 14px',
    fontSize: '13px'
  },
  md: {},
  lg: {
    padding: '14px 26px',
    fontSize: '15px'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--agency-accent)',
    color: 'var(--agency-contrast)',
    boxShadow: 'var(--shadow-sm)'
  },
  secondary: {
    background: 'var(--surface-1)',
    color: 'var(--fg-1)',
    borderColor: 'var(--surface-border)',
    boxShadow: 'var(--shadow-xs)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--agency-accent)'
  },
  danger: {
    background: 'var(--status-error)',
    color: '#fff',
    boxShadow: 'var(--shadow-sm)'
  }
};

/** Primary action control. Verb-first, sentence-case labels. */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  selected,
  disabled,
  fullWidth,
  children,
  style = {},
  ...rest
}) {
  const disabledStyle = {
    background: 'var(--neutral-150)',
    color: 'var(--fg-4)',
    borderColor: 'transparent',
    cursor: 'not-allowed',
    boxShadow: 'none'
  };
  const selectedStyle = variant === 'ghost' ? {
    background: 'var(--agency-accent-soft)'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: 'press focus-ring' + (disabled ? '' : ''),
    disabled: disabled,
    style: {
      ...BASE,
      ...SIZES[size],
      ...VARIANTS[variant],
      ...(selected ? selectedStyle : null),
      ...(disabled ? disabledStyle : null),
      ...(fullWidth ? {
        width: '100%'
      } : null),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 17
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill filter / segment toggle. */
function Chip({
  active,
  icon,
  count,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "press focus-ring",
    "aria-pressed": !!active,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '8px 15px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'var(--tr-control)',
      background: active ? 'var(--agency-accent-soft)' : 'var(--surface-1)',
      color: active ? 'var(--agency-accent-strong)' : 'var(--fg-2)',
      border: '1px solid ' + (active ? 'var(--agency-accent-ring)' : 'var(--surface-border)'),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }) : null, /*#__PURE__*/React.createElement("span", null, children), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: active ? 'var(--agency-accent)' : 'var(--fg-3)'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only control for toolbars and top bars. Always needs a label. */
function IconButton({
  icon,
  label,
  size = 40,
  badge,
  variant = 'secondary',
  style = {},
  ...rest
}) {
  const fills = {
    secondary: {
      background: 'var(--surface-1)',
      border: '1px solid var(--surface-border)',
      color: 'var(--fg-2)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--fg-2)'
    },
    accent: {
      background: 'var(--agency-accent)',
      border: '1px solid transparent',
      color: 'var(--agency-contrast)',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "press focus-ring",
    "aria-label": label,
    title: label,
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'var(--tr-control)',
      ...fills[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 7,
      right: 7,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--status-error)',
      border: '2px solid var(--surface-1)'
    }
  }) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Launcher tile — the portal's primary entry point into an agency service. */
function Tile({
  icon = 'landmark',
  title,
  agency,
  description,
  meta,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "interactive focus-ring",
    "data-agency": agency,
    style: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)',
      width: '100%',
      background: 'var(--surface-1)',
      border: '1px solid var(--surface-border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--agency-accent-soft)',
      color: 'var(--agency-accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--fg-1)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--fg-3)',
      lineHeight: 'var(--leading-normal)'
    }
  }, description) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'var(--agency-accent)'
    }
  }, meta) : null);
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tile.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Collapsible sections for guidance, FAQs and long form help. */
function Accordion({
  items = [],
  defaultOpen = 0,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      background: 'var(--surface-1)',
      border: '1px solid var(--surface-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.title,
      style: {
        borderTop: i === 0 ? 'none' : '1px solid var(--surface-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-expanded": on,
      onClick: () => setOpen(on ? -1 : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        textAlign: 'left',
        padding: '15px 18px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: 14.5,
        fontWeight: 600,
        color: on ? 'var(--agency-accent-strong)' : 'var(--fg-1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? 'var(--agency-accent)' : 'var(--fg-3)',
        display: 'inline-flex',
        transform: 'rotate(' + (on ? 180 : 0) + 'deg)',
        transition: 'transform var(--dur-fast) var(--ease-spring)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 18
    }))), on ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 18px 16px',
        fontSize: 14,
        color: 'var(--fg-2)',
        lineHeight: 'var(--leading-normal)'
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data-display/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Record list: hairline rows, sticky-looking head, optional row actions. */
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  emptyLabel = 'Nothing to show yet',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      background: 'var(--surface-1)',
      border: '1px solid var(--surface-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-2)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '11px 16px',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      borderBottom: '1px solid var(--surface-border)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, c.label, c.sortable ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevrons-up-down",
    size: 13
  }) : null))))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: '28px 16px',
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--fg-3)'
    }
  }, emptyLabel)) : rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i,
    onClick: () => onRowClick && onRowClick(r),
    style: {
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '13px 16px',
      fontSize: 14,
      color: 'var(--fg-1)',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--surface-hairline)'
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ScoreBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Segmented allocation / score bar with a legend. */
function ScoreBar({
  segments = [],
  height = 10,
  showLegend = true,
  style = {},
  ...rest
}) {
  const total = segments.reduce((s, x) => s + (x.value || 0), 0) || 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: '100%',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height,
      borderRadius: 999,
      overflow: 'hidden',
      background: 'var(--neutral-150)'
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s.label || i,
    title: s.label,
    style: {
      width: s.value / total * 100 + '%',
      background: s.color || 'var(--agency-accent)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }))), showLegend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 18px'
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s.label || i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12.5,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: s.color || 'var(--agency-accent)'
    }
  }), s.label, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--fg-1)',
      fontWeight: 700
    }
  }, Math.round(s.value / total * 100), "%")))) : null);
}
Object.assign(__ds_scope, { ScoreBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ScoreBar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: 'var(--status-success)',
  info: 'var(--status-info)',
  warning: 'var(--status-warning)',
  error: 'var(--status-error)',
  accent: 'var(--agency-accent)',
  neutral: 'var(--fg-4)'
};

/** Vertical activity trail for an application or record. */
function Timeline({
  items = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const color = TONES[it.tone || 'neutral'];
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 999,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-1)',
        border: '1px solid ' + color,
        color
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || 'circle',
      size: 14
    })), last ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        background: 'var(--neutral-150)',
        minHeight: 22
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--fg-1)'
      }
    }, it.title), it.description ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--fg-2)',
        lineHeight: 'var(--leading-normal)'
      }
    }, it.description) : null, it.meta ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--fg-3)'
      }
    }, it.meta) : null));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    color: 'var(--status-success)',
    bg: 'var(--status-success-bg)',
    icon: 'circle-check'
  },
  info: {
    color: 'var(--status-info)',
    bg: 'var(--status-info-bg)',
    icon: 'info'
  },
  warning: {
    color: 'var(--status-warning)',
    bg: 'var(--status-warning-bg)',
    icon: 'triangle-alert'
  },
  error: {
    color: 'var(--status-error)',
    bg: 'var(--status-error-bg)',
    icon: 'circle-x'
  }
};

/** Inline message tied to a form or a record. Say what happened and what to do next. */
function Alert({
  tone = 'info',
  title,
  children,
  action,
  onDismiss,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === 'error' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: 12,
      padding: '13px 15px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + t.color,
      background: 'var(--surface-1)',
      boxShadow: 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      flex: 'none',
      marginTop: 1,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--fg-1)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--fg-2)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4
    }
  }, action) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--fg-3)',
      cursor: 'pointer',
      display: 'inline-flex',
      height: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-width page-level notice — service outages, deadlines, maintenance. */
function Banner({
  tone = 'info',
  icon,
  children,
  action,
  onDismiss,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--status-info-bg)',
      color: 'var(--status-info)'
    },
    warning: {
      bg: 'var(--status-warning-bg)',
      color: 'var(--status-warning)'
    },
    error: {
      bg: 'var(--status-error-bg)',
      color: 'var(--status-error)'
    },
    accent: {
      bg: 'var(--agency-accent-soft)',
      color: 'var(--agency-accent-strong)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '13px 20px',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'inline-flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || 'megaphone',
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--fg-1)'
    }
  }, children), action, onDismiss ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--fg-3)',
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred dialog over a dimmed page. Use for confirmations and short forms. */
function Modal({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style = {},
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(19,28,46,0.38)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-1)',
      border: '1px solid var(--surface-border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      fontFamily: 'var(--font-sans)',
      animation: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--fg-1)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--fg-2)',
      lineHeight: 'var(--leading-normal)'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--fg-3)',
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Determinate bar or ring for uploads, completion and quotas. */
function Progress({
  value = 0,
  max = 100,
  variant = 'bar',
  size = 64,
  label,
  showValue,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  if (variant === 'ring') {
    const stroke = Math.max(5, Math.round(size * 0.11));
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      role: "img",
      "aria-label": label || Math.round(pct * 100) + '%',
      style: {
        transform: 'rotate(-90deg)'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--neutral-150)",
      strokeWidth: stroke
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--agency-accent)",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: c * (1 - pct),
      style: {
        transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out)'
      }
    })), label || showValue ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--fg-2)'
      }
    }, label || Math.round(pct * 100) + '%') : null);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, rest), label || showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-2)'
    }
  }, Math.round(pct * 100), "%") : null) : null, /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height: 8,
      borderRadius: 999,
      background: 'var(--neutral-150)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct * 100 + '%',
      height: '100%',
      borderRadius: 999,
      background: 'var(--agency-accent)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    chip: 'rgba(31,138,91,0.25)',
    glyph: '#6fe0a8',
    icon: 'circle-check'
  },
  error: {
    chip: 'rgba(196,61,61,0.25)',
    glyph: '#ffa3a3',
    icon: 'circle-x'
  },
  info: {
    chip: 'rgba(42,111,219,0.25)',
    glyph: '#9cc2ff',
    icon: 'info'
  }
};

/** Transient confirmation on the dark ink surface. */
function Toast({
  tone = 'success',
  title,
  description,
  undoLabel,
  onUndo,
  onDismiss,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--neutral-900)',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      background: t.chip,
      color: t.glyph
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      flex: 1
    }
  }, title, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 400,
      fontSize: 12.5,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 1
    }
  }, description) : null), undoLabel ? /*#__PURE__*/React.createElement("button", {
    onClick: onUndo,
    style: {
      border: 'none',
      background: 'transparent',
      fontSize: 13,
      fontWeight: 700,
      color: '#9cc2ff',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, undoLabel) : null, onDismiss ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,0.6)',
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover/focus hint on the dark ink surface. */
function Tooltip({
  label,
  placement = 'top',
  children,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px, -50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px, -50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 40,
      ...pos,
      padding: '7px 11px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--neutral-900)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-fast) var(--ease-out)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with an accent-filled box and inline label. */
function Checkbox({
  checked,
  indeterminate,
  label,
  description,
  disabled,
  onChange,
  style = {},
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "press",
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--tr-control)',
      background: on ? 'var(--agency-accent)' : 'var(--surface-1)',
      border: '1px solid ' + (on ? 'var(--agency-accent)' : 'var(--surface-border)'),
      color: 'var(--agency-contrast)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: indeterminate ? 'minus' : 'check',
    size: 14
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FieldLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + optional requirement marker and helper text for any control. */
function FieldLabel({
  htmlFor,
  label,
  required,
  hint,
  error,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--fg-2)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-error)',
      marginLeft: 3
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--status-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--fg-3)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { FieldLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FieldLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text control: 12px radius, hairline border, accent focus ring. */
function Input({
  icon,
  iconRight,
  error,
  pill,
  disabled,
  style = {},
  wrapperStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = error ? 'var(--status-error)' : focus ? 'var(--agency-accent)' : 'var(--surface-border)';
  const glyph = error ? 'var(--status-error)' : focus ? 'var(--agency-accent)' : 'var(--fg-3)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: disabled ? 'var(--surface-2)' : 'var(--surface-1)',
      border: '1px solid ' + border,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
      padding: '11px 14px',
      boxShadow: focus ? '0 0 0 3px var(--agency-accent-ring)' : 'var(--shadow-xs)',
      transition: 'var(--tr-control)',
      ...wrapperStyle
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: glyph,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)',
      width: '100%',
      ...style
    }
  }, rest)), iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: glyph,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single radio option; group several under one name. */
function Radio({
  checked,
  label,
  description,
  name,
  value,
  disabled,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "press",
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: description ? 2 : 0,
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--tr-control)',
      background: 'var(--surface-1)',
      border: '1px solid ' + (checked ? 'var(--agency-accent)' : 'var(--surface-border)'),
      boxShadow: 'var(--shadow-xs)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'var(--agency-accent)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill search field with clear button — the portal's main way in. */
function SearchField({
  value = '',
  onValueChange,
  placeholder = 'Search services, agencies, forms…',
  size = 'lg',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-1)',
      border: '1px solid ' + (focus ? 'var(--agency-accent)' : 'var(--surface-border)'),
      borderRadius: 'var(--radius-pill)',
      padding: big ? '14px 20px' : '9px 14px',
      boxShadow: focus ? '0 0 0 3px var(--agency-accent-ring)' : 'var(--shadow-sm)',
      transition: 'var(--tr-control)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: focus ? 'var(--agency-accent)' : 'var(--fg-3)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: big ? 20 : 17
  })), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onValueChange && onValueChange(e.target.value),
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: big ? 16 : 14,
      color: 'var(--fg-1)'
    }
  }, rest)), value ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Clear search",
    onClick: () => onValueChange && onValueChange(''),
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--fg-3)',
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled as a portal field. */
function Select({
  options = [],
  error,
  disabled,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = error ? 'var(--status-error)' : focus ? 'var(--agency-accent)' : 'var(--surface-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: disabled ? 'var(--surface-2)' : 'var(--surface-1)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--agency-accent-ring)' : 'var(--shadow-xs)',
      transition: 'var(--tr-control)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      border: 'none',
      background: 'transparent',
      outline: 'none',
      padding: '11px 38px 11px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      color: 'var(--fg-3)',
      pointerEvents: 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text control with an optional character counter. */
function Textarea({
  error,
  rows = 4,
  maxLength,
  value,
  disabled,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = error ? 'var(--status-error)' : focus ? 'var(--agency-accent)' : 'var(--surface-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: disabled ? 'var(--surface-2)' : 'var(--surface-1)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--agency-accent-ring)' : 'var(--shadow-xs)',
      transition: 'var(--tr-control)'
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    maxLength: maxLength,
    value: value,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      border: 'none',
      background: 'transparent',
      outline: 'none',
      resize: 'vertical',
      padding: '11px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 'var(--leading-normal)',
      color: 'var(--fg-1)',
      ...style
    }
  }, rest)), maxLength ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      bottom: 8,
      fontSize: 11,
      color: 'var(--fg-4)'
    }
  }, String(value || '').length, "/", maxLength) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill switch for instant on/off settings. */
function Toggle({
  checked,
  label,
  disabled,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'var(--tr-control)',
      background: checked ? 'var(--agency-accent)' : 'var(--neutral-200)',
      boxShadow: 'inset 0 1px 2px rgba(19,28,46,0.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 999,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: 'translateX(' + (checked ? 18 : 0) + 'px)',
      transition: 'transform var(--dur-fast) var(--ease-spring)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--fg-1)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Trail back to the launcher. Last item is the current page. */
function Breadcrumb({
  items = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.label
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        fontWeight: 600,
        color: 'var(--fg-1)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        color: 'var(--fg-3)',
        textDecoration: 'none',
        fontWeight: 500
      }
    }, it.label), last ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-4)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function pages(page, total) {
  if (total <= 7) return Array.from({
    length: total
  }, (_, i) => i + 1);
  if (page <= 4) return [1, 2, 3, 4, 5, 'gap', total];
  if (page >= total - 3) return [1, 'gap', total - 4, total - 3, total - 2, total - 1, total];
  return [1, 'gap', page - 1, page, page + 1, 'gap', total];
}

/** Page controls with a record-range summary. */
function Pagination({
  page = 1,
  totalPages = 1,
  rangeLabel,
  onChange,
  style = {},
  ...rest
}) {
  const btn = (extra = {}) => ({
    minWidth: 36,
    height: 36,
    padding: '0 8px',
    borderRadius: 999,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--fg-2)',
    background: 'transparent',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'var(--tr-control)',
    ...extra
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      ...style
    }
  }, rest), rangeLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, rangeLabel) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => onChange && onChange(page - 1),
    style: btn(page <= 1 ? {
      color: 'var(--fg-4)',
      cursor: 'not-allowed'
    } : {})
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 17
  })), pages(page, totalPages).map((n, i) => n === 'gap' ? /*#__PURE__*/React.createElement("span", {
    key: 'g' + i,
    style: btn({
      cursor: 'default',
      color: 'var(--fg-4)'
    })
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-current": n === page ? 'page' : undefined,
    onClick: () => onChange && onChange(n),
    style: btn(n === page ? {
      background: 'var(--agency-accent)',
      color: 'var(--agency-contrast)'
    } : {})
  }, n)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Next page",
    disabled: page >= totalPages,
    onClick: () => onChange && onChange(page + 1),
    style: btn(page >= totalPages ? {
      color: 'var(--fg-4)',
      cursor: 'not-allowed'
    } : {})
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 17
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered application progress — done / current / upcoming. */
function Stepper({
  steps = [],
  current = 0,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), steps.map((s, i) => {
    const label = typeof s === 'string' ? s : s.label;
    const done = i < current;
    const cur = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 999,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        transition: 'var(--tr-control)',
        background: done ? 'var(--agency-accent)' : cur ? 'var(--agency-accent-soft)' : 'var(--neutral-150)',
        color: done ? '#fff' : cur ? 'var(--agency-accent-strong)' : 'var(--fg-4)',
        border: '1px solid ' + (cur ? 'var(--agency-accent)' : 'var(--surface-border)')
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 15
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: cur ? 'var(--agency-accent-strong)' : 'var(--fg-3)',
        whiteSpace: 'nowrap'
      }
    }, label)), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        margin: '0 4px 18px',
        background: i < current ? 'var(--agency-accent)' : 'var(--neutral-200)'
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline or pill tabs for switching views inside a panel. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style = {},
  ...rest
}) {
  const active = value != null ? value : items[0] && items[0].id;
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "tablist",
      style: {
        display: 'inline-flex',
        gap: 8,
        ...style
      }
    }, rest), items.map(t => {
      const on = t.id === active;
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        role: "tab",
        "aria-selected": on,
        onClick: () => onChange && onChange(t.id),
        className: "press focus-ring",
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          padding: '8px 16px',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'var(--tr-control)',
          background: on ? 'var(--agency-accent)' : 'var(--surface-1)',
          color: on ? 'var(--agency-contrast)' : 'var(--fg-2)',
          border: '1px solid ' + (on ? 'transparent' : 'var(--surface-border)')
        }
      }, t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: t.icon,
        size: 16
      }) : null, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 26,
      borderBottom: '1px solid var(--surface-hairline)',
      ...style
    }
  }, rest), items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        padding: '0 2px 12px',
        marginBottom: -1,
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        borderBottom: '2px solid ' + (on ? 'var(--agency-accent)' : 'transparent'),
        color: on ? 'var(--agency-accent-strong)' : 'var(--fg-3)',
        transition: 'var(--tr-control)'
      }
    }, t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }) : null, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: '1px 7px',
        borderRadius: 999,
        background: on ? 'var(--agency-accent-soft)' : 'var(--neutral-150)',
        color: on ? 'var(--agency-accent-strong)' : 'var(--fg-3)'
      }
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Portal chrome: seal + wordmark, optional search, actions and user. */
function TopBar({
  title = 'Guyana Government Portal',
  sealSrc,
  links = [],
  search,
  user,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '12px 24px',
      background: 'var(--surface-1)',
      borderBottom: '1px solid var(--surface-border)',
      boxShadow: 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      flex: 'none'
    }
  }, sealSrc ? /*#__PURE__*/React.createElement("img", {
    src: sealSrc,
    alt: "",
    style: {
      width: 36,
      height: 36,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--agency-accent)',
      color: 'var(--agency-contrast)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "landmark",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--fg-1)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, title)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginLeft: 'var(--space-4)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      fontSize: 14,
      fontWeight: l.active ? 600 : 500,
      color: l.active ? 'var(--agency-accent-strong)' : 'var(--fg-2)',
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 380
    }
  }, search), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "bell",
    label: "Notifications",
    variant: "ghost",
    badge: true
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "circle-help",
    label: "Help",
    variant: "ghost"
  }), user ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      paddingLeft: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: user.initials,
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, user.name), user.role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--fg-3)'
    }
  }, user.role) : null), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      color: 'var(--fg-3)'
    }
  })) : null));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/VerticalNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Left rail navigation, optionally grouped under section headings. */
function VerticalNav({
  sections = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), sections.map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: s.label || si,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, s.label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--fg-4)',
      padding: '0 12px 6px'
    }
  }, s.label) : null, (s.items || []).map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange && onChange(it.id),
      "aria-current": on ? 'page' : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        textAlign: 'left',
        padding: '9px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        transition: 'var(--tr-control)',
        background: on ? 'var(--agency-accent-soft)' : 'transparent',
        color: on ? 'var(--agency-accent-strong)' : 'var(--fg-2)'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: on ? 'var(--agency-accent)' : 'var(--fg-4)'
      }
    }, it.count) : null);
  }))));
}
Object.assign(__ds_scope, { VerticalNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/VerticalNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/AgencyDrawer.jsx
try { (() => {
// AgencyDrawer.jsx — themed slide-in panel showing an agency's services.
function AgencyDrawer({
  agency,
  onClose,
  onStart
}) {
  const [closing, setClosing] = React.useState(false);
  const close = () => {
    setClosing(true);
    setTimeout(onClose, 240);
  };
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  if (!agency) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: 'drawer__scrim' + (closing ? ' is-closing' : ''),
    onClick: close,
    "data-agency": agency.theme
  }, /*#__PURE__*/React.createElement(GlassCard, {
    level: 3,
    strong: true,
    className: 'drawer' + (closing ? ' is-closing' : ''),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer__accent"
  }), /*#__PURE__*/React.createElement("button", {
    className: "drawer__close",
    onClick: close,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "drawer__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "drawer__chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: agency.icon,
    size: 30
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "drawer__cat"
  }, agency.cat), /*#__PURE__*/React.createElement("h2", {
    className: "drawer__name"
  }, agency.name))), /*#__PURE__*/React.createElement("p", {
    className: "drawer__desc"
  }, agency.desc), /*#__PURE__*/React.createElement("div", {
    className: "drawer__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metapill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 14
  }), agency.services.length, " services"), /*#__PURE__*/React.createElement("span", {
    className: "metapill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), "Avg. 5 working days"), /*#__PURE__*/React.createElement("span", {
    className: "metapill metapill--on"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 14
  }), "Online")), /*#__PURE__*/React.createElement("div", {
    className: "drawer__seclabel"
  }, "Available services"), /*#__PURE__*/React.createElement("div", {
    className: "drawer__services"
  }, agency.services.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "svcrow",
    onClick: () => onStart(agency, s)
  }, /*#__PURE__*/React.createElement("span", {
    className: "svcrow__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    className: "svcrow__name"
  }, s), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    className: "svcrow__go"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "drawer__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "external-link"
  }, "Visit agency site"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: () => onStart(agency, agency.services[0])
  }, "Start a new application"))));
}
window.AgencyDrawer = AgencyDrawer;

// Toast -----------------------------------------------------------------------
function Toast({
  toast
}) {
  if (!toast) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "toast",
    "data-agency": toast.theme
  }, /*#__PURE__*/React.createElement("span", {
    className: "toast__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "toast__title"
  }, toast.title), /*#__PURE__*/React.createElement("div", {
    className: "toast__sub"
  }, toast.sub)));
}
window.Toast = Toast;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/AgencyDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/AgencyTile.jsx
try { (() => {
// AgencyTile.jsx — the launcher tile, themed per agency. Used by both layouts.
function AgencyTile({
  agency,
  onOpen,
  variant = 'card'
}) {
  // variant: 'card' (full, with description) | 'compact' (icon + name) | 'list'
  if (variant === 'list') {
    return /*#__PURE__*/React.createElement("button", {
      className: "agtile agtile--list",
      "data-agency": agency.theme,
      onClick: () => onOpen(agency)
    }, /*#__PURE__*/React.createElement("span", {
      className: "agtile__chip"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: agency.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      className: "agtile__listbody"
    }, /*#__PURE__*/React.createElement("span", {
      className: "agtile__name"
    }, agency.name), /*#__PURE__*/React.createElement("span", {
      className: "agtile__desc"
    }, agency.desc)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      className: "agtile__chev"
    }));
  }
  if (variant === 'compact') {
    return /*#__PURE__*/React.createElement("button", {
      className: "agtile agtile--compact",
      "data-agency": agency.theme,
      onClick: () => onOpen(agency)
    }, /*#__PURE__*/React.createElement("span", {
      className: "agtile__chip agtile__chip--lg"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: agency.icon,
      size: 28
    })), /*#__PURE__*/React.createElement("span", {
      className: "agtile__name"
    }, agency.name), /*#__PURE__*/React.createElement("span", {
      className: "agtile__count"
    }, agency.services.length, " services"));
  }
  return /*#__PURE__*/React.createElement("button", {
    className: "agtile",
    "data-agency": agency.theme,
    onClick: () => onOpen(agency)
  }, /*#__PURE__*/React.createElement("span", {
    className: "agtile__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "agtile__chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: agency.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "agtile__short"
  }, agency.short)), /*#__PURE__*/React.createElement("span", {
    className: "agtile__name"
  }, agency.name), /*#__PURE__*/React.createElement("span", {
    className: "agtile__desc"
  }, agency.desc), /*#__PURE__*/React.createElement("span", {
    className: "agtile__go"
  }, "Open ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })));
}
window.AgencyTile = AgencyTile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/AgencyTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/App.jsx
try { (() => {
// App.jsx — composes the Unified Launcher Dashboard + Tweaks (layout variations).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "layout": "services",
  "glass": "frosted",
  "accent": "#1f7a4d",
  "density": "comfortable",
  "corners": "soft",
  "backdrop": "image"
} /*EDITMODE-END*/;

// glass presets -> override the core glass vars on the portal root
const GLASS_PRESETS = {
  frosted: {
    '--glass-bg-1': 'rgba(255,255,255,0.55)',
    '--glass-bg-2': 'rgba(255,255,255,0.42)',
    '--glass-bg-3': 'rgba(255,255,255,0.68)',
    '--glass-blur': 'blur(20px) saturate(140%)',
    '--glass-blur-strong': 'blur(36px) saturate(150%)'
  },
  clear: {
    '--glass-bg-1': 'rgba(255,255,255,0.38)',
    '--glass-bg-2': 'rgba(255,255,255,0.26)',
    '--glass-bg-3': 'rgba(255,255,255,0.52)',
    '--glass-blur': 'blur(28px) saturate(160%)',
    '--glass-blur-strong': 'blur(44px) saturate(170%)'
  },
  solid: {
    '--glass-bg-1': 'rgba(255,255,255,0.80)',
    '--glass-bg-2': 'rgba(255,255,255,0.72)',
    '--glass-bg-3': 'rgba(255,255,255,0.90)',
    '--glass-blur': 'blur(10px) saturate(120%)',
    '--glass-blur-strong': 'blur(16px) saturate(130%)'
  }
};
const RADIUS_PRESETS = {
  soft: {},
  sharp: {
    '--radius-md': '8px',
    '--radius-lg': '10px',
    '--radius-xl': '12px',
    '--radius-2xl': '14px',
    '--radius-pill': '8px'
  }
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [screen, setScreen] = React.useState('signin');
  const [nav, setNav] = React.useState('home');
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('All services');
  const [agency, setAgency] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const citizen = {
    name: 'Renata Persaud',
    first: 'Renata',
    initials: 'RP',
    id: 'National ID · 04-1182557'
  };

  // filter agencies by query + category
  const agencies = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return window.AGENCIES.filter(a => {
      const inCat = category === 'All services' || a.cat === category;
      const inQ = !q || a.name.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.short.toLowerCase().includes(q) || a.services.some(s => s.toLowerCase().includes(q));
      return inCat && inQ;
    });
  }, [query, category]);
  const fireToast = (ag, svc) => {
    setAgency(null);
    setToast({
      theme: ag.theme,
      title: 'Application started',
      sub: `${svc} · ${ag.name}`
    });
    clearTimeout(window.__toastT);
    window.__toastT = setTimeout(() => setToast(null), 3200);
  };

  // build root style from tweaks
  const accent = t.accent || '#1f7a4d';
  const rootStyle = {
    '--agency-accent': accent,
    '--agency-accent-strong': `color-mix(in srgb, ${accent}, #06121f 20%)`,
    '--agency-accent-soft': `color-mix(in srgb, ${accent}, transparent 88%)`,
    '--agency-accent-ring': `color-mix(in srgb, ${accent}, transparent 66%)`,
    '--agency-tint': accent,
    ...GLASS_PRESETS[t.glass],
    ...RADIUS_PRESETS[t.corners]
  };
  const cls = ['portal', `is-${t.density}`, `bg-${t.backdrop}`].join(' ');
  const columns = t.density === 'compact' ? t.layout === 'launcher' ? 5 : 3 : t.layout === 'launcher' ? 4 : 2;
  const layoutProps = {
    agencies,
    query,
    setQuery,
    category,
    setCategory,
    onOpen: setAgency,
    citizen,
    columns
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: rootStyle,
    "data-agency": "national"
  }, /*#__PURE__*/React.createElement("div", {
    className: "portal__bg"
  }), screen === 'signin' ? /*#__PURE__*/React.createElement(SignIn, {
    onSignIn: () => {
      setScreen('portal');
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PortalTopBar, {
    nav: nav,
    onNav: k => {
      setNav(k);
    },
    query: query,
    onQuery: setQuery,
    onSignOut: () => setScreen('signin'),
    citizen: citizen
  }), /*#__PURE__*/React.createElement("main", {
    className: "portal__main"
  }, t.layout === 'launcher' ? /*#__PURE__*/React.createElement(LauncherGrid, layoutProps) : /*#__PURE__*/React.createElement(ServicesHome, layoutProps)), /*#__PURE__*/React.createElement("footer", {
    className: "portal__footer"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Government of the Co-operative Republic of Guyana"), /*#__PURE__*/React.createElement("span", {
    className: "portal__footdot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", {
    className: "portal__footdot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Accessibility"), /*#__PURE__*/React.createElement("span", {
    className: "portal__footdot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Built on Salesforce Experience Cloud"))), agency && /*#__PURE__*/React.createElement(AgencyDrawer, {
    agency: agency,
    onClose: () => setAgency(null),
    onStart: fireToast
  }), /*#__PURE__*/React.createElement(Toast, {
    toast: toast
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Layout"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Home layout",
    value: t.layout,
    options: [{
      value: 'services',
      label: 'Services home'
    }, {
      value: 'launcher',
      label: 'App launcher'
    }],
    onChange: v => setTweak('layout', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Density",
    value: t.density,
    options: [{
      value: 'comfortable',
      label: 'Comfortable'
    }, {
      value: 'compact',
      label: 'Compact'
    }],
    onChange: v => setTweak('density', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Glass & shape"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Glass",
    value: t.glass,
    options: [{
      value: 'frosted',
      label: 'Frosted'
    }, {
      value: 'clear',
      label: 'Clear'
    }, {
      value: 'solid',
      label: 'Solid'
    }],
    onChange: v => setTweak('glass', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Corners",
    value: t.corners,
    options: [{
      value: 'soft',
      label: 'Soft'
    }, {
      value: 'sharp',
      label: 'Sharp'
    }],
    onChange: v => setTweak('corners', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Backdrop",
    value: t.backdrop,
    options: [{
      value: 'image',
      label: 'Seal'
    }, {
      value: 'mesh',
      label: 'Mesh'
    }, {
      value: 'plain',
      label: 'Plain'
    }],
    onChange: v => setTweak('backdrop', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Portal accent"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ['#1f7a4d', '#1f5fae', '#0f8a86', '#4f46c4', '#b9791b', '#2b3a67'],
    onChange: v => setTweak('accent', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/LauncherGrid.jsx
try { (() => {
// LauncherGrid.jsx — Variation A: search-forward "app launcher".
// A calm hero with one big search, category chips, and a dense grid of agency tiles.
function LauncherGrid({
  agencies,
  query,
  setQuery,
  category,
  setCategory,
  onOpen,
  citizen,
  columns
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "launcher"
  }, /*#__PURE__*/React.createElement("section", {
    className: "launcher__hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--agency-accent)'
    }
  }, "Welcome back, ", citizen.first), /*#__PURE__*/React.createElement("h1", {
    className: "launcher__h1"
  }, "What do you need to do today?"), /*#__PURE__*/React.createElement("p", {
    className: "launcher__lead"
  }, "Search across every ministry and agency, or pick a service below. You only sign in once."), /*#__PURE__*/React.createElement("div", {
    className: "launcher__search"
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: query,
    onChange: setQuery
  })), /*#__PURE__*/React.createElement("div", {
    className: "launcher__suggest"
  }, /*#__PURE__*/React.createElement("span", null, "Popular:"), ['Renew licence', 'File taxes', 'Birth certificate', 'Passport'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "launcher__sugbtn",
    onClick: () => setQuery(s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "launcher__chips"
  }, window.CATEGORIES.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    active: category === c,
    onClick: () => setCategory(c)
  }, c))), agencies.length === 0 ? /*#__PURE__*/React.createElement(GlassCard, {
    level: 2,
    className: "launcher__empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-x",
    size: 28,
    style: {
      color: 'var(--fg-3)'
    }
  }), /*#__PURE__*/React.createElement("div", null, "No agencies match \u201C", query, "\u201D."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "rotate-ccw",
    onClick: () => {
      setQuery('');
      setCategory('All services');
    }
  }, "Clear filters")) : /*#__PURE__*/React.createElement("div", {
    className: 'launcher__grid launcher__grid--' + columns
  }, agencies.map(a => /*#__PURE__*/React.createElement(AgencyTile, {
    key: a.id,
    agency: a,
    onOpen: onOpen,
    variant: "compact"
  }))));
}
window.LauncherGrid = LauncherGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/LauncherGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/PortalTopBar.jsx
try { (() => {
// PortalTopBar.jsx — sticky frosted portal navigation.
function PortalTopBar({
  nav,
  onNav,
  query,
  onQuery,
  onSignOut,
  citizen
}) {
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar__brand",
    onClick: () => onNav('home'),
    role: "button"
  }, /*#__PURE__*/React.createElement("img", {
    className: "topbar__seal",
    src: "assets/gog-seal.webp",
    width: "40",
    height: "40",
    alt: "Seal of the Government of Guyana"
  }), /*#__PURE__*/React.createElement("div", {
    className: "topbar__brandtext"
  }, /*#__PURE__*/React.createElement("span", {
    className: "topbar__t"
  }, "Guyana Government Portal"), /*#__PURE__*/React.createElement("span", {
    className: "topbar__s"
  }, "One front door to every service"))), /*#__PURE__*/React.createElement("nav", {
    className: "topbar__nav"
  }, [['home', 'Home'], ['services', 'Services'], ['apps', 'My applications']].map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: 'topbar__navlink' + (nav === k ? ' is-on' : ''),
    onClick: () => onNav(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "topbar__search"
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: query,
    onChange: onQuery,
    size: "sm",
    placeholder: "Search the portal\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "topbar__actions"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "globe",
    label: "Language"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    badge: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "topbar__user"
  }, /*#__PURE__*/React.createElement("button", {
    className: "topbar__userbtn",
    onClick: () => setMenu(m => !m)
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: citizen.initials,
    size: 38
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 15,
    style: {
      color: 'var(--fg-3)'
    }
  })), menu && /*#__PURE__*/React.createElement(GlassCard, {
    level: 3,
    strong: true,
    className: "topbar__menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar__menuhead"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: citizen.initials,
    size: 42
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "topbar__menuname"
  }, citizen.name), /*#__PURE__*/React.createElement("div", {
    className: "topbar__menumeta"
  }, citizen.id))), /*#__PURE__*/React.createElement("div", {
    className: "topbar__menusep"
  }), [['user', 'My profile'], ['file-text', 'My applications'], ['settings', 'Settings'], ['life-buoy', 'Help & support']].map(([ic, l]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: "topbar__menuitem"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  }), l)), /*#__PURE__*/React.createElement("div", {
    className: "topbar__menusep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "topbar__menuitem topbar__menuitem--danger",
    onClick: onSignOut
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 17
  }), "Sign out"))))));
}
window.PortalTopBar = PortalTopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/PortalTopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Primitives.jsx — shared glass UI primitives for the launcher dashboard.

// ---- Icon (Lucide, inline SVG) --------------------------------------------
let _iconRaf = null;
function scheduleIcons() {
  if (_iconRaf) cancelAnimationFrame(_iconRaf);
  _iconRaf = requestAnimationFrame(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
function Icon({
  name,
  size = 20,
  className = '',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      scheduleIcons();
    }
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: 'ic ' + className,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  });
}

// ---- GlassCard -------------------------------------------------------------
function GlassCard({
  level = 1,
  strong = false,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const bg = {
    1: 'var(--glass-bg-1)',
    2: 'var(--glass-bg-2)',
    3: 'var(--glass-bg-3)',
    4: 'var(--glass-bg-4)'
  }[level];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'glasscard ' + className,
    style: {
      background: bg,
      WebkitBackdropFilter: strong ? 'var(--glass-blur-strong)' : 'var(--glass-blur)',
      backdropFilter: strong ? 'var(--glass-blur-strong)' : 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--elevation-glass)',
      ...style
    }
  }, rest), children);
}

// ---- Button ----------------------------------------------------------------
function Button({
  variant = 'primary',
  icon,
  iconRight,
  children,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `btn btn--${variant} ${className}`,
    style: style
  }, rest), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17
  }), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: 17
  }));
}

// ---- IconButton ------------------------------------------------------------
function IconButton({
  icon,
  badge,
  label,
  size = 40,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "iconbtn",
    "aria-label": label,
    style: {
      width: size,
      height: size
    }
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }), badge ? /*#__PURE__*/React.createElement("span", {
    className: "iconbtn__dot"
  }) : null);
}

// ---- Chip (filter) ---------------------------------------------------------
function Chip({
  active,
  icon,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: 'chip' + (active ? ' chip--active' : '')
  }, rest), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, children));
}

// ---- StatusBadge -----------------------------------------------------------
const STATUS = {
  approved: {
    label: 'Approved',
    icon: 'circle-check',
    color: 'var(--status-success)',
    bg: 'var(--status-success-bg)'
  },
  'in-review': {
    label: 'In review',
    icon: 'clock',
    color: 'var(--status-info)',
    bg: 'var(--status-info-bg)'
  },
  action: {
    label: 'Action needed',
    icon: 'triangle-alert',
    color: 'var(--status-warning)',
    bg: 'var(--status-warning-bg)'
  },
  rejected: {
    label: 'Rejected',
    icon: 'circle-x',
    color: 'var(--status-error)',
    bg: 'var(--status-error-bg)'
  }
};
function StatusBadge({
  status
}) {
  const s = STATUS[status] || STATUS.approved;
  return /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: {
      color: s.color,
      background: s.bg
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 14
  }), " ", s.label);
}

// ---- Avatar / Seal ---------------------------------------------------------
function Avatar({
  initials = 'RP',
  size = 38
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.36
    }
  }, initials);
}
function Seal({
  size = 36
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seal",
    style: {
      width: size,
      height: size,
      borderRadius: size * 0.26
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: size * 0.56,
    style: {
      color: '#fff'
    }
  }));
}

// ---- SearchField -----------------------------------------------------------
function SearchField({
  value,
  onChange,
  placeholder = 'Search services, agencies, forms…',
  size = 'lg'
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: 'searchfield' + (focus ? ' is-focus' : '') + (size === 'sm' ? ' searchfield--sm' : '')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: size === 'sm' ? 17 : 20
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }), value ? /*#__PURE__*/React.createElement("button", {
    className: "searchfield__clear",
    onClick: () => onChange('')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(window, {
  Icon,
  GlassCard,
  Button,
  IconButton,
  Chip,
  StatusBadge,
  Avatar,
  Seal,
  SearchField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/ServicesHome.jsx
try { (() => {
// ServicesHome.jsx — Variation B: editorial "services + announcements" home.
// Quick actions, a personalised "your applications" rail, announcements, then agencies.
function ServicesHome({
  agencies,
  query,
  setQuery,
  category,
  setCategory,
  onOpen,
  citizen,
  columns
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement(GlassCard, {
    level: 2,
    strong: true,
    className: "home__hero",
    "data-agency": "national"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home__herotext"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--agency-accent)'
    }
  }, "Good morning, ", citizen.first), /*#__PURE__*/React.createElement("h1", {
    className: "home__h1"
  }, "Your government, in one place"), /*#__PURE__*/React.createElement("p", {
    className: "home__lead"
  }, "Apply, pay, and track services across every agency \u2014 with a single secure sign-in."), /*#__PURE__*/React.createElement("div", {
    className: "home__search"
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: query,
    onChange: setQuery
  }))), /*#__PURE__*/React.createElement("div", {
    className: "home__quick"
  }, window.QUICK_ACTIONS.map(q => /*#__PURE__*/React.createElement("button", {
    key: q.label,
    className: "quickaction",
    "data-agency": q.theme
  }, /*#__PURE__*/React.createElement("span", {
    className: "quickaction__chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: q.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", null, q.label))))), /*#__PURE__*/React.createElement("div", {
    className: "home__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home__sechead"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-h2"
  }, "Agencies & services"), /*#__PURE__*/React.createElement("div", {
    className: "home__chips"
  }, window.CATEGORIES.slice(0, 6).map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    active: category === c,
    onClick: () => setCategory(c)
  }, c)))), agencies.length === 0 ? /*#__PURE__*/React.createElement(GlassCard, {
    level: 2,
    className: "launcher__empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-x",
    size: 28,
    style: {
      color: 'var(--fg-3)'
    }
  }), /*#__PURE__*/React.createElement("div", null, "No agencies match \u201C", query, "\u201D."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "rotate-ccw",
    onClick: () => {
      setQuery('');
      setCategory('All services');
    }
  }, "Clear filters")) : /*#__PURE__*/React.createElement("div", {
    className: 'home__grid home__grid--' + columns
  }, agencies.map(a => /*#__PURE__*/React.createElement(AgencyTile, {
    key: a.id,
    agency: a,
    onOpen: onOpen,
    variant: "card"
  })))), /*#__PURE__*/React.createElement("aside", {
    className: "home__side"
  }, /*#__PURE__*/React.createElement(GlassCard, {
    level: 1,
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ds-h3"
  }, "Your applications"), /*#__PURE__*/React.createElement("button", {
    className: "panel__link"
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    className: "panel__list"
  }, window.RECENT_APPS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.ref,
    className: "recent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "recent__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "recent__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recent__service"
  }, r.service), /*#__PURE__*/React.createElement("div", {
    className: "recent__meta"
  }, r.agency, " \xB7 ", r.ref)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: r.status
  }))))), /*#__PURE__*/React.createElement(GlassCard, {
    level: 1,
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ds-h3"
  }, "Announcements")), /*#__PURE__*/React.createElement("div", {
    className: "panel__list"
  }, window.ANNOUNCEMENTS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "announce"
  }, /*#__PURE__*/React.createElement("span", {
    className: "announce__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "announce__tag"
  }, a.tag, " \xB7 ", a.time), /*#__PURE__*/React.createElement("div", {
    className: "announce__title"
  }, a.title)))))))));
}
window.ServicesHome = ServicesHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/ServicesHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/SignIn.jsx
try { (() => {
// SignIn.jsx — the portal "front door" (citizen sign-in).
function SignIn({
  onSignIn
}) {
  const [id, setId] = React.useState('');
  const [method, setMethod] = React.useState('id'); // 'id' | 'otp'
  return /*#__PURE__*/React.createElement("div", {
    className: "signin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "signin__watermark",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(GlassCard, {
    level: 3,
    strong: true,
    className: "signin__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "signin__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "signin__seal",
    src: "assets/gog-seal.webp",
    width: "56",
    height: "56",
    alt: "Seal of the Government of Guyana"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "signin__title"
  }, "Guyana Government Portal"), /*#__PURE__*/React.createElement("div", {
    className: "signin__sub"
  }, "Sign in to access every government service"))), /*#__PURE__*/React.createElement("div", {
    className: "signin__seg"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'signin__segbtn' + (method === 'id' ? ' is-on' : ''),
    onClick: () => setMethod('id')
  }, "National ID"), /*#__PURE__*/React.createElement("button", {
    className: 'signin__segbtn' + (method === 'otp' ? ' is-on' : ''),
    onClick: () => setMethod('otp')
  }, "Phone / OTP")), /*#__PURE__*/React.createElement("label", {
    className: "signin__label"
  }, method === 'id' ? 'National ID number' : 'Mobile number'), /*#__PURE__*/React.createElement("div", {
    className: "signin__field"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: method === 'id' ? 'id-card' : 'smartphone',
    size: 19,
    style: {
      color: 'var(--fg-3)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: id,
    onChange: e => setId(e.target.value),
    placeholder: method === 'id' ? 'e.g. 04-XXXXXXX' : 'e.g. +592 600 0000'
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "log-in",
    className: "signin__submit",
    onClick: () => onSignIn(id)
  }, "Continue securely"), /*#__PURE__*/React.createElement("button", {
    className: "signin__link"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "help-circle",
    size: 15
  }), "I don\u2019t have a National ID"), /*#__PURE__*/React.createElement("div", {
    className: "signin__trust"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), " Secured by the Government of Guyana \xB7 Single sign-on across all agencies")), /*#__PURE__*/React.createElement("div", {
    className: "signin__foot"
  }, "Powered by Salesforce Experience Cloud \xB7 SLDS 2 themed"));
}
window.SignIn = SignIn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/SignIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/data.jsx
try { (() => {
// data.jsx — content for the Guyana Government Portal launcher.
// Agencies map to theme keys defined in colors_and_type.css (data-agency).

window.AGENCIES = [{
  id: 'gra',
  theme: 'revenue',
  name: 'Guyana Revenue Authority',
  short: 'GRA',
  icon: 'receipt',
  cat: 'Tax & money',
  desc: 'File taxes, pay duties, check your refund status.',
  services: ['File individual income tax', 'Pay VAT & duties', 'Check refund status', 'Request a TIN', 'Download tax certificate']
}, {
  id: 'transport',
  theme: 'transport',
  name: 'Transport & Licensing',
  short: 'GRA-L',
  icon: 'car',
  cat: 'Identity & licensing',
  desc: 'Renew driver’s licences and register vehicles.',
  services: ['Renew driver’s licence', 'Register a vehicle', 'Book a driving test', 'Pay fixed penalties', 'Replace a lost licence']
}, {
  id: 'health',
  theme: 'health',
  name: 'Ministry of Health',
  short: 'MOH',
  icon: 'heart-pulse',
  cat: 'Health',
  desc: 'Book appointments and request health records.',
  services: ['Book a clinic appointment', 'Request medical records', 'Apply for a health card', 'Vaccination certificate', 'Find a facility']
}, {
  id: 'education',
  theme: 'education',
  name: 'Ministry of Education',
  short: 'MOE',
  icon: 'graduation-cap',
  cat: 'Education',
  desc: 'Enrolment, examination results and scholarships.',
  services: ['School enrolment', 'Check examination results', 'Apply for a scholarship', 'Request a transcript', 'Teacher registration']
}, {
  id: 'home',
  theme: 'home-affairs',
  name: 'Ministry of Home Affairs',
  short: 'MOHA',
  icon: 'shield',
  cat: 'Justice & safety',
  desc: 'Passports, national IDs and police clearance.',
  services: ['Apply for a passport', 'National ID card', 'Police clearance certificate', 'Report non-emergency', 'Firearm licence']
}, {
  id: 'registrar',
  theme: 'national',
  name: 'General Register Office',
  short: 'GRO',
  icon: 'file-text',
  cat: 'Identity & licensing',
  desc: 'Births, deaths and marriage certificates.',
  services: ['Birth certificate', 'Marriage certificate', 'Death certificate', 'Register a birth', 'Correct a record']
}, {
  id: 'deeds',
  theme: 'finance',
  name: 'Deeds & Commercial Registry',
  short: 'DCRA',
  icon: 'building-2',
  cat: 'Business',
  desc: 'Register a business and file company documents.',
  services: ['Register a business name', 'Incorporate a company', 'File annual returns', 'Search the registry', 'Register a deed']
}, {
  id: 'lands',
  theme: 'agriculture',
  name: 'Lands & Surveys / Agriculture',
  short: 'GLSC',
  icon: 'sprout',
  cat: 'Land & agriculture',
  desc: 'Land leases, surveys and agriculture permits.',
  services: ['Apply for a land lease', 'Request a survey', 'Pay land rent', 'Crop & livestock permits', 'Report a boundary issue']
}, {
  id: 'labour',
  theme: 'labour',
  name: 'Ministry of Labour',
  short: 'MOL',
  icon: 'briefcase',
  cat: 'Social',
  desc: 'Jobs, NIS contributions and work permits.',
  services: ['Find a job vacancy', 'Check NIS contributions', 'Apply for a work permit', 'File a labour complaint', 'Register a workplace']
}, {
  id: 'immigration',
  theme: 'home-affairs',
  name: 'Citizenship & Immigration',
  short: 'CIU',
  icon: 'plane',
  cat: 'Justice & safety',
  desc: 'Visas, residency and citizenship services.',
  services: ['Apply for a visa', 'Residency permit', 'Citizenship application', 'Extend a stay', 'Re-entry permit']
}, {
  id: 'water',
  theme: 'health',
  name: 'Guyana Water Inc.',
  short: 'GWI',
  icon: 'droplet',
  cat: 'Social',
  desc: 'Pay water bills and request connections.',
  services: ['Pay water bill', 'Request a new connection', 'Report a leak', 'Update account details', 'View usage history']
}, {
  id: 'finance',
  theme: 'finance',
  name: 'Ministry of Finance',
  short: 'MOF',
  icon: 'landmark',
  cat: 'Tax & money',
  desc: 'Public payments, procurement and budget.',
  services: ['Make a government payment', 'View procurement notices', 'Supplier registration', 'Budget documents', 'Bond & treasury info']
}];
window.CATEGORIES = ['All services', 'Tax & money', 'Identity & licensing', 'Health', 'Education', 'Business', 'Justice & safety', 'Land & agriculture', 'Social'];
window.ANNOUNCEMENTS = [{
  icon: 'calendar-clock',
  tag: 'Revenue',
  title: 'Income tax filing deadline extended to 30 April 2026',
  time: '2 days ago'
}, {
  icon: 'plane',
  tag: 'Home Affairs',
  title: 'Online passport renewal is now live nationwide',
  time: '5 days ago'
}, {
  icon: 'wrench',
  tag: 'Portal',
  title: 'Scheduled maintenance Sunday, 2:00–4:00 (GYT)',
  time: '1 week ago'
}];
window.QUICK_ACTIONS = [{
  icon: 'credit-card',
  label: 'Pay a bill',
  theme: 'finance'
}, {
  icon: 'car',
  label: 'Renew a licence',
  theme: 'transport'
}, {
  icon: 'calendar-plus',
  label: 'Book appointment',
  theme: 'health'
}, {
  icon: 'search-check',
  label: 'Track application',
  theme: 'national'
}];
window.RECENT_APPS = [{
  ref: 'G-48201',
  agency: 'Transport & Licensing',
  service: 'Driver’s licence renewal',
  status: 'approved',
  icon: 'car'
}, {
  ref: 'G-47988',
  agency: 'Guyana Revenue Authority',
  service: 'Income tax filing 2025',
  status: 'in-review',
  icon: 'receipt'
}, {
  ref: 'G-47720',
  agency: 'General Register Office',
  service: 'Birth certificate request',
  status: 'action',
  icon: 'file-text'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher-dashboard/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher-dashboard/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tile = __ds_scope.Tile;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.ScoreBar = __ds_scope.ScoreBar;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FieldLabel = __ds_scope.FieldLabel;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.VerticalNav = __ds_scope.VerticalNav;

})();

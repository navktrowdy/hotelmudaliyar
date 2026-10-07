/* @ds-bundle: {"format":4,"namespace":"HotelMudaliyarDesignSystem_f1309a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Ornament","sourcePath":"components/core/Ornament.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"DietDot","sourcePath":"components/menu/DietDot.jsx"},{"name":"DishCard","sourcePath":"components/menu/DishCard.jsx"},{"name":"MenuItemRow","sourcePath":"components/menu/MenuItemRow.jsx"},{"name":"MenuSection","sourcePath":"components/menu/MenuSection.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0b1e8ca89d45","components/core/Button.jsx":"c5e2e216d08f","components/core/Card.jsx":"90ca47ff0ec6","components/core/Icon.jsx":"b442845a8b5e","components/core/IconButton.jsx":"d733ee858583","components/core/Logo.jsx":"4c29fee14283","components/core/Ornament.jsx":"ffcd152838f3","components/core/SectionHeading.jsx":"23d324f6af16","components/core/Tag.jsx":"fe42656c2979","components/feedback/Dialog.jsx":"05f8ece6bab6","components/feedback/Notice.jsx":"a0c4e91b94fc","components/forms/Checkbox.jsx":"4d4437a6a1f2","components/forms/Input.jsx":"04ac2919096b","components/forms/QuantityStepper.jsx":"8e7869fcbc56","components/forms/Select.jsx":"7eb3e2472db5","components/menu/DietDot.jsx":"2594f7caef3e","components/menu/DishCard.jsx":"2e1be8583eda","components/menu/MenuItemRow.jsx":"5a6ca397d311","components/menu/MenuSection.jsx":"ad4369a90e5c","components/navigation/NavBar.jsx":"bdefd5d73df0","components/navigation/TabBar.jsx":"5aaf50dfbb84","ui_kits/menu_card/MenuPage.jsx":"965d2fd7d174","ui_kits/menu_card/doc-page.js":"371bab66f42d","ui_kits/order_app/CartScreen.jsx":"35c8ede4a822","ui_kits/order_app/MenuScreen.jsx":"369d810e9b9e","ui_kits/website/Footer.jsx":"b42fa97ebeb3","ui_kits/website/Halls.jsx":"6ae26fb5770d","ui_kits/website/Hero.jsx":"e1f13ecfc003","ui_kits/website/MenuBoard.jsx":"90e89249e659","ui_kits/website/Signatures.jsx":"31d28455a3d4","ui_kits/website/Story.jsx":"37cfef83c5df"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HotelMudaliyarDesignSystem_f1309a = window.HotelMudaliyarDesignSystem_f1309a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADS = {
  none: 0,
  sm: 'var(--space-4)',
  md: 'var(--space-5)',
  lg: 'var(--space-6)'
};

/** Surface container: cream plate, 10px radius, hairline border, soft maroon-tinted shadow. */
function Card({
  variant = 'plain',
  padding = 'md',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    plain: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-body)'
    },
    outlined: {
      background: 'transparent',
      border: '1px solid var(--border-gold)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--surface-inverse-field)',
      border: '1px solid var(--maroon-600)',
      color: 'var(--text-on-inverse)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding: PADS[padding],
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...skins[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = () => typeof window !== 'undefined' && window.HM_ASSET_BASE || '../..';
const CACHE = typeof window !== 'undefined' ? window.__hmIconCache = window.__hmIconCache || {} : {};

/** Lucide glyph inlined as SVG so it inherits currentColor. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  className,
  ...rest
}) {
  const [markup, setMarkup] = React.useState(CACHE[name] || null);
  React.useEffect(() => {
    if (CACHE[name]) {
      setMarkup(CACHE[name]);
      return;
    }
    let alive = true;
    fetch(BASE() + '/assets/icons/' + name + '.svg').then(r => r.text()).then(t => {
      const cleaned = t.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '');
      CACHE[name] = cleaned;
      if (alive) setMarkup(cleaned);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    className: className,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    },
    dangerouslySetInnerHTML: markup ? {
      __html: markup.replace('<svg', '<svg style="width:100%;height:100%;display:block"')
    } : undefined
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  gold: ['var(--gold-100)', 'var(--gold-700)', 'var(--gold-500)'],
  maroon: ['var(--maroon-100)', 'var(--maroon-700)', 'var(--maroon-200)'],
  veg: ['#E7F2E6', 'var(--veg)', '#BFDCBD'],
  nonveg: ['#F7E5E5', 'var(--nonveg)', '#E4BDBD'],
  spicy: ['#FBE6E0', 'var(--spicy)', '#F0C2B4'],
  neutral: ['var(--cream-200)', 'var(--ink-500)', 'var(--border-hairline)']
};

/** Small status/dietary marker. Soft by default; solid for one-per-card emphasis such as "Signature". */
function Badge({
  tone = 'gold',
  variant = 'soft',
  icon,
  children,
  style,
  ...rest
}) {
  const [bg, fg, line] = TONES[tone] || TONES.gold;
  const skin = variant === 'solid' ? {
    background: fg,
    color: 'var(--cream-50)',
    border: '1px solid ' + fg
  } : variant === 'outline' ? {
    background: 'transparent',
    color: fg,
    border: '1px solid ' + line
  } : {
    background: bg,
    color: fg,
    border: '1px solid ' + line
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      lineHeight: 1.6,
      whiteSpace: 'nowrap',
      ...skin,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '7px 14px',
    fontSize: 'var(--text-sm)',
    icon: 16,
    gap: 'var(--space-2)'
  },
  md: {
    padding: '11px 22px',
    fontSize: 'var(--text-base)',
    icon: 18,
    gap: 'var(--space-2)'
  },
  lg: {
    padding: '15px 32px',
    fontSize: 'var(--text-md)',
    icon: 20,
    gap: 'var(--space-3)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid var(--action-primary-bg)',
    boxShadow: 'var(--shadow-sm)'
  },
  secondary: {
    background: 'var(--action-secondary-bg)',
    color: 'var(--action-secondary-fg)',
    border: '1px solid var(--gold-500)',
    boxShadow: 'var(--shadow-sm)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--action-ghost-fg)',
    border: '1px solid var(--maroon-700)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--action-ghost-fg)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  onDark: {
    background: 'transparent',
    color: 'var(--gold-300)',
    border: '1px solid var(--gold-500)',
    boxShadow: 'none'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-bg-hover)',
    borderColor: 'var(--action-primary-bg-hover)'
  },
  secondary: {
    background: 'var(--action-secondary-bg-hover)'
  },
  outline: {
    background: 'var(--gold-100)'
  },
  ghost: {
    background: 'var(--gold-100)'
  },
  onDark: {
    background: 'rgba(224,165,38,0.16)'
  }
};

/** Primary action control. Rectangular with a 6px radius — the brand does not use pills for actions. */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...(disabled ? {
        background: 'var(--action-disabled-bg)',
        color: 'var(--action-disabled-fg)',
        border: '1px solid var(--action-disabled-bg)',
        boxShadow: 'none'
      } : null),
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 44,
  lg: 52
};

/** Square icon-only control. 44px default keeps it thumb-sized on the ordering surfaces. */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const tone = {
    ghost: {
      background: hover ? 'var(--gold-100)' : 'transparent',
      color: 'var(--maroon-700)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--gold-100)' : 'transparent',
      color: 'var(--maroon-700)',
      border: '1px solid var(--border-hairline)'
    },
    solid: {
      background: hover ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)',
      color: 'var(--gold-200)',
      border: '1px solid var(--maroon-700)'
    },
    onDark: {
      background: hover ? 'rgba(224,165,38,0.16)' : 'transparent',
      color: 'var(--gold-300)',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.45 : 1,
      ...tone,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = () => typeof window !== 'undefined' && window.HM_ASSET_BASE || '../..';
const SRC = {
  emblem: '/assets/logo-emblem-maroon.png',
  wordmark: '/assets/logo-wordmark-maroon.png',
  lockup: '/assets/logo-full-maroon.png'
};

/** The Hotel Mudaliyar mark. Always on a maroon field — the artwork carries its own maroon ground. */
function Logo({
  variant = 'lockup',
  height = 96,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: BASE() + SRC[variant],
    alt: "Hotel Mudaliyar",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Ornament.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rule-glyph-rule separator — the brand's borrowed-from-signage section break. */
function Ornament({
  glyph = 'utensils-crossed',
  tone = 'gold',
  width = '100%',
  style,
  ...rest
}) {
  const color = tone === 'gold' ? 'var(--gold-500)' : tone === 'maroon' ? 'var(--maroon-600)' : 'var(--cream-300)';
  const rule = {
    flex: 1,
    height: 1,
    background: 'linear-gradient(90deg, transparent, ' + color + ')'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: rule
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 18,
    color: color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rule,
      background: 'linear-gradient(90deg, ' + color + ', transparent)'
    }
  }));
}
Object.assign(__ds_scope, { Ornament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ornament.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bilingual section title: uppercase eyebrow, display headline, Tamil line. */
function SectionHeading({
  eyebrow,
  title,
  tamil,
  align = 'center',
  onDark = false,
  ornament = true,
  style,
  ...rest
}) {
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: centered ? 'center' : 'flex-start',
      textAlign: centered ? 'center' : 'left',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--gold-400)' : 'var(--gold-600)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-snug)',
      color: onDark ? 'var(--cream-100)' : 'var(--text-heading)',
      margin: 0,
      fontWeight: 400
    }
  }, title), tamil ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-md)',
      color: onDark ? 'var(--maroon-200)' : 'var(--text-muted)'
    }
  }, tamil) : null, ornament ? /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    tone: onDark ? 'gold' : 'gold',
    width: centered ? 180 : 120,
    style: {
      marginTop: 'var(--space-2)'
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selectable filter chip — the one place the brand uses a pill radius. */
function Tag({
  selected = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.02em',
      transition: 'var(--transition-control)',
      background: selected ? 'var(--maroon-700)' : hover ? 'var(--gold-100)' : 'var(--surface-card)',
      color: selected ? 'var(--gold-200)' : 'var(--maroon-700)',
      border: '1px solid ' + (selected ? 'var(--maroon-700)' : 'var(--border-hairline)'),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal on a maroon scrim. Cream plate, gold ornament under the title. */
function Dialog({
  open = true,
  title,
  tamilTitle,
  onClose,
  footer,
  children,
  width = 460,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(46,5,8,0.62)',
      backdropFilter: 'var(--blur-glass)',
      padding: 'var(--space-5)',
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-gold)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), tamilTitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, tamilTitle) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    style: {
      marginLeft: 'auto'
    },
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    tone: "gold",
    style: {
      margin: 'var(--space-4) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--cream-200)',
    fg: 'var(--teak-700)',
    line: 'var(--border-hairline)',
    icon: 'clock'
  },
  success: {
    bg: '#E7F2E6',
    fg: '#25562A',
    line: '#BFDCBD',
    icon: 'check'
  },
  warning: {
    bg: 'var(--gold-100)',
    fg: 'var(--gold-700)',
    line: 'var(--gold-300)',
    icon: 'flame'
  },
  danger: {
    bg: 'var(--maroon-100)',
    fg: 'var(--maroon-700)',
    line: 'var(--maroon-200)',
    icon: 'x'
  }
};

/** Inline message strip — service notices, closures, delivery windows. */
function Notice({
  tone = 'info',
  icon,
  title,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: t.bg,
      border: '1px solid ' + t.line,
      borderRadius: 'var(--radius-card)',
      color: t.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 20,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      marginBottom: 2
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6
    }
  }, children)));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square maroon checkbox with a gold tick. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-control)',
      background: checked ? 'var(--maroon-700)' : 'var(--surface-raised)',
      border: '1px solid ' + (checked ? 'var(--maroon-700)' : 'var(--border-hairline)')
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--gold-300)"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field on cream surfaces: 6px radius, hairline border, gold focus ring. */
function Input({
  label,
  hint,
  error,
  icon,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'in-' + (label || 'field').replace(/\s+/g, '-').toLowerCase();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '11px 14px',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--gold-500)' : 'var(--border-hairline)'),
      boxShadow: focus ? 'var(--shadow-gold-glow)' : 'none',
      transition: 'var(--transition-control)'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--ink-300)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 0,
      outline: 'none',
      background: 'transparent',
      width: '100%',
      font: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--status-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Minus / count / plus control for ordering surfaces. */
function QuantityStepper({
  value = 1,
  min = 0,
  max = 20,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const step = d => onChange && onChange(Math.min(max, Math.max(min, value + d)));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-raised)',
      padding: 2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    label: "Decrease",
    size: size === 'sm' ? 'sm' : 'md',
    onClick: () => step(-1),
    disabled: value <= min
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: 'center',
      fontWeight: 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: "Increase",
    size: size === 'sm' ? 'sm' : 'md',
    onClick: () => step(1),
    disabled: value >= max
  }));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select in the brand's field skin. */
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const fid = id || 'sel-' + (label || 'field').replace(/\s+/g, '-').toLowerCase();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    style: {
      appearance: 'none',
      width: '100%',
      padding: '11px 40px 11px 14px',
      font: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--ink-500)",
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none'
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/menu/DietDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  veg: 'var(--veg)',
  nonveg: 'var(--nonveg)',
  egg: 'var(--gold-600)'
};

/** FSSAI-style square dietary mark: outlined box with a filled dot. */
function DietDot({
  diet = 'veg',
  size = 14,
  style,
  ...rest
}) {
  const c = COLORS[diet] || COLORS.veg;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": diet,
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px solid ' + c,
      borderRadius: 2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.5,
      height: size * 0.5,
      borderRadius: '50%',
      background: c
    }
  }));
}
Object.assign(__ds_scope, { DietDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/DietDot.jsx", error: String((e && e.message) || e) }); }

// components/menu/DishCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Photo-led dish tile for hero rails and "signature dishes" grids. */
function DishCard({
  name,
  tamilName,
  price,
  image,
  diet = 'veg',
  badge,
  note,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    padding: "none",
    interactive: !!onClick,
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: image ? 'var(--cream-200) center / cover no-repeat url(' + image + ')' : 'var(--surface-sunken)',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-3)'
    }
  }, !image ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink-300)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, "Photograph") : null, badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    variant: "solid",
    style: {
      position: 'relative'
    }
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DietDot, {
    diet: diet,
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontWeight: 'var(--type-price-weight)',
      color: 'var(--text-price)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "\u20B9", price)), tamilName ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, tamilName) : null, note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, note) : null));
}
Object.assign(__ds_scope, { DishCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/DishCard.jsx", error: String((e && e.message) || e) }); }

// components/menu/MenuItemRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One dish line: diet dot, name (+ Tamil), leader dots, rupee price. */
function MenuItemRow({
  name,
  tamilName,
  price,
  diet = 'veg',
  note,
  badge,
  unit,
  onAdd,
  leaders = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) 0',
      borderBottom: '1px solid var(--border-dotted-menu)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.DietDot, {
    diet: diet,
    style: {
      transform: 'translateY(2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, name), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, unit) : null, badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    variant: "solid"
  }, badge) : null), tamilName ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, tamilName) : null, note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, note) : null), leaders && price != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 'var(--space-5)',
      borderBottom: '1px dotted var(--cream-300)',
      transform: 'translateY(-4px)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), price != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--type-price-weight)',
      color: 'var(--text-price)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, "\u20B9", price) : null, onAdd ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: 'Add ' + name,
    variant: "outline",
    size: "sm",
    onClick: onAdd
  }) : null);
}
Object.assign(__ds_scope, { MenuItemRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/MenuItemRow.jsx", error: String((e && e.message) || e) }); }

// components/menu/MenuSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Titled group of MenuItemRows with an optional service-window caption. */
function MenuSection({
  title,
  tamilTitle,
  meta,
  glyph = 'utensils',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)',
      margin: 0,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), tamilTitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-base)',
      color: 'var(--gold-700)'
    }
  }, tamilTitle) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, meta) : null), /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    glyph: glyph,
    tone: "gold",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { MenuSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/MenuSection.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Site header: maroon field, gold hairline base, emblem + bilingual wordmark, right-side CTA. */
function NavBar({
  items = [],
  active,
  onNavigate,
  cta,
  onCta,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      background: 'var(--maroon-800)',
      borderBottom: '1px solid var(--gold-600)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'var(--space-3) var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "emblem",
    height: 46,
    style: {
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--text-lg)',
      color: 'var(--gold-300)'
    }
  }, "Hotel Mudaliyar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-xs)',
      color: 'var(--maroon-200)',
      letterSpacing: '0.02em'
    }
  }, "\u0BB9\u0BCB\u0B9F\u0BCD\u0B9F\u0BB2\u0BCD \u0BAE\u0BC1\u0BA4\u0BB2\u0BBF\u0BAF\u0BBE\u0BB0\u0BCD \xB7 \u0BAE\u0BC7\u0BB2\u0BAE\u0B9F\u0BC8"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      type: "button",
      onClick: () => onNavigate && onNavigate(it),
      style: {
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        padding: '6px 0',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: on ? 'var(--gold-300)' : 'var(--cream-200)',
        borderBottom: '2px solid ' + (on ? 'var(--gold-500)' : 'transparent'),
        transition: 'var(--transition-control)'
      }
    }, it);
  }), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "phone",
    onClick: onCta
  }, cta) : null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search the menu",
    variant: "onDark",
    size: "sm"
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bottom tab bar for the ordering app. Cream plate, maroon active state. */
function TabBar({
  tabs = [],
  active,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + Math.max(tabs.length, 1) + ', 1fr)',
      background: 'var(--surface-raised)',
      borderTop: '1px solid var(--border-hairline)',
      padding: 'var(--space-2) 0 var(--space-3)',
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onSelect && onSelect(t.id),
      style: {
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: 'var(--space-2) 0',
        color: on ? 'var(--maroon-700)' : 'var(--ink-300)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase'
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu_card/MenuPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  MenuSection,
  MenuItemRow,
  Ornament,
  Badge
} = window.HotelMudaliyarDesignSystem_f1309a;
function MenuPage({
  sections,
  page,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 794,
      minHeight: 1123,
      background: 'var(--surface-card)',
      padding: '48px 56px',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-emblem-maroon.png",
    alt: "Hotel Mudaliyar",
    style: {
      height: 96,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 40,
      color: 'var(--maroon-700)',
      lineHeight: 1.1,
      marginTop: 8
    }
  }, "Hotel Mudaliyar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 18,
      color: 'var(--gold-700)'
    }
  }, "\u0BB9\u0BCB\u0B9F\u0BCD\u0B9F\u0BB2\u0BCD \u0BAE\u0BC1\u0BA4\u0BB2\u0BBF\u0BAF\u0BBE\u0BB0\u0BCD \xB7 \u0BAE\u0BC7\u0BB2\u0BAE\u0B9F\u0BC8, \u0BAE\u0BA4\u0BC1\u0BB0\u0BC8"), /*#__PURE__*/React.createElement(Ornament, {
    tone: "gold",
    style: {
      marginTop: 'var(--space-4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      flex: 1
    }
  }, sections.map(s => /*#__PURE__*/React.createElement(MenuSection, {
    key: s.title,
    title: s.title,
    tamilTitle: s.tamilTitle,
    meta: s.meta,
    glyph: s.glyph
  }, s.items.map(it => /*#__PURE__*/React.createElement(MenuItemRow, _extends({
    key: it.name
  }, it)))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Prices in \u20B9 \xB7 taxes as applicable"), /*#__PURE__*/React.createElement("span", null, "No. 1-A, Pandi Kovil Ring Road, Melamadai, Madurai 625020"), /*#__PURE__*/React.createElement("span", null, page, " / ", total)));
}
Object.assign(window, {
  MenuPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu_card/MenuPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu_card/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu_card/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/order_app/CartScreen.jsx
try { (() => {
const {
  QuantityStepper,
  Button,
  Card,
  DietDot,
  Ornament,
  Checkbox
} = window.HotelMudaliyarDesignSystem_f1309a;
function CartScreen({
  lines,
  onQty,
  onPlace
}) {
  const [pack, setPack] = React.useState(false);
  const subtotal = lines.reduce((n, l) => n + l.price * l.qty, 0);
  const packing = pack ? lines.length * 10 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      background: 'var(--maroon-800)',
      color: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)'
    }
  }, "Your order"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-xs)',
      color: 'var(--maroon-200)'
    }
  }, "\u0B86\u0BB0\u0BCD\u0B9F\u0BB0\u0BCD \u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, lines.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      textAlign: 'center',
      padding: 'var(--space-7) 0'
    }
  }, "Nothing added yet.") : null, lines.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.name,
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(DietDot, {
    diet: l.diet,
    size: 12
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)',
      fontSize: 'var(--text-base)'
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "\u20B9", l.price, " each")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: l.qty,
    size: "sm",
    onChange: v => onQty(l.name, v)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-price)',
      fontVariantNumeric: 'tabular-nums',
      minWidth: 54,
      textAlign: 'right'
    }
  }, "\u20B9", l.price * l.qty))))), lines.length ? /*#__PURE__*/React.createElement(Checkbox, {
    label: "Pack for takeaway (\u20B910 per item)",
    checked: pack,
    onChange: setPack
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "\u20B9", subtotal)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Packing"), /*#__PURE__*/React.createElement("span", null, "\u20B9", packing)), /*#__PURE__*/React.createElement(Ornament, {
    tone: "cream",
    style: {
      margin: 'var(--space-3) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-heading)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-price)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "\u20B9", subtotal + packing)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    iconRight: "arrow-right",
    disabled: !lines.length,
    onClick: () => onPlace(subtotal + packing)
  }, "Send to kitchen")));
}
Object.assign(window, {
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/order_app/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/order_app/MenuScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tag,
  MenuItemRow,
  Badge,
  Icon,
  Notice
} = window.HotelMudaliyarDesignSystem_f1309a;
function MenuScreen({
  menu,
  onAdd,
  counts
}) {
  const [cat, setCat] = React.useState(menu.sections[0].title);
  const section = menu.sections.find(s => s.title === cat) || menu.sections[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--maroon-800)',
      padding: 'var(--space-4) var(--space-4) var(--space-3)',
      color: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-emblem-maroon.png",
    alt: "",
    style: {
      height: 38,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--text-lg)',
      color: 'var(--gold-300)'
    }
  }, "Hotel Mudaliyar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--maroon-200)'
    }
  }, "Table 7 \xB7 Melamadai")), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    variant: "outline",
    style: {
      marginLeft: 'auto'
    }
  }, "Open"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      padding: 'var(--space-3) var(--space-4)',
      overflowX: 'auto',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, menu.sections.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s.title,
    selected: s.title === cat,
    onClick: () => setCat(s.title),
    style: {
      whiteSpace: 'nowrap'
    }
  }, s.title.replace(' Section', '').replace('Mudaliyar ', '')))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: section.glyph,
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-heading)'
    }
  }, section.title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-muted)'
    }
  }, section.meta)), section.items.map(it => /*#__PURE__*/React.createElement(MenuItemRow, _extends({
    key: it.name
  }, it, {
    onAdd: () => onAdd(it),
    note: counts[it.name] ? counts[it.name] + ' in cart' : null
  }))), section.title === 'Meals' ? /*#__PURE__*/React.createElement(Notice, {
    tone: "info",
    title: "Lunch only"
  }, "Veg meals are served 12:00\u20133:30 pm.") : null));
}
Object.assign(window, {
  MenuScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/order_app/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Logo,
  Ornament,
  Icon
} = window.HotelMudaliyarDesignSystem_f1309a;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--maroon-900)',
      padding: 'var(--space-8) var(--gutter-page) var(--space-6)',
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 64,
    style: {
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginLeft: 'auto',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hm-eyebrow",
    style: {
      color: 'var(--gold-400)'
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("span", null, "No. 1-A, Pandi Kovil Ring Road,", /*#__PURE__*/React.createElement("br", null), "Melamadai, Near PC Perungudi,", /*#__PURE__*/React.createElement("br", null), "Madurai 625020"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hm-eyebrow",
    style: {
      color: 'var(--gold-400)'
    }
  }, "Hours"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Breakfast 7:00\u201311:30 am", /*#__PURE__*/React.createElement("br", null), "Meals 12:00\u20133:30 pm", /*#__PURE__*/React.createElement("br", null), "Dinner 6:00\u201311:00 pm")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hm-eyebrow",
    style: {
      color: 'var(--gold-400)'
    }
  }, "Order"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Takeaway at the counter", /*#__PURE__*/React.createElement("br", null), "Delivery on Swiggy & Zomato", /*#__PURE__*/React.createElement("br", null), "Hall bookings by phone")))), /*#__PURE__*/React.createElement(Ornament, {
    tone: "gold",
    style: {
      margin: 'var(--space-6) 0 var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'var(--maroon-200)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Mudaliyar Idly Kadai, Goripalayam \xB7 since the 1960s"), /*#__PURE__*/React.createElement("span", {
    className: "hm-tamil"
  }, "\u0BB9\u0BCB\u0B9F\u0BCD\u0B9F\u0BB2\u0BCD \u0BAE\u0BC1\u0BA4\u0BB2\u0BBF\u0BAF\u0BBE\u0BB0\u0BCD"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Halls.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Input,
  Select,
  Checkbox,
  Button,
  Icon
} = window.HotelMudaliyarDesignSystem_f1309a;
function Halls({
  onSubmit
}) {
  const [ac, setAc] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter-page)',
      background: 'var(--maroon-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "Upstairs at Melamadai",
    title: "Ammaiyappan Hall",
    tamil: "\u0B85\u0BAE\u0BCD\u0BAE\u0BC8\u0BAF\u0BAA\u0BCD\u0BAA\u0BA9\u0BCD \u0BB9\u0BBE\u0BB2\u0BCD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-loose)'
    }
  }, "The first floor is a fully air-conditioned function hall for weddings, reception lunches and family functions. Catering comes from the same kitchen \u2014 meals, biryani and Chettinad starters at scale."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)'
    }
  }, [['users', '120 covers seated'], ['clock', 'Lunch & dinner slots'], ['utensils', 'Kitchen-side service'], ['map-pin', 'Lift access from the street']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      color: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    color: "var(--gold-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)'
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-4)'
    }
  }, "Enquire about a date"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile number",
    icon: "phone",
    placeholder: "98xx xxx xxx"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Function",
    options: ['Wedding reception', 'Betrothal lunch', 'Birthday', 'Company lunch']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "A/C hall required",
    checked: ac,
    onChange: setAc
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: onSubmit
  }, "Send enquiry"))))));
}
Object.assign(window, {
  Halls
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Halls.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Logo,
  Badge
} = window.HotelMudaliyarDesignSystem_f1309a;
function Hero({
  onMenu,
  onReserve
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--grad-maroon-field)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-storefront-melamadai.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '88px var(--gutter-page) 96px',
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    variant: "outline"
  }, "Melamadai, Madurai \xB7 Open since 22 Feb 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--cream-50)',
      margin: 'var(--space-4) 0 var(--space-3)'
    }
  }, "Madurai\u2019s late-night idly kadai, in a new home"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-tamil)',
      fontSize: 'var(--text-lg)',
      color: 'var(--gold-300)',
      margin: '0 0 var(--space-4)'
    }
  }, "\u0BB9\u0BCB\u0B9F\u0BCD\u0B9F\u0BB2\u0BCD \u0BAE\u0BC1\u0BA4\u0BB2\u0BBF\u0BAF\u0BBE\u0BB0\u0BCD \xB7 \u0BAE\u0BC7\u0BB2\u0BAE\u0B9F\u0BC8"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--cream-200)',
      lineHeight: 'var(--leading-loose)',
      maxWidth: 520
    }
  }, "Started in the 1960s by Late Thiru P. Kandasamy Mudaliyar as an evening stall beside the Goripalayam bus stand. It stayed open till 3 am for GH, American College and the Court. Same batter and same kheema, now on Pandi Kovil Ring Road."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onMenu
  }, "See the menu"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    iconLeft: "phone",
    onClick: onReserve
  }, "Reserve a table"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "emblem",
    height: 230,
    style: {
      borderRadius: '50%',
      boxShadow: 'var(--shadow-lg)'
    }
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuBoard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tag,
  MenuSection,
  MenuItemRow,
  SectionHeading,
  Notice,
  Button
} = window.HotelMudaliyarDesignSystem_f1309a;
function MenuBoard({
  menu
}) {
  const [filter, setFilter] = React.useState('All');
  const groups = ['All', 'Breakfast', 'Biryani', 'Starters', 'Parotta', 'Chinese'];
  const match = s => {
    if (filter === 'All') return true;
    if (filter === 'Breakfast') return /Idly|Dosa|Uthappam|Signature/.test(s.title);
    if (filter === 'Biryani') return /Biryani|Meals/.test(s.title);
    if (filter === 'Starters') return /Starters/.test(s.title);
    if (filter === 'Parotta') return /Parotta|Bread/.test(s.title);
    return /Chinese|Noodles/.test(s.title);
  };
  const shown = menu.sections.filter(match);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter-page)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "79 dishes \xB7 prices in rupees",
    title: "The Full Menu",
    tamil: "\u0B89\u0BA3\u0BB5\u0BC1 \u0BAA\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF\u0BB2\u0BCD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: 'var(--space-6) 0'
    }
  }, groups.map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g,
    selected: filter === g,
    onClick: () => setFilter(g)
  }, g))), /*#__PURE__*/React.createElement(Notice, {
    tone: "info",
    title: "Service windows"
  }, "Breakfast 7:00\u201311:30 am \xB7 Meals 12:00\u20133:30 pm \xB7 Dinner 6:00\u201311:00 pm. Kothu parotta from 6:00 pm."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-7)'
    }
  }, shown.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(MenuSection, {
    title: s.title,
    tamilTitle: s.tamilTitle,
    meta: s.meta,
    glyph: s.glyph
  }, s.items.map(it => /*#__PURE__*/React.createElement(MenuItemRow, _extends({
    key: it.name
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: "printer",
    onClick: () => window.print()
  }, "Print this menu"))));
}
Object.assign(window, {
  MenuBoard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuBoard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Signatures.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  DishCard,
  Ornament
} = window.HotelMudaliyarDesignSystem_f1309a;
const DISHES = [{
  name: 'Muttai Idli',
  tamilName: 'முட்டை இட்லி',
  price: 130,
  diet: 'egg',
  badge: 'Signature',
  note: 'The Goripalayam original. Idli steamed with egg.'
}, {
  name: 'Mutton Muttai Idli',
  price: 350,
  diet: 'nonveg',
  note: 'Muttai idli finished with mutton kheema masala.'
}, {
  name: 'Seeraga Samba Mutton Biryani',
  price: 300,
  diet: 'nonveg',
  badge: 'Signature',
  note: 'Short-grain seeraga samba, dum-cooked to order.'
}, {
  name: 'Madurai Spl. Parotta',
  price: 80,
  diet: 'veg',
  note: 'Two pieces, layered and slapped on the tawa.'
}];
function Signatures({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter-page)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What people come for",
    title: "Mudaliyar Signature Dishes",
    tamil: "\u0B9A\u0BBF\u0BB1\u0BAA\u0BCD\u0BAA\u0BC1 \u0B89\u0BA3\u0BB5\u0BC1\u0B95\u0BB3\u0BCD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, DISHES.map(d => /*#__PURE__*/React.createElement(DishCard, _extends({
    key: d.name
  }, d, {
    onClick: () => onOpen && onOpen(d)
  })))), /*#__PURE__*/React.createElement(Ornament, {
    glyph: "star",
    style: {
      marginTop: 'var(--space-7)'
    }
  })));
}
Object.assign(window, {
  Signatures
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Signatures.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Story.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Badge
} = window.HotelMudaliyarDesignSystem_f1309a;
const STORY_BASE = window.HM_ASSET_BASE || '../..';
const STEPS = [{
  year: '1960s',
  title: 'An evening stall at Goripalayam',
  body: 'Late Thiru P. Kandasamy Mudaliyar opened Mudaliyar Idly Kadai right next to the Goripalayam bus stand. It was a stall that opened in the evening and stayed open late.'
}, {
  year: 'The regulars',
  title: 'GH, American College, the Court',
  body: 'Doctors and attendants from the Government Hospital, students from American College, lawyers and clerks from the Court. The neighbourhood ate here after work.'
}, {
  year: 'Till 3 am',
  title: 'Madurai’s late-night idly',
  body: 'The kadai served until 3 in the morning. Film stars and public figures stopped in to eat or came by for takeaway.'
}, {
  year: '2004',
  title: 'On screen in Kadhal',
  body: 'முதலியார் இட்லி கடை appears in Kadhal, starring Bharath and Sandhya. Directed by Balaji Sakthivel, music by Joshua Sridhar.'
}, {
  year: 'In the press',
  title: 'The muttai idli, written up',
  body: 'The Tamil press wrote up the muttai idli: idli steamed with egg, sold at ₹20 a set. The kadai was also covered by Kumudam, Vasantham TV Singapore and Kairali TV.'
}, {
  year: '22 Feb 2026',
  title: 'Hotel Mudaliyar, Melamadai',
  body: 'The Goripalayam premises were acquired for the bridge construction. Mr K. Tamilselvan now runs the restaurant in a new three-floor building on Pandi Kovil Ring Road.'
}];
const PRESS = [{
  src: '/assets/press-goripalayam-poster.png',
  caption: 'Goripalayam menu board, with press and TV features',
  fit: 'cover',
  pos: 'top'
}, {
  src: '/assets/film-kadhal-2004.png',
  caption: 'The kadai in Kadhal (2004)',
  fit: 'cover',
  pos: 'center'
}, {
  src: '/assets/press-muttai-idli-column.png',
  caption: 'Newspaper column on the muttai idli',
  fit: 'cover',
  pos: 'top'
}];
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter-page)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Goripalayam \xB7 since the 1960s",
    title: "The idly kadai by the bus stand",
    tamil: "\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BA4\u0BC8"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.year,
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "maroon"
  }, s.year), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-heading)',
      margin: 'var(--space-3) 0 var(--space-2)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, s.body)))), /*#__PURE__*/React.createElement("div", {
    className: "hm-eyebrow",
    style: {
      marginTop: 'var(--space-8)',
      color: 'var(--text-muted)'
    }
  }, "As seen in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.6fr 0.7fr',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-3)'
    }
  }, PRESS.map(p => /*#__PURE__*/React.createElement("figure", {
    key: p.src,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      background: 'var(--maroon-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: STORY_BASE + p.src,
    alt: p.caption,
    style: {
      width: '100%',
      height: '100%',
      objectFit: p.fit,
      objectPosition: p.pos,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, p.caption))))));
}
Object.assign(window, {
  Story
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Story.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Ornament = __ds_scope.Ornament;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.DietDot = __ds_scope.DietDot;

__ds_ns.DishCard = __ds_scope.DishCard;

__ds_ns.MenuItemRow = __ds_scope.MenuItemRow;

__ds_ns.MenuSection = __ds_scope.MenuSection;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.TabBar = __ds_scope.TabBar;

})();

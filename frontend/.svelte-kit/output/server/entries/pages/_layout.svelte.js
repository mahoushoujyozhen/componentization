import { c as create_ssr_component, b as compute_rest_props, g as get_current_component, d as spread, e as escape_attribute_value, f as escape_object, h as add_attribute, i as getContext, s as setContext, v as validate_component, m as missing_component, j as globals, k as each, l as escape } from "../../chunks/index.js";
import { f as forwardEventsBuilder, c as classMap, R as Ripple, B as Button, A } from "../../chunks/index5.js";
import { e as exclude, p as prefixFilter } from "../../chunks/prefixFilter.js";
import { MDCFadingTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation } from "@material/tab-indicator";
import { L as Label } from "../../chunks/index4.js";
const TabIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "active",
    "type",
    "transition",
    "content$use",
    "content$class",
    "activate",
    "deactivate",
    "computeContentClientRect",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { type = "underline" } = $$props;
  let { transition = "slide" } = $$props;
  let { content$use = [] } = $$props;
  let { content$class = "" } = $$props;
  let element;
  let instance;
  let content;
  let internalClasses = {};
  let contentStyles = {};
  let changeSets = [];
  let oldTransition = transition;
  function getInstance() {
    const Foundation = {
      fade: MDCFadingTabIndicatorFoundation,
      slide: MDCSlidingTabIndicatorFoundation
    }[transition] || MDCSlidingTabIndicatorFoundation;
    return new Foundation({
      addClass: (...props) => doChange(() => addClass(...props)),
      removeClass: (...props) => doChange(() => removeClass(...props)),
      computeContentClientRect,
      setContentStyleProperty: (...props) => doChange(() => addContentStyle(...props))
    });
  }
  function doChange(fn) {
    if (changeSets.length) {
      changeSets[changeSets.length - 1].push(fn);
    } else {
      fn();
    }
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addContentStyle(name, value) {
    if (contentStyles[name] != value) {
      if (value === "" || value == null) {
        delete contentStyles[name];
        contentStyles = contentStyles;
      } else {
        contentStyles[name] = value;
      }
    }
  }
  function activate(previousIndicatorClientRect) {
    active = true;
    instance.activate(previousIndicatorClientRect);
  }
  function deactivate() {
    active = false;
    instance.deactivate();
  }
  function computeContentClientRect() {
    changeSets.push([]);
    changeSets = changeSets;
    return content.getBoundingClientRect();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.content$use === void 0 && $$bindings.content$use && content$use !== void 0)
    $$bindings.content$use(content$use);
  if ($$props.content$class === void 0 && $$bindings.content$class && content$class !== void 0)
    $$bindings.content$class(content$class);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.computeContentClientRect === void 0 && $$bindings.computeContentClientRect && computeContentClientRect !== void 0)
    $$bindings.computeContentClientRect(computeContentClientRect);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldTransition !== transition) {
      oldTransition = transition;
      instance && instance.destroy();
      internalClasses = {};
      contentStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (changeSets.length) {
      requestAnimationFrame(() => {
        var _a;
        const changeSet = (_a = changeSets.shift()) !== null && _a !== void 0 ? _a : [];
        changeSets = changeSets;
        for (const fn of changeSet) {
          fn();
        }
      });
    }
  }
  return `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tab-indicator": true,
          "mdc-tab-indicator--active": active,
          "mdc-tab-indicator--fade": transition === "fade",
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["content$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [content$class]: true,
          "mdc-tab-indicator__content": true,
          "mdc-tab-indicator__content--underline": type === "underline",
          "mdc-tab-indicator__content--icon": type === "icon"
        }))
      },
      {
        style: escape_attribute_value(Object.entries(contentStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      {
        "aria-hidden": escape_attribute_value(type === "icon" ? "true" : void 0)
      },
      escape_object(prefixFilter($$restProps, "content$"))
    ],
    {}
  )}${add_attribute("this", content, 0)}>${slots.default ? slots.default({}) : ``}</span>
</span>`;
});
const { Object: Object_1$1 } = globals;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "tab",
    "ripple",
    "stacked",
    "minWidth",
    "indicatorSpanOnlyContent",
    "href",
    "content$use",
    "content$class",
    "component",
    "activate",
    "deactivate",
    "focus",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { tab: tabId } = $$props;
  let { ripple = true } = $$props;
  let { stacked = false } = $$props;
  let { minWidth = false } = $$props;
  let { indicatorSpanOnlyContent = false } = $$props;
  let { href = void 0 } = $$props;
  let { content$use = [] } = $$props;
  let { content$class = "" } = $$props;
  let element;
  let instance;
  let content;
  let tabIndicator;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let focusOnActivate = getContext("SMUI:tab:focusOnActivate");
  let active = tabId === getContext("SMUI:tab:initialActive");
  let forceAccessible = false;
  let { component = href == null ? Button : A } = $$props;
  setContext("SMUI:label:context", "tab");
  setContext("SMUI:icon:context", "tab");
  if (!tabId) {
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function activate(previousIndicatorClientRect, skipFocus) {
    active = true;
    if (skipFocus) {
      instance.setFocusOnActivate(false);
    }
    instance.activate(previousIndicatorClientRect);
    if (skipFocus) {
      instance.setFocusOnActivate(focusOnActivate);
    }
  }
  function deactivate() {
    active = false;
    instance.deactivate();
  }
  function focus() {
    getElement().focus();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.tab === void 0 && $$bindings.tab && tabId !== void 0)
    $$bindings.tab(tabId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.minWidth === void 0 && $$bindings.minWidth && minWidth !== void 0)
    $$bindings.minWidth(minWidth);
  if ($$props.indicatorSpanOnlyContent === void 0 && $$bindings.indicatorSpanOnlyContent && indicatorSpanOnlyContent !== void 0)
    $$bindings.indicatorSpanOnlyContent(indicatorSpanOnlyContent);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.content$use === void 0 && $$bindings.content$use && content$use !== void 0)
    $$bindings.content$use(content$use);
  if ($$props.content$class === void 0 && $$bindings.content$class && content$class !== void 0)
    $$bindings.content$class(content$class);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-tab": true,
            "mdc-tab--active": active,
            "mdc-tab--stacked": stacked,
            "mdc-tab--min-width": minWidth,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        { role: "tab" },
        {
          "aria-selected": active ? "true" : "false"
        },
        {
          tabindex: active || forceAccessible ? "0" : "-1"
        },
        { href },
        internalAttrs,
        exclude($$restProps, ["content$", "tabIndicator$"]),
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span${spread(
            [
              {
                class: escape_attribute_value(classMap({
                  [content$class]: true,
                  "mdc-tab__content": true
                }))
              },
              escape_object(prefixFilter($$restProps, "content$"))
            ],
            {}
          )}${add_attribute("this", content, 0)}>${slots.default ? slots.default({}) : ``}
    ${indicatorSpanOnlyContent ? `${validate_component(TabIndicator, "TabIndicator").$$render(
            $$result,
            Object_1$1.assign({ active }, prefixFilter($$restProps, "tabIndicator$"), { this: tabIndicator }),
            {
              this: ($$value) => {
                tabIndicator = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots["tab-indicator"] ? slots["tab-indicator"]({}) : ``}`;
              }
            }
          )}` : ``}</span>
  ${!indicatorSpanOnlyContent ? `${validate_component(TabIndicator, "TabIndicator").$$render(
            $$result,
            Object_1$1.assign({ active }, prefixFilter($$restProps, "tabIndicator$"), { this: tabIndicator }),
            {
              this: ($$value) => {
                tabIndicator = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots["tab-indicator"] ? slots["tab-indicator"]({}) : ``}`;
              }
            }
          )}` : ``}
  <span class="${"mdc-tab__ripple"}"></span>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const TabScroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "align",
    "scrollArea$use",
    "scrollArea$class",
    "scrollContent$use",
    "scrollContent$class",
    "getScrollPosition",
    "getScrollContentWidth",
    "incrementScroll",
    "scrollTo",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = void 0 } = $$props;
  let { scrollArea$use = [] } = $$props;
  let { scrollArea$class = "" } = $$props;
  let { scrollContent$use = [] } = $$props;
  let { scrollContent$class = "" } = $$props;
  let element;
  let instance;
  let scrollArea;
  let scrollContent;
  let internalClasses = {};
  let scrollAreaClasses = {};
  let scrollAreaStyles = {};
  let scrollContentStyles = {};
  function getScrollPosition() {
    return instance.getScrollPosition();
  }
  function getScrollContentWidth() {
    return scrollContent.offsetWidth;
  }
  function incrementScroll(scrollXIncrement) {
    instance.incrementScroll(scrollXIncrement);
  }
  function scrollTo(scrollX) {
    instance.scrollTo(scrollX);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.scrollArea$use === void 0 && $$bindings.scrollArea$use && scrollArea$use !== void 0)
    $$bindings.scrollArea$use(scrollArea$use);
  if ($$props.scrollArea$class === void 0 && $$bindings.scrollArea$class && scrollArea$class !== void 0)
    $$bindings.scrollArea$class(scrollArea$class);
  if ($$props.scrollContent$use === void 0 && $$bindings.scrollContent$use && scrollContent$use !== void 0)
    $$bindings.scrollContent$use(scrollContent$use);
  if ($$props.scrollContent$class === void 0 && $$bindings.scrollContent$class && scrollContent$class !== void 0)
    $$bindings.scrollContent$class(scrollContent$class);
  if ($$props.getScrollPosition === void 0 && $$bindings.getScrollPosition && getScrollPosition !== void 0)
    $$bindings.getScrollPosition(getScrollPosition);
  if ($$props.getScrollContentWidth === void 0 && $$bindings.getScrollContentWidth && getScrollContentWidth !== void 0)
    $$bindings.getScrollContentWidth(getScrollContentWidth);
  if ($$props.incrementScroll === void 0 && $$bindings.incrementScroll && incrementScroll !== void 0)
    $$bindings.incrementScroll(incrementScroll);
  if ($$props.scrollTo === void 0 && $$bindings.scrollTo && scrollTo !== void 0)
    $$bindings.scrollTo(scrollTo);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tab-scroller": true,
          "mdc-tab-scroller--align-start": align === "start",
          "mdc-tab-scroller--align-end": align === "end",
          "mdc-tab-scroller--align-center": align === "center",
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["scrollArea$", "scrollContent$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [scrollArea$class]: true,
          "mdc-tab-scroller__scroll-area": true,
          ...scrollAreaClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(scrollAreaStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      escape_object(prefixFilter($$restProps, "scrollArea$"))
    ],
    {}
  )}${add_attribute("this", scrollArea, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [scrollContent$class]: true,
          "mdc-tab-scroller__scroll-content": true
        }))
      },
      {
        style: escape_attribute_value(Object.entries(scrollContentStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      escape_object(prefixFilter($$restProps, "scrollContent$"))
    ],
    {}
  )}${add_attribute("this", scrollContent, 0)}>${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
const { Object: Object_1 } = globals;
const TabBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "tabs",
    "key",
    "focusOnActivate",
    "focusOnProgrammatic",
    "useAutomaticActivation",
    "active",
    "scrollIntoView",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { tabs = [] } = $$props;
  let { key = (tab) => tab } = $$props;
  let { focusOnActivate = true } = $$props;
  let { focusOnProgrammatic = false } = $$props;
  let { useAutomaticActivation = true } = $$props;
  let { active = void 0 } = $$props;
  let element;
  let instance;
  let tabScroller;
  let activeIndex = tabs.indexOf(active);
  let tabAccessorMap = {};
  let tabAccessorWeakMap = /* @__PURE__ */ new WeakMap();
  setContext("SMUI:tab:focusOnActivate", focusOnActivate);
  setContext("SMUI:tab:initialActive", active);
  function scrollIntoView(index) {
    instance.scrollIntoView(index);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.focusOnActivate === void 0 && $$bindings.focusOnActivate && focusOnActivate !== void 0)
    $$bindings.focusOnActivate(focusOnActivate);
  if ($$props.focusOnProgrammatic === void 0 && $$bindings.focusOnProgrammatic && focusOnProgrammatic !== void 0)
    $$bindings.focusOnProgrammatic(focusOnProgrammatic);
  if ($$props.useAutomaticActivation === void 0 && $$bindings.useAutomaticActivation && useAutomaticActivation !== void 0)
    $$bindings.useAutomaticActivation(useAutomaticActivation);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.scrollIntoView === void 0 && $$bindings.scrollIntoView && scrollIntoView !== void 0)
    $$bindings.scrollIntoView(scrollIntoView);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (active !== tabs[activeIndex]) {
        activeIndex = tabs.indexOf(active);
      }
    }
    {
      if (tabs.length) {
        const accessor = tabs[0] instanceof Object ? tabAccessorWeakMap.get(tabs[0]) : tabAccessorMap[tabs[0]];
        if (accessor) {
          accessor.forceAccessible(activeIndex === -1);
        }
      }
    }
    $$rendered = `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({ [className]: true, "mdc-tab-bar": true }))
        },
        { role: "tablist" },
        escape_object(exclude($$restProps, ["tabScroller$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${validate_component(TabScroller, "TabScroller").$$render(
      $$result,
      Object_1.assign(prefixFilter($$restProps, "tabScroller$"), { this: tabScroller }),
      {
        this: ($$value) => {
          tabScroller = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(tabs, (tab) => {
            return `${slots.default ? slots.default({ tab }) : ``}`;
          })}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".header.svelte-13aygw3{display:flex;flex-direction:row;justify-content:space-between;padding:0px 10px}.nav.svelte-13aygw3{width:500px;height:60px;margin:auto}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active = "Home";
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"header svelte-13aygw3"}">

	
	<div class="${"nav svelte-13aygw3"}">
		${validate_component(TabBar, "TabBar").$$render(
      $$result,
      {
        tabs: ["\u767B\u5F55", "\u4FE1\u606F\u7BA1\u7406", "\u6587\u4EF6\u7BA1\u7406", "\u7528\u6237\u804A\u5929"],
        active
      },
      {
        active: ($$value) => {
          active = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ tab }) => {
          return `
			${validate_component(Tab, "Tab").$$render($$result, { tab }, {}, {
            default: () => {
              return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(tab)}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div>	

	
</header>`;
  } while (!$$settled);
  return $$rendered;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1bwzyxf{display:flex;flex-direction:column;min-height:100vh}main.svelte-1bwzyxf{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1bwzyxf{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1bwzyxf{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1bwzyxf"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-1bwzyxf"}">${slots.default ? slots.default({}) : ``}</main>
	
	<footer class="${"svelte-1bwzyxf"}"><p>create by HZ</p></footer>
</div>`;
});
export {
  Layout as default
};
